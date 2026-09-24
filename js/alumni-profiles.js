(function(){

const $=id=>document.getElementById(id);

const alumni=[
{id:"ALM-2023-0451",first:"Maria",last:"Santos",program:"BSIT",batch:2023,email:"maria.santos@email.com",status:"Employed",company:"Accenture Philippines",position:"Junior Software Developer",location:"Quezon City",country:"Philippines",region:"Metro Manila",setup:"Hybrid"},
{id:"ALM-2022-0452",first:"Jose",last:"Reyes",program:"BSCS",batch:2022,email:"jose.reyes@email.com",status:"Employed",company:"Samsung R&D",position:"Data Analyst",location:"Makati City",country:"Philippines",region:"Metro Manila",setup:"Onsite"},
{id:"ALM-2023-0453",first:"Ana",last:"Garcia",program:"BSBA",batch:2023,email:"ana.garcia@email.com",status:"Self-employed",company:"AG Digital Marketing",position:"Founder",location:"Taguig City",country:"Philippines",region:"Metro Manila",setup:"Work from Home"},
{id:"ALM-2021-0454",first:"Carlos",last:"Mendoza",program:"BSCpE",batch:2021,email:"carlos.mendoza@email.com",status:"Employed",company:"Texas Instruments",position:"Engineer",location:"Cavite City",country:"Philippines",region:"CALABARZON",setup:"Onsite"},
{id:"ALM-2023-0455",first:"Patricia",last:"Lim",program:"BSIS",batch:2023,email:"patricia.lim@email.com",status:"Unemployed",company:"",position:"",location:"San Juan City",country:"Philippines",region:"Metro Manila",setup:"Not Specified"},
{id:"ALM-2022-0456",first:"Miguel",last:"Torres",program:"BSIT",batch:2022,email:"miguel.torres@email.com",status:"Freelancer",company:"Freelance",position:"Full-Stack Developer",location:"Pasig City",country:"Philippines",region:"Metro Manila",setup:"Work from Home"},
{id:"ALM-2020-0457",first:"Isabella",last:"Cruz",program:"BSA",batch:2020,email:"isabella.cruz@email.com",status:"Employed",company:"SGV & Co.",position:"Auditor",location:"Manila",country:"Philippines",region:"Metro Manila",setup:"Onsite"},
{id:"ALM-2021-0458",first:"Rafael",last:"Villanueva",program:"BSED",batch:2021,email:"rafael.v@email.com",status:"Employed",company:"DepEd",position:"Teacher",location:"Batangas City",country:"Philippines",region:"CALABARZON",setup:"Onsite"},
{id:"ALM-2023-0459",first:"Sofia",last:"Aquino",program:"BSHRT",batch:2023,email:"sofia.aquino@email.com",status:"Employed",company:"Shangri-La",position:"Guest Relations Officer",location:"Pasay City",country:"Philippines",region:"Metro Manila",setup:"Onsite"},
{id:"ALM-2019-0460",first:"Daniel",last:"Fernandez",program:"BSCS",batch:2019,email:"daniel.f@email.com",status:"Self-employed",company:"Fernandez Tech",position:"CTO",location:"Mandaluyong",country:"Philippines",region:"Metro Manila",setup:"Hybrid"},

{id:"ALM-2022-1001",first:"Mark",last:"Tan",program:"BSIT",batch:2022,email:"mark.tan@email.com",status:"Employed",company:"Grab",position:"Software Engineer",location:"Singapore",country:"Singapore",region:"Southeast Asia",setup:"Hybrid"},
{id:"ALM-2021-1002",first:"Aisha",last:"Reyes",program:"BSBA",batch:2021,email:"aisha.reyes@email.com",status:"Employed",company:"Emirates",position:"Business Analyst",location:"Dubai",country:"UAE",region:"Middle East",setup:"Onsite"},
{id:"ALM-2020-1003",first:"Ken",last:"Navarro",program:"BSCS",batch:2020,email:"ken.n@email.com",status:"Employed",company:"Rakuten",position:"Backend Developer",location:"Tokyo",country:"Japan",region:"East Asia",setup:"Work from Home"},
{id:"ALM-2019-1004",first:"Nicole",last:"Dela Rosa",program:"BSA",batch:2019,email:"nicole.dr@email.com",status:"Employed",company:"Deloitte",position:"Senior Auditor",location:"New York",country:"USA",region:"North America",setup:"Hybrid"},
{id:"ALM-2021-1005",first:"James",last:"Ocampo",program:"BSIT",batch:2021,email:"james.ocampo@email.com",status:"Employed",company:"Atlassian",position:"DevOps Engineer",location:"Sydney",country:"Australia",region:"Oceania",setup:"Hybrid"},

{id:"ALM-2023-0461",first:"Angela",last:"Ramos",program:"BSIT",batch:2023,email:"angela.ramos@email.com",status:"Employed",company:"Tech Solutions",position:"Frontend Developer",location:"Naga City",country:"Philippines",region:"Bicol Region",setup:"Hybrid"},
{id:"ALM-2022-0462",first:"Paolo",last:"Mendoza",program:"BSCS",batch:2022,email:"paolo.m@email.com",status:"Employed",company:"Cloud Systems PH",position:"Software Engineer",location:"Quezon City",country:"Philippines",region:"Metro Manila",setup:"Hybrid"},
{id:"ALM-2021-0463",first:"Nicole",last:"Flores",program:"BSIS",batch:2021,email:"nicole.f@email.com",status:"Freelancer",company:"Freelance",position:"IT Consultant",location:"Naga City",country:"Philippines",region:"Bicol Region",setup:"Work from Home"},
{id:"ALM-2023-0464",first:"John",last:"Mercado",program:"BSIT",batch:2023,email:"john.m@email.com",status:"Unemployed",company:"",position:"",location:"Manila",country:"Philippines",region:"Metro Manila",setup:"Not Specified"},
{id:"ALM-2022-0465",first:"Carla",last:"Torres",program:"BSIS",batch:2022,email:"carla.t@email.com",status:"Employed",company:"Enterprise Systems",position:"Systems Analyst",location:"Makati City",country:"Philippines",region:"Metro Manila",setup:"Hybrid"}
];

let filtered=[...alumni];
let page=1;
const perPage=10;

let map;
let cityChart;
let regionChart;


/* =========================
   HELPERS
========================= */

function countBy(key){
return alumni.reduce((obj,a)=>{
obj[a[key]]=(obj[a[key]]||0)+1;
return obj;
},{});
}

function statusStyle(status){
return {
"Employed":"bg-green-50 text-green-700 border-green-200",
"Unemployed":"bg-red-50 text-red-700 border-red-200",
"Self-employed":"bg-orange-50 text-orange-700 border-orange-200",
"Freelancer":"bg-purple-50 text-purple-700 border-purple-200"
}[status]||"bg-gray-50 text-gray-600 border-gray-200";
}

function badge(status){
return `<span class="px-2 py-1 border rounded-full text-[10px] font-semibold ${statusStyle(status)}">${status}</span>`;
}


/* =========================
   TABLE
========================= */

function renderTable(){

const start=(page-1)*perPage;
const rows=filtered.slice(start,start+perPage);
const pages=Math.max(1,Math.ceil(filtered.length/perPage));

$("alumniTableBody").innerHTML=rows.map(a=>`

<tr class="border-b border-gray-100 hover:bg-gray-50">

<td class="px-5 py-3">
<div class="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold">
${a.first[0]}${a.last[0]}
</div>
</td>

<td class="px-3 py-3 font-semibold text-gray-900">
${a.first} ${a.last}
</td>

<td class="px-3 py-3 text-gray-500">${a.id}</td>

<td class="px-3 py-3 text-gray-500">${a.program}</td>

<td class="px-3 py-3 text-gray-500">${a.batch}</td>

<td class="px-3 py-3 text-gray-500">${a.email}</td>

<td class="px-3 py-3">${badge(a.status)}</td>

<td class="px-3 py-3 text-gray-500">
${a.location}, ${a.country}
</td>

<td class="px-3 py-3">
<button data-id="${a.id}" class="viewProfile px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-semibold hover:bg-blue-700">
View
</button>
</td>

</tr>

`).join("");

$("showingText").textContent=
filtered.length
?`Showing ${start+1}-${Math.min(start+perPage,filtered.length)} of ${filtered.length} records`
:"No records found";

$("pageInfo").textContent=`Page ${page} of ${pages}`;

$("prevBtn").disabled=page===1;
$("nextBtn").disabled=page===pages;

$("prevBtn").classList.toggle("opacity-40",page===1);
$("nextBtn").classList.toggle("opacity-40",page===pages);
}


/* =========================
   FILTERS
========================= */

function filterTable(){

const q=$("tableSearch").value.toLowerCase();
const program=$("filterProgram").value;
const batch=$("filterBatch").value;
const status=$("filterStatus").value;

filtered=alumni.filter(a=>{

const search=
`${a.first} ${a.last} ${a.id} ${a.email} ${a.location}`.toLowerCase();

return (
(!q||search.includes(q)) &&
(!program||a.program===program) &&
(!batch||String(a.batch)===batch) &&
(!status||a.status===status)
);

});

page=1;
renderTable();
}


/* =========================
   PROFILE
========================= */

function showProfile(id){

const a=alumni.find(x=>x.id===id);
if(!a)return;

$("listView").classList.add("hidden");
$("profileView").classList.remove("hidden");

$("profileContent").innerHTML=`

<button id="backProfiles" class="text-[12px] text-gray-500 hover:text-blue-600 mb-5">
← Back to Alumni Profiles
</button>

<div class="bg-white border border-gray-200 rounded-xl p-6">

<div class="flex justify-between items-start border-b border-gray-100 pb-5">

<div>
<h2 class="text-[21px] font-bold">
${a.first} ${a.last}
</h2>

<div class="flex gap-2 mt-2">
${badge(a.status)}
<span class="text-[11px] text-gray-500">
${a.location}, ${a.country}
</span>
</div>
</div>

<button class="px-4 py-2 border border-gray-200 rounded-lg text-[11px] font-semibold">
Verify Credentials
</button>

</div>

<div class="grid grid-cols-3 gap-6 mt-6">

${[
["ALUMNI ID",a.id],
["PROGRAM",a.program],
["BATCH",a.batch],
["EMAIL",a.email],
["COMPANY",a.company||"N/A"],
["POSITION",a.position||"N/A"],
["WORK SETUP",a.setup],
["WORK LOCATION",`${a.location}, ${a.country}`]
].map(x=>`

<div>
<p class="text-[9px] font-semibold text-gray-400 tracking-wide">
${x[0]}
</p>

<p class="text-[12px] text-gray-800 mt-1">
${x[1]}
</p>
</div>

`).join("")}

</div>
</div>
`;
}


/* =========================
   LOCATION CHARTS
========================= */

function renderLocationCharts(){

const cityData=countBy("location");
const regionData=countBy("region");

const cities=Object.entries(cityData)
.sort((a,b)=>b[1]-a[1])
.slice(0,8);

const regions=Object.entries(regionData)
.sort((a,b)=>b[1]-a[1]);

const local=alumni.filter(a=>a.country==="Philippines").length;
const international=alumni.length-local;

$("totalAlumniCount").textContent=alumni.length.toLocaleString();
$("localAlumniCount").textContent=local.toLocaleString();
$("internationalCount").textContent=international.toLocaleString();

$("locationCount").textContent=
Object.keys(cityData).length.toLocaleString();

$("regionCount").textContent=
Object.keys(regionData).length.toLocaleString();


/* CITY BAR CHART */

if(cityChart)cityChart.destroy();

cityChart=new Chart(
$("cityChart"),
{
type:"bar",

data:{
labels:cities.map(x=>x[0]),

datasets:[{
label:"Alumni",
data:cities.map(x=>x[1]),
backgroundColor:"#3b82f6",
borderRadius:5,
borderSkipped:false,
maxBarThickness:52
}]
},

options:{
responsive:true,
maintainAspectRatio:false,

plugins:{
legend:{display:false},

tooltip:{
callbacks:{
label:function(context){
const value=context.raw;
const percent=((value/alumni.length)*100).toFixed(1);
return `${value} alumni (${percent}%)`;
}
}
}
},

scales:{
x:{
grid:{display:false},
border:{display:false},

ticks:{
color:"#6b7280",
font:{size:9},
maxRotation:35,
minRotation:0
}
},

y:{
beginAtZero:true,
suggestedMax:Math.max(...cities.map(x=>x[1]))+1,

ticks:{
precision:0,
stepSize:1,
color:"#6b7280",
font:{size:9}
},

grid:{
color:"#eef0f3"
},

border:{
display:false
}
}
}
}
}
);


/* REGION LINE/AREA CHART */

if(regionChart)regionChart.destroy();

regionChart=new Chart(
$("regionChart"),
{
type:"line",

data:{
labels:regions.map(x=>x[0]),

datasets:[{
label:"Alumni",
data:regions.map(x=>x[1]),
borderColor:"#2563eb",
backgroundColor:"rgba(37,99,235,.09)",
fill:true,
tension:.3,
pointRadius:4,
pointHoverRadius:5,
pointBackgroundColor:"#ffffff",
pointBorderColor:"#2563eb",
pointBorderWidth:2,
borderWidth:2
}]
},

options:{
responsive:true,
maintainAspectRatio:false,

plugins:{
legend:{display:false},

tooltip:{
callbacks:{
label:function(context){
const value=context.raw;
const percent=((value/alumni.length)*100).toFixed(1);
return `${value} alumni (${percent}%)`;
}
}
}
},

scales:{
x:{
grid:{display:false},
border:{display:false},

ticks:{
color:"#6b7280",
font:{size:9},
maxRotation:35,
minRotation:0
}
},

y:{
beginAtZero:true,

ticks:{
precision:0,
stepSize:1,
color:"#6b7280",
font:{size:9}
},

grid:{
color:"#eef0f3"
},

border:{
display:false
}
}
}
}
}
);

}


/* =========================
   MAP
========================= */

function initMap(){

if(typeof L==="undefined")return;

const coords={

"Quezon City":[14.6760,121.0437],
"Makati City":[14.5547,121.0244],
"Taguig City":[14.5176,121.0509],
"Cavite City":[14.4791,120.8960],
"San Juan City":[14.6019,121.0355],
"Pasig City":[14.5764,121.0851],
"Manila":[14.5995,120.9842],
"Batangas City":[13.7565,121.0583],
"Pasay City":[14.5378,121.0014],
"Mandaluyong":[14.5794,121.0359],
"Naga City":[13.6218,123.1948],

"Singapore":[1.3521,103.8198],
"Dubai":[25.2048,55.2708],
"Tokyo":[35.6762,139.6503],
"New York":[40.7128,-74.0060],
"Sydney":[-33.8688,151.2093]

};

map=L.map("alumniMap",{
scrollWheelZoom:false
}).setView([12.8797,121.7740],5);


/*
CARTO tiles instead of directly using OSM tile servers.
This is more reliable for your localhost project.
*/

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom:19,
  attribution:"&copy; OpenStreetMap contributors"
}).addTo(map);

const cityData={};

alumni.forEach(a=>{

if(!cityData[a.location]){
cityData[a.location]={
count:0,
country:a.country
};
}

cityData[a.location].count++;

});


const markers={};


Object.entries(cityData).forEach(([city,data])=>{

if(!coords[city])return;

const local=data.country==="Philippines";

const color=
local
?"#3b82f6"
:"#a855f7";


/*
IMPORTANT:
Aggregate-only popup.
NO View Alumni button.
*/

const popup=`

<div style="
font-family:Inter,sans-serif;
text-align:center;
padding:3px 8px;
min-width:145px;
">

<p style="
font-size:13px;
font-weight:700;
color:#111827;
margin:0 0 3px;
">
${city}
</p>

<p style="
font-size:10px;
color:#6b7280;
margin:0 0 8px;
">
${data.country}
</p>

<p style="
font-size:21px;
font-weight:800;
color:${color};
margin:0;
">
${data.count.toLocaleString()}
</p>

<p style="
font-size:9px;
color:#6b7280;
margin:4px 0 0;
">
alumni here
</p>

</div>

`;


const marker=L.circleMarker(
coords[city],
{
radius:6+(data.count*1.2),
color:"#ffffff",
weight:2,
fillColor:color,
fillOpacity:.9
}
)
.addTo(map)
.bindPopup(popup);

markers[city]=marker;

});


/* LOCATION BUTTONS */

$("locationList").innerHTML=
Object.entries(cityData)
.sort((a,b)=>b[1].count-a[1].count)
.map(([city,data])=>`

<button
data-city="${city}"
class="
mapLocation
flex items-center gap-2
border border-gray-100
rounded-lg
px-3 py-2
hover:bg-gray-50
text-left
">

<span class="
w-2 h-2 rounded-full
${data.country==="Philippines"
?"bg-blue-500"
:"bg-purple-500"}
"></span>

<div class="min-w-0 flex-1">

<p class="text-[11px] font-semibold truncate">
${city}
</p>

<p class="text-[9px] text-gray-400">
${data.country}
</p>

</div>

<b class="text-[11px]">
${data.count}
</b>

</button>

`).join("");


document.querySelectorAll(".mapLocation")
.forEach(button=>{

button.onclick=()=>{

const city=button.dataset.city;

if(!markers[city])return;

map.flyTo(
coords[city],
11,
{duration:.8}
);

setTimeout(
()=>markers[city].openPopup(),
850
);

};

});


$("resetMapBtn").onclick=()=>{

map.closePopup();

map.flyTo(
[12.8797,121.7740],
5,
{duration:.8}
);

};


setTimeout(
()=>map.invalidateSize(),
200
);

}


