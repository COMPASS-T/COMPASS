// PAGE UI — sidebar, notifications, profile dropdown (self-contained)
function toggleSidebar(){const s=document.getElementById('sidebar'),o=document.getElementById('sidebarOverlay');if(!s)return;s.classList.toggle('-translate-x-full');o?.classList.toggle('hidden')}
function closeSidebar(){document.getElementById('sidebar')?.classList.add('-translate-x-full');document.getElementById('sidebarOverlay')?.classList.add('hidden')}
function toggleDropdown(id,event){event?.stopPropagation?.();const n=document.getElementById('notifDropdown'),u=document.getElementById('userDropdown'),d=document.getElementById(id);if(!d)return;const wasHidden=d.classList.contains('hidden');n?.classList.add('hidden');u?.classList.add('hidden');if(wasHidden)d.classList.remove('hidden')}
document.addEventListener('click',e=>{const n=document.getElementById('notifDropdown'),u=document.getElementById('userDropdown');if(n&&!n.contains(e.target)&&!e.target.closest('[onclick*="notifDropdown"]'))n.classList.add('hidden');if(u&&!u.contains(e.target)&&!e.target.closest('[onclick*="userDropdown"]'))u.classList.add('hidden')});
document.addEventListener('DOMContentLoaded',()=>{document.getElementById('markAllReadBtn')?.addEventListener('click',e=>{e.stopPropagation();document.querySelectorAll('.notif-dot').forEach(x=>x.remove())})});
window.addEventListener('resize',()=>{if(innerWidth>=1024){document.getElementById('sidebar')?.classList.remove('-translate-x-full');document.getElementById('sidebarOverlay')?.classList.add('hidden')}});

// ===============================
// SIDEBAR / DROPDOWNS
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
  const n=document.getElementById('notifDropdown');
  const u=document.getElementById('userDropdown');

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

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('markAllReadBtn')?.addEventListener('click',e=>{
    e.stopPropagation();
    document.querySelectorAll('.notif-dot').forEach(x=>x.remove());
  });

  document.getElementById('previewModal')?.addEventListener('click',e=>{
    if(e.target.id==='previewModal')closePreview();
  });
});


// ===============================
// REPORT DATA
// ===============================
const reportData={
  'Graduate Outcomes Report':{
    description:'Employment status, trends, and graduate career analysis',
    metrics:[
      ['Employment Rate','88%'],
      ['Employed Graduates','264'],
      ['Unemployed Graduates','36'],
      ['Total Respondents','300']
    ],
    findings:[
      '88% of BSIT alumni respondents are currently employed.',
      'Most employed graduates entered technology-related positions.',
      'Graduate employment remained stable across the selected batch.'
    ]
  },

  'Job-Program Alignment Report':{
    description:'Alignment analysis of graduate jobs with the selected program',
    metrics:[
      ['Aligned','72%'],
      ['Partially Aligned','20%'],
      ['Not Aligned','8%'],
      ['Alignment Score','82%']
    ],
    findings:[
      '72% of graduate jobs are directly aligned with the BSIT program.',
      '20% are partially aligned with their academic preparation.',
      '8% reported employment outside their field of study.'
    ]
  },

  'Curriculum Relevance Report':{
    description:'Alumni ratings on curriculum usefulness and identified gaps',
    metrics:[
      ['Very Relevant','52%'],
      ['Relevant','34%'],
      ['Moderately Relevant','10%'],
      ['Average Rating','4.4 / 5']
    ],
    findings:[
      'Most alumni consider the BSIT curriculum relevant to their work.',
      'Technical and application-development subjects received strong ratings.',
      'Alumni feedback identifies opportunities for additional industry-focused content.'
    ]
  },

  'Competency Utilization Report':{
    description:'Competency utilization scores, gaps, and employer expectations',
    metrics:[
      ['Technical Skills','4.6 / 5'],
      ['Problem Solving','4.4 / 5'],
      ['Database Skills','4.2 / 5'],
      ['Overall Competency','4.1 / 5']
    ],
    findings:[
      'Technical skills have the highest workplace utilization.',
      'Problem-solving competency is frequently applied by graduates.',
      'Competency results can support curriculum enhancement decisions.'
    ]
  },

  'Program Outcomes Report':{
    description:'Program outcome achievement evidence and assessment',
    metrics:[
      ['Employment','88%'],
      ['Alignment','82%'],
      ['Relevance','4.4 / 5'],
      ['Competency','4.1 / 5']
    ],
    findings:[
      'Graduate outcomes indicate strong employment performance.',
      'Job-program alignment remains a major program strength.',
      'Curriculum relevance and competency utilization support program outcome assessment.'
    ]
  },

  'Program Performance Report':{
    description:'Comprehensive program performance summary',
    metrics:[
      ['Employment','88%'],
      ['Job Alignment','82%'],
      ['Curriculum Relevance','4.4 / 5'],
      ['Competency','4.1 / 5']
    ],
    findings:[
      'The report consolidates major BSIT tracer-study indicators.',
      'Employment and alignment provide evidence of graduate outcomes.',
      'Curriculum and competency results provide evidence for academic review.'
    ]
  }
};


