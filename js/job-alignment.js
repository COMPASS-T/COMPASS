const $ = id => document.getElementById(id);

// =====================================================
// SIDEBAR
// =====================================================
function toggleSidebar(){
  $("sidebar")?.classList.toggle("-translate-x-full");
  $("sidebarOverlay")?.classList.toggle("hidden");
}

function closeSidebar(){
  $("sidebar")?.classList.add("-translate-x-full");
  $("sidebarOverlay")?.classList.add("hidden");
}


// =====================================================
// NOTIFICATION + PROFILE DROPDOWNS
// =====================================================
function toggleDropdown(id,e){
  e?.stopPropagation();

  const target=$(id);
  const notif=$("notifDropdown");
  const user=$("userDropdown");

  if(!target)return;

  if(id==="notifDropdown"){
    user?.classList.add("hidden");
  }else{
    notif?.classList.add("hidden");
  }

  target.classList.toggle("hidden");
}

$("notifDropdown")?.addEventListener("click",e=>e.stopPropagation());
$("userDropdown")?.addEventListener("click",e=>e.stopPropagation());

document.addEventListener("click",()=>{
  $("notifDropdown")?.classList.add("hidden");
  $("userDropdown")?.classList.add("hidden");
});

$("markAllReadBtn")?.addEventListener("click",e=>{
  e.stopPropagation();

  document.querySelectorAll(".notif-dot").forEach(dot=>{
    dot.classList.add("hidden");
  });

  const badge=document.querySelector(
    "button[onclick=\"toggleDropdown('notifDropdown',event)\"] span"
  );

  badge?.classList.add("hidden");
});


