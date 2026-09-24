const $=id=>document.getElementById(id);

// ================= SIDEBAR =================

function toggleSidebar(){
  const s=$("sidebar"),o=$("sidebarOverlay");
  if(!s)return;

  s.classList.toggle("-translate-x-full");
  o?.classList.toggle("hidden");
}

function closeSidebar(){
  $("sidebar")?.classList.add("-translate-x-full");
  $("sidebarOverlay")?.classList.add("hidden");
}

window.addEventListener("resize",()=>{
  if(innerWidth>=1024){
    $("sidebar")?.classList.remove("-translate-x-full");
    $("sidebarOverlay")?.classList.add("hidden");
  }
});


// ================= DROPDOWNS =================

function toggleDropdown(id,event){
  event?.stopPropagation();

  const notification=$("notifDropdown");
  const user=$("userDropdown");
  const dropdown=$(id);

  if(!dropdown)return;

  const hidden=dropdown.classList.contains("hidden");

  notification?.classList.add("hidden");
  user?.classList.add("hidden");

  if(hidden)
    dropdown.classList.remove("hidden");
}

document.addEventListener("click",e=>{
  const notification=$("notifDropdown");
  const user=$("userDropdown");

  if(
    notification &&
    !notification.contains(e.target) &&
    !e.target.closest('[onclick*="notifDropdown"]')
  ){
    notification.classList.add("hidden");
  }

  if(
    user &&
    !user.contains(e.target) &&
    !e.target.closest('[onclick*="userDropdown"]')
  ){
    user.classList.add("hidden");
  }
});


// ================= SUMMARY DATA =================

const stats={

  BSIT:{
    "2020-2024":{
      total:186,
      traced:152,
      employed:134,
      self:16,
      unemployed:8,
      studies:10
    },

    "2019-2023":{
      total:172,
      traced:140,
      employed:119,
      self:14,
      unemployed:12,
      studies:9
    },

    "2018-2022":{
      total:158,
      traced:130,
      employed:107,
      self:12,
      unemployed:14,
      studies:9
    }
  },

  BSCS:{
    "2020-2024":{
      total:164,
      traced:142,
      employed:129,
      self:8,
      unemployed:5,
      studies:8
    },

    "2019-2023":{
      total:156,
      traced:132,
      employed:117,
      self:7,
      unemployed:8,
      studies:7
    },

    "2018-2022":{
      total:149,
      traced:124,
      employed:107,
      self:7,
      unemployed:10,
      studies:7
    }
  },

  BSIS:{
    "2020-2024":{
      total:151,
      traced:126,
      employed:106,
      self:10,
      unemployed:10,
      studies:8
    },

    "2019-2023":{
      total:145,
      traced:119,
      employed:98,
      self:9,
      unemployed:12,
      studies:9
    },

    "2018-2022":{
      total:137,
      traced:110,
      employed:88,
      self:8,
      unemployed:14,
      studies:8
    }
  },

  BSDA:{
    "2020-2024":{
      total:132,
      traced:108,
      employed:88,
      self:12,
      unemployed:8,
      studies:7
    },

    "2019-2023":{
      total:124,
      traced:99,
      employed:79,
      self:11,
      unemployed:9,
      studies:6
    },

    "2018-2022":{
      total:118,
      traced:92,
      employed:71,
      self:10,
      unemployed:11,
      studies:6
    }
  }
};


const programs=[
  "BSIT",
  "BSCS",
  "BSIS",
  "BSDA"
];

const batches=[
  "2018-2022",
  "2019-2023",
  "2020-2024"
];


// ================= YEARLY TREND =================
//
// Sample UI values.
// Replace these later with actual tracer data.
//

const yearlyTrend={

  BSIT:{
    "2020-2024":[82.1,84.0,86.2,88.2],
    "2019-2023":[79.8,81.5,83.2,85.0],
    "2018-2022":[77.4,79.1,80.6,82.3]
  },

  BSCS:{
    "2020-2024":[85.2,87.0,89.1,90.8],
    "2019-2023":[83.0,85.1,87.0,88.6],
    "2018-2022":[80.2,82.4,84.5,86.3]
  },

  BSIS:{
    "2020-2024":[78.5,80.2,82.3,84.1],
    "2019-2023":[76.1,78.4,80.3,82.4],
    "2018-2022":[73.8,76.0,78.1,80.0]
  },

  BSDA:{
    "2020-2024":[76.4,78.5,80.1,81.5],
    "2019-2023":[74.2,76.1,78.0,79.8],
    "2018-2022":[71.9,73.8,75.5,77.2]
  }
};


