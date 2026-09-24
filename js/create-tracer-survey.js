// ===== HEADER INTERACTIONS =====
document.getElementById('avatarBtn').addEventListener('click',function(){closeAll();document.getElementById('userDropdown').classList.toggle('hidden')});
document.getElementById('notifBtn').addEventListener('click',function(){closeAll();document.getElementById('notifDropdown').classList.toggle('hidden')});
document.getElementById('markAllReadBtn').addEventListener('click',function(){document.querySelectorAll('.notif-dot').forEach(function(d){d.classList.add('hidden')});document.getElementById('notifBadge').classList.add('hidden')});
document.getElementById('searchInput').addEventListener('focus',function(){closeAll();document.getElementById('searchDropdown').classList.remove('hidden')});
function closeAll(){document.getElementById('userDropdown').classList.add('hidden');document.getElementById('notifDropdown').classList.add('hidden');document.getElementById('searchDropdown').classList.add('hidden')}
document.addEventListener('click',function(e){if(!e.target.closest('#avatarBtn')&&!e.target.closest('#userDropdown'))document.getElementById('userDropdown').classList.add('hidden');if(!e.target.closest('#notifBtn')&&!e.target.closest('#notifDropdown'))document.getElementById('notifDropdown').classList.add('hidden');if(!e.target.closest('#searchContainer'))document.getElementById('searchDropdown').classList.add('hidden')});
document.getElementById('logoutBtn').addEventListener('click',function(){if(confirm('Are you sure you want to logout?')){alert('You have been logged out.');window.location.href='../index.html'}});
function showToast(msg){var t=document.getElementById('successToast');document.getElementById('toastMsg').textContent=msg;t.classList.remove('hidden');setTimeout(function(){t.classList.add('hidden')},3000)}

// ===== QUESTION BUILDER =====
var questions = [
  { id:1, type:'multiple_choice', label:'Current Employment Status', section:'B', options:['Employed Full-Time','Employed Part-Time','Self-Employed / Freelancer','Unemployed & Searching','Pursuing Advanced Education'] },
  { id:2, type:'short_text', label:'Company/Organization Name', section:'B' },
  { id:3, type:'short_text', label:'Job Title', section:'B' },
  { id:4, type:'rating_scale', label:'How relevant is your degree to your current job?', section:'C', scaleMin:1, scaleMax:5, scaleMinLabel:'Not Related', scaleMaxLabel:'Highly Related' },
  { id:5, type:'multiple_choice', label:'Civil Status', section:'A', options:['Single','Married','Widowed','Separated'] },
  { id:6, type:'short_text', label:'Current Permanent Address', section:'A' },
  { id:7, type:'multiple_choice', label:'How long did it take to find your first job?', section:'B', options:['Less than 1 Month','1-6 Months','7-12 Months','More than 1 Year'] },
  { id:8, type:'rating_scale', label:'The curriculum was highly relevant and aligned with industry standards', section:'C', scaleMin:1, scaleMax:5, scaleMinLabel:'Strongly Disagree', scaleMaxLabel:'Strongly Agree' },
  { id:9, type:'checkbox_grid', label:'Competency Utilization Assessment', section:'D', rows:['Problem Solving & Analytical Thinking','Written & Oral Communication','Technical / Software Skills','Leadership & Team Management','Collaboration & Teamwork','Research & Documentation','Project Management','Critical Thinking'], columns:['Frequently Used','Needs Strengthening'] },
  { id:10, type:'long_text', label:'What were the most significant strengths of the academic curriculum?', section:'E' },
  { id:11, type:'long_text', label:'Key areas for improvement within the curriculum or course structure?', section:'E' }
];

var nextId = 12;
var expandedId = null;
var dragSrcIdx = null;

function getTypeLabel(t) {
  if (t === 'multiple_choice') return 'MULTIPLE CHOICE';
  if (t === 'short_text') return 'SHORT TEXT';
  if (t === 'long_text') return 'LONG TEXT';
  if (t === 'rating_scale') return 'RATING SCALE';
  if (t === 'checkbox_grid') return 'CHECKBOX GRID';
  return t.toUpperCase();
}

