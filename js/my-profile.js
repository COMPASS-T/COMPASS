document.getElementById('avatarBtn').addEventListener('click',function(){closeAll();document.getElementById('userDropdown').classList.toggle('hidden')});
document.getElementById('notifBtn').addEventListener('click',function(){closeAll();document.getElementById('notifDropdown').classList.toggle('hidden')});
document.getElementById('markAllReadBtn').addEventListener('click',function(){document.querySelectorAll('.notif-dot').forEach(function(d){d.classList.add('hidden')});document.getElementById('notifBadge').classList.add('hidden')});
document.getElementById('searchInput').addEventListener('focus',function(){closeAll();document.getElementById('searchDropdown').classList.remove('hidden')});
function closeAll(){document.getElementById('userDropdown').classList.add('hidden');document.getElementById('notifDropdown').classList.add('hidden');document.getElementById('searchDropdown').classList.add('hidden')}
document.addEventListener('click',function(e){if(!e.target.closest('#avatarBtn')&&!e.target.closest('#userDropdown'))document.getElementById('userDropdown').classList.add('hidden');if(!e.target.closest('#notifBtn')&&!e.target.closest('#notifDropdown'))document.getElementById('notifDropdown').classList.add('hidden');if(!e.target.closest('#searchContainer'))document.getElementById('searchDropdown').classList.add('hidden')});
document.getElementById('logoutBtn').addEventListener('click',function(){if(confirm('Are you sure you want to logout?')){alert('You have been logged out.');window.location.href='../index.html'}});
function showToast(msg){var t=document.getElementById('successToast');document.getElementById('toastMsg').textContent=msg;t.classList.remove('hidden');setTimeout(function(){t.classList.add('hidden')},3000)}

var editing=false;
function toggleEdit(){editing=!editing;document.querySelectorAll('.edit-field').forEach(function(f){f.classList.toggle('hidden',!editing)});document.querySelectorAll('.view-field').forEach(function(f){f.classList.toggle('hidden',editing)});document.getElementById('editActions').classList.toggle('hidden',!editing);document.getElementById('editProfileBtn').innerHTML=editing?'<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>Cancel':'<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>Edit Profile'}
function saveProfile(){toggleEdit();showToast('Profile updated successfully!')}

// Profile Photo Upload
document.getElementById('profilePhotoInput').addEventListener('change',function(){
  var file=this.files[0];if(!file)return;
  if(file.size>5*1024*1024){alert('File too large. Max 5MB.');return}
  var reader=new FileReader();
  reader.onload=function(e){
    var img=document.getElementById('avatarImg');
    img.src=e.target.result;img.classList.remove('hidden');
    document.getElementById('avatarInitials').classList.add('hidden');
    document.getElementById('removePhotoBtn').classList.remove('hidden');
    showToast('Profile photo updated!');
  };
  reader.readAsDataURL(file);
});
document.getElementById('removePhotoBtn').addEventListener('click',function(){
  document.getElementById('avatarImg').classList.add('hidden');
  document.getElementById('avatarImg').src='';
  document.getElementById('avatarInitials').classList.remove('hidden');
  this.classList.add('hidden');
  document.getElementById('profilePhotoInput').value='';
  showToast('Profile photo removed.');
});

// LinkedIn
function linkLinkedIn(){
  var url=document.getElementById('linkedinInput').value.trim();
  if(!url){alert('Please enter your LinkedIn profile URL.');return}
  if(!url.includes('linkedin.com')){alert('Please enter a valid LinkedIn URL.');return}
  document.getElementById('linkedinUrl').textContent=url;
  document.getElementById('linkedinUrl').href=url;
  document.getElementById('linkedinVisitBtn').href=url;
  document.getElementById('linkedinNotLinked').classList.add('hidden');
  document.getElementById('linkedinLinked').classList.remove('hidden');
  showToast('LinkedIn account linked!');
}
function unlinkLinkedIn(){
  if(!confirm('Unlink your LinkedIn account?'))return;
  document.getElementById('linkedinNotLinked').classList.remove('hidden');
  document.getElementById('linkedinLinked').classList.add('hidden');
  document.getElementById('linkedinInput').value='';
  showToast('LinkedIn account unlinked.');
}


