(function () {
  var pendingRecords = [
    { id: "ALM-2023-0455", name: "Patricia Lim", program: "BSIT", programFull: "Bachelor of Science in Information Technology", batch: 2023, submitted: "Jul 20, 2024", docs: 2, status: "Pending", email: "patricia.lim@email.com", phone: "+63 921 567 8901", address: "56 Luna St, San Juan City", workSetup: "", workLocation: "", docList: ["Transcript of Records (TOR)", "Certificate of Graduation"] },
    { id: "ALM-2023-0462", name: "Marco Tan", program: "BSCS", programFull: "Bachelor of Science in Computer Science", batch: 2021, submitted: "Jul 19, 2024", docs: 3, status: "Pending", email: "marco.tan@email.com", phone: "+63 918 345 6789", address: "12 Katipunan Ave, Quezon City", workSetup: "Onsite", workLocation: "Quezon City, Philippines", docList: ["Transcript of Records (TOR)", "Certificate of Graduation", "PSA Birth Certificate"] },
    { id: "ALM-2020-0045", name: "Rose Aquino", program: "BSA", programFull: "Bachelor of Science in Accountancy", batch: 2020, submitted: "Jul 19, 2024", docs: 1, status: "Pending", email: "rose.aquino@email.com", phone: "+63 919 456 7890", address: "78 Taft Ave, Manila", workSetup: "Work from Home", workLocation: "Manila, Philippines", docList: ["Transcript of Records (TOR)"] },
    { id: "ALM-2022-0072", name: "Kevin Ramos", program: "BSIT", programFull: "Bachelor of Science in Information Technology", batch: 2022, submitted: "Jul 18, 2024", docs: 3, status: "Pending", email: "kevin.ramos@email.com", phone: "+63 920 567 8901", address: "34 Ortigas Ave, Pasig City", workSetup: "Hybrid", workLocation: "Pasig City, Philippines", docList: ["Transcript of Records (TOR)", "Certificate of Graduation", "Board Exam Certificate"] }
  ];

  var verifiedRecords = [
    { id: "ALM-2023-0400", name: "Julia Reyes", program: "BSIT", programFull: "Bachelor of Science in Information Technology", batch: 2023, submitted: "Jul 5, 2024", docs: 3, status: "Verified", email: "julia.reyes@email.com", phone: "+63 922 111 2222", address: "45 Rizal St, Makati City", workSetup: "Onsite", workLocation: "Makati City, Philippines", docList: ["Transcript of Records (TOR)", "Certificate of Graduation", "PSA Birth Certificate"] },
    { id: "ALM-2022-0380", name: "Rico Tan", program: "BSCS", programFull: "Bachelor of Science in Computer Science", batch: 2022, submitted: "Jul 4, 2024", docs: 2, status: "Verified", email: "rico.tan@email.com", phone: "+63 923 222 3333", address: "89 Ayala Blvd, Taguig City", workSetup: "Hybrid", workLocation: "Taguig City, Philippines", docList: ["Transcript of Records (TOR)", "Certificate of Graduation"] },
    { id: "ALM-2021-0350", name: "Ana Mendoza", program: "BSA", programFull: "Bachelor of Science in Accountancy", batch: 2021, submitted: "Jul 3, 2024", docs: 4, status: "Verified", email: "ana.mendoza@email.com", phone: "+63 924 333 4444", address: "67 Espana Blvd, Manila", workSetup: "Work from Home", workLocation: "Manila, Philippines", docList: ["Transcript of Records (TOR)", "Certificate of Graduation", "PSA Birth Certificate", "Board Exam Certificate"] }
  ];

  var activeTab = "pending";
  var currentPage = 1;
  var perPage = 10;

  function getActiveRecords() {
    return activeTab === "pending" ? pendingRecords : verifiedRecords;
  }

  function getInitials(fullName) {
    var parts = fullName.split(" ");
    if (parts.length >= 2) {
      return parts[0].charAt(0).toUpperCase() + parts[parts.length - 1].charAt(0).toUpperCase();
    }
    return parts[0].charAt(0).toUpperCase();
  }

  function renderTable() {
    var records = getActiveRecords();
    var start = (currentPage - 1) * perPage;
    var page = records.slice(start, start + perPage);
    var tbody = document.getElementById("recordsTableBody");
    var html = "";

    for (var i = 0; i < page.length; i++) {
      var r = page[i];
      var statusClass = r.status === "Pending"
        ? "bg-yellow-50 text-yellow-700 border-yellow-200"
        : "bg-green-50 text-green-700 border-green-200";
      var statusIcon = r.status === "Pending"
        ? '<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'
        : '<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>';

      html += '<tr class="border-b border-gray-100 hover:bg-gray-50/50">';
      html += '<td class="py-3 px-5"><input type="checkbox" class="row-check accent-blue-600 w-4 h-4 rounded" data-id="' + r.id + '" /></td>';
      html += '<td class="py-3 px-3 font-semibold text-gray-900">' + r.name + '</td>';
      html += '<td class="py-3 px-3 text-gray-500">' + r.id + '</td>';
      html += '<td class="py-3 px-3 text-gray-500">' + r.program + '</td>';
      html += '<td class="py-3 px-3 text-gray-500">' + r.batch + '</td>';
      html += '<td class="py-3 px-3 text-gray-500">' + r.submitted + '</td>';
      html += '<td class="py-3 px-3"><span class="flex items-center gap-1 text-gray-500"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' + r.docs + ' file' + (r.docs > 1 ? 's' : '') + '</span></td>';
      html += '<td class="py-3 px-3"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ' + statusClass + '">' + statusIcon + ' ' + r.status + '</span></td>';
      html += '<td class="py-3 px-3"><button class="view-btn px-3 py-1 text-[12px] font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition" data-id="' + r.id + '">View</button></td>';
      html += '</tr>';
    }
    tbody.innerHTML = html;

    var total = records.length;
    var totalPages = Math.max(1, Math.ceil(total / perPage));
    document.getElementById("showingText").textContent = "Showing " + (total > 0 ? start + 1 : 0) + "-" + Math.min(start + perPage, total) + " of " + total + " records";
    document.getElementById("prevBtn").disabled = currentPage <= 1;
    document.getElementById("nextBtn").disabled = currentPage >= totalPages;

    var pageInfoEl = document.getElementById("pageInfo");
    var pageHtml = "";
    for (var p = 1; p <= totalPages; p++) {
      if (p === currentPage) {
        pageHtml += '<button class="w-8 h-8 flex items-center justify-center rounded-lg text-[12px] font-semibold bg-blue-600 text-white">' + p + '</button>';
      } else {
        pageHtml += '<button class="page-num w-8 h-8 flex items-center justify-center rounded-lg text-[12px] font-medium text-gray-500 hover:bg-gray-100" data-page="' + p + '">' + p + '</button>';
      }
    }
    pageInfoEl.innerHTML = pageHtml;
  }

  function switchTab(tab) {
    activeTab = tab;
    currentPage = 1;
    var tabPending = document.getElementById("tabPending");
    var tabVerified = document.getElementById("tabVerified");
    if (tab === "pending") {
      tabPending.className = "tab-btn px-4 py-2 text-[13px] font-semibold rounded-lg bg-blue-600 text-white transition";
      tabVerified.className = "tab-btn px-4 py-2 text-[13px] font-semibold rounded-lg text-gray-500 hover:bg-gray-100 transition";
    } else {
      tabPending.className = "tab-btn px-4 py-2 text-[13px] font-semibold rounded-lg text-gray-500 hover:bg-gray-100 transition";
      tabVerified.className = "tab-btn px-4 py-2 text-[13px] font-semibold rounded-lg bg-blue-600 text-white transition";
    }
    renderTable();
  }

  function showListView() {
    document.getElementById("listView").classList.remove("hidden");
    document.getElementById("reviewView").classList.add("hidden");
  }

  function showReviewView(recordId) {
    var allRecords = pendingRecords.concat(verifiedRecords);
    var r = null;
    for (var i = 0; i < allRecords.length; i++) {
      if (allRecords[i].id === recordId) {
        r = allRecords[i];
        break;
      }
    }
    if (!r) return;

    document.getElementById("listView").classList.add("hidden");
    document.getElementById("reviewView").classList.remove("hidden");

    var statusClass = r.status === "Pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : "bg-green-50 text-green-700 border-green-200";
    var statusIcon = r.status === "Pending"
      ? '<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'
      : '<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>';

    var initials = getInitials(r.name);

    var docsHtml = "";
    for (var d = 0; d < r.docList.length; d++) {
      docsHtml += '<div class="flex items-center justify-between py-3' + (d < r.docList.length - 1 ? ' border-b border-gray-100' : '') + '">';
      docsHtml += '<div class="flex items-center gap-3">';
      docsHtml += '<div class="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center"><svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>';
      docsHtml += '<div><p class="text-[13px] font-semibold text-gray-900">' + r.docList[d] + '</p><p class="text-[11px] text-gray-400">Uploaded ' + r.submitted + '</p></div>';
      docsHtml += '</div>';
      docsHtml += '<button class="text-[12px] font-semibold text-blue-600 hover:text-blue-800">Preview</button>';
      docsHtml += '</div>';
    }

    var html = '';
    html += '<div class="mb-4"><p class="text-[12px] text-gray-400"><span class="cursor-pointer hover:text-blue-600 back-to-list">Verify Records</span> <span class="mx-1">\u203A</span> <span class="text-gray-600">' + r.name + '</span></p></div>';
    html += '<button class="back-to-list flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-blue-600 mb-5 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>Back to Verify Records</button>';

    html += '<div class="bg-white border border-gray-200 rounded-xl p-6 mb-5">';
    html += '<div class="flex items-center gap-4">';
    html += '<div class="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold">' + initials + '</div>';
    html += '<div><h2 class="text-xl font-bold text-gray-900">' + r.name + '</h2>';
    html += '<div class="flex items-center gap-2 mt-1"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ' + statusClass + '">' + statusIcon + ' ' + r.status + '</span>';
    html += '<span class="text-[12px] text-gray-400">' + r.id + '</span></div>';
    html += '</div></div></div>';

    html += '<div class="grid grid-cols-2 gap-5">';

    html += '<div class="bg-white border border-gray-200 rounded-xl p-6">';
    html += '<h3 class="text-[14px] font-bold text-gray-900 mb-4">Alumni Information</h3>';
    html += '<div class="grid grid-cols-2 gap-4">';
    var fields = [
      ["Full Name", r.name], ["Alumni ID", r.id],
      ["Degree Program", r.programFull], ["Batch / Year", r.batch],
      ["Email Address", r.email], ["Contact Number", r.phone],
      ["Address", r.address], ["Submitted", r.submitted],
      ["Work Setup", r.workSetup || "N/A"], ["Work Location", r.workLocation || "N/A"]
    ];
    for (var f = 0; f < fields.length; f++) {
      html += '<div><p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">' + fields[f][0] + '</p><p class="text-[13px] text-gray-800">' + fields[f][1] + '</p></div>';
    }
    html += '</div></div>';

    html += '<div class="bg-white border border-gray-200 rounded-xl p-6">';
    html += '<h3 class="text-[14px] font-bold text-gray-900 mb-4">Submitted Documents</h3>';
    html += docsHtml;
    html += '</div>';

    html += '</div>';

    document.getElementById("reviewContent").innerHTML = html;
  }

  document.addEventListener("click", function (e) {
    var viewBtn = e.target.closest(".view-btn");
    if (viewBtn) {
      showReviewView(viewBtn.getAttribute("data-id"));
      return;
    }
    if (e.target.closest(".back-to-list")) {
      showListView();
      return;
    }
  });

  document.getElementById("tabPending").addEventListener("click", function () { switchTab("pending"); });
  document.getElementById("tabVerified").addEventListener("click", function () { switchTab("verified"); });

  document.getElementById("prevBtn").addEventListener("click", function () {
    if (currentPage > 1) { currentPage--; renderTable(); }
  });
  document.getElementById("nextBtn").addEventListener("click", function () {
    var totalPages = Math.ceil(getActiveRecords().length / perPage);
    if (currentPage < totalPages) { currentPage++; renderTable(); }
  });
  document.getElementById("pageInfo").addEventListener("click", function (e) {
    var btn = e.target.closest(".page-num");
    if (btn) { currentPage = parseInt(btn.getAttribute("data-page")); renderTable(); }
  });

  document.getElementById("selectAll").addEventListener("change", function () {
    var checked = this.checked;
    document.querySelectorAll(".row-check").forEach(function (cb) { cb.checked = checked; });
  });

  var searchInput = document.getElementById("searchInput");
  var searchDropdown = document.getElementById("searchDropdown");
  var notifBtn = document.getElementById("notifBtn");
  var notifDropdown = document.getElementById("notifDropdown");
  var avatarBtn = document.getElementById("avatarBtn");
  var userDropdown = document.getElementById("userDropdown");
  var markAllReadBtn = document.getElementById("markAllReadBtn");
  var logoutBtn = document.getElementById("logoutBtn");

  function closeAllDropdowns() {
    if (searchDropdown) searchDropdown.classList.add("hidden");
    if (notifDropdown) notifDropdown.classList.add("hidden");
    if (userDropdown) userDropdown.classList.add("hidden");
  }

  if (searchInput) {
    searchInput.addEventListener("focus", function () {
      closeAllDropdowns();
      searchDropdown.classList.remove("hidden");
    });
  }
  if (notifBtn) {
    notifBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = !notifDropdown.classList.contains("hidden");
      closeAllDropdowns();
      if (!open) notifDropdown.classList.remove("hidden");
    });
  }
  if (avatarBtn) {
    avatarBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = !userDropdown.classList.contains("hidden");
      closeAllDropdowns();
      if (!open) userDropdown.classList.remove("hidden");
    });
  }
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      document.querySelectorAll(".notif-dot").forEach(function (d) { d.style.display = "none"; });
      var badge = document.getElementById("notifBadge");
      if (badge) badge.style.display = "none";
    });
  }
  document.getElementById('logoutBtn').addEventListener('click',function(){if(confirm('Are you sure you want to logout?')){alert('You have been logged out.');window.location.href='../index.html'}});

  document.addEventListener("click", function (e) {
    if (searchInput && !searchInput.contains(e.target) && searchDropdown && !searchDropdown.contains(e.target)) searchDropdown.classList.add("hidden");
    if (notifDropdown && !notifDropdown.contains(e.target) && notifBtn && !notifBtn.contains(e.target)) notifDropdown.classList.add("hidden");
    if (userDropdown && !userDropdown.contains(e.target) && avatarBtn && !avatarBtn.contains(e.target)) userDropdown.classList.add("hidden");
  });

  renderTable();
})();