function getTypeIcon(t) {
  if (t === 'multiple_choice') return '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>';
  if (t === 'short_text') return '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h10"/></svg>';
  if (t === 'long_text') return '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h10"/></svg>';
  if (t === 'rating_scale') return '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  if (t === 'checkbox_grid') return '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>';
  return '';
}

function getTypeBg(t) {
  if (t === 'multiple_choice') return 'bg-blue-50 text-blue-600';
  if (t === 'short_text') return 'bg-purple-50 text-purple-600';
  if (t === 'long_text') return 'bg-green-50 text-green-600';
  if (t === 'rating_scale') return 'bg-orange-50 text-orange-600';
  if (t === 'checkbox_grid') return 'bg-teal-50 text-teal-600';
  return 'bg-gray-50 text-gray-600';
}

function getSectionBadge(s) {
  var colors = { A: 'bg-purple-100 text-purple-700', B: 'bg-blue-100 text-blue-700', C: 'bg-green-100 text-green-700', D: 'bg-yellow-100 text-yellow-700', E: 'bg-red-100 text-red-700' };
  return '<span class="px-2 py-0.5 text-[10px] font-semibold rounded-full ' + (colors[s] || 'bg-gray-100 text-gray-600') + '">Section ' + s + '</span>';
}

function escAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderQuestions() {
  var container = document.getElementById('questionList');
  document.getElementById('questionCount').textContent = questions.length + ' Questions';

  if (questions.length === 0) {
    container.innerHTML = '<div class="text-center py-12"><div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg></div><p class="text-sm font-semibold text-gray-700">No questions yet</p><p class="text-[12px] text-gray-400 mt-1">Add your first question below.</p></div>';
    return;
  }

  var html = '';
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    var isExpanded = (expandedId === q.id);

    html += '<div class="border border-gray-200 rounded-xl bg-white overflow-hidden mb-3 hover:border-blue-300 transition" draggable="true" data-idx="' + i + '">';

    // Header
    html += '<div class="flex items-center gap-3 px-4 py-3 bg-gray-50/50 border-b border-gray-100 cursor-pointer" data-toggle="' + q.id + '">';
    html += '<div class="w-5 h-5 flex items-center justify-center text-gray-300 cursor-grab shrink-0"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg></div>';
    html += '<div class="flex items-center gap-2 ' + getTypeBg(q.type) + ' px-2 py-1 rounded-md">' + getTypeIcon(q.type) + '<span class="text-[10px] font-bold tracking-wide">' + getTypeLabel(q.type) + '</span></div>';
    html += getSectionBadge(q.section);
    html += '<div class="flex-1"></div>';
    html += '<svg class="w-4 h-4 text-gray-400 transition-transform ' + (isExpanded ? 'rotate-180' : '') + '" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>';
    html += '<button class="btn-dup w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-green-600 hover:bg-green-50 transition" data-id="' + q.id + '" title="Duplicate"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button>';
    html += '<button class="btn-del w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition" data-id="' + q.id + '" title="Delete"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>';
    html += '</div>';

    // Body preview
    html += '<div class="px-5 py-4">';
    html += '<p class="text-[14px] font-semibold text-gray-900 mb-3">' + escAttr(q.label) + '</p>';

    if (q.type === 'multiple_choice' && q.options) {
      for (var oi = 0; oi < q.options.length; oi++) {
        html += '<div class="flex items-center gap-2.5 py-1.5"><div class="w-4 h-4 rounded-full border-2 border-gray-300 shrink-0"></div><span class="text-[13px] text-gray-600">' + escAttr(q.options[oi]) + '</span></div>';
      }
    } else if (q.type === 'short_text') {
      html += '<div class="border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 text-[12px] text-gray-400">Short answer text</div>';
    } else if (q.type === 'long_text') {
      html += '<div class="border border-gray-200 rounded-lg px-3 py-4 bg-gray-50 text-[12px] text-gray-400 h-[60px]">Long answer text</div>';
    } else if (q.type === 'rating_scale') {
      html += '<div class="flex items-center gap-2 mt-1">';
      for (var r = q.scaleMin; r <= q.scaleMax; r++) {
        html += '<div class="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">' + r + '</div>';
      }
      html += '</div>';
      html += '<div class="flex justify-between mt-1.5"><span class="text-[11px] text-gray-400">' + q.scaleMin + ' = ' + escAttr(q.scaleMinLabel) + '</span><span class="text-[11px] text-gray-400">' + q.scaleMax + ' = ' + escAttr(q.scaleMaxLabel) + '</span></div>';
    } else if (q.type === 'checkbox_grid' && q.rows && q.columns) {
      html += '<div class="overflow-x-auto"><table class="w-full text-[12px]"><thead><tr class="border-b border-gray-200"><th class="text-left py-2 pr-3 font-semibold text-gray-600">Competency</th>';
      for (var ci = 0; ci < q.columns.length; ci++) {
        html += '<th class="text-center py-2 px-3 font-semibold text-gray-600 w-28">' + escAttr(q.columns[ci]) + '</th>';
      }
      html += '</tr></thead><tbody>';
      for (var ri = 0; ri < q.rows.length; ri++) {
        html += '<tr class="' + (ri < q.rows.length - 1 ? 'border-b border-gray-100' : '') + '"><td class="py-2 pr-3 text-gray-700">' + escAttr(q.rows[ri]) + '</td>';
        for (var ci2 = 0; ci2 < q.columns.length; ci2++) {
          html += '<td class="text-center py-2 px-3"><input type="checkbox" disabled class="accent-blue-600" /></td>';
        }
        html += '</tr>';
      }
      html += '</tbody></table></div>';
    }
    html += '</div>';

    // Expanded edit panel
    if (isExpanded) {
      html += '<div class="border-t border-gray-200 bg-blue-50/30 px-5 py-4 space-y-4">';
      html += '<p class="text-[11px] font-bold text-blue-600 uppercase tracking-wide">Edit Question</p>';

      // Label
      html += '<div><label class="text-[12px] font-semibold text-gray-600">Question Label</label>';
      html += '<input type="text" class="edit-label mt-1 w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" data-id="' + q.id + '" value="' + escAttr(q.label) + '" /></div>';

      // Section + Type
      html += '<div class="grid grid-cols-2 gap-4"><div><label class="text-[12px] font-semibold text-gray-600">Section</label>';
      html += '<select class="edit-section mt-1 w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500" data-id="' + q.id + '">';
      var secs = ['A', 'B', 'C', 'D', 'E'];
      for (var si = 0; si < secs.length; si++) {
        html += '<option value="' + secs[si] + '"' + (q.section === secs[si] ? ' selected' : '') + '>Section ' + secs[si] + '</option>';
      }
      html += '</select></div>';
      html += '<div><label class="text-[12px] font-semibold text-gray-600">Type</label>';
      html += '<div class="mt-1 px-3 py-2 border border-gray-100 rounded-lg text-sm bg-gray-50 text-gray-500">' + getTypeLabel(q.type) + '</div></div></div>';

      // Multiple choice options
      if (q.type === 'multiple_choice' && q.options) {
        html += '<div><label class="text-[12px] font-semibold text-gray-600 mb-2 block">Options</label>';
        for (var oi2 = 0; oi2 < q.options.length; oi2++) {
          html += '<div class="flex items-center gap-2 mb-2">';
          html += '<div class="w-4 h-4 rounded-full border-2 border-gray-300 shrink-0"></div>';
          html += '<input type="text" class="edit-option flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" data-id="' + q.id + '" data-oi="' + oi2 + '" value="' + escAttr(q.options[oi2]) + '" />';
          html += '<button class="btn-del-opt w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition" data-id="' + q.id + '" data-oi="' + oi2 + '" title="Remove option"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg></button>';
          html += '</div>';
        }
        html += '<button class="btn-add-opt flex items-center gap-1.5 text-[12px] font-semibold text-blue-600 hover:text-blue-700 mt-1 px-1 py-1 rounded hover:bg-blue-50 transition" data-id="' + q.id + '"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>Add Option</button>';
        html += '</div>';
      }

      // Rating scale
      if (q.type === 'rating_scale') {
        html += '<div class="grid grid-cols-3 gap-3">';
        html += '<div><label class="text-[12px] font-semibold text-gray-600">Max Scale</label><select class="edit-scale-max mt-1 w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white" data-id="' + q.id + '">';
        html += '<option value="5"' + (q.scaleMax === 5 ? ' selected' : '') + '>5</option>';
        html += '<option value="7"' + (q.scaleMax === 7 ? ' selected' : '') + '>7</option>';
        html += '<option value="10"' + (q.scaleMax === 10 ? ' selected' : '') + '>10</option>';
        html += '</select></div>';
        html += '<div><label class="text-[12px] font-semibold text-gray-600">Min Label</label><input type="text" class="edit-scale-min-label mt-1 w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" data-id="' + q.id + '" value="' + escAttr(q.scaleMinLabel) + '" /></div>';
        html += '<div><label class="text-[12px] font-semibold text-gray-600">Max Label</label><input type="text" class="edit-scale-max-label mt-1 w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" data-id="' + q.id + '" value="' + escAttr(q.scaleMaxLabel) + '" /></div>';
        html += '</div>';
      }

      // Checkbox grid rows
      if (q.type === 'checkbox_grid' && q.rows) {
        html += '<div><label class="text-[12px] font-semibold text-gray-600 mb-2 block">Competency Rows</label>';
        for (var gri = 0; gri < q.rows.length; gri++) {
          html += '<div class="flex items-center gap-2 mb-2">';
          html += '<span class="text-[11px] text-gray-400 w-5 text-center shrink-0">' + (gri + 1) + '</span>';
          html += '<input type="text" class="edit-grid-row flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" data-id="' + q.id + '" data-ri="' + gri + '" value="' + escAttr(q.rows[gri]) + '" />';
          html += '<button class="btn-del-row w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition" data-id="' + q.id + '" data-ri="' + gri + '" title="Remove row"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg></button>';
          html += '</div>';
        }
        html += '<button class="btn-add-row flex items-center gap-1.5 text-[12px] font-semibold text-blue-600 hover:text-blue-700 mt-1 px-1 py-1 rounded hover:bg-blue-50 transition" data-id="' + q.id + '"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>Add Row</button>';
        html += '</div>';
      }

      html += '</div>';
    }

    html += '</div>';
  }

  container.innerHTML = html;
  bindEvents();
}

