const $=id=>document.getElementById(id);

const data={
all:{
BSIT:{employment:88,alignment:82,relevance:4.4,competency:4.3,respondents:1747},
BSCS:{employment:91,alignment:89,relevance:4.6,competency:4.5,respondents:1632},
"BS Psychology":{employment:84,alignment:77,relevance:4.2,competency:4.1,respondents:1284},
"BS Accountancy":{employment:82,alignment:74,relevance:3.9,competency:3.8,respondents:1196},
"BS Nursing":{employment:85,alignment:79,relevance:4.2,competency:4.1,respondents:1408}
},
2024:{
BSIT:{employment:89,alignment:84,relevance:4.5,competency:4.4,respondents:612},
BSCS:{employment:92,alignment:90,relevance:4.7,competency:4.6,respondents:574},
"BS Psychology":{employment:85,alignment:78,relevance:4.3,competency:4.2,respondents:431},
"BS Accountancy":{employment:83,alignment:75,relevance:4,competency:3.9,respondents:398},
"BS Nursing":{employment:86,alignment:80,relevance:4.3,competency:4.2,respondents:469}
},
2023:{
BSIT:{employment:87,alignment:81,relevance:4.3,competency:4.2,respondents:581},
BSCS:{employment:90,alignment:88,relevance:4.5,competency:4.4,respondents:538},
"BS Psychology":{employment:83,alignment:76,relevance:4.1,competency:4,respondents:422},
"BS Accountancy":{employment:81,alignment:73,relevance:3.8,competency:3.7,respondents:389},
"BS Nursing":{employment:84,alignment:78,relevance:4.1,competency:4,respondents:458}
},
2022:{
BSIT:{employment:85,alignment:79,relevance:4.2,competency:4.1,respondents:554},
BSCS:{employment:88,alignment:86,relevance:4.4,competency:4.3,respondents:520},
"BS Psychology":{employment:81,alignment:74,relevance:4,competency:3.9,respondents:401},
"BS Accountancy":{employment:79,alignment:71,relevance:3.7,competency:3.6,respondents:370},
"BS Nursing":{employment:82,alignment:76,relevance:4,competency:3.9,respondents:441}
}
};

const skills={
all:{
labels:["Technical / Domain Skills","Professional Application","Data / Information Management","Analysis & Problem Solving","Systems / Production Skills","Development & Creative Application"],
values:[4.6,4.2,4.3,4.5,4.1,4.4],
importance:[4.8,4.5,4.5,4.7,4.3,4.6]
},
BSIT:{
labels:["Networking & Infrastructure","Web & Application Development","Database Management","Cybersecurity","IT Support & Troubleshooting","Systems Administration"],
values:[4.6,4.5,4.4,4.3,4.2,4.1],
importance:[4.8,4.7,4.6,4.6,4.4,4.4]
},
BSCS:{
labels:["Algorithms & Data Structures","Software Development","Database Systems","AI & Machine Learning","Computational Problem Solving","Computer Systems"],
values:[4.7,4.6,4.4,4.3,4.7,4.2],
importance:[4.8,4.7,4.5,4.5,4.8,4.4]
},
"BS Psychology":{
labels:["Psychological Assessment","Research Skills","Counseling Skills","Human Behavior Analysis","Communication Skills","Professional Ethics"],
values:[4.2,4.1,4,4.3,4.4,4.2],
importance:[4.5,4.4,4.3,4.5,4.6,4.6]
},
"BS Accountancy":{
labels:["Financial Accounting","Auditing","Taxation","Management Accounting","Financial Analysis","Professional Ethics"],
values:[4,3.8,3.7,3.9,4,4.1],
importance:[4.6,4.5,4.4,4.3,4.5,4.6]
},
"BS Nursing":{
labels:["Clinical Care","Patient Assessment","Health Education","Critical Thinking","Communication","Professional Practice"],
values:[4.3,4.2,4.1,4.2,4.3,4.1],
importance:[4.7,4.6,4.5,4.6,4.6,4.5]
}
};

