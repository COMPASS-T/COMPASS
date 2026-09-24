/* Shared chrome for the Platform / Institution Administrator pages:
   sidebar toggle, header dropdowns and logout.

   Every lookup is optional so a page that omits part of the header still works
   rather than throwing and killing the rest of its script. */
(function () {
  function byId(id) { return document.getElementById(id); }
  function hide(el) { if (el) el.classList.add('hidden'); }
  function on(id, ev, fn) {
    var el = byId(id);
    if (el) el.addEventListener(ev, fn);
  }

  // ---- sidebar (mobile) ----
  window.toggleSidebar = function () {
    var sidebar = byId('sidebar');
    var overlay = byId('sidebarOverlay');
    if (sidebar) sidebar.classList.remove('-translate-x-full');
    if (overlay) overlay.classList.remove('hidden');
  };
  window.closeSidebar = function () {
    var sidebar = byId('sidebar');
    var overlay = byId('sidebarOverlay');
    if (sidebar) sidebar.classList.add('-translate-x-full');
    if (overlay) overlay.classList.add('hidden');
  };
  on('sidebarToggle', 'click', window.toggleSidebar);

  // ---- header dropdowns ----
  function closeAll() {
    hide(byId('userDropdown'));
    hide(byId('notifDropdown'));
    hide(byId('searchDropdown'));
  }

  on('avatarBtn', 'click', function (e) {
    e.stopPropagation();
    var dd = byId('userDropdown');
    var open = dd && !dd.classList.contains('hidden');
    closeAll();
    if (dd && !open) dd.classList.remove('hidden');
  });

  on('notifBtn', 'click', function (e) {
    e.stopPropagation();
    var dd = byId('notifDropdown');
    var open = dd && !dd.classList.contains('hidden');
    closeAll();
    if (dd && !open) dd.classList.remove('hidden');
  });

  on('searchInput', 'focus', function () {
    closeAll();
    var dd = byId('searchDropdown');
    if (dd) dd.classList.remove('hidden');
  });

  on('markAllReadBtn', 'click', function (e) {
    e.stopPropagation();
    document.querySelectorAll('.notif-dot').forEach(function (d) { d.style.display = 'none'; });
    var badge = byId('notifBadge');
    if (badge) badge.classList.add('hidden');
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#avatarBtn') && !e.target.closest('#userDropdown')) hide(byId('userDropdown'));
    if (!e.target.closest('#notifBtn') && !e.target.closest('#notifDropdown')) hide(byId('notifDropdown'));
    if (!e.target.closest('#searchContainer')) hide(byId('searchDropdown'));
  });

  // ---- logout ----
  on('logoutBtn', 'click', function () {
    if (!confirm('Are you sure you want to logout?')) return;
    try { localStorage.removeItem('compassToken'); } catch (err) { /* ignore */ }
    window.location.href = '../index.html';
  });
})();