// ===== STATUS BUTTON =====
// The header status control was dropped in the responsive redesign, so these
// elements may be absent. Guard them: an uncaught null here aborts the whole
// script and would take the profile widgets further down with it.
(function () {
  var statusBtn = document.getElementById('statusBtn');
  var statusDropdown = document.getElementById('statusDropdown');
  if (!statusBtn || !statusDropdown) return;

  statusBtn.addEventListener('click', function () {
    closeAll();
    statusDropdown.classList.toggle('hidden');
  });
  document.querySelectorAll('.status-option').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var status = this.getAttribute('data-status');
      var btnDot = document.getElementById('statusBtnDot');
      var btnText = document.getElementById('statusBtnText');
      var avatarDot = document.getElementById('myStatusDot');
      var dropdownDot = document.getElementById('myStatusDotDropdown');
      var colorMap = { active: 'bg-green-500', dnd: 'bg-red-500', offline: 'bg-gray-400' };
      var labelMap = { active: 'Active', dnd: 'Dnd  ', offline: 'Offline' };
      if (btnDot) btnDot.className = 'w-[10px] h-[10px] rounded-full ' + colorMap[status] + ' shrink-0';
      if (btnText) btnText.textContent = labelMap[status];
      if (avatarDot) avatarDot.className = 'w-[10px] h-[10px] rounded-full border-2 border-gray-100 absolute -bottom-0.5 -right-0.5 ' + colorMap[status];
      if (dropdownDot) dropdownDot.className = 'w-[10px] h-[10px] rounded-full border-2 border-white absolute -bottom-0.5 -right-0.5 ' + colorMap[status];
      statusDropdown.classList.add('hidden');
      showToast('Status set to ' + labelMap[status]);
    });
  });
})();

//reactive
 function toggleSidebar(){document.getElementById('sidebar').classList.remove('-translate-x-full');document.getElementById('sidebarOverlay').classList.remove('hidden');}
 function closeSidebar(){document.getElementById('sidebar').classList.add('-translate-x-full');document.getElementById('sidebarOverlay').classList.add('hidden');}

// =========================================================================
// Shared helpers for the profile: session token, API base, escaping.
// =========================================================================
var COMPASS = (function () {
  var API = (window.COMPASS_API_BASE || '') + '/api';
  var ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

  function token() {
    try {
      return localStorage.getItem('compassToken') || sessionStorage.getItem('compassToken') || '';
    } catch (e) { return ''; }
  }
  function headers(json) {
    var h = { Authorization: 'Bearer ' + token() };
    if (json) h['Content-Type'] = 'application/json';
    return h;
  }
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"]/g, function (c) { return ESCAPES[c]; });
  }
  return { API: API, token: token, headers: headers, esc: esc, DOT: ' · ' };
})();


