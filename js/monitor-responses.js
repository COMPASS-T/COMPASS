var responses = [
  {
    id: 1, name: "Maria Santos", program: "BS Information Technology", batch: "2022",
    submitted: "Aug 12, 2024", completion: "100%", status: "Complete",
    email: "maria.santos@gmail.com", phone: "+63 917 123 4567",
    sections: [
      { title: "A \u2014 Graduate Profile", questions: [
        { num: 1, type: "Short Text", q: "What is your full name?", a: "Maria Isabel Santos" },
        { num: 2, type: "Multiple Choice", q: "What is your civil status?", a: "Single" },
        { num: 3, type: "Short Text", q: "What is your current address?", a: "Makati City, Metro Manila" },
        { num: 4, type: "Multiple Choice", q: "What is your highest educational attainment after graduating?", a: "Bachelor's Degree" }
      ]},
      { title: "B \u2014 Employment Details", questions: [
        { num: 5, type: "Multiple Choice", q: "Are you currently employed?", a: "Yes, full-time" },
        { num: 6, type: "Short Text", q: "What is the name of your current employer?", a: "Accenture Philippines" },
        { num: 7, type: "Short Text", q: "What is your current job title or position?", a: "Software Engineer" },
        { num: 8, type: "Multiple Choice", q: "What is your current monthly salary range?", a: "\u20B135,001 \u2013 \u20B150,000" }
      ]},
      { title: "C \u2014 Curriculum Relevance", questions: [
        { num: 9, type: "Rating Scale", q: "How relevant is your undergraduate curriculum to your current job?", a: "5 \u2014 Very Relevant" },
        { num: 10, type: "Long Text", q: "What courses or skills from your program are most useful in your work?", a: "Web Development, Database Management, Software Engineering, and OJT practicum were directly applicable to my daily tasks." }
      ]},
      { title: "D \u2014 Competency Assessment", questions: [
        { num: 11, type: "Rating Scale", q: "Rate your competency in problem-solving.", a: "5 \u2014 Excellent" },
        { num: 12, type: "Rating Scale", q: "Rate your competency in communication skills.", a: "4 \u2014 Very Good" },
        { num: 13, type: "Rating Scale", q: "Rate your competency in teamwork and collaboration.", a: "5 \u2014 Excellent" }
      ]}
    ]
  },
  {
    id: 2, name: "Jose Reyes", program: "BS Accountancy", batch: "2021",
    submitted: "Aug 11, 2024", completion: "100%", status: "Complete",
    email: "jose.reyes@yahoo.com", phone: "+63 918 234 5678",
    sections: [
      { title: "A \u2014 Graduate Profile", questions: [
        { num: 1, type: "Short Text", q: "What is your full name?", a: "Jose Miguel Reyes" },
        { num: 2, type: "Multiple Choice", q: "What is your civil status?", a: "Married" },
        { num: 3, type: "Short Text", q: "What is your current address?", a: "Quezon City, Metro Manila" },
        { num: 4, type: "Multiple Choice", q: "What is your highest educational attainment after graduating?", a: "CPA License" }
      ]},
      { title: "B \u2014 Employment Details", questions: [
        { num: 5, type: "Multiple Choice", q: "Are you currently employed?", a: "Yes, full-time" },
        { num: 6, type: "Short Text", q: "What is the name of your current employer?", a: "SGV & Co. (EY Philippines)" },
        { num: 7, type: "Short Text", q: "What is your current job title or position?", a: "Senior Auditor" },
        { num: 8, type: "Multiple Choice", q: "What is your current monthly salary range?", a: "\u20B125,001 \u2013 \u20B135,000" }
      ]},
      { title: "C \u2014 Curriculum Relevance", questions: [
        { num: 9, type: "Rating Scale", q: "How relevant is your undergraduate curriculum to your current job?", a: "5 \u2014 Very Relevant" },
        { num: 10, type: "Long Text", q: "What courses or skills from your program are most useful in your work?", a: "Financial Accounting, Auditing Theory, Taxation, and Business Law were essential for passing the CPA board exam and my audit work." }
      ]},
      { title: "D \u2014 Competency Assessment", questions: [
        { num: 11, type: "Rating Scale", q: "Rate your competency in problem-solving.", a: "4 \u2014 Very Good" },
        { num: 12, type: "Rating Scale", q: "Rate your competency in communication skills.", a: "4 \u2014 Very Good" },
        { num: 13, type: "Rating Scale", q: "Rate your competency in teamwork and collaboration.", a: "4 \u2014 Very Good" }
      ]}
    ]
  },
  {
    id: 3, name: "Ana Lim", program: "BS Computer Science", batch: "2023",
    submitted: "Aug 10, 2024", completion: "75%", status: "Partial",
    email: "ana.lim@gmail.com", phone: "+63 919 345 6789",
    sections: [
      { title: "A \u2014 Graduate Profile", questions: [
        { num: 1, type: "Short Text", q: "What is your full name?", a: "Ana Patricia Lim" },
        { num: 2, type: "Multiple Choice", q: "What is your civil status?", a: "Single" },
        { num: 3, type: "Short Text", q: "What is your current address?", a: "Cebu City, Cebu" },
        { num: 4, type: "Multiple Choice", q: "What is your highest educational attainment after graduating?", a: "Bachelor's Degree" }
      ]},
      { title: "B \u2014 Employment Details", questions: [
        { num: 5, type: "Multiple Choice", q: "Are you currently employed?", a: "Yes, full-time" },
        { num: 6, type: "Short Text", q: "What is the name of your current employer?", a: "Globe Telecom" },
        { num: 7, type: "Short Text", q: "What is your current job title or position?", a: "Data Analyst" },
        { num: 8, type: "Multiple Choice", q: "What is your current monthly salary range?", a: "\u20B125,001 \u2013 \u20B135,000" }
      ]},
      { title: "C \u2014 Curriculum Relevance", questions: [
        { num: 9, type: "Rating Scale", q: "How relevant is your undergraduate curriculum to your current job?", a: "4 \u2014 Relevant" },
        { num: 10, type: "Long Text", q: "What courses or skills from your program are most useful in your work?", a: null }
      ]},
      { title: "D \u2014 Competency Assessment", questions: [
        { num: 11, type: "Rating Scale", q: "Rate your competency in problem-solving.", a: null },
        { num: 12, type: "Rating Scale", q: "Rate your competency in communication skills.", a: null },
        { num: 13, type: "Rating Scale", q: "Rate your competency in teamwork and collaboration.", a: null }
      ]}
    ]
  },
  {
    id: 4, name: "Carlos Garcia", program: "BS Business Administration", batch: "2022",
    submitted: "Aug 9, 2024", completion: "100%", status: "Complete",
    email: "carlos.garcia@outlook.com", phone: "+63 920 456 7890",
    sections: [
      { title: "A \u2014 Graduate Profile", questions: [
        { num: 1, type: "Short Text", q: "What is your full name?", a: "Carlos Antonio Garcia" },
        { num: 2, type: "Multiple Choice", q: "What is your civil status?", a: "Single" },
        { num: 3, type: "Short Text", q: "What is your current address?", a: "Taguig City, Metro Manila" },
        { num: 4, type: "Multiple Choice", q: "What is your highest educational attainment after graduating?", a: "Master's Degree (in progress)" }
      ]},
      { title: "B \u2014 Employment Details", questions: [
        { num: 5, type: "Multiple Choice", q: "Are you currently employed?", a: "Yes, full-time" },
        { num: 6, type: "Short Text", q: "What is the name of your current employer?", a: "PLDT Enterprise" },
        { num: 7, type: "Short Text", q: "What is your current job title or position?", a: "Marketing Associate" },
        { num: 8, type: "Multiple Choice", q: "What is your current monthly salary range?", a: "\u20B120,001 \u2013 \u20B125,000" }
      ]},
      { title: "C \u2014 Curriculum Relevance", questions: [
        { num: 9, type: "Rating Scale", q: "How relevant is your undergraduate curriculum to your current job?", a: "4 \u2014 Relevant" },
        { num: 10, type: "Long Text", q: "What courses or skills from your program are most useful in your work?", a: "Marketing Management, Business Communication, and Strategic Management were directly applicable." }
      ]},
      { title: "D \u2014 Competency Assessment", questions: [
        { num: 11, type: "Rating Scale", q: "Rate your competency in problem-solving.", a: "4 \u2014 Very Good" },
        { num: 12, type: "Rating Scale", q: "Rate your competency in communication skills.", a: "5 \u2014 Excellent" },
        { num: 13, type: "Rating Scale", q: "Rate your competency in teamwork and collaboration.", a: "4 \u2014 Very Good" }
      ]}
    ]
  },
  {
    id: 5, name: "Patricia Mendoza", program: "BS Information Technology", batch: "2023",
    submitted: "Aug 8, 2024", completion: "100%", status: "Complete",
    email: "pat.mendoza@gmail.com", phone: "+63 921 567 8901",
    sections: [
      { title: "A \u2014 Graduate Profile", questions: [
        { num: 1, type: "Short Text", q: "What is your full name?", a: "Patricia Anne Mendoza" },
        { num: 2, type: "Multiple Choice", q: "What is your civil status?", a: "Single" },
        { num: 3, type: "Short Text", q: "What is your current address?", a: "Pasig City, Metro Manila" },
        { num: 4, type: "Multiple Choice", q: "What is your highest educational attainment after graduating?", a: "Bachelor's Degree" }
      ]},
      { title: "B \u2014 Employment Details", questions: [
        { num: 5, type: "Multiple Choice", q: "Are you currently employed?", a: "Yes, full-time" },
        { num: 6, type: "Short Text", q: "What is the name of your current employer?", a: "Concentrix" },
        { num: 7, type: "Short Text", q: "What is your current job title or position?", a: "IT Support Specialist" },
        { num: 8, type: "Multiple Choice", q: "What is your current monthly salary range?", a: "\u20B120,001 \u2013 \u20B125,000" }
      ]},
      { title: "C \u2014 Curriculum Relevance", questions: [
        { num: 9, type: "Rating Scale", q: "How relevant is your undergraduate curriculum to your current job?", a: "3 \u2014 Moderately Relevant" },
        { num: 10, type: "Long Text", q: "What courses or skills from your program are most useful in your work?", a: "Networking, System Administration, and Technical Support courses prepared me well." }
      ]},
      { title: "D \u2014 Competency Assessment", questions: [
        { num: 11, type: "Rating Scale", q: "Rate your competency in problem-solving.", a: "4 \u2014 Very Good" },
        { num: 12, type: "Rating Scale", q: "Rate your competency in communication skills.", a: "3 \u2014 Good" },
        { num: 13, type: "Rating Scale", q: "Rate your competency in teamwork and collaboration.", a: "4 \u2014 Very Good" }
      ]}
    ]
  },
  {
    id: 6, name: "Rafael Cruz", program: "BS Education", batch: "2021",
    submitted: "Aug 7, 2024", completion: "50%", status: "Partial",
    email: "rafael.cruz@yahoo.com", phone: "+63 922 678 9012",
    sections: [
      { title: "A \u2014 Graduate Profile", questions: [
        { num: 1, type: "Short Text", q: "What is your full name?", a: "Rafael James Cruz" },
        { num: 2, type: "Multiple Choice", q: "What is your civil status?", a: "Single" },
        { num: 3, type: "Short Text", q: "What is your current address?", a: "Davao City, Davao del Sur" },
        { num: 4, type: "Multiple Choice", q: "What is your highest educational attainment after graduating?", a: "LET Passer" }
      ]},
      { title: "B \u2014 Employment Details", questions: [
        { num: 5, type: "Multiple Choice", q: "Are you currently employed?", a: "Yes, full-time" },
        { num: 6, type: "Short Text", q: "What is the name of your current employer?", a: "DepEd Davao Region" },
        { num: 7, type: "Short Text", q: "What is your current job title or position?", a: null },
        { num: 8, type: "Multiple Choice", q: "What is your current monthly salary range?", a: null }
      ]},
      { title: "C \u2014 Curriculum Relevance", questions: [
        { num: 9, type: "Rating Scale", q: "How relevant is your undergraduate curriculum to your current job?", a: null },
        { num: 10, type: "Long Text", q: "What courses or skills from your program are most useful in your work?", a: null }
      ]},
      { title: "D \u2014 Competency Assessment", questions: [
        { num: 11, type: "Rating Scale", q: "Rate your competency in problem-solving.", a: null },
        { num: 12, type: "Rating Scale", q: "Rate your competency in communication skills.", a: null },
        { num: 13, type: "Rating Scale", q: "Rate your competency in teamwork and collaboration.", a: null }
      ]}
    ]
  },
  {
    id: 7, name: "Isabella Torres", program: "BS Computer Science", batch: "2022",
    submitted: "Aug 6, 2024", completion: "100%", status: "Complete",
    email: "bella.torres@gmail.com", phone: "+63 923 789 0123",
    sections: [
      { title: "A \u2014 Graduate Profile", questions: [
        { num: 1, type: "Short Text", q: "What is your full name?", a: "Isabella Marie Torres" },
        { num: 2, type: "Multiple Choice", q: "What is your civil status?", a: "Single" },
        { num: 3, type: "Short Text", q: "What is your current address?", a: "Mandaluyong City, Metro Manila" },
        { num: 4, type: "Multiple Choice", q: "What is your highest educational attainment after graduating?", a: "Bachelor's Degree" }
      ]},
      { title: "B \u2014 Employment Details", questions: [
        { num: 5, type: "Multiple Choice", q: "Are you currently employed?", a: "Yes, full-time" },
        { num: 6, type: "Short Text", q: "What is the name of your current employer?", a: "Maya (PayMaya Philippines)" },
        { num: 7, type: "Short Text", q: "What is your current job title or position?", a: "Backend Developer" },
        { num: 8, type: "Multiple Choice", q: "What is your current monthly salary range?", a: "\u20B135,001 \u2013 \u20B150,000" }
      ]},
      { title: "C \u2014 Curriculum Relevance", questions: [
        { num: 9, type: "Rating Scale", q: "How relevant is your undergraduate curriculum to your current job?", a: "5 \u2014 Very Relevant" },
        { num: 10, type: "Long Text", q: "What courses or skills from your program are most useful in your work?", a: "Data Structures, Algorithms, Operating Systems, and Database Systems were crucial for backend development." }
      ]},
      { title: "D \u2014 Competency Assessment", questions: [
        { num: 11, type: "Rating Scale", q: "Rate your competency in problem-solving.", a: "5 \u2014 Excellent" },
        { num: 12, type: "Rating Scale", q: "Rate your competency in communication skills.", a: "4 \u2014 Very Good" },
        { num: 13, type: "Rating Scale", q: "Rate your competency in teamwork and collaboration.", a: "5 \u2014 Excellent" }
      ]}
    ]
  },
  {
    id: 8, name: "Miguel Aquino", program: "BS Business Administration", batch: "2023",
    submitted: "Aug 5, 2024", completion: "100%", status: "Complete",
    email: "miguel.aquino@outlook.com", phone: "+63 924 890 1234",
    sections: [
      { title: "A \u2014 Graduate Profile", questions: [
        { num: 1, type: "Short Text", q: "What is your full name?", a: "Miguel Antonio Aquino" },
        { num: 2, type: "Multiple Choice", q: "What is your civil status?", a: "Single" },
        { num: 3, type: "Short Text", q: "What is your current address?", a: "San Juan City, Metro Manila" },
        { num: 4, type: "Multiple Choice", q: "What is your highest educational attainment after graduating?", a: "Bachelor's Degree" }
      ]},
      { title: "B \u2014 Employment Details", questions: [
        { num: 5, type: "Multiple Choice", q: "Are you currently employed?", a: "Yes, full-time" },
        { num: 6, type: "Short Text", q: "What is the name of your current employer?", a: "Jollibee Foods Corporation" },
        { num: 7, type: "Short Text", q: "What is your current job title or position?", a: "Operations Trainee" },
        { num: 8, type: "Multiple Choice", q: "What is your current monthly salary range?", a: "\u20B120,001 \u2013 \u20B125,000" }
      ]},
      { title: "C \u2014 Curriculum Relevance", questions: [
        { num: 9, type: "Rating Scale", q: "How relevant is your undergraduate curriculum to your current job?", a: "4 \u2014 Relevant" },
        { num: 10, type: "Long Text", q: "What courses or skills from your program are most useful in your work?", a: "Operations Management, Human Resource Management, and Financial Management helped me understand restaurant operations." }
      ]},
      { title: "D \u2014 Competency Assessment", questions: [
        { num: 11, type: "Rating Scale", q: "Rate your competency in problem-solving.", a: "4 \u2014 Very Good" },
        { num: 12, type: "Rating Scale", q: "Rate your competency in communication skills.", a: "5 \u2014 Excellent" },
        { num: 13, type: "Rating Scale", q: "Rate your competency in teamwork and collaboration.", a: "5 \u2014 Excellent" }
      ]}
    ]
  }
];

