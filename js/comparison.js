const programData={
  BSIT:{employment:88,alignment:82,relevance:4.4,competency:4.3},
  BSCS:{employment:91,alignment:89,relevance:4.6,competency:4.5},
  BSIS:{employment:84,alignment:76,relevance:4.1,competency:4},
  BSCpE:{employment:86,alignment:80,relevance:4.3,competency:4.2},
  BSBA:{employment:82,alignment:74,relevance:3.9,competency:3.8},
  BSA:{employment:85,alignment:78,relevance:4.2,competency:4.1}
};

let compChart=null;
const $=id=>document.getElementById(id);
const notifBtn=$('notifBtn'),notifDropdown=$('notifDropdown'),avatarBtn=$('avatarBtn'),userDropdown=$('userDropdown'),searchInput=$('searchInput'),searchDropdown=$('searchDropdown');

function toggleSidebar(){$('sidebar').classList.toggle('-translate-x-full');$('sidebarOverlay').classList.toggle('hidden')}
function closeSidebar(){$('sidebar').classList.add('-translate-x-full');$('sidebarOverlay').classList.add('hidden')}
function closeMenus(except){[notifDropdown,userDropdown,searchDropdown].forEach(x=>{if(x&&x!==except)x.classList.add('hidden')})}

notifBtn?.addEventListener('click',e=>{e.stopPropagation();closeMenus(notifDropdown);notifDropdown.classList.toggle('hidden')});
avatarBtn?.addEventListener('click',e=>{e.stopPropagation();closeMenus(userDropdown);userDropdown.classList.toggle('hidden')});
searchInput?.addEventListener('focus',()=>{closeMenus(searchDropdown);searchDropdown?.classList.remove('hidden')});

document.addEventListener('click',e=>{
  if(!notifBtn?.contains(e.target)&&!notifDropdown?.contains(e.target))notifDropdown?.classList.add('hidden');
  if(!avatarBtn?.contains(e.target)&&!userDropdown?.contains(e.target))userDropdown?.classList.add('hidden');
  if(!searchInput?.contains(e.target)&&!searchDropdown?.contains(e.target))searchDropdown?.classList.add('hidden');
});

$('markAllReadBtn')?.addEventListener('click',()=>{$('notifBadge')?.classList.add('hidden');notifDropdown?.classList.add('hidden')});

function showToast(msg){
  if(!$('successToast'))return;
  $('toastMsg').textContent=msg;$('successToast').classList.remove('hidden');
  setTimeout(()=>$('successToast').classList.add('hidden'),2000);
}

function getStatus(d){
  const a=(d.employment+d.alignment+d.relevance*20+d.competency*20)/4;
  if(a>=86)return['Strong','bg-green-100 text-green-700'];
  if(a>=82)return['Satisfactory','bg-blue-100 text-blue-700'];
  if(a>=78)return['Needs Attention','bg-yellow-100 text-yellow-700'];
  return['Critical','bg-red-100 text-red-700'];
}

function badge(v,type){
  const t=type==='employment'?[88,85,82]:[85,80,75];
  if(v>=t[0])return'bg-green-100 text-green-700';
  if(v>=t[1])return'bg-blue-100 text-blue-700';
  if(v>=t[2])return'bg-yellow-100 text-yellow-700';
  return'bg-red-100 text-red-700';
}

function score(p){
  const d=programData[p];
  return(d.employment+d.alignment+d.relevance*20+d.competency*20)/4;
}

function updateComparison(){
  const selected=[...document.querySelectorAll('.program-check:checked')].map(x=>x.value);
  if(!selected.length){const f=document.querySelector('.program-check');if(f){f.checked=true;showToast('Select at least one program');return updateComparison()}return}
  updateChart(selected);updateTable(selected);updateGap(selected);updateCards(selected);
}

