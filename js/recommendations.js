// PAGE UI — sidebar, notifications, profile dropdown
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

  const wasHidden=d.classList.contains('hidden');

  n?.classList.add('hidden');
  u?.classList.add('hidden');

  if(wasHidden)d.classList.remove('hidden');
}

document.addEventListener('click',e=>{
  const n=document.getElementById('notifDropdown');
  const u=document.getElementById('userDropdown');

  if(n&&!n.contains(e.target)&&!e.target.closest('[onclick*="notifDropdown"]'))
    n.classList.add('hidden');

  if(u&&!u.contains(e.target)&&!e.target.closest('[onclick*="userDropdown"]'))
    u.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('markAllReadBtn')?.addEventListener('click',e=>{
    e.stopPropagation();
    document.querySelectorAll('.notif-dot').forEach(x=>x.remove());
    document.getElementById('notifBadge')?.classList.add('hidden');
  });

  renderRecommendations();
});

window.addEventListener('resize',()=>{
  if(innerWidth>=1024){
    document.getElementById('sidebar')?.classList.remove('-translate-x-full');
    document.getElementById('sidebarOverlay')?.classList.add('hidden');
  }
});


// ======================================================
// CURRICULUM RECOMMENDATION DATA
// ======================================================

const recommendations=[
{
  id:'web',
  course:'Web & Application Development',
  evidence:'82% of respondents use web development skills in their current work',
  finding:'Highly utilized by graduates',
  action:'Maintain course and strengthen modern frameworks, APIs and deployment',
  priority:'Medium',
  status:'Under Review'
},
{
  id:'database',
  course:'Database Management',
  evidence:'76% use database skills frequently in professional tasks',
  finding:'Strong workplace utilization',
  action:'Maintain course and increase applied database projects',
  priority:'Medium',
  status:'Proposed'
},
{
  id:'cloud',
  course:'Cloud Computing',
  evidence:'68% reported needing cloud skills but had limited curriculum exposure',
  finding:'Important workplace skill with insufficient curriculum coverage',
  action:'Add Cloud Computing as an elective or integrate cloud modules',
  priority:'High',
  status:'Proposed'
},
{
  id:'cyber',
  course:'Cybersecurity',
  evidence:'64% reported cybersecurity knowledge as important in their work',
  finding:'Industry need is higher than current curriculum exposure',
  action:'Strengthen cybersecurity content and practical security activities',
  priority:'High',
  status:'Under Review'
},
{
  id:'research',
  course:'Research Methods',
  evidence:'Average workplace utilization rating is 3.2/5',
  finding:'Lower utilization compared with technical courses',
  action:'Review course content and emphasize applied industry research',
  priority:'Low',
  status:'For Review'
},
{
  id:'networking',
  course:'Networking & Infrastructure',
  evidence:'58% regularly apply networking concepts in their jobs',
  finding:'Relevant for infrastructure and support roles',
  action:'Maintain course with more cloud and enterprise networking activities',
  priority:'Medium',
  status:'Approved'
},
{
  id:'legacy',
  course:'Legacy Programming Topics',
  evidence:'Only 18% reported using legacy programming topics at work',
  finding:'Low workplace utilization',
  action:'Review outdated topics and replace selected content with current technologies',
  priority:'High',
  status:'Proposed'
}
];


// ======================================================
// ALUMNI EVIDENCE
// Example records only — replace with database/API data later
// ======================================================

