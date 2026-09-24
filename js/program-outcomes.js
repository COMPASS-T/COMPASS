// PAGE UI — sidebar, notifications, profile dropdown (self-contained)

function toggleSidebar(){const s=document.getElementById('sidebar'),o=document.getElementById('sidebarOverlay');if(!s)return;s.classList.toggle('-translate-x-full');o?.classList.toggle('hidden')}

function closeSidebar(){document.getElementById('sidebar')?.classList.add('-translate-x-full');document.getElementById('sidebarOverlay')?.classList.add('hidden')}

function toggleDropdown(id,event){event?.stopPropagation?.();const n=document.getElementById('notifDropdown'),u=document.getElementById('userDropdown'),d=document.getElementById(id);if(!d)return;const wasHidden=d.classList.contains('hidden');n?.classList.add('hidden');u?.classList.add('hidden');if(wasHidden)d.classList.remove('hidden')}

document.addEventListener('click',e=>{const n=document.getElementById('notifDropdown'),u=document.getElementById('userDropdown');if(n&&!n.contains(e.target)&&!e.target.closest('[onclick*="notifDropdown"]'))n.classList.add('hidden');if(u&&!u.contains(e.target)&&!e.target.closest('[onclick*="userDropdown"]'))u.classList.add('hidden')});

document.addEventListener('DOMContentLoaded',()=>{document.getElementById('markAllReadBtn')?.addEventListener('click',e=>{e.stopPropagation();document.querySelectorAll('.notif-dot').forEach(x=>x.remove())})});

window.addEventListener('resize',()=>{if(innerWidth>=1024){document.getElementById('sidebar')?.classList.remove('-translate-x-full');document.getElementById('sidebarOverlay')?.classList.add('hidden')}});


// ===============================
// PROGRAM OUTCOMES DATA
// ===============================

const outcomes=[
{
id:1,
outcome:'Apply IT knowledge in professional practice',
evidence:'88% employment; 72% aligned jobs',
score:4.6,
target:4.0,
status:'Achieved',
source:'Employment and Job-Program Alignment',
description:'Evidence combines graduate employment outcomes and job-program alignment responses.',
question:'How aligned is your current job with the knowledge and skills learned from your BSIT program?'
},
{
id:2,
outcome:'Analyze and solve computing problems',
evidence:'Problem Solving competency: 4.4/5',
score:4.4,
target:4.0,
status:'Achieved',
source:'Problem Solving Competency',
description:'Evidence is based on alumni responses regarding the application of problem-solving skills in the workplace.',
question:'How frequently do you apply problem-solving skills learned from your program in your current work?'
},
{
id:3,
outcome:'Communicate effectively in professional settings',
evidence:'Communication competency: 4.3/5',
score:4.3,
target:4.0,
status:'Achieved',
source:'Communication Competency',
description:'Evidence is based on alumni use of professional communication skills in their current employment.',
question:'How frequently do you use professional communication skills learned from your program in your current work?'
},
{
id:4,
outcome:'Work effectively in teams',
evidence:'Teamwork competency: 4.2/5',
score:4.2,
target:4.0,
status:'Achieved',
source:'Teamwork Competency',
description:'Evidence reflects alumni application of teamwork and collaboration skills in professional settings.',
question:'How frequently do you apply teamwork and collaboration skills in your current work?'
},
{
id:5,
outcome:'Conduct relevant research',
evidence:'Research competency: 3.9/5',
score:3.9,
target:4.0,
status:'Partial',
source:'Research Competency',
description:'Evidence is based on alumni application of research, investigation, and evidence-based problem solving.',
question:'How frequently do you apply research skills learned from your program in your current work?'
},
{
id:6,
outcome:'Engage in lifelong learning',
evidence:'6.6% pursuing further studies; curriculum relevance 4.4',
score:4.0,
target:4.0,
status:'Partial',
source:'Further Studies and Curriculum Relevance',
description:'Evidence combines continuing education participation and alumni assessment of curriculum relevance.',
question:'Are you currently pursuing further studies, professional certifications, or structured continuing education?'
},
{
id:7,
outcome:'Demonstrate leadership and management skills',
evidence:'Leadership competency: 3.7/5',
score:3.7,
target:4.0,
status:'Attention',
source:'Leadership Competency',
description:'Evidence is based on alumni application of leadership, coordination, and management skills.',
question:'How frequently do you apply leadership and management skills in your current work?'
}
];