// =====================================================
// DATA
// =====================================================
const records=[
{
  name:"Maria Santos",
  id:"ALM-2020-0451",
  program:"BSIT",
  batch:"2020-2024",
  job:"Software Developer",
  alignment:"Aligned",
  employment:"Employed",
  location:"Quezon City, Philippines",
  email:"maria.santos@email.com",
  company:"TechNova Solutions",
  industry:"Software Development",
  setup:"Hybrid",
  address:"Quezon City, Philippines",
  contact:"+63 917 123 4567"
},
{
  name:"Jose Reyes",
  id:"ALM-2020-0452",
  program:"BSCS",
  batch:"2020-2024",
  job:"Systems Administrator",
  alignment:"Aligned",
  employment:"Employed",
  location:"Makati City, Philippines",
  email:"jose.reyes@email.com",
  company:"Nexus Systems",
  industry:"Information Technology",
  setup:"On-site",
  address:"Makati City, Philippines",
  contact:"+63 917 234 5678"
},
{
  name:"Ana Garcia",
  id:"ALM-2020-0453",
  program:"BSDA",
  batch:"2020-2024",
  job:"Data Analyst",
  alignment:"Aligned",
  employment:"Self-employed",
  location:"Taguig City, Philippines",
  email:"ana.garcia@email.com",
  company:"Independent Analytics",
  industry:"Data Analytics",
  setup:"Remote",
  address:"Taguig City, Philippines",
  contact:"+63 917 345 6789"
},
{
  name:"Carlos Mendoza",
  id:"ALM-2020-0454",
  program:"BSIS",
  batch:"2020-2024",
  job:"IT Support Specialist",
  alignment:"Aligned",
  employment:"Employed",
  location:"Cavite City, Philippines",
  email:"carlos.mendoza@email.com",
  company:"CoreTech PH",
  industry:"IT Services",
  setup:"On-site",
  address:"Cavite City, Philippines",
  contact:"+63 917 456 7890"
},
{
  name:"Patricia Lim",
  id:"ALM-2020-0455",
  program:"BSIT",
  batch:"2020-2024",
  job:"—",
  alignment:"Not Aligned",
  employment:"Unemployed",
  location:"N/A",
  email:"patricia.lim@email.com",
  company:"N/A",
  industry:"N/A",
  setup:"N/A",
  address:"San Juan City, Philippines",
  contact:"+63 921 567 8901"
},
{
  name:"Miguel Torres",
  id:"ALM-2020-0456",
  program:"BSCS",
  batch:"2020-2024",
  job:"BPO Technical Support",
  alignment:"Partially Aligned",
  employment:"Employed",
  location:"Pasig City, Philippines",
  email:"miguel.torres@email.com",
  company:"Connect PH",
  industry:"BPO",
  setup:"Hybrid",
  address:"Pasig City, Philippines",
  contact:"+63 918 123 1111"
},
{
  name:"Isabella Cruz",
  id:"ALM-2020-0457",
  program:"BSIT",
  batch:"2020-2024",
  job:"QA Engineer",
  alignment:"Aligned",
  employment:"Employed",
  location:"Makati City, Philippines",
  email:"isabella.cruz@email.com",
  company:"DigitalWorks",
  industry:"Software Development",
  setup:"Hybrid",
  address:"Makati City, Philippines",
  contact:"+63 918 222 1111"
},
{
  name:"Rafael Villanueva",
  id:"ALM-2020-0458",
  program:"BSDA",
  batch:"2020-2024",
  job:"Data Analyst",
  alignment:"Aligned",
  employment:"Employed",
  location:"Batangas City, Philippines",
  email:"rafael.v@email.com",
  company:"DataPoint PH",
  industry:"Data Analytics",
  setup:"Remote",
  address:"Batangas City, Philippines",
  contact:"+63 918 333 1111"
},
{
  name:"Sofia Aquino",
  id:"ALM-2020-0459",
  program:"BSCS",
  batch:"2020-2024",
  job:"Graduate Student",
  alignment:"Aligned",
  employment:"Further Studies",
  location:"Naga City, Philippines",
  email:"sofia.aquino@email.com",
  company:"N/A",
  industry:"Education",
  setup:"N/A",
  address:"Naga City, Philippines",
  contact:"+63 918 444 1111"
},
{
  name:"Daniel Fernandez",
  id:"ALM-2020-0460",
  program:"BSIT",
  batch:"2020-2024",
  job:"Freelance Developer",
  alignment:"Aligned",
  employment:"Self-employed",
  location:"Mandaluyong, Philippines",
  email:"daniel.fernandez@email.com",
  company:"Freelance",
  industry:"Software Development",
  setup:"Remote",
  address:"Mandaluyong, Philippines",
  contact:"+63 918 555 1111"
},

{
  name:"Angela Ramos",
  id:"ALM-2019-0351",
  program:"BSIT",
  batch:"2019-2023",
  job:"Frontend Developer",
  alignment:"Aligned",
  employment:"Employed",
  location:"Naga City, Philippines",
  email:"angela.ramos@email.com",
  company:"Bicol Digital Solutions",
  industry:"Software Development",
  setup:"Hybrid",
  address:"Naga City, Philippines",
  contact:"+63 918 111 2233"
},
{
  name:"Kevin Bautista",
  id:"ALM-2019-0352",
  program:"BSCS",
  batch:"2019-2023",
  job:"Network Administrator",
  alignment:"Aligned",
  employment:"Employed",
  location:"Legazpi City, Philippines",
  email:"kevin.b@email.com",
  company:"NetCore PH",
  industry:"Network Services",
  setup:"On-site",
  address:"Legazpi City, Philippines",
  contact:"+63 918 222 3344"
},
{
  name:"Camille Navarro",
  id:"ALM-2019-0355",
  program:"BSIS",
  batch:"2019-2023",
  job:"—",
  alignment:"Not Aligned",
  employment:"Unemployed",
  location:"N/A",
  email:"camille.n@email.com",
  company:"N/A",
  industry:"N/A",
  setup:"N/A",
  address:"Naga City, Philippines",
  contact:"+63 918 333 4455"
},
{
  name:"Rina Mercado",
  id:"ALM-2018-0255",
  program:"BSIT",
  batch:"2018-2022",
  job:"Junior Developer",
  alignment:"Aligned",
  employment:"Employed",
  location:"Makati City, Philippines",
  email:"rina.mercado@email.com",
  company:"CloudWorks PH",
  industry:"Software Development",
  setup:"Hybrid",
  address:"Makati City, Philippines",
  contact:"+63 918 444 5566"
},
{
  name:"Ella Navarro",
  id:"ALM-2018-0253",
  program:"BSCS",
  batch:"2018-2022",
  job:"Graduate Student",
  alignment:"Aligned",
  employment:"Further Studies",
  location:"Manila, Philippines",
  email:"ella.n@email.com",
  company:"N/A",
  industry:"Education",
  setup:"N/A",
  address:"Manila, Philippines",
  contact:"+63 918 555 6677"
},
{
  name:"John Rivera",
  id:"ALM-2018-0254",
  program:"BSIS",
  batch:"2018-2022",
  job:"Systems Analyst",
  alignment:"Aligned",
  employment:"Employed",
  location:"Pasay City, Philippines",
  email:"john.r@email.com",
  company:"Enterprise Solutions",
  industry:"Information Systems",
  setup:"Hybrid",
  address:"Pasay City, Philippines",
  contact:"+63 918 666 7788"
},
{
  name:"Nicole Flores",
  id:"ALM-2018-0256",
  program:"BSIT",
  batch:"2018-2022",
  job:"Technical Support",
  alignment:"Partially Aligned",
  employment:"Employed",
  location:"Naga City, Philippines",
  email:"nicole.f@email.com",
  company:"TechServe",
  industry:"IT Services",
  setup:"On-site",
  address:"Naga City, Philippines",
  contact:"+63 918 777 8899"
},
{
  name:"Mark Castillo",
  id:"ALM-2018-0257",
  program:"BSCS",
  batch:"2018-2022",
  job:"Software Developer",
  alignment:"Aligned",
  employment:"Employed",
  location:"Quezon City, Philippines",
  email:"mark.c@email.com",
  company:"CodeLabs PH",
  industry:"Software Development",
  setup:"Hybrid",
  address:"Quezon City, Philippines",
  contact:"+63 918 888 9900"
},
{
  name:"Jasmine Lopez",
  id:"ALM-2018-0258",
  program:"BSDA",
  batch:"2018-2022",
  job:"Data Visualization Analyst",
  alignment:"Aligned",
  employment:"Employed",
  location:"Taguig City, Philippines",
  email:"jasmine.l@email.com",
  company:"Insight PH",
  industry:"Data Analytics",
  setup:"Hybrid",
  address:"Taguig City, Philippines",
  contact:"+63 918 999 0011"
},
{
  name:"Paolo Mendoza",
  id:"ALM-2018-0259",
  program:"BSIS",
  batch:"2018-2022",
  job:"Retail Associate",
  alignment:"Not Aligned",
  employment:"Employed",
  location:"Naga City, Philippines",
  email:"paolo.m@email.com",
  company:"Retail Group PH",
  industry:"Retail",
  setup:"On-site",
  address:"Naga City, Philippines",
  contact:"+63 918 101 1122"
}
];