// ================= GRADUATE RECORDS =================

const graduates=[

  // 2020-2024

  {
    name:"Maria Santos",
    program:"BSIT",
    batch:"2020-2024",
    outcome:"Employed",
    type:"Full-time",
    position:"Software Developer",
    location:"Quezon City"
  },

  {
    name:"Jose Reyes",
    program:"BSCS",
    batch:"2020-2024",
    outcome:"Employed",
    type:"Full-time",
    position:"Systems Administrator",
    location:"Makati City"
  },

  {
    name:"Ana Garcia",
    program:"BSDA",
    batch:"2020-2024",
    outcome:"Self-employed",
    type:"Freelance",
    position:"Digital Artist",
    location:"Taguig City"
  },

  {
    name:"Carlos Mendoza",
    program:"BSIS",
    batch:"2020-2024",
    outcome:"Employed",
    type:"Full-time",
    position:"IT Support Specialist",
    location:"Cavite City"
  },

  {
    name:"Patricia Lim",
    program:"BSIT",
    batch:"2020-2024",
    outcome:"Unemployed",
    type:"—",
    position:"—",
    location:"—"
  },

  {
    name:"Sofia Aquino",
    program:"BSCS",
    batch:"2020-2024",
    outcome:"Further Studies",
    type:"—",
    position:"Graduate Student",
    location:"Naga City"
  },

  {
    name:"Daniel Fernandez",
    program:"BSIT",
    batch:"2020-2024",
    outcome:"Self-employed",
    type:"Freelance",
    position:"Web Developer",
    location:"Naga City"
  },

  {
    name:"Rafael Cruz",
    program:"BSIS",
    batch:"2020-2024",
    outcome:"Employed",
    type:"Full-time",
    position:"Business Analyst",
    location:"Pasig City"
  },

  {
    name:"Isabella Flores",
    program:"BSDA",
    batch:"2020-2024",
    outcome:"Employed",
    type:"Full-time",
    position:"UI Designer",
    location:"Makati City"
  },

  {
    name:"Miguel Torres",
    program:"BSCS",
    batch:"2020-2024",
    outcome:"Employed",
    type:"Full-time",
    position:"Software Engineer",
    location:"Pasig City"
  },

  {
    name:"Andrea Villanueva",
    program:"BSIT",
    batch:"2020-2024",
    outcome:"Employed",
    type:"Full-time",
    position:"QA Engineer",
    location:"Taguig City"
  },

  {
    name:"Paolo Ramos",
    program:"BSIS",
    batch:"2020-2024",
    outcome:"Employed",
    type:"Full-time",
    position:"Systems Analyst",
    location:"Naga City"
  },


  // 2019-2023

  {
    name:"Angela Ramos",
    program:"BSIT",
    batch:"2019-2023",
    outcome:"Employed",
    type:"Full-time",
    position:"Frontend Developer",
    location:"Makati City"
  },

  {
    name:"Mark Villanueva",
    program:"BSCS",
    batch:"2019-2023",
    outcome:"Employed",
    type:"Full-time",
    position:"Software Engineer",
    location:"Taguig City"
  },

  {
    name:"Nicole Flores",
    program:"BSIS",
    batch:"2019-2023",
    outcome:"Self-employed",
    type:"Freelance",
    position:"IT Consultant",
    location:"Naga City"
  },

  {
    name:"Paolo Mendoza",
    program:"BSDA",
    batch:"2019-2023",
    outcome:"Employed",
    type:"Full-time",
    position:"Graphic Designer",
    location:"Quezon City"
  },

  {
    name:"John Mercado",
    program:"BSIT",
    batch:"2019-2023",
    outcome:"Unemployed",
    type:"—",
    position:"—",
    location:"—"
  },

  {
    name:"Carla Torres",
    program:"BSCS",
    batch:"2019-2023",
    outcome:"Further Studies",
    type:"—",
    position:"Graduate Student",
    location:"Manila"
  },

  {
    name:"Joshua Lim",
    program:"BSIS",
    batch:"2019-2023",
    outcome:"Employed",
    type:"Full-time",
    position:"IT Specialist",
    location:"Naga City"
  },

  {
    name:"Bianca Reyes",
    program:"BSDA",
    batch:"2019-2023",
    outcome:"Self-employed",
    type:"Freelance",
    position:"Multimedia Designer",
    location:"Cavite City"
  },


  // 2018-2022

  {
    name:"Kevin Bautista",
    program:"BSIT",
    batch:"2018-2022",
    outcome:"Employed",
    type:"Full-time",
    position:"Network Administrator",
    location:"Naga City"
  },

  {
    name:"Anne Castillo",
    program:"BSCS",
    batch:"2018-2022",
    outcome:"Employed",
    type:"Full-time",
    position:"Backend Developer",
    location:"Makati City"
  },

  {
    name:"Luis Navarro",
    program:"BSIS",
    batch:"2018-2022",
    outcome:"Unemployed",
    type:"—",
    position:"—",
    location:"—"
  },

  {
    name:"Grace Molina",
    program:"BSDA",
    batch:"2018-2022",
    outcome:"Self-employed",
    type:"Freelance",
    position:"Illustrator",
    location:"Naga City"
  },

  {
    name:"Marco Santos",
    program:"BSIT",
    batch:"2018-2022",
    outcome:"Employed",
    type:"Full-time",
    position:"Technical Support Engineer",
    location:"Manila"
  },

  {
    name:"Ella Cruz",
    program:"BSCS",
    batch:"2018-2022",
    outcome:"Further Studies",
    type:"—",
    position:"Graduate Student",
    location:"Naga City"
  }
];