// ===============================
// SAMPLE ALUMNI EVIDENCE
// ===============================

const alumni=[
{id:'ALU-011',name:'Juan Dela Cruz',program:'BSIT',batch:'2024'},
{id:'ALU-012',name:'Maria Santos',program:'BSIT',batch:'2024'},
{id:'ALU-013',name:'Carlo Reyes',program:'BSIT',batch:'2023'},
{id:'ALU-014',name:'Angela Garcia',program:'BSIT',batch:'2024'},
{id:'ALU-015',name:'Miguel Ramos',program:'BSIT',batch:'2023'},
{id:'ALU-016',name:'Andrea Mendoza',program:'BSIT',batch:'2024'},
{id:'ALU-017',name:'Joshua Flores',program:'BSIT',batch:'2022'},
{id:'ALU-018',name:'Patricia Navarro',program:'BSIT',batch:'2024'},
{id:'ALU-019',name:'Daniel Torres',program:'BSIT',batch:'2023'},
{id:'ALU-020',name:'Nicole Villanueva',program:'BSIT',batch:'2024'},
{id:'ALU-021',name:'Gabriel Castillo',program:'BSIT',batch:'2022'},
{id:'ALU-022',name:'Sofia Aquino',program:'BSIT',batch:'2024'}
];


// ===============================
// DEMO RESPONSE DATA
// ===============================

const responseOptions=[
{answer:'Very Frequently',score:5},
{answer:'Frequently',score:4},
{answer:'Sometimes',score:3},
{answer:'Rarely',score:2},
{answer:'Never',score:1}
];

function getAlumniResponse(alumniIndex,outcomeIndex){

const outcome=outcomes[outcomeIndex];

if(outcome.id===6){

const options=[
{answer:'Yes — currently pursuing a professional certification',score:5},
{answer:'Yes — currently enrolled in further studies',score:5},
{answer:'Planning to pursue further studies',score:4},
{answer:'Not currently pursuing further studies',score:3}
];

return options[(alumniIndex+outcomeIndex)%options.length];
}

if(outcome.id===1){

const options=[
{answer:'Highly Aligned',score:5},
{answer:'Aligned',score:4},
{answer:'Partially Aligned',score:3},
{answer:'Not Aligned',score:2}
];

return options[(alumniIndex+outcomeIndex)%options.length];
}

return responseOptions[(alumniIndex+outcomeIndex)%responseOptions.length];
}


// ===============================
// RENDER OUTCOME TABLE
// ===============================

function statusClass(status){

if(status==='Achieved')
return 'bg-gray-100 text-gray-700';

if(status==='Partial')
return 'bg-amber-50 text-amber-700 border border-amber-200';

return 'bg-red-50 text-red-600 border border-red-200';
}

function renderOutcomes(){

const body=document.getElementById('outcomesTableBody');

if(!body)return;

body.innerHTML=outcomes.map((o,index)=>`

<tr class="border-b border-gray-50">

<td class="px-5 py-3 font-medium text-gray-900">
${o.outcome}
</td>

<td class="px-4 py-3 text-gray-600">
${o.evidence}
</td>

<td class="text-center px-4 py-3 font-semibold">
${o.score.toFixed(1)}
</td>

<td class="text-center px-4 py-3">
${o.target.toFixed(1)}
</td>

<td class="text-center px-4 py-3">

<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusClass(o.status)}">
${o.status}
</span>

</td>

<td class="text-center px-4 py-3">

<button onclick="openEvidence(${index})"
class="px-3 py-1.5 border border-gray-200 rounded-lg text-[10px] font-medium text-blue-600 hover:bg-blue-50 hover:border-blue-200">
View
</button>

</td>

</tr>

`).join('');
}


// ===============================
// IMPROVEMENT SECTION
// ===============================

