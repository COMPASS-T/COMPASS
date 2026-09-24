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

// ===== STEPPER SCROLL =====
function scrollToSection(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth' });
  el.classList.add('section-highlight');
  setTimeout(function() { el.classList.remove('section-highlight'); }, 1500);

  var sections = ['A', 'B', 'C'];
  var current = id.replace('section', '');
  sections.forEach(function(s) {
    var step = document.getElementById('step' + s);
    var label = document.getElementById('step' + s + 'Label');
    if (s === current) {
      step.classList.remove('border-gray-300', 'text-gray-400');
      step.classList.add('border-blue-600', 'text-blue-600');
      if (label) { label.classList.remove('text-gray-400'); label.classList.add('text-blue-600'); }
    } else {
      step.classList.remove('border-blue-600', 'text-blue-600');
      step.classList.add('border-gray-300', 'text-gray-400');
      if (label) { label.classList.remove('text-blue-600'); label.classList.add('text-gray-400'); }
    }
  });
}

// ===== SECTION VALIDATION & STEPPER UPDATE =====
function isSectionComplete(s) {
  var el = document.getElementById('section' + s);
  if (s === 'A') {
    var texts = el.querySelectorAll('input[type="text"][data-required="true"]');
    return Array.from(texts).every(function(i) { return i.value.trim() !== ''; });
  }
  if (s === 'B') {
    var texts = el.querySelectorAll('input[type="text"][data-required="true"]');
    var allText = Array.from(texts).every(function(i) { return i.value.trim() !== ''; });
    var sel = el.querySelector('select[data-required="true"]');
    var selOk = sel && sel.value !== '';
    var emp = document.querySelector('input[name="empStatus"]:checked') !== null;
    var rel = document.querySelector('input[name="jobRelated"]:checked') !== null;
    return allText && selOk && emp && rel;
  }
  if (s === 'C') {
    var fur = document.querySelector('input[name="furtherStudies"]:checked') !== null;
    var tas = el.querySelectorAll('textarea[data-required="true"]');
    var allTa = Array.from(tas).every(function(t) { return t.value.trim() !== ''; });
    return fur && allTa;
  }
  return false;
}

function updateStepper() {
  var sections = ['A', 'B', 'C'];
  var activeFound = false;
  sections.forEach(function(s) {
    var circle = document.getElementById('step' + s);
    var label = document.getElementById('step' + s + 'Label');
    var badge = document.getElementById('badge' + s);
    var done = isSectionComplete(s);
    if (done) { badge.classList.remove('hidden'); } else { badge.classList.add('hidden'); }
    if (done) {
      circle.className = 'w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold transition-all';
      circle.innerHTML = '&#10003;';
      label.className = 'text-[13px] font-semibold text-blue-600 transition-all hidden sm:inline';
    } else if (!activeFound) {
      circle.className = 'w-7 h-7 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center text-xs font-bold transition-all';
      circle.innerHTML = s;
      label.className = 'text-[13px] font-semibold text-blue-600 transition-all hidden sm:inline';
      activeFound = true;
    } else {
      circle.className = 'w-7 h-7 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center text-xs font-bold transition-all';
      circle.innerHTML = s;
      label.className = 'text-[13px] font-semibold text-gray-400 transition-all hidden sm:inline';
    }
  });
}

document.addEventListener('input', updateStepper);
document.addEventListener('change', updateStepper);
updateStepper();

// ===== SAVE DRAFT =====
function saveDraft() {
  var c = ['A', 'B', 'C'].filter(function(s) { return isSectionComplete(s); }).length;
  showToast('Draft saved! ' + c + ' of 3 sections completed.');
}

// ===== SUBMIT FORM =====
function submitForm() {
  var names = { A: 'Personal Info', B: 'Employment', C: 'Career Goals' };
  var inc = ['A', 'B', 'C'].filter(function(s) { return !isSectionComplete(s); });
  if (inc.length > 0) {
    var m = inc.map(function(s) { return 'Section ' + s + ' (' + names[s] + ')'; }).join('\n  • ');
    alert('Please complete all required fields:\n  • ' + m);
    scrollToSection('section' + inc[0]);
  } else {
    showToast('Employment information submitted successfully!');
  }
}
