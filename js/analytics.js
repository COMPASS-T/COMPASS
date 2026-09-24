const data={
  BSIT:{employment:88,alignment:82,relevance:4.4,competency:4.3},
  BSCS:{employment:91,alignment:89,relevance:4.6,competency:4.5},
  BSIS:{employment:84,alignment:76,relevance:4.1,competency:4},
  BSCpE:{employment:86,alignment:80,relevance:4.3,competency:4.2},
  BSBA:{employment:82,alignment:74,relevance:3.9,competency:3.8},
  BSA:{employment:85,alignment:78,relevance:4.2,competency:4.1}
};

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('-translate-x-full');
  document.getElementById('sidebarOverlay').classList.toggle('hidden');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.add('-translate-x-full');
  document.getElementById('sidebarOverlay').classList.add('hidden');
}

const notifBtn=document.getElementById('notifBtn'),notifDropdown=document.getElementById('notifDropdown');
const avatarBtn=document.getElementById('avatarBtn'),userDropdown=document.getElementById('userDropdown');
const searchInput=document.getElementById('searchInput'),searchDropdown=document.getElementById('searchDropdown');

function closeMenus(except){
  [notifDropdown,userDropdown,searchDropdown].forEach(x=>{if(x&&x!==except)x.classList.add('hidden')});
}

notifBtn?.addEventListener('click',e=>{
  e.stopPropagation();closeMenus(notifDropdown);notifDropdown.classList.toggle('hidden');
});
avatarBtn?.addEventListener('click',e=>{
  e.stopPropagation();closeMenus(userDropdown);userDropdown.classList.toggle('hidden');
});
searchInput?.addEventListener('focus',()=>{
  closeMenus(searchDropdown);searchDropdown.classList.remove('hidden');
});
document.addEventListener('click',e=>{
  if(!notifBtn?.contains(e.target)&&!notifDropdown?.contains(e.target))notifDropdown?.classList.add('hidden');
  if(!avatarBtn?.contains(e.target)&&!userDropdown?.contains(e.target))userDropdown?.classList.add('hidden');
  if(!searchInput?.contains(e.target)&&!searchDropdown?.contains(e.target))searchDropdown?.classList.add('hidden');
});

document.getElementById('markAllReadBtn')?.addEventListener('click',()=>{
  document.getElementById('notifBadge')?.classList.add('hidden');
  notifDropdown?.classList.add('hidden');
});

function rating(v){
  if(v>=4.5)return['Excellent','bg-green-100 text-green-700'];
  if(v>=4)return['Good','bg-blue-100 text-blue-700'];
  if(v>=3.5)return['Fair','bg-yellow-100 text-yellow-700'];
  return['Low','bg-red-100 text-red-700'];
}

function initCharts(){
  const programs=Object.keys(data);
  const employment=programs.map(p=>data[p].employment);

  new Chart(document.getElementById('employmentChart'),{
    type:'bar',
    data:{labels:programs,datasets:[{
      data:employment,borderRadius:5,barThickness:34,
      backgroundColor:employment.map(v=>v>=90?'#22c55e':v>=85?'#3b82f6':v>=80?'#f59e0b':'#ef4444')
    }]},
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.parsed.y+'%'}}},
      scales:{x:{grid:{display:false}},y:{min:70,max:100,grid:{color:'#f1f5f9'},ticks:{callback:v=>v+'%'}}}
    }
  });

  const sorted=programs.map(p=>({name:p,value:data[p].alignment})).sort((a,b)=>b.value-a.value);
  new Chart(document.getElementById('alignmentChart'),{
    type:'bar',
    data:{labels:sorted.map(x=>x.name),datasets:[{
      data:sorted.map(x=>x.value),borderRadius:4,barThickness:20,
      backgroundColor:sorted.map(x=>x.value>=80?'#3b82f6':x.value>=75?'#f59e0b':'#ef4444')
    }]},
    options:{
      indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{x:{min:60,max:100,grid:{color:'#f1f5f9'},ticks:{callback:v=>v+'%'}},y:{grid:{display:false}}}
    }
  });

  new Chart(document.getElementById('trendChart'),{
    type:'line',
    data:{
      labels:['2021','2022','2023','2024','2025'],
      datasets:[
        {label:'Institutional',data:[79.2,81.5,83,83.9,86],borderColor:'#3b82f6',backgroundColor:'rgba(59,130,246,.06)',fill:true,tension:.35,borderWidth:2.5,pointRadius:3},
        {label:'National Benchmark',data:[78,79.5,81,82.5,84],borderColor:'#94a3b8',borderDash:[6,3],tension:.35,borderWidth:2,pointRadius:3}
      ]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'bottom',labels:{usePointStyle:true,boxWidth:6,font:{size:11}}}},
      scales:{x:{grid:{display:false}},y:{min:70,max:95,grid:{color:'#f1f5f9'},ticks:{callback:v=>v+'%'}}}
    }
  });
}

