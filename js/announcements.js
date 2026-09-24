// ===== CLOSE ALL DROPDOWNS =====
function closeAllDropdowns() {
  document.getElementById('notifDropdown').classList.add('hidden');
  document.getElementById('userDropdown').classList.add('hidden');
  document.getElementById('searchDropdown').classList.add('hidden');
}

// ===== NOTIFICATION BELL TOGGLE =====
document.getElementById('notifBtn').addEventListener('click', function(e) {
  e.stopPropagation();
  var dd = document.getElementById('notifDropdown');
  var wasHidden = dd.classList.contains('hidden');
  closeAllDropdowns();
  if (wasHidden) dd.classList.remove('hidden');
});

// ===== AVATAR TOGGLE =====
document.getElementById('avatarBtn').addEventListener('click', function(e) {
  e.stopPropagation();
  var dd = document.getElementById('userDropdown');
  var wasHidden = dd.classList.contains('hidden');
  closeAllDropdowns();
  if (wasHidden) dd.classList.remove('hidden');
});

// ===== SEARCH INPUT TOGGLE =====
document.getElementById('searchInput').addEventListener('focus', function() {
  closeAllDropdowns();
  document.getElementById('searchDropdown').classList.remove('hidden');
});

// ===== CLICK OUTSIDE TO CLOSE =====
document.addEventListener('click', function(e) {
  if (!e.target.closest('#notifWrap')) document.getElementById('notifDropdown').classList.add('hidden');
  if (!e.target.closest('#avatarBtn') && !e.target.closest('#userDropdown')) document.getElementById('userDropdown').classList.add('hidden');
  if (!e.target.closest('#searchContainer')) document.getElementById('searchDropdown').classList.add('hidden');
});

// ===== MARK ALL READ =====
document.getElementById('markAllReadBtn').addEventListener('click', function() {
  document.querySelectorAll('.notif-dot').forEach(function(d) { d.classList.add('hidden'); });
  document.getElementById('notifBadge').classList.add('hidden');
});

// ===== LOGOUT =====
document.getElementById('logoutBtn').addEventListener('click', function() {
  if (confirm('Are you sure you want to logout?')) {
    alert('You have been logged out.');
    window.location.href = '../index.html';
  }
});

// ===== TOAST HELPER =====
function showToast(msg) {
  var t = document.getElementById('successToast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.remove('hidden');
  setTimeout(function() { t.classList.add('hidden'); }, 3000);
}

// ===== SIDEBAR TOGGLE (MOBILE) =====
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('-translate-x-full');
  document.getElementById('sidebarOverlay').classList.toggle('hidden');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.add('-translate-x-full');
  document.getElementById('sidebarOverlay').classList.add('hidden');
}
document.querySelectorAll('#sidebar nav a').forEach(function(a) {
  a.addEventListener('click', function() { if (window.innerWidth < 1024) closeSidebar(); });
});

// ===== MODAL HELPERS =====
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }
document.querySelectorAll('.modal-overlay').forEach(function(m) {
  m.addEventListener('click', function(e) { if (e.target === m) m.classList.remove('active'); });
});