// ===== EVENT DELEGATION =====
function bindEvents() {
  var container = document.getElementById('questionList');

  // Toggle expand
  container.querySelectorAll('[data-toggle]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      if (e.target.closest('.btn-dup') || e.target.closest('.btn-del')) return;
      var id = parseInt(this.getAttribute('data-toggle'));
      expandedId = (expandedId === id) ? null : id;
      renderQuestions();
    });
  });

  // Duplicate
  container.querySelectorAll('.btn-dup').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      duplicateQuestion(parseInt(this.getAttribute('data-id')));
    });
  });

  // Delete question
  container.querySelectorAll('.btn-del').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      deleteQuestion(parseInt(this.getAttribute('data-id')));
    });
  });

  // Edit label
  container.querySelectorAll('.edit-label').forEach(function(el) {
    el.addEventListener('change', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      if (q && this.value.trim()) { q.label = this.value.trim(); renderQuestions(); }
    });
  });

  // Edit section
  container.querySelectorAll('.edit-section').forEach(function(el) {
    el.addEventListener('change', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      if (q) { q.section = this.value; renderQuestions(); }
    });
  });

  // Edit option text
  container.querySelectorAll('.edit-option').forEach(function(el) {
    el.addEventListener('change', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      var oi = parseInt(this.getAttribute('data-oi'));
      if (q && q.options && this.value.trim()) { q.options[oi] = this.value.trim(); renderQuestions(); }
    });
  });

  // Delete option
  container.querySelectorAll('.btn-del-opt').forEach(function(el) {
    el.addEventListener('click', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      var oi = parseInt(this.getAttribute('data-oi'));
      if (!q || !q.options) return;
      if (q.options.length <= 2) { alert('Need at least 2 options.'); return; }
      q.options.splice(oi, 1);
      renderQuestions();
      showToast('Option removed.');
    });
  });

  // Add option
  container.querySelectorAll('.btn-add-opt').forEach(function(el) {
    el.addEventListener('click', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      if (!q || !q.options) return;
      q.options.push('New Option ' + (q.options.length + 1));
      renderQuestions();
    });
  });

  // Rating scale edits
  container.querySelectorAll('.edit-scale-max').forEach(function(el) {
    el.addEventListener('change', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      if (q) { q.scaleMax = parseInt(this.value); renderQuestions(); }
    });
  });
  container.querySelectorAll('.edit-scale-min-label').forEach(function(el) {
    el.addEventListener('change', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      if (q) { q.scaleMinLabel = this.value; renderQuestions(); }
    });
  });
  container.querySelectorAll('.edit-scale-max-label').forEach(function(el) {
    el.addEventListener('change', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      if (q) { q.scaleMaxLabel = this.value; renderQuestions(); }
    });
  });

  // Grid row edits
  container.querySelectorAll('.edit-grid-row').forEach(function(el) {
    el.addEventListener('change', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      var ri = parseInt(this.getAttribute('data-ri'));
      if (q && q.rows && this.value.trim()) { q.rows[ri] = this.value.trim(); renderQuestions(); }
    });
  });
  container.querySelectorAll('.btn-del-row').forEach(function(el) {
    el.addEventListener('click', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      var ri = parseInt(this.getAttribute('data-ri'));
      if (!q || !q.rows) return;
      if (q.rows.length <= 1) { alert('Grid needs at least 1 row.'); return; }
      q.rows.splice(ri, 1);
      renderQuestions();
      showToast('Row removed.');
    });
  });
  container.querySelectorAll('.btn-add-row').forEach(function(el) {
    el.addEventListener('click', function() {
      var q = findQ(parseInt(this.getAttribute('data-id')));
      if (!q || !q.rows) return;
      q.rows.push('New Competency ' + (q.rows.length + 1));
      renderQuestions();
    });
  });

  // Drag & drop
  container.querySelectorAll('[draggable]').forEach(function(el) {
    el.addEventListener('dragstart', function(e) {
      dragSrcIdx = parseInt(this.getAttribute('data-idx'));
      e.dataTransfer.effectAllowed = 'move';
    });
    el.addEventListener('dragover', function(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; });
    el.addEventListener('drop', function(e) {
      e.preventDefault();
      var targetIdx = parseInt(this.getAttribute('data-idx'));
      if (dragSrcIdx === null || dragSrcIdx === targetIdx) return;
      var item = questions.splice(dragSrcIdx, 1)[0];
      questions.splice(targetIdx, 0, item);
      dragSrcIdx = null;
      renderQuestions();
    });
  });
}

