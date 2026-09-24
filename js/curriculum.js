// ===============================
// PAGE UI
// ===============================
function toggleSidebar(){
  const s=document.getElementById('sidebar'),o=document.getElementById('sidebarOverlay');
  if(!s)return;
  s.classList.toggle('-translate-x-full');
  o?.classList.toggle('hidden');
}

function closeSidebar(){
  document.getElementById('sidebar')?.classList.add('-translate-x-full');
  document.getElementById('sidebarOverlay')?.classList.add('hidden');
}

function toggleDropdown(id,event){
  event?.stopPropagation?.();

  const n=document.getElementById('notifDropdown'),
        u=document.getElementById('userDropdown'),
        d=document.getElementById(id);

  if(!d)return;

  const hidden=d.classList.contains('hidden');

  n?.classList.add('hidden');
  u?.classList.add('hidden');

  if(hidden)d.classList.remove('hidden');
}

document.addEventListener('click',e=>{
  const n=document.getElementById('notifDropdown'),
        u=document.getElementById('userDropdown');

  if(n&&!n.contains(e.target)&&!e.target.closest('[onclick*="notifDropdown"]'))
    n.classList.add('hidden');

  if(u&&!u.contains(e.target)&&!e.target.closest('[onclick*="userDropdown"]'))
    u.classList.add('hidden');
});

window.addEventListener('resize',()=>{
  if(innerWidth>=1024){
    document.getElementById('sidebar')?.classList.remove('-translate-x-full');
    document.getElementById('sidebarOverlay')?.classList.add('hidden');
  }
});


