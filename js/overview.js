const $=id=>document.getElementById(id);

// ==============================
// SIDEBAR
// ==============================
function toggleSidebar(){
  $('sidebar')?.classList.toggle('-translate-x-full');
  $('sidebarOverlay')?.classList.toggle('hidden');
}

function closeSidebar(){
  $('sidebar')?.classList.add('-translate-x-full');
  $('sidebarOverlay')?.classList.add('hidden');
}

// ==============================
// DROPDOWNS
// ==============================
function toggleDropdown(id,e){
  e?.stopPropagation();

  const current=$(id);
  const notif=$('notifDropdown');
  const user=$('userDropdown');

  if(!current)return;

  const hidden=current.classList.contains('hidden');

  notif?.classList.add('hidden');
  user?.classList.add('hidden');

  if(hidden)current.classList.remove('hidden');
}

document.addEventListener('click',e=>{
  const notif=$('notifDropdown');
  const user=$('userDropdown');

  if(notif&&!notif.contains(e.target))notif.classList.add('hidden');
  if(user&&!user.contains(e.target))user.classList.add('hidden');
});

window.addEventListener('resize',()=>{
  if(innerWidth>=1024){
    $('sidebar')?.classList.remove('-translate-x-full');
    $('sidebarOverlay')?.classList.add('hidden');
  }
});

// ==============================
// CHART DEFAULTS
// ==============================
Chart.defaults.font.family='Inter';
Chart.defaults.color='#6b7280';

let cityChart,regionChart;
let currentPage=1;
const rowsPerPage=10;

// ==============================
// PROGRAM DATA
// ==============================
const programData={
  BSIT:{employment:88,alignment:82,relevance:4.4,competency:4.3},
  BSCS:{employment:91,alignment:89,relevance:4.6,competency:4.5},
  BSIS:{employment:84,alignment:76,relevance:4.1,competency:4.0},
  BSDA:{employment:86,alignment:80,relevance:4.3,competency:4.2}
};

// ==============================
// 20 GRADUATES
// ==============================
const graduates=[
  {id:'2020-00124',name:'Maria Santos',original:'BSIT',program:'BSIT',batch:'2020-2024',year:2024,city:'Quezon City',region:'Metro Manila',country:'Philippines'},
  {id:'2020-00135',name:'Jose Reyes',original:'BSCS',program:'BSCS',batch:'2020-2024',year:2024,city:'Makati City',region:'Metro Manila',country:'Philippines'},
  {id:'2020-00147',name:'Ana Garcia',original:'BSIT',program:'BSDA',batch:'2020-2024',year:2024,city:'Taguig City',region:'Metro Manila',country:'Philippines'},
  {id:'2020-00158',name:'Carlos Mendoza',original:'BSIS',program:'BSIS',batch:'2020-2024',year:2024,city:'Naga City',region:'Bicol Region',country:'Philippines'},
  {id:'2020-00169',name:'Patricia Lim',original:'BSIT',program:'BSIT',batch:'2020-2024',year:2024,city:'Manila',region:'Metro Manila',country:'Philippines'},
  {id:'2020-00173',name:'Sofia Aquino',original:'BSIT',program:'BSCS',batch:'2020-2024',year:2024,city:'Quezon City',region:'Metro Manila',country:'Philippines'},
  {id:'2020-00186',name:'Daniel Fernandez',original:'BSIT',program:'BSIT',batch:'2020-2024',year:2024,city:'Cavite City',region:'CALABARZON',country:'Philippines'},
  {id:'2020-00198',name:'Rafael Cruz',original:'BSCS',program:'BSIS',batch:'2020-2024',year:2024,city:'Pasig City',region:'Metro Manila',country:'Philippines'},
  {id:'2020-00204',name:'Isabella Flores',original:'BSDA',program:'BSDA',batch:'2020-2024',year:2024,city:'Naga City',region:'Bicol Region',country:'Philippines'},
  {id:'2020-00217',name:'Miguel Torres',original:'BSCS',program:'BSCS',batch:'2020-2024',year:2024,city:'Makati City',region:'Metro Manila',country:'Philippines'},

  {id:'2019-00112',name:'Angela Navarro',original:'BSIS',program:'BSIT',batch:'2019-2023',year:2023,city:'San Juan City',region:'Metro Manila',country:'Philippines'},
  {id:'2019-00128',name:'Paolo Ramos',original:'BSCS',program:'BSCS',batch:'2019-2023',year:2023,city:'Manila',region:'Metro Manila',country:'Philippines'},
  {id:'2019-00139',name:'Camille Villanueva',original:'BSDA',program:'BSDA',batch:'2019-2023',year:2023,city:'Batangas City',region:'CALABARZON',country:'Philippines'},
  {id:'2019-00152',name:'Nathan Castillo',original:'BSIS',program:'BSIS',batch:'2019-2023',year:2023,city:'Pasay City',region:'Metro Manila',country:'Philippines'},
  {id:'2019-00164',name:'Andrea Bautista',original:'BSIT',program:'BSIT',batch:'2019-2023',year:2023,city:'Mandaluyong',region:'Metro Manila',country:'Philippines'},

  {id:'2018-00091',name:'Gabriel Mendoza',original:'BSIT',program:'BSCS',batch:'2018-2022',year:2022,city:'Singapore',region:'Southeast Asia',country:'Singapore'},
  {id:'2018-00103',name:'Bianca Lopez',original:'BSIS',program:'BSIS',batch:'2018-2022',year:2022,city:'Dubai',region:'Middle East',country:'UAE'},
  {id:'2018-00118',name:'Joshua Rivera',original:'BSDA',program:'BSDA',batch:'2018-2022',year:2022,city:'Tokyo',region:'East Asia',country:'Japan'},
  {id:'2018-00131',name:'Nicole Tan',original:'BSCS',program:'BSCS',batch:'2018-2022',year:2022,city:'New York',region:'North America',country:'USA'},
  {id:'2018-00145',name:'Kevin Dela Cruz',original:'BSIT',program:'BSIT',batch:'2018-2022',year:2022,city:'Sydney',region:'Oceania',country:'Australia'}
];

