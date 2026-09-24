(function () {

  // =============================================
  // GROUP CHATS DATA
  // =============================================
  var groupChats = [
    {
      id: "gc-1",
      name: "Tech Careers & Industry Trends",
      topic: "Technology",
      icon: "laptop",
      color: "blue",
      description: "A community for IT, CS, and CpE alumni to share job opportunities, discuss tech trends, and network with industry professionals.",
      members: 186,
      joined: false,
      membersList: ["Maria Santos", "Jose Reyes", "Miguel Torres", "Daniel Fernandez", "Kevin Ramos", "Marco Tan"],
      events: [
        { title: "Tech Industry Meetup — AI & Cloud Careers", date: "October 15, 2026", time: "6:00 PM - 9:00 PM", venue: "Online via Zoom", status: "Upcoming" },
        { title: "Resume Workshop for Tech Roles", date: "November 5, 2026", time: "2:00 PM - 4:00 PM", venue: "University IT Lab", status: "Upcoming" }
      ],
      announcements: [
        { title: "Tech Meetup: AI & Cloud Careers — Open to All Alumni", body: "The Tech Careers group chat is hosting a virtual meetup on AI and cloud career paths. All alumni are welcome to join, even if you're not in the group chat.", posted: "August 28, 2026" },
        { title: "Resume Workshop Announced by Tech Careers Group", body: "Brush up your tech resume! The group is organizing a hands-on workshop at the University IT Lab. Registration is free for verified alumni.", posted: "August 20, 2026" }
      ]
    },
    {
      id: "gc-2",
      name: "Business & Entrepreneurship Hub",
      topic: "Business",
      icon: "briefcase",
      color: "orange",
      description: "For BSBA, BSA, and entrepreneurial alumni to share business ideas, funding opportunities, startup stories, and mentorship programs.",
      members: 124,
      joined: true,
      membersList: ["Ana Garcia", "Isabella Cruz", "Rose Aquino", "Julia Reyes"],
      events: [
        { title: "Startup Pitch Night — Alumni Edition", date: "September 20, 2026", time: "5:00 PM - 8:00 PM", venue: "University Conference Hall", status: "Upcoming" }
      ],
      announcements: [
        { title: "Startup Pitch Night — Alumni Entrepreneurs Welcome!", body: "The Business & Entrepreneurship group is hosting a pitch night where alumni startups can present to mentors and investors. Open to all batch years.", posted: "September 1, 2026" }
      ]
    },
    {
      id: "gc-3",
      name: "Education & Teaching Alumni",
      topic: "Education",
      icon: "book",
      color: "green",
      description: "A space for BSED graduates and education professionals to discuss teaching methods, DepEd updates, certifications, and career growth.",
      members: 78,
      joined: false,
      membersList: ["Rafael Villanueva", "Ana Mendoza"],
      events: [
        { title: "DepEd Policy Update Webinar", date: "October 8, 2026", time: "10:00 AM - 12:00 PM", venue: "Online via Google Meet", status: "Upcoming" }
      ],
      announcements: [
        { title: "DepEd Policy Webinar — From Education Alumni Group", body: "The Education & Teaching group chat is hosting a webinar on the latest DepEd policy changes. All education alumni and current teachers are invited.", posted: "September 5, 2026" }
      ]
    },
    {
      id: "gc-4",
      name: "Hospitality & Tourism Network",
      topic: "Hospitality",
      icon: "globe",
      color: "teal",
      description: "Connect with BSHRT alumni working in hotels, travel agencies, restaurants, and event management across the Philippines and abroad.",
      members: 52,
      joined: false,
      membersList: ["Sofia Aquino", "Rico Tan"],
      events: [],
      announcements: []
    },
    {
      id: "gc-5",
      name: "Alumni Wellness & Sports",
      topic: "Lifestyle",
      icon: "heart",
      color: "pink",
      description: "A fun community for alumni who love fitness, mental wellness, weekend runs, basketball leagues, and other recreational activities.",
      members: 95,
      joined: true,
      membersList: ["Carlos Mendoza", "Patricia Lim", "James Ocampo", "Nicole dela Rosa"],
      events: [
        { title: "Alumni Fun Run 2026", date: "November 15, 2026", time: "5:00 AM - 9:00 AM", venue: "University Main Campus", status: "Upcoming" },
        { title: "Mental Wellness Check-In Session", date: "October 22, 2026", time: "3:00 PM - 5:00 PM", venue: "Online via Zoom", status: "Upcoming" }
      ],
      announcements: [
        { title: "Alumni Fun Run 2026 — Registration Now Open!", body: "The Wellness & Sports group is organizing the annual alumni fun run. Routes: 3K, 5K, and 10K. Free t-shirt for first 200 registrants. All alumni and their families are welcome!", posted: "September 8, 2026" }
      ]
    }
  ];

  // =============================================
  // SURVEYS & REMINDERS DATA
  // =============================================
  var announcements = [
    { id: 1, type: "survey", status: "Sent", title: "Graduate Tracer Survey 2024 — Now Open", body: "The annual Graduate Tracer Survey is now open. All alumni from Batch 2019\u20132023 are requested to complete the online survey. Your responses help the university improve curriculum and support services for future graduates.", date: "August 10, 2026", audience: "All Alumni", recipients: 2456, opened: 1950 },
    { id: 2, type: "reminder", status: "Sent", title: "Profile Update Reminder — Complete Your Alumni Profile", body: "Reminder: Please update your alumni profile with your latest employment information, contact details, and certifications. Keeping your profile current helps us connect you with relevant opportunities and maintain accurate institutional data.", date: "August 5, 2026", audience: "All Alumni", recipients: 2456, opened: 1680 },
    { id: 3, type: "survey", status: "Scheduled", title: "Employer Satisfaction Survey — Partnered Companies", body: "We are reaching out to our industry partners to assess the performance and preparedness of our graduates in the workplace. This feedback helps improve academic programs and industry alignment.", date: "August 2, 2026", audience: "BS Information Technology" },
    { id: 4, type: "reminder", status: "Draft", title: "Deadline: Submit Verification Documents by August 30", body: "Newly registered alumni are reminded to submit required verification documents (TOR, Certificate of Graduation, and valid ID) before August 30, 2026. Unverified accounts will be flagged for review.", date: "Draft", audience: "Unverified Alumni" }
  ];

  // =============================================
  // ICON HELPERS
  // =============================================
  var iconSvgs = {
    laptop: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 17h20"/></svg>',
    briefcase: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
    book: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/></svg>',
    globe: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    heart: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>'
  };

  var colorClasses = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50", badge: "bg-blue-600" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200", light: "bg-orange-50", badge: "bg-orange-600" },
    green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200", light: "bg-green-50", badge: "bg-green-600" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200", light: "bg-teal-50", badge: "bg-teal-600" },
    pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200", light: "bg-pink-50", badge: "bg-pink-600" }
  };

  // =============================================
  // RENDER GROUP CHAT CARDS
  // =============================================
  function renderGroupChats() {
    var container = document.getElementById("groupChatCards");
    if (!container) return;
    var html = "";
    for (var i = 0; i < groupChats.length; i++) {
      var gc = groupChats[i];
      var c = colorClasses[gc.color];
      var icon = iconSvgs[gc.icon] || iconSvgs.laptop;
      var joinedClass = gc.joined ? "bg-gray-100 text-gray-500 border-gray-200" : "bg-blue-600 text-white hover:bg-blue-700";
      var joinedText = gc.joined ? "Joined" : "Join Chat";
      var joinedIcon = gc.joined
        ? '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/></svg>'
        : '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>';

      html += '<div class="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition cursor-pointer group" data-gc-id="' + gc.id + '">';
      html += '<div class="flex items-start justify-between mb-3">';
      html += '<div class="w-10 h-10 rounded-xl ' + c.bg + ' ' + c.text + ' flex items-center justify-center shrink-0">' + icon + '</div>';
      html += '<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ' + c.light + ' ' + c.text + '">' + gc.topic + '</span>';
      html += '</div>';
      html += '<h3 class="text-[14px] font-bold text-gray-900 group-hover:text-blue-600 transition">' + gc.name + '</h3>';
      html += '<p class="text-[12px] text-gray-500 mt-1 line-clamp-2">' + gc.description + '</p>';
      html += '<div class="flex items-center gap-3 mt-3 text-[11px] text-gray-400">';
      html += '<span class="flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' + gc.members + ' members</span>';
      html += '<span class="flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' + gc.events.length + ' event' + (gc.events.length !== 1 ? 's' : '') + '</span>';
      html += '</div>';
      html += '<div class="flex items-center gap-2 mt-4">';
      html += '<button class="gc-view-btn flex-1 px-3 py-2 text-[12px] font-semibold text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition" data-gc-id="' + gc.id + '">View Details</button>';
      html += '<button class="gc-join-btn px-3 py-2 text-[12px] font-semibold rounded-lg border transition flex items-center gap-1.5 ' + joinedClass + '" data-gc-id="' + gc.id + '">' + joinedIcon + joinedText + '</button>';
      html += '</div>';
      html += '</div>';
    }
    container.innerHTML = html;
  }

  // =============================================
  // RENDER GROUP CHAT ANNOUNCEMENTS
  // =============================================
  function renderGroupAnnouncements() {
    var container = document.getElementById("groupAnnouncementCards");
    if (!container) return;
    var allAnnouncements = [];
    for (var i = 0; i < groupChats.length; i++) {
      var gc = groupChats[i];
      for (var j = 0; j < gc.announcements.length; j++) {
        allAnnouncements.push({
          groupName: gc.name,
          groupColor: gc.color,
          groupIcon: gc.icon,
          groupId: gc.id,
          title: gc.announcements[j].title,
          body: gc.announcements[j].body,
          posted: gc.announcements[j].posted
        });
      }
    }

    if (allAnnouncements.length === 0) {
      container.innerHTML = '<p class="text-[13px] text-gray-400 py-4">No group chat announcements yet.</p>';
      return;
    }

    var html = "";
    for (var k = 0; k < allAnnouncements.length; k++) {
      var a = allAnnouncements[k];
      var c = colorClasses[a.groupColor];
      html += '<div class="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition">';
      html += '<div class="flex items-start justify-between mb-2">';
      html += '<div class="flex items-center gap-2">';
      html += '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ' + c.light + ' ' + c.text + ' ' + c.border + '">';
      html += '<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>';
      html += 'Group Chat</span>';
      html += '<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-200">Posted</span>';
      html += '</div>';
      html += '<span class="text-[12px] text-gray-400">' + a.posted + '</span>';
      html += '</div>';
      html += '<h4 class="text-[14px] font-bold text-gray-900">' + a.title + '</h4>';
      html += '<p class="text-[13px] text-gray-500 mt-1">' + a.body + '</p>';
      html += '<div class="flex items-center gap-2 mt-3">';
      html += '<div class="w-5 h-5 rounded ' + c.bg + ' ' + c.text + ' flex items-center justify-center shrink-0"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>';
      html += '<span class="text-[11px] text-gray-400">From: <span class="font-semibold text-gray-600">' + a.groupName + '</span></span>';
      html += '</div>';
      html += '</div>';
    }
    container.innerHTML = html;
  }

  // =============================================
  // RENDER SURVEYS & REMINDERS
  // =============================================
  function renderAnnouncements() {
    var container = document.getElementById("announcementCards");
    if (!container) return;
    var html = "";
    for (var i = 0; i < announcements.length; i++) {
      var a = announcements[i];
      var typeBadge = a.type === "survey"
        ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-200">Survey</span>'
        : '<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200">Reminder</span>';
      var statusBadge = '';
      if (a.status === "Sent") statusBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-50 text-green-700 border border-green-200">Sent</span>';
      else if (a.status === "Scheduled") statusBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-50 text-orange-600 border border-orange-200">Scheduled</span>';
      else statusBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500 border border-gray-200">Draft</span>';

      html += '<div class="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition">';
      html += '<div class="flex items-start justify-between mb-1.5">';
      html += '<div class="flex items-center gap-2">' + typeBadge + statusBadge + '</div>';
      html += '<span class="text-[12px] text-gray-400">' + a.date + '</span>';
      html += '</div>';
      html += '<h4 class="text-[14px] font-bold text-gray-900">' + a.title + '</h4>';
      html += '<p class="text-[13px] text-gray-500 mt-1">' + a.body + '</p>';
      if (a.recipients) {
        html += '<p class="text-[11px] text-gray-400 mt-2">To: ' + a.audience + ' \u00B7 ' + a.recipients.toLocaleString() + ' recipients \u00B7 ' + (a.opened || 0).toLocaleString() + ' opened</p>';
      }
      html += '</div>';
    }
    container.innerHTML = html;
  }

  // =============================================
  // GROUP CHAT DETAIL MODAL
  // =============================================
  function openGroupChatModal(gcId) {
    var gc = null;
    for (var i = 0; i < groupChats.length; i++) {
      if (groupChats[i].id === gcId) { gc = groupChats[i]; break; }
    }
    if (!gc) return;

    var c = colorClasses[gc.color];
    var icon = iconSvgs[gc.icon] || iconSvgs.laptop;

    document.getElementById("gcModalIcon").className = "w-10 h-10 rounded-xl flex items-center justify-center " + c.bg + " " + c.text;
    document.getElementById("gcModalIcon").innerHTML = icon;
    document.getElementById("gcModalTitle").textContent = gc.name;
    document.getElementById("gcModalMeta").textContent = gc.members + " members \u00B7 " + gc.topic;
    document.getElementById("gcModalDesc").textContent = gc.description;

    // Events
    var eventsHtml = "";
    if (gc.events.length === 0) {
      eventsHtml = '<p class="text-[12px] text-gray-400 py-2">No upcoming events in this group.</p>';
    } else {
      for (var j = 0; j < gc.events.length; j++) {
        var ev = gc.events[j];
        eventsHtml += '<div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">';
        eventsHtml += '<div class="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>';
        eventsHtml += '<div><p class="text-[13px] font-semibold text-gray-900">' + ev.title + '</p>';
        eventsHtml += '<p class="text-[11px] text-gray-500 mt-0.5">' + ev.date + ' \u00B7 ' + ev.venue + ' \u00B7 ' + ev.time + '</p>';
        eventsHtml += '<span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-blue-50 text-blue-600 border border-blue-200">' + ev.status + '</span>';
        eventsHtml += '</div></div>';
      }
    }
    document.getElementById("gcModalEvents").innerHTML = eventsHtml;

    // Members
    var membersHtml = "";
    for (var m = 0; m < gc.membersList.length; m++) {
      var name = gc.membersList[m];
      var initials = name.split(" ").map(function(n) { return n.charAt(0); }).join("").toUpperCase();
      membersHtml += '<div class="flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 rounded-lg">';
      membersHtml += '<div class="w-6 h-6 rounded-full ' + c.badge + ' flex items-center justify-center text-white text-[9px] font-bold">' + initials + '</div>';
      membersHtml += '<span class="text-[12px] text-gray-700">' + name + '</span>';
      membersHtml += '</div>';
    }
    if (gc.members > gc.membersList.length) {
      membersHtml += '<div class="flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 rounded-lg">';
      membersHtml += '<span class="text-[11px] text-gray-400">+' + (gc.members - gc.membersList.length) + ' more</span>';
      membersHtml += '</div>';
    }
    document.getElementById("gcModalMembers").innerHTML = membersHtml;

    // Announcements
    var announcementsHtml = "";
    if (gc.announcements.length === 0) {
      announcementsHtml = '<p class="text-[12px] text-gray-400 py-2">No announcements posted from this group yet.</p>';
    } else {
      for (var a = 0; a < gc.announcements.length; a++) {
        var ann = gc.announcements[a];
        announcementsHtml += '<div class="p-3 bg-purple-50 border border-purple-100 rounded-lg">';
        announcementsHtml += '<div class="flex items-center justify-between mb-1">';
        announcementsHtml += '<span class="text-[10px] font-semibold text-purple-600 flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>Posted to Announcements</span>';
        announcementsHtml += '<span class="text-[10px] text-gray-400">' + ann.posted + '</span>';
        announcementsHtml += '</div>';
        announcementsHtml += '<p class="text-[12px] font-semibold text-gray-900">' + ann.title + '</p>';
        announcementsHtml += '<p class="text-[11px] text-gray-500 mt-0.5">' + ann.body + '</p>';
        announcementsHtml += '</div>';
      }
    }
    document.getElementById("gcModalAnnouncements").innerHTML = announcementsHtml;

    // Join button state
    var joinBtn = document.getElementById("gcModalJoinBtn");
    joinBtn.setAttribute("data-gc-id", gc.id);
    if (gc.joined) {
      joinBtn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/></svg>Joined';
      joinBtn.className = "px-5 py-2.5 bg-gray-100 text-gray-500 border border-gray-200 rounded-lg text-sm font-semibold flex items-center gap-2 cursor-default";
    } else {
      joinBtn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>Join Group Chat';
      joinBtn.className = "px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold flex items-center gap-2";
    }

    openModal("groupChatDetailModal");
  }

  // =============================================
  // JOIN GROUP CHAT
  // =============================================
  function joinGroupChat(gcId) {
    for (var i = 0; i < groupChats.length; i++) {
      if (groupChats[i].id === gcId) {
        groupChats[i].joined = true;
        groupChats[i].members += 1;
        break;
      }
    }
    closeModal("groupChatDetailModal");
    renderGroupChats();
    showToast("You joined the group chat! Events will appear in announcements.");
  }

  // =============================================
  // EVENT DELEGATION
  // =============================================
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-action='openModal']")) {
      openModal("newAnnouncementModal");
      return;
    }
    if (e.target.closest("[data-action='closeModal']")) {
      closeModal("newAnnouncementModal");
      return;
    }
    if (e.target.closest("[data-action='closeGcModal']")) {
      closeModal("groupChatDetailModal");
      return;
    }
    if (e.target.closest("[data-action='submitAnnouncement']")) {
      var title = document.getElementById("modalTitle").value;
      if (!title.trim()) { alert("Enter a title."); return; }
      closeModal("newAnnouncementModal");
      showToast("Announcement sent successfully!");
      document.getElementById("modalTitle").value = "";
      document.getElementById("modalBody").value = "";
      return;
    }
    var viewBtn = e.target.closest(".gc-view-btn");
    if (viewBtn) {
      openGroupChatModal(viewBtn.getAttribute("data-gc-id"));
      return;
    }
    var gcCard = e.target.closest("[data-gc-id]");
    if (gcCard && !e.target.closest(".gc-join-btn") && !e.target.closest(".gc-view-btn") && gcCard.classList.contains("group")) {
      openGroupChatModal(gcCard.getAttribute("data-gc-id"));
      return;
    }
    var joinBtn = e.target.closest(".gc-join-btn");
    if (joinBtn) {
      var id = joinBtn.getAttribute("data-gc-id");
      var gc = groupChats.find(function(g) { return g.id === id; });
      if (gc && !gc.joined) { joinGroupChat(id); }
      return;
    }
    if (e.target.closest("#gcModalJoinBtn")) {
      var gcId = document.getElementById("gcModalJoinBtn").getAttribute("data-gc-id");
      var gcObj = groupChats.find(function(g) { return g.id === gcId; });
      if (gcObj && !gcObj.joined) { joinGroupChat(gcId); }
      return;
    }
  });

  // =============================================
  // MODAL SEND OPTION TOGGLE
  // =============================================
  var modalSendOption = document.getElementById("modalSendOption");
  if (modalSendOption) {
    modalSendOption.addEventListener("change", function () {
      var wrap = document.getElementById("scheduleDateWrap");
      if (this.value === "schedule") wrap.classList.remove("hidden");
      else wrap.classList.add("hidden");
    });
  }

  // =============================================
  // HEADER DROPDOWNS
  // =============================================
  document.getElementById('avatarBtn').addEventListener('click', function () { closeAll(); document.getElementById('userDropdown').classList.toggle('hidden'); });
  document.getElementById('notifBtn').addEventListener('click', function () { closeAll(); document.getElementById('notifDropdown').classList.toggle('hidden'); });
  document.getElementById('markAllReadBtn').addEventListener('click', function () { document.querySelectorAll('.notif-dot').forEach(function (d) { d.classList.add('hidden'); }); document.getElementById('notifBadge').classList.add('hidden'); });
  document.getElementById('searchInput').addEventListener('focus', function () { closeAll(); document.getElementById('searchDropdown').classList.remove('hidden'); });
  function closeAll() { document.getElementById('userDropdown').classList.add('hidden'); document.getElementById('notifDropdown').classList.add('hidden'); document.getElementById('searchDropdown').classList.add('hidden'); }
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#avatarBtn') && !e.target.closest('#userDropdown')) document.getElementById('userDropdown').classList.add('hidden');
    if (!e.target.closest('#notifBtn') && !e.target.closest('#notifDropdown')) document.getElementById('notifDropdown').classList.add('hidden');
    if (!e.target.closest('#searchContainer')) document.getElementById('searchDropdown').classList.add('hidden');
  });
  document.getElementById('logoutBtn').addEventListener('click', function () { if (confirm('Are you sure you want to logout?')) { alert('You have been logged out.'); window.location.href = '../index.html'; } });

  // =============================================
  // MODAL HELPERS
  // =============================================
  function openModal(id) { document.getElementById(id).classList.add('active'); }
  function closeModal(id) { document.getElementById(id).classList.remove('active'); }
  document.querySelectorAll('.modal-overlay').forEach(function (m) { m.addEventListener('click', function (e) { if (e.target === m) m.classList.remove('active'); }); });
  function showToast(msg) { var t = document.getElementById('successToast'); document.getElementById('toastMsg').textContent = msg; t.classList.remove('hidden'); setTimeout(function () { t.classList.add('hidden'); }, 3000); }

  // =============================================
  // INITIAL RENDER
  // =============================================
  renderAnnouncements();
  renderGroupChats();
  renderGroupAnnouncements();

})();