// ===============================
// PROGRAM / BATCH DATA
// ===============================
const curriculumData={

BSIT:{
  name:'BSIT',

  all:{
    rating:4.4,
    respondents:386,
    distribution:[48,32,14,4,2],

    feedback:[
      [62,'Programming directly applicable','Graduates regularly apply programming knowledge in their current work.'],
      [45,'More hands-on experience needed','Alumni requested additional practical projects and industry exposure.'],
      [34,'Cybersecurity coverage insufficient','Respondents requested stronger practical cybersecurity coverage.']
    ],

    areas:[
      ['Programming',386,4.7,'Core strength; directly applicable to jobs'],
      ['Database Management',381,4.5,'Well-aligned with industry demand'],
      ['Web Development',378,4.4,'High demand; consider modern frameworks'],
      ['Networking',374,4.2,'Add cloud networking concepts'],
      ['Systems Analysis',369,4.1,'Strengthen agile methodology coverage'],
      ['Research',371,3.9,'Apply research to IT problem-solving contexts'],
      ['Cybersecurity',365,3.6,'Expand coverage — high industry demand']
    ]
  },

  '2020-2024':{
    rating:4.3,
    respondents:214,
    distribution:[45,34,14,5,2],

    feedback:[
      [59,'Programming directly applicable','Programming was frequently used by graduates in professional work.'],
      [47,'More practical projects needed','Graduates requested more applied development activities.'],
      [36,'Cybersecurity needs improvement','Security coverage was identified as insufficient by several respondents.']
    ],

    areas:[
      ['Programming',214,4.6,'Strong workplace applicability'],
      ['Database Management',210,4.4,'Frequently used by graduates'],
      ['Web Development',207,4.3,'Relevant to software and web roles'],
      ['Networking',203,4.1,'Cloud networking exposure recommended'],
      ['Systems Analysis',201,4.0,'Increase agile project exposure'],
      ['Research',205,3.8,'More applied research recommended'],
      ['Cybersecurity',198,3.5,'Additional practical coverage needed']
    ]
  },

  '2021-2025':{
    rating:4.5,
    respondents:172,
    distribution:[52,30,13,3,2],

    feedback:[
      [66,'Programming highly applicable','Recent graduates reported strong workplace use of programming skills.'],
      [43,'Industry projects requested','Respondents requested more industry-based activities.'],
      [31,'Security tools need expansion','Graduates requested greater exposure to current cybersecurity tools.']
    ],

    areas:[
      ['Programming',172,4.8,'Very strong workplace applicability'],
      ['Database Management',171,4.6,'Strong alignment with current roles'],
      ['Web Development',171,4.5,'Modern frameworks highly relevant'],
      ['Networking',171,4.3,'Strong relevance with cloud concepts'],
      ['Systems Analysis',168,4.2,'Agile methods increasingly relevant'],
      ['Research',166,4.0,'Meets relevance target'],
      ['Cybersecurity',167,3.8,'Needs additional practical coverage']
    ]
  }
},


// ===============================
// BSCS
// ===============================
BSCS:{
  name:'BSCS',

  all:{
    rating:4.6,
    respondents:342,
    distribution:[56,29,10,4,1],

    feedback:[
      [68,'Algorithms highly applicable','Graduates frequently apply algorithmic problem-solving in software roles.'],
      [52,'Software development strongly relevant','Software engineering knowledge supports current employment.'],
      [39,'More AI projects requested','Alumni requested more practical AI and machine-learning projects.']
    ],

    areas:[
      ['Algorithms & Data Structures',342,4.8,'Core strength for software roles'],
      ['Software Development',337,4.7,'Strong professional applicability'],
      ['Database Systems',331,4.5,'Relevant across software roles'],
      ['AI & Machine Learning',326,4.3,'Increase applied AI projects'],
      ['Computational Problem Solving',329,4.6,'Highly utilized competency'],
      ['Computer Systems',318,4.1,'Maintain practical systems coverage']
    ]
  },

  '2020-2024':{
    rating:4.5,
    respondents:186,
    distribution:[53,30,11,5,1],
    feedback:[
      [65,'Algorithms highly applicable','Algorithmic skills remain important in software work.'],
      [49,'Software engineering relevant','Graduates regularly apply software-development knowledge.'],
      [41,'More AI exposure needed','Respondents requested more applied AI activities.']
    ],
    areas:[
      ['Algorithms & Data Structures',186,4.7,'Highly relevant'],
      ['Software Development',182,4.6,'Strong professional applicability'],
      ['Database Systems',179,4.4,'Relevant across development roles'],
      ['AI & Machine Learning',175,4.1,'Increase practical coverage'],
      ['Computational Problem Solving',181,4.5,'Frequently utilized'],
      ['Computer Systems',171,4.0,'Meets relevance target']
    ]
  },

  '2021-2025':{
    rating:4.7,
    respondents:156,
    distribution:[60,27,9,3,1],
    feedback:[
      [71,'Algorithms highly applicable','Recent graduates strongly value algorithms and data structures.'],
      [56,'Software development highly relevant','Software-development courses align strongly with current jobs.'],
      [36,'Applied AI requested','Graduates requested more industry-focused AI projects.']
    ],
    areas:[
      ['Algorithms & Data Structures',156,4.9,'Excellent workplace relevance'],
      ['Software Development',155,4.8,'Excellent professional applicability'],
      ['Database Systems',152,4.6,'Strong relevance'],
      ['AI & Machine Learning',151,4.5,'Strong but expand applied projects'],
      ['Computational Problem Solving',148,4.7,'Highly utilized'],
      ['Computer Systems',147,4.2,'Satisfactory relevance']
    ]
  }
},


// ===============================
// BSIS
// ===============================
BSIS:{
  name:'BSIS',

  all:{
    rating:4.1,
    respondents:298,
    distribution:[38,35,18,7,2],

    feedback:[
      [57,'Systems analysis applicable','Graduates use systems-analysis skills in business and IT environments.'],
      [42,'Business process skills relevant','Business-process analysis supports current professional responsibilities.'],
      [37,'More enterprise systems exposure','Respondents requested greater practical exposure to enterprise platforms.']
    ],

    areas:[
      ['Systems Analysis & Design',298,4.5,'Strong professional relevance'],
      ['Database Management',292,4.3,'Frequently utilized'],
      ['Business Process Analysis',287,4.4,'Strong business relevance'],
      ['Enterprise Systems',281,3.8,'Increase practical platform exposure'],
      ['Project Management',276,4.1,'Relevant across IT projects'],
      ['IT-Business Alignment',274,4.2,'Important for professional roles']
    ]
  },

  '2020-2024':{
    rating:4.0,
    respondents:161,
    distribution:[35,36,19,8,2],
    feedback:[
      [54,'Systems analysis applicable','Systems-analysis knowledge supports current roles.'],
      [40,'Business process knowledge relevant','Graduates use business-analysis concepts professionally.'],
      [39,'Enterprise systems need improvement','More practical enterprise-platform experience requested.']
    ],
    areas:[
      ['Systems Analysis & Design',161,4.4,'Strong relevance'],
      ['Database Management',157,4.2,'Frequently utilized'],
      ['Business Process Analysis',155,4.3,'Relevant to business roles'],
      ['Enterprise Systems',151,3.7,'Needs practical expansion'],
      ['Project Management',149,4.0,'Meets target'],
      ['IT-Business Alignment',147,4.1,'Relevant professional competency']
    ]
  },

  '2021-2025':{
    rating:4.2,
    respondents:137,
    distribution:[42,34,16,6,2],
    feedback:[
      [61,'Systems analysis applicable','Recent graduates report strong systems-analysis utilization.'],
      [45,'Business process skills relevant','Business-process analysis remains professionally useful.'],
      [34,'Enterprise tools requested','Respondents requested modern enterprise-system exposure.']
    ],
    areas:[
      ['Systems Analysis & Design',137,4.6,'Strong relevance'],
      ['Database Management',135,4.4,'Strong workplace use'],
      ['Business Process Analysis',132,4.5,'Strong professional relevance'],
      ['Enterprise Systems',130,3.9,'Needs additional practical exposure'],
      ['Project Management',127,4.2,'Relevant across projects'],
      ['IT-Business Alignment',127,4.3,'Strong business relevance']
    ]
  }
},


// ===============================
// BSDA = DIGITAL ARTS
// ===============================
BSDA:{
  name:'BSDA',

  all:{
    rating:4.3,
    respondents:254,
    distribution:[46,34,14,5,1],

    feedback:[
      [64,'Graphic design directly applicable','Graduates regularly use graphic-design principles in creative work.'],
      [51,'Digital illustration highly relevant','Illustration skills are frequently applied in professional projects.'],
      [38,'More motion and multimedia projects needed','Alumni requested greater practical exposure to animation and multimedia production.']
    ],

    areas:[
      ['Digital Illustration',254,4.6,'Strong creative-industry relevance'],
      ['Graphic Design',251,4.7,'Highly applicable to professional work'],
      ['UI/UX Design',247,4.3,'Strong digital-product relevance'],
      ['Animation & Motion Graphics',241,4.2,'Expand practical animation projects'],
      ['Video & Multimedia Production',244,4.4,'Strong content-production relevance'],
      ['Creative Software Proficiency',249,4.5,'Frequently utilized in creative work']
    ]
  },

  '2020-2024':{
    rating:4.2,
    respondents:139,
    distribution:[43,35,15,6,1],
    feedback:[
      [61,'Graphic design applicable','Design principles are frequently applied in creative employment.'],
      [48,'Illustration relevant','Digital illustration supports professional creative work.'],
      [41,'More animation practice needed','Respondents requested additional animation and motion projects.']
    ],
    areas:[
      ['Digital Illustration',139,4.5,'Strong professional relevance'],
      ['Graphic Design',137,4.6,'Highly applicable'],
      ['UI/UX Design',134,4.2,'Relevant to digital design work'],
      ['Animation & Motion Graphics',131,4.0,'More practical projects recommended'],
      ['Video & Multimedia Production',133,4.3,'Strong relevance'],
      ['Creative Software Proficiency',136,4.4,'Frequently utilized']
    ]
  },

  '2021-2025':{
    rating:4.4,
    respondents:115,
    distribution:[50,33,12,4,1],
    feedback:[
      [68,'Graphic design highly applicable','Recent graduates report strong professional use of design skills.'],
      [55,'Digital illustration highly relevant','Illustration remains important in current creative roles.'],
      [35,'More motion projects requested','Graduates requested more industry-style motion and multimedia projects.']
    ],
    areas:[
      ['Digital Illustration',115,4.7,'Very strong creative relevance'],
      ['Graphic Design',114,4.8,'Excellent professional relevance'],
      ['UI/UX Design',113,4.4,'Strong digital-product relevance'],
      ['Animation & Motion Graphics',110,4.4,'Strong but expand practical projects'],
      ['Video & Multimedia Production',111,4.5,'Highly relevant'],
      ['Creative Software Proficiency',113,4.6,'Strong workplace utilization']
    ]
  }
}};