// ==============================
// COMPETENCIES BY PROGRAM
// ==============================
const competencies={
  BSIT:[
    ['Programming & Software Development',4.6],
    ['Database Management',4.4],
    ['Networking & Infrastructure',4.2],
    ['Problem Solving',4.5]
  ],

  BSCS:[
    ['Programming & Algorithms',4.7],
    ['Software Engineering',4.5],
    ['Data Structures',4.6],
    ['Problem Solving',4.6]
  ],

  BSIS:[
    ['Systems Analysis',4.5],
    ['Database Management',4.3],
    ['Business Process Analysis',4.2],
    ['Project Management',4.1]
  ],

  BSDA:[
    ['Data Analytics',4.6],
    ['Data Visualization',4.4],
    ['Statistical Analysis',4.3],
    ['Programming for Data',4.2]
  ]
};

// ==============================
// HELPERS
// ==============================
function countBy(data,key){
  return data.reduce((r,x)=>{
    r[x[key]]=(r[x[key]]||0)+1;
    return r;
  },{});
}

function filteredData(){
  const program=$('programFilter').value;
  const batch=$('batchFilter').value;

  return graduates.filter(x=>
    (program==='ALL'||x.program===program)&&
    (batch==='ALL'||x.batch===batch)
  );
}

function averageMetric(key){
  const program=$('programFilter').value;

  if(program!=='ALL')return programData[program][key];

  const values=Object.values(programData).map(x=>x[key]);
  return values.reduce((a,b)=>a+b,0)/values.length;
}

// ==============================
// TITLE + KPI
// ==============================
function updateHeader(){
  const program=$('programFilter').value;
  const batch=$('batchFilter').value;

  $('pageTitle').textContent=
    program==='ALL'
      ?'Overall Curriculum Analytics'
      :`${program} Curriculum Analytics`;

  $('pageSubtitle').textContent=
    `Program outcomes and graduate performance · ${batch==='ALL'?'All Batches':`Batch ${batch}`}`;

  $('employmentKpi').textContent=Math.round(averageMetric('employment'))+'%';
  $('alignmentKpi').textContent=Math.round(averageMetric('alignment'))+'%';
  $('relevanceKpi').textContent=averageMetric('relevance').toFixed(1)+'/5';
  $('competencyKpi').textContent=averageMetric('competency').toFixed(1)+'/5';
}

