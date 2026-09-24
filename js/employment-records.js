(function() {
  var records = [
    { name: "Maria Clara Santos", id: "ID-2021-0813", program: "BSIT", company: "Accenture Philippines", job: "Jr. Software Developer", industry: "IT Services", status: "Employed", date: "Jul 2024", initials: "MS",
      history: [
        { job: "IT Intern", company: "Accenture Philippines", industry: "IT Services", date: "Jan 2023 \u2013 Jun 2023", status: "Intern" },
        { job: "Jr. Software Developer", company: "Accenture Philippines", industry: "IT Services", date: "Jul 2023 \u2013 Present", status: "Employed" }
      ]
    },
    { name: "John Villanueva", id: "ID-2020-0456", program: "BSCS", company: "Globe Telecom", job: "Cloud Engineer", industry: "Telecommunications", status: "Employed", date: "Jun 2024", initials: "JV",
      history: [
        { job: "Network Technician", company: "PLDT Inc.", industry: "Telecommunications", date: "Mar 2021 \u2013 Dec 2022", status: "Employed" },
        { job: "Systems Administrator", company: "Globe Telecom", industry: "Telecommunications", date: "Jan 2023 \u2013 May 2024", status: "Employed" },
        { job: "Cloud Engineer", company: "Globe Telecom", industry: "Telecommunications", date: "Jun 2024 \u2013 Present", status: "Employed" }
      ]
    },
    { name: "Angela Cruz", id: "ID-2021-0129", program: "BSIT", company: "\u2014", job: "\u2014", industry: "\u2014", status: "Unemployed", date: "Jul 2024", initials: "AC",
      history: [
        { job: "Cashier (Part-time)", company: "SM Retail", industry: "Retail", date: "Jun 2021 \u2013 Feb 2022", status: "Employed" },
        { job: "\u2014", company: "\u2014", industry: "\u2014", date: "Mar 2022 \u2013 Present", status: "Unemployed" }
      ]
    },
    { name: "Carlos Garcia", id: "ID-2019-0512", program: "BSCpE", company: "Self (Freelance)", job: "Web Developer", industry: "Freelancing", status: "Self-employed", date: "May 2024", initials: "CG",
      history: [
        { job: "IT Support Specialist", company: "Converge ICT", industry: "Telecommunications", date: "Aug 2019 \u2013 Jul 2021", status: "Employed" },
        { job: "Freelance Web Developer", company: "Self (Freelance)", industry: "Freelancing", date: "Aug 2021 \u2013 Present", status: "Self-employed" }
      ]
    },
    { name: "Daryl Reyes", id: "ID-2020-0587", program: "BSCS", company: "Canva", job: "DevOps Engineer", industry: "Technology", status: "Employed", date: "Jul 2024", initials: "DR",
      history: [
        { job: "QA Tester", company: "Pointwest Technologies", industry: "IT Services", date: "Feb 2021 \u2013 Jan 2023", status: "Employed" },
        { job: "DevOps Engineer", company: "Canva", industry: "Technology", date: "Feb 2023 \u2013 Present", status: "Employed" }
      ]
    },
    { name: "Patricia Lim", id: "ID-2021-0334", program: "BSIT", company: "TaskUs", job: "QA Analyst", industry: "BPO", status: "Employed", date: "Jun 2024", initials: "PL",
      history: [
        { job: "Customer Support Agent", company: "TaskUs", industry: "BPO", date: "Jul 2021 \u2013 Dec 2022", status: "Employed" },
        { job: "QA Analyst", company: "TaskUs", industry: "BPO", date: "Jan 2023 \u2013 Present", status: "Employed" }
      ]
    },
    { name: "Marco Tan", id: "ID-2022-0091", program: "BSBA", company: "BDO Unibank", job: "Financial Analyst", industry: "Banking", status: "Employed", date: "Jul 2024", initials: "MT",
      history: [
        { job: "Bank Teller", company: "BDO Unibank", industry: "Banking", date: "Jun 2022 \u2013 Nov 2023", status: "Employed" },
        { job: "Financial Analyst", company: "BDO Unibank", industry: "Banking", date: "Dec 2023 \u2013 Present", status: "Employed" }
      ]
    },
    { name: "Liza Fernandez", id: "ID-2020-0743", program: "BSA", company: "SGV & Co.", job: "Audit Associate", industry: "Accounting", status: "Employed", date: "May 2024", initials: "LF",
      history: [
        { job: "Accounting Intern", company: "Isla Lipana & Co.", industry: "Accounting", date: "Mar 2020 \u2013 Aug 2020", status: "Intern" },
        { job: "Junior Auditor", company: "SGV & Co.", industry: "Accounting", date: "Sep 2020 \u2013 Apr 2024", status: "Employed" },
        { job: "Audit Associate", company: "SGV & Co.", industry: "Accounting", date: "May 2024 \u2013 Present", status: "Employed" }
      ]
    },
    { name: "Kevin Ramos", id: "ID-2021-0601", program: "BSCS", company: "\u2014", job: "\u2014", industry: "\u2014", status: "Unemployed", date: "Jun 2024", initials: "KR",
      history: [
        { job: "Intern Developer", company: "Exist Software Labs", industry: "IT Services", date: "Jan 2022 \u2013 Jun 2022", status: "Intern" },
        { job: "\u2014", company: "\u2014", industry: "\u2014", date: "Jul 2022 \u2013 Present", status: "Unemployed" }
      ]
    },
    { name: "Anna Reyes", id: "ID-2022-0210", program: "BSIT", company: "Shopee Philippines", job: "Frontend Developer", industry: "E-commerce", status: "Employed", date: "Jul 2024", initials: "AR",
      history: [
        { job: "Frontend Developer", company: "Shopee Philippines", industry: "E-commerce", date: "Aug 2022 \u2013 Present", status: "Employed" }
      ]
    },
    { name: "Miguel Torres", id: "ID-2019-0888", program: "BSCpE", company: "Samsung R&D", job: "Embedded Systems Engineer", industry: "Electronics", status: "Employed", date: "Apr 2024", initials: "MT",
      history: [
        { job: "Hardware Technician", company: "Integrated Micro-Electronics", industry: "Electronics", date: "Oct 2019 \u2013 Sep 2021", status: "Employed" },
        { job: "Firmware Engineer", company: "Samsung R&D", industry: "Electronics", date: "Oct 2021 \u2013 Mar 2024", status: "Employed" },
        { job: "Embedded Systems Engineer", company: "Samsung R&D", industry: "Electronics", date: "Apr 2024 \u2013 Present", status: "Employed" }
      ]
    },
    { name: "Bianca Aquino", id: "ID-2023-0015", program: "BSED", company: "DepEd", job: "Teacher I", industry: "Education", status: "Employed", date: "Jul 2024", initials: "BA",
      history: [
        { job: "Student Teacher", company: "DepEd (Practicum)", industry: "Education", date: "Jun 2023 \u2013 Oct 2023", status: "Intern" },
        { job: "Teacher I", company: "DepEd", industry: "Education", date: "Nov 2023 \u2013 Present", status: "Employed" }
      ]
    }
  ];

  var PAGE_SIZE = 5;
  var currentPage = 1;
  var editIdx = -1;

  function statusBadge(s) {
    var cls = "";
    if (s === "Employed") cls = "bg-green-50 text-green-700 border-green-200";
    else if (s === "Self-employed") cls = "bg-blue-50 text-blue-700 border-blue-200";
    else if (s === "Unemployed") cls = "bg-red-50 text-red-600 border-red-200";
    else if (s === "Freelancer") cls = "bg-purple-50 text-purple-700 border-purple-200";
    else if (s === "Intern") cls = "bg-yellow-50 text-yellow-700 border-yellow-200";
    else cls = "bg-gray-50 text-gray-600 border-gray-200";
    return '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ' + cls + '">' + s + '</span>';
  }

  function getFiltered() {
    var search = document.getElementById("tableSearch").value.toLowerCase();
    var prog = document.getElementById("filterProgram").value;
    var status = document.getElementById("filterStatus").value;
    return records.filter(function(r) {
      if (search && r.name.toLowerCase().indexOf(search) === -1 && r.id.toLowerCase().indexOf(search) === -1) return false;
      if (prog && r.program !== prog) return false;
      if (status && r.status !== status) return false;
      return true;
    });
  }

  function renderTable() {
    var filtered = getFiltered();
    var totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if (currentPage > totalPages) currentPage = totalPages;
    var start = (currentPage - 1) * PAGE_SIZE;
    var page = filtered.slice(start, start + PAGE_SIZE);
    var tbody = document.getElementById("empTableBody");

    if (page.length === 0) {
      tbody.innerHTML = '<tr><td colspan="8" class="py-10 text-center text-[13px] text-gray-400">No records found.</td></tr>';
    } else {
      var html = "";
      for (var i = 0; i < page.length; i++) {
        var r = page[i];
        var realIdx = records.indexOf(r);
        html += '<tr class="border-b border-gray-100 hover:bg-gray-50">';
        html += '<td class="py-3 px-5"><div class="flex items-center gap-3"><div class="w-[32px] h-[32px] bg-gray-100 rounded-full flex items-center justify-center text-[11px] font-semibold text-gray-500 shrink-0">' + r.initials + '</div><div><p class="text-[13px] font-semibold text-gray-900">' + r.name + '</p><p class="text-[11px] text-gray-400">' + r.id + '</p></div></div></td>';
        html += '<td class="py-3 px-3 text-[13px] text-gray-600">' + r.program + '</td>';
        html += '<td class="py-3 px-3 text-[13px] text-gray-600">' + r.company + '</td>';
        html += '<td class="py-3 px-3 text-[13px] text-gray-600">' + r.job + '</td>';
        html += '<td class="py-3 px-3 text-[13px] text-gray-600">' + r.industry + '</td>';
        html += '<td class="py-3 px-3">' + statusBadge(r.status) + '</td>';
        html += '<td class="py-3 px-3 text-[13px] text-gray-500">' + r.date + '</td>';
        html += '<td class="py-3 px-3"><div class="flex items-center gap-1">';
        html += '<button data-action="viewRecord" data-idx="' + realIdx + '" class="p-1.5 rounded hover:bg-gray-100" title="View"><svg class="w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>';
        html += '<button data-action="editRecord" data-idx="' + realIdx + '" class="p-1.5 rounded hover:bg-gray-100" title="Edit"><svg class="w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>';
        html += '</div></td>';
        html += '</tr>';
      }
      tbody.innerHTML = html;
    }

    document.getElementById("showingText").textContent = filtered.length === 0
      ? "No records"
      : "Showing " + (start + 1) + " to " + Math.min(start + PAGE_SIZE, filtered.length) + " of " + filtered.length + " records";

    var pnHtml = "";
    for (var p = 1; p <= totalPages; p++) {
      if (p === currentPage) {
        pnHtml += '<button class="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white text-[12px] font-semibold">' + p + '</button>';
      } else {
        pnHtml += '<button data-action="goPage" data-page="' + p + '" class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 text-[12px] font-medium">' + p + '</button>';
      }
    }
    document.getElementById("pageNums").innerHTML = pnHtml;
    document.getElementById("prevBtn").disabled = currentPage <= 1;
    document.getElementById("nextBtn").disabled = currentPage >= totalPages;
  }

  function showToast(msg) {
    document.getElementById("toastMsg").textContent = msg;
    document.getElementById("toast").classList.remove("hidden");
    setTimeout(function() { document.getElementById("toast").classList.add("hidden"); }, 4000);
  }

  // --- View Record Modal with Employment History Timeline ---
  function showViewModal(r) {
    var body = document.getElementById("viewModalBody");
    var html = '';

    // Header with avatar
    html += '<div class="flex items-center gap-3 pb-4 border-b border-gray-100">';
    html += '<div class="w-[44px] h-[44px] bg-gray-100 rounded-full flex items-center justify-center text-[14px] font-semibold text-gray-500">' + r.initials + '</div>';
    html += '<div><p class="text-[15px] font-bold text-gray-900">' + r.name + '</p><p class="text-[12px] text-gray-500">' + r.id + ' &middot; ' + r.program + '</p></div>';
    html += '</div>';

    // Current info
    html += '<div class="grid grid-cols-2 gap-3 pt-3 pb-4 border-b border-gray-100">';
    html += '<div><p class="text-[11px] font-semibold text-gray-400 uppercase">Current Company</p><p class="text-[13px] font-medium text-gray-900 mt-0.5">' + r.company + '</p></div>';
    html += '<div><p class="text-[11px] font-semibold text-gray-400 uppercase">Current Job Title</p><p class="text-[13px] font-medium text-gray-900 mt-0.5">' + r.job + '</p></div>';
    html += '<div><p class="text-[11px] font-semibold text-gray-400 uppercase">Industry</p><p class="text-[13px] font-medium text-gray-900 mt-0.5">' + r.industry + '</p></div>';
    html += '<div><p class="text-[11px] font-semibold text-gray-400 uppercase">Status</p><div class="mt-0.5">' + statusBadge(r.status) + '</div></div>';
    html += '</div>';

    // Employment History Timeline
    html += '<div class="pt-3">';
    html += '<p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-3">Employment History</p>';

    if (r.history && r.history.length > 0) {
      html += '<div class="relative pl-5">';
      // Timeline line
      html += '<div class="absolute left-[7px] top-1 bottom-1 w-[2px] bg-gray-200"></div>';

      for (var i = r.history.length - 1; i >= 0; i--) {
        var h = r.history[i];
        var isCurrent = i === r.history.length - 1;
        var dotColor = isCurrent ? 'bg-blue-600' : 'bg-gray-300';

        html += '<div class="relative mb-4">';
        // Dot
        html += '<div class="absolute -left-5 top-[5px] w-[10px] h-[10px] rounded-full ' + dotColor + ' border-2 border-white"></div>';
        // Content
        html += '<div class="' + (isCurrent ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200') + ' rounded-lg px-3 py-2.5">';
        html += '<div class="flex items-center justify-between">';
        html += '<p class="text-[13px] font-semibold text-gray-900">' + h.job + '</p>';
        html += statusBadge(h.status);
        html += '</div>';
        html += '<p class="text-[12px] text-gray-600 mt-0.5">' + h.company + ' &middot; ' + h.industry + '</p>';
        html += '<p class="text-[11px] text-gray-400 mt-1">' + h.date + '</p>';
        if (isCurrent) {
          html += '<span class="inline-block mt-1.5 px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded">CURRENT</span>';
        }
        html += '</div></div>';
      }
      html += '</div>';
    } else {
      html += '<p class="text-[13px] text-gray-400 italic">No employment history available.</p>';
    }
    html += '</div>';

    body.innerHTML = html;
    document.getElementById("viewRecordModal").classList.remove("hidden");
  }

  document.getElementById("closeViewModal").addEventListener("click", function() {
    document.getElementById("viewRecordModal").classList.add("hidden");
  });
  document.getElementById("closeViewModalBtn").addEventListener("click", function() {
    document.getElementById("viewRecordModal").classList.add("hidden");
  });

  // --- Filters ---
  document.getElementById("tableSearch").addEventListener("input", function() { currentPage = 1; renderTable(); });
  document.getElementById("filterProgram").addEventListener("change", function() { currentPage = 1; renderTable(); });
  document.getElementById("filterBatch").addEventListener("change", function() { currentPage = 1; renderTable(); });
  document.getElementById("filterStatus").addEventListener("change", function() { currentPage = 1; renderTable(); });

  // --- Pagination ---
  document.getElementById("prevBtn").addEventListener("click", function() { if (currentPage > 1) { currentPage--; renderTable(); } });
  document.getElementById("nextBtn").addEventListener("click", function() { currentPage++; renderTable(); });

  // --- Add Record Modal ---
  document.getElementById("addRecordBtn").addEventListener("click", function() {
    document.getElementById("addRecordModal").classList.remove("hidden");
  });
  document.getElementById("closeAddModal").addEventListener("click", function() {
    document.getElementById("addRecordModal").classList.add("hidden");
  });
  document.getElementById("cancelAddModal").addEventListener("click", function() {
    document.getElementById("addRecordModal").classList.add("hidden");
  });
  document.getElementById("saveRecordBtn").addEventListener("click", function() {
    var name = document.getElementById("modalName").value.trim();
    var alumniId = document.getElementById("modalAlumniId").value.trim();
    if (!name || !alumniId) { alert("Please fill in Name and Alumni ID."); return; }
    var initials = name.split(" ").map(function(w) { return w[0]; }).join("").substring(0, 2).toUpperCase();
    var newJob = document.getElementById("modalJobTitle").value.trim() || "\u2014";
    var newCompany = document.getElementById("modalCompany").value.trim() || "\u2014";
    var newIndustry = document.getElementById("modalIndustry").value.trim() || "\u2014";
    var newStatus = document.getElementById("modalStatus").value;
    var newDate = document.getElementById("modalDate").value.trim() || new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" });
    records.unshift({
      name: name, id: alumniId, program: document.getElementById("modalProgram").value,
      company: newCompany, job: newJob, industry: newIndustry,
      status: newStatus, date: newDate, initials: initials,
      history: [{ job: newJob, company: newCompany, industry: newIndustry, date: newDate + " \u2013 Present", status: newStatus }]
    });
    document.getElementById("addRecordModal").classList.add("hidden");
    document.getElementById("modalName").value = "";
    document.getElementById("modalAlumniId").value = "";
    document.getElementById("modalCompany").value = "";
    document.getElementById("modalJobTitle").value = "";
    document.getElementById("modalIndustry").value = "";
    document.getElementById("modalDate").value = "";
    currentPage = 1;
    renderTable();
    showToast("Record added successfully.");
  });

  // --- Edit Record Modal ---
  document.getElementById("closeEditModal").addEventListener("click", function() {
    document.getElementById("editRecordModal").classList.add("hidden");
  });
  document.getElementById("cancelEditModal").addEventListener("click", function() {
    document.getElementById("editRecordModal").classList.add("hidden");
  });
  document.getElementById("updateRecordBtn").addEventListener("click", function() {
    if (editIdx < 0) return;
    var r = records[editIdx];
    var oldJob = r.job;
    var oldCompany = r.company;

    r.name = document.getElementById("editName").value.trim() || r.name;
    r.id = document.getElementById("editAlumniId").value.trim() || r.id;
    r.program = document.getElementById("editProgram").value;
    r.company = document.getElementById("editCompany").value.trim() || "\u2014";
    r.job = document.getElementById("editJobTitle").value.trim() || "\u2014";
    r.industry = document.getElementById("editIndustry").value.trim() || "\u2014";
    r.status = document.getElementById("editStatus").value;
    r.date = document.getElementById("editDate").value.trim() || r.date;
    r.initials = r.name.split(" ").map(function(w) { return w[0]; }).join("").substring(0, 2).toUpperCase();

    // If job or company changed, add to history
    if (r.job !== oldJob || r.company !== oldCompany) {
      if (!r.history) r.history = [];
      // Close previous entry
      if (r.history.length > 0) {
        var last = r.history[r.history.length - 1];
        if (last.date.indexOf("Present") !== -1) {
          last.date = last.date.replace("Present", r.date);
        }
      }
      r.history.push({
        job: r.job, company: r.company, industry: r.industry,
        date: r.date + " \u2013 Present", status: r.status
      });
    }

    document.getElementById("editRecordModal").classList.add("hidden");
    renderTable();
    showToast("Record updated successfully.");
  });

  // --- Event Delegation ---
  document.addEventListener("click", function(e) {
    var btn = e.target.closest("[data-action]");
    if (!btn) return;
    var action = btn.getAttribute("data-action");
    var idx = parseInt(btn.getAttribute("data-idx"), 10);

    if (action === "viewRecord") {
      showViewModal(records[idx]);
    } else if (action === "editRecord") {
      editIdx = idx;
      var rec = records[idx];
      document.getElementById("editName").value = rec.name;
      document.getElementById("editAlumniId").value = rec.id;
      document.getElementById("editProgram").value = rec.program;
      document.getElementById("editCompany").value = rec.company === "\u2014" ? "" : rec.company;
      document.getElementById("editJobTitle").value = rec.job === "\u2014" ? "" : rec.job;
      document.getElementById("editIndustry").value = rec.industry === "\u2014" ? "" : rec.industry;
      document.getElementById("editStatus").value = rec.status;
      document.getElementById("editDate").value = rec.date;
      document.getElementById("editRecordModal").classList.remove("hidden");
    } else if (action === "goPage") {
      currentPage = parseInt(btn.getAttribute("data-page"), 10);
      renderTable();
    }
  });

  // --- Initial Render ---
  renderTable();

  // --- Header Dropdowns ---
  function closeAllDropdowns() {
    document.getElementById("searchDropdown").classList.add("hidden");
    document.getElementById("notifDropdown").classList.add("hidden");
    document.getElementById("userDropdown").classList.add("hidden");
  }
  document.getElementById("searchInput").addEventListener("focus", function() {
    closeAllDropdowns();
    document.getElementById("searchDropdown").classList.remove("hidden");
  });
  document.getElementById("notifBtn").addEventListener("click", function(e) {
    e.stopPropagation();
    var dd = document.getElementById("notifDropdown");
    var isOpen = !dd.classList.contains("hidden");
    closeAllDropdowns();
    if (!isOpen) dd.classList.remove("hidden");
  });
  document.getElementById("avatarBtn").addEventListener("click", function(e) {
    e.stopPropagation();
    var dd = document.getElementById("userDropdown");
    var isOpen = !dd.classList.contains("hidden");
    closeAllDropdowns();
    if (!isOpen) dd.classList.remove("hidden");
  });
  document.getElementById("markAllReadBtn").addEventListener("click", function() {
    document.querySelectorAll(".notif-dot").forEach(function(d) { d.style.display = "none"; });
    var badge = document.getElementById("notifBadge");
    if (badge) badge.style.display = "none";
  });
  document.addEventListener("click", function(e) {
    if (!e.target.closest("#searchContainer") && !e.target.closest("#notifWrap") && !e.target.closest("#avatarBtn") && !e.target.closest("#userDropdown")) {
      closeAllDropdowns();
    }
  });

  // --- Logout ---
  document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
      alert('You have been logged out.');
      window.location.href = '../index.html';
    }
  });
})();
