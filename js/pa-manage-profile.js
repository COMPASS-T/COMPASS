const $=id=>document.getElementById(id);
const sidebar=$('sidebar'),overlay=$('sidebarOverlay'),userDrop=$('userDropdown'),notifDrop=$('notifDropdown'),searchDrop=$('searchDropdown'),modal=$('addModal'),directory=$('institutionDirectory'),editPage=$('editInstitutionPage'),list=$('institutionList'),empty=$('emptyState');
let currentEditBtn=null,toastTimer;
const systemLogs=[];

function addLog(category,severity,module,event,details){systemLogs.push({category,severity,module,event,details,date:new Date().toLocaleString()})}
function toggleSidebar(){sidebar.classList.toggle('-translate-x-full');overlay.classList.toggle('hidden')}
function closeSidebar(){sidebar.classList.add('-translate-x-full');overlay.classList.add('hidden')}
function closeAll(x){if(x!=='user')userDrop.classList.add('hidden');if(x!=='notif')notifDrop.classList.add('hidden');if(x!=='search')searchDrop.classList.add('hidden')}
function openModal(){modal.classList.remove('hidden')}
function closeModal(){modal.classList.add('hidden')}
function checkEmpty(){const none=!list.querySelector('.institution-card');list.classList.toggle('hidden',none);empty.classList.toggle('hidden',!none)}
function toast(msg){clearTimeout(toastTimer);$('toastMsg').textContent=msg;$('successToast').classList.remove('hidden');toastTimer=setTimeout(()=>$('successToast').classList.add('hidden'),2500)}

$('sidebarToggleBtn').onclick=toggleSidebar;
$('closeSidebarBtn').onclick=closeSidebar;
overlay.onclick=closeSidebar;

$('avatarBtn').onclick=e=>{e.stopPropagation();const closed=userDrop.classList.contains('hidden');closeAll();if(closed)userDrop.classList.remove('hidden')};
$('notifBtn').onclick=e=>{e.stopPropagation();const closed=notifDrop.classList.contains('hidden');closeAll();if(closed)notifDrop.classList.remove('hidden')};
$('searchInput').onfocus=()=>{closeAll('search');searchDrop.classList.remove('hidden')};

document.addEventListener('click',e=>{
  if(!e.target.closest('#userWrap'))userDrop.classList.add('hidden');
  if(!e.target.closest('#notifWrap'))notifDrop.classList.add('hidden');
  if(!e.target.closest('#searchContainer'))searchDrop.classList.add('hidden');
});

$('markAllReadBtn').onclick=()=>$('notifBadge')?.classList.add('hidden');

document.querySelectorAll('.institutionLogo,.editInstitutionLogo').forEach(img=>{
  const show=()=>{img.classList.remove('hidden');img.parentElement.querySelector('.institutionLogoFallback,.editLogoFallback')?.classList.add('hidden')};
  if(img.complete&&img.naturalWidth>0)show();
  img.onload=show;
  img.onerror=()=>img.classList.add('hidden');
});

$('addInstitutionBtn').onclick=openModal;
$('emptyAddInstitutionBtn').onclick=openModal;
$('closeAddModal').onclick=closeModal;
$('cancelAddModal').onclick=closeModal;
modal.onclick=e=>{if(e.target===modal)closeModal()};

list.onclick=e=>{
  const edit=e.target.closest('.viewEditBtn'),del=e.target.closest('.deleteInstitutionBtn');
  if(edit)openEdit(edit);

  if(del){
    const card=del.closest('.institution-card'),name=card.querySelector('.cardName').textContent;
    if(confirm(`Are you sure you want to delete ${name}?`)){
      card.remove();addLog('Institution','Medium','Manage Profile','Institution Deleted',name);checkEmpty();toast('Institution deleted.');
    }
  }
};

function openEdit(btn){
  currentEditBtn=btn;
  $('editName').value=btn.dataset.name||'';
  $('editType').value=btn.dataset.type||'University';
  $('editEmail').value=btn.dataset.email||'';
  $('editAddress').value=btn.dataset.address||'';
  $('editPhone').value=btn.dataset.phone||'';
  $('editWebsite').value=btn.dataset.website||'';
  $('editYear').value=btn.dataset.year||'';
  $('editHeadingName').textContent=btn.dataset.name||'Institution';
  directory.classList.add('hidden');editPage.classList.remove('hidden');
  document.querySelector('main').scrollTop=0;
  addLog('Institution','Info','Manage Profile','Institution Viewed',btn.dataset.name||'Institution');
}

