const $=id=>document.getElementById(id);

const reports=[
  ['Annual Outcomes Report','Institutional','Jan 15, 2025','Generated'],
  ['Employment Rate Analysis','Analytics','Jan 10, 2025','Generated'],
  ['Curriculum Alignment Report','Curriculum','Jan 8, 2025','Pending'],
  ['Competency Utilization Report','Competency','Dec 20, 2024','Generated'],
  ['Accreditation Evidence Package','Accreditation','Dec 15, 2024','Draft'],
  ['Graduate Tracer Study Summary','Tracer','Dec 10, 2024','Pending']
];

const previewData={
  'Annual Outcomes Report':{summary:'Comprehensive institutional assessment of graduate outcomes for AY 2024-2025.',findings:['Institutional employment reached 86%.','Job-program alignment is 79.8%.','Curriculum relevance remains above 4.0/5.']},
  'Employment Rate Analysis':{summary:'Analysis of graduate employment performance and program-level employment outcomes.',findings:['BSCS recorded 91% employment.','BSIT recorded 88% employment.','BSBA recorded the lowest rate at 82%.']},
  'Competency Utilization Report':{summary:'Assessment of how graduates utilize competencies acquired from their academic programs.',findings:['Technical competency remains strong.','Communication skills require continued development.','Leadership competency requires additional support.']},
  'Accreditation Evidence Package':{summary:'Compiled institutional evidence supporting accreditation and quality assurance review.',findings:['Graduate outcomes evidence compiled.','Curriculum relevance results included.','Tracer-study indicators available for accreditation review.']}
};

function toggleSidebar(){$('sidebar').classList.toggle('-translate-x-full');$('sidebarOverlay').classList.toggle('hidden')}
function closeSidebar(){$('sidebar').classList.add('-translate-x-full');$('sidebarOverlay').classList.add('hidden')}

const notifBtn=$('notifBtn'),notifDropdown=$('notifDropdown'),avatarBtn=$('avatarBtn'),userDropdown=$('userDropdown'),searchInput=$('searchInput'),searchDropdown=$('searchDropdown');
function closeMenus(x){[notifDropdown,userDropdown,searchDropdown].forEach(m=>{if(m&&m!==x)m.classList.add('hidden')})}

notifBtn?.addEventListener('click',e=>{e.stopPropagation();closeMenus(notifDropdown);notifDropdown.classList.toggle('hidden')});
avatarBtn?.addEventListener('click',e=>{e.stopPropagation();closeMenus(userDropdown);userDropdown.classList.toggle('hidden')});
searchInput?.addEventListener('focus',()=>{closeMenus(searchDropdown);searchDropdown?.classList.remove('hidden')});

document.addEventListener('click',e=>{
  if(!notifBtn?.contains(e.target)&&!notifDropdown?.contains(e.target))notifDropdown?.classList.add('hidden');
  if(!avatarBtn?.contains(e.target)&&!userDropdown?.contains(e.target))userDropdown?.classList.add('hidden');
  if(!searchInput?.contains(e.target)&&!searchDropdown?.contains(e.target))searchDropdown?.classList.add('hidden');
});

$('markAllReadBtn')?.addEventListener('click',()=>{$('notifBadge')?.classList.add('hidden');notifDropdown?.classList.add('hidden')});

function showToast(msg){$('toastMsg').textContent=msg;$('successToast').classList.remove('hidden');setTimeout(()=>$('successToast').classList.add('hidden'),2000)}

function openModal(type){
  if(type)$('reportType').value=type;
  $('generateModal').classList.remove('hidden');$('generateModal').classList.add('flex');
}
function closeModal(){$('generateModal').classList.add('hidden');$('generateModal').classList.remove('flex')}
function generateReport(){const type=$('reportType').value;closeModal();showToast(`${type} generation started`)}

function previewReport(title){
  const d=previewData[title]||{summary:'Quality assurance report generated from COMPASS institutional tracer-study data.',findings:['Graduate outcomes data reviewed.','Program performance indicators assessed.','Results prepared for quality assurance review.']};
  $('previewTitle').textContent=title;$('previewReportName').textContent=title;$('previewSummary').textContent=d.summary;
  $('previewFindings').innerHTML=d.findings.map(x=>`<p>• ${x}</p>`).join('');
  $('previewModal').classList.remove('hidden');$('previewModal').classList.add('flex');
}
function closePreview(){$('previewModal').classList.add('hidden');$('previewModal').classList.remove('flex')}

function statusClass(s){return s==='Generated'?'bg-green-100 text-green-700':s==='Pending'?'bg-yellow-100 text-yellow-700':'bg-gray-100 text-gray-600'}

function buildReports(){
  $('reportTableBody').innerHTML=reports.map(r=>`<tr class="report-row border-b border-gray-100 hover:bg-gray-50" data-search="${r.join(' ').toLowerCase()}">
    <td class="px-5 py-3.5 font-semibold">${r[0]}</td><td class="text-center px-4">${r[1]}</td><td class="text-center px-4 text-gray-500">${r[2]}</td>
    <td class="text-center px-4"><span class="px-2 py-1 rounded-full text-[10px] font-semibold ${statusClass(r[3])}">${r[3]}</span></td>
    <td class="text-center px-4">${r[3]==='Generated'?`<button onclick="previewReport('${r[0]}')" class="text-blue-600 font-semibold">Preview</button>`:`<button onclick="openModal('${r[0]}')" class="text-blue-600 font-semibold">${r[3]==='Draft'?'Continue':'Generate'}</button>`}</td>
  </tr>`).join('');
}

searchInput?.addEventListener('input',e=>{
  const q=e.target.value.toLowerCase().trim();
  document.querySelectorAll('.report-card,.report-row').forEach(x=>x.style.display=!q||x.dataset.search.includes(q)?'':'none');
  if(q)searchDropdown?.classList.add('hidden');
});

$('generateModal')?.addEventListener('click',e=>{if(e.target===$('generateModal'))closeModal()});
$('previewModal')?.addEventListener('click',e=>{if(e.target===$('previewModal'))closePreview()});
$('logoutBtn')?.addEventListener('click',()=>console.log('Logout clicked'));
document.addEventListener('DOMContentLoaded',buildReports);