// ===============================
// CURRENT SELECTION
// ===============================
let currentAreas=[];


// ===============================
// UPDATE EVERYTHING
// ===============================
function updateDashboard(){

  const program=document.getElementById('programFilter').value;
  const batch=document.getElementById('batchFilter').value;

  const data=curriculumData[program][batch];

  currentAreas=data.areas;

  const batchText=batch==='all'?'All Batches':batch;

  document.getElementById('pageSubtitle').textContent=
    `${program} — Alumni assessment of curriculum usefulness in employment · ${batchText}`;

  document.getElementById('tableSubtitle').textContent=
    `${program} curriculum ratings based on ${data.respondents.toLocaleString()} alumni responses · ${batchText}`;

  document.getElementById('overallRating').textContent=
    data.rating.toFixed(1);

  document.getElementById('respondentCount').textContent=
    data.respondents.toLocaleString();

  const diff=data.rating-4;

  document.getElementById('targetDifference').textContent=
    `${diff>=0?'+':''}${diff.toFixed(1)}`;

  document.getElementById('overallText').textContent=
    data.rating>=4.5
      ? 'Very strong relevance based on alumni workplace experience'
      : data.rating>=4
      ? 'Strong relevance based on alumni workplace experience'
      : 'Curriculum relevance requires review';

  renderDistribution(data.distribution);
  renderFeedback(data.feedback);
  renderTable();
}