function renderImprovements(){

const list=document.getElementById('improvementList');

if(!list)return;

const items=outcomes.filter(o=>
o.status==='Partial'||o.status==='Attention'
);

list.innerHTML=items.map(o=>{

const index=outcomes.findIndex(x=>x.id===o.id);

const gap=(o.score-o.target).toFixed(1);

return`

<div class="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

<div>

<div class="flex items-center gap-2">

<h3 class="text-[12px] font-semibold text-gray-900">
${o.outcome}
</h3>

<span class="px-2 py-0.5 rounded-full text-[9px] font-semibold ${statusClass(o.status)}">
${o.status}
</span>

</div>

<p class="text-[10px] text-gray-500 mt-1">
${o.evidence}
</p>

</div>

<div class="flex items-center gap-6 shrink-0">

<div class="text-center">

<p class="text-[9px] text-gray-400 uppercase">
Score
</p>

<p class="text-[12px] font-bold mt-1">
${o.score.toFixed(1)}
</p>

</div>

<div class="text-center">

<p class="text-[9px] text-gray-400 uppercase">
Target
</p>

<p class="text-[12px] font-bold mt-1">
${o.target.toFixed(1)}
</p>

</div>

<div class="text-center">

<p class="text-[9px] text-gray-400 uppercase">
Gap
</p>

<p class="text-[12px] font-bold mt-1 ${Number(gap)<0?'text-red-500':'text-gray-900'}">
${Number(gap)>0?'+':''}${gap}
</p>

</div>

<button onclick="openEvidence(${index})"
class="h-[32px] px-3 border border-gray-200 rounded-lg text-[10px] font-medium text-blue-600 hover:bg-blue-50">
View Evidence
</button>

</div>

</div>

`;

}).join('');
}


// ===============================
// EVIDENCE MODAL
// ===============================

let selectedOutcome=0;
let alumniPage=1;

const alumniPerPage=6;

window.openEvidence=index=>{

selectedOutcome=index;
alumniPage=1;

const outcome=outcomes[index];

document.getElementById('evidenceTitle').textContent=
outcome.outcome;

document.getElementById('evidenceSource').textContent=
outcome.source;

document.getElementById('evidenceDescription').textContent=
outcome.description;

document.getElementById('evidenceSummary').innerHTML=`

<div class="border border-gray-200 rounded-lg p-3">

<p class="text-[8px] uppercase font-semibold text-gray-400">
Score
</p>

<p class="text-[18px] font-bold mt-1">
${outcome.score.toFixed(1)}
</p>

</div>

<div class="border border-gray-200 rounded-lg p-3">

<p class="text-[8px] uppercase font-semibold text-gray-400">
Target
</p>

<p class="text-[18px] font-bold mt-1">
${outcome.target.toFixed(1)}
</p>

</div>

<div class="border border-gray-200 rounded-lg p-3">

<p class="text-[8px] uppercase font-semibold text-gray-400">
Status
</p>

<p class="text-[12px] font-semibold mt-2">
${outcome.status}
</p>

</div>

<div class="border border-gray-200 rounded-lg p-3">

<p class="text-[8px] uppercase font-semibold text-gray-400">
Alumni Evidence
</p>

<p class="text-[18px] font-bold mt-1">
${alumni.length}
</p>

</div>

`;

document.getElementById('alumniSearch').value='';

document.getElementById('alumniDetailView')
.classList.add('hidden');

document.getElementById('alumniListView')
.classList.remove('hidden');

renderAlumni();

const modal=document.getElementById('evidenceModal');

modal.classList.remove('hidden');
modal.classList.add('flex');
};


// ===============================
// CLOSE / BACK
// ===============================

window.closeEvidence=()=>{

const modal=document.getElementById('evidenceModal');

modal?.classList.add('hidden');
modal?.classList.remove('flex');

};

window.backToAlumniList=()=>{

document.getElementById('alumniDetailView')
.classList.add('hidden');

document.getElementById('alumniListView')
.classList.remove('hidden');

};


// ===============================
// SEARCH ALUMNI
// ===============================

function filteredAlumni(){

const search=
(document.getElementById('alumniSearch')?.value||'')
.trim()
.toLowerCase();

return alumni.filter(a=>

a.id.toLowerCase().includes(search)||
a.name.toLowerCase().includes(search)||
a.program.toLowerCase().includes(search)||
a.batch.toLowerCase().includes(search)

);

}


// ===============================
// ALUMNI TABLE
// ===============================