function buildRelevance(){
  const box=document.getElementById('relevanceGrid');box.innerHTML='';
  Object.entries(data).forEach(([name,d])=>{
    const color=d.relevance>=4.5?'#22c55e':d.relevance>=4?'#3b82f6':d.relevance>=3.5?'#f59e0b':'#ef4444';
    box.innerHTML+=`
      <div class="border border-gray-200 rounded-lg p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-[12px] font-semibold">${name}</span>
          <span class="text-[16px] font-bold">${d.relevance.toFixed(1)}<small class="text-[10px] text-gray-400 font-normal">/5.0</small></span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
          <div class="h-full rounded-full" style="width:${d.relevance/5*100}%;background:${color}"></div>
        </div>
      </div>`;
  });
}

function buildCompetency(){
  const body=document.getElementById('competencyTableBody');body.innerHTML='';
  Object.entries(data).forEach(([name,d])=>{
    const [label,cls]=rating(d.competency);
    const trend=d.competency>=4.3?'↑':d.competency>=4?'→':'↓';
    const color=d.competency>=4.3?'text-green-500':d.competency>=4?'text-gray-400':'text-red-500';

    body.innerHTML+=`
      <tr class="border-b border-gray-100 hover:bg-gray-50">
        <td class="px-5 py-3.5 font-semibold text-gray-900">${name}</td>
        <td class="text-center px-4 py-3.5">${d.competency.toFixed(1)}/5.0</td>
        <td class="text-center px-4 py-3.5 font-bold ${color}">${trend}</td>
        <td class="text-center px-4 py-3.5"><span class="px-2.5 py-1 rounded-full text-[10px] font-semibold ${cls}">${label}</span></td>
      </tr>`;
  });
}

function buildPreparedness(){
  const prep={BSIT:85,BSCS:92,BSIS:78,BSCpE:83,BSBA:72,BSA:80};
  const box=document.getElementById('preparednessCards');box.innerHTML='';

  Object.entries(prep).forEach(([name,score])=>{
    const color=score>=85?'#22c55e':score>=80?'#3b82f6':score>=75?'#f59e0b':'#ef4444';
    const label=score>=85?'Well Prepared':score>=80?'Prepared':score>=75?'Moderate':'Needs Support';

    box.innerHTML+=`
      <div class="border border-gray-200 rounded-lg p-3">
        <div class="flex justify-between items-center mb-2">
          <span class="text-[11px] font-semibold">${name}</span>
          <span class="text-[15px] font-bold" style="color:${color}">${score}%</span>
        </div>
        <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div class="h-full rounded-full" style="width:${score}%;background:${color}"></div>
        </div>
        <p class="text-[10px] text-gray-500 mt-2">${label}</p>
      </div>`;
  });
}

document.getElementById('logoutBtn')?.addEventListener('click',()=>{
  console.log('Logout clicked');
  // window.location.href="../index.html";
});

document.addEventListener('DOMContentLoaded',()=>{
  initCharts();
  buildRelevance();
  buildCompetency();
  buildPreparedness();
});