// ===============================
// DISTRIBUTION
// ===============================
function renderDistribution(values){

  const labels=[
    'Very Relevant',
    'Relevant',
    'Moderately Relevant',
    'Slightly Relevant',
    'Not Relevant'
  ];

  const colors=[
    'bg-blue-600',
    'bg-blue-500',
    'bg-gray-500',
    'bg-gray-400',
    'bg-gray-300'
  ];

  document.getElementById('distributionContainer').innerHTML=
    labels.map((label,i)=>`
      <div>
        <div class="flex justify-between text-[12px] mb-1.5">
          <span>${label}</span>
          <b>${values[i]}%</b>
        </div>

        <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            class="h-full ${colors[i]} rounded-full transition-all duration-300"
            style="width:${values[i]}%">
          </div>
        </div>
      </div>
    `).join('');
}


// ===============================
// FEEDBACK
// ===============================
function renderFeedback(feedback){

  document.getElementById('feedbackContainer').innerHTML=
    feedback.map(x=>`
      <div class="border border-gray-200 rounded-lg p-4 flex gap-4 items-center">

        <div class="w-12 text-center shrink-0">
          <p class="text-xl font-bold">${x[0]}%</p>
        </div>

        <div class="border-l border-gray-200 pl-4">

          <p class="text-[12px] font-semibold">
            ${x[1]}
          </p>

          <p class="text-[11px] text-gray-500 mt-1">
            ${x[2]}
          </p>

        </div>

      </div>
    `).join('');
}


// ===============================
// TABLE
// ===============================
function renderTable(){

  const body=document.getElementById('curriculumTable');

  body.innerHTML=currentAreas.map((x,i)=>{

    const status=
      x[2]>=4.4?'Strong':
      x[2]>=4?'Satisfactory':
      'Needs Review';

    return `
      <tr class="border-b border-gray-100 last:border-0 hover:bg-gray-50/60">

        <td class="px-5 py-3.5 font-semibold">
          ${x[0]}
        </td>

        <td class="px-4 py-3.5 text-center text-gray-600">
          ${x[1].toLocaleString()}
        </td>

        <td class="px-4 py-3.5 text-center font-bold">
          ${x[2].toFixed(1)}/5
        </td>

        <td class="px-4 py-3.5 text-center">
          ${statusBadge(status)}
        </td>

        <td class="px-4 py-3.5 text-gray-600">
          ${x[3]}
        </td>

        <td class="px-4 py-3.5 text-center">

          <button
            onclick="viewEvidence(${i})"
            class="px-3 py-1.5 border border-blue-200 rounded-lg
                   text-[11px] font-medium text-blue-600
                   hover:bg-blue-50">

            View Evidence

          </button>

        </td>

      </tr>
    `;
  }).join('');
}


