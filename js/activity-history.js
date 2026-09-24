// ===== HEADER INTERACTIONS =====
document.getElementById('avatarBtn').addEventListener('click',function(){closeAll();document.getElementById('userDropdown').classList.toggle('hidden')});
document.getElementById('notifBtn').addEventListener('click',function(){closeAll();document.getElementById('notifDropdown').classList.toggle('hidden')});
document.getElementById('markAllReadBtn').addEventListener('click',function(){document.querySelectorAll('.notif-dot').forEach(function(d){d.classList.add('hidden')});document.getElementById('notifBadge').classList.add('hidden')});
document.getElementById('searchInput').addEventListener('focus',function(){closeAll();document.getElementById('searchDropdown').classList.remove('hidden')});
function closeAll(){document.getElementById('userDropdown').classList.add('hidden');document.getElementById('notifDropdown').classList.add('hidden');document.getElementById('searchDropdown').classList.add('hidden')}
document.addEventListener('click',function(e){if(!e.target.closest('#avatarBtn')&&!e.target.closest('#userDropdown'))document.getElementById('userDropdown').classList.add('hidden');if(!e.target.closest('#notifBtn')&&!e.target.closest('#notifDropdown'))document.getElementById('notifDropdown').classList.add('hidden');if(!e.target.closest('#searchContainer'))document.getElementById('searchDropdown').classList.add('hidden')});
document.getElementById('logoutBtn').addEventListener('click',function(){if(confirm('Are you sure you want to logout?')){alert('You have been logged out.');window.location.href='../index.html'}});