const evidenceData={

web:[
{name:'Maria Santos',id:'ALM-2024-011',program:'BSIT',batch:'2024',job:'Frontend Developer',response:'Uses web development skills very frequently; utilization score 5/5.'},
{name:'Jose Reyes',id:'ALM-2024-018',program:'BSIT',batch:'2024',job:'Software Developer',response:'Uses JavaScript, APIs and web frameworks frequently; score 5/5.'},
{name:'Ana Garcia',id:'ALM-2024-026',program:'BSIT',batch:'2024',job:'Web Designer',response:'Web development knowledge is directly related to current work; score 4/5.'},
{name:'Carlos Mendoza',id:'ALM-2023-041',program:'BSIT',batch:'2023',job:'Full Stack Developer',response:'Uses frontend and backend development daily; score 5/5.'},
{name:'Isabella Cruz',id:'ALM-2023-057',program:'BSIT',batch:'2023',job:'QA Engineer',response:'Uses web concepts when testing applications; score 4/5.'}
],

database:[
{name:'Rafael Villanueva',id:'ALM-2024-031',program:'BSIT',batch:'2024',job:'Data Analyst',response:'Uses SQL and database querying every day; score 5/5.'},
{name:'Maria Santos',id:'ALM-2024-011',program:'BSIT',batch:'2024',job:'Frontend Developer',response:'Uses database concepts when integrating applications; score 4/5.'},
{name:'Daniel Fernandez',id:'ALM-2023-062',program:'BSIT',batch:'2023',job:'Freelance Developer',response:'Database design is frequently used in client systems; score 5/5.'},
{name:'Jose Reyes',id:'ALM-2024-018',program:'BSIT',batch:'2024',job:'Software Developer',response:'Frequently works with relational databases and SQL; score 5/5.'}
],

cloud:[
{name:'Jose Reyes',id:'ALM-2024-018',program:'BSIT',batch:'2024',job:'Software Developer',response:'Cloud deployment is required at work but had limited exposure during college.'},
{name:'Carlos Mendoza',id:'ALM-2023-041',program:'BSIT',batch:'2023',job:'Full Stack Developer',response:'Uses cloud hosting frequently and recommends adding a dedicated cloud course.'},
{name:'Sofia Aquino',id:'ALM-2024-044',program:'BSIT',batch:'2024',job:'Systems Associate',response:'Cloud platforms are important for current responsibilities; recommends more hands-on training.'},
{name:'Daniel Fernandez',id:'ALM-2023-062',program:'BSIT',batch:'2023',job:'Freelance Developer',response:'Uses cloud deployment for client projects and learned most skills after graduation.'},
{name:'Miguel Torres',id:'ALM-2024-052',program:'BSIT',batch:'2024',job:'Technical Support',response:'Cloud administration knowledge would improve preparation for current work.'}
],

cyber:[
{name:'Jose Reyes',id:'ALM-2024-018',program:'BSIT',batch:'2024',job:'Software Developer',response:'Security practices are required in development work; importance score 5/5.'},
{name:'Carlos Mendoza',id:'ALM-2023-041',program:'BSIT',batch:'2023',job:'Full Stack Developer',response:'Recommends more secure coding and application security activities.'},
{name:'Miguel Torres',id:'ALM-2024-052',program:'BSIT',batch:'2024',job:'Technical Support',response:'Cybersecurity knowledge is frequently needed for account and network incidents.'},
{name:'Isabella Cruz',id:'ALM-2023-057',program:'BSIT',batch:'2023',job:'QA Engineer',response:'Security testing should receive more practical curriculum coverage.'}
],

research:[
{name:'Maria Santos',id:'ALM-2024-011',program:'BSIT',batch:'2024',job:'Frontend Developer',response:'Research methods are occasionally used; utilization score 3/5.'},
{name:'Rafael Villanueva',id:'ALM-2024-031',program:'BSIT',batch:'2024',job:'Data Analyst',response:'Uses research methods when analyzing business requirements; score 4/5.'},
{name:'Ana Garcia',id:'ALM-2024-026',program:'BSIT',batch:'2024',job:'Web Designer',response:'Rarely uses formal research methods in current role; score 2/5.'},
{name:'Daniel Fernandez',id:'ALM-2023-062',program:'BSIT',batch:'2023',job:'Freelance Developer',response:'Uses research mainly during requirements gathering; score 3/5.'}
],

networking:[
{name:'Miguel Torres',id:'ALM-2024-052',program:'BSIT',batch:'2024',job:'Technical Support',response:'Networking concepts are used very frequently; score 5/5.'},
{name:'Sofia Aquino',id:'ALM-2024-044',program:'BSIT',batch:'2024',job:'Systems Associate',response:'Uses network configuration and troubleshooting frequently; score 5/5.'},
{name:'Jose Reyes',id:'ALM-2024-018',program:'BSIT',batch:'2024',job:'Software Developer',response:'Basic networking knowledge supports deployment tasks; score 4/5.'},
{name:'Carlos Mendoza',id:'ALM-2023-041',program:'BSIT',batch:'2023',job:'Full Stack Developer',response:'Networking knowledge is useful when configuring hosted applications; score 4/5.'}
],

legacy:[
{name:'Maria Santos',id:'ALM-2024-011',program:'BSIT',batch:'2024',job:'Frontend Developer',response:'Rarely uses legacy programming topics; utilization score 1/5.'},
{name:'Jose Reyes',id:'ALM-2024-018',program:'BSIT',batch:'2024',job:'Software Developer',response:'Current role primarily uses modern frameworks; legacy topics score 2/5.'},
{name:'Ana Garcia',id:'ALM-2024-026',program:'BSIT',batch:'2024',job:'Web Designer',response:'Does not use legacy programming technologies in current work; score 1/5.'},
{name:'Daniel Fernandez',id:'ALM-2023-062',program:'BSIT',batch:'2023',job:'Freelance Developer',response:'Would prefer more curriculum time for current development technologies.'}
]

};


