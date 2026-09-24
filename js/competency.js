const $=id=>document.getElementById(id);

/* SIDEBAR */
function toggleSidebar(){
  $('sidebar')?.classList.toggle('-translate-x-full');
  $('sidebarOverlay')?.classList.toggle('hidden');
}

function closeSidebar(){
  $('sidebar')?.classList.add('-translate-x-full');
  $('sidebarOverlay')?.classList.add('hidden');
}

/* DROPDOWNS */
function toggleDropdown(id,e){
  e?.stopPropagation();

  const d=$(id);
  if(!d)return;

  const hidden=d.classList.contains('hidden');

  $('notifDropdown')?.classList.add('hidden');
  $('userDropdown')?.classList.add('hidden');

  if(hidden)d.classList.remove('hidden');
}

document.addEventListener('click',e=>{

  const n=$('notifDropdown');
  const u=$('userDropdown');

  if(n&&!n.contains(e.target)&&!e.target.closest('[onclick*="notifDropdown"]'))
    n.classList.add('hidden');

  if(u&&!u.contains(e.target)&&!e.target.closest('[onclick*="userDropdown"]'))
    u.classList.add('hidden');
});

$('markAllReadBtn')?.addEventListener('click',e=>{
  e.stopPropagation();
  document.querySelectorAll('.notif-dot').forEach(x=>x.remove());
  $('notifBadge')?.classList.add('hidden');
});

/* DATA */
const programData={

BSIT:[
{name:'Networking & Infrastructure',utilization:4.6,importance:4.8,respondents:498,responses:[323,141,27,6,1]},
{name:'Web & Application Development',utilization:4.5,importance:4.7,respondents:492,responses:[301,151,31,7,2]},
{name:'Database Management',utilization:4.4,importance:4.6,respondents:487,responses:[275,161,39,10,2]},
{name:'Cybersecurity',utilization:4.2,importance:4.6,respondents:480,responses:[225,170,66,16,3]},
{name:'IT Support & Troubleshooting',utilization:4.4,importance:4.5,respondents:475,responses:[260,158,45,10,2]},
{name:'Systems Administration',utilization:3.9,importance:4.4,respondents:468,responses:[170,165,96,31,6]}
],

BSCS:[
{name:'Algorithms & Data Structures',utilization:4.5,importance:4.8,respondents:451,responses:[271,133,38,8,1]},
{name:'Software Development',utilization:4.7,importance:4.8,respondents:449,responses:[309,108,27,4,1]},
{name:'Database Systems',utilization:4.3,importance:4.5,respondents:444,responses:[236,144,52,10,2]},
{name:'Artificial Intelligence',utilization:4.1,importance:4.6,respondents:438,responses:[197,143,74,20,4]},
{name:'Computational Problem Solving',utilization:4.6,importance:4.8,respondents:446,responses:[287,121,31,6,1]},
{name:'Computer Systems',utilization:4.2,importance:4.4,respondents:431,responses:[211,143,61,14,2]}
],

BSDA:[
{name:'Digital Illustration',utilization:4.6,importance:4.8,respondents:386,responses:[250,105,25,5,1]},
{name:'Graphic Design',utilization:4.7,importance:4.9,respondents:381,responses:[260,94,22,4,1]},
{name:'UI/UX Design',utilization:4.3,importance:4.6,respondents:378,responses:[205,118,43,10,2]},
{name:'Animation & Motion Graphics',utilization:4.2,importance:4.6,respondents:369,responses:[184,120,50,12,3]},
{name:'Video & Multimedia Production',utilization:4.4,importance:4.7,respondents:374,responses:[215,113,37,8,1]},
{name:'Creative Software Proficiency',utilization:4.5,importance:4.8,respondents:371,responses:[225,108,31,6,1]}
],

BSIS:[
{name:'Systems Analysis & Design',utilization:4.6,importance:4.8,respondents:412,responses:[263,111,31,6,1]},
{name:'Database Management',utilization:4.4,importance:4.6,respondents:408,responses:[230,126,42,8,2]},
{name:'Business Process Analysis',utilization:4.5,importance:4.8,respondents:403,responses:[242,119,34,7,1]},
{name:'Enterprise Systems',utilization:4.2,importance:4.6,respondents:399,responses:[190,133,59,14,3]},
{name:'Project Management',utilization:4.3,importance:4.7,respondents:401,responses:[207,132,49,11,2]},
{name:'IT-Business Alignment',utilization:4.4,importance:4.8,respondents:397,responses:[221,121,45,8,2]}
]
};