// ===== ACTIVITY DATA =====
// Each activity has detail info that shows when you click the row
var activities = [
  { date:'2026-08-16', time:'10:32 AM', type:'Survey', typeBg:'bg-blue-100 text-blue-700', desc:'Submitted Graduate Tracer Survey (Section A & B)', status:'Completed',
    detail: { action:'Submitted', page:'Tracer Survey', sections:'Section A (Graduate Profile) and Section B (Employment Information)', fields:'Full Name, Degree Program, Year Graduated, Civil Status, Gender, Address, Contact, Email, Employment Status, Job Title, Company, Industry, Work Location, Job Relevance', note:'All required fields were completed and validated. Responses saved to database.', link:'tracer-survey.html' }},
  { date:'2026-08-16', time:'09:15 AM', type:'Profile', typeBg:'bg-purple-100 text-purple-700', desc:'Updated employment information', status:'Completed',
    detail: { action:'Updated', page:'Update Employment', sections:'Section A (Personal Info) and Section B (Employment Details)', fields:'Job Title changed to "Jr. Software Developer", Company changed to "SGV & Co.", Industry set to "Information Technology"', note:'Employment record updated successfully. Previous record archived.', link:'update-employment.html' }},
  { date:'2026-08-16', time:'08:00 AM', type:'Login', typeBg:'bg-gray-100 text-gray-700', desc:'Account login from Chrome on Windows', status:'Completed',
    detail: { action:'Logged In', page:'Login Page', sections:'Authentication', fields:'Browser: Chrome 126.0 · OS: Windows 11 · IP: 192.168.1.*** · Location: Makati City, PH', note:'Successful login via email/password. Session duration: active.', link:'login-page.html' }},
  { date:'2026-08-15', time:'04:20 PM', type:'Feedback', typeBg:'bg-green-100 text-green-700', desc:'Started Competency Feedback form (Draft saved)', status:'In Progress',
    detail: { action:'Draft Saved', page:'Competency Feedback', sections:'Completed: Section A (Rating) · Incomplete: Section B (Comments)', fields:'Rated 8 out of 10 competency areas. Comments section left blank.', note:'Draft auto-saved. Return to complete remaining sections before deadline (Sep 30, 2026).', link:'competency-feedback.html' }},
  { date:'2026-08-15', time:'03:48 PM', type:'Feedback', typeBg:'bg-green-100 text-green-700', desc:'Submitted Curriculum Feedback form', status:'Completed',
    detail: { action:'Submitted', page:'Curriculum Feedback', sections:'All sections completed', fields:'Overall Rating: 4/5 · Strengths: Industry-aligned curriculum · Improvements: More hands-on labs · Additional Comments: Provided', note:'Feedback submitted and recorded. Thank you for your input.', link:'curriculum-feedback.html' }},
  { date:'2026-08-15', time:'01:10 PM', type:'Post', typeBg:'bg-indigo-100 text-indigo-700', desc:'Published a newsfeed post: "Joined Mentoring Program"', status:'Completed',
    detail: { action:'Published Post', page:'Newsfeed', sections:'Post Content', fields:'Title: "Joined Mentoring Program" · Category: Group · Related To: Mentoring Program · Included photo attachment', note:'Post is live on the community newsfeed. 1,000 likes received. 1 comment from Sarah Yuson.', link:'newsfeed.html' }},
  { date:'2026-08-14', time:'11:20 AM', type:'Document', typeBg:'bg-yellow-100 text-yellow-700', desc:'Downloaded Transcript of Records', status:'Completed',
    detail: { action:'Downloaded', page:'Documents', sections:'Academic Records', fields:'Document: Transcript of Records (TOR) · Format: PDF · File size: 245 KB', note:'Document downloaded successfully. Valid copy as of Aug 14, 2026.', link:'documents.html' }},
  { date:'2026-08-14', time:'09:30 AM', type:'Survey', typeBg:'bg-blue-100 text-blue-700', desc:'Saved Tracer Survey draft (Section C incomplete)', status:'In Progress',
    detail: { action:'Draft Saved', page:'Tracer Survey', sections:'Completed: Section A, B · Incomplete: Section C (Relevance), D (Competency), E (Recommendations)', fields:'6 of 18 total fields completed. Section C has 0/3 items rated.', note:'Draft saved. 3 sections remaining. Survey deadline: Oct 15, 2026.', link:'tracer-survey.html' }},
  { date:'2026-08-13', time:'02:05 PM', type:'Survey', typeBg:'bg-blue-100 text-blue-700', desc:'Started Graduate Tracer Survey (Draft saved)', status:'In Progress',
    detail: { action:'Started', page:'Tracer Survey', sections:'Completed: Section A (partial) · Incomplete: Sections B, C, D, E', fields:'3 of 18 fields completed (Full Name, Degree Program, Year Graduated)', note:'Initial draft created. Most sections still need to be filled out.', link:'tracer-survey.html' }},
  { date:'2026-08-13', time:'10:00 AM', type:'Profile', typeBg:'bg-purple-100 text-purple-700', desc:'Linked LinkedIn account', status:'Completed',
    detail: { action:'Linked', page:'My Profile', sections:'LinkedIn Integration', fields:'LinkedIn URL: linkedin.com/in/mark-jacinto · Status: Connected · Visibility: Public', note:'LinkedIn profile linked successfully. Visit button active on profile page.', link:'my-profile.html' }},
  { date:'2026-08-12', time:'03:30 PM', type:'Document', typeBg:'bg-yellow-100 text-yellow-700', desc:'Uploaded updated resume (Mark_Jacinto_Resume_2026.pdf)', status:'Completed',
    detail: { action:'Uploaded', page:'Documents', sections:'Personal Documents', fields:'File: Mark_Jacinto_Resume_2026.pdf · Size: 180 KB · Type: PDF', note:'Resume uploaded and saved. Previous version archived.', link:'documents.html' }},
  { date:'2026-08-12', time:'11:45 AM', type:'Post', typeBg:'bg-indigo-100 text-indigo-700', desc:'Commented on "Best practices for transitioning from audit to tech?"', status:'Completed',
    detail: { action:'Commented', page:'Newsfeed', sections:'Comment on Discussion Post', fields:'Post by: Juan Reyes · Your comment: "I made the switch 2 years ago. Happy to chat — DM me!"', note:'Comment posted successfully. Received 5 likes.', link:'newsfeed.html' }},
  { date:'2026-08-11', time:'09:00 AM', type:'Login', typeBg:'bg-gray-100 text-gray-700', desc:'Account login from Safari on macOS', status:'Completed',
    detail: { action:'Logged In', page:'Login Page', sections:'Authentication', fields:'Browser: Safari 17.5 · OS: macOS Sonoma · IP: 10.0.0.*** · Location: Quezon City, PH', note:'Successful login via email/password.', link:'login-page.html' }},
  { date:'2026-08-10', time:'02:15 PM', type:'Feedback', typeBg:'bg-green-100 text-green-700', desc:'Started Curriculum Feedback form (Draft saved)', status:'In Progress',
    detail: { action:'Draft Saved', page:'Curriculum Feedback', sections:'Completed: Overall Rating · Incomplete: Strengths, Improvements, Comments', fields:'1 of 4 sections completed (Overall Rating: 4/5)', note:'Draft saved. Return to complete the written feedback sections.', link:'curriculum-feedback.html' }},
  { date:'2026-08-10', time:'08:45 AM', type:'Login', typeBg:'bg-gray-100 text-gray-700', desc:'Account login from Chrome on Windows', status:'Completed',
    detail: { action:'Logged In', page:'Login Page', sections:'Authentication', fields:'Browser: Chrome 125.0 · OS: Windows 11 · IP: 192.168.1.*** · Location: Makati City, PH', note:'Successful login via email/password.', link:'login-page.html' }},
  { date:'2026-08-08', time:'04:00 PM', type:'Document', typeBg:'bg-yellow-100 text-yellow-700', desc:'Requested Certificate of Good Moral Character', status:'Pending',
    detail: { action:'Requested', page:'Documents', sections:'Document Request', fields:'Document: Certificate of Good Moral Character · Purpose: Employment · Processing time: 3-5 business days', note:'Request submitted. Awaiting approval from Registrar\'s Office. Estimated ready date: Aug 13, 2026.', link:'documents.html' }},
  { date:'2026-08-07', time:'10:30 AM', type:'Profile', typeBg:'bg-purple-100 text-purple-700', desc:'Updated profile photo', status:'Completed',
    detail: { action:'Updated', page:'My Profile', sections:'Profile Photo', fields:'New photo uploaded · Size: 320 KB · Format: JPEG · Dimensions: 400×400px', note:'Profile photo updated successfully across all portal pages.', link:'my-profile.html' }},
  { date:'2026-08-05', time:'01:00 PM', type:'Survey', typeBg:'bg-blue-100 text-blue-700', desc:'Received Tracer Survey invitation', status:'Pending',
    detail: { action:'Invitation Received', page:'Tracer Survey', sections:'Notification', fields:'Survey: Graduate Tracer Study (GTS) 2026 · Deadline: Oct 15, 2026 · Sections: A through E', note:'You have been invited to complete the CHED Graduate Tracer Survey. Please complete all 5 sections before the deadline.', link:'tracer-survey.html' }},
  { date:'2026-08-03', time:'09:20 AM', type:'Login', typeBg:'bg-gray-100 text-gray-700', desc:'First account login after registration', status:'Completed',
    detail: { action:'First Login', page:'Login Page', sections:'Authentication', fields:'Browser: Chrome 125.0 · OS: Windows 11 · First-time login tutorial shown', note:'Welcome! Account activated and first login recorded. Tutorial completed.', link:'login-page.html' }},
  { date:'2026-08-01', time:'08:00 AM', type:'Profile', typeBg:'bg-purple-100 text-purple-700', desc:'Account created and registered as Alumni', status:'Completed',
    detail: { action:'Registered', page:'Registration', sections:'Account Setup', fields:'Name: Mark Anthony Jacinto · Student ID: 2020-12345 · Program: BS Information Technology · Batch: 2024', note:'Alumni account created successfully. Welcome to COMPASS!', link:'register.html' }},
  { date:'2026-07-28', time:'03:00 PM', type:'Document', typeBg:'bg-yellow-100 text-yellow-700', desc:'Pre-registration document submission', status:'Completed',
    detail: { action:'Submitted', page:'Documents', sections:'Pre-Registration', fields:'Documents: Valid ID (uploaded), Diploma copy (uploaded), 2×2 Photo (uploaded)', note:'All pre-registration documents received and verified.', link:'documents.html' }},
  { date:'2026-07-25', time:'11:00 AM', type:'Feedback', typeBg:'bg-green-100 text-green-700', desc:'Received invitation for Competency Feedback', status:'Pending',
    detail: { action:'Invitation Received', page:'Competency Feedback', sections:'Notification', fields:'Form: Competency Utilization Feedback · Deadline: Sep 30, 2026 · Sections: Rating + Comments', note:'You have been invited to provide feedback on competency utilization. Please complete before the deadline.', link:'competency-feedback.html' }},
  { date:'2026-07-20', time:'09:00 AM', type:'Post', typeBg:'bg-indigo-100 text-indigo-700', desc:'Joined BSIT Alumni Network group', status:'Completed',
    detail: { action:'Joined Group', page:'Newsfeed', sections:'Group Membership', fields:'Group: BSIT Alumni Network · Members: 1,248 · Category: Group', note:'You are now a member of the BSIT Alumni Network. You can post and interact with group members.', link:'newsfeed.html' }},
  { date:'2026-07-15', time:'02:30 PM', type:'Document', typeBg:'bg-yellow-100 text-yellow-700', desc:'Downloaded Alumni ID application form', status:'Completed',
    detail: { action:'Downloaded', page:'Documents', sections:'Forms', fields:'Document: Alumni ID Application Form · Format: PDF · Size: 95 KB', note:'Form downloaded. Fill out and submit to the Alumni Office to receive your Alumni ID.', link:'documents.html' }}
];