// =========================================================================
// DEGREES + JOBS/BUSINESSES
// Added from the small "+" beside Degree Program and Current Employer.
// Each entry is listed under that field and can be hidden individually.
// =========================================================================
var COMPASS_RECORDS = (function () {
  var API = COMPASS.API, esc = COMPASS.esc;
  var degreeList = document.getElementById('degreeList');
  var workList = document.getElementById('workList');
  if (!degreeList || !workList) return { refresh: function () {} };

  var cache = { degrees: [], work: [] };

  function line(kind, id, title, meta, on) {
    return (
      '<div class="flex items-center gap-2 text-[12px] ' + (on ? 'text-gray-700' : 'text-gray-400') + '">' +
      '<span class="w-1 h-1 rounded-full ' + (on ? 'bg-blue-500' : 'bg-gray-300') + ' shrink-0"></span>' +
      '<span class="flex-1 min-w-0 truncate">' + esc(title) +
      (meta ? ' <span class="text-gray-400">' + esc(meta) + '</span>' : '') +
      (on ? '' : ' <span class="px-1 py-0.5 rounded bg-gray-100 text-gray-500 text-[9px] font-semibold">Hidden</span>') +
      '</span>' +
      '<button type="button" class="rec-vis p-0.5 shrink-0 ' + (on ? 'text-blue-600' : 'text-gray-300') +
      '" data-kind="' + kind + '" data-id="' + id + '" data-on="' + (on ? '1' : '0') +
      '" title="' + (on ? 'Public - click to hide' : 'Hidden - click to show') + '">' +
      (on
        ? '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
        : '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>') +
      '</button>' +
      '<button type="button" class="rec-del p-0.5 shrink-0 text-gray-300 hover:text-red-500" data-kind="' + kind + '" data-id="' + id + '" title="Remove">' +
      '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg></button>' +
      '</div>'
    );
  }

  function renderDegrees() {
    degreeList.innerHTML = cache.degrees.map(function (g) {
      var meta = [g.level, g.yearGraduated].filter(Boolean).join(COMPASS.DOT);
      return line('degree', g.id, g.displayName || 'Degree', meta, g.visible !== false);
    }).join('');
  }
  function renderWork() {
    workList.innerHTML = cache.work.map(function (r) {
      var tag = r.type === 'BUSINESS' ? 'Business' : 'Job';
      var meta = [tag, r.isCurrent ? 'Current' : r.periodLabel].filter(Boolean).join(COMPASS.DOT);
      return line('work', r.id, r.jobTitle + ' - ' + r.company, meta, r.visible !== false);
    }).join('');
  }

  function loadDegrees() {
    return fetch(API + '/degrees/me', { headers: COMPASS.headers() })
      .then(function (r) { return r.ok ? r.json() : { degrees: [] }; })
      .then(function (d) { cache.degrees = d.degrees || []; renderDegrees(); });
  }
  function loadWork() {
    return fetch(API + '/employment/me', { headers: COMPASS.headers() })
      .then(function (r) { return r.ok ? r.json() : { records: [] }; })
      .then(function (d) { cache.work = d.records || []; renderWork(); });
  }
  function refresh() { return Promise.all([loadDegrees(), loadWork()]); }

  function loadPrograms() {
    return fetch(API + '/departments', { headers: COMPASS.headers() })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(function (d) {
        var sel = document.getElementById('degProgram');
        if (!sel) return;
        function add(p) {
          var o = document.createElement('option');
          o.value = p.code;
          o.textContent = p.name;
          sel.appendChild(o);
        }
        (d.departments || []).forEach(function (dept) { (dept.programs || []).forEach(add); });
        (d.unassignedPrograms || []).forEach(add);
      })
      .catch(function () {});
  }

  // ---- per-entry show / hide + remove ----
  function onClick(e) {
    var vis = e.target.closest('.rec-vis');
    if (vis) {
      var on = vis.getAttribute('data-on') === '1';
      var kind = vis.getAttribute('data-kind');
      var url = (kind === 'degree' ? '/degrees/' : '/employment/') + vis.getAttribute('data-id');
      fetch(API + url, {
        method: 'PATCH',
        headers: COMPASS.headers(true),
        body: JSON.stringify({ visible: !on })
      })
        .then(refresh)
        .then(function () {
          if (window.showToast) showToast(on ? 'Hidden from other alumni.' : 'Now public.');
        });
      return;
    }
    var del = e.target.closest('.rec-del');
    if (del) {
      if (!confirm('Remove this entry?')) return;
      var k = del.getAttribute('data-kind');
      var u = (k === 'degree' ? '/degrees/' : '/employment/') + del.getAttribute('data-id');
      fetch(API + u, { method: 'DELETE', headers: COMPASS.headers() }).then(refresh);
    }
  }
  degreeList.addEventListener('click', onClick);
  workList.addEventListener('click', onClick);

  // ---- modals ----
  function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
  function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

  document.getElementById('addDegreeBtn').addEventListener('click', function () { openModal('degreeModal'); });
  document.getElementById('addWorkBtn').addEventListener('click', function () { openModal('workModal'); });
  ['degCancel', 'degCancel2'].forEach(function (id) {
    document.getElementById(id).addEventListener('click', function () { closeModal('degreeModal'); });
  });
  ['workCancel', 'workCancel2'].forEach(function (id) {
    document.getElementById(id).addEventListener('click', function () { closeModal('workModal'); });
  });
  ['degreeModal', 'workModal'].forEach(function (id) {
    document.getElementById(id).addEventListener('click', function (e) {
      if (e.target === this) closeModal(id);
    });
  });

  document.getElementById('degreeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var code = document.getElementById('degProgram').value;
    var other = document.getElementById('degOther').value.trim();
    if (!code && !other) { alert('Pick a program or type the degree name.'); return; }
    var year = document.getElementById('degYear').value;
    fetch(API + '/degrees/me', {
      method: 'POST',
      headers: COMPASS.headers(true),
      body: JSON.stringify({
        programCode: code || undefined,
        programName: code ? undefined : other,
        level: document.getElementById('degLevel').value || undefined,
        school: document.getElementById('degSchool').value.trim() || undefined,
        yearGraduated: year ? Number(year) : undefined
      })
    })
      .then(function (r) { if (!r.ok) throw new Error('save failed'); return r.json(); })
      .then(function () {
        document.getElementById('degreeForm').reset();
        closeModal('degreeModal');
        return loadDegrees();
      })
      .catch(function () { alert('Could not save that degree.'); });
  });

  var workType = 'JOB';
  function setType(t) {
    workType = t;
    var on = 'flex-1 py-2 text-[12px] font-semibold text-gray-900 bg-gray-100 rounded-md';
    var off = 'flex-1 py-2 text-[12px] font-medium text-gray-500 rounded-md hover:bg-gray-50';
    document.getElementById('typeJobBtn').className = t === 'JOB' ? on : off;
    document.getElementById('typeBizBtn').className = t === 'BUSINESS' ? on : off;
    document.getElementById('workRoleLabel').textContent = t === 'BUSINESS' ? 'Your role' : 'Job title';
    document.getElementById('workCompanyLabel').textContent = t === 'BUSINESS' ? 'Business name' : 'Company';
  }
  document.getElementById('typeJobBtn').addEventListener('click', function () { setType('JOB'); });
  document.getElementById('typeBizBtn').addEventListener('click', function () { setType('BUSINESS'); });

  document.getElementById('workForm').addEventListener('submit', function (e) {
    e.preventDefault();
    fetch(API + '/employment/me', {
      method: 'POST',
      headers: COMPASS.headers(true),
      body: JSON.stringify({
        type: workType,
        jobTitle: document.getElementById('workTitle').value.trim(),
        company: document.getElementById('workCompany').value.trim(),
        industry: document.getElementById('workIndustry').value.trim() || undefined,
        location: document.getElementById('workPlace').value.trim() || undefined,
        isCurrent: document.getElementById('workCurrent').checked
      })
    })
      .then(function (r) { if (!r.ok) throw new Error('save failed'); return r.json(); })
      .then(function () {
        document.getElementById('workForm').reset();
        closeModal('workModal');
        setType('JOB');
        return loadWork();
      })
      .catch(function () { alert('Could not save that entry.'); });
  });

  if (COMPASS.token()) { loadPrograms(); refresh(); }
  return { refresh: refresh, counts: function () { return { degrees: cache.degrees.length, work: cache.work.length }; } };
})();