// ================= STATE =================

let employmentChart;
let trendChart;

let currentPage=1;

const rowsPerPage=10;


// ================= HELPERS =================

function selectedPrograms(){

  return $("programFilter").value==="all"
    ? programs
    : [$("programFilter").value];
}


function selectedBatches(){

  return $("batchFilter").value==="all"
    ? batches
    : [$("batchFilter").value];
}


function sumData(selectedPrograms,selectedBatches){

  const result={
    total:0,
    traced:0,
    employed:0,
    self:0,
    unemployed:0,
    studies:0
  };

  selectedPrograms.forEach(program=>{

    selectedBatches.forEach(batch=>{

      const data=stats[program][batch];

      result.total+=data.total;
      result.traced+=data.traced;
      result.employed+=data.employed;
      result.self+=data.self;
      result.unemployed+=data.unemployed;
      result.studies+=data.studies;

    });

  });

  return result;
}


function pct(value,total){

  return total
    ? ((value/total)*100).toFixed(1)
    : "0.0";
}


// ================= KPI =================

function updateKPIs(){

  const data=sumData(
    selectedPrograms(),
    selectedBatches()
  );

  $("totalTraced").textContent=
    data.traced.toLocaleString();

  $("totalTracedSub").textContent=
    `of ${data.total.toLocaleString()} graduates (${pct(data.traced,data.total)}%)`;


  $("employmentRate").textContent=
    pct(data.employed,data.traced)+"%";

  $("employmentSub").textContent=
    `${data.employed.toLocaleString()} employed`;


  $("unemploymentRate").textContent=
    pct(data.unemployed,data.traced)+"%";

  $("unemploymentSub").textContent=
    `${data.unemployed.toLocaleString()} unemployed`;


  $("studiesRate").textContent=
    pct(data.studies,data.traced)+"%";

  $("studiesSub").textContent=
    `${data.studies.toLocaleString()} pursuing further studies`;
}


// ================= STATUS CHART =================

