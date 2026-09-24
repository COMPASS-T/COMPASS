// --- Global functions (called from inline onclick in HTML) ---
function togglePw(id, btn) {
  var inp = document.getElementById(id);
  var off = btn.querySelector('.pw-eye-off');
  var on = btn.querySelector('.pw-eye');
  if (inp.type === 'password') { inp.type = 'text'; off.classList.add('hidden'); on.classList.remove('hidden'); }
  else { inp.type = 'password'; off.classList.remove('hidden'); on.classList.add('hidden'); }
}
function showToast(msg) {
  document.getElementById('toastMsg').textContent = msg;
  var t = document.getElementById('successToast');
  t.classList.remove('hidden');
  setTimeout(function() { t.classList.add('hidden'); }, 4000);
}
function showError(msg) {
  document.getElementById('errorToastMsg').textContent = msg;
  var t = document.getElementById('errorToast');
  t.classList.remove('hidden');
  setTimeout(function() { t.classList.add('hidden'); }, 4000);
}

// --- Main logic ---
(function() {
  // --- Header Dropdowns ---
  document.getElementById('avatarBtn').addEventListener('click', function() { closeAll(); document.getElementById('userDropdown').classList.toggle('hidden'); });
  document.getElementById('notifBtn').addEventListener('click', function() { closeAll(); document.getElementById('notifDropdown').classList.toggle('hidden'); });
  document.getElementById('markAllReadBtn').addEventListener('click', function() { document.querySelectorAll('.notif-dot').forEach(function(d) { d.classList.add('hidden'); }); document.getElementById('notifBadge').classList.add('hidden'); });
  document.getElementById('searchInput').addEventListener('focus', function() { closeAll(); document.getElementById('searchDropdown').classList.remove('hidden'); });
  function closeAll() { document.getElementById('userDropdown').classList.add('hidden'); document.getElementById('notifDropdown').classList.add('hidden'); document.getElementById('searchDropdown').classList.add('hidden'); }
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#avatarBtn') && !e.target.closest('#userDropdown')) document.getElementById('userDropdown').classList.add('hidden');
    if (!e.target.closest('#notifBtn') && !e.target.closest('#notifDropdown')) document.getElementById('notifDropdown').classList.add('hidden');
    if (!e.target.closest('#searchContainer')) document.getElementById('searchDropdown').classList.add('hidden');
  });

  // --- Reactive Password Validation ---
  var pw1 = document.getElementById('pw1');
  var pw2 = document.getElementById('pw2');
  var pw3 = document.getElementById('pw3');
  var lengthError = document.getElementById('pwLengthError');
  var matchError = document.getElementById('pwMatchError');

  pw2.addEventListener('input', function() {
    var val = pw2.value;
    if (val.length > 0 && val.length < 8) {
      lengthError.classList.remove('hidden');
      lengthError.textContent = 'Password must be at least 8 characters. (' + val.length + '/8)';
      lengthError.className = 'mt-1.5 text-[12px] text-red-500';
      pw2.classList.add('border-red-400');
      pw2.classList.remove('border-gray-200');
    } else if (val.length >= 8) {
      lengthError.classList.remove('hidden');
      lengthError.textContent = '\u2713 Password length is valid.';
      lengthError.className = 'mt-1.5 text-[12px] text-green-600 font-medium';
      pw2.classList.remove('border-red-400');
      pw2.classList.add('border-gray-200');
    } else {
      lengthError.classList.add('hidden');
      lengthError.className = 'mt-1.5 text-[12px] text-red-500 hidden';
      pw2.classList.remove('border-red-400');
      pw2.classList.add('border-gray-200');
    }
    checkMatch();
  });

  pw3.addEventListener('input', function() { checkMatch(); });

  function checkMatch() {
    if (pw3.value.length > 0 && pw2.value.length > 0) {
      matchError.classList.remove('hidden');
      if (pw3.value === pw2.value) {
        matchError.textContent = '\u2713 Passwords match';
        matchError.className = 'mt-1.5 text-[12px] text-green-600 font-medium';
        pw3.classList.remove('border-red-400');
        pw3.classList.add('border-gray-200');
      } else {
        matchError.textContent = '\u2717 Passwords do not match';
        matchError.className = 'mt-1.5 text-[12px] text-red-500';
        pw3.classList.add('border-red-400');
        pw3.classList.remove('border-gray-200');
      }
    } else {
      matchError.classList.add('hidden');
      pw3.classList.remove('border-red-400');
      pw3.classList.add('border-gray-200');
    }
  }

  // --- Update Password Button ---
  document.getElementById('updatePwBtn').addEventListener('click', function() {
    var current = pw1.value;
    var newPw = pw2.value;
    var confirmPw = pw3.value;

    if (!current) { showError('Please enter your current password.'); pw1.focus(); return; }
    if (!newPw) { showError('Please enter a new password.'); pw2.focus(); return; }
    if (newPw.length < 8) {
      showError('Password must be at least 8 characters.');
      pw2.focus();
      lengthError.classList.remove('hidden');
      lengthError.textContent = 'Password must be at least 8 characters. (' + newPw.length + '/8)';
      lengthError.className = 'mt-1.5 text-[12px] text-red-500';
      pw2.classList.add('border-red-400');
      pw2.classList.remove('border-gray-200');
      return;
    }
    if (!confirmPw) { showError('Please confirm your new password.'); pw3.focus(); return; }
    if (newPw !== confirmPw) {
      showError('New passwords do not match.');
      pw3.focus();
      matchError.classList.remove('hidden');
      matchError.textContent = '\u2717 Passwords do not match';
      matchError.className = 'mt-1.5 text-[12px] text-red-500';
      pw3.classList.add('border-red-400');
      pw3.classList.remove('border-gray-200');
      return;
    }

    pw1.value = ''; pw2.value = ''; pw3.value = '';
    lengthError.classList.add('hidden');
    lengthError.className = 'mt-1.5 text-[12px] text-red-500 hidden';
    matchError.classList.add('hidden');
    pw2.classList.remove('border-red-400'); pw2.classList.add('border-gray-200');
    pw3.classList.remove('border-red-400'); pw3.classList.add('border-gray-200');
    showToast('Password updated successfully!');
  });

  // --- Logout ---
  document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
      alert('You have been logged out.');
      window.location.href = '../index.html';
    }
  });
})();