const trends={
all:[[79,81.3,82.8,83.7,86],[70,72.7,75.1,76.2,80.2]],
BSIT:[[80,82,84,86,88],[72,75,77,79,82]],
BSCS:[[83,85,87,89,91],[79,81,84,86,89]],
"BS Psychology":[[77,79,81,82,84],[67,70,72,74,77]],
"BS Accountancy":[[76,78,79,81,82],[65,67,70,72,74]],
"BS Nursing":[[79,81,82,84,85],[69,72,74,77,79]]
};

let radar,trend,currentSkill,totalResponses;

const avg=(o,k)=>Object.values(o).reduce((a,b)=>a+b[k],0)/Object.keys(o).length;

function status(d){
const n=(d.employment+d.alignment+d.relevance*20+d.competency*20)/4;
if(n>=86)return["Strong","bg-green-100 text-green-700"];
if(n>=82)return["Satisfactory","bg-blue-100 text-blue-700"];
if(n>=78)return["Needs Attention","bg-yellow-100 text-yellow-700"];
return["Critical","bg-red-100 text-red-700"];
}

/* SIDEBAR */
function toggleSidebar(){
$("sidebar")?.classList.toggle("-translate-x-full");
$("sidebarOverlay")?.classList.toggle("hidden");
}
function closeSidebar(){
$("sidebar")?.classList.add("-translate-x-full");
$("sidebarOverlay")?.classList.add("hidden");
}

/* TOP NAV */
$("notifBtn")?.addEventListener("click",e=>{
e.stopPropagation();
$("userDropdown")?.classList.add("hidden");
$("notifDropdown")?.classList.toggle("hidden");
});

$("avatarBtn")?.addEventListener("click",e=>{
e.stopPropagation();
$("notifDropdown")?.classList.add("hidden");
$("userDropdown")?.classList.toggle("hidden");
});

$("markAllReadBtn")?.addEventListener("click",()=>{
$("notifBadge")?.classList.add("hidden");
});

document.addEventListener("click",e=>{
if($("notifDropdown")&&!$("notifDropdown").contains(e.target)&&!$("notifBtn").contains(e.target))
$("notifDropdown").classList.add("hidden");

if($("userDropdown")&&!$("userDropdown").contains(e.target)&&!$("avatarBtn").contains(e.target))
$("userDropdown").classList.add("hidden");
});

/* RADAR */
function drawRadar(c){
radar?.destroy();

radar=new Chart($("competencyRadar"),{
type:"radar",
data:{
labels:c.labels,
datasets:[
{
label:"Utilization",
data:c.values,
borderColor:"#2563eb",
backgroundColor:"rgba(37,99,235,.14)",
borderWidth:2,
pointBackgroundColor:"#2563eb"
},
{
label:"Employer Importance",
data:c.importance,
borderColor:"#9ca3af",
backgroundColor:"transparent",
borderDash:[5,4],
borderWidth:1.5,
pointBackgroundColor:"#9ca3af"
}
]},
options:{
responsive:true,
maintainAspectRatio:false,
scales:{
r:{
min:0,max:5,
ticks:{display:false,stepSize:1},
pointLabels:{color:"#64748b",font:{family:"Inter",size:9}},
grid:{color:"#e5e7eb"},
angleLines:{color:"#e5e7eb"}
}},
plugins:{
legend:{
position:"bottom",
labels:{usePointStyle:true,font:{family:"Inter",size:10}}
}}
}
});
}

/* RESPONSE DISTRIBUTION */
function setupResponses(c,total){
currentSkill=c;
totalResponses=total;

$("competencyFilter").innerHTML=c.labels.map((x,i)=>
`<option value="${i}">${x}</option>`
).join("");

renderResponse(0);
}

