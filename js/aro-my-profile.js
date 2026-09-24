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

  // --- Toast ---
  function showToast(msg) {
    document.getElementById('toastMsg').textContent = msg;
    var t = document.getElementById('successToast');
    t.classList.remove('hidden');
    setTimeout(function() { t.classList.add('hidden'); }, 4000);
  }

  // --- Edit Profile Toggle ---
  var editing = false;
  document.getElementById('editProfileBtn').addEventListener('click', function() { toggleEdit(); });
  document.getElementById('cancelEditBtn').addEventListener('click', function() { toggleEdit(); });

  function toggleEdit() {
    editing = !editing;
    document.querySelectorAll('.view-field').forEach(function(el) { el.classList.toggle('hidden', editing); });
    document.querySelectorAll('.edit-field').forEach(function(el) { el.classList.toggle('hidden', !editing); });
    document.getElementById('editActions').classList.toggle('hidden', !editing);
    if (editing) {
      document.getElementById('editProfileBtn').classList.add('hidden');
    } else {
      document.getElementById('editProfileBtn').classList.remove('hidden');
    }
  }

  // --- Save Profile ---
  document.getElementById('saveProfileBtn').addEventListener('click', function() {
    var fields = document.querySelectorAll('.edit-field');
    fields.forEach(function(input) {
      var viewField = input.parentElement.querySelector('.view-field');
      if (viewField) viewField.textContent = input.value;
    });
    toggleEdit();
    showToast('Profile updated successfully.');
  });

  // --- Profile Photo Upload ---
  document.getElementById('profilePhotoInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    if (!file) return;
    if (file.size > 1048576) { alert('File too large. Maximum size is 1MB.'); return; }
    var reader = new FileReader();
    reader.onload = function(ev) {
      var img = document.getElementById('avatarImg');
      img.src = ev.target.result;
      img.classList.remove('hidden');
      document.getElementById('avatarInitials').classList.add('hidden');
      document.getElementById('removePhotoBtn').classList.remove('hidden');
      showToast('Profile photo updated.');
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('removePhotoBtn').addEventListener('click', function() {
    document.getElementById('avatarImg').src = '';
    document.getElementById('avatarImg').classList.add('hidden');
    document.getElementById('avatarInitials').classList.remove('hidden');
    this.classList.add('hidden');
    document.getElementById('profilePhotoInput').value = '';
    showToast('Profile photo removed.');
  });

  // --- Logout ---
  document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
      alert('You have been logged out.');
      window.location.href = '../index.html';
    }
  });
})();