function typeBadge(type) {
  var map = { "Multiple Choice": "bg-blue-50 text-blue-600", "Short Text": "bg-gray-100 text-gray-600", "Long Text": "bg-purple-50 text-purple-600", "Rating Scale": "bg-yellow-50 text-yellow-600" };
  return '<span class="px-2 py-0.5 rounded text-[10px] font-semibold ' + (map[type] || "bg-gray-100 text-gray-600") + '">' + type + '</span>';
}

function statusBadge(status) {
  if (status === "Complete") return '<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-green-100 text-green-700">Complete</span>';
  return '<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-yellow-100 text-yellow-700">Partial</span>';
}

function getInitials(fullName) {
  var parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

function renderBarChart() {
  var chart = document.getElementById("barChart");
  if (!chart) return;
  var data = [
    { day: "Jul 17", val: 41 }, { day: "Jul 18", val: 22 }, { day: "Jul 19", val: 35 },
    { day: "Jul 20", val: 28 }, { day: "Jul 21", val: 14 }
  ];
  var max = Math.max.apply(null, data.map(function(d) { return d.val; }));
  var maxHeight = 100;
  var html = '<div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:' + maxHeight + 'px;margin-top:32px">';
  for (var i = 0; i < data.length; i++) {
    var barH = Math.max(Math.round((data[i].val / max) * maxHeight), 8);
    html += '<div style="flex:1;display:flex;flex-direction:column;align-items:center;margin:0 6px">';
    html += '<span style="font-size:11px;font-weight:600;color:#374151;margin-bottom:4px">' + data[i].val + '</span>';
    html += '<div style="width:100%;max-width:48px;height:' + barH + 'px;background:#3b82f6;border-radius:4px 4px 0 0"></div>';
    html += '</div>';
  }
  html += '</div>';
  html += '<div style="display:flex;justify-content:space-between;width:100%;margin-top:8px">';
  for (var j = 0; j < data.length; j++) {
    html += '<div style="flex:1;text-align:center;font-size:10px;color:#9ca3af;margin:0 6px">' + data[j].day + '</div>';
  }
  html += '</div>';
  chart.innerHTML = html;
}

function renderInsights() {
  var el = document.getElementById("insightsList");
  if (!el) return;
  var insights = [
    { label: "Outstanding invites", value: "906 alumni" },
    { label: "Top responding program", value: "BSIT (42%)" },
    { label: "Incomplete drafts", value: "48 sessions" },
  ];
  var html = "";
  for (var i = 0; i < insights.length; i++) {
    var border = i < insights.length - 1 ? " border-b border-gray-100" : "";
    html += '<div class="flex items-center justify-between py-2.5' + border + '">';
    html += '<span class="text-[13px] text-gray-600">' + insights[i].label + '</span>';
    html += '<span class="text-[13px] font-semibold text-gray-900">' + insights[i].value + '</span>';
    html += '</div>';
  }
  el.innerHTML = html;
}

function renderTable() {
  var tbody = document.getElementById("responsesTable");
  if (!tbody) return;
  var html = "";
  for (var i = 0; i < responses.length; i++) {
    var r = responses[i];
    html += '<tr class="border-b border-gray-100 hover:bg-gray-50">';
    html += '<td class="px-5 py-3"><div class="flex items-center gap-3"><div class="w-[32px] h-[32px] bg-blue-600 rounded-full flex items-center justify-center text-white text-[11px] font-semibold shrink-0">' + getInitials(r.name) + '</div><span class="text-[13px] font-semibold text-gray-900">' + r.name + '</span></div></td>';
    html += '<td class="px-5 py-3 text-[13px] text-gray-600">' + r.program + '</td>';
    html += '<td class="px-5 py-3 text-[13px] text-gray-600">' + r.batch + '</td>';
    html += '<td class="px-5 py-3 text-[13px] text-gray-600">' + r.submitted + '</td>';
    html += '<td class="px-5 py-3 text-[13px] text-gray-600">' + r.completion + '</td>';
    html += '<td class="px-5 py-3">' + statusBadge(r.status) + '</td>';
    html += '<td class="px-5 py-3"><button data-action="viewResponse" data-id="' + r.id + '" class="text-[13px] font-semibold text-blue-600 hover:text-blue-800">View</button></td>';
    html += '</tr>';
  }
  tbody.innerHTML = html;
}

function showDetail(id) {
  var r = null;
  for (var i = 0; i < responses.length; i++) { if (responses[i].id === id) { r = responses[i]; break; } }
  if (!r) return;
  document.getElementById("listView").classList.add("hidden");
  document.getElementById("detailView").classList.remove("hidden");
  var initials = getInitials(r.name);
  var html = '';
  html += '<div class="flex items-center gap-2 text-[13px] text-gray-500 mb-4">';
  html += '<button data-action="backToList" class="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>Back</button>';
  html += '<span>\u203A</span><span>Monitor Responses</span><span>\u203A</span><span class="text-gray-900 font-semibold">' + r.name + '</span></div>';
  html += '<div class="bg-white border border-gray-200 rounded-xl p-6 mb-6"><div class="flex items-center gap-4">';
  html += '<div class="w-[48px] h-[48px] bg-blue-600 rounded-full flex items-center justify-center text-white text-[18px] font-bold shrink-0">' + initials + '</div>';
  html += '<div class="flex-1"><h2 class="text-lg font-bold text-gray-900">' + r.name + '</h2><p class="text-[13px] text-gray-500">' + r.email + '</p></div>';
  html += statusBadge(r.status) + '</div>';
  html += '<div class="grid grid-cols-4 gap-4 mt-5 pt-5 border-t border-gray-200">';
  html += '<div><p class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Program</p><p class="text-[13px] font-semibold text-gray-900 mt-1">' + r.program + '</p></div>';
  html += '<div><p class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Batch</p><p class="text-[13px] font-semibold text-gray-900 mt-1">' + r.batch + '</p></div>';
  html += '<div><p class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Submitted</p><p class="text-[13px] font-semibold text-gray-900 mt-1">' + r.submitted + '</p></div>';
  html += '<div><p class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Completion</p><p class="text-[13px] font-semibold text-gray-900 mt-1">' + r.completion + '</p></div>';
  html += '</div></div>';
  for (var s = 0; s < r.sections.length; s++) {
    var sec = r.sections[s];
    html += '<div class="bg-white border border-gray-200 rounded-xl p-6 mb-4">';
    html += '<h3 class="text-[13px] font-bold text-gray-900 uppercase tracking-wide mb-4">' + sec.title + '</h3><div class="space-y-4">';
    for (var q = 0; q < sec.questions.length; q++) {
      var qu = sec.questions[q];
      html += '<div class="border-b border-gray-100 pb-4 last:border-0 last:pb-0">';
      html += '<div class="flex items-center gap-3 mb-1.5"><span class="text-[11px] font-bold text-gray-400">Q' + qu.num + '</span>' + typeBadge(qu.type) + '</div>';
      html += '<p class="text-[13px] font-medium text-gray-800 mb-1.5">' + qu.q + '</p>';
      if (qu.a) {
        html += '<div class="flex items-start gap-2"><svg class="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg><p class="text-[13px] text-gray-700">' + qu.a + '</p></div>';
      } else {
        html += '<p class="text-[13px] text-gray-400 italic">\u2014 (Not answered)</p>';
      }
      html += '</div>';
    }
    html += '</div></div>';
  }
  document.getElementById("detailContent").innerHTML = html;
}

function backToList() {
  document.getElementById("detailView").classList.add("hidden");
  document.getElementById("listView").classList.remove("hidden");
}

var surveyReminders = {
  "Graduate Tracer Survey 2024": {
    desc: "Comprehensive alumni tracer study covering employment, curriculum relevance, and competency assessment.",
    totalSent: "1,248", responded: "342", pending: "906",
    subject: "Reminder: Please Complete Your Graduate Tracer Survey",
    message: "Dear Alumni,\n\nWe noticed you haven\u2019t completed the Graduate Tracer Survey 2024. Your response helps us improve our programs and better support future graduates.\n\nThe survey takes approximately 8\u201310 minutes. Please complete it before the deadline.\n\nThank you,\nAlumni Relations Office"
  },
  "Curriculum Feedback 2024": {
    desc: "Assessment of curriculum effectiveness and alignment with industry requirements for program improvement.",
    totalSent: "856", responded: "214", pending: "642",
    subject: "Reminder: Share Your Curriculum Feedback",
    message: "Dear Alumni,\n\nYour feedback on the curriculum is invaluable for academic program reviews. We noticed you haven\u2019t completed the Curriculum Feedback 2024 survey yet.\n\nIt only takes 5\u20137 minutes. Your insights directly influence course updates.\n\nThank you,\nAlumni Relations Office"
  },
  "Competency Assessment 2024": {
    desc: "Evaluation of graduate competencies and workplace readiness across key skill areas.",
    totalSent: "720", responded: "185", pending: "535",
    subject: "Reminder: Complete Your Competency Assessment",
    message: "Dear Alumni,\n\nPlease take a few minutes to complete the Competency Assessment 2024. This helps us understand how well our programs prepare graduates for the workplace.\n\nEstimated time: 5 minutes.\n\nThank you,\nAlumni Relations Office"
  }
};

function openReminderModal() {
  var select = document.getElementById("surveySelect");
  var surveyName = select.options[select.selectedIndex].text;
  var data = surveyReminders[surveyName];
  if (!data) return;
  document.getElementById("reminderSurveyName").textContent = surveyName;
  document.getElementById("reminderSurveyDesc").textContent = data.desc;
  document.getElementById("reminderTotalSent").textContent = data.totalSent;
  document.getElementById("reminderResponded").textContent = data.responded;
  document.getElementById("reminderPending").textContent = data.pending;
  document.getElementById("reminderSubject").value = data.subject;
  document.getElementById("reminderMessage").value = data.message;
  document.getElementById("reminderTarget").selectedIndex = 0;
  document.getElementById("reminderModal").classList.remove("hidden");
}

function closeReminderModal() { document.getElementById("reminderModal").classList.add("hidden"); }

function sendReminder() {
  var select = document.getElementById("surveySelect");
  var surveyName = select.options[select.selectedIndex].text;
  var target = document.getElementById("reminderTarget");
  var targetText = target.options[target.selectedIndex].text;
  closeReminderModal();
  var toast = document.getElementById("successToast");
  document.getElementById("toastMsg").textContent = "Reminder sent to " + targetText.toLowerCase() + " for " + surveyName + "!";
  toast.classList.remove("hidden");
  setTimeout(function() { toast.classList.add("hidden"); }, 4000);
}

document.addEventListener("click", function(e) {
  var btn = e.target.closest("[data-action]");
  if (!btn) return;
  var action = btn.getAttribute("data-action");
  if (action === "viewResponse") showDetail(parseInt(btn.getAttribute("data-id")));
  else if (action === "backToList") backToList();
  else if (action === "checkReminder") openReminderModal();
  else if (action === "closeReminder") closeReminderModal();
  else if (action === "sendReminder") sendReminder();
});

var searchInput = document.getElementById("searchInput");
var searchDropdown = document.getElementById("searchDropdown");
var notifBtn = document.getElementById("notifBtn");
var notifDropdown = document.getElementById("notifDropdown");
var avatarBtn = document.getElementById("avatarBtn");
var userDropdown = document.getElementById("userDropdown");
var markAllReadBtn = document.getElementById("markAllReadBtn");

function closeAllDropdowns() {
  if (searchDropdown) searchDropdown.classList.add("hidden");
  if (notifDropdown) notifDropdown.classList.add("hidden");
  if (userDropdown) userDropdown.classList.add("hidden");
}

if (searchInput) searchInput.addEventListener("focus", function() { closeAllDropdowns(); searchDropdown.classList.remove("hidden"); });
if (notifBtn) notifBtn.addEventListener("click", function(e) { e.stopPropagation(); var open = !notifDropdown.classList.contains("hidden"); closeAllDropdowns(); if (!open) notifDropdown.classList.remove("hidden"); });
if (avatarBtn) avatarBtn.addEventListener("click", function(e) { e.stopPropagation(); var open = !userDropdown.classList.contains("hidden"); closeAllDropdowns(); if (!open) userDropdown.classList.remove("hidden"); });
if (markAllReadBtn) markAllReadBtn.addEventListener("click", function() {
  var dots = document.querySelectorAll(".notif-dot"); for (var i = 0; i < dots.length; i++) dots[i].style.display = "none";
  var badge = document.getElementById("notifBadge"); if (badge) badge.style.display = "none";
});
document.addEventListener("click", function() { closeAllDropdowns(); });

renderBarChart();
renderInsights();
renderTable();

document.getElementById('logoutBtn').addEventListener('click', function() {
  if (confirm('Are you sure you want to logout?')) {
    alert('You have been logged out.');
    window.location.href = '../index.html';
  }
});