function renderResponse(i){
i=+i;

const score=currentSkill.values[i];

const p=score>=4.5?[63.4,28,6.9,1.4,.3]:
score>=4.2?[49,33,12,4.5,1.5]:
score>=4?[42,34,15,6.5,2.5]:
[31,34,20,10,5];

const names=[
"5 — Very Frequently",
"4 — Frequently",
"3 — Sometimes",
"2 — Rarely",
"1 — Never"
];

$("responseName").textContent=currentSkill.labels[i];
$("responseTotal").textContent=`${totalResponses.toLocaleString()} alumni responded`;
$("responseAverage").textContent=score.toFixed(1);

$("responseBars").innerHTML=names.map((name,x)=>`
<div>
<div class="flex justify-between mb-2">
<span class="text-[11px] text-gray-600">${name}</span>
<div class="flex gap-5">
<span class="text-[10px] text-gray-500">${Math.round(totalResponses*p[x]/100).toLocaleString()} alumni</span>
<b class="text-[11px] w-[42px] text-right">${p[x].toFixed(1)}%</b>
</div>
</div>

<div class="h-[6px] bg-gray-100 rounded-full overflow-hidden">
<div class="h-full bg-blue-600 rounded-full" style="width:${p[x]}%"></div>
</div>
</div>
`).join("");
}

/* TREND */
function drawTrend(program){
trend?.destroy();

const t=trends[program]||trends.all;

trend=new Chart($("trendChart"),{
type:"line",
data:{
labels:["2021","2022","2023","2024","2025"],
datasets:[
{
label:"Employment Rate",
data:t[0],
borderColor:"#22c55e",
backgroundColor:"rgba(34,197,94,.08)",
fill:true,
tension:.25,
borderWidth:2,
pointRadius:4,
pointBackgroundColor:"#fff",
pointBorderWidth:2
},
{
label:"Alignment Rate",
data:t[1],
borderColor:"#3b82f6",
backgroundColor:"rgba(59,130,246,.08)",
fill:true,
tension:.25,
borderWidth:2,
pointRadius:4,
pointBackgroundColor:"#fff",
pointBorderWidth:2
}
]},
options:{
responsive:true,
maintainAspectRatio:false,
plugins:{
legend:{
position:"bottom",
labels:{usePointStyle:true,font:{family:"Inter",size:10}}
}},
scales:{
x:{grid:{display:false}},
y:{
min:60,
max:100,
ticks:{callback:v=>v+"%"},
grid:{color:"#f1f5f9"}
}
}
}
});
}

/* PROGRAM TABLE */
function renderTable(programs){
$("programTableBody").innerHTML=Object.entries(programs).map(([name,d])=>{
const s=status(d);

return `
<tr class="border-b border-gray-100 hover:bg-gray-50">
<td class="px-5 py-3.5 font-semibold">${name}</td>
<td class="text-center">${d.employment}%</td>
<td class="text-center">${d.alignment}%</td>
<td class="text-center">${d.relevance.toFixed(1)}</td>
<td class="text-center">${d.competency.toFixed(1)}</td>

<td class="text-center">
<span class="px-2.5 py-1 rounded-full text-[10px] font-semibold ${s[1]}">
${s[0]}
</span>
</td>

<td class="text-center">
<button onclick="viewProgram('${name.replace(/'/g,"\\'")}')"
class="inline-flex items-center gap-1.5 h-[28px] px-3 border border-gray-200 rounded-lg text-[11px] font-semibold hover:bg-gray-50">

<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/>
<circle cx="12" cy="12" r="2.5"/>
</svg>

View
</button>
</td>
</tr>`;
}).join("");

const n=Object.keys(programs).length;
$("programCount").textContent=`${n} ${n===1?"Program":"Programs"}`;
}