// =====================================================
// DEGREE NAMES
// =====================================================
const degreeName=p=>({
  BSIT:"Bachelor of Science in Information Technology",
  BSCS:"Bachelor of Science in Computer Science",
  BSIS:"Bachelor of Science in Information Systems",
  BSDA:"Bachelor of Science in Data Analytics"
}[p]||p);


// =====================================================
// BADGES
// =====================================================
function alignmentBadge(s){
  const c={
    "Aligned":"bg-emerald-50 text-emerald-700 border-emerald-200",
    "Partially Aligned":"bg-amber-50 text-amber-700 border-amber-200",
    "Not Aligned":"bg-red-50 text-red-600 border-red-200"
  };

  return `
  <span class="inline-flex px-2 py-1 rounded-full border text-[9px] font-medium whitespace-nowrap ${c[s]||""}">
    ${s}
  </span>`;
}


function employmentBadge(s){
  const c={
    "Employed":"bg-emerald-50 text-emerald-700 border-emerald-200",
    "Self-employed":"bg-orange-50 text-orange-600 border-orange-200",
    "Unemployed":"bg-red-50 text-red-600 border-red-200",
    "Further Studies":"bg-blue-50 text-blue-600 border-blue-200"
  };

  return `
  <span class="inline-flex px-2 py-1 rounded-full border text-[9px] font-medium whitespace-nowrap ${c[s]||""}">
    ${s}
  </span>`;
}


// =====================================================
// TOP ANALYTICS
// =====================================================
function analyticsData(){
  const p=$("programFilter")?.value||"all";
  const b=$("batchFilter")?.value||"all";

  return records.filter(r=>
    (p==="all"||r.program===p)&&
    (b==="all"||r.batch===b)
  );
}