/* =========================
   TABLE EVENTS
========================= */

$("tableSearch").oninput=filterTable;
$("filterProgram").onchange=filterTable;
$("filterBatch").onchange=filterTable;
$("filterStatus").onchange=filterTable;


$("prevBtn").onclick=()=>{

if(page>1){

page--;
renderTable();

}

};


$("nextBtn").onclick=()=>{

if(page<Math.ceil(filtered.length/perPage)){

page++;
renderTable();

}

};


document.addEventListener("click",e=>{

const view=e.target.closest(".viewProfile");

if(view){
showProfile(view.dataset.id);
}

if(e.target.closest("#backProfiles")){

$("profileView").classList.add("hidden");
$("listView").classList.remove("hidden");

}

});


/* =========================
   ADD ALUMNI
========================= */

$("addAlumniBtn").onclick=()=>{
$("addAlumniModal").classList.remove("hidden");
};


$("closeAddModal").onclick=
$("cancelAddModal").onclick=()=>{
$("addAlumniModal").classList.add("hidden");
};


$("saveAlumniBtn").onclick=()=>{

const first=$("addFirst").value.trim();
const last=$("addLast").value.trim();

if(!first||!last){

alert("Please enter the alumni name.");
return;

}


const rawLocation=
$("addLocation").value.trim()||
"Naga City, Philippines";

const city=
rawLocation.split(",")[0].trim();

const country=
rawLocation.includes(",")
?rawLocation.split(",").slice(1).join(",").trim()
:"Philippines";


alumni.push({

id:
`ALM-${$("addBatch").value}-${String(alumni.length+1).padStart(4,"0")}`,

first:first,
last:last,

email:$("addEmail").value.trim(),

program:$("addProgram").value,

batch:Number($("addBatch").value),

status:$("addStatus").value,

company:"",
position:"",

location:city,
country:country,

region:
country==="Philippines"
?"Other Philippines"
:"International",

setup:$("addSetup").value

});


filtered=[...alumni];
page=1;

$("addAlumniModal").classList.add("hidden");

renderTable();
renderLocationCharts();

};