// ===== GROUP CHAT DATA =====
var groupChats = [
  {
    id:"gc-1", name:"Tech Careers & Industry Trends", topic:"Technology", icon:"laptop", color:"blue",
    description:"A community for IT, CS, and CpE alumni to share job opportunities, discuss tech trends, and network with industry professionals.",
    members:186, joined:false,
    membersList:["Maria Santos","Jose Reyes","Miguel Torres","Daniel Fernandez","Kevin Ramos","Marco Tan"],
    events:[
      {title:"Tech Industry Meetup — AI & Cloud Careers",date:"October 15, 2026",time:"6:00 PM - 9:00 PM",venue:"Online via Zoom"},
      {title:"Resume Workshop for Tech Roles",date:"November 5, 2026",time:"2:00 PM - 4:00 PM",venue:"University IT Lab"}
    ],
    previewMessages:[
      {author:"Maria Santos",text:"Anyone attending the AI meetup next month?",time:"Sep 1, 10:30 AM",color:"bg-blue-600"},
      {author:"Jose Reyes",text:"Yes! Already registered. Super excited for the cloud track.",time:"Sep 1, 10:45 AM",color:"bg-red-500"},
      {author:"Miguel Torres",text:"Same here! Should we organize a carpool?",time:"Sep 1, 11:02 AM",color:"bg-green-600"}
    ]
  },
  {
    id:"gc-2", name:"Business & Entrepreneurship Hub", topic:"Business", icon:"briefcase", color:"orange",
    description:"For BSBA, BSA, and entrepreneurial alumni to share business ideas, funding opportunities, startup stories, and mentorship programs.",
    members:124, joined:true,
    membersList:["Ana Garcia","Isabella Cruz","Rose Aquino","Julia Reyes","Miguel Torres","Sofia Villanueva"],
    events:[
      {title:"Startup Pitch Night — Alumni Edition",date:"September 20, 2026",time:"5:00 PM - 8:00 PM",venue:"University Conference Hall"},
      {title:"Business Networking Mixer",date:"October 10, 2026",time:"6:00 PM",venue:"TBD"}
    ],
    previewMessages:[
      {author:"Ana Garcia",text:"Startup Pitch Night is on September 20! Register now!",time:"Sep 1, 9:15 AM",color:"bg-orange-600"},
      {author:"Isabella Cruz",text:"Looking for a co-founder for my fintech startup. Any BSA grads?",time:"Sep 1, 9:42 AM",color:"bg-red-500"},
      {author:"Mark Jacinto",text:"Interested! I have experience in financial modeling.",time:"Sep 1, 10:01 AM",color:"bg-[#111113]"}
    ]
  },
  {
    id:"gc-3", name:"Education & Teaching Alumni", topic:"Education", icon:"book", color:"green",
    description:"A space for BSED graduates and education professionals to discuss teaching methods, DepEd updates, certifications, and career growth.",
    members:78, joined:false,
    membersList:["Rafael Villanueva","Ana Mendoza","Clara Santos","Diego Reyes"],
    events:[
      {title:"DepEd Policy Update Webinar",date:"October 8, 2026",time:"10:00 AM - 12:00 PM",venue:"Online via Google Meet"}
    ],
    previewMessages:[
      {author:"Rafael Villanueva",text:"Has anyone started the new DepEd competency mapping?",time:"Aug 30, 3:00 PM",color:"bg-green-600"},
      {author:"Ana Mendoza",text:"Yes! I can share my template if you need it.",time:"Aug 30, 3:15 PM",color:"bg-purple-600"}
    ]
  },
  {
    id:"gc-4", name:"Hospitality & Tourism Network", topic:"Hospitality", icon:"globe", color:"teal",
    description:"Connect with BSHRT alumni working in hotels, travel agencies, restaurants, and event management across the Philippines and abroad.",
    members:52, joined:false,
    membersList:["Sofia Aquino","Rico Tan","Maria Lim","Carlos Rivera"],
    events:[
      {title:"Tourism Industry Forum",date:"October 25, 2026",time:"9:00 AM",venue:"TBD"}
    ],
    previewMessages:[
      {author:"Sofia Aquino",text:"Any hotel management positions open in Cebu?",time:"Aug 28, 2:00 PM",color:"bg-teal-600"},
      {author:"Rico Tan",text:"I heard Shangri-La is hiring! Let me get the details.",time:"Aug 28, 2:20 PM",color:"bg-orange-500"}
    ]
  },
  {
    id:"gc-5", name:"Alumni Wellness & Sports", topic:"Lifestyle", icon:"heart", color:"pink",
    description:"A fun community for alumni who love fitness, mental wellness, weekend runs, basketball leagues, and other recreational activities.",
    members:95, joined:true,
    membersList:["Carlos Mendoza","Patricia Lim","James Ocampo","Nicole dela Rosa","Rafael Gomez","Trisha Navarro"],
    events:[
      {title:"Alumni Fun Run 2026",date:"November 15, 2026",time:"5:00 AM - 9:00 AM",venue:"University Main Campus"},
      {title:"Mental Wellness Check-In Session",date:"October 22, 2026",time:"3:00 PM - 5:00 PM",venue:"Online via Zoom"},
      {title:"Basketball League Season 3",date:"December 1, 2026",time:"8:00 AM",venue:"University Gym"}
    ],
    previewMessages:[
      {author:"Carlos Mendoza",text:"FUN RUN 2026 registration is OPEN! 3K, 5K, 10K routes!",time:"Sep 1, 8:00 AM",color:"bg-pink-600"},
      {author:"Patricia Lim",text:"Signed up for 5K! Who's joining?",time:"Sep 1, 8:22 AM",color:"bg-purple-600"},
      {author:"James Ocampo",text:"Count me in for 10K!",time:"Sep 1, 8:45 AM",color:"bg-yellow-600"}
    ]
  }
];