$('backToDirectoryBtn').onclick=()=>{
  editPage.classList.add('hidden');directory.classList.remove('hidden');
  document.querySelector('main').scrollTop=0;
};

$('saveInstitutionChangesBtn').onclick=()=>{
  const name=$('editName').value.trim();
  if(!name)return alert('Institution name is required.');

  if(currentEditBtn){
    Object.assign(currentEditBtn.dataset,{name,type:$('editType').value,email:$('editEmail').value,address:$('editAddress').value,phone:$('editPhone').value,website:$('editWebsite').value,year:$('editYear').value});

    const card=currentEditBtn.closest('.institution-card');
    card.querySelector('.cardName').textContent=name;
    card.querySelector('.cardType').textContent=$('editType').value+' · Naga City';
    card.querySelector('.cardEmail').textContent=$('editEmail').value;
    card.querySelector('.cardAddress').textContent=$('editAddress').value;
    card.querySelector('.cardYear').textContent=$('editYear').value?'Est. '+$('editYear').value:'Year not specified';
  }

  $('editHeadingName').textContent=name;
  addLog('Institution','Info','Manage Profile','Institution Updated',name);
  toast('Institution changes saved.');
};

$('saveInstitution').onclick=()=>{
  const name=$('modalName').value.trim(),type=$('modalType').value,year=$('modalYear').value.trim(),email=$('modalEmail').value.trim(),address=$('modalAddress').value.trim(),website=$('modalWebsite').value.trim(),phone=$('modalPhone').value.trim();
  if(!name||!email||!address)return alert('Please complete Institution Name, Email and Address.');

  const initials=name.split(' ').filter(Boolean).slice(0,3).map(x=>x[0]).join('').toUpperCase();
  const card=document.createElement('div');
  card.className='institution-card bg-white border border-gray-200 rounded-xl p-4';

  card.innerHTML=`<div class="flex items-start gap-3 mb-4"><div class="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shrink-0"><span class="text-[10px] font-extrabold text-blue-600">${initials}</span></div><div class="flex-1 min-w-0"><h3 class="cardName text-[14px] font-bold text-gray-900 truncate"></h3><p class="cardType text-[11px] text-gray-500"></p></div><span class="px-2.5 py-0.5 bg-green-100 text-green-700 text-[10px] font-semibold rounded-full">Active</span></div><div class="space-y-[7px] text-[11px] mb-4"><p class="cardEmail text-gray-600"></p><p class="cardAddress text-gray-600"></p><p class="cardYear text-gray-600"></p></div><div class="flex gap-2 pt-3 border-t"><button class="viewEditBtn flex-1 h-9 bg-blue-600 text-white text-[12px] font-semibold rounded-lg">View / Edit</button><button class="deleteInstitutionBtn px-4 h-9 border border-red-200 text-red-500 text-[12px] font-semibold rounded-lg">Delete</button></div>`;

  card.querySelector('.cardName').textContent=name;
  card.querySelector('.cardType').textContent=type+' · Registered Institution';
  card.querySelector('.cardEmail').textContent=email;
  card.querySelector('.cardAddress').textContent=address;
  card.querySelector('.cardYear').textContent=year?'Est. '+year:'Year not specified';
  Object.assign(card.querySelector('.viewEditBtn').dataset,{name,type,email,address,phone,website,year});

  list.appendChild(card);
  ['modalName','modalYear','modalEmail','modalAddress','modalWebsite','modalPhone'].forEach(id=>$(id).value='');
  closeModal();checkEmpty();addLog('Institution','Info','Manage Profile','Institution Registered',name);
  toast('Institution registered successfully.');
};

$('exportLogBtn').onclick=()=>{
  const rows=[['Category','Severity','Module','Event','Details','Date']];
  systemLogs.forEach(x=>rows.push([x.category,x.severity,x.module,x.event,x.details,x.date]));

  if(!systemLogs.length)rows.push(['System','Info','Platform Administrator','No Activity','No recorded activity in this session',new Date().toLocaleString()]);

  const csv=rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})),a=document.createElement('a');

  a.href=url;a.download='COMPASS-system-log.csv';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
  toast('System log exported.');
};

$('logoutBtn').onclick=()=>{if(confirm('Are you sure you want to logout?'))location.href='../index.html'};

document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  closeAll();closeModal();
  if(innerWidth<1024)closeSidebar();
});

addLog('System','Info','Manage Profile','Page Opened','Register Institution page opened');
checkEmpty();