function updateStatusChart(){

  const program=$("programFilter").value;
  const selectedBatch=$("batchFilter").value;

  const batch=
    selectedBatch==="all"
      ? "2020-2024"
      : selectedBatch;


  const data=sumData(
    selectedPrograms(),
    [batch]
  );


  $("statusChartTitle").textContent=
    selectedBatch==="all"
      ? "Recent Batch Employment Status"
      : "Employment Status";


  $("statusChartSub").textContent=
    `${program==="all"?"All Programs":program} · ${batch}`;


  if(employmentChart)
    employmentChart.destroy();


  employmentChart=new Chart(
    $("employmentChart"),
    {

      type:"bar",

      data:{

        labels:[
          "Employed",
          "Self-Employed",
          "Unemployed",
          "Further Studies"
        ],

        datasets:[{

          data:[
            data.employed,
            data.self,
            data.unemployed,
            data.studies
          ],

          backgroundColor:"#3b82f6",

          borderRadius:5,

          barPercentage:.55,

          categoryPercentage:.7
        }]
      },


      options:{

        responsive:true,

        maintainAspectRatio:false,


        plugins:{

          legend:{
            display:false
          },

          tooltip:{

            callbacks:{

              label:context=>
                context.raw+" graduates"

            }
          }
        },


        scales:{

          x:{

            grid:{
              display:false
            },

            ticks:{

              font:{
                size:11
              }

            }
          },


          y:{

            beginAtZero:true,

            ticks:{

              precision:0,

              font:{
                size:11
              }

            },

            grid:{
              color:"#eef0f3"
            }
          }
        }
      }
    }
  );
}


// ================= TREND CHART =================

function updateTrendChart(){

  const program=$("programFilter").value;

  const selectedBatch=$("batchFilter").value;

  let labels=[];

  let rates=[];


  // ALL BATCHES
  if(selectedBatch==="all"){

    labels=[
      "2018-2022",
      "2019-2023",
      "2020-2024"
    ];


    rates=labels.map(batch=>{

      const data=sumData(
        selectedPrograms(),
        [batch]
      );

      return Number(
        pct(
          data.employed,
          data.traced
        )
      );

    });


    $("trendSub").textContent=
      `${program==="all"?"All Programs":program} employment trend across tracer batches`;

  }


  // SPECIFIC BATCH
  else{

    const endYear=
      Number(
        selectedBatch.split("-")[1]
      );


    labels=[
      String(endYear-3),
      String(endYear-2),
      String(endYear-1),
      String(endYear)
    ];


    const selected=
      program==="all"
        ? programs
        : [program];


    rates=labels.map((year,index)=>{

      const values=selected.map(program=>
        yearlyTrend[program][selectedBatch][index]
      );


      const average=
        values.reduce(
          (total,value)=>total+value,
          0
        ) / values.length;


      return Number(
        average.toFixed(1)
      );

    });


    $("trendSub").textContent=
      `${program==="all"?"All Programs":program} · ${selectedBatch} yearly employment trend`;

  }


  if(trendChart)
    trendChart.destroy();


  trendChart=new Chart(
    $("trendChart"),
    {

      type:"line",


      data:{

        labels:labels,


        datasets:[{

          label:"Employment Rate",

          data:rates,

          borderColor:"#2563eb",

          backgroundColor:"rgba(37,99,235,.08)",

          borderWidth:2.5,

          pointRadius:4,

          pointHoverRadius:5,

          pointBackgroundColor:"#ffffff",

          pointBorderColor:"#2563eb",

          pointBorderWidth:2,

          fill:true,

          tension:.3
        }]
      },


      options:{

        responsive:true,

        maintainAspectRatio:false,


        plugins:{

          legend:{
            display:false
          },


          tooltip:{

            callbacks:{

              label:context=>
                `Employment Rate: ${context.raw}%`

            }
          }
        },


        scales:{

          x:{

            grid:{
              display:false
            },

            ticks:{

              font:{
                size:11
              }

            }
          },


          y:{

            min:60,

            max:100,

            ticks:{

              stepSize:5,

              callback:value=>
                value+"%",

              font:{
                size:11
              }

            },

            grid:{
              color:"#eef0f3"
            }
          }
        }
      }
    }
  );
}


// ================= BADGE =================

function badge(outcome){

  const styles={

    "Employed":
      "bg-emerald-50 text-emerald-600 border-emerald-200",

    "Self-employed":
      "bg-amber-50 text-amber-600 border-amber-200",

    "Unemployed":
      "bg-red-50 text-red-500 border-red-200",

    "Further Studies":
      "bg-blue-50 text-blue-600 border-blue-200"

  };


  return `
    <span class="inline-flex px-2.5 py-1 rounded-full border text-[10px] font-medium ${styles[outcome]}">
      ${outcome}
    </span>
  `;
}