let currentEvidence='';


// ======================================================
// RECOMMENDATION TABLE
// ======================================================

function badge(text){
  return `<span class="inline-flex px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-[11px] font-semibold">${text}</span>`;
}

function renderRecommendations(){
  const body=document.getElementById('recommendationBody');
  if(!body)return;

  const priority=document.getElementById('priorityFilter')?.value||'';

  const rows=recommendations.filter(r=>!priority||r.priority===priority);

  body.innerHTML=rows.map(r=>`
    <tr class="border-b border-gray-100 hover:bg-gray-50">
      <td class="px-5 py-4 font-semibold text-gray-900">${r.course}</td>

      <td class="px-4 py-4 text-gray-600 text-[12px] max-w-[270px]">
        ${r.evidence}
      </td>

      <td class="px-4 py-4 text-gray-700 text-[12px] max-w-[240px]">
        ${r.finding}
      </td>

      <td class="px-4 py-4 text-gray-700 text-[12px] max-w-[290px]">
        ${r.action}
      </td>

      <td class="px-4 py-4 text-center">
        ${badge(r.priority)}
      </td>

      <td class="px-4 py-4 text-center">
        ${badge(r.status)}
      </td>

      <td class="px-4 py-4 text-center">
        <button onclick="viewEvidence('${r.id}')"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-blue-200 rounded-lg text-[12px] text-blue-600 font-semibold hover:bg-blue-50">

          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
            <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"></path>
            <circle cx="12" cy="12" r="2.5"></circle>
          </svg>

          View
        </button>
      </td>
    </tr>
  `).join('');
}

function filterRecommendations(){
  renderRecommendations();
}


// ======================================================
// EVIDENCE TABLE
// ======================================================

function viewEvidence(id){
  currentEvidence=id;

  const rec=recommendations.find(x=>x.id===id);
  const section=document.getElementById('evidenceSection');

  document.getElementById('evidenceTitle').textContent=
    `${rec.course} — Alumni Evidence`;

  document.getElementById('evidenceSubtitle').textContent=
    'Individual alumni responses supporting this curriculum recommendation.';

  document.getElementById('evidenceSearch').value='';

  section.classList.remove('hidden');

  renderEvidence();

  section.scrollIntoView({
    behavior:'smooth',
    block:'start'
  });
}

function renderEvidence(){
  const body=document.getElementById('evidenceBody');
  const count=document.getElementById('evidenceCount');

  if(!body)return;

  const search=(document.getElementById('evidenceSearch')?.value||'').toLowerCase();

  const records=(evidenceData[currentEvidence]||[]).filter(x=>
    Object.values(x).some(v=>
      String(v).toLowerCase().includes(search)
    )
  );

  count.textContent=`${records.length} alumni record${records.length===1?'':'s'}`;

  if(!records.length){
    body.innerHTML=`
      <tr>
        <td colspan="6" class="px-5 py-10 text-center text-gray-400">
          No alumni records found.
        </td>
      </tr>
    `;
    return;
  }

  body.innerHTML=records.map(x=>`
    <tr class="border-b border-gray-100 hover:bg-gray-50">

      <td class="px-5 py-4">
        <p class="font-semibold text-gray-900">${x.name}</p>
      </td>

      <td class="px-4 py-4 text-gray-600">
        ${x.id}
      </td>

      <td class="px-4 py-4 text-gray-600">
        ${x.program}
      </td>

      <td class="px-4 py-4 text-gray-600">
        ${x.batch}
      </td>

      <td class="px-4 py-4 text-gray-700">
        ${x.job}
      </td>

      <td class="px-4 py-4 text-gray-700 max-w-[400px]">
        ${x.response}
      </td>

    </tr>
  `).join('');
}

function closeEvidence(){
  document.getElementById('evidenceSection')?.classList.add('hidden');
  currentEvidence='';
}