// =========================================================================
// PROFILE VISIBILITY
// Shows the alumnus their own information split into what the public sees
// and what stays hidden. Flipping a switch moves the item between the two.
// =========================================================================
(function () {
  var API = COMPASS.API, esc = COMPASS.esc;
  var STORAGE_KEY = 'compassProfileVisibility';

  // Mirror of src/lib/visibility.js VISIBILITY_FIELDS
  var FIELDS = [
    { key: 'email', label: 'Email address', group: 'Contact' },
    { key: 'phone', label: 'Contact number', group: 'Contact' },
    { key: 'address', label: 'Home address', group: 'Contact' },
    { key: 'linkedinUrl', label: 'LinkedIn profile', group: 'Contact' },
    { key: 'gender', label: 'Gender', group: 'Personal' },
    { key: 'civilStatus', label: 'Civil status', group: 'Personal' },
    { key: 'batchYear', label: 'Year graduated', group: 'Academic' },
    { key: 'degrees', label: 'Degrees earned', group: 'Academic' },
    { key: 'program', label: 'Degree program', group: 'Academic' },
    { key: 'employmentStatus', label: 'Employment status', group: 'Employment' },
    { key: 'currentJobTitle', label: 'Current position', group: 'Employment' },
    { key: 'currentCompany', label: 'Current employer', group: 'Employment' },
    { key: 'industry', label: 'Industry', group: 'Employment' },
    { key: 'workSetup', label: 'Work setup', group: 'Employment' },
    { key: 'workLocation', label: 'Work location', group: 'Employment' },
    { key: 'location', label: 'Location', group: 'Employment' },
    { key: 'employmentHistory', label: 'Jobs & businesses', group: 'Employment' }
  ];

  var state = {};   // key -> boolean
  var draft = {};   // working copy while the dialog is open
  var values = {};  // key -> the alumnus's actual value, for display

  function normalize(src) {
    var out = {};
    src = src && typeof src === 'object' ? src : {};
    FIELDS.forEach(function (f) {
      out[f.key] = typeof src[f.key] === 'boolean' ? src[f.key] : true;
    });
    return out;
  }
  function readLocal() {
    try { return normalize(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); }
    catch (e) { return normalize({}); }
  }
  function writeLocal(v) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(v)); } catch (e) {}
  }

  // Pull the alumnus's real values so the dialog shows information, not just labels.
  function loadValues() {
    if (!COMPASS.token()) return Promise.resolve();
    return fetch(API + '/auth/me', { headers: COMPASS.headers() })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        var u = d && d.user;
        var a = (u && u.alumni) || {};
        var counts = COMPASS_RECORDS.counts();
        values = {
          email: u && u.email,
          phone: a.phone,
          address: a.address,
          linkedinUrl: a.linkedinUrl,
          gender: a.gender,
          civilStatus: a.civilStatus,
          batchYear: a.batchYear,
          degrees: counts.degrees ? counts.degrees + ' listed' : null,
          program: a.program && a.program.name,
          employmentStatus: a.employmentStatus,
          currentJobTitle: a.currentJobTitle,
          currentCompany: a.currentCompany,
          industry: a.industry,
          workSetup: a.workSetup,
          workLocation: a.workLocation,
          location: a.location,
          employmentHistory: counts.work ? counts.work + ' listed' : null
        };
        if (u && u.alumni && u.alumni.visibility) {
          state = normalize(u.alumni.visibility);
          writeLocal(state);
        }
      })
      .catch(function () {});
  }

  function applyBadges() {
    document.querySelectorAll('[data-visrow]').forEach(function (rowEl) {
      var key = rowEl.getAttribute('data-visrow');
      var badge = rowEl.querySelector('.vis-badge');
      var hidden = state[key] === false;
      if (badge) badge.classList.toggle('hidden', !hidden);
      rowEl.classList.toggle('opacity-60', hidden);
    });
  }

  function itemHtml(f, on) {
    var v = values[f.key];
    var shown = v === null || v === undefined || v === '' ? null : String(v);
    return (
      '<label class="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">' +
      '<span class="flex-1 min-w-0">' +
      '<span class="block text-[12px] text-gray-500">' + esc(f.label) + '</span>' +
      '<span class="block text-[13px] font-medium ' + (shown ? 'text-gray-900' : 'text-gray-300') + ' truncate">' +
      (shown ? esc(shown) : 'Not set') + '</span>' +
      '</span>' +
      '<span class="relative inline-flex items-center shrink-0">' +
      '<input type="checkbox" class="vis-toggle sr-only peer" data-key="' + f.key + '"' + (on ? ' checked' : '') + '>' +
      '<span class="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition"></span>' +
      '<span class="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4"></span>' +
      '</span></label>'
    );
  }

  function renderList() {
    var container = document.getElementById('visibilityList');
    var pub = FIELDS.filter(function (f) { return draft[f.key] !== false; });
    var hid = FIELDS.filter(function (f) { return draft[f.key] === false; });

    function block(title, hint, colour, items) {
      return (
        '<p class="flex items-center gap-2 text-[11px] font-bold ' + colour + ' uppercase tracking-wide mt-4 mb-1 px-3">' +
        title + '<span class="font-normal normal-case tracking-normal text-gray-400">' + hint + '</span></p>' +
        (items.length
          ? items.map(function (f) { return itemHtml(f, draft[f.key] !== false); }).join('')
          : '<p class="text-[12px] text-gray-400 italic px-3 py-2">Nothing here.</p>')
      );
    }

    container.innerHTML =
      block('Public', '&middot; other alumni can see this', 'text-blue-600', pub) +
      block('Hidden', '&middot; only you and the Alumni Office', 'text-gray-500', hid);

    container.querySelectorAll('.vis-toggle').forEach(function (input) {
      input.addEventListener('change', function () {
        draft[this.getAttribute('data-key')] = this.checked;
        renderList();
      });
    });
  }

  window.openVisibilityModal = function () {
    draft = normalize(state);
    // Make sure the degree / work counts are current before we show them.
    Promise.resolve(COMPASS_RECORDS.refresh()).then(loadValues).then(function () {
      draft = normalize(state);
      renderList();
      document.getElementById('visibilityModal').classList.remove('hidden');
    });
  };
  window.closeVisibilityModal = function () {
    document.getElementById('visibilityModal').classList.add('hidden');
  };
  window.setAllVisibility = function (value) {
    FIELDS.forEach(function (f) { draft[f.key] = value; });
    renderList();
  };

  window.saveVisibility = function () {
    var btn = document.getElementById('visibilitySaveBtn');
    btn.disabled = true;
    btn.classList.add('opacity-70');

    function done(saved) {
      state = normalize(saved);
      writeLocal(state);
      applyBadges();
      btn.disabled = false;
      btn.classList.remove('opacity-70');
      window.closeVisibilityModal();
      var hiddenCount = FIELDS.filter(function (f) { return state[f.key] === false; }).length;
      if (window.showToast) {
        showToast(hiddenCount === 0
          ? 'Your whole profile is public.'
          : hiddenCount + ' item(s) hidden from other alumni.');
      }
    }

    if (!COMPASS.token()) { done(draft); return; }
    fetch(API + '/profile/me/visibility', {
      method: 'PUT',
      headers: COMPASS.headers(true),
      body: JSON.stringify({ visibility: draft })
    })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r); })
      .then(function (d) { done(d.visibility || draft); })
      .catch(function () { done(draft); });
  };

  document.getElementById('visibilityModal').addEventListener('click', function (e) {
    if (e.target === this) window.closeVisibilityModal();
  });

  state = readLocal();
  applyBadges();
  loadValues().then(applyBadges);
})();