function updateChart(selected){
  const canvas=$('comparisonChart');if(!canvas)return;
  if(compChart)compChart.destroy();

  compChart=new Chart(canvas,{
    type:'bar',
    data:{labels:selected,datasets:[
      {label:'Employment %',data:selected.map(p=>programData[p].employment),backgroundColor:'#3b82f6',borderRadius:4},
      {label:'Alignment %',data:selected.map(p=>programData[p].alignment),backgroundColor:'#22c55e',borderRadius:4},
      {label:'Relevance',data:selected.map(p=>programData[p].relevance*20),backgroundColor:'#f59e0b',borderRadius:4},
      {label:'Competency',data:selected.map(p=>programData[p].competency*20),backgroundColor:'#8b5cf6',borderRadius:4}
    ]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{usePointStyle:true,padding:18,font:{family:'Inter',size:11}}}},scales:{x:{grid:{display:false}},y:{min:60,max:100,grid:{color:'#f1f5f9'},ticks:{callback:v=>v+'%'}}}}
  });
}

function updateTable(selected){
  const body=$('comparisonTableBody');if(!body)return;body.innerHTML='';
  selected.forEach(name=>{
    const d=programData[name],[label,cls]=getStatus(d);
    body.innerHTML+=`<tr class="border-b border-gray-100 hover:bg-gray-50">
      <td class="px-5 py-3.5 font-semibold">${name}</td>
      <td class="text-center px-4"><span class="px-2 py-1 rounded-full font-semibold ${badge(d.employment,'employment')}">${d.employment}%</span></td>
      <td class="text-center px-4"><span class="px-2 py-1 rounded-full font-semibold ${badge(d.alignment,'alignment')}">${d.alignment}%</span></td>
      <td class="text-center px-4">${d.relevance.toFixed(1)}</td>
      <td class="text-center px-4">${d.competency.toFixed(1)}</td>
      <td class="text-center px-4"><span class="px-2.5 py-1 rounded-full text-[10px] font-semibold ${cls}">${label}</span></td>
    </tr>`;
  });
}

function updateGap(selected){
  const a=selected.map(p=>programData[p].alignment),c=selected.map(p=>programData[p].competency);
  const maxA=Math.max(...a),minA=Math.min(...a),maxC=Math.max(...c),minC=Math.min(...c);

  $('gapAnalysis').innerHTML=`
    <div class="border-l-4 border-red-400 bg-red-50/50 rounded-r-lg p-4"><p class="text-[10px] font-semibold text-gray-500 uppercase">Largest Gap · Alignment</p><p class="text-[22px] font-bold mt-1">${maxA-minA}%</p><p class="text-[12px] text-gray-600 mt-1">${selected[a.indexOf(maxA)]} (${maxA}%) vs ${selected[a.indexOf(minA)]} (${minA}%)</p></div>
    <div class="border-l-4 border-green-400 bg-green-50/50 rounded-r-lg p-4"><p class="text-[10px] font-semibold text-gray-500 uppercase">Competency Gap</p><p class="text-[22px] font-bold mt-1">${(maxC-minC).toFixed(1)}</p><p class="text-[12px] text-gray-600 mt-1">${selected[c.indexOf(maxC)]} (${maxC}) vs ${selected[c.indexOf(minC)]} (${minC})</p></div>`;
}

function updateCards(selected){
  const sorted=[...selected].sort((a,b)=>score(b)-score(a)),best=sorted[0],worst=sorted.at(-1);
  $('bestCard').innerHTML=card('green','Best Performing',best,programData[best]);
  $('attentionCard').innerHTML=card('red','Requiring Attention',worst,programData[worst]);
}

function card(color,title,name,d){
  return`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-2 rounded-full bg-${color}-500"></span><h2 class="text-[14px] font-semibold">${title}: ${name}</h2></div>
  <div class="grid grid-cols-2 gap-3">${metric('Employment',d.employment+'%')}${metric('Alignment',d.alignment+'%')}${metric('Relevance',d.relevance.toFixed(1))}${metric('Competency',d.competency.toFixed(1))}</div>`;
}

function metric(label,value){
  return`<div class="bg-gray-50 border border-gray-100 rounded-lg p-3"><p class="text-[10px] text-gray-500">${label}</p><p class="text-[17px] font-bold mt-1">${value}</p></div>`;
}

document.querySelectorAll('.program-check').forEach(x=>x.addEventListener('change',updateComparison));
$('batchFilter')?.addEventListener('change',()=>{updateComparison();showToast('Batch filter updated')});
$('yearFilter')?.addEventListener('change',()=>{updateComparison();showToast('Academic year updated')});
$('logoutBtn')?.addEventListener('click',()=>console.log('Logout clicked'));
document.addEventListener('DOMContentLoaded',updateComparison);