var iconSvgs = {
  laptop:'<img src="../assets/icons/laptop.svg" class="w-5 h-5" alt="" style="filter:brightness(0) saturate(100%) invert(37%) sepia(78%) saturate(1826%) hue-rotate(207deg);" />',
  briefcase:'<img src="../assets/icons/handshake-outline.svg" class="w-5 h-5" alt="" style="filter:brightness(0) saturate(100%) invert(52%) sepia(98%) saturate(2066%) hue-rotate(2deg);" />',
  book:'<img src="../assets/icons/school-outline.svg" class="w-5 h-5" alt="" style="filter:brightness(0) saturate(100%) invert(42%) sepia(96%) saturate(1352%) hue-rotate(101deg);" />',
  globe:'<img src="../assets/icons/earth.svg" class="w-5 h-5" alt="" style="filter:brightness(0) saturate(100%) invert(45%) sepia(69%) saturate(537%) hue-rotate(131deg);" />',
  heart:'<img src="../assets/icons/heart-pulse.svg" class="w-5 h-5" alt="" style="filter:brightness(0) saturate(100%) invert(46%) sepia(96%) saturate(2694%) hue-rotate(325deg);" />'
};

var colorClasses = {
  blue:{bg:"bg-blue-100",text:"text-blue-600",border:"border-blue-200",light:"bg-blue-50",badge:"bg-blue-600"},
  orange:{bg:"bg-orange-100",text:"text-orange-600",border:"border-orange-200",light:"bg-orange-50",badge:"bg-orange-600"},
  green:{bg:"bg-green-100",text:"text-green-600",border:"border-green-200",light:"bg-green-50",badge:"bg-green-600"},
  teal:{bg:"bg-teal-100",text:"text-teal-600",border:"border-teal-200",light:"bg-teal-50",badge:"bg-teal-600"},
  pink:{bg:"bg-pink-100",text:"text-pink-600",border:"border-pink-200",light:"bg-pink-50",badge:"bg-pink-600"}
};

function ini(n) { return n.split(" ").map(function(w) { return w[0]; }).join("").toUpperCase(); }

// ===== LOCALSTORAGE SYNC =====
function saveJoinState() {
  var state = {};
  for (var i = 0; i < groupChats.length; i++) { state[groupChats[i].id] = groupChats[i].joined; }
  localStorage.setItem("compassGroupJoinState", JSON.stringify(state));
}
function syncJoinState() {
  try {
    var raw = localStorage.getItem("compassGroupJoinState");
    if (!raw) return;
    var state = JSON.parse(raw);
    for (var i = 0; i < groupChats.length; i++) {
      if (typeof state[groupChats[i].id] === "boolean") { groupChats[i].joined = state[groupChats[i].id]; }
    }
  } catch(e) {}
}
syncJoinState();