function findQ(id) { return questions.find(function(x) { return x.id === id; }); }

// ===== QUESTION CRUD =====
function deleteQuestion(id) {
  if (!confirm('Delete this question?')) return;
  questions = questions.filter(function(q) { return q.id !== id; });
  if (expandedId === id) expandedId = null;
  renderQuestions();
  showToast('Question deleted.');
}

function duplicateQuestion(id) {
  var q = findQ(id);
  if (!q) return;
  var copy = JSON.parse(JSON.stringify(q));
  copy.id = nextId++;
  copy.label = q.label + ' (Copy)';
  var idx = questions.findIndex(function(x) { return x.id === id; });
  questions.splice(idx + 1, 0, copy);
  renderQuestions();
  showToast('Question duplicated.');
}

// ===== ADD QUESTION MODAL =====
function openAddModal() {
  document.getElementById('addModal').classList.add('active');
  document.getElementById('newQLabel').value = '';
  document.getElementById('newQType').value = 'short_text';
  document.getElementById('newQSection').value = 'A';
  document.getElementById('mcOptionsWrap').classList.add('hidden');
  document.getElementById('ratingWrap').classList.add('hidden');
}
function closeAddModal() { document.getElementById('addModal').classList.remove('active'); }

function onTypeChange() {
  var t = document.getElementById('newQType').value;
  document.getElementById('mcOptionsWrap').classList.toggle('hidden', t !== 'multiple_choice');
  document.getElementById('ratingWrap').classList.toggle('hidden', t !== 'rating_scale');
}