function statusBadge(status){

  if(status==='Strong')
    return `<span class="px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-[10px] font-medium">Strong</span>`;

  if(status==='Satisfactory')
    return `<span class="px-2 py-0.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[10px] font-medium">Satisfactory</span>`;

  return `<span class="px-2 py-0.5 rounded-full border border-amber-200 bg-amber-50 text-amber-700 text-[10px] font-medium">Needs Review</span>`;
}


// ===============================
// VIEW EVIDENCE
// ===============================
function viewEvidence(index){

  const program=document.getElementById('programFilter').value;
  const batch=document.getElementById('batchFilter').value;

  const x=currentAreas[index];

  const status=
    x[2]>=4.4?'Strong':
    x[2]>=4?'Satisfactory':
    'Needs Review';

  document.getElementById('evidenceTitle').textContent=x[0];

  document.getElementById('evidenceSummary').textContent=
    `${program} · ${batch==='all'?'All Batches':batch} · ${x[3]}`;

  document.getElementById('modalRespondents').textContent=
    x[1].toLocaleString();

  document.getElementById('modalRating').textContent=
    `${x[2].toFixed(1)}/5`;

  document.getElementById('modalStatus').textContent=status;

  const scores=[
    Math.min(5,Math.round(x[2])),
    Math.min(5,Math.ceil(x[2])),
    Math.max(1,Math.floor(x[2])),
    Math.min(5,Math.round(x[2]))
  ];

  const batchName=batch==='all'
    ? ['2020-2024','2020-2024','2021-2025','2021-2025']
    : [batch,batch,batch,batch];

  document.getElementById('evidenceResponses').innerHTML=
    scores.map((score,i)=>`

      <tr class="border-b border-gray-100 last:border-0">

        <td class="px-4 py-3 font-medium">
          ALU-${String((index+1)*10+i+1).padStart(3,'0')}
        </td>

        <td class="px-4 py-3 text-gray-600">
          ${program}
        </td>

        <td class="px-4 py-3 text-gray-600">
          ${batchName[i]}
        </td>

        <td class="px-4 py-3 text-center font-bold">
          ${score}/5
        </td>

        <td class="px-4 py-3 text-gray-600">
          ${ratingLabel(score)}
        </td>

      </tr>

    `).join('');

  document.getElementById('evidenceFeedback').innerHTML=`
    <div class="border border-gray-200 rounded-lg p-3">
      <p class="text-[11px] font-semibold">${x[3]}</p>
      <p class="text-[10px] text-gray-500 mt-1">
        Finding derived from the selected ${program} ${batch==='all'?'alumni batches':batch+' batch'}.
      </p>
    </div>
  `;

  const modal=document.getElementById('evidenceModal');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}


function ratingLabel(score){

  if(score===5)return 'Very Relevant';
  if(score===4)return 'Relevant';
  if(score===3)return 'Moderately Relevant';
  if(score===2)return 'Slightly Relevant';

  return 'Not Relevant';
}


function closeEvidence(){

  const modal=document.getElementById('evidenceModal');

  modal?.classList.add('hidden');
  modal?.classList.remove('flex');
}


// ===============================
// START
// ===============================
document.addEventListener('DOMContentLoaded',()=>{

  document.getElementById('programFilter')
    ?.addEventListener('change',updateDashboard);

  document.getElementById('batchFilter')
    ?.addEventListener('change',updateDashboard);

  document.getElementById('markAllReadBtn')
    ?.addEventListener('click',e=>{

      e.stopPropagation();

      document.querySelectorAll('.notif-dot')
        .forEach(x=>x.remove());

      document.getElementById('notifBadge')
        ?.classList.add('hidden');

    });

  document.getElementById('evidenceModal')
    ?.addEventListener('click',e=>{

      if(e.target.id==='evidenceModal')
        closeEvidence();

    });

  document.querySelectorAll('#sidebar nav a')
    .forEach(a=>{

      a.draggable=false;

      a.addEventListener(
        'dragstart',
        e=>e.preventDefault()
      );

      a.addEventListener(
        'selectstart',
        e=>e.preventDefault()
      );

    });

  updateDashboard();
});


document.addEventListener('keydown',e=>{

  if(e.key==='Escape'){

    closeEvidence();

    document.getElementById('notifDropdown')
      ?.classList.add('hidden');

    document.getElementById('userDropdown')
      ?.classList.add('hidden');

  }

});