// ===== RENDER GROUP CHAT CARDS =====
function renderGroupChats() {
  var container = document.getElementById("groupChatCards");
  if (!container) return;
  var html = "";
  for (var i = 0; i < groupChats.length; i++) {
    var gc = groupChats[i], c = colorClasses[gc.color];
    html += '<div class="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-blue-200 transition cursor-pointer" data-gc-id="' + gc.id + '">';
    html += '<div class="flex items-center gap-3 mb-3">';
    html += '<div class="w-10 h-10 rounded-xl ' + c.bg + ' flex items-center justify-center shrink-0">' + iconSvgs[gc.icon] + '</div>';
    html += '<div class="flex-1 min-w-0"><p class="text-[13px] font-bold text-gray-900 truncate">' + gc.name + '</p><p class="text-[11px] text-gray-500">' + gc.members + ' members · ' + gc.topic + '</p></div>';
    html += '</div>';
    html += '<p class="text-[12px] text-gray-500 mb-3 line-clamp-2" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">' + gc.description + '</p>';
    html += '<div class="flex items-center justify-between">';
    html += '<button class="gc-view-details text-[11px] font-semibold text-blue-600 hover:text-blue-700" data-gc-id="' + gc.id + '">View Details</button>';
    if (gc.joined) {
      html += '<button class="gc-join-btn joined text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-green-200 bg-green-50 text-green-600" data-gc-id="' + gc.id + '"><span class="join-label">Joined ✓</span><span class="leave-label items-center gap-1">Leave</span></button>';
    } else {
      html += '<button class="gc-join-btn text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100" data-gc-id="' + gc.id + '">Join</button>';
    }
    html += '</div></div>';
  }
  container.innerHTML = html;
}
renderGroupChats();
saveJoinState();

// ===== OPEN GROUP CHAT MODAL =====
function openGroupChatModal(gcId) {
  var gc = null;
  for (var i = 0; i < groupChats.length; i++) { if (groupChats[i].id === gcId) { gc = groupChats[i]; break; } }
  if (!gc) return;
  var c = colorClasses[gc.color];
  document.getElementById("gcModalIcon").className = "w-10 h-10 rounded-xl flex items-center justify-center " + c.bg;
  document.getElementById("gcModalIcon").innerHTML = iconSvgs[gc.icon];
  document.getElementById("gcModalTitle").textContent = gc.name;
  document.getElementById("gcModalMeta").textContent = gc.members + " members · " + gc.topic;
  document.getElementById("gcModalDesc").textContent = gc.description;

  var evHtml = "";
  for (var e = 0; e < gc.events.length; e++) {
    var ev = gc.events[e];
    evHtml += '<div class="p-3 bg-blue-50 border border-blue-100 rounded-lg"><p class="text-[12px] font-semibold text-gray-900">' + ev.title + '</p><p class="text-[10px] text-gray-500 mt-1">' + ev.date + ' · ' + ev.time + '</p></div>';
  }
  if (!gc.events.length) evHtml = '<p class="text-[12px] text-gray-400">No upcoming events</p>';
  document.getElementById("gcModalEvents").innerHTML = evHtml;

  var memHtml = "";
  for (var m = 0; m < gc.membersList.length; m++) {
    var name = gc.membersList[m];
    memHtml += '<div class="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full"><div class="w-6 h-6 rounded-full ' + c.badge + ' flex items-center justify-center text-white text-[9px] font-bold">' + ini(name) + '</div><span class="text-[11px] font-medium text-gray-700">' + name + '</span></div>';
  }
  document.getElementById("gcModalMembers").innerHTML = memHtml;

  var chatHtml = '<h4 class="text-[13px] font-bold text-gray-900 mb-3 flex items-center gap-2"><svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>Chat Preview</h4>';
  if (gc.joined) {
    chatHtml += '<div class="bg-gray-50 rounded-xl p-4 space-y-3 border border-gray-100">';
    for (var p = 0; p < gc.previewMessages.length; p++) {
      var pm = gc.previewMessages[p];
      var isOwn = pm.author === "Mark Jacinto";
      if (isOwn) {
        chatHtml += '<div class="flex justify-end"><div class="max-w-[75%]"><div class="bg-blue-600 text-white rounded-2xl rounded-br-md px-4 py-2.5"><p class="text-[12px]">' + pm.text + '</p></div><p class="text-[10px] text-gray-400 mt-0.5 text-right">' + pm.time + '</p></div></div>';
      } else {
        chatHtml += '<div class="flex items-start gap-2"><div class="w-7 h-7 rounded-full ' + pm.color + ' flex items-center justify-center text-white text-[9px] font-bold shrink-0">' + ini(pm.author) + '</div><div><p class="text-[11px] font-semibold text-gray-700">' + pm.author + ' <span class="text-gray-400 font-normal">' + pm.time + '</span></p><p class="text-[12px] text-gray-600 mt-0.5">' + pm.text + '</p></div></div>';
      }
    }
    chatHtml += '</div>';
  } else {
    chatHtml += '<div class="relative"><div class="bg-gray-50 rounded-xl p-4 space-y-3 border border-gray-100 opacity-40 blur-[2px]">';
    for (var p = 0; p < gc.previewMessages.length; p++) {
      var pm = gc.previewMessages[p];
      chatHtml += '<div class="flex items-start gap-2"><div class="w-7 h-7 rounded-full ' + pm.color + ' flex items-center justify-center text-white text-[9px] font-bold shrink-0">' + ini(pm.author) + '</div><div><p class="text-[11px] font-semibold text-gray-700">' + pm.author + '</p><p class="text-[12px] text-gray-600 mt-0.5">' + pm.text + '</p></div></div>';
    }
    chatHtml += '</div><div class="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center pb-4"><div class="text-center"><div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-2"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg></div><p class="text-[13px] font-bold text-purple-700">Join to see all conversations</p><p class="text-[11px] text-gray-500 mt-0.5">Join this group to read messages and chat with members.</p></div></div></div>';
  }
  document.getElementById("gcModalChatPreview").innerHTML = chatHtml;

  var goBtn = document.getElementById("gcModalGoToChat");
  var joinBtn = document.getElementById("gcModalJoinBtn");
  if (gc.joined) {
    goBtn.style.display = "inline-flex";
    goBtn.href = "groupchats.html?group=" + gc.id;
    joinBtn.style.display = "none";
  } else {
    goBtn.style.display = "none";
    joinBtn.style.display = "inline-flex";
    joinBtn.setAttribute("data-gc-id", gc.id);
  }
  openModal("groupChatDetailModal");
}