// ================= TABLE =================

function updateTable(){

  const program=$("programFilter").value;

  const batch=$("batchFilter").value;

  const search=$("graduateSearch")
    .value
    .toLowerCase()
    .trim();


  const records=graduates.filter(graduate=>{

    const programMatch=
      program==="all" ||
      graduate.program===program;


    const batchMatch=
      batch==="all" ||
      graduate.batch===batch;


    const text=`
      ${graduate.name}
      ${graduate.program}
      ${graduate.batch}
      ${graduate.outcome}
      ${graduate.type}
      ${graduate.position}
      ${graduate.location}
    `.toLowerCase();


    const searchMatch=
      text.includes(search);


    return (
      programMatch &&
      batchMatch &&
      searchMatch
    );

  });


  const totalPages=
    Math.max(
      1,
      Math.ceil(
        records.length /
        rowsPerPage
      )
    );


  if(currentPage>totalPages)
    currentPage=totalPages;


  const start=
    (currentPage-1) *
    rowsPerPage;


  const end=
    start +
    rowsPerPage;


  const pageRecords=
    records.slice(
      start,
      end
    );


  if(!pageRecords.length){

    $("graduateTable").innerHTML=`
      <tr>
        <td colspan="7"
          class="px-5 py-10 text-center text-gray-400">
          No graduate records found.
        </td>
      </tr>
    `;

  }


  else{

    $("graduateTable").innerHTML=
      pageRecords.map(graduate=>`

        <tr class="hover:bg-gray-50">

          <td class="px-5 py-4 font-semibold text-gray-900">
            ${graduate.name}
          </td>

          <td class="px-4 py-4">
            ${graduate.program}
          </td>

          <td class="px-4 py-4">
            ${graduate.batch}
          </td>

          <td class="px-4 py-4">
            ${badge(graduate.outcome)}
          </td>

          <td class="px-4 py-4 text-gray-600">
            ${graduate.type}
          </td>

          <td class="px-4 py-4 text-gray-700">
            ${graduate.position}
          </td>

          <td class="px-4 py-4 text-gray-500">
            ${graduate.location}
          </td>

        </tr>

      `).join("");

  }


  const shownStart=
    records.length
      ? start+1
      : 0;


  const shownEnd=
    Math.min(
      end,
      records.length
    );


  $("recordCount").textContent=
    `Showing ${shownStart}–${shownEnd} of ${records.length} graduates`;


  $("pageInfo").textContent=
    `Page ${currentPage} of ${totalPages}`;


  $("prevPage").disabled=
    currentPage===1;


  $("nextPage").disabled=
    currentPage===totalPages ||
    records.length===0;
}


// ================= DASHBOARD =================

function updateDashboard(){

  updateKPIs();

  updateStatusChart();

  updateTrendChart();

  updateTable();
}


// ================= START =================

document.addEventListener(
  "DOMContentLoaded",
  ()=>{

    // PROGRAM FILTER

    $("programFilter")?.addEventListener(
      "change",
      ()=>{

        currentPage=1;

        updateDashboard();

      }
    );


    // BATCH FILTER

    $("batchFilter")?.addEventListener(
      "change",
      ()=>{

        currentPage=1;

        updateDashboard();

      }
    );


    // SEARCH

    $("graduateSearch")?.addEventListener(
      "input",
      ()=>{

        currentPage=1;

        updateTable();

      }
    );


    // PREVIOUS PAGE

    $("prevPage")?.addEventListener(
      "click",
      ()=>{

        if(currentPage>1){

          currentPage--;

          updateTable();

        }

      }
    );


    // NEXT PAGE

    $("nextPage")?.addEventListener(
      "click",
      ()=>{

        currentPage++;

        updateTable();

      }
    );


    // MARK NOTIFICATIONS READ

    $("markAllReadBtn")?.addEventListener(
      "click",
      event=>{

        event.stopPropagation();

        document
          .querySelectorAll(".notif-dot")
          .forEach(dot=>dot.remove());


        const badge=$("notifBadge");

        if(badge)
          badge.classList.add("hidden");

      }
    );


    // LOAD DASHBOARD

    updateDashboard();

  }
);