function renderAnalytics(){

  const data=analyticsData();
  const total=data.length;

  const aligned=data.filter(x=>x.alignment==="Aligned").length;
  const partial=data.filter(x=>x.alignment==="Partially Aligned").length;
  const not=data.filter(x=>x.alignment==="Not Aligned").length;

  const percent=n=>total?Math.round(n/total*100):0;

  const ap=percent(aligned);
  const pp=percent(partial);
  const np=percent(not);


  $("alignedPercent").textContent=ap+"%";
  $("partialPercent").textContent=pp+"%";
  $("notPercent").textContent=np+"%";

  $("alignedCount").textContent=`${aligned} graduates`;
  $("partialCount").textContent=`${partial} graduates`;
  $("notCount").textContent=`${not} graduates`;

  $("tracedCount").textContent=`${total} traced graduates`;

  $("alignedSmallCount").textContent=`${aligned} graduates`;
  $("partialSmallCount").textContent=`${partial} graduates`;
  $("notSmallCount").textContent=`${not} graduates`;

  $("alignedBarPercent").textContent=ap+"%";
  $("partialBarPercent").textContent=pp+"%";
  $("notBarPercent").textContent=np+"%";

  $("alignedBar").style.width=ap+"%";
  $("partialBar").style.width=pp+"%";
  $("notBar").style.width=np+"%";

  updateSubtitle();
  renderProgramComparison();
  filterRecords();
}


// =====================================================
// PAGE SUBTITLE
// =====================================================
function updateSubtitle(){

  const p=$("programFilter")?.value||"all";
  const b=$("batchFilter")?.value||"all";

  const program=p==="all"?"All programs":p;
  const batch=b==="all"?"all batches":b;

  $("pageSubtitle").textContent=
    `${program} — ${batch} — How well graduate employment matches their academic program`;
}


// =====================================================
// ALIGNMENT BY PROGRAM
// =====================================================
function renderProgramComparison(){

  const box=$("programComparison");
  if(!box)return;

  const batch=$("batchFilter")?.value||"all";
  const selectedProgram=$("programFilter")?.value||"all";

  const programs=selectedProgram==="all"
    ?["BSIT","BSCS","BSIS","BSDA"]
    :[selectedProgram];

  box.innerHTML=programs.map(program=>{

    const data=records.filter(r=>
      r.program===program &&
      (batch==="all"||r.batch===batch)
    );

    const total=data.length;

    const aligned=data.filter(r=>r.alignment==="Aligned").length;
    const partial=data.filter(r=>r.alignment==="Partially Aligned").length;
    const not=data.filter(r=>r.alignment==="Not Aligned").length;

    const alignedPercent=total?Math.round(aligned/total*100):0;
    const partialPercent=total?Math.round(partial/total*100):0;
    const notPercent=total?Math.round(not/total*100):0;

    return `
      <div>
        <div class="flex items-center justify-between mb-2">
          <div>
            <p class="text-[12px] font-semibold text-gray-900">${program}</p>
            <p class="text-[10px] text-gray-400">${total} traced graduates</p>
          </div>

          <p class="text-[13px] font-bold text-gray-900">
            ${alignedPercent}%
          </p>
        </div>

        <div class="flex h-[6px] rounded-full overflow-hidden bg-gray-100">
          <div class="bg-blue-600" style="width:${alignedPercent}%"></div>
          <div class="bg-blue-300" style="width:${partialPercent}%"></div>
          <div class="bg-gray-400" style="width:${notPercent}%"></div>
        </div>

        <div class="flex gap-4 mt-2 text-[9px] text-gray-500">
          <span>Aligned ${alignedPercent}%</span>
          <span>Partial ${partialPercent}%</span>
          <span>Not ${notPercent}%</span>
        </div>
      </div>
    `;
  }).join("");
}


// =====================================================
// RECORD FILTERING
// =====================================================
let currentPage=1;
const perPage=10;
let filtered=[...records];


function filterRecords(){

  const q=($("recordSearch")?.value||"")
    .toLowerCase()
    .trim();

  const program=$("programFilter")?.value||"all";
  const batch=$("batchFilter")?.value||"all";

  const alignment=$("recordAlignment")?.value||"all";
  const employment=$("recordEmployment")?.value||"all";


  filtered=records.filter(r=>{

    const search=`
      ${r.name}
      ${r.id}
      ${r.program}
      ${r.batch}
      ${r.job}
      ${r.location}
      ${r.company}
    `.toLowerCase();

    return (
      (!q||search.includes(q)) &&
      (program==="all"||r.program===program) &&
      (batch==="all"||r.batch===batch) &&
      (alignment==="all"||r.alignment===alignment) &&
      (employment==="all"||r.employment===employment)
    );

  });

  currentPage=1;

  updateRecordSubtitle();
  renderRecords();
}