// ===== JOIN / LEAVE =====
function joinGroupChat(gcId) {
  for (var i = 0; i < groupChats.length; i++) {
    if (groupChats[i].id === gcId) { groupChats[i].joined = true; groupChats[i].members += 1; break; }
  }
  saveJoinState();
  closeModal("groupChatDetailModal");
  renderGroupChats();
  showToast("You joined the group chat!");
  setTimeout(function() { window.location.href = "groupchats.html?group=" + gcId; }, 800);
}
function leaveGroupChat(gcId) {
  if (!confirm("Are you sure you want to leave this group?")) return;
  for (var i = 0; i < groupChats.length; i++) {
    if (groupChats[i].id === gcId) { groupChats[i].joined = false; groupChats[i].members = Math.max(0, groupChats[i].members - 1); break; }
  }
  saveJoinState();
  renderGroupChats();
  showToast("You left the group chat.");
}

// ===== EVENT DELEGATION FOR GROUP CHATS =====
document.addEventListener("click", function(e) {
  if (e.target.closest("[data-action='closeGcModal']")) { closeModal("groupChatDetailModal"); return; }
  if (e.target.closest("#gcModalJoinBtn")) { var gcId = document.getElementById("gcModalJoinBtn").getAttribute("data-gc-id"); if (gcId) joinGroupChat(gcId); return; }
  var detailsBtn = e.target.closest(".gc-view-details");
  if (detailsBtn) { e.stopPropagation(); openGroupChatModal(detailsBtn.getAttribute("data-gc-id")); return; }
  var joinBtn = e.target.closest(".gc-join-btn");
  if (joinBtn) {
    e.stopPropagation();
    var gcId = joinBtn.getAttribute("data-gc-id");
    var gc = null;
    for (var i = 0; i < groupChats.length; i++) { if (groupChats[i].id === gcId) { gc = groupChats[i]; break; } }
    if (gc && gc.joined) { leaveGroupChat(gcId); }
    else {
      for (var i = 0; i < groupChats.length; i++) { if (groupChats[i].id === gcId) { groupChats[i].joined = true; groupChats[i].members += 1; break; } }
      saveJoinState(); renderGroupChats(); showToast("You joined the group chat!");
      setTimeout(function() { window.location.href = "groupchats.html?group=" + gcId; }, 800);
    }
    return;
  }
  var card = e.target.closest("[data-gc-id]");
  if (card && !e.target.closest(".gc-join-btn") && !e.target.closest(".gc-view-details") && !e.target.closest("#gcModalJoinBtn")) {
    window.location.href = "groupchats.html?group=" + card.getAttribute("data-gc-id");
    return;
  }
});