/* ALUMNI SAMPLE DATA */
const alumniData=[
{id:'ALU-011',name:'Juan Dela Cruz',program:'BSDA',batch:'2024'},
{id:'ALU-012',name:'Maria Santos',program:'BSDA',batch:'2024'},
{id:'ALU-013',name:'Carlo Reyes',program:'BSDA',batch:'2024'},
{id:'ALU-014',name:'Angela Garcia',program:'BSDA',batch:'2023'},
{id:'ALU-015',name:'Miguel Ramos',program:'BSDA',batch:'2024'},
{id:'ALU-016',name:'Andrea Mendoza',program:'BSDA',batch:'2023'},
{id:'ALU-017',name:'Joshua Flores',program:'BSDA',batch:'2024'},
{id:'ALU-018',name:'Patricia Navarro',program:'BSDA',batch:'2022'},
{id:'ALU-019',name:'Daniel Torres',program:'BSDA',batch:'2024'},
{id:'ALU-020',name:'Nicole Villanueva',program:'BSDA',batch:'2023'},
{id:'ALU-021',name:'Gabriel Castillo',program:'BSIT',batch:'2024'},
{id:'ALU-022',name:'Sofia Aquino',program:'BSIT',batch:'2023'},
{id:'ALU-023',name:'Marco Reyes',program:'BSIT',batch:'2024'},
{id:'ALU-024',name:'Camille Santos',program:'BSCS',batch:'2024'},
{id:'ALU-025',name:'Paolo Garcia',program:'BSCS',batch:'2023'},
{id:'ALU-026',name:'Bianca Ramos',program:'BSIS',batch:'2024'}
];

const answers=['Very Frequently','Frequently','Sometimes','Rarely','Never'];

/* GIVE EACH ALUMNI ANSWERS */
alumniData.forEach((a,ai)=>{
  const competencies=programData[a.program];

  a.responses=competencies.map((c,i)=>{
    const score=Math.max(1,5-((ai+i)%4===3?1:0));

    return{
      competency:c.name,
      question:`How frequently do you use ${c.name} skills learned from your program in your current work?`,
      answer:answers[5-score],
      score
    };
  });
});

/* ALL PROGRAMS */
function getAllProgramsData(){

  const groups=[
    ['Technical / Domain Skills',0],
    ['Development & Creative Application',1],
    ['Data / Information Management',2],
    ['Analysis & Problem Solving',3],
    ['Systems / Production Skills',4],
    ['Professional Application',5]
  ];

  return groups.map(([name,index])=>{

    const items=Object.values(programData).map(x=>x[index]);

    const responses=[0,0,0,0,0];

    items.forEach(x=>{
      x.responses.forEach((v,i)=>responses[i]+=v);
    });

    return{
      name,
      utilization:+(items.reduce((s,x)=>s+x.utilization,0)/items.length).toFixed(1),
      importance:+(items.reduce((s,x)=>s+x.importance,0)/items.length).toFixed(1),
      respondents:responses.reduce((a,b)=>a+b,0),
      responses
    };
  });
}

/* CURRENT DATA */
let selectedIndex=0;
let radarChart=null;

function getCurrentData(){

  const program=$('programFilter')?.value||'ALL';

  return program==='ALL'
    ?getAllProgramsData()
    :programData[program];
}

/* STATUS */
function getStatus(value){

  if(value>=4.5)
    return{
      label:'Strong',
      text:'text-emerald-600',
      badge:'bg-emerald-50 text-emerald-700 border-emerald-200'
    };

  if(value>=4)
    return{
      label:'Good',
      text:'text-blue-600',
      badge:'bg-blue-50 text-blue-700 border-blue-200'
    };

  if(value>=3.5)
    return{
      label:'Review',
      text:'text-amber-600',
      badge:'bg-amber-50 text-amber-700 border-amber-200'
    };

  return{
    label:'Low',
    text:'text-red-500',
    badge:'bg-red-50 text-red-600 border-red-200'
  };
}

/* SUBTITLE */
function renderSubtitle(){

  const p=$('programFilter').value;
  const b=$('batchFilter').value;

  $('pageSubtitle').textContent=
    `${p==='ALL'?'All Programs':p} — Workplace competency utilization · ${b==='ALL'?'All Batches':'Batch '+b}`;
}