function addQuestion() {
  var label = document.getElementById('newQLabel').value.trim();
  var type = document.getElementById('newQType').value;
  var section = document.getElementById('newQSection').value;
  if (!label) { alert('Please enter a question label.'); return; }

  var q = { id: nextId++, type: type, label: label, section: section };

  if (type === 'multiple_choice') {
    var optText = document.getElementById('mcOptions').value.trim();
    q.options = optText ? optText.split('\n').map(function(o) { return o.trim(); }).filter(function(o) { return o !== ''; }) : ['Option 1', 'Option 2', 'Option 3'];
  }
  if (type === 'rating_scale') {
    q.scaleMin = 1;
    q.scaleMax = parseInt(document.getElementById('ratingMax').value) || 5;
    q.scaleMinLabel = document.getElementById('ratingMinLabel').value || 'Poor';
    q.scaleMaxLabel = document.getElementById('ratingMaxLabel').value || 'Excellent';
  }
  if (type === 'checkbox_grid') {
    q.rows = ['Row 1', 'Row 2', 'Row 3'];
    q.columns = ['Frequently Used', 'Needs Strengthening'];
  }

  questions.push(q);
  closeAddModal();
  renderQuestions();
  showToast('Question added!');
  setTimeout(function() {
    var list = document.getElementById('questionList');
    list.scrollTop = list.scrollHeight;
  }, 100);
}