// ==============================
// CITY CHART
// ==============================
function renderCityChart(data){
  const counts=countBy(data,'city');
  const cities=Object.entries(counts)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,8);

  cityChart?.destroy();

  cityChart=new Chart($('cityChart'),{
    type:'bar',
    data:{
      labels:cities.map(x=>x[0]),
      datasets:[{
        data:cities.map(x=>x[1]),
        backgroundColor:'#3b82f6',
        hoverBackgroundColor:'#2563eb',
        borderRadius:5,
        borderSkipped:false,
        barPercentage:.62,
        categoryPercentage:.75
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        tooltip:{
          displayColors:false,
          callbacks:{
            label:c=>`${c.raw} ${c.raw===1?'alumnus':'alumni'}`
          }
        }
      },
      scales:{
        x:{
          grid:{display:false},
          border:{display:false},
          ticks:{
            font:{size:9},
            maxRotation:0,
            minRotation:0
          }
        },
        y:{
          beginAtZero:true,
          ticks:{
            stepSize:1,
            precision:0,
            font:{size:9}
          },
          border:{display:false},
          grid:{
            color:'#e5e7eb',
            drawTicks:false
          }
        }
      }
    }
  });
}

// ==============================
// REGION CHART
// ==============================
function renderRegionChart(data){
  const counts=countBy(data,'region');

  const regions=Object.entries(counts)
    .sort((a,b)=>b[1]-a[1]);

  regionChart?.destroy();

  regionChart=new Chart($('regionChart'),{
    type:'line',
    data:{
      labels:regions.map(x=>x[0]),
      datasets:[{
        data:regions.map(x=>x[1]),
        borderColor:'#2563eb',
        backgroundColor:'rgba(37,99,235,.08)',
        fill:true,
        tension:.28,
        borderWidth:2,
        pointRadius:4,
        pointHoverRadius:5,
        pointBackgroundColor:'#fff',
        pointBorderColor:'#2563eb',
        pointBorderWidth:2
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      interaction:{
        mode:'index',
        intersect:false
      },
      plugins:{
        legend:{display:false},
        tooltip:{
          displayColors:false,
          callbacks:{
            label:c=>`${c.raw} ${c.raw===1?'alumnus':'alumni'}`
          }
        }
      },
      scales:{
        x:{
          grid:{display:false},
          border:{display:false},
          ticks:{
            font:{size:9},
            maxRotation:0,
            minRotation:0
          }
        },
        y:{
          beginAtZero:true,
          ticks:{
            stepSize:1,
            precision:0,
            font:{size:9}
          },
          border:{display:false},
          grid:{
            color:'#e5e7eb',
            drawTicks:false
          }
        }
      }
    }
  });
}

// ==============================
// LOCATION CARDS
// ==============================
function updateLocationCards(data){
  const local=data.filter(x=>x.country==='Philippines').length;
  const international=data.length-local;

  $('totalAlumni').textContent=data.length;
  $('localAlumni').textContent=local;
  $('internationalAlumni').textContent=international;

  $('locationCount').textContent=
    new Set(data.map(x=>x.city)).size;

  $('regionCount').textContent=
    new Set(data.map(x=>x.region)).size;
}

// ==============================
// ALIGNMENT
// ==============================
function renderAlignment(){
  const value=Math.round(averageMetric('alignment'));

  const partial=Math.max(0,100-value-8);
  const notAligned=100-value-partial;

  const items=[
    ['Aligned',value,'#3b82f6'],
    ['Partially Aligned',partial,'#93c5fd'],
    ['Not Aligned',notAligned,'#d1d5db']
  ];

  $('alignmentBars').innerHTML=items.map(x=>`
    <div>
      <div class="flex justify-between text-[12px] mb-1.5">
        <span>${x[0]}</span>
        <span class="font-bold">${x[1]}%</span>
      </div>

      <div class="h-[8px] bg-gray-100 rounded-full overflow-hidden">
        <div class="h-full rounded-full" style="width:${x[1]}%;background:${x[2]}"></div>
      </div>
    </div>
  `).join('');
}

// ==============================
// COMPETENCY
// ==============================
function renderCompetencies(){
  const program=$('programFilter').value;

  let data;

  if(program==='ALL'){
    data=[
      ['Technical & Digital Skills',4.5],
      ['Problem Solving',4.4],
      ['Communication',4.2],
      ['Teamwork',4.1]
    ];

    $('competencySubtitle').textContent=
      'Overall workplace competency utilization';
  }else{
    data=competencies[program];

    $('competencySubtitle').textContent=
      `${program} workplace competency utilization`;
  }

  $('competencyBars').innerHTML=data.map(([name,value])=>`
    <div>
      <div class="flex justify-between text-[12px] mb-1.5">
        <span>${name}</span>
        <span class="font-bold">${value.toFixed(1)}/5</span>
      </div>

      <div class="h-[8px] bg-gray-100 rounded-full overflow-hidden">
        <div class="h-full bg-blue-500 rounded-full" style="width:${value/5*100}%"></div>
      </div>
    </div>
  `).join('');
}

// ==============================
// TABLE FILTER
// ==============================
function tableData(){
  const search=$('graduateSearch').value.trim().toLowerCase();

  return filteredData().filter(x=>
    !search||
    x.name.toLowerCase().includes(search)||
    x.id.toLowerCase().includes(search)||
    x.original.toLowerCase().includes(search)||
    x.program.toLowerCase().includes(search)||
    x.batch.toLowerCase().includes(search)
  );
}

// ==============================
// TABLE
// ==============================
function renderTable(){
  const data=tableData();
  const totalPages=Math.max(1,Math.ceil(data.length/rowsPerPage));

  if(currentPage>totalPages)currentPage=totalPages;

  const start=(currentPage-1)*rowsPerPage;
  const rows=data.slice(start,start+rowsPerPage);

  $('graduateTableBody').innerHTML=rows.length
    ?rows.map(x=>{
      const shifted=x.original!==x.program;

      return `
        <tr class="hover:bg-gray-50">
          <td class="px-5 py-4 text-gray-500">${x.id}</td>

          <td class="px-5 py-4 font-semibold text-gray-900">
            ${x.name}
          </td>

          <td class="px-5 py-4">${x.original}</td>

          <td class="px-5 py-4 font-medium">${x.program}</td>

          <td class="px-5 py-4">
            ${
              shifted
              ?`<span class="inline-flex px-2 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200 text-[10px] font-semibold">Shifted</span>`
              :`<span class="inline-flex px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-[10px] font-semibold">No Change</span>`
            }
          </td>

          <td class="px-5 py-4">${x.batch}</td>

          <td class="px-5 py-4">${x.year}</td>
        </tr>
      `;
    }).join('')
    :`
      <tr>
        <td colspan="7" class="px-5 py-10 text-center text-gray-400">
          No graduate records found.
        </td>
      </tr>
    `;

  const end=Math.min(start+rowsPerPage,data.length);

  $('showingText').textContent=
    data.length
      ?`Showing ${start+1}-${end} of ${data.length} graduates`
      :'Showing 0 graduates';

  $('pageInfo').textContent=currentPage;

  $('prevBtn').disabled=currentPage===1;
  $('nextBtn').disabled=currentPage===totalPages;
}

// ==============================
// UPDATE EVERYTHING
// ==============================
function updateDashboard(){
  const data=filteredData();

  updateHeader();
  updateLocationCards(data);
  renderCityChart(data);
  renderRegionChart(data);
  renderAlignment();
  renderCompetencies();

  currentPage=1;
  renderTable();
}

// ==============================
// EVENTS
// ==============================
document.addEventListener('DOMContentLoaded',()=>{

  $('programFilter').addEventListener('change',updateDashboard);
  $('batchFilter').addEventListener('change',updateDashboard);

  $('graduateSearch').addEventListener('input',()=>{
    currentPage=1;
    renderTable();
  });

  $('prevBtn').addEventListener('click',()=>{
    if(currentPage>1){
      currentPage--;
      renderTable();
    }
  });

  $('nextBtn').addEventListener('click',()=>{
    const pages=Math.ceil(tableData().length/rowsPerPage);

    if(currentPage<pages){
      currentPage++;
      renderTable();
    }
  });

  $('markAllReadBtn')?.addEventListener('click',e=>{
    e.stopPropagation();

    document
      .querySelectorAll('.notif-dot')
      .forEach(dot=>dot.remove());
  });

  updateDashboard();
});

document.querySelectorAll('#sidebar nav a').forEach(a=>{
  a.draggable=false;
  a.addEventListener('dragstart',e=>e.preventDefault());
  a.addEventListener('selectstart',e=>e.preventDefault());
});