/* CARDS */
function renderCards(){

  $('competencyCards').innerHTML=getCurrentData().map(item=>{

    const s=getStatus(item.utilization);

    return`
    <div class="bg-white border border-gray-200 rounded-xl min-h-[112px] px-3 py-4 text-center">

      <p class="text-[9px] font-semibold text-gray-500 uppercase leading-tight min-h-[24px] flex items-center justify-center">
        ${item.name}
      </p>

      <p class="text-[25px] font-extrabold text-gray-900 leading-none mt-2">
        ${item.utilization.toFixed(1)}
      </p>

      <p class="text-[10px] ${s.text} mt-2">
        ${s.label}
      </p>

    </div>`;
  }).join('');
}

/* SELECT */
function renderCompetencySelect(){

  const data=getCurrentData();

  if(selectedIndex>=data.length)
    selectedIndex=0;

  $('competencySelect').innerHTML=data.map((x,i)=>`
    <option value="${i}">
      ${x.name}
    </option>
  `).join('');

  $('competencySelect').value=selectedIndex;
}

/* RADAR */
function renderRadar(){

  const data=getCurrentData();

  if(radarChart)
    radarChart.destroy();

  radarChart=new Chart($('competencyRadar'),{

    type:'radar',

    data:{
      labels:data.map(x=>x.name),

      datasets:[
        {
          label:'Utilization',
          data:data.map(x=>x.utilization),
          backgroundColor:'rgba(37,99,235,.15)',
          borderColor:'#2563eb',
          pointBackgroundColor:'#2563eb',
          borderWidth:2,
          pointRadius:4
        },
        {
          label:'Employer Importance',
          data:data.map(x=>x.importance),
          backgroundColor:'transparent',
          borderColor:'#9ca3af',
          pointBackgroundColor:'#9ca3af',
          borderDash:[5,4],
          borderWidth:1.5,
          pointRadius:3
        }
      ]
    },

    options:{
      responsive:true,
      maintainAspectRatio:false,

      scales:{
        r:{
          min:0,
          max:5,

          ticks:{
            display:false,
            stepSize:1
          },

          grid:{
            color:'#e5e7eb'
          },

          angleLines:{
            color:'#e5e7eb'
          },

          pointLabels:{
            color:'#4b5563',
            font:{
              size:9,
              family:'Inter'
            }
          }
        }
      },

      plugins:{
        legend:{
          position:'bottom',

          labels:{
            usePointStyle:true,
            boxWidth:9,
            font:{
              size:9,
              family:'Inter'
            }
          }
        }
      }
    }
  });
}

/* DISTRIBUTION */
function renderDistribution(){

  const item=getCurrentData()[selectedIndex];

  $('distributionTitle').textContent=item.name;
  $('respondentCount').textContent=item.respondents.toLocaleString();
  $('distributionAverage').textContent=item.utilization.toFixed(1);

  const labels=[
    '5 — Very Frequently',
    '4 — Frequently',
    '3 — Sometimes',
    '2 — Rarely',
    '1 — Never'
  ];

  $('distributionBars').innerHTML=item.responses.map((count,i)=>{

    const pct=count/item.respondents*100;

    return`
    <div>

      <div class="flex justify-between mb-[6px]">

        <span class="text-[10px] text-gray-700">
          ${labels[i]}
        </span>

        <div class="flex gap-5">

          <span class="text-[9px] text-gray-500">
            ${count.toLocaleString()} alumni
          </span>

          <span class="text-[10px] font-semibold w-[42px] text-right">
            ${pct.toFixed(1)}%
          </span>

        </div>

      </div>

      <div class="h-[6px] bg-gray-100 rounded-full overflow-hidden">
        <div class="h-full bg-blue-600 rounded-full" style="width:${pct}%"></div>
      </div>

    </div>`;
  }).join('');

  const points=item.responses.reduce(
    (sum,count,i)=>sum+count*(5-i),
    0
  );

  $('calculationText').textContent=
    `${points.toLocaleString()} points ÷ ${item.respondents.toLocaleString()} responses = ${item.utilization.toFixed(1)}/5`;
}