// =====================================================
// RECORD SUBTITLE
// =====================================================
function updateRecordSubtitle(){

  const p=$("programFilter")?.value||"all";
  const b=$("batchFilter")?.value||"all";

  const program=p==="all"?"all programs":p;
  const batch=b==="all"?"all batches":b;

  $("recordSubtitle").textContent=
    `Showing graduate records for ${program} and ${batch}.`;
}


// =====================================================
// RENDER RECORD TABLE
// =====================================================
function renderRecords(){

  const body=$("recordsBody");
  if(!body)return;

  const total=filtered.length;

  const pages=Math.max(
    1,
    Math.ceil(total/perPage)
  );

  currentPage=Math.min(
    currentPage,
    pages
  );


  const start=(currentPage-1)*perPage;

  const end=Math.min(
    start+perPage,
    total
  );

  const list=filtered.slice(
    start,
    end
  );


  body.innerHTML=list.length

  ? list.map(r=>{

      const index=records.indexOf(r);

      return `
      <tr class="hover:bg-gray-50">

        <td class="px-4 py-[11px] font-semibold whitespace-nowrap">
          ${r.name}
        </td>

        <td class="py-[11px] text-gray-600">
          ${r.id}
        </td>

        <td class="py-[11px]">
          ${r.program}
        </td>

        <td class="py-[11px]">
          ${r.batch}
        </td>

        <td class="py-[11px]">
          ${r.job}
        </td>

        <td class="py-[11px]">
          ${alignmentBadge(r.alignment)}
        </td>

        <td class="py-[11px]">
          ${employmentBadge(r.employment)}
        </td>

        <td class="py-[11px] text-gray-600">
          ${r.location}
        </td>

        <td class="py-[11px] text-center pr-4">

          <button
            onclick="openProfile(${index})"
            class="px-3 py-1.5 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50">

            View

          </button>

        </td>

      </tr>
      `;

    }).join("")

  : `
    <tr>
      <td colspan="9"
          class="py-10 text-center text-gray-400">
        No records found.
      </td>
    </tr>
  `;


  $("recordInfo").textContent=
    total
    ? `Showing ${start+1}–${end} of ${total} records`
    : "Showing 0 records";


  $("prevBtn").disabled=currentPage===1;

  $("nextBtn").disabled=
    currentPage===pages||!total;


  $("prevBtn").classList.toggle(
    "opacity-40",
    currentPage===1
  );

  $("nextBtn").classList.toggle(
    "opacity-40",
    currentPage===pages||!total
  );


  renderPagination(pages);
}


// =====================================================
// PAGINATION
// =====================================================
function renderPagination(pages){

  const container=$("pageNumbers");
  if(!container)return;

  container.innerHTML="";


  for(let i=1;i<=pages;i++){

    const btn=document.createElement("button");

    btn.textContent=i;

    btn.className=`
      w-[30px]
      h-[30px]
      rounded-lg
      border
      text-[10px]
      ${
        i===currentPage
        ?"bg-blue-600 border-blue-600 text-white"
        :"bg-white border-gray-200 hover:bg-gray-50"
      }
    `;

    btn.onclick=()=>{
      currentPage=i;
      renderRecords();
    };

    container.appendChild(btn);
  }
}


$("prevBtn")?.addEventListener("click",()=>{

  if(currentPage>1){
    currentPage--;
    renderRecords();
  }

});


$("nextBtn")?.addEventListener("click",()=>{

  const pages=Math.ceil(
    filtered.length/perPage
  );

  if(currentPage<pages){
    currentPage++;
    renderRecords();
  }

});


// =====================================================
// RECORD FILTER EVENTS
// =====================================================
$("recordSearch")?.addEventListener(
  "input",
  filterRecords
);

$("recordAlignment")?.addEventListener(
  "change",
  filterRecords
);

$("recordEmployment")?.addEventListener(
  "change",
  filterRecords
);


// =====================================================
// MAIN PROGRAM / BATCH FILTERS
// =====================================================
$("programFilter")?.addEventListener(
  "change",
  renderAnalytics
);

$("batchFilter")?.addEventListener(
  "change",
  renderAnalytics
);