function renderAlumni(){

const list=filteredAlumni();

const pages=Math.max(
1,
Math.ceil(list.length/alumniPerPage)
);

if(alumniPage>pages)
alumniPage=pages;

const start=
(alumniPage-1)*alumniPerPage;

const rows=
list.slice(
start,
start+alumniPerPage
);

const body=
document.getElementById('alumniTableBody');

body.innerHTML=rows.length
?rows.map(a=>`

<tr class="border-t border-gray-100">

<td class="px-4 py-3 font-semibold text-gray-900">
${a.id}
</td>

<td class="px-4 py-3">
${a.name}
</td>

<td class="px-4 py-3 text-gray-600">
${a.program}
</td>

<td class="px-4 py-3 text-gray-600">
${a.batch}
</td>

<td class="px-4 py-3 text-center">

<button onclick="viewAlumni('${a.id}')"
class="px-3 py-1.5 border border-gray-200 rounded-lg text-[10px] font-medium text-blue-600 hover:bg-blue-50">
View
</button>

</td>

</tr>

`).join('')

:`

<tr>

<td colspan="5"
class="px-4 py-8 text-center text-[10px] text-gray-400">
No alumni found.
</td>

</tr>

`;

document.getElementById('alumniTableInfo').textContent=
list.length
?`Showing ${start+1}-${Math.min(start+alumniPerPage,list.length)} of ${list.length} alumni`
:'0 alumni';

const prev=document.getElementById('prevAlumni');
const next=document.getElementById('nextAlumni');

prev.disabled=alumniPage===1;
next.disabled=alumniPage===pages;

prev.classList.toggle(
'opacity-40',
alumniPage===1
);

next.classList.toggle(
'opacity-40',
alumniPage===pages
);

}


// ===============================
// VIEW ALUMNI RESPONSE
// ===============================

window.viewAlumni=id=>{

const alumniIndex=
alumni.findIndex(a=>a.id===id);

const a=
alumni[alumniIndex];

const outcome=
outcomes[selectedOutcome];

if(!a||!outcome)return;

const response=
getAlumniResponse(
alumniIndex,
selectedOutcome
);

document.getElementById('alumniListView')
.classList.add('hidden');

document.getElementById('alumniDetailView')
.classList.remove('hidden');

document.getElementById('detailName').textContent=
a.name;

document.getElementById('detailId').textContent=
a.id;

document.getElementById('detailProgram').textContent=
a.program;

document.getElementById('detailBatch').textContent=
a.batch;

document.getElementById('detailOutcome').textContent=
outcome.outcome;

document.getElementById('detailAvatar').textContent=
a.name
.split(' ')
.map(x=>x[0])
.slice(0,2)
.join('');

document.getElementById('responseDetail').innerHTML=`

<div class="border border-gray-200 rounded-xl p-4">

<p class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">
Question
</p>

<p class="text-[12px] text-gray-800 mt-2 leading-relaxed">
${outcome.question}
</p>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">

<div class="bg-gray-50 border border-gray-200 rounded-lg p-3">

<p class="text-[8px] font-semibold text-gray-400 uppercase">
Selected Answer
</p>

<p class="text-[12px] font-semibold text-gray-900 mt-1">
${response.answer}
</p>

</div>

<div class="bg-gray-50 border border-gray-200 rounded-lg p-3">

<p class="text-[8px] font-semibold text-gray-400 uppercase">
Score
</p>

<p class="text-[12px] font-semibold text-gray-900 mt-1">
${response.score} / 5
</p>

</div>

</div>

</div>

`;

};


// ===============================
// EVENTS
// ===============================

document.getElementById('alumniSearch')
?.addEventListener('input',()=>{

alumniPage=1;
renderAlumni();

});

document.getElementById('prevAlumni')
?.addEventListener('click',()=>{

if(alumniPage>1){

alumniPage--;
renderAlumni();

}

});

document.getElementById('nextAlumni')
?.addEventListener('click',()=>{

const pages=Math.max(
1,
Math.ceil(
filteredAlumni().length/alumniPerPage
)
);

if(alumniPage<pages){

alumniPage++;
renderAlumni();

}

});

document.getElementById('evidenceModal')
?.addEventListener('click',e=>{

if(e.target===document.getElementById('evidenceModal'))
closeEvidence();

});

document.addEventListener('keydown',e=>{

if(e.key==='Escape')
closeEvidence();

});


// ===============================
// INITIAL RENDER
// ===============================

document.addEventListener('DOMContentLoaded',()=>{

renderOutcomes();
renderImprovements();

});


// ===============================
// PREVENT SIDEBAR DRAG / SELECT
// ===============================

document.querySelectorAll('#sidebar nav a').forEach(a=>{

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