/* RESPONDENT VIEW */
function viewProgram(name){
const batch=$("batchFilter").value;
const d=data[batch][name];

if(!d)return;

const total=d.respondents;

const employed=Math.round(total*d.employment/100);
const unemployed=total-employed;

const aligned=Math.round(total*d.alignment/100);
const notAligned=total-aligned;

/* Demo response completion until connected to database */
const completed=Math.round(total*.94);
const completion=(completed/total)*100;

$("modalProgram").textContent=`${name} Respondents`;
$("modalBatch").textContent=batch==="all"?"All Batches":`Batch ${batch}`;

$("modalRespondents").textContent=total.toLocaleString();
$("modalEmployed").textContent=employed.toLocaleString();
$("modalAligned").textContent=aligned.toLocaleString();
$("modalCompleted").textContent=completed.toLocaleString();

$("modalEmploymentPercent").textContent=`${d.employment.toFixed(1)}% of respondents`;
$("modalAlignmentPercent").textContent=`${d.alignment.toFixed(1)}% of respondents`;

$("responseProgramBadge").textContent=name;

/* EMPLOYMENT */
$("employedCount").textContent=employed.toLocaleString();
$("employedPct").textContent=`(${d.employment.toFixed(1)}%)`;
$("employedBar").style.width=d.employment+"%";

const unemployedPct=100-d.employment;

$("unemployedCount").textContent=unemployed.toLocaleString();
$("unemployedPct").textContent=`(${unemployedPct.toFixed(1)}%)`;
$("unemployedBar").style.width=unemployedPct+"%";

/* ALIGNMENT */
$("alignedCount").textContent=aligned.toLocaleString();
$("alignedPct").textContent=`(${d.alignment.toFixed(1)}%)`;
$("alignedBar").style.width=d.alignment+"%";

const notAlignedPct=100-d.alignment;

$("notAlignedCount").textContent=notAligned.toLocaleString();
$("notAlignedPct").textContent=`(${notAlignedPct.toFixed(1)}%)`;
$("notAlignedBar").style.width=notAlignedPct+"%";

/* RESPONSE TABLE */
const rows=[
["Total tracer respondents",total,100],
["Employed graduates",employed,d.employment],
["Unemployed graduates",unemployed,unemployedPct],
["Job-program aligned",aligned,d.alignment],
["Not job-program aligned",notAligned,notAlignedPct],
["Completed tracer survey",completed,completion]
];

$("respondentTable").innerHTML=rows.map((r,i)=>`
<tr class="${i<rows.length-1?"border-b border-gray-100":""}">
<td class="px-4 py-3 text-gray-600">${r[0]}</td>

<td class="px-4 py-3 text-right font-semibold">
${r[1].toLocaleString()}
</td>

<td class="px-4 py-3 text-right text-gray-600">
${r[2].toFixed(1)}%
</td>
</tr>
`).join("");

$("viewModal").classList.remove("hidden");
}

function closeView(){
$("viewModal").classList.add("hidden");
}

/* FILTER ENTIRE DASHBOARD */
function updateDashboard(){
const program=$("programFilter").value;
const batch=$("batchFilter").value;

const all=data[batch];
const programs=program==="all"?all:{[program]:all[program]};

const pText=program==="all"?"All Programs":program;
const bText=batch==="all"?"All Batches":`Batch ${batch}`;

$("employmentKpi").textContent=avg(programs,"employment").toFixed(1)+"%";
$("alignmentKpi").textContent=avg(programs,"alignment").toFixed(1)+"%";

$("relevanceKpi").innerHTML=
`${avg(programs,"relevance").toFixed(2)}<span class="text-[13px] font-normal text-gray-400">/5</span>`;

$("competencyKpi").innerHTML=
`${avg(programs,"competency").toFixed(2)}<span class="text-[13px] font-normal text-gray-400">/5</span>`;

const c=skills[program]||skills.all;
const total=Object.values(programs).reduce((a,b)=>a+b.respondents,0);

drawRadar(c);
setupResponses(c,total);
drawTrend(program);
renderTable(programs);

$("trendLabel").textContent=`${pText} · ${bText}`;
$("tableLabel").textContent=`${pText} · ${bText}`;

if(program==="all"){
$("pageTitle").textContent="QA Dashboard";
$("pageSub").textContent="Institutional quality assurance overview";
$("trendTitle").textContent="Institutional Performance Trend";
$("tableTitle").textContent="Institutional Performance by Program";
}else{
$("pageTitle").textContent=`${program} QA Dashboard`;
$("pageSub").textContent=`${program} quality assurance and graduate outcomes`;
$("trendTitle").textContent=`${program} Performance Trend`;
$("tableTitle").textContent=`${program} Performance`;
}
}

/* EVENTS */
$("programFilter").addEventListener("change",updateDashboard);
$("batchFilter").addEventListener("change",updateDashboard);

$("competencyFilter").addEventListener("change",e=>{
renderResponse(e.target.value);
});

$("viewModal").addEventListener("click",e=>{
if(e.target===$("viewModal"))closeView();
});

document.addEventListener("keydown",e=>{
if(e.key==="Escape")closeView();
});

updateDashboard();