// ===== SAVE / PUBLISH =====
function saveSurveyDraft() {
  var name = document.getElementById('surveyName').value.trim();
  if (!name) { alert('Please enter a survey name.'); return; }
  showToast('Survey draft saved! ' + questions.length + ' questions configured.');
}

function publishSurvey() {
  var name = document.getElementById('surveyName').value.trim();
  if (!name) { alert('Please enter a survey name.'); return; }
  if (questions.length === 0) { alert('Please add at least one question.'); return; }
  var deadline = document.getElementById('deadlineDate').value;
  if (!deadline) { alert('Please set a deadline date.'); return; }
  showToast('Survey "' + name + '" published successfully with ' + questions.length + ' questions!');
}

// ===== INITIAL RENDER =====
renderQuestions();

// ===== STATUS BUTTON =====
// The header status control was dropped in the responsive redesign, so it may
// be absent. Dereferencing null here would abort the whole page script.
var statusBtnEl = document.getElementById('statusBtn');
if (statusBtnEl) statusBtnEl.addEventListener('click', function () {
  closeAll();
  var d = document.getElementById('statusDropdown');
  if (d) d.classList.toggle('hidden');
});
document.querySelectorAll('.status-option').forEach(function(btn){
  btn.addEventListener('click',function(){
    var status=this.getAttribute('data-status');
    var btnDot=document.getElementById('statusBtnDot');
    var btnText=document.getElementById('statusBtnText');
    var avatarDot=document.getElementById('myStatusDot');
    var dropdownDot=document.getElementById('myStatusDotDropdown');
    var colorMap={active:'bg-green-500',dnd:'bg-red-500',offline:'bg-gray-400'};
    var labelMap={active:'Active',dnd:'Dnd\u00A0\u00A0',offline:'Offline'};
    if(btnDot)btnDot.className='w-[10px] h-[10px] rounded-full '+colorMap[status]+' shrink-0';
    if(btnText)btnText.textContent=labelMap[status];
    if(avatarDot){avatarDot.className='w-[10px] h-[10px] rounded-full border-2 border-gray-100 absolute -bottom-0.5 -right-0.5 '+colorMap[status]}
    if(dropdownDot){dropdownDot.className='w-[10px] h-[10px] rounded-full border-2 border-white absolute -bottom-0.5 -right-0.5 '+colorMap[status]}
    var sd=document.getElementById('statusDropdown');if(sd)sd.classList.add('hidden');
    showToast('Status set to '+labelMap[status]);
  });
});
