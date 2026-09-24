(function() {
  // --- Reports Data ---
  var reports = [
    { name: "Comprehensive Tracer Report \u2013 All Programs 2019\u20132024", type: "Comprehensive", date: "Aug 10, 2025", format: "PDF", size: "3.2 MB" },
    { name: "Employment Summary \u2013 BSIT 2020\u20132023", type: "Employment", date: "Jul 28, 2025", format: "PDF", size: "1.8 MB" },
    { name: "Competency Analysis \u2013 BS Accountancy 2021\u20132024", type: "Competency", date: "Jul 15, 2025", format: "PDF", size: "2.1 MB" },
    { name: "Curriculum Feedback \u2013 All Programs 2022\u20132024", type: "Curriculum", date: "Jun 30, 2025", format: "PDF", size: "1.5 MB" }
  ];

  // --- Format Badge ---
  function formatBadge(fmt) {
    return '<span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold text-white" style="background:rgba(59,130,246,0.5)">' + fmt + '</span>';
  }

  // --- Render Reports Table ---
  function renderReports(filter) {
    var tbody = document.getElementById("reportsTableBody");
    var filtered = reports.filter(function(r) {
      return !filter || r.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" class="py-10 text-center text-[13px] text-gray-400">No reports found.</td></tr>';
      return;
    }
    var html = "";
    for (var i = 0; i < filtered.length; i++) {
      var r = filtered[i];
      var idx = reports.indexOf(r);
      html += '<tr class="border-b border-gray-50 hover:bg-gray-50">';
      html += '<td class="py-3 px-3 text-[13px] text-gray-900 font-medium">' + r.name + '</td>';
      html += '<td class="py-3 px-3 text-[13px] text-gray-500">' + r.type + '</td>';
      html += '<td class="py-3 px-3 text-[13px] text-gray-500">' + r.date + '</td>';
      html += '<td class="py-3 px-3">' + formatBadge(r.format) + '</td>';
      html += '<td class="py-3 px-3 text-[13px] text-gray-500">' + r.size + '</td>';
      html += '<td class="py-3 px-3 text-right"><div class="flex items-center justify-end gap-1">';
      html += '<button data-action="downloadReport" data-idx="' + idx + '" class="p-1.5 rounded hover:bg-gray-100" title="Download"><svg class="w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></button>';
      html += '<button data-action="viewReport" data-idx="' + idx + '" class="p-1.5 rounded hover:bg-gray-100" title="View"><svg class="w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>';
      html += '<button data-action="deleteReport" data-idx="' + idx + '" class="p-1.5 rounded hover:bg-gray-100" title="Delete"><svg class="w-4 h-4 text-red-400 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg></button>';
      html += '</div></td>';
      html += '</tr>';
    }
    tbody.innerHTML = html;
  }

  // --- Toast ---
  function showToast(msg) {
    var toast = document.getElementById("toast");
    document.getElementById("toastMsg").textContent = msg;
    toast.classList.remove("hidden");
    setTimeout(function() { toast.classList.add("hidden"); }, 4000);
  }

  // --- View Modal ---
  function showViewModal(r) {
    var body = document.getElementById("viewModalBody");
    body.innerHTML =
      '<div class="flex justify-between"><span class="text-gray-500">Name:</span><span class="font-semibold text-gray-900">' + r.name + '</span></div>' +
      '<div class="flex justify-between"><span class="text-gray-500">Type:</span><span>' + r.type + '</span></div>' +
      '<div class="flex justify-between"><span class="text-gray-500">Date:</span><span>' + r.date + '</span></div>' +
      '<div class="flex justify-between"><span class="text-gray-500">Format:</span>' + formatBadge(r.format) + '</div>' +
      '<div class="flex justify-between"><span class="text-gray-500">Size:</span><span>' + r.size + '</span></div>';
    document.getElementById("viewModal").classList.remove("hidden");
  }
  function closeViewModal() {
    document.getElementById("viewModal").classList.add("hidden");
  }

  // --- Attached File State ---
  var attachedFile = null;

  // --- Attach Button ---
  document.getElementById("attachBtn").addEventListener("click", function() {
    document.getElementById("uploadFileInput").click();
  });

  // --- File Selected ---
  document.getElementById("uploadFileInput").addEventListener("change", function() {
    var file = this.files[0];
    if (!file) return;
    attachedFile = file;
    document.getElementById("attachedFileName").textContent = file.name;
    document.getElementById("attachedFileName").classList.remove("text-gray-400", "italic");
    document.getElementById("attachedFileName").classList.add("text-gray-900", "font-medium");
    document.getElementById("removeFileBtn").classList.remove("hidden");
  });

  // --- Remove Attached File ---
  document.getElementById("removeFileBtn").addEventListener("click", function() {
    attachedFile = null;
    document.getElementById("uploadFileInput").value = "";
    document.getElementById("attachedFileName").textContent = "No file attached";
    document.getElementById("attachedFileName").classList.add("text-gray-400", "italic");
    document.getElementById("attachedFileName").classList.remove("text-gray-900", "font-medium");
    this.classList.add("hidden");
  });

  // --- Generate Report ---
  document.getElementById("generateBtn").addEventListener("click", function() {
    var type = document.getElementById("reportType");
    var typeName = type.options[type.selectedIndex].text;
    var program = document.getElementById("programFilter");
    var programName = program.options[program.selectedIndex].text;
    var from = document.getElementById("batchFrom");
    var fromVal = from.options[from.selectedIndex].text;
    var to = document.getElementById("batchTo");
    var toVal = to.options[to.selectedIndex].text;

    var fileSize = attachedFile
      ? (attachedFile.size / (1024 * 1024)).toFixed(1) + " MB"
      : (Math.random() * 4 + 1).toFixed(1) + " MB";

    var newReport = {
      name: typeName + " \u2013 " + programName + " " + fromVal + "\u2013" + toVal,
      type: typeName.split(" ")[0],
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      format: "PDF",
      size: fileSize
    };
    reports.unshift(newReport);
    renderReports("");
    document.getElementById("filterInput").value = "";

    var msg = attachedFile
      ? "Report generated with " + attachedFile.name
      : "Report generated: " + newReport.name;
    showToast(msg);

    // Reset attached file after generating
    attachedFile = null;
    document.getElementById("uploadFileInput").value = "";
    document.getElementById("attachedFileName").textContent = "No file attached";
    document.getElementById("attachedFileName").classList.add("text-gray-400", "italic");
    document.getElementById("attachedFileName").classList.remove("text-gray-900", "font-medium");
    document.getElementById("removeFileBtn").classList.add("hidden");
  });

  // --- Filter Input ---
  document.getElementById("filterInput").addEventListener("input", function() {
    renderReports(this.value);
  });

  // --- Event Delegation ---
  document.addEventListener("click", function(e) {
    var btn = e.target.closest("[data-action]");
    if (!btn) return;
    var action = btn.getAttribute("data-action");
    var idx = parseInt(btn.getAttribute("data-idx"), 10);

    if (action === "downloadReport") {
      showToast("Downloading: " + reports[idx].name);
    } else if (action === "viewReport") {
      showViewModal(reports[idx]);
    } else if (action === "deleteReport") {
      if (confirm("Are you sure you want to delete this report?\n\n" + reports[idx].name)) {
        reports.splice(idx, 1);
        renderReports(document.getElementById("filterInput").value);
        showToast("Report deleted.");
      }
    } else if (action === "closeViewModal") {
      closeViewModal();
    } else if (action === "dlFromModal") {
      showToast("Downloading report...");
      closeViewModal();
    }
  });

  // --- Initial Render ---
  renderReports("");

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
    var dots = document.querySelectorAll(".notif-dot");
    dots.forEach(function(d) { d.style.display = "none"; });
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
