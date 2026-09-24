document.getElementById('avatarBtn').addEventListener('click',function(){closeAll();document.getElementById('userDropdown').classList.toggle('hidden')});
document.getElementById('notifBtn').addEventListener('click',function(){closeAll();document.getElementById('notifDropdown').classList.toggle('hidden')});
document.getElementById('markAllReadBtn').addEventListener('click',function(){document.querySelectorAll('.notif-dot').forEach(function(d){d.classList.add('hidden')});document.getElementById('notifBadge').classList.add('hidden')});
document.getElementById('searchInput').addEventListener('focus',function(){closeAll();document.getElementById('searchDropdown').classList.remove('hidden')});
function closeAll(){document.getElementById('userDropdown').classList.add('hidden');document.getElementById('notifDropdown').classList.add('hidden');document.getElementById('searchDropdown').classList.add('hidden')}
document.addEventListener('click',function(e){if(!e.target.closest('#avatarBtn')&&!e.target.closest('#userDropdown'))document.getElementById('userDropdown').classList.add('hidden');if(!e.target.closest('#notifBtn')&&!e.target.closest('#notifDropdown'))document.getElementById('notifDropdown').classList.add('hidden');if(!e.target.closest('#searchContainer'))document.getElementById('searchDropdown').classList.add('hidden')});
document.getElementById('logoutBtn').addEventListener('click',function(){if(confirm('Are you sure you want to logout?')){alert('You have been logged out.');window.location.href='../index.html'}});
function showToast(msg){var t=document.getElementById('successToast');document.getElementById('toastMsg').textContent=msg;t.classList.remove('hidden');setTimeout(function(){t.classList.add('hidden')},3000)}
function toggleFaq(btn){var content=btn.nextElementSibling;var icon=btn.querySelector('svg');content.classList.toggle('hidden');icon.style.transform=content.classList.contains('hidden')?'':'rotate(180deg)'}

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

//reactive
 function toggleSidebar(){document.getElementById('sidebar').classList.remove('-translate-x-full');document.getElementById('sidebarOverlay').classList.remove('hidden');}
 function closeSidebar(){document.getElementById('sidebar').classList.add('-translate-x-full');document.getElementById('sidebarOverlay').classList.add('hidden');}