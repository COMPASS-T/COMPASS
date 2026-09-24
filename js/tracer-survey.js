// Header dropdowns
document.getElementById('avatarBtn').addEventListener('click',function(){closeAll();document.getElementById('userDropdown').classList.toggle('hidden')});
document.getElementById('notifBtn').addEventListener('click',function(){closeAll();document.getElementById('notifDropdown').classList.toggle('hidden')});
document.getElementById('markAllReadBtn').addEventListener('click',function(){document.querySelectorAll('.notif-dot').forEach(function(d){d.classList.add('hidden')});document.getElementById('notifBadge').classList.add('hidden')});
document.getElementById('searchInput').addEventListener('focus',function(){closeAll();document.getElementById('searchDropdown').classList.remove('hidden')});
function closeAll(){document.getElementById('userDropdown').classList.add('hidden');document.getElementById('notifDropdown').classList.add('hidden');document.getElementById('searchDropdown').classList.add('hidden')}
document.addEventListener('click',function(e){if(!e.target.closest('#avatarBtn')&&!e.target.closest('#userDropdown'))document.getElementById('userDropdown').classList.add('hidden');if(!e.target.closest('#notifBtn')&&!e.target.closest('#notifDropdown'))document.getElementById('notifDropdown').classList.add('hidden');if(!e.target.closest('#searchContainer'))document.getElementById('searchDropdown').classList.add('hidden')});
document.getElementById('logoutBtn').addEventListener('click',function(){if(confirm('Are you sure you want to logout?')){alert('You have been logged out.');window.location.href='../index.html'}});
function showToast(msg){var t=document.getElementById('successToast');document.getElementById('toastMsg').textContent=msg;t.classList.remove('hidden');setTimeout(function(){t.classList.add('hidden')},3000)}

// Scroll to section
function scrollToSection(sectionId){
  var section=document.getElementById(sectionId);
  if(!section)return;
  var main=document.getElementById('mainContent');
  var offset=section.offsetTop-main.offsetTop-24;
  main.scrollTo({top:offset,behavior:'smooth'});
  section.classList.add('section-highlight');
  setTimeout(function(){section.classList.remove('section-highlight')},1600);
}

// Per-section validation
function isSectionComplete(s){
  switch(s){
    case 'A':{var el=document.getElementById('sectionA');var texts=el.querySelectorAll('input[type="text"][data-required="true"]');return Array.from(texts).every(function(i){return i.value.trim()!==''})&&document.querySelector('input[name="civil"]:checked')!==null&&document.querySelector('input[name="gender"]:checked')!==null;}
    case 'B':{var el=document.getElementById('sectionB');var texts=el.querySelectorAll('input[type="text"][data-required="true"]');return Array.from(texts).every(function(i){return i.value.trim()!==''})&&document.querySelector('input[name="jobtime"]:checked')!==null&&document.querySelector('input[name="related"]:checked')!==null;}
    case 'C':return ['c1','c2','c3'].every(function(n){return document.querySelector('input[name="'+n+'"]:checked')!==null});
    case 'D':return ['d1','d2','d3','d4','d5','d6','d7','d8'].every(function(row){var cbs=document.querySelectorAll('input[data-row="'+row+'"]');return Array.from(cbs).some(function(cb){return cb.checked})});
    case 'E':{var el=document.getElementById('sectionE');var tas=el.querySelectorAll('textarea[data-required="true"]');return Array.from(tas).every(function(t){return t.value.trim()!==''});}
  }
  return false;
}

// Update stepper
function updateStepper(){
  var secs=['A','B','C','D','E'];var activeFound=false;
  secs.forEach(function(s){
    var circle=document.getElementById('step'+s),label=document.getElementById('step'+s+'Label'),badge=document.getElementById('badge'+s),done=isSectionComplete(s);
    done?badge.classList.remove('hidden'):badge.classList.add('hidden');
    if(done){circle.className='w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold transition-all';circle.innerHTML='&#10003;';label.className='text-[13px] font-semibold text-blue-600 transition-all'}
    else if(!activeFound){circle.className='w-7 h-7 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center text-xs font-bold transition-all';circle.innerHTML=s;label.className='text-[13px] font-semibold text-blue-600 transition-all';activeFound=true}
    else{circle.className='w-7 h-7 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center text-xs font-bold transition-all';circle.innerHTML=s;label.className='text-[13px] font-semibold text-gray-400 transition-all'}
  });
}

function saveDraft(){var c=['A','B','C','D','E'].filter(function(s){return isSectionComplete(s)}).length;showToast('Draft saved! '+c+' of 5 sections completed.')}
function submitSurvey(){var names={A:'Graduate Profile',B:'Employment',C:'Relevance',D:'Competency',E:'Recommendations'};var inc=['A','B','C','D','E'].filter(function(s){return !isSectionComplete(s)});if(inc.length>0){alert('Please complete all required fields:\n  • '+inc.map(function(s){return 'Section '+s+' ('+names[s]+')'}).join('\n  • '));scrollToSection('section'+inc[0])}else{showToast('Survey submitted successfully! Thank you for completing the Graduate Tracer Survey.')}}

document.addEventListener('input',updateStepper);
document.addEventListener('change',updateStepper);
updateStepper();

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

 // REACTIVE
  function toggleSidebar(){const s=document.getElementById("sidebar"),o=document.getElementById("sidebarOverlay");s.classList.toggle("-translate-x-full");o.classList.toggle("hidden");}
  function closeSidebar(){document.getElementById("sidebar").classList.add("-translate-x-full");document.getElementById("sidebarOverlay").classList.add("hidden");}