/* GAP TABLE */
function renderTable(){

  $('gapTableBody').innerHTML=getCurrentData().map((item,index)=>{

    const gap=(item.importance-item.utilization).toFixed(1);
    const s=getStatus(item.utilization);

    return`
    <tr class="border-t border-gray-100">

      <td class="px-5 py-[13px] font-semibold">
        ${item.name}
      </td>

      <td class="px-5 py-[13px] text-center text-gray-600">
        ${item.respondents.toLocaleString()}
      </td>

      <td class="px-5 py-[13px] text-center font-semibold">
        ${item.utilization.toFixed(1)}
      </td>

      <td class="px-5 py-[13px] text-center">
        ${item.importance.toFixed(1)}
      </td>

      <td class="px-5 py-[13px] text-center">
        ${gap}
      </td>

      <td class="px-5 py-[13px] text-center">
        <span class="inline-flex px-2 py-[3px] rounded-full border text-[9px] ${s.badge}">
          ${s.label}
        </span>
      </td>

      <td class="px-5 py-[13px] text-center">
        <button onclick="openEvidence(${index})"
          class="px-3 py-[6px] border border-gray-200 rounded-lg text-[10px] text-blue-600 font-medium hover:bg-blue-50">
          View Evidence
        </button>
      </td>

    </tr>`;
  }).join('');
}

/* EVIDENCE */
let evidenceCompetency='';
let evidenceAlumni=[];
let responsePage=1;

const responsePerPage=8;

window.openEvidence=index=>{

  const item=getCurrentData()[index];

  evidenceCompetency=item.name;

  const p=$('programFilter').value;
  const b=$('batchFilter').value;

  evidenceAlumni=alumniData.filter(a=>
    (p==='ALL'||a.program===p)&&
    (b==='ALL'||a.batch===b)
  );

  responsePage=1;

  $('responseSearch').value='';
  $('evidenceTitle').textContent=item.name;

  $('alumniListView').classList.remove('hidden');
  $('alumniDetailView').classList.add('hidden');

  renderAlumniTable();

  $('evidenceModal').classList.remove('hidden');
  $('evidenceModal').classList.add('flex');
};

window.closeEvidence=()=>{
  $('evidenceModal').classList.add('hidden');
  $('evidenceModal').classList.remove('flex');
};

window.backToAlumniList=()=>{
  $('alumniDetailView').classList.add('hidden');
  $('alumniListView').classList.remove('hidden');
};

/* FILTER ALUMNI */
function filteredAlumni(){

  const q=$('responseSearch').value.trim().toLowerCase();

  return evidenceAlumni.filter(a=>
    a.id.toLowerCase().includes(q)||
    a.name.toLowerCase().includes(q)||
    a.program.toLowerCase().includes(q)||
    a.batch.includes(q)
  );
}

/* ALUMNI TABLE */
function renderAlumniTable(){

  const list=filteredAlumni();

  const pages=Math.max(
    1,
    Math.ceil(list.length/responsePerPage)
  );

  if(responsePage>pages)
    responsePage=pages;

  const start=(responsePage-1)*responsePerPage;

  const rows=list.slice(
    start,
    start+responsePerPage
  );

  $('responseTableBody').innerHTML=rows.length
  ?rows.map(a=>`
    <tr class="border-t border-gray-100">

      <td class="px-4 py-3 font-semibold">
        ${a.id}
      </td>

      <td class="px-4 py-3 font-medium">
        ${a.name}
      </td>

      <td class="px-4 py-3 text-gray-600">
        ${a.program}
      </td>

      <td class="px-4 py-3 text-gray-600">
        ${a.batch}
      </td>

      <td class="px-4 py-3 text-center">

        <button onclick="viewAlumniResponses('${a.id}')"
          class="px-3 py-[6px] border border-gray-200 rounded-lg text-[10px] text-blue-600 font-medium hover:bg-blue-50">
          View
        </button>

      </td>

    </tr>
  `).join('')
  :`
    <tr>
      <td colspan="5" class="py-8 text-center text-[10px] text-gray-400">
        No alumni found.
      </td>
    </tr>
  `;

  $('responseTableInfo').textContent=
    list.length
      ?`Showing ${start+1}-${Math.min(start+responsePerPage,list.length)} of ${list.length} alumni`
      :'0 alumni';

  $('responsePrev').disabled=responsePage===1;
  $('responseNext').disabled=responsePage===pages;

  $('responsePrev').classList.toggle(
    'opacity-40',
    responsePage===1
  );

  $('responseNext').classList.toggle(
    'opacity-40',
    responsePage===pages
  );
}

