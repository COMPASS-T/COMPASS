// ===== SURVEY DATA WITH ALUMNI ANSWERS =====
var surveys = [
  {
    id: 1,
    title: "Curriculum Feedback Survey",
    sections: 11,
    targetAudience: "All Engineering Programs",
    dateStatus: "Closed May 30, 2024",
    responses: 342,
    responseLabel: "completed",
    status: "closed",
    questions: [
      {
        section: "A", sectionName: "Graduate Profile",
        question: "What is your current employment status?",
        type: "Multiple Choice",
        answers: [
          { name: "Patricia Lim", answer: "Employed" },
          { name: "Mark Reyes", answer: "Employed" },
          { name: "Angela Santos", answer: "Self-Employed" },
          { name: "Carlos Mendoza", answer: "Unemployed" }
        ]
      },
      {
        section: "A", sectionName: "Graduate Profile",
        question: "How long did it take you to land your first job after graduation?",
        type: "Multiple Choice",
        answers: [
          { name: "Patricia Lim", answer: "Less than 3 months" },
          { name: "Mark Reyes", answer: "3-6 months" },
          { name: "Angela Santos", answer: "Less than 3 months" },
          { name: "Carlos Mendoza", answer: "More than 1 year" }
        ]
      },
      {
        section: "A", sectionName: "Graduate Profile",
        question: "What is your current job title or position?",
        type: "Short Text",
        answers: [
          { name: "Patricia Lim", answer: "Junior Developer at Accenture Philippines" },
          { name: "Mark Reyes", answer: "Systems Analyst at Globe Telecom" },
          { name: "Angela Santos", answer: "Freelance Graphic Designer" },
          { name: "Carlos Mendoza", answer: "N/A - Currently looking for work" }
        ]
      },
      {
        section: "B", sectionName: "Employment Details",
        question: "Name of your current employer or company.",
        type: "Short Text",
        answers: [
          { name: "Patricia Lim", answer: "Accenture Philippines Inc." },
          { name: "Mark Reyes", answer: "Globe Telecom" },
          { name: "Angela Santos", answer: "Self-employed (Freelance)" },
          { name: "Carlos Mendoza", answer: "N/A" }
        ]
      },
      {
        section: "B", sectionName: "Employment Details",
        question: "Is your current job related to your degree program?",
        type: "Multiple Choice",
        answers: [
          { name: "Patricia Lim", answer: "Yes, directly related" },
          { name: "Mark Reyes", answer: "Yes, directly related" },
          { name: "Angela Santos", answer: "Somewhat related" },
          { name: "Carlos Mendoza", answer: "N/A" }
        ]
      },
      {
        section: "B", sectionName: "Employment Details",
        question: "What is your monthly salary range?",
        type: "Multiple Choice",
        answers: [
          { name: "Patricia Lim", answer: "PHP 25,001 - 35,000" },
          { name: "Mark Reyes", answer: "PHP 35,001 - 50,000" },
          { name: "Angela Santos", answer: "PHP 15,001 - 25,000" },
          { name: "Carlos Mendoza", answer: "No income" }
        ]
      },
      {
        section: "C", sectionName: "Curriculum Relevance",
        question: "How relevant was your curriculum to your current job?",
        type: "Rating Scale",
        answers: [
          { name: "Patricia Lim", answer: "4 out of 5 — Very Relevant" },
          { name: "Mark Reyes", answer: "5 out of 5 — Highly Relevant" },
          { name: "Angela Santos", answer: "3 out of 5 — Moderately Relevant" },
          { name: "Carlos Mendoza", answer: "2 out of 5 — Slightly Relevant" }
        ]
      },
      {
        section: "C", sectionName: "Curriculum Relevance",
        question: "Which courses were most useful in your career?",
        type: "Long Text",
        answers: [
          { name: "Patricia Lim", answer: "Data Structures, Web Development, and Database Management were the most applicable to my daily work as a developer." },
          { name: "Mark Reyes", answer: "Network Administration, Systems Analysis and Design helped me a lot. I also found Software Engineering very practical." },
          { name: "Angela Santos", answer: "Multimedia Arts and Human-Computer Interaction gave me the design foundation I needed for freelance work." },
          { name: "Carlos Mendoza", answer: "I think the OJT/Practicum was the most valuable experience, more than the classroom lectures." }
        ]
      },
      {
        section: "D", sectionName: "Competency Assessment",
        question: "Rate your proficiency in critical thinking.",
        type: "Rating Scale",
        answers: [
          { name: "Patricia Lim", answer: "4 out of 5 — Proficient" },
          { name: "Mark Reyes", answer: "4 out of 5 — Proficient" },
          { name: "Angela Santos", answer: "5 out of 5 — Expert" },
          { name: "Carlos Mendoza", answer: "3 out of 5 — Competent" }
        ]
      },
      {
        section: "D", sectionName: "Competency Assessment",
        question: "Rate your proficiency in technical skills.",
        type: "Rating Scale",
        answers: [
          { name: "Patricia Lim", answer: "4 out of 5 — Proficient" },
          { name: "Mark Reyes", answer: "5 out of 5 — Expert" },
          { name: "Angela Santos", answer: "3 out of 5 — Competent" },
          { name: "Carlos Mendoza", answer: "3 out of 5 — Competent" }
        ]
      },
      {
        section: "E", sectionName: "Recommendations",
        question: "What improvements would you suggest for the curriculum?",
        type: "Long Text",
        answers: [
          { name: "Patricia Lim", answer: "More hands-on projects and industry partnerships. The theoretical subjects were too many compared to practical applications." },
          { name: "Mark Reyes", answer: "Add more cloud computing and DevOps courses. The industry has shifted but the curriculum hasn't caught up yet." },
          { name: "Angela Santos", answer: "Include freelancing and entrepreneurship modules. Not everyone wants a corporate job after graduation." },
          { name: "Carlos Mendoza", answer: "Better career guidance and job placement assistance. The career center needs improvement." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Graduate Tracer Survey 2024",
    sections: 15,
    targetAudience: "All Programs",
    dateStatus: "Published Jun 15, 2024",
    responses: 1284,
    responseLabel: "completed",
    status: "published",
    questions: [
      {
        section: "A", sectionName: "Graduate Profile",
        question: "What is your current employment status?",
        type: "Multiple Choice",
        answers: [
          { name: "John David Cruz", answer: "Employed" },
          { name: "Rica Mae Torres", answer: "Unemployed" },
          { name: "Bryan Villanueva", answer: "Employed" },
          { name: "Sofia Aquino", answer: "Self-Employed" }
        ]
      },
      {
        section: "A", sectionName: "Graduate Profile",
        question: "What year did you graduate?",
        type: "Multiple Choice",
        answers: [
          { name: "John David Cruz", answer: "2023" },
          { name: "Rica Mae Torres", answer: "2022" },
          { name: "Bryan Villanueva", answer: "2021" },
          { name: "Sofia Aquino", answer: "2023" }
        ]
      },
      {
        section: "A", sectionName: "Graduate Profile",
        question: "What degree program did you complete?",
        type: "Multiple Choice",
        answers: [
          { name: "John David Cruz", answer: "BS Information Technology" },
          { name: "Rica Mae Torres", answer: "BS Computer Science" },
          { name: "Bryan Villanueva", answer: "BS Business Administration" },
          { name: "Sofia Aquino", answer: "BS Accountancy" }
        ]
      },
      {
        section: "B", sectionName: "Employment Details",
        question: "How long did it take to find your first job?",
        type: "Multiple Choice",
        answers: [
          { name: "John David Cruz", answer: "Less than 3 months" },
          { name: "Rica Mae Torres", answer: "Still looking" },
          { name: "Bryan Villanueva", answer: "6-12 months" },
          { name: "Sofia Aquino", answer: "Started own business immediately" }
        ]
      },
      {
        section: "B", sectionName: "Employment Details",
        question: "Is your job related to your degree?",
        type: "Multiple Choice",
        answers: [
          { name: "John David Cruz", answer: "Yes, directly related" },
          { name: "Rica Mae Torres", answer: "N/A" },
          { name: "Bryan Villanueva", answer: "Somewhat related" },
          { name: "Sofia Aquino", answer: "Yes, directly related" }
        ]
      },
      {
        section: "C", sectionName: "Curriculum Relevance",
        question: "How relevant was your curriculum to your work?",
        type: "Rating Scale",
        answers: [
          { name: "John David Cruz", answer: "4 out of 5 — Very Relevant" },
          { name: "Rica Mae Torres", answer: "3 out of 5 — Moderately Relevant" },
          { name: "Bryan Villanueva", answer: "3 out of 5 — Moderately Relevant" },
          { name: "Sofia Aquino", answer: "5 out of 5 — Highly Relevant" }
        ]
      },
      {
        section: "C", sectionName: "Curriculum Relevance",
        question: "Which subjects helped you the most?",
        type: "Long Text",
        answers: [
          { name: "John David Cruz", answer: "Programming fundamentals, database management, and networking courses were essential in my IT support role." },
          { name: "Rica Mae Torres", answer: "Algorithm design and software engineering gave me a strong foundation, though I'm still seeking employment." },
          { name: "Bryan Villanueva", answer: "Financial management and marketing courses. They gave me practical knowledge for banking." },
          { name: "Sofia Aquino", answer: "Auditing, taxation, and financial accounting — these are exactly what I use daily in my practice." }
        ]
      },
      {
        section: "D", sectionName: "Competency Assessment",
        question: "Rate your communication skills.",
        type: "Rating Scale",
        answers: [
          { name: "John David Cruz", answer: "4 out of 5 — Proficient" },
          { name: "Rica Mae Torres", answer: "3 out of 5 — Competent" },
          { name: "Bryan Villanueva", answer: "5 out of 5 — Expert" },
          { name: "Sofia Aquino", answer: "4 out of 5 — Proficient" }
        ]
      },
      {
        section: "E", sectionName: "Recommendations",
        question: "Suggestions to improve the program curriculum?",
        type: "Long Text",
        answers: [
          { name: "John David Cruz", answer: "More industry certifications integrated into the program like AWS or CompTIA." },
          { name: "Rica Mae Torres", answer: "Better internship programs with actual tech companies, not just local small businesses." },
          { name: "Bryan Villanueva", answer: "Add digital marketing and e-commerce modules to keep up with modern business trends." },
          { name: "Sofia Aquino", answer: "More CPA board exam review integration into the last year of the program." }
        ]
      },
      {
        section: "E", sectionName: "Recommendations",
        question: "Would you recommend the program to others?",
        type: "Multiple Choice",
        answers: [
          { name: "John David Cruz", answer: "Yes, definitely" },
          { name: "Rica Mae Torres", answer: "Yes, with some improvements" },
          { name: "Bryan Villanueva", answer: "Yes, with some improvements" },
          { name: "Sofia Aquino", answer: "Yes, definitely" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Employment Readiness Assessment",
    sections: 8,
    targetAudience: "BS Information Technology",
    dateStatus: "Published Jul 1, 2024",
    responses: 156,
    responseLabel: "in progress",
    status: "published",
    questions: [
      {
        section: "A", sectionName: "Personal Information",
        question: "What batch/year did you graduate?",
        type: "Multiple Choice",
        answers: [
          { name: "Leo Fernandez", answer: "2023" },
          { name: "Anna Marie Dela Vega", answer: "2022" },
          { name: "Miguel Santos", answer: "2023" },
          { name: "Christine Joy Ramos", answer: "2021" }
        ]
      },
      {
        section: "B", sectionName: "Readiness Assessment",
        question: "Do you feel prepared for the workforce?",
        type: "Multiple Choice",
        answers: [
          { name: "Leo Fernandez", answer: "Yes, very prepared" },
          { name: "Anna Marie Dela Vega", answer: "Somewhat prepared" },
          { name: "Miguel Santos", answer: "Somewhat prepared" },
          { name: "Christine Joy Ramos", answer: "Yes, very prepared" }
        ]
      },
      {
        section: "B", sectionName: "Readiness Assessment",
        question: "Rate your confidence in job interviews.",
        type: "Rating Scale",
        answers: [
          { name: "Leo Fernandez", answer: "4 out of 5 — Confident" },
          { name: "Anna Marie Dela Vega", answer: "2 out of 5 — Not confident" },
          { name: "Miguel Santos", answer: "3 out of 5 — Neutral" },
          { name: "Christine Joy Ramos", answer: "5 out of 5 — Very Confident" }
        ]
      },
      {
        section: "C", sectionName: "Skills Gap",
        question: "What skills do you feel you are lacking?",
        type: "Long Text",
        answers: [
          { name: "Leo Fernandez", answer: "Cloud computing and containerization (Docker, Kubernetes). These were barely mentioned in our curriculum." },
          { name: "Anna Marie Dela Vega", answer: "Soft skills like public speaking and presentation. Technical skills are fine but I struggle in interviews." },
          { name: "Miguel Santos", answer: "Real-world project management. The theory was there but no actual project management tool experience." },
          { name: "Christine Joy Ramos", answer: "Advanced cybersecurity. The basics were covered but the industry wants specialized knowledge." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Competency Mapping Survey",
    sections: 12,
    targetAudience: "BS Business Administration",
    dateStatus: "Draft",
    responses: 0,
    responseLabel: "not started",
    status: "draft",
    questions: []
  },
  {
    id: 5,
    title: "Alumni Satisfaction Survey 2024",
    sections: 9,
    targetAudience: "All Programs",
    dateStatus: "Closed Mar 15, 2024",
    responses: 876,
    responseLabel: "completed",
    status: "closed",
    questions: [
      {
        section: "A", sectionName: "Overall Satisfaction",
        question: "How satisfied are you with your overall university experience?",
        type: "Rating Scale",
        answers: [
          { name: "Diana Reyes", answer: "4 out of 5 — Satisfied" },
          { name: "Renz Gutierrez", answer: "5 out of 5 — Very Satisfied" },
          { name: "Jasmine Tan", answer: "3 out of 5 — Neutral" },
          { name: "Paolo Martinez", answer: "4 out of 5 — Satisfied" }
        ]
      },
      {
        section: "A", sectionName: "Overall Satisfaction",
        question: "Would you choose the same university again?",
        type: "Multiple Choice",
        answers: [
          { name: "Diana Reyes", answer: "Yes" },
          { name: "Renz Gutierrez", answer: "Yes" },
          { name: "Jasmine Tan", answer: "Maybe" },
          { name: "Paolo Martinez", answer: "Yes" }
        ]
      },
      {
        section: "B", sectionName: "Academic Quality",
        question: "Rate the quality of instruction in your program.",
        type: "Rating Scale",
        answers: [
          { name: "Diana Reyes", answer: "4 out of 5 — Good" },
          { name: "Renz Gutierrez", answer: "5 out of 5 — Excellent" },
          { name: "Jasmine Tan", answer: "3 out of 5 — Average" },
          { name: "Paolo Martinez", answer: "4 out of 5 — Good" }
        ]
      },
      {
        section: "C", sectionName: "Facilities & Services",
        question: "Rate the quality of campus facilities.",
        type: "Rating Scale",
        answers: [
          { name: "Diana Reyes", answer: "3 out of 5 — Average" },
          { name: "Renz Gutierrez", answer: "4 out of 5 — Good" },
          { name: "Jasmine Tan", answer: "2 out of 5 — Below Average" },
          { name: "Paolo Martinez", answer: "3 out of 5 — Average" }
        ]
      },
      {
        section: "D", sectionName: "Career Support",
        question: "Any suggestions to improve alumni services?",
        type: "Long Text",
        answers: [
          { name: "Diana Reyes", answer: "Create an alumni job board with verified employer postings. The current system is outdated." },
          { name: "Renz Gutierrez", answer: "More networking events and mentorship programs connecting current students with successful alumni." },
          { name: "Jasmine Tan", answer: "The career center needs full-time counselors, not just part-time staff who are hard to reach." },
          { name: "Paolo Martinez", answer: "Partner with more companies for job fairs. Only a few companies attend the annual career fair." }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Industry Relevance Feedback",
    sections: 7,
    targetAudience: "BS Computer Science",
    dateStatus: "Draft",
    responses: 0,
    responseLabel: "not started",
    status: "draft",
    questions: []
  }
];

// ===== HELPER FUNCTIONS =====
function getStatusBadge(status) {
  if (status === "closed") {
    return '<span class="px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 text-red-600">Closed</span>';
  } else if (status === "published") {
    return '<span class="px-3 py-1 rounded-full text-[11px] font-semibold bg-green-50 text-green-600">Published</span>';
  } else {
    return '<span class="px-3 py-1 rounded-full text-[11px] font-semibold bg-yellow-50 text-yellow-600">Draft</span>';
  }
}

function getResponseDot(status) {
  if (status === "closed") return "bg-green-500";
  if (status === "published") return "bg-blue-500";
  return "bg-gray-400";
}

function getTypeBadge(type) {
  if (type === "Multiple Choice") return '<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-600">Multiple Choice</span>';
  if (type === "Short Text") return '<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-600">Short Text</span>';
  if (type === "Long Text") return '<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-50 text-purple-600">Long Text</span>';
  if (type === "Rating Scale") return '<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-yellow-50 text-yellow-600">Rating Scale</span>';
  return '<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-600">' + type + '</span>';
}

function getInitials(fullName) {
  var parts = fullName.trim().split(/\s+/);
  if (parts.length >= 2) {
    return parts[0].charAt(0).toUpperCase() + parts[parts.length - 1].charAt(0).toUpperCase();
  }
  return parts[0].charAt(0).toUpperCase();
}

function getActionButton(survey) {
  if (survey.status === "closed" || survey.status === "published") {
    return '<button class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold rounded-lg transition" data-action="viewResults" data-id="' + survey.id + '">View Results</button>';
  } else {
    return '<button class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold rounded-lg transition" data-action="publishSurvey" data-id="' + survey.id + '">Publish Survey</button>';
  }
}

// ===== RENDER SURVEY CARDS =====
function renderSurveys(filter) {
  var list = document.getElementById("surveyList");
  var filtered = surveys;
  if (filter && filter !== "all") {
    filtered = surveys.filter(function (s) { return s.status === filter; });
  }

  if (filtered.length === 0) {
    list.innerHTML = '<div class="bg-white border border-gray-200 rounded-xl p-10 text-center"><p class="text-sm text-gray-400">No surveys found in this category.</p></div>';
    return;
  }

  var html = "";
  for (var i = 0; i < filtered.length; i++) {
    var s = filtered[i];
    html += '<div class="bg-white border border-gray-200 rounded-xl p-6">';
    html += '  <div class="flex items-start justify-between">';
    html += '    <div class="flex-1">';
    html += '      <h3 class="text-[15px] font-bold text-gray-900">' + s.title + '</h3>';
    html += '      <p class="text-[12px] text-gray-500 mt-1">' + s.sections + ' Sections</p>';
    html += '      <div class="mt-4 space-y-2">';
    html += '        <div class="flex items-center gap-2"><span class="text-[12px] font-medium text-gray-500 w-[120px]">Target Audience:</span><span class="text-[13px] text-gray-900">' + s.targetAudience + '</span></div>';
    html += '        <div class="flex items-center gap-2"><span class="text-[12px] font-medium text-gray-500 w-[120px]">Date Status:</span><span class="text-[13px] text-gray-900">' + s.dateStatus + '</span></div>';
    html += '        <div class="flex items-center gap-2"><span class="text-[12px] font-medium text-gray-500 w-[120px]">Responses:</span><span class="flex items-center gap-1.5 text-[13px] text-gray-900"><span class="w-2 h-2 rounded-full ' + getResponseDot(s.status) + '"></span>' + s.responses + ' ' + s.responseLabel + '</span></div>';
    html += '      </div>';
    html += '    </div>';
    html += '    <div class="flex flex-col items-end gap-3">' + getStatusBadge(s.status) + '</div>';
    html += '  </div>';
    html += '  <div class="flex justify-end mt-4">' + getActionButton(s) + '</div>';
    html += '</div>';
  }
  list.innerHTML = html;
}

// ===== TABS =====
var currentTab = "all";

function setActiveTab(tab) {
  currentTab = tab;
  var btns = document.querySelectorAll(".tab-btn");
  for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    if (btn.getAttribute("data-tab") === tab) {
      btn.className = "tab-btn px-4 py-2.5 text-[13px] font-semibold text-blue-600 border-b-2 border-blue-600";
    } else {
      btn.className = "tab-btn px-4 py-2.5 text-[13px] font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700";
    }
  }
  renderSurveys(tab);
}

// ===== LIST / DETAIL TOGGLE =====
function showListView() {
  document.getElementById("listView").classList.remove("hidden");
  document.getElementById("detailView").classList.add("hidden");
}

function showDetailView(surveyId) {
  var survey = null;
  for (var i = 0; i < surveys.length; i++) {
    if (surveys[i].id === surveyId) { survey = surveys[i]; break; }
  }
  if (!survey) return;

  document.getElementById("listView").classList.add("hidden");
  document.getElementById("detailView").classList.remove("hidden");

  var html = '';
  // Breadcrumb
  html += '<p class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Alumni Relations Office Dashboard</p>';
  html += '<div class="flex items-center gap-2 text-[13px] text-gray-500 mb-1">';
  html += '  <a href="#" class="hover:text-blue-600" data-action="backToList">Publish Surveys</a>';
  html += '  <span>\u203A</span>';
  html += '  <span class="text-gray-900 font-semibold">' + survey.title + '</span>';
  html += '</div>';
  html += '<div class="flex items-center justify-between mt-2">';
  html += '  <h1 class="text-2xl font-extrabold text-gray-900">' + survey.title + ' \u2014 Results</h1>';
  html += '  <button class="flex items-center gap-1.5 text-[13px] font-semibold text-gray-600 hover:text-blue-600" data-action="backToList"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>Back to Surveys</button>';
  html += '</div>';
  html += '<p class="text-sm text-gray-500 mt-1">Review alumni answers for each survey question.</p>';

  // Survey info
  html += '<div class="flex items-center gap-6 mt-4 mb-6">';
  html += '  ' + getStatusBadge(survey.status);
  html += '  <span class="text-[13px] text-gray-500">' + survey.targetAudience + '</span>';
  html += '  <span class="text-[13px] text-gray-500">' + survey.dateStatus + '</span>';
  html += '  <span class="text-[13px] font-semibold text-blue-600">' + survey.responses + ' total responses</span>';
  html += '</div>';

  if (survey.questions.length === 0) {
    html += '<div class="bg-white border border-gray-200 rounded-xl p-10 text-center"><p class="text-sm text-gray-400">No questions added to this survey yet.</p></div>';
  } else {
    var currentSection = "";
    var qNum = 0;

    for (var q = 0; q < survey.questions.length; q++) {
      var item = survey.questions[q];

      // Section header
      if (item.section !== currentSection) {
        if (currentSection !== "") {
          html += '</div>'; // close previous section card
        }
        currentSection = item.section;
        html += '<div class="bg-white border border-gray-200 rounded-xl p-6 mb-4">';
        html += '  <h2 class="text-[12px] font-bold text-blue-600 uppercase tracking-wide mb-5">Section ' + item.section + ' \u2014 ' + item.sectionName + '</h2>';
      }

      qNum++;
      var isLast = (q === survey.questions.length - 1) || (survey.questions[q + 1].section !== currentSection);

      html += '<div class="' + (isLast ? '' : 'border-b border-gray-100 pb-4 mb-4') + '">';

      // Question header
      html += '  <div class="flex items-center gap-2 mb-3">';
      html += '    <span class="text-[12px] font-bold text-gray-400">Q' + qNum + '.</span>';
      html += '    <p class="text-[13px] font-semibold text-gray-900">' + item.question + '</p>';
      html += '    <div class="ml-auto">' + getTypeBadge(item.type) + '</div>';
      html += '  </div>';

      // Alumni answers
      html += '  <div class="space-y-2 ml-6">';
      for (var a = 0; a < item.answers.length; a++) {
        var ans = item.answers[a];
        var initials = getInitials(ans.name);
        html += '<div class="flex items-start gap-3 py-2 px-3 rounded-lg bg-gray-50">';
        html += '  <div class="w-[28px] h-[28px] bg-blue-700 rounded-full flex items-center justify-center text-white text-[10px] font-semibold shrink-0 mt-0.5">' + initials + '</div>';
        html += '  <div class="flex-1 min-w-0">';
        html += '    <p class="text-[12px] font-semibold text-gray-700">' + ans.name + '</p>';
        html += '    <p class="text-[13px] text-gray-900 mt-0.5">' + ans.answer + '</p>';
        html += '  </div>';
        html += '</div>';
      }
      html += '    <p class="text-[11px] text-gray-400 mt-1 ml-1">Showing 4 of ' + survey.responses + ' responses</p>';
      html += '  </div>';

      html += '</div>';
    }
    html += '</div>'; // close last section card
  }

  document.getElementById("detailContent").innerHTML = html;
}

// ===== CLOSE ALL DROPDOWNS =====
function closeAllDropdowns() {
  document.getElementById("searchDropdown").classList.add("hidden");
  document.getElementById("notifDropdown").classList.add("hidden");
  document.getElementById("userDropdown").classList.add("hidden");
}

// ===== EVENT LISTENERS =====
document.addEventListener("DOMContentLoaded", function () {
  renderSurveys("all");

  document.addEventListener("click", function (e) {
    var tabBtn = e.target.closest(".tab-btn");
    if (tabBtn) {
      setActiveTab(tabBtn.getAttribute("data-tab"));
      return;
    }

    var actionBtn = e.target.closest("[data-action]");
    if (actionBtn) {
      var action = actionBtn.getAttribute("data-action");
      if (action === "viewResults") {
        showDetailView(parseInt(actionBtn.getAttribute("data-id")));
        return;
      }
      if (action === "publishSurvey") {
        var sid = parseInt(actionBtn.getAttribute("data-id"));
        for (var i = 0; i < surveys.length; i++) {
          if (surveys[i].id === sid) {
            surveys[i].status = "published";
            surveys[i].dateStatus = "Published Aug 16, 2026";
            break;
          }
        }
        renderSurveys(currentTab);
        return;
      }
      if (action === "backToList") {
        e.preventDefault();
        showListView();
        return;
      }
    }
  });

  // Search dropdown
  var searchInput = document.getElementById("searchInput");
  var searchDropdown = document.getElementById("searchDropdown");
  searchInput.addEventListener("focus", function () {
    closeAllDropdowns();
    searchDropdown.classList.remove("hidden");
  });

  // Notification dropdown
  var notifBtn = document.getElementById("notifBtn");
  var notifDropdown = document.getElementById("notifDropdown");
  notifBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var isOpen = !notifDropdown.classList.contains("hidden");
    closeAllDropdowns();
    if (!isOpen) notifDropdown.classList.remove("hidden");
  });

  // Mark all read
  var markAllReadBtn = document.getElementById("markAllReadBtn");
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var dots = document.querySelectorAll(".notif-dot");
      for (var i = 0; i < dots.length; i++) { dots[i].style.display = "none"; }
      var badge = document.getElementById("notifBadge");
      if (badge) badge.style.display = "none";
    });
  }

  // Avatar dropdown
  var avatarBtn = document.getElementById("avatarBtn");
  var userDropdown = document.getElementById("userDropdown");
  avatarBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var isOpen = !userDropdown.classList.contains("hidden");
    closeAllDropdowns();
    if (!isOpen) userDropdown.classList.remove("hidden");
  });

  // Logout
 document.getElementById('logoutBtn').addEventListener('click',function(){if(confirm('Are you sure you want to logout?')){alert('You have been logged out.');window.location.href='../index.html'}});

  // Close dropdowns on outside click
  document.addEventListener("click", function (e) {
    if (!e.target.closest("#searchContainer")) {
      searchDropdown.classList.add("hidden");
    }
    if (!e.target.closest("#notifWrap")) {
      notifDropdown.classList.add("hidden");
    }
    if (!e.target.closest("#avatarBtn") && !e.target.closest("#userDropdown")) {
      userDropdown.classList.add("hidden");
    }
  });
});