/* =========================
   DROPDOWNS
========================= */

function dropdown(button,menu){

$(button).onclick=e=>{

e.stopPropagation();

const hidden=
$(menu).classList.contains("hidden");

$("notifDropdown").classList.add("hidden");
$("userDropdown").classList.add("hidden");
$("searchDropdown").classList.add("hidden");

if(hidden){
$(menu).classList.remove("hidden");
}

};

}


dropdown("notifBtn","notifDropdown");
dropdown("avatarBtn","userDropdown");


$("searchInput").onfocus=()=>{
$("searchDropdown").classList.remove("hidden");
};


$("markAllReadBtn").onclick=()=>{

document
.querySelectorAll(".notif-dot")
.forEach(x=>x.remove());

$("notifBadge").classList.add("hidden");

};


document.addEventListener("click",e=>{

if(
!$("notifDropdown").contains(e.target)&&
!$("notifBtn").contains(e.target)
){
$("notifDropdown").classList.add("hidden");
}


if(
!$("userDropdown").contains(e.target)&&
!$("avatarBtn").contains(e.target)
){
$("userDropdown").classList.add("hidden");
}


if(
!$("searchDropdown").contains(e.target)&&
!$("searchInput").contains(e.target)
){
$("searchDropdown").classList.add("hidden");
}

});


$("logoutBtn").onclick=()=>{

if(confirm("Are you sure you want to logout?")){
location.href="../index.html";
}

};


/* =========================
   DATABASE STATUS
========================= */

function dbStatus(){

setTimeout(()=>{

$("dbStatusText").textContent=
"Synchronized";

$("dbStatusDot").className=
"w-2 h-2 bg-green-500 rounded-full";

$("dbStatusBadge").className=
"flex items-center gap-1.5 px-2.5 py-1 bg-green-50 border border-green-200 rounded-full text-[11px] font-semibold text-green-700";

},600);

}


/* =========================
   START
========================= */

renderTable();
renderLocationCharts();
initMap();
dbStatus();

})();