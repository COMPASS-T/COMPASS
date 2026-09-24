// ===== CLOSE ALL DROPDOWNS =====
function closeAllDropdowns() {
  document.getElementById('notifDropdown').classList.add('hidden');
  document.getElementById('userDropdown').classList.add('hidden');
  document.getElementById('searchDropdown').classList.add('hidden');
}

// ===== NOTIFICATION BELL TOGGLE =====
document.getElementById('notifBtn').addEventListener('click', function(e) {
  e.stopPropagation();
  var dd = document.getElementById('notifDropdown');
  var wasHidden = dd.classList.contains('hidden');
  closeAllDropdowns();
  if (wasHidden) dd.classList.remove('hidden');
});

// ===== AVATAR TOGGLE =====
document.getElementById('avatarBtn').addEventListener('click', function(e) {
  e.stopPropagation();
  var dd = document.getElementById('userDropdown');
  var wasHidden = dd.classList.contains('hidden');
  closeAllDropdowns();
  if (wasHidden) dd.classList.remove('hidden');
});

// ===== SEARCH INPUT TOGGLE =====
document.getElementById('searchInput').addEventListener('focus', function() {
  closeAllDropdowns();
  document.getElementById('searchDropdown').classList.remove('hidden');
});

// ===== CLICK OUTSIDE TO CLOSE =====
document.addEventListener('click', function(e) {
  if (!e.target.closest('#notifWrap')) document.getElementById('notifDropdown').classList.add('hidden');
  if (!e.target.closest('#avatarBtn') && !e.target.closest('#userDropdown')) document.getElementById('userDropdown').classList.add('hidden');
  if (!e.target.closest('#searchContainer')) document.getElementById('searchDropdown').classList.add('hidden');
});

// ===== MARK ALL READ =====
document.getElementById('markAllReadBtn').addEventListener('click', function() {
  document.querySelectorAll('.notif-dot').forEach(function(d) { d.classList.add('hidden'); });
  document.getElementById('notifBadge').classList.add('hidden');
});

// ===== LOGOUT =====
document.getElementById('logoutBtn').addEventListener('click', function() {
  if (confirm('Are you sure you want to logout?')) {
    alert('You have been logged out.');
    window.location.href = '../index.html';
  }
});

// ===== TOAST HELPER =====
function showToast(msg) {
  var t = document.getElementById('successToast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.remove('hidden');
  setTimeout(function() { t.classList.add('hidden'); }, 3000);
}

// ===== SIDEBAR TOGGLE (MOBILE) =====
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('-translate-x-full');
  document.getElementById('sidebarOverlay').classList.toggle('hidden');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.add('-translate-x-full');
  document.getElementById('sidebarOverlay').classList.add('hidden');
}
document.querySelectorAll('#sidebar nav a').forEach(function(a) {
  a.addEventListener('click', function() { if (window.innerWidth < 1024) closeSidebar(); });
});

// ===== SHOW/HIDE PASSWORD TOGGLE =====
function togglePw(id, btn) {
  var inp = document.getElementById(id);
  var isHidden = inp.type === 'password';
  inp.type = isHidden ? 'text' : 'password';
  btn.querySelector('.pw-eye-off').classList.toggle('hidden', isHidden);
  btn.querySelector('.pw-eye').classList.toggle('hidden', !isHidden);
}
