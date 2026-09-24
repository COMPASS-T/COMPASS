document.getElementById('avatarBtn').addEventListener('click',function(){closeAll();document.getElementById('userDropdown').classList.toggle('hidden')});
document.getElementById('notifBtn').addEventListener('click',function(){closeAll();document.getElementById('notifDropdown').classList.toggle('hidden')});
document.getElementById('markAllReadBtn').addEventListener('click',function(){document.querySelectorAll('.notif-dot').forEach(function(d){d.classList.add('hidden')});document.getElementById('notifBadge').classList.add('hidden')});
document.getElementById('searchInput').addEventListener('focus',function(){closeAll();document.getElementById('searchDropdown').classList.remove('hidden')});
function closeAll(){document.getElementById('userDropdown').classList.add('hidden');document.getElementById('notifDropdown').classList.add('hidden');document.getElementById('searchDropdown').classList.add('hidden')}
document.addEventListener('click',function(e){if(!e.target.closest('#avatarBtn')&&!e.target.closest('#userDropdown'))document.getElementById('userDropdown').classList.add('hidden');if(!e.target.closest('#notifBtn')&&!e.target.closest('#notifDropdown'))document.getElementById('notifDropdown').classList.add('hidden');if(!e.target.closest('#searchContainer'))document.getElementById('searchDropdown').classList.add('hidden')});
document.getElementById('logoutBtn').addEventListener('click',function(){if(confirm('Are you sure you want to logout?')){alert('You have been logged out.');window.location.href='../index.html'}});
function showToast(msg){var t=document.getElementById('successToast');document.getElementById('toastMsg').textContent=msg;t.classList.remove('hidden');setTimeout(function(){t.classList.add('hidden')},3000)}

function scrollToSection(id){var s=document.getElementById(id);if(!s)return;var m=document.getElementById('mainContent');var o=s.offsetTop-m.offsetTop-24;m.scrollTo({top:o,behavior:'smooth'});s.classList.add('section-highlight');setTimeout(function(){s.classList.remove('section-highlight')},1600)}

function isSectionComplete(s){
  var el=document.getElementById('section'+s);
  if(s==='A'){return ['likertA1','likertA2','likertA3','likertA4','likertA5'].every(function(n){return document.querySelector('input[name="'+n+'"]:checked')!==null})}
  if(s==='B'){return ['likertB1','likertB2','likertB3','likertB4','likertB5'].every(function(n){return document.querySelector('input[name="'+n+'"]:checked')!==null})}
  if(s==='C'){var tas=el.querySelectorAll('textarea[data-required="true"]');return Array.from(tas).every(function(t){return t.value.trim()!==''})}
  return false;
}

function updateStepper(){
  var sections=['A','B','C'];var activeFound=false;
  sections.forEach(function(s){
    var circle=document.getElementById('step'+s);var label=document.getElementById('step'+s+'Label');var badge=document.getElementById('badge'+s);var done=isSectionComplete(s);
    if(done){badge.classList.remove('hidden')}else{badge.classList.add('hidden')}
    if(done){circle.className='w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold transition-all';circle.innerHTML='&#10003;';label.className='text-[13px] font-semibold text-blue-600 transition-all'}
    else if(!activeFound){circle.className='w-7 h-7 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center text-xs font-bold transition-all';circle.innerHTML=s;label.className='text-[13px] font-semibold text-blue-600 transition-all';activeFound=true}
    else{circle.className='w-7 h-7 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center text-xs font-bold transition-all';circle.innerHTML=s;label.className='text-[13px] font-semibold text-gray-400 transition-all'}
  });
}

function saveDraft(){var c=['A','B','C'].filter(function(s){return isSectionComplete(s)}).length;showToast('Draft saved! '+c+' of 3 sections completed.')}
function submitForm(){
  var names={A:'Course Relevance',B:'Teaching Quality',C:'Recommendations'};var inc=['A','B','C'].filter(function(s){return !isSectionComplete(s)});
  if(inc.length>0){var m=inc.map(function(s){return 'Section '+s+' ('+names[s]+')'}).join('\n  • ');alert('Please complete all required fields:\n  • '+m);scrollToSection('section'+inc[0])}
  else{showToast('Curriculum feedback submitted successfully!')}
}

document.addEventListener('input',updateStepper);document.addEventListener('change',updateStepper);updateStepper();


//reactive
 function toggleSidebar(){document.getElementById('sidebar').classList.remove('-translate-x-full');document.getElementById('sidebarOverlay').classList.remove('hidden');}
 function closeSidebar(){document.getElementById('sidebar').classList.add('-translate-x-full');document.getElementById('sidebarOverlay').classList.add('hidden');}