// =====================================================
// GRADUATE PROFILE MODAL
// =====================================================
window.openProfile=index=>{

  const a=records[index];

  if(!a)return;


  $("modalBreadcrumb").textContent=a.name;
  $("modalName").textContent=a.name;
  $("modalLocation").textContent=a.location;

  $("modalId").textContent=a.id;
  $("modalDegree").textContent=degreeName(a.program);
  $("modalBatch").textContent=a.batch;
  $("modalEmail").textContent=a.email;

  $("modalEmployment").textContent=a.employment;
  $("modalPosition").textContent=a.job;
  $("modalCompany").textContent=a.company;
  $("modalIndustry").textContent=a.industry;

  $("modalSetup").textContent=a.setup;
  $("modalWorkLocation").textContent=a.location;
  $("modalAddress").textContent=a.address;
  $("modalContact").textContent=a.contact;


  // INITIALS
  const initials=a.name
    .split(" ")
    .map(n=>n[0])
    .join("")
    .slice(0,2)
    .toUpperCase();

  $("modalInitials").textContent=initials;


  // STATUS BADGE
  const status=$("modalStatus");

  status.textContent=a.employment;

  status.className=
    "text-[9px] rounded-full px-2 py-1 border "+

    (
      a.employment==="Employed"
      ?"text-emerald-700 bg-emerald-50 border-emerald-200"

      :a.employment==="Self-employed"
      ?"text-orange-600 bg-orange-50 border-orange-200"

      :a.employment==="Further Studies"
      ?"text-blue-600 bg-blue-50 border-blue-200"

      :"text-red-600 bg-red-50 border-red-200"
    );


  // CAREER / STUDY STATUS
  if(a.employment==="Unemployed"){

    $("modalHistory").innerHTML=`
      <p class="text-[11px] text-gray-400">
        No current employment history available.
      </p>
    `;

  }

  else if(a.employment==="Further Studies"){

    $("modalHistory").innerHTML=`
      <div class="flex gap-3">

        <span class="mt-1 w-[11px] h-[11px] bg-blue-500 rounded-full shrink-0"></span>

        <div>

          <p class="text-[12px] font-semibold">
            ${a.job}
          </p>

          <p class="text-[11px] text-gray-500 mt-1">
            Continuing Education
          </p>

          <p class="text-[10px] text-gray-400 mt-1">
            ${a.batch} — Present
          </p>

        </div>

      </div>
    `;

  }

  else{

    $("modalHistory").innerHTML=`
      <div class="flex gap-3">

        <span class="mt-1 w-[11px] h-[11px] bg-blue-500 rounded-full shrink-0"></span>

        <div>

          <p class="text-[12px] font-semibold">
            ${a.job}
          </p>

          <p class="text-[11px] text-gray-500 mt-1">
            ${a.company}
          </p>

          <p class="text-[10px] text-gray-400 mt-1">
            ${a.batch} — Present
          </p>

        </div>

      </div>
    `;

  }


  $("profileModal").classList.remove("hidden");
  $("profileModal").classList.add("flex");

  document.body.classList.add("overflow-hidden");
};


// =====================================================
// CLOSE GRADUATE PROFILE
// =====================================================
function closeProfile(){

  $("profileModal")?.classList.add("hidden");
  $("profileModal")?.classList.remove("flex");

  document.body.classList.remove("overflow-hidden");
}


$("closeProfileModal")?.addEventListener(
  "click",
  closeProfile
);

$("backProfileBtn")?.addEventListener(
  "click",
  closeProfile
);


$("profileModal")?.addEventListener("click",e=>{

  if(e.target===$("profileModal")){
    closeProfile();
  }

});


// =====================================================
// ESCAPE KEY
// =====================================================
document.addEventListener("keydown",e=>{

  if(e.key!=="Escape")return;

  $("notifDropdown")?.classList.add("hidden");
  $("userDropdown")?.classList.add("hidden");

  if(!$("profileModal")?.classList.contains("hidden")){
    closeProfile();
  }

});


// =====================================================
// KEEP SIDEBAR LINKS FROM DRAGGING / SELECTING
// =====================================================
document.querySelectorAll("#sidebar nav a").forEach(a=>{

  a.draggable=false;

  a.addEventListener(
    "dragstart",
    e=>e.preventDefault()
  );

  a.addEventListener(
    "selectstart",
    e=>e.preventDefault()
  );

});


// =====================================================
// START
// =====================================================
renderAnalytics();