/* VIEW ALUMNI DETAILS */
window.viewAlumniResponses=id=>{

  const a=evidenceAlumni.find(x=>x.id===id);

  if(!a)return;

  $('alumniListView').classList.add('hidden');
  $('alumniDetailView').classList.remove('hidden');

  $('detailName').textContent=a.name;
  $('detailId').textContent=a.id;
  $('detailProgram').textContent=a.program;
  $('detailBatch').textContent=a.batch;

  $('detailAvatar').textContent=
    a.name
      .split(' ')
      .map(x=>x[0])
      .slice(0,2)
      .join('');

  const responses=a.responses.map(r=>{

    /* Make selected evidence competency visible first */
    if(r.competency===evidenceCompetency){

      const index=programData[a.program]
        .findIndex(x=>x.name===r.competency);

      if(index>=0){

        const score=
          5-((Number(a.id.replace('ALU-',''))+index)%3);

        r={
          ...r,
          score,
          answer:answers[5-score]
        };
      }
    }

    return r;

  }).sort((x,y)=>
    x.competency===evidenceCompetency
      ?-1
      :y.competency===evidenceCompetency
        ?1
        :0
  );

  $('alumniQuestionList').innerHTML=responses.map(r=>{

    const selected=r.competency===evidenceCompetency;

    return`
    <div class="border ${selected?'border-blue-200 bg-blue-50/30':'border-gray-200'} rounded-xl p-4">

      <div class="flex items-start justify-between gap-4">

        <div>

          <div class="flex items-center gap-2">

            <h4 class="text-[12px] font-semibold text-gray-900">
              ${r.competency}
            </h4>

            ${selected?`
              <span class="px-2 py-[2px] rounded-full bg-blue-100 text-blue-600 text-[8px] font-semibold">
                Selected Competency
              </span>
            `:''}

          </div>

          <p class="text-[11px] text-gray-600 mt-2 leading-relaxed">
            ${r.question}
          </p>

        </div>

      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">

        <div class="border border-gray-200 bg-white rounded-lg p-3">

          <p class="text-[8px] text-gray-400 uppercase font-semibold">
            Selected Answer
          </p>

          <p class="text-[12px] font-semibold text-gray-900 mt-1">
            ${r.answer}
          </p>

        </div>

        <div class="border border-gray-200 bg-white rounded-lg p-3">

          <p class="text-[8px] text-gray-400 uppercase font-semibold">
            Score
          </p>

          <p class="text-[12px] font-semibold text-gray-900 mt-1">
            ${r.score} / 5
          </p>

        </div>

      </div>

    </div>`;
  }).join('');
};

/* SEARCH */
$('responseSearch')?.addEventListener('input',()=>{
  responsePage=1;
  renderAlumniTable();
});

/* PAGINATION */
$('responsePrev')?.addEventListener('click',()=>{

  if(responsePage>1){
    responsePage--;
    renderAlumniTable();
  }
});

$('responseNext')?.addEventListener('click',()=>{

  const pages=Math.max(
    1,
    Math.ceil(filteredAlumni().length/responsePerPage)
  );

  if(responsePage<pages){
    responsePage++;
    renderAlumniTable();
  }
});

/* FILTERS */
$('programFilter')?.addEventListener('change',()=>{
  selectedIndex=0;
  renderPage();
});

$('batchFilter')?.addEventListener('change',()=>{
  selectedIndex=0;
  renderPage();
});

$('competencySelect')?.addEventListener('change',e=>{
  selectedIndex=Number(e.target.value);
  renderDistribution();
});

/* MODAL BACKGROUND */
$('evidenceModal')?.addEventListener('click',e=>{
  if(e.target===$('evidenceModal'))
    closeEvidence();
});

/* ESC */
document.addEventListener('keydown',e=>{

  if(e.key!=='Escape')return;

  $('notifDropdown')?.classList.add('hidden');
  $('userDropdown')?.classList.add('hidden');

  if(!$('evidenceModal')?.classList.contains('hidden'))
    closeEvidence();
});

/* RENDER */
function renderPage(){
  renderSubtitle();
  renderCards();
  renderCompetencySelect();
  renderRadar();
  renderDistribution();
  renderTable();
}

document.addEventListener('DOMContentLoaded',renderPage);

/* PREVENT SIDEBAR DRAG / SELECTION */
document.querySelectorAll('#sidebar nav a').forEach(a=>{
  a.draggable=false;
  a.addEventListener('dragstart',e=>e.preventDefault());
  a.addEventListener('selectstart',e=>e.preventDefault());
});