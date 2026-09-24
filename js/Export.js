const $=id=>document.getElementById(id);

const programData={
  BSIT:{employment:88,alignment:82,relevance:4.4,competency:4.3},
  BSCS:{employment:91,alignment:89,relevance:4.6,competency:4.5},
  BSIS:{employment:84,alignment:76,relevance:4.1,competency:4},
  BSCpE:{employment:86,alignment:80,relevance:4.3,competency:4.2},
  BSBA:{employment:82,alignment:74,relevance:3.9,competency:3.8},
  BSA:{employment:85,alignment:78,relevance:4.2,competency:4.1}
};
let selectedCategory='employment';

function toggleSidebar(){$('sidebar')?.classList.toggle('-translate-x-full');$('sidebarOverlay')?.classList.toggle('hidden')}
function closeSidebar(){$('sidebar')?.classList.add('-translate-x-full');$('sidebarOverlay')?.classList.add('hidden')}

const notifBtn=$('notifBtn'),notif=$('notifDropdown'),avatarBtn=$('avatarBtn'),user=$('userDropdown'),search=$('searchInput'),searchDrop=$('searchDropdown');

notifBtn?.addEventListener('click',e=>{e.stopPropagation();user?.classList.add('hidden');searchDrop?.classList.add('hidden');notif?.classList.toggle('hidden')});
avatarBtn?.addEventListener('click',e=>{e.stopPropagation();notif?.classList.add('hidden');searchDrop?.classList.add('hidden');user?.classList.toggle('hidden')});
search?.addEventListener('focus',()=>{notif?.classList.add('hidden');user?.classList.add('hidden');searchDrop?.classList.remove('hidden')});

document.addEventListener('click',e=>{
  if(!notifBtn?.contains(e.target)&&!notif?.contains(e.target))notif?.classList.add('hidden');
  if(!avatarBtn?.contains(e.target)&&!user?.contains(e.target))user?.classList.add('hidden');
  if(!search?.contains(e.target)&&!searchDrop?.contains(e.target))searchDrop?.classList.add('hidden');
});

function selectCategory(btn,cat){
  selectedCategory=cat;
  document.querySelectorAll('.export-cat').forEach(x=>{
    x.classList.remove('border-blue-500','bg-blue-50','text-blue-700');
    x.classList.add('border-gray-200','bg-white');
  });
  btn.classList.remove('border-gray-200','bg-white');
  btn.classList.add('border-blue-500','bg-blue-50','text-blue-700');
}

function rows(cat=selectedCategory){
  const d=Object.entries(programData);
  if(cat==='employment')return [['Program','Employment %'],...d.map(([p,x])=>[p,x.employment])];
  if(cat==='alignment')return [['Program','Alignment %'],...d.map(([p,x])=>[p,x.alignment])];
  if(cat==='relevance')return [['Program','Relevance / 5'],...d.map(([p,x])=>[p,x.relevance])];
  if(cat==='competency')return [['Program','Competency / 5'],...d.map(([p,x])=>[p,x.competency])];
  return [['Program','Employment %','Alignment %','Relevance','Competency'],...d.map(([p,x])=>[p,x.employment,x.alignment,x.relevance,x.competency])];
}

function exportCSV(cat=selectedCategory){
  const csv=rows(cat).map(r=>r.join(',')).join('\n');
  downloadBlob(new Blob([csv],{type:'text/csv;charset=utf-8'}),`COMPASS_${cat}.csv`);
}

function exportPDF(cat=selectedCategory){
  if(!window.jspdf?.jsPDF)return showToast('PDF library failed to load');
  const {jsPDF}=window.jspdf,doc=new jsPDF(),r=rows(cat);
  doc.setFontSize(16);doc.text('COMPASS QA Export',14,20);
  doc.setFontSize(10);doc.text(`Category: ${cat}`,14,28);
  if(typeof doc.autoTable==='function')doc.autoTable({head:[r[0]],body:r.slice(1),startY:35});
  doc.save(`COMPASS_${cat}.pdf`);
}

function doExport(){
  const f=document.querySelector('input[name="format"]:checked')?.value;
  if(!f)return showToast('Please select an export format');
  try{
    if(f==='csv')exportCSV();else if(f==='excel')exportExcel();else exportPDF();
    showToast(`${f.toUpperCase()} export downloaded successfully`);
  }catch(e){console.error(e);showToast('Export failed. Check console.')}
}

function downloadHistory(cat,format){
  if(format==='csv')exportCSV(cat);
  else if(format==='excel')exportExcel(cat);
  else exportPDF(cat);
  showToast('Export downloaded successfully');
}

function downloadBlob(blob,name){
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function showToast(msg){
  const t=$('toast');if(!t)return;
  t.textContent=msg;t.classList.remove('hidden');
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>t.classList.add('hidden'),2200);
}