// ===== FILTER STATE =====
var currentDateFilter = 'today';
var currentStatusFilter = 'all';
var currentPage = 1;
var perPage = 8;
var expandedId = null; // tracks which row is expanded

// ===== DATE HELPERS (REACTIVE — uses real current date) =====
function getToday() { return new Date(); }
function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
function startOfWeek(d) { var day = d.getDay(); var diff = d.getDate() - day + (day === 0 ? -6 : 1); return new Date(d.getFullYear(), d.getMonth(), diff); }
function startOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function parseDate(str) { return new Date(str + 'T00:00:00'); }

function filterByDate(list, filter) {
  if (filter === 'all') return list;
  var now = getToday();
  var cutoff;
  if (filter === 'today') cutoff = startOfDay(now);
  else if (filter === 'week') cutoff = startOfWeek(now);
  else if (filter === 'month') cutoff = startOfMonth(now);
  return list.filter(function(a) { return parseDate(a.date) >= cutoff; });
}

function filterByStatus(list, filter) {
  if (filter === 'all') return list;
  return list.filter(function(a) { return a.status === filter; });
}

// ===== FORMAT DATE =====
function formatDate(str) {
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var d = parseDate(str);
  return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

// ===== STATUS BADGE =====
function statusBadge(s) {
  if (s === 'Completed')   return '<span class="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-green-100 text-green-700">Completed</span>';
  if (s === 'In Progress') return '<span class="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-yellow-100 text-yellow-700">In Progress</span>';
  if (s === 'Pending')     return '<span class="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-orange-100 text-orange-700">Pending</span>';
  return '<span class="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-gray-100 text-gray-700">' + s + '</span>';
}

// ===== STATUS ICON for detail panel =====
function statusIcon(s) {
  if (s === 'Completed') return '<div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0"><svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></div>';
  if (s === 'In Progress') return '<div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center shrink-0"><svg class="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>';
  if (s === 'Pending') return '<div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0"><svg class="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>';
  return '';
}

// ===== STATUS ACTION BUTTON for detail panel =====
function statusAction(s, link) {
  if (s === 'Completed') return '<a href="' + link + '" class="px-3 py-1.5 text-[12px] font-semibold border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 inline-flex items-center gap-1.5"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>View Page</a>';
  if (s === 'In Progress') return '<a href="' + link + '" class="px-3 py-1.5 text-[12px] font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg inline-flex items-center gap-1.5"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>Continue Editing</a>';
  if (s === 'Pending') return '<a href="' + link + '" class="px-3 py-1.5 text-[12px] font-semibold border border-orange-200 text-orange-700 rounded-lg hover:bg-orange-50 inline-flex items-center gap-1.5"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Check Status</a>';
  return '';
}

// ===== RENDER TABLE =====
function render() {
  var filtered = filterByDate(activities, currentDateFilter);
  filtered = filterByStatus(filtered, currentStatusFilter);

  var totalItems = filtered.length;
  var totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  if (currentPage > totalPages) currentPage = totalPages;
  var start = (currentPage - 1) * perPage;
  var pageItems = filtered.slice(start, start + perPage);

  var tbody = document.getElementById('activityBody');
  if (pageItems.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="px-6 py-16 text-center"><div class="flex flex-col items-center"><div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><p class="text-sm font-semibold text-gray-700">No activities found</p><p class="text-[12px] text-gray-400 mt-1">Try a different date range or status filter.</p></div></td></tr>';
  } else {
    tbody.innerHTML = pageItems.map(function(a, i) {
      var globalIdx = start + i;
      var borderClass = 'border-b border-gray-100';
      var isExpanded = expandedId === globalIdx;
      var chevron = '<svg class="w-3.5 h-3.5 text-gray-400 shrink-0 transition-transform ' + (isExpanded ? 'rotate-180' : '') + '" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';

      var row = '<tr class="' + borderClass + ' hover:bg-blue-50/40 cursor-pointer transition" onclick="toggleExpand(' + globalIdx + ')">';
      row += '<td class="px-6 py-4 text-sm text-gray-900">' + formatDate(a.date) + '</td>';
      row += '<td class="px-6 py-4 text-sm text-gray-500">' + a.time + '</td>';
      row += '<td class="px-6 py-4"><span class="px-2.5 py-0.5 text-[11px] font-semibold rounded-full ' + a.typeBg + '">' + a.type + '</span></td>';
      row += '<td class="px-6 py-4 text-sm text-gray-600">' + a.desc + '</td>';
      row += '<td class="px-6 py-4 text-center"><div class="flex items-center justify-center gap-2">' + statusBadge(a.status) + chevron + '</div></td>';
      row += '</tr>';

      // Expanded detail row
      if (isExpanded && a.detail) {
        var d = a.detail;
        var statusLabel = a.status === 'Completed' ? 'Completed successfully' : a.status === 'In Progress' ? 'In progress — action needed' : 'Pending — awaiting processing';
        var statusColor = a.status === 'Completed' ? 'text-green-700' : a.status === 'In Progress' ? 'text-yellow-700' : 'text-orange-700';

        row += '<tr class="' + borderClass + ' bg-gray-50/80"><td colspan="5" class="px-6 py-0"><div class="py-5 pl-2">';
        // Header with status icon
        row += '<div class="flex items-center gap-3 mb-4">' + statusIcon(a.status) + '<div><p class="text-[13px] font-bold text-gray-900">' + d.action + ' — ' + d.page + '</p><p class="text-[12px] ' + statusColor + ' font-medium">' + statusLabel + '</p></div></div>';
        // Detail grid
        row += '<div class="grid grid-cols-2 gap-4 mb-4">';
        row += '<div class="bg-white rounded-lg border border-gray-200 px-4 py-3"><p class="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Sections</p><p class="text-[13px] text-gray-700">' + d.sections + '</p></div>';
        row += '<div class="bg-white rounded-lg border border-gray-200 px-4 py-3"><p class="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Details</p><p class="text-[13px] text-gray-700">' + d.fields + '</p></div>';
        row += '</div>';
        // Note + action
        row += '<div class="flex items-center justify-between">';
        row += '<p class="text-[12px] text-gray-500 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' + d.note + '</p>';
        row += '<div class="shrink-0 ml-4">' + statusAction(a.status, d.link) + '</div>';
        row += '</div>';
        row += '</div></td></tr>';
      }

      return row;
    }).join('');
  }

  // Update count
  document.getElementById('activityCount').textContent = totalItems === 0
    ? 'No activities found'
    : 'Showing ' + (start + 1) + '-' + Math.min(start + perPage, totalItems) + ' of ' + totalItems + ' activities';

  // Pagination
  var pagDiv = document.getElementById('pagination');
  if (totalPages <= 1) { pagDiv.innerHTML = ''; return; }
  var html = '';
  html += '<button onclick="goPage(' + (currentPage - 1) + ')" class="px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-lg ' + (currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100') + '"' + (currentPage === 1 ? ' disabled' : '') + '>Previous</button>';
  for (var p = 1; p <= totalPages; p++) {
    if (p === currentPage) html += '<button class="px-3 py-1.5 text-sm font-semibold bg-blue-600 text-white rounded-lg">' + p + '</button>';
    else html += '<button onclick="goPage(' + p + ')" class="px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100">' + p + '</button>';
  }
  html += '<button onclick="goPage(' + (currentPage + 1) + ')" class="px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-lg ' + (currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100') + '"' + (currentPage === totalPages ? ' disabled' : '') + '>Next</button>';
  pagDiv.innerHTML = html;
}

// ===== TOGGLE EXPAND ROW =====
function toggleExpand(idx) {
  expandedId = expandedId === idx ? null : idx;
  render();
}

// ===== DATE FILTER =====
function setDateFilter(filter, btn) {
  currentDateFilter = filter;
  currentPage = 1;
  expandedId = null;
  document.querySelectorAll('.date-tab').forEach(function(b) {
    b.className = 'date-tab px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100';
  });
  btn.className = 'date-tab px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white';
  render();
}

// ===== STATUS FILTER =====
function setStatusFilter(filter, btn) {
  currentStatusFilter = filter;
  currentPage = 1;
  expandedId = null;
  document.querySelectorAll('.status-tab').forEach(function(b) {
    b.className = 'status-tab px-3 py-1.5 text-[12px] font-semibold rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100';
  });
  btn.className = 'status-tab px-3 py-1.5 text-[12px] font-semibold rounded-lg bg-gray-900 text-white';
  render();
}

// ===== PAGINATION =====
function goPage(p) {
  var filtered = filterByDate(activities, currentDateFilter);
  filtered = filterByStatus(filtered, currentStatusFilter);
  var totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  if (p < 1 || p > totalPages) return;
  currentPage = p;
  expandedId = null;
  render();
}

// ===== INITIAL RENDER =====
render();



// reactive
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('-translate-x-full');document.getElementById('sidebarOverlay').classList.toggle('hidden');}
function closeSidebar(){document.getElementById('sidebar').classList.add('-translate-x-full');document.getElementById('sidebarOverlay').classList.add('hidden');}
document.querySelectorAll('#sidebar nav a').forEach(function(a){a.addEventListener('click',function(){if(window.innerWidth<1024)closeSidebar();});});