// ===============================
// CURRENT FILTERS
// ===============================
function filters(){
  return{
    program:document.getElementById('programFilter')?.value||'BSIT',
    batch:document.getElementById('batchFilter')?.value||'2020-2024',
    year:document.getElementById('yearFilter')?.value||'2024-2025'
  };
}


// ===============================
// PREVIEW REPORT
// ===============================
function previewReport(name){
  const d=reportData[name];
  if(!d)return;

  const f=filters();

  document.getElementById('previewTitle').textContent=name;

  document.getElementById('previewContent').innerHTML=`
    <div class="border-b border-gray-200 pb-4 mb-5">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-[10px] uppercase tracking-wider font-semibold text-blue-600">
            COMPASS Department Report
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-1">${name}</h3>
          <p class="text-[12px] text-gray-500 mt-1">${d.description}</p>
        </div>

        <div class="text-right text-[11px] text-gray-500 shrink-0">
          <p>${f.program}</p>
          <p>${f.batch}</p>
          <p>AY ${f.year}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      ${d.metrics.map(x=>`
        <div class="border border-gray-200 rounded-lg p-3">
          <p class="text-[10px] text-gray-500">${x[0]}</p>
          <p class="text-lg font-bold text-gray-900 mt-1">${x[1]}</p>
        </div>
      `).join('')}
    </div>

    <div class="mb-6">
      <h4 class="text-[12px] font-bold text-gray-900 uppercase tracking-wide mb-3">
        Report Summary
      </h4>

      <p class="text-[12px] leading-6 text-gray-600">
        This report presents ${name.toLowerCase()} data for
        <strong>${f.program}</strong>, batch <strong>${f.batch}</strong>,
        Academic Year <strong>${f.year}</strong>.
      </p>
    </div>

    <div>
      <h4 class="text-[12px] font-bold text-gray-900 uppercase tracking-wide mb-3">
        Key Findings
      </h4>

      <div class="space-y-2">
        ${d.findings.map((x,i)=>`
          <div class="flex gap-3 border border-gray-200 rounded-lg p-3">
            <div class="w-6 h-6 bg-blue-50 text-blue-600 rounded-full
                        flex items-center justify-center text-[10px]
                        font-bold shrink-0">
              ${i+1}
            </div>

            <p class="text-[12px] text-gray-700 leading-5">${x}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-gray-200 text-[10px] text-gray-400">
      Generated through COMPASS Outcomes Intelligence
    </div>
  `;

  const modal=document.getElementById('previewModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}


// ===============================
// CLOSE PREVIEW
// ===============================
function closePreview(){
  const modal=document.getElementById('previewModal');
  if(!modal)return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');
}


// ===============================
// GENERATE REPORT
// ===============================
function generateReport(name){
  const btn=event?.currentTarget;

  if(btn){
    btn.disabled=true;
    btn.textContent='Generating...';
    btn.classList.add('opacity-60');
  }

  setTimeout(()=>{
    const card=btn?.closest('.bg-white');

    if(card){
      const status=card.querySelector('span');

      if(status){
        status.textContent='Generated';
        status.className=
          'px-2 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-[10px] font-semibold';
      }

      const date=card.querySelector('.text-gray-400');
      if(date){
        date.textContent=new Date().toLocaleDateString('en-US',{
          month:'short',
          day:'numeric',
          year:'numeric'
        });
      }

      const actions=card.querySelector('.flex.gap-2.mt-auto');

      if(actions){
        actions.innerHTML=`
          <button
            class="px-3 py-2 rounded-lg bg-gray-100 text-[11px] font-medium hover:bg-gray-200"
            onclick="previewReport('${name}')">
            Preview
          </button>

          <button
            class="px-3 py-2 rounded-lg bg-gray-100 text-[11px] font-medium hover:bg-gray-200"
            onclick="exportReport('${name}')">
            Export
          </button>
        `;
      }
    }

    addRecentReport(name);
    previewReport(name);

  },700);
}


// ===============================
// ADD TO RECENT REPORTS
// ===============================
function addRecentReport(name){
  const body=document.getElementById('recentReportsBody');
  if(!body)return;

  const f=filters();

  const date=new Date().toLocaleDateString('en-US',{
    month:'short',
    day:'numeric',
    year:'numeric'
  });

  const old=[...body.querySelectorAll('tr')].find(
    r=>r.children[0]?.textContent.trim()===name
  );

  if(old)old.remove();

  const tr=document.createElement('tr');
  tr.className='border-b border-gray-100 hover:bg-gray-50';

  tr.innerHTML=`
    <td class="px-5 py-4 font-medium text-gray-900">${name}</td>
    <td class="px-4 py-4 text-gray-600">${f.program}</td>
    <td class="px-4 py-4 text-gray-600">${f.batch}</td>
    <td class="px-4 py-4 text-gray-600">${date}</td>

    <td class="px-4 py-4">
      <span class="px-2 py-1 rounded-full bg-green-50 border border-green-200
                   text-green-700 text-[10px] font-semibold">
        Generated
      </span>
    </td>

    <td class="px-4 py-4">
      <div class="flex gap-4">
        <button
          class="text-blue-600 font-medium hover:underline"
          onclick="previewReport('${name}')">
          Preview
        </button>

        <button
          class="text-blue-600 font-medium hover:underline"
          onclick="downloadReport('${name}')">
          Download
        </button>
      </div>
    </td>
  `;

  body.prepend(tr);
}


// ===============================
// REPORT EXPORT BUTTON
// ===============================
function exportReport(name){
  downloadReport(name);
}


// ===============================
// DOWNLOAD INDIVIDUAL REPORT PDF
// ===============================
function downloadReport(name){
  const d=reportData[name];
  if(!d)return;

  const f=filters();
  const {jsPDF}=window.jspdf;
  const pdf=new jsPDF();

  pdf.setFontSize(18);
  pdf.text(name,14,20);

  pdf.setFontSize(10);
  pdf.text(`Program: ${f.program}`,14,30);
  pdf.text(`Batch: ${f.batch}`,14,36);
  pdf.text(`Academic Year: ${f.year}`,14,42);

  pdf.setFontSize(11);
  pdf.text(d.description,14,52);

  pdf.autoTable({
    startY:60,
    head:[['Indicator','Result']],
    body:d.metrics
  });

  let y=pdf.lastAutoTable.finalY+12;

  pdf.setFontSize(12);
  pdf.text('Key Findings',14,y);

  y+=8;

  pdf.setFontSize(10);

  d.findings.forEach((x,i)=>{
    const lines=pdf.splitTextToSize(`${i+1}. ${x}`,175);
    pdf.text(lines,14,y);
    y+=lines.length*6+2;
  });

  pdf.save(`${safeName(name)}.pdf`);
}


// ===============================
// CSV EXPORT
// ===============================
function exportCSV(){
  const f=filters();

  const rows=[
    ['COMPASS Department Reports'],
    ['Program',f.program],
    ['Batch',f.batch],
    ['Academic Year',f.year],
    [],
    ['Report','Indicator','Result']
  ];

  Object.entries(reportData).forEach(([name,d])=>{
    d.metrics.forEach(m=>rows.push([name,m[0],m[1]]));
  });

  const csv=rows.map(row=>
    row.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')
  ).join('\n');

  downloadBlob(
    new Blob([csv],{type:'text/csv;charset=utf-8;'}),
    `COMPASS-${f.program}-Reports.csv`
  );
}


// ===============================
// EXCEL EXPORT
// ===============================
function exportExcel(){
  const f=filters();

  const rows=[
    ['Report','Indicator','Result']
  ];

  Object.entries(reportData).forEach(([name,d])=>{
    d.metrics.forEach(m=>rows.push([name,m[0],m[1]]));
  });

  const ws=XLSX.utils.aoa_to_sheet(rows);
  const wb=XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(wb,ws,'Reports');

  XLSX.writeFile(
    wb,
    `COMPASS-${f.program}-${f.batch}.xlsx`
  );
}


// ===============================
// GENERAL PDF EXPORT
// ===============================
function exportPDF(){
  const f=filters();
  const {jsPDF}=window.jspdf;
  const pdf=new jsPDF();

  pdf.setFontSize(18);
  pdf.text('COMPASS Department Reports',14,20);

  pdf.setFontSize(10);
  pdf.text(`Program: ${f.program}`,14,30);
  pdf.text(`Batch: ${f.batch}`,14,36);
  pdf.text(`Academic Year: ${f.year}`,14,42);

  const rows=[];

  Object.entries(reportData).forEach(([name,d])=>{
    d.metrics.forEach(m=>{
      rows.push([name,m[0],m[1]]);
    });
  });

  pdf.autoTable({
    startY:52,
    head:[['Report','Indicator','Result']],
    body:rows,
    styles:{fontSize:8},
    headStyles:{fontStyle:'bold'}
  });

  pdf.save(`COMPASS-${f.program}-Reports.pdf`);
}


// ===============================
// HELPERS
// ===============================
function safeName(text){
  return text
    .replace(/[^\w\s-]/g,'')
    .trim()
    .replace(/\s+/g,'-');
}

function downloadBlob(blob,file){
  const a=document.createElement('a');

  a.href=URL.createObjectURL(blob);
  a.download=file;

  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}