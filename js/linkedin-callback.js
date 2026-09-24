/* Handles the redirect back from LinkedIn:
   1. store the session token that the backend put in the URL fragment
   2. show the Terms & Conditions for brand-new accounts and record acceptance
   3. for alumni, optionally collect the core profile fields
   4. send the user to the dashboard that matches their role
*/
(function () {
  var API = (window.COMPASS_API_BASE || '') + '/api';
  // Replaced with the role's real dashboard once we've read /auth/me.
  var dashboard = 'alumni/update-employment.html';

  function parseHash() {
    var out = {};
    location.hash.replace(/^#/, '').split('&').forEach(function (pair) {
      if (!pair) return;
      var kv = pair.split('=');
      out[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || '');
    });
    return out;
  }

  function show(id) {
    ['loadingState', 'termsState', 'profileState', 'errorState'].forEach(function (s) {
      document.getElementById(s).classList.toggle('hidden', s !== id);
    });
  }

  function fail(msg) {
    document.getElementById('errorMsg').textContent = msg;
    show('errorState');
  }

  // Navigate to `target`. When we're running inside the popup opened from the
  // sign-in / register page, drive the opener window and close the popup.
  function navigate(target) {
    try {
      if (window.opener && !window.opener.closed && window.opener !== window) {
        window.opener.location.href = target;
        window.close();
        return;
      }
    } catch (e) {
      /* opener gone or blocked - fall through */
    }
    window.location.href = target;
  }

  function goToDashboard() {
    navigate(dashboard);
  }

  var params = parseHash();
  var token = params.token;

  if (!token) {
    fail('We could not complete your LinkedIn sign-in. Please try again.');
    return;
  }

  // Remove the token from the address bar.
  history.replaceState(null, '', location.pathname);

  var authHeader = { Authorization: 'Bearer ' + token };

  // Only persist the session once Terms & Conditions are satisfied, so closing
  // the popup on the Terms screen does not leave a usable token behind.
  function persistToken() {
    try {
      localStorage.setItem('compassToken', token);
    } catch (e) {
      /* ignore */
    }
  }

  function proceedAfterTerms() {
    persistToken();
    show('loadingState');
    fetch(API + '/auth/me', { headers: authHeader })
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(function (data) {
        var user = data && data.user;
        if (user && user.dashboardUrl) dashboard = user.dashboardUrl;
        var alumni = user && user.role === 'ALUMNI' && user.alumni;
        var missing =
          (user && user.completion && user.completion.missingCoreFields) || [];
        if (alumni && missing.length > 0) {
          // Pre-fill anything we already have.
          if (alumni.firstName) document.getElementById('firstName').value = alumni.firstName;
          if (alumni.lastName) document.getElementById('lastName').value = alumni.lastName;
          if (alumni.batchYear) document.getElementById('batchYear').value = alumni.batchYear;
          if (alumni.program) document.getElementById('programCode').value = alumni.program.code;
          if (alumni.address) document.getElementById('address').value = alumni.address;
          if (alumni.location) document.getElementById('location').value = alumni.location;
          show('profileState');
        } else {
          goToDashboard();
        }
      })
      .catch(goToDashboard);
  }

  // ---- Terms & Conditions ----
  document.getElementById('acceptBtn').addEventListener('click', function () {
    var btn = this;
    btn.disabled = true;
    btn.classList.add('opacity-70');
    document.getElementById('termsError').classList.add('hidden');
    fetch(API + '/auth/accept-terms', { method: 'POST', headers: authHeader })
      .then(function (r) {
        if (!r.ok) throw new Error('accept failed');
        return r.json();
      })
      .then(proceedAfterTerms)
      .catch(function () {
        btn.disabled = false;
        btn.classList.remove('opacity-70');
        document.getElementById('termsError').classList.remove('hidden');
      });
  });

  document.getElementById('declineBtn').addEventListener('click', function () {
    try {
      localStorage.removeItem('compassToken');
    } catch (e) {
      /* ignore */
    }
    navigate(
      'index.html?linkedin_error=' +
        encodeURIComponent('You must accept the Terms & Conditions to use COMPASS.')
    );
  });

  // ---- Optional batch / program ----
  document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var body = {};
    var fn = document.getElementById('firstName').value.trim();
    var ln = document.getElementById('lastName').value.trim();
    var by = document.getElementById('batchYear').value.trim();
    var pc = document.getElementById('programCode').value;
    var addr = document.getElementById('address').value.trim();
    var loc = document.getElementById('location').value.trim();
    if (fn) body.firstName = fn;
    if (ln) body.lastName = ln;
    if (by) body.batchYear = Number(by);
    if (pc) body.programCode = pc;
    if (addr) body.address = addr;
    if (loc) body.location = loc;

    if (Object.keys(body).length === 0) {
      goToDashboard();
      return;
    }
    var btn = document.getElementById('profileSaveBtn');
    var err = document.getElementById('profileError');
    btn.disabled = true;
    btn.classList.add('opacity-70');
    err.classList.add('hidden');
    fetch(API + '/profile/me', {
      method: 'PATCH',
      headers: Object.assign({ 'Content-Type': 'application/json' }, authHeader),
      body: JSON.stringify(body)
    })
      .then(function (r) {
        if (!r.ok) throw new Error('save failed');
        goToDashboard();
      })
      .catch(function () {
        btn.disabled = false;
        btn.classList.remove('opacity-70');
        err.textContent = 'Could not save. You can finish this later in My Profile.';
        err.classList.remove('hidden');
      });
  });

  document.getElementById('skipBtn').addEventListener('click', goToDashboard);

  // ---- Start ----
  if (params.terms === '1') {
    show('termsState');
  } else {
    proceedAfterTerms();
  }
})();
