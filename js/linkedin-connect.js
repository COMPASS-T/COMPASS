/* Opens LinkedIn sign-in in a centered popup window.
   Falls back to a normal full-page redirect if the popup is blocked. */
(function () {
  // intent: 'alumni' (default) or 'institution'. Institution accounts are created
  // with no role and wait for an Institution Admin to assign one.
  window.startLinkedInSignIn = function (intent) {
    if (!intent && typeof window.currentTab === 'string') intent = window.currentTab;
    intent = intent === 'institution' ? 'institution' : 'alumni';
    var url =
      (window.COMPASS_API_BASE || '') + '/api/auth/linkedin?intent=' + encodeURIComponent(intent);
    var w = 600;
    var h = 720;
    var base = window.top || window;
    var y = (base.outerHeight || 720) / 2 + (base.screenY || 0) - h / 2;
    var x = (base.outerWidth || 600) / 2 + (base.screenX || 0) - w / 2;

    var popup = window.open(
      url,
      'compass_linkedin',
      'width=' + w + ',height=' + h + ',left=' + Math.max(0, x) + ',top=' + Math.max(0, y)
    );

    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      // Popup blocked - do it as a normal redirect instead.
      window.location.href = url;
      return;
    }
    popup.focus();

    // When the popup finishes (it normally navigates the opener itself and
    // closes), pick up a signed-in session and route to the right dashboard.
    var timer = setInterval(function () {
      if (!popup.closed) return;
      clearInterval(timer);
      var token;
      try {
        token = localStorage.getItem('compassToken');
      } catch (e) {
        token = null;
      }
      if (!token) return;
      var api = (window.COMPASS_API_BASE || '') + '/api';
      fetch(api + '/auth/me', { headers: { Authorization: 'Bearer ' + token } })
        .then(function (r) {
          return r.ok ? r.json() : null;
        })
        .then(function (data) {
          var url =
            (data && data.user && data.user.dashboardUrl) || 'alumni/update-employment.html';
          window.location.href = url;
        })
        .catch(function () {
          window.location.href = 'alumni/update-employment.html';
        });
    }, 700);
  };
})();
