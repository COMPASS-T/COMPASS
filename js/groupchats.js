(function(){
var extraFirstNames=["Alyssa","Benedict","Carmela","Dario","Elena","Franco","Giselle","Hugo","Iris","Jasper","Katrina","Lorenzo","Mia","Nathan","Olivia","Paolo","Queenie","Ramon","Selena","Troy","Uma","Victor","Wendy","Xavier","Yvonne","Zach","Abigail","Bernard","Celine","Derek","Ella","Felix","Grace","Harvey","Ingrid","Jake","Kyla","Lance","Mika","Noel","Ophelia","Pedro","Rina","Sean","Tina","Ulysses","Vanessa","Warren","Ximena","Yuri","Zara","Amara","Brent","Clara","Dominic","Eva","Fidel","Gwen","Henry","Isa","Jerome","Kim","Leo","Mara","Nico","Omar","Pearl","Rex","Sam","Thea","Uri","Vince","Wren","Yael","Zeke","Althea","Brylle","Chesca","Dante","Erica","Gem","Hans","Ivy","Joel","Kris","Lena","Miko","Nora","Owen","Pia","Renz","Sasha","Tim","Uriel","Val","Will","Xena","Ysa","Zion","Adriel","Bianca","Cedric","Diana","Emil","Fatima","Gavin","Hannah","Ivan","Janelle","Karl","Liza","Marco","Nina","Oscar","Pauline","Quinn","Ryan","Stella","Tristan","Ulia","Vera","Wesley","Yolanda","Zeke"];
var extraLastNames=["Reyes","Santos","Garcia","Torres","Cruz","Mendoza","Aquino","Lim","Ramos","Diaz","Bautista","Tan","Lopez","Fernandez","Castillo","Navarro","Soriano","Aguilar","Morales","Pascual","Ocampo","Gomez","Villanueva","Dela Rosa","Rivera","Romero","Del Rosario","Manalo","Enriquez","Salazar","Flores","Perez","Hernandez","Delos Santos","Valdez","Salvador","Francisco","Evangelista","Santiago","De Leon","Miranda","Cordero","Mercado","Pineda","Galang","Roxas","Tolentino","Dimaculangan","Magno","Bueno"];
var extraColors=["bg-blue-600","bg-red-500","bg-green-600","bg-purple-600","bg-pink-500","bg-yellow-600","bg-teal-500","bg-indigo-600","bg-orange-600","bg-cyan-600","bg-rose-500","bg-amber-600","bg-lime-600","bg-emerald-600","bg-sky-600","bg-violet-600","bg-fuchsia-600"];
var extraCourses=["BSBA Marketing","BS Accountancy","BSBA Finance","BSBA HR Management","BSBA Operations Management","BSIT","BSCS","BS Psychology","BS Physical Education","BS Nursing","BS Criminology","BSED English","BSED Math","BS Tourism","BS Hospitality"];
var extraBatches=["Batch 2019","Batch 2020","Batch 2021","Batch 2022","Batch 2023","Batch 2024"];

function generateExtraMembers(existing, total) {
  var list = existing.slice();
  var usedNames = {};
  for (var i = 0; i < existing.length; i++) usedNames[existing[i].name] = true;
  var idx = 0;
  while (list.length < total && idx < extraFirstNames.length) {
    var fn = extraFirstNames[idx % extraFirstNames.length];
    var ln = extraLastNames[idx % extraLastNames.length];
    var name = fn + " " + ln;
    if (!usedNames[name]) {
      usedNames[name] = true;
      list.push({name: name, role: "Member", batch: extraBatches[idx % extraBatches.length], course: extraCourses[idx % extraCourses.length], color: extraColors[idx % extraColors.length], friendStatus: "none", online: Math.random() > 0.6});
    }
    idx++;
  }
  return list;
}

var groupChats = [
  {
    id: "gc-1", name: "Tech Careers & Industry Trends", topic: "Technology", icon: "laptop", color: "blue",
    description: "A community for IT, CS, and CpE alumni to share job opportunities, discuss tech trends, and network with industry professionals.",
    members: 186, joined: false, muted: false, pinnedMessages: [],
    membersList: [
      {name: "Maria Santos", role: "Admin", batch: "Batch 2020", course: "BSIT", color: "bg-blue-600", friendStatus: "none", online: true},
      {name: "Jose Reyes", role: "Moderator", batch: "Batch 2021", course: "BSCS", color: "bg-red-500", friendStatus: "none", online: true},
      {name: "Miguel Torres", role: "Member", batch: "Batch 2022", course: "BSIT", color: "bg-green-600", friendStatus: "none", online: false},
      {name: "Daniel Fernandez", role: "Member", batch: "Batch 2023", course: "BSCS", color: "bg-purple-600", friendStatus: "none", online: true},
      {name: "Kevin Ramos", role: "Member", batch: "Batch 2019", course: "BSIT", color: "bg-orange-600", friendStatus: "accepted", online: false},
      {name: "Marco Tan", role: "Member", batch: "Batch 2020", course: "BSCS", color: "bg-teal-500", friendStatus: "none", online: true},
      {name: "Patricia Cruz", role: "Member", batch: "Batch 2021", course: "BSIT", color: "bg-pink-500", friendStatus: "none", online: false},
      {name: "Angela Lim", role: "Member", batch: "Batch 2022", course: "BSCS", color: "bg-indigo-600", friendStatus: "pending", online: true},
      {name: "Robert Garcia", role: "Member", batch: "Batch 2023", course: "BSIT", color: "bg-yellow-600", friendStatus: "none", online: false},
      {name: "Diana Morales", role: "Member", batch: "Batch 2020", course: "BSCS", color: "bg-cyan-600", friendStatus: "none", online: true},
      {name: "Francis Aquino", role: "Member", batch: "Batch 2021", course: "BSIT", color: "bg-rose-500", friendStatus: "none", online: false},
      {name: "Carla Navarro", role: "Member", batch: "Batch 2019", course: "BSCS", color: "bg-amber-600", friendStatus: "none", online: false}
    ],
    messages: [
      {id: 1, author: "Maria Santos", text: "Anyone attending the AI meetup next month?", time: "Sep 1, 10:30 AM", color: "bg-blue-600", type: "text", reactions: {"🔥": ["Jose Reyes"]}, seenBy: ["Jose Reyes", "Miguel Torres"], replyTo: null},
      {id: 2, author: "Jose Reyes", text: "Yes! Already registered. Super excited for the cloud track.", time: "Sep 1, 10:45 AM", color: "bg-red-500", type: "text", reactions: {"😀": ["Maria Santos", "Daniel Fernandez"]}, seenBy: ["Maria Santos", "Miguel Torres"], replyTo: null},
      {id: 3, author: "Miguel Torres", text: "Same here! Should we organize a carpool?", time: "Sep 1, 11:02 AM", color: "bg-green-600", type: "text", reactions: {}, seenBy: ["Maria Santos", "Jose Reyes"], replyTo: {msgId: 2, author: "Jose Reyes", text: "Yes! Already registered. Super excited for the cloud track."}},
      {id: 4, author: "Daniel Fernandez", text: "I heard there's a new AWS certification path. Anyone interested in a study group?", time: "Sep 1, 11:30 AM", color: "bg-purple-600", type: "text", reactions: {"😀": ["Maria Santos"]}, seenBy: ["Maria Santos"], replyTo: null},
      {id: 5, author: "Maria Santos", text: "Great idea Daniel! Let's set one up after the meetup.", time: "Sep 1, 11:45 AM", color: "bg-blue-600", type: "text", reactions: {"❤️": ["Daniel Fernandez"]}, seenBy: ["Daniel Fernandez", "Jose Reyes"], replyTo: {msgId: 4, author: "Daniel Fernandez", text: "I heard there's a new AWS certification path. Anyone interested in a study group?"}}
    ],
    events: [
      {title: "Tech Industry Meetup — AI & Cloud Careers", date: "Oct 15, 2026", time: "6:00 PM - 9:00 PM", venue: "Innovation Hub, BGC", description: "Meet hiring managers from top tech companies and learn about AI and cloud career paths."},
      {title: "Resume Workshop for Tech Roles", date: "Nov 5, 2026", time: "2:00 PM - 5:00 PM", venue: "Zoom", description: "Get your tech resume reviewed by industry professionals."}
    ]
  },
  {
    id: "gc-2", name: "Business & Entrepreneurship Hub", topic: "Business", icon: "briefcase", color: "orange",
    description: "For BSBA, BSA, and entrepreneurial alumni to share business ideas, funding opportunities, startup stories, and mentorship.",
    members: 124, joined: true, muted: false, pinnedMessages: [],
    membersList: [
      {name: "Ana Garcia", role: "Admin", batch: "Batch 2019", course: "BSBA Marketing", color: "bg-orange-600", friendStatus: "none", online: true},
      {name: "Isabella Cruz", role: "Moderator", batch: "Batch 2020", course: "BS Accountancy", color: "bg-red-500", friendStatus: "accepted", online: true},
      {name: "Rose Aquino", role: "Member", batch: "Batch 2022", course: "BSBA Finance", color: "bg-purple-600", friendStatus: "none", online: false},
      {name: "Julia Reyes", role: "Member", batch: "Batch 2023", course: "BS Accountancy", color: "bg-teal-600", friendStatus: "pending", online: true},
      {name: "Miguel Torres", role: "Member", batch: "Batch 2021", course: "BSBA Marketing", color: "bg-blue-600", friendStatus: "none", online: false},
      {name: "Sofia Villanueva", role: "Member", batch: "Batch 2020", course: "BSBA HR Management", color: "bg-pink-500", friendStatus: "none", online: true},
      {name: "Gabriel Santos", role: "Member", batch: "Batch 2019", course: "BS Accountancy", color: "bg-green-600", friendStatus: "accepted", online: false},
      {name: "Maria Fernandez", role: "Member", batch: "Batch 2022", course: "BSBA Finance", color: "bg-indigo-600", friendStatus: "none", online: true},
      {name: "Daniel Ramos", role: "Member", batch: "Batch 2023", course: "BSBA Operations Management", color: "bg-yellow-600", friendStatus: "none", online: false},
      {name: "Andrea Lopez", role: "Member", batch: "Batch 2021", course: "BS Accountancy", color: "bg-rose-500", friendStatus: "none", online: false},
      {name: "Kevin Tan", role: "Member", batch: "Batch 2020", course: "BSBA Marketing", color: "bg-cyan-600", friendStatus: "none", online: true},
      {name: "Christine Bautista", role: "Member", batch: "Batch 2022", course: "BSBA Finance", color: "bg-amber-600", friendStatus: "none", online: false}
    ],
    messages: [
      {id: 1, author: "Ana Garcia", text: "Startup Pitch Night is on September 20! Register now!", time: "Sep 1, 9:15 AM", color: "bg-orange-600", type: "text", reactions: {"🔥": ["Isabella Cruz", "Rose Aquino"], "😀": ["Mark Jacinto", "Miguel Torres"]}, seenBy: ["Isabella Cruz", "Rose Aquino", "Julia Reyes"], replyTo: null},
      {id: 2, author: "Isabella Cruz", text: "Looking for a co-founder for my fintech startup. Any BSA grads?", time: "Sep 1, 9:42 AM", color: "bg-red-500", type: "text", reactions: {"😀": ["Ana Garcia"]}, seenBy: ["Ana Garcia", "Mark Jacinto"], replyTo: null},
      {id: 3, author: "Mark Jacinto", text: "Interested! I have experience in financial modeling.", time: "Sep 1, 10:01 AM", color: "bg-[#111113]", type: "text", reactions: {"❤️": ["Isabella Cruz"], "🔥": ["Ana Garcia"]}, seenBy: ["Isabella Cruz", "Ana Garcia", "Rose Aquino"], replyTo: {msgId: 2, author: "Isabella Cruz", text: "Looking for a co-founder for my fintech startup. Any BSA grads?"}},
      {id: 4, author: "Rose Aquino", text: "Anyone applied for DTI startup grants?", time: "Sep 1, 11:30 AM", color: "bg-purple-600", type: "text", reactions: {}, seenBy: ["Ana Garcia"], replyTo: null},
      {id: 5, author: "Ana Garcia", text: "Yes Rose! I can share the application form.", time: "Sep 1, 11:48 AM", color: "bg-orange-600", type: "text", reactions: {"😀": ["Rose Aquino", "Mark Jacinto"]}, seenBy: ["Rose Aquino", "Mark Jacinto", "Isabella Cruz"], replyTo: {msgId: 4, author: "Rose Aquino", text: "Anyone applied for DTI startup grants?"}}
    ],
    events: [
      {title: "Startup Pitch Night", date: "Sep 20, 2026", time: "5:00 PM - 8:00 PM", venue: "Conference Hall A", description: "Present your startup idea to a panel of investors and industry mentors. Top 3 pitches win seed funding."},
      {title: "Business Networking Mixer", date: "Oct 10, 2026", time: "6:00 PM - 9:00 PM", venue: "Hotel Marquis Ballroom", description: "An evening of networking with successful alumni entrepreneurs."}
    ]
  },
  {
    id: "gc-3", name: "Education & Teaching Alumni", topic: "Education", icon: "book", color: "green",
    description: "A space for BSED graduates and education professionals to discuss teaching methods, DepEd updates, certifications, and career growth.",
    members: 78, joined: false, muted: false, pinnedMessages: [],
    membersList: [
      {name: "Rafael Villanueva", role: "Admin", batch: "Batch 2019", course: "BSED English", color: "bg-green-600", friendStatus: "none", online: true},
      {name: "Ana Mendoza", role: "Moderator", batch: "Batch 2020", course: "BSED Math", color: "bg-purple-600", friendStatus: "none", online: false},
      {name: "Clara Santos", role: "Member", batch: "Batch 2021", course: "BSED English", color: "bg-blue-600", friendStatus: "none", online: true},
      {name: "Diego Reyes", role: "Member", batch: "Batch 2022", course: "BSED Math", color: "bg-orange-600", friendStatus: "none", online: false},
      {name: "Elena Cruz", role: "Member", batch: "Batch 2023", course: "BSED English", color: "bg-pink-500", friendStatus: "pending", online: true},
      {name: "Fernando Garcia", role: "Member", batch: "Batch 2020", course: "BSED Math", color: "bg-teal-500", friendStatus: "none", online: false},
      {name: "Gloria Lim", role: "Member", batch: "Batch 2021", course: "BSED English", color: "bg-indigo-600", friendStatus: "none", online: true},
      {name: "Hector Torres", role: "Member", batch: "Batch 2019", course: "BSED Math", color: "bg-yellow-600", friendStatus: "none", online: false}
    ],
    messages: [
      {id: 1, author: "Rafael Villanueva", text: "Has anyone started the new DepEd competency mapping?", time: "Sep 1, 3:00 PM", color: "bg-green-600", type: "text", reactions: {}, seenBy: ["Ana Mendoza", "Clara Santos"], replyTo: null},
      {id: 2, author: "Ana Mendoza", text: "Yes! I can share my template if you need it.", time: "Sep 1, 3:15 PM", color: "bg-purple-600", type: "text", reactions: {"😀": ["Rafael Villanueva", "Clara Santos"]}, seenBy: ["Rafael Villanueva"], replyTo: null},
      {id: 3, author: "Clara Santos", text: "That would be super helpful, Ana! Please share.", time: "Sep 1, 3:30 PM", color: "bg-blue-600", type: "text", reactions: {"❤️": ["Ana Mendoza"]}, seenBy: ["Rafael Villanueva", "Ana Mendoza"], replyTo: {msgId: 2, author: "Ana Mendoza", text: "Yes! I can share my template if you need it."}},
      {id: 4, author: "Diego Reyes", text: "Also, the LET review schedule is out. Check the PRC website.", time: "Sep 1, 4:00 PM", color: "bg-orange-600", type: "text", reactions: {}, seenBy: ["Rafael Villanueva"], replyTo: null}
    ],
    events: [
      {title: "DepEd Policy Update Webinar", date: "Oct 8, 2026", time: "10:00 AM - 12:00 PM", venue: "Zoom", description: "Updates on the new K-12 curriculum enhancements and competency-based education."}
    ]
  },
  {
    id: "gc-4", name: "Hospitality & Tourism Network", topic: "Hospitality", icon: "globe", color: "teal",
    description: "Connect with BSHRT alumni working in hotels, travel agencies, restaurants, and event management across the Philippines and abroad.",
    members: 52, joined: false, muted: false, pinnedMessages: [],
    membersList: [
      {name: "Sofia Aquino", role: "Admin", batch: "Batch 2020", course: "BS Tourism", color: "bg-teal-600", friendStatus: "none", online: true},
      {name: "Rico Tan", role: "Moderator", batch: "Batch 2021", course: "BS Hospitality", color: "bg-orange-600", friendStatus: "none", online: false},
      {name: "Maria Lim", role: "Member", batch: "Batch 2022", course: "BS Tourism", color: "bg-blue-600", friendStatus: "none", online: true},
      {name: "Carlos Rivera", role: "Member", batch: "Batch 2019", course: "BS Hospitality", color: "bg-purple-600", friendStatus: "accepted", online: false},
      {name: "Lisa Gomez", role: "Member", batch: "Batch 2023", course: "BS Tourism", color: "bg-pink-500", friendStatus: "none", online: true},
      {name: "Marco Diaz", role: "Member", batch: "Batch 2020", course: "BS Hospitality", color: "bg-green-600", friendStatus: "none", online: false},
      {name: "Nina Santos", role: "Member", batch: "Batch 2021", course: "BS Tourism", color: "bg-indigo-600", friendStatus: "none", online: true},
      {name: "Oscar Reyes", role: "Member", batch: "Batch 2022", course: "BS Hospitality", color: "bg-yellow-600", friendStatus: "none", online: false}
    ],
    messages: [
      {id: 1, author: "Sofia Aquino", text: "Any hotel management positions open in Cebu?", time: "Sep 1, 2:00 PM", color: "bg-teal-600", type: "text", reactions: {}, seenBy: ["Rico Tan", "Maria Lim"], replyTo: null},
      {id: 2, author: "Rico Tan", text: "I heard Shangri-La is hiring! Let me get the details.", time: "Sep 1, 2:20 PM", color: "bg-orange-600", type: "text", reactions: {"🔥": ["Sofia Aquino"]}, seenBy: ["Sofia Aquino"], replyTo: null},
      {id: 3, author: "Maria Lim", text: "DOT just announced new tourism recovery grants for small businesses!", time: "Sep 1, 2:45 PM", color: "bg-blue-600", type: "text", reactions: {"😀": ["Sofia Aquino", "Carlos Rivera"]}, seenBy: ["Sofia Aquino", "Rico Tan"], replyTo: null},
      {id: 4, author: "Carlos Rivera", text: "That's great news! Anyone planning to apply?", time: "Sep 1, 3:00 PM", color: "bg-purple-600", type: "text", reactions: {}, seenBy: ["Sofia Aquino"], replyTo: {msgId: 3, author: "Maria Lim", text: "DOT just announced new tourism recovery grants for small businesses!"}}
    ],
    events: [
      {title: "Tourism Industry Forum", date: "Oct 25, 2026", time: "9:00 AM - 4:00 PM", venue: "Manila Hotel Convention Center", description: "Annual forum on Philippine tourism trends, recovery strategies, and career opportunities."}
    ]
  },
  {
    id: "gc-5", name: "Alumni Wellness & Sports", topic: "Lifestyle", icon: "heart", color: "pink",
    description: "A fun community for fitness, wellness, runs, basketball leagues, and recreational activities.",
    members: 95, joined: true, muted: false,
    pinnedMessages: [],
    membersList: [
      {name: "Carlos Mendoza", role: "Admin", batch: "Batch 2019", course: "BS Physical Education", color: "bg-pink-600", friendStatus: "accepted", online: true},
      {name: "Patricia Lim", role: "Moderator", batch: "Batch 2020", course: "BS Psychology", color: "bg-purple-600", friendStatus: "none", online: false},
      {name: "James Ocampo", role: "Member", batch: "Batch 2022", course: "BS Information Technology", color: "bg-yellow-600", friendStatus: "none", online: true},
      {name: "Nicole dela Rosa", role: "Member", batch: "Batch 2023", course: "BS Nursing", color: "bg-green-600", friendStatus: "accepted", online: true},
      {name: "Rafael Gomez", role: "Member", batch: "Batch 2021", course: "BS Physical Education", color: "bg-blue-600", friendStatus: "none", online: false},
      {name: "Trisha Navarro", role: "Member", batch: "Batch 2020", course: "BS Psychology", color: "bg-rose-500", friendStatus: "none", online: true},
      {name: "Aaron Diaz", role: "Member", batch: "Batch 2022", course: "BSIT", color: "bg-indigo-600", friendStatus: "none", online: false},
      {name: "Camille Soriano", role: "Member", batch: "Batch 2019", course: "BS Nursing", color: "bg-teal-500", friendStatus: "accepted", online: false},
      {name: "Bryan Castillo", role: "Member", batch: "Batch 2023", course: "BS Physical Education", color: "bg-orange-600", friendStatus: "none", online: true},
      {name: "Denise Aguilar", role: "Member", batch: "Batch 2021", course: "BS Psychology", color: "bg-cyan-600", friendStatus: "none", online: false},
      {name: "Elijah Morales", role: "Member", batch: "Batch 2022", course: "BS Criminology", color: "bg-amber-600", friendStatus: "pending", online: false},
      {name: "Fiona Pascual", role: "Member", batch: "Batch 2020", course: "BS Nursing", color: "bg-lime-600", friendStatus: "none", online: true}
    ],
    messages: [
      {id: 1, author: "Carlos Mendoza", text: "FUN RUN 2026 registration is OPEN! 3K, 5K, 10K routes!", time: "Sep 1, 8:00 AM", color: "bg-pink-600", type: "text", reactions: {"🔥": ["Nicole dela Rosa"]}, seenBy: ["Patricia Lim", "James Ocampo", "Nicole dela Rosa"], replyTo: null},
      {id: 2, author: "Patricia Lim", text: "Signed up for 5K! Who's joining?", time: "Sep 1, 8:22 AM", color: "bg-purple-600", type: "text", reactions: {"❤️": ["Mark Jacinto"]}, seenBy: ["Carlos Mendoza", "Mark Jacinto"], replyTo: null},
      {id: 3, author: "James Ocampo", text: "Count me in for 10K!", time: "Sep 1, 8:45 AM", color: "bg-yellow-600", type: "text", reactions: {"❤️": ["Carlos Mendoza"]}, seenBy: ["Carlos Mendoza", "Patricia Lim"], replyTo: {msgId: 2, author: "Patricia Lim", text: "Signed up for 5K! Who's joining?"}},
      {id: 4, author: "Mark Jacinto", text: "I'm in for 5K! Let me know the meet-up point.", time: "Sep 1, 9:10 AM", color: "bg-[#111113]", type: "text", reactions: {"😀": ["Patricia Lim", "Carlos Mendoza"]}, seenBy: ["Carlos Mendoza", "Patricia Lim", "James Ocampo", "Nicole dela Rosa"], replyTo: {msgId: 2, author: "Patricia Lim", text: "Signed up for 5K! Who's joining?"}},
      {id: 5, author: "Nicole dela Rosa", text: "Don't forget Mental Wellness Check-In on Oct 22!", time: "Sep 1, 10:00 AM", color: "bg-green-600", type: "text", reactions: {"❤️": ["Patricia Lim", "Carlos Mendoza"]}, seenBy: ["Carlos Mendoza", "Patricia Lim"], replyTo: null},
      {id: 6, author: "Carlos Mendoza", text: "🏃", time: "Sep 1, 10:15 AM", color: "bg-pink-600", type: "sticker", reactions: {}, seenBy: ["Patricia Lim", "Mark Jacinto", "James Ocampo", "Nicole dela Rosa"], replyTo: null}
    ],
    events: [
      {title: "Alumni Fun Run 2026", date: "Nov 15, 2026", time: "5:00 AM - 9:00 AM", venue: "Main Campus Grounds", description: "Annual alumni fun run with 3K, 5K, and 10K routes."},
      {title: "Mental Wellness Check-In", date: "Oct 22, 2026", time: "3:00 PM - 5:00 PM", venue: "Zoom", description: "A safe space to discuss mental health. Speaker: Dr. Patricia Lim."},
      {title: "Basketball League Season 3", date: "Dec 1, 2026", time: "8:00 AM - 5:00 PM", venue: "University Gym", description: "Alumni basketball league! Form batch teams (5-on-5)."}
    ]
  }
];

for (var g = 0; g < groupChats.length; g++) {
  if (groupChats[g].membersList.length > 0 && groupChats[g].membersList.length < groupChats[g].members) {
    groupChats[g].membersList = generateExtraMembers(groupChats[g].membersList, groupChats[g].members);
  }
}

var dms = [];
var dmIdCounter = 0;
var myStatus = true;
var colorClasses = {
  blue: {bg: "bg-blue-100", text: "text-blue-600", badge: "bg-blue-600", banner: "from-blue-500 to-indigo-600"},
  orange: {bg: "bg-orange-100", text: "text-orange-600", badge: "bg-orange-600", banner: "from-orange-500 to-amber-500"},
  green: {bg: "bg-green-100", text: "text-green-600", badge: "bg-green-600", banner: "from-green-500 to-emerald-600"},
  teal: {bg: "bg-teal-100", text: "text-teal-600", badge: "bg-teal-600", banner: "from-teal-500 to-cyan-600"},
  pink: {bg: "bg-pink-100", text: "text-pink-600", badge: "bg-pink-600", banner: "from-pink-500 to-rose-600"}
};
var iconSvgs = {
  laptop: '<img src="../assets/icons/laptop.svg" class="w-4 h-4" alt="" style="filter:brightness(0) saturate(100%) invert(37%) sepia(78%) saturate(1826%) hue-rotate(207deg);" />',
  briefcase: '<img src="../assets/icons/handshake-outline.svg" class="w-4 h-4" alt="" style="filter:brightness(0) saturate(100%) invert(52%) sepia(98%) saturate(2066%) hue-rotate(2deg);" />',
  book: '<img src="../assets/icons/school-outline.svg" class="w-4 h-4" alt="" style="filter:brightness(0) saturate(100%) invert(42%) sepia(96%) saturate(1352%) hue-rotate(101deg);" />',
  globe: '<img src="../assets/icons/earth.svg" class="w-4 h-4" alt="" style="filter:brightness(0) saturate(100%) invert(45%) sepia(69%) saturate(537%) hue-rotate(131deg);" />',
  heart: '<img src="../assets/icons/heart-pulse.svg" class="w-4 h-4" alt="" style="filter:brightness(0) saturate(100%) invert(46%) sepia(96%) saturate(2694%) hue-rotate(325deg);" />'
};

function ini(n) {
  return n.split(" ").map(function(w) { return w[0]; }).join("").toUpperCase();
}

var replyingTo = null;
var uploadedFile = null;
var reactionEmojis = ["😀", "❤️", "😂", "😮", "😢", "🔥"];

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
  } catch (e) {}
}
syncJoinState();

var allStickers = ["😀","😂","🥰","😎","🤩","🙌","👏","💪","🔥","🎉","❤️","👍","🏃","⚽","🏀","📚","💼","🎓","☕","🌟","✨","🚀","💡","🎯","😍","🤣","😇","🤗","🫡","🫶","💯","🏆","🥇","🎊","🎶","🍕","🍔","🧋","🌈","🌸","💐","🎁","🖥️","📱","🧑‍💻","💻","📊","📈","🤝","🫂","😢","😤","🥳","😜","🤓","😏","🫣","🤭","😱","😴","💀","👻","🤖","👽","🎃","🦄","🐱","🐶","🌻","🌊","⛰️","🏖️","🎵","🎸","🎮","🏋️","🧘","🚴","🤸","🎭","🧠","💎","🪄","🔮","⚡","💫","🫧","🎪","🛸","🏠","🌍"];
var stickerCategories = {
  "Smileys": "😀😂🥰😎🤩😍🤣😇🤗🫡🫶😢😤🥳😜🤓😏🫣🤭😱😴💀",
  "Gestures": "🙌👏💪👍🤝🫂🤸",
  "Activities": "🏃⚽🏀🏋️🧘🚴🎮🎸🎵🎭",
  "Objects": "📚💼🎓☕💡🖥️📱💻📊📈💎🪄🔮🎁",
  "Nature": "🌟✨🌈🌸💐🌻🌊⛰️🏖️🦄🐱🐶🌍",
  "Symbols": "🔥🎉❤️💯🏆🥇🎊🎶🚀🎯⚡💫🫧🎪🛸🏠"
};

function renderStickerGrid(list) {
  var g = document.getElementById("stickerGrid"), h = "";
  for (var i = 0; i < list.length; i++) {
    h += '<button class="sticker-pick w-8 h-8 flex items-center justify-center text-[20px] hover:bg-gray-100 rounded-lg cursor-pointer transition" data-sticker="' + list[i] + '">' + list[i] + '</button>';
  }
  g.innerHTML = h;
}
renderStickerGrid(allStickers);

document.getElementById("stickerSearchInput").addEventListener("input", function() {
  var q = this.value.trim().toLowerCase();
  if (!q) { renderStickerGrid(allStickers); return; }
  var results = [];
  for (var cat in stickerCategories) {
    if (cat.toLowerCase().indexOf(q) > -1) {
      var emojis = Array.from(stickerCategories[cat]);
      for (var e = 0; e < emojis.length; e++) {
        if (results.indexOf(emojis[e]) === -1) results.push(emojis[e]);
      }
    }
  }
  if (!results.length) results = allStickers;
  renderStickerGrid(results);
});

var GIPHY_API_KEY = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
var gifDebounce = null;

function searchGiphy(query) {
  var grid = document.getElementById("gifGrid");
  if (!query || query.length < 2) { loadTrendingGifs(); return; }
  grid.innerHTML = '<p class="col-span-2 text-center text-[11px] text-gray-400 py-4">Searching...</p>';
  fetch("https://api.giphy.com/v1/gifs/search?api_key=" + GIPHY_API_KEY + "&q=" + encodeURIComponent(query) + "&limit=12&rating=g&lang=en")
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (!data.data || !data.data.length) { grid.innerHTML = '<p class="col-span-2 text-center text-[11px] text-gray-400 py-4">No GIFs found</p>'; return; }
      var h = "";
      for (var i = 0; i < data.data.length; i++) {
        var gif = data.data[i];
        h += '<img src="' + gif.images.fixed_width_small.url + '" data-gif-url="' + gif.images.fixed_width.url + '" data-gif-label="' + (gif.title || "GIF") + '" class="gif-result w-full h-[80px] object-cover cursor-pointer rounded-lg hover:ring-2 hover:ring-blue-400 transition" />';
      }
      grid.innerHTML = h;
    })
    .catch(function() { grid.innerHTML = '<p class="col-span-2 text-center text-[11px] text-red-400 py-4">Error loading GIFs</p>'; });
}

function loadTrendingGifs() {
  var grid = document.getElementById("gifGrid");
  grid.innerHTML = '<p class="col-span-2 text-center text-[11px] text-gray-400 py-4">Loading trending...</p>';
  fetch("https://api.giphy.com/v1/gifs/trending?api_key=" + GIPHY_API_KEY + "&limit=12&rating=g")
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (!data.data || !data.data.length) { grid.innerHTML = '<p class="col-span-2 text-center text-[11px] text-gray-400 py-4">No trending GIFs</p>'; return; }
      var h = "";
      for (var i = 0; i < data.data.length; i++) {
        var gif = data.data[i];
        h += '<img src="' + gif.images.fixed_width_small.url + '" data-gif-url="' + gif.images.fixed_width.url + '" data-gif-label="' + (gif.title || "GIF") + '" class="gif-result w-full h-[80px] object-cover cursor-pointer rounded-lg hover:ring-2 hover:ring-blue-400 transition" />';
      }
      grid.innerHTML = h;
    })
    .catch(function() { grid.innerHTML = '<p class="col-span-2 text-center text-[11px] text-red-400 py-4">Could not load GIFs</p>'; });
}

var activeChat = null;
var currentTab = "groups";
var infoPanelMode = null;
var uploadedPhoto = null;
var editingMsg = {chatType: null, chatId: null, msgId: null};
var msgIdCounter = 100;
var membersDisplayCount = 12;

document.getElementById("gifSearchInput").addEventListener("input", function() {
  var val = this.value.trim();
  clearTimeout(gifDebounce);
  gifDebounce = setTimeout(function() { searchGiphy(val); }, 400);
});

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / 1048576).toFixed(1) + " MB";
}

function getActiveMessages() {
  if (!activeChat) return null;
  if (activeChat.type === "group") {
    var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
    return gc ? gc.messages : null;
  } else {
    var dm = dms.find(function(d) { return d.id === activeChat.id; });
    return dm ? dm.messages : null;
  }
}

function renderPinnedBanner() {
  var banner = document.getElementById("pinnedBanner");
  if (!activeChat || activeChat.type === "dm") { banner.classList.add("hidden"); return; }
  var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
  if (!gc || !gc.joined || !gc.pinnedMessages || !gc.pinnedMessages.length) { banner.classList.add("hidden"); return; }
  var last = gc.pinnedMessages[gc.pinnedMessages.length - 1];
  document.getElementById("pinnedBannerText").textContent = last.author + ": " + last.text;
  banner.classList.remove("hidden");
}

function setReply(msgId) {
  var msgs = getActiveMessages();
  if (!msgs) return;
  var msg = msgs.find(function(m) { return m.id === msgId; });
  if (!msg) return;
  replyingTo = {msgId: msg.id, author: msg.author, text: msg.text};
  document.getElementById("replyToName").textContent = msg.author;
  document.getElementById("replyToText").textContent = msg.type === "sticker" ? "Sticker" : msg.type === "photo" ? "Photo" : msg.type === "gif" ? "GIF" : msg.type === "file" ? msg.fileName : msg.text;
  document.getElementById("replyPreviewBar").classList.remove("hidden");
  document.getElementById("chatInput").focus();
}

function cancelReply() {
  replyingTo = null;
  document.getElementById("replyPreviewBar").classList.add("hidden");
}

function toggleReaction(msgId, emoji) {
  var msgs = getActiveMessages();
  if (!msgs) return;
  var msg = msgs.find(function(m) { return m.id === msgId; });
  if (!msg) return;
  if (!msg.reactions) msg.reactions = {};
  if (!msg.reactions[emoji]) msg.reactions[emoji] = [];
  var idx = msg.reactions[emoji].indexOf("Mark Jacinto");
  if (idx > -1) msg.reactions[emoji].splice(idx, 1);
  else msg.reactions[emoji].push("Mark Jacinto");
  if (msg.reactions[emoji].length === 0) delete msg.reactions[emoji];
  renderChat();
}

function pinMessage(msgId) {
  if (!activeChat || activeChat.type !== "group") return;
  var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
  if (!gc) return;
  var msg = gc.messages.find(function(m) { return m.id === msgId; });
  if (!msg) return;
  if (!gc.pinnedMessages) gc.pinnedMessages = [];
  var already = gc.pinnedMessages.findIndex(function(p) { return p.msgId === msgId; });
  if (already > -1) { gc.pinnedMessages.splice(already, 1); showToast("Message unpinned."); }
  else { gc.pinnedMessages.push({msgId: msgId, text: msg.text, author: msg.author, time: msg.time, pinnedBy: "Mark Jacinto"}); showToast("Message pinned!"); }
  renderPinnedBanner();
  renderChat();
}

function openSeenByModal(msgId) {
  var msgs = getActiveMessages();
  if (!msgs) return;
  var msg = msgs.find(function(m) { return m.id === msgId; });
  if (!msg || !msg.seenBy || !msg.seenBy.length) return;
  var h = "";
  for (var i = 0; i < msg.seenBy.length; i++) {
    var name = msg.seenBy[i];
    var member = null;
    for (var g = 0; g < groupChats.length; g++) {
      for (var m = 0; m < groupChats[g].membersList.length; m++) {
        if (groupChats[g].membersList[m].name === name) { member = groupChats[g].membersList[m]; break; }
      }
      if (member) break;
    }
    var color = member ? member.color : "bg-gray-400";
    h += '<div class="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 cursor-pointer" data-member-name="' + name + '">';
    h += '<div class="w-8 h-8 rounded-full ' + color + ' flex items-center justify-center text-white text-[10px] font-bold shrink-0">' + ini(name) + '</div>';
    h += '<p class="text-[13px] font-medium text-gray-800">' + name + '</p></div>';
  }
  document.getElementById("seenByList").innerHTML = h;
  openModal("seenByModal");
}

function renderChatList() {
  var container = document.getElementById("gcList"), html = "";
  if (currentTab === "groups") {
    var urlParams = new URLSearchParams(window.location.search);
    var targetGroupId = urlParams.get("group");
    var visibleGroups = groupChats.filter(function(g) {
      return g.joined || (targetGroupId && g.id === targetGroupId);
    });
    if (targetGroupId) {
      var targetGroup = null;
      var rest = [];
      for (var i = 0; i < visibleGroups.length; i++) {
        if (visibleGroups[i].id === targetGroupId) targetGroup = visibleGroups[i];
        else rest.push(visibleGroups[i]);
      }
      if (targetGroup) visibleGroups = [targetGroup].concat(rest);
    }
    var joinedCount = groupChats.filter(function(g) { return g.joined; }).length;
    document.getElementById("gcCount").textContent = joinedCount + " joined";
    if (!visibleGroups.length) {
      container.innerHTML = '<div class="px-4 py-10 text-center"><p class="text-[13px] font-semibold text-gray-600">No groups yet</p><p class="text-[11px] text-gray-400 mt-1">Browse announcements to discover groups</p></div>';
      return;
    }
    for (var i = 0; i < visibleGroups.length; i++) {
      var gc = visibleGroups[i], c = colorClasses[gc.color];
      var last = gc.messages.length ? gc.messages[gc.messages.length - 1] : null;
      var isActive = activeChat && activeChat.type === "group" && activeChat.id === gc.id;
      html += '<div class="gc-item flex items-start gap-3 px-4 py-3 cursor-pointer border-b border-gray-50' + (isActive ? ' active' : '') + '" data-chat-type="group" data-chat-id="' + gc.id + '">';
      html += '<div class="w-9 h-9 rounded-xl ' + c.bg + ' ' + c.text + ' flex items-center justify-center shrink-0 mt-0.5">' + iconSvgs[gc.icon] + '</div>';
      html += '<div class="flex-1 min-w-0"><p class="text-[13px] font-semibold text-gray-900 truncate">' + gc.name + '</p>';
      if (!gc.joined) {
        html += '<p class="text-[11px] text-gray-400 mt-0.5">' + gc.members + ' members · Not joined</p>';
      } else if (last) {
        var preview = last.type === "sticker" ? "Sticker" : last.type === "photo" ? "Photo" : last.type === "gif" ? "GIF" : last.type === "file" ? ("📎 " + last.fileName) : last.text;
        html += '<p class="text-[11px] text-gray-500 truncate mt-0.5"><span class="font-medium">' + last.author.split(" ")[0] + ':</span> ' + preview + '</p>';
      } else {
        html += '<p class="text-[11px] text-gray-400 mt-0.5">No messages</p>';
      }
      html += '</div></div>';
    }
  } else {
    document.getElementById("gcCount").textContent = dms.length + " chats";
    if (!dms.length) { container.innerHTML = '<div class="px-4 py-10 text-center"><p class="text-[13px] font-semibold text-gray-600">No conversations</p></div>'; return; }
    for (var d = 0; d < dms.length; d++) {
      var dm = dms[d], isActive = activeChat && activeChat.type === "dm" && activeChat.id === dm.id;
      var last = dm.messages.length ? dm.messages[dm.messages.length - 1] : null;
      html += '<div class="gc-item flex items-start gap-3 px-4 py-3 cursor-pointer border-b border-gray-50' + (isActive ? ' active' : '') + '" data-chat-type="dm" data-chat-id="' + dm.id + '">';
      html += '<div class="w-9 h-9 rounded-full ' + dm.color + ' flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">' + ini(dm.name) + '</div>';
      html += '<div class="flex-1 min-w-0"><p class="text-[13px] font-semibold text-gray-900 truncate">' + dm.name + '</p>';
      html += '<p class="text-[10px] text-gray-400">' + dm.batch + '</p>';
      if (last) {
        var preview = last.type === "sticker" ? "Sticker" : last.type === "photo" ? "Photo" : last.type === "gif" ? "GIF" : last.type === "file" ? ("📎 " + last.fileName) : last.text;
        html += '<p class="text-[11px] text-gray-500 truncate mt-0.5">' + preview + '</p>';
      }
      html += '</div></div>';
    }
  }
  container.innerHTML = html;
}

function renderChat() {
  if (!activeChat) return;
  var messages, chatName, chatMeta, isDm = activeChat.type === "dm";
  if (isDm) {
    var dm = dms.find(function(d) { return d.id === activeChat.id; });
    if (!dm) return;
    messages = dm.messages; chatName = dm.name; chatMeta = dm.batch + " · " + dm.course;
    document.getElementById("chatTitleChevron").classList.add("hidden");
  } else {
    var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
    if (!gc) return;
    messages = gc.messages; chatName = gc.name; chatMeta = gc.members + " members · " + gc.topic;
    document.getElementById("chatTitleChevron").classList.remove("hidden");
  }
  document.getElementById("chatHeaderTitle").textContent = chatName;
  document.getElementById("chatHeaderMeta").textContent = chatMeta;
  renderPinnedBanner();

  if (!isDm) {
    var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
    if (gc && !gc.joined) {
      var c = colorClasses[gc.color];
      var mc = document.getElementById("chatMessages");
      var joinHtml = '<div class="flex items-center justify-center h-full"><div class="text-center max-w-[360px]">';
      joinHtml += '<div class="w-16 h-16 rounded-2xl ' + c.bg + ' ' + c.text + ' flex items-center justify-center mx-auto mb-4">' + iconSvgs[gc.icon].replace('w-4 h-4', 'w-7 h-7') + '</div>';
      joinHtml += '<h3 class="text-[18px] font-extrabold text-gray-900">' + gc.name + '</h3>';
      joinHtml += '<p class="text-[13px] text-gray-500 mt-2">' + gc.description + '</p>';
      joinHtml += '<p class="text-[12px] text-gray-400 mt-2">' + gc.members + ' members · ' + gc.events.length + ' upcoming events</p>';
      joinHtml += '<div class="relative mt-4"><div class="space-y-2 opacity-30 blur-[2px]">';
      for (var p = 0; p < Math.min(messages.length, 3); p++) {
        var pm = messages[p];
        joinHtml += '<div class="flex items-start gap-2 text-left"><div class="w-7 h-7 rounded-full ' + pm.color + ' flex items-center justify-center text-white text-[9px] font-bold shrink-0">' + ini(pm.author) + '</div><div class="bg-white border border-gray-200 rounded-xl px-3 py-2"><p class="text-[11px] font-semibold text-gray-700">' + pm.author + '</p><p class="text-[12px] text-gray-600">' + pm.text + '</p></div></div>';
      }
      joinHtml += '</div><div class="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent"></div></div>';
      joinHtml += '<div class="mt-4"><p class="text-[15px] font-bold text-purple-700">Join to see all conversations</p>';
      joinHtml += '<p class="text-[12px] text-gray-500 mt-1">Join this group to read messages, chat with members, and see events.</p>';
      joinHtml += '<button class="join-group-btn mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold rounded-lg transition" data-gc-id="' + gc.id + '">Join Group</button>';
      joinHtml += '</div></div></div>';
      mc.innerHTML = joinHtml;
      document.getElementById("chatInputArea").style.display = "none";
      document.getElementById("chatTitleChevron").classList.add("hidden");
      renderChatList();
      return;
    }
  }

  document.getElementById("chatInputArea").style.display = "";
  var mc = document.getElementById("chatMessages"), html = '';
  html += '<div class="flex-1"></div>';
  html += '<div class="flex justify-center my-4"><span class="px-4 py-1.5 bg-gray-100 rounded-full text-[11px] text-gray-500 font-medium">' + chatName + '</span></div>';
  var lastDate = "";
  var lastMsgIndex = messages.length - 1;

  for (var i = 0; i < messages.length; i++) {
    var msg = messages[i], isOwn = msg.author === "Mark Jacinto";
    var msgDate = msg.time.split(",")[0];
    if (msgDate !== lastDate) {
      html += '<div class="flex justify-center my-3"><span class="px-3 py-1 bg-gray-100 rounded-full text-[10px] text-gray-400 font-medium">' + msgDate + '</span></div>';
      lastDate = msgDate;
    }
    var timeOnly = msg.time.split(", ")[1] || msg.time;
    var editedTag = msg.edited ? ' <span class="text-[9px] text-gray-400 italic">edited</span>' : '';

    var replyHtml = "";
    if (msg.replyTo) {
      replyHtml = '<div class="reply-preview mb-1.5 text-[11px]" data-scroll-to-msg="' + msg.replyTo.msgId + '"><span class="font-semibold text-blue-600">' + msg.replyTo.author + '</span><p class="text-gray-500 truncate">' + msg.replyTo.text + '</p></div>';
    }

    var contentHtml = "";
    if (msg.type === "sticker") contentHtml = '<div class="sticker text-[48px]">' + msg.text + '</div>';
    else if (msg.type === "photo") contentHtml = '<img src="' + msg.photoData + '" class="max-w-[240px] max-h-[180px] rounded-xl border border-gray-200 object-cover" />';
    else if (msg.type === "gif") contentHtml = '<img src="' + msg.gifUrl + '" class="max-w-[200px] rounded-xl border border-gray-200 object-cover" /><p class="text-[10px] text-gray-400 mt-0.5">via GIPHY</p>';
    else if (msg.type === "file") {
      contentHtml = '<div class="file-attachment">';
      contentHtml += '<div class="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center shrink-0"><svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>';
      contentHtml += '<div class="flex-1 min-w-0"><p class="text-[12px] font-semibold text-gray-800 truncate">' + msg.fileName + '</p><p class="text-[10px] text-gray-400">' + msg.fileSize + '</p></div>';
      contentHtml += '<button class="file-download-btn p-1.5 hover:bg-gray-100 rounded-lg shrink-0" data-file-data="' + encodeURIComponent(msg.fileData) + '" data-file-name="' + msg.fileName + '"><svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></button></div>';
    } else {
      contentHtml = '<div class="' + (isOwn ? 'bg-blue-600 text-white rounded-2xl rounded-br-md' : 'bg-white border border-gray-200 rounded-2xl rounded-bl-md') + ' px-4 py-2.5"><p class="text-[13px] ' + (isOwn ? '' : 'text-gray-800') + '">' + msg.text + '</p></div>';
    }

    var reactionsHtml = "";
    if (msg.reactions && Object.keys(msg.reactions).length > 0) {
      reactionsHtml = '<div class="flex flex-wrap mt-1 gap-1">';
      for (var emoji in msg.reactions) {
        var users = msg.reactions[emoji];
        var isMine = users.indexOf("Mark Jacinto") > -1;
        var namesStr = users.join(", ");
        reactionsHtml += '<span class="reaction-badge' + (isMine ? ' mine' : '') + '" data-msg-id="' + msg.id + '" data-emoji="' + emoji + '" title="' + namesStr + '">' + emoji + ' <span class="text-[10px] font-semibold text-gray-600">' + users.length + '</span></span>';
      }
      reactionsHtml += '</div>';
    }

    var seenHtml = "";
    if (i === lastMsgIndex && msg.seenBy && msg.seenBy.length > 0) {
      seenHtml = '<div class="seen-below seen-by-btn flex items-center gap-1 mt-1.5 justify-start cursor-pointer hover:opacity-80 transition" data-msg-id="' + msg.id + '">';
      for (var sb = 0; sb < msg.seenBy.length; sb++) {
        var seenName = msg.seenBy[sb];
        var seenMember = null;
        for (var sg = 0; sg < groupChats.length; sg++) {
          for (var sm = 0; sm < groupChats[sg].membersList.length; sm++) {
            if (groupChats[sg].membersList[sm].name === seenName) { seenMember = groupChats[sg].membersList[sm]; break; }
          }
          if (seenMember) break;
        }
        var seenColor = seenMember ? seenMember.color : "bg-gray-400";
        seenHtml += '<div class="w-4 h-4 rounded-full ' + seenColor + ' flex items-center justify-center text-white text-[6px] font-bold' + (sb > 0 ? ' -ml-1' : '') + '" title="' + seenName + '">' + ini(seenName) + '</div>';
      }
      seenHtml += '<span class="text-[11px] text-gray-400 ml-1">Seen by ' + msg.seenBy.length + '</span>';
      seenHtml += '</div>';
    }

    var isPinned = false;
    if (activeChat.type === "group") {
      var gcCheck = groupChats.find(function(g) { return g.id === activeChat.id; });
      if (gcCheck && gcCheck.pinnedMessages) { isPinned = gcCheck.pinnedMessages.some(function(p) { return p.msgId === msg.id; }); }
    }
    var actionsHtml = '<div class="msg-actions flex items-center gap-0.5 mt-1">';
    if (isOwn && msg.type === "text") actionsHtml += '<button class="edit-msg-btn p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-blue-600" data-msg-id="' + msg.id + '" title="Edit"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>';
    actionsHtml += '<button class="reply-msg-btn p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-blue-600" data-msg-id="' + msg.id + '" title="Reply"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 00-4-4H4"/></svg></button>';
    actionsHtml += '<button class="react-msg-btn p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-yellow-500 relative" data-msg-id="' + msg.id + '" title="React"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg></button>';
    if (activeChat.type === "group") actionsHtml += '<button class="pin-msg-btn p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-amber-600" data-msg-id="' + msg.id + '" title="' + (isPinned ? "Unpin" : "Pin") + '"><svg class="w-3 h-3' + (isPinned ? ' text-amber-500' : '') + '" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v8m0 0l3-3m-3 3L9 7M5 12h14M12 22v-8"/></svg></button>';
    actionsHtml += '<button class="delete-msg-btn p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-red-500" data-msg-id="' + msg.id + '" title="Delete"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>';
    actionsHtml += '</div>';

    if (isOwn) {
      html += '<div class="flex flex-col items-end mb-3 group" id="msg-' + msg.id + '"><div class="flex items-start gap-1">' + actionsHtml + '<div class="chat-bubble">' + replyHtml + contentHtml + '<p class="text-[10px] text-gray-400 mt-1 text-right">' + timeOnly + editedTag + '</p>' + reactionsHtml + '</div></div>' + seenHtml + '</div>';
    } else {
      html += '<div class="flex flex-col items-start mb-3 group" id="msg-' + msg.id + '"><div class="flex items-start gap-2.5"><div class="w-8 h-8 rounded-full ' + msg.color + ' flex items-center justify-center text-white text-[10px] font-bold shrink-0 cursor-pointer hover:ring-2 hover:ring-blue-300 transition" data-member-name="' + msg.author + '">' + ini(msg.author) + '</div><div class="chat-bubble"><p class="text-[11px] font-semibold text-gray-700 mb-0.5 cursor-pointer hover:text-blue-600" data-member-name="' + msg.author + '">' + msg.author + '</p>' + replyHtml + contentHtml + '<p class="text-[10px] text-gray-400 mt-1">' + timeOnly + '</p>' + reactionsHtml + '</div>' + actionsHtml + '</div>' + seenHtml + '</div>';
    }
  }
  mc.innerHTML = html;
  setTimeout(function() { mc.scrollTop = mc.scrollHeight; }, 50);
  renderChatList();
  if (infoPanelMode) renderPanel(infoPanelMode);
}

function renderPanel(mode) {
  if (activeChat && activeChat.type === "dm") return;
  var gc = groupChats.find(function(g) { return g.id === (activeChat ? activeChat.id : null); });
  if (!gc) return;
  infoPanelMode = mode;
  document.getElementById("infoPanel").classList.remove("hidden");

  if (mode === "pinned") {
    document.getElementById("infoPanelTitle").textContent = "Pinned Messages";
    var h = '<div class="p-4 space-y-2">';
    if (!gc.pinnedMessages || !gc.pinnedMessages.length) { h += '<p class="text-[13px] text-gray-400 text-center py-6">No pinned messages</p>'; }
    else {
      for (var p = 0; p < gc.pinnedMessages.length; p++) {
        var pm = gc.pinnedMessages[p];
        h += '<div class="p-3 bg-amber-50 border border-amber-200 rounded-lg"><div class="flex items-center justify-between mb-1"><p class="text-[11px] font-semibold text-gray-700">' + pm.author + '</p><button class="unpin-panel-btn p-1 hover:bg-amber-200 rounded text-gray-400 hover:text-red-500" data-msg-id="' + pm.msgId + '"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg></button></div><p class="text-[12px] text-gray-600">' + pm.text + '</p><p class="text-[10px] text-gray-400 mt-1">' + pm.time + ' · Pinned by ' + pm.pinnedBy + '</p></div>';
      }
    }
    h += '</div>';
    document.getElementById("infoPanelContent").innerHTML = h;
  } else if (mode === "info") {
    document.getElementById("infoPanelTitle").textContent = "Group Info";
    var h = '<div class="p-5 space-y-5"><div><h4 class="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">About</h4><p class="text-[13px] text-gray-600 leading-relaxed">' + gc.description + '</p><p class="text-[12px] text-gray-500 mt-2">' + gc.members + ' members · ' + gc.events.length + ' events</p></div>';
    if (gc.events.length) {
      h += '<div><h4 class="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Events</h4>';
      for (var e = 0; e < gc.events.length; e++) {
        var ev = gc.events[e];
        h += '<div class="event-card p-3 bg-blue-50 border border-blue-100 rounded-lg mb-2" data-event-index="' + e + '" data-gc-id="' + gc.id + '"><p class="text-[12px] font-semibold text-gray-900">' + ev.title + '</p><p class="text-[10px] text-gray-500 mt-1">' + ev.date + ' · ' + ev.time + '</p><p class="text-[10px] text-gray-500">' + ev.venue + '</p><p class="text-[9px] text-blue-500 font-semibold mt-1">Click for details →</p></div>';
      }
      h += '</div>';
    }
    h += '</div>';
    document.getElementById("infoPanelContent").innerHTML = h;
  } else {
    var totalMembers = gc.membersList.length;
    var showCount = Math.min(membersDisplayCount, totalMembers);
    var onlineCount = gc.membersList.filter(function(m) { return m.online; }).length;
    document.getElementById("infoPanelTitle").textContent = "Members (" + totalMembers + ")";
    var h = '<div class="px-4 py-2"><p class="text-[11px] text-gray-400">' + onlineCount + ' online · ' + (totalMembers - onlineCount) + ' offline</p></div>';
    h += '<div class="p-3 space-y-1">';
    for (var m = 0; m < showCount; m++) {
      var mb = gc.membersList[m], mIni = ini(mb.name);
      var roleBadge = mb.role === "Admin" ? '<span class="text-[9px] font-bold text-red-500 px-1.5 py-0.5 bg-red-50 rounded">Admin</span>' : mb.role === "Moderator" ? '<span class="text-[9px] font-bold text-blue-500 px-1.5 py-0.5 bg-blue-50 rounded">Mod</span>' : '';
      var addBtnHtml = '';
      if (mb.friendStatus === "accepted") addBtnHtml = '<button class="member-unfriend-btn text-[9px] font-bold text-green-600 px-1.5 py-0.5 bg-green-50 hover:bg-red-50 hover:text-red-500 rounded transition" data-member-name="' + mb.name + '" title="Click to unfriend">Friend</button>';
      else if (mb.friendStatus === "pending") addBtnHtml = '<span class="text-[9px] font-bold text-yellow-600 px-1.5 py-0.5 bg-yellow-50 rounded">Pending</span>';
      else addBtnHtml = '<button class="member-add-btn text-[9px] font-bold text-blue-600 px-1.5 py-0.5 bg-blue-50 hover:bg-blue-100 rounded transition" data-member-name="' + mb.name + '">+ Add</button>';
      var onlineDot = mb.online ? '<div class="online-dot bg-green-500"></div>' : '<div class="online-dot bg-gray-300"></div>';
      h += '<div class="member-row flex items-center gap-3 px-3 py-2.5 rounded-lg transition">';
      h += '<div class="relative shrink-0 cursor-pointer" data-member-name="' + mb.name + '"><div class="w-8 h-8 rounded-full ' + mb.color + ' flex items-center justify-center text-white text-[10px] font-bold">' + mIni + '</div>' + onlineDot + '</div>';
      h += '<div class="flex-1 min-w-0 cursor-pointer" data-member-name="' + mb.name + '"><p class="text-[13px] font-semibold text-gray-800 truncate">' + mb.name + '</p><p class="text-[10px] text-gray-400">' + mb.batch + ' · ' + mb.course + '</p></div>';
      h += '<div class="flex items-center gap-1.5 shrink-0">' + roleBadge + addBtnHtml + '</div></div>';
    }
    if (showCount < totalMembers) {
      var remaining = totalMembers - showCount;
      h += '<button class="show-more-members-btn w-full text-center py-3 text-[12px] font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition mt-2 cursor-pointer">+' + remaining + ' more — click to show all</button>';
    } else if (totalMembers > 12) {
      h += '<button class="show-less-members-btn w-full text-center py-3 text-[12px] font-semibold text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition mt-2 cursor-pointer">Show less</button>';
    }
    h += '</div>';
    document.getElementById("infoPanelContent").innerHTML = h;
  }
}

function openEventDetail(gcId, eventIndex) {
  var gc = groupChats.find(function(g) { return g.id === gcId; });
  if (!gc || !gc.events[eventIndex]) return;
  var ev = gc.events[eventIndex], c = colorClasses[gc.color];
  document.getElementById("eventBanner").className = "h-[100px] bg-gradient-to-r " + c.banner + " flex items-center justify-center";
  document.getElementById("eventDetailTitle").textContent = ev.title;
  document.getElementById("eventDetailDate").textContent = ev.date;
  document.getElementById("eventDetailTime").textContent = ev.time;
  document.getElementById("eventDetailVenue").textContent = ev.venue;
  document.getElementById("eventDetailGroup").textContent = gc.name;
  document.getElementById("eventDetailDesc").textContent = ev.description || "No additional details.";
  openModal("eventDetailModal");
}

function openProfile(memberName) {
  if (memberName === "Mark Jacinto") return;
  var member = null, foundGc = null;
  for (var g = 0; g < groupChats.length; g++) {
    for (var m = 0; m < groupChats[g].membersList.length; m++) {
      if (groupChats[g].membersList[m].name === memberName) { member = groupChats[g].membersList[m]; foundGc = groupChats[g]; break; }
    }
    if (member) break;
  }
  if (!member) return;
  var c = colorClasses[foundGc.color];
  document.getElementById("profileBanner").className = "h-[80px] relative bg-gradient-to-r " + c.banner;
  document.getElementById("profileAvatar").className = "w-16 h-16 rounded-full flex items-center justify-center text-white text-[20px] font-bold border-4 border-white shadow-lg " + member.color;
  document.getElementById("profileAvatar").textContent = ini(member.name);
  document.getElementById("profileName").textContent = member.name;
  document.getElementById("profileBatch").textContent = member.batch;
  document.getElementById("profileCourse").textContent = member.course;
  var statusEl = document.getElementById("profileOnlineStatus");
  if (member.online) { statusEl.textContent = "Online"; statusEl.className = "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-600"; }
  else { statusEl.textContent = "Offline"; statusEl.className = "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500"; }
  var statusText = document.getElementById("profileStatusText");
  if (member.online) { statusText.textContent = "Online"; statusText.className = "text-[16px] font-bold text-green-600"; }
  else { statusText.textContent = "Offline"; statusText.className = "text-[16px] font-bold text-gray-400"; }
  var gCount = 0;
  for (var g = 0; g < groupChats.length; g++) {
    for (var m = 0; m < groupChats[g].membersList.length; m++) { if (groupChats[g].membersList[m].name === memberName) gCount++; }
  }
  document.getElementById("profileGroupCount").textContent = gCount;
  document.getElementById("profileFriendCount").textContent = Math.floor(Math.random() * 20) + 5;
  var roleBadge = member.role === "Admin" ? '<span class="text-[10px] font-bold text-red-600 px-2 py-0.5 bg-red-50 border border-red-200 rounded-full">Admin</span>' : member.role === "Moderator" ? '<span class="text-[10px] font-bold text-blue-600 px-2 py-0.5 bg-blue-50 border border-blue-200 rounded-full">Moderator</span>' : '<span class="text-[10px] font-bold text-gray-500 px-2 py-0.5 bg-gray-100 border border-gray-200 rounded-full">Member</span>';
  document.getElementById("profileRole").innerHTML = roleBadge;
  var addBtn = document.getElementById("profileAddBtn");
  addBtn.setAttribute("data-member-name", member.name);
  if (member.friendStatus === "accepted") { addBtn.innerHTML = 'Unfriend'; addBtn.className = "flex-1 px-4 py-2.5 bg-red-50 text-red-500 border border-red-200 text-[13px] font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-red-100 transition cursor-pointer"; }
  else if (member.friendStatus === "pending") { addBtn.innerHTML = 'Pending'; addBtn.className = "flex-1 px-4 py-2.5 bg-yellow-50 text-yellow-600 border border-yellow-200 text-[13px] font-semibold rounded-lg flex items-center justify-center gap-2 cursor-default"; }
  else { addBtn.innerHTML = 'Add Friend'; addBtn.className = "flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 text-[13px] font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"; }
  document.getElementById("profileMsgBtn").setAttribute("data-member-name", member.name);
  openModal("memberProfileModal");
}

function openDm(memberName) {
  var dm = dms.find(function(d) { return d.name === memberName; });
  if (!dm) {
    var member = null;
    for (var g = 0; g < groupChats.length; g++) {
      for (var m = 0; m < groupChats[g].membersList.length; m++) {
        if (groupChats[g].membersList[m].name === memberName) { member = groupChats[g].membersList[m]; break; }
      }
      if (member) break;
    }
    if (!member) return;
    dm = {id: dmIdCounter++, name: member.name, batch: member.batch, course: member.course, color: member.color, messages: []};
    dms.unshift(dm);
  }
  activeChat = {type: "dm", id: dm.id};
  currentTab = "dms";
  updateTabs();
  renderChat();
}

function getTimeStr() {
  var d = new Date();
  var mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var h = d.getHours(), ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return mo[d.getMonth()] + " " + d.getDate() + ", " + h + ":" + String(d.getMinutes()).padStart(2, "0") + " " + ap;
}

function sendMessage(text, type, extra) {
  if (!activeChat) return;
  msgIdCounter++;
  var msg = {id: msgIdCounter, author: "Mark Jacinto", text: text || "", time: getTimeStr(), color: "bg-[#111113]", type: type || "text", reactions: {}, seenBy: [], replyTo: replyingTo || null};
  if (type === "photo") msg.photoData = extra;
  if (type === "gif") msg.gifUrl = extra;
  if (type === "file") { msg.fileName = extra.name; msg.fileSize = formatFileSize(extra.size); msg.fileData = extra.data; }
  if (activeChat.type === "group") {
    var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
    if (gc) gc.messages.push(msg);
  } else {
    var dm = dms.find(function(d) { return d.id === activeChat.id; });
    if (dm) dm.messages.push(msg);
  }
  cancelReply();
  renderChat();
}

document.getElementById("photoInput").addEventListener("change", function() {
  if (this.files && this.files[0]) {
    var r = new FileReader();
    r.onload = function(e) { uploadedPhoto = e.target.result; document.getElementById("photoPreview").src = uploadedPhoto; document.getElementById("photoPreviewWrap").classList.remove("hidden"); };
    r.readAsDataURL(this.files[0]);
  }
});
document.getElementById("removePhotoBtn").addEventListener("click", function() { uploadedPhoto = null; document.getElementById("photoPreviewWrap").classList.add("hidden"); document.getElementById("photoInput").value = ""; });

document.getElementById("fileInput").addEventListener("change", function() {
  if (this.files && this.files[0]) {
    var file = this.files[0];
    var r = new FileReader();
    r.onload = function(e) {
      uploadedFile = {name: file.name, size: file.size, data: e.target.result};
      document.getElementById("filePreviewName").textContent = file.name;
      document.getElementById("filePreviewSize").textContent = formatFileSize(file.size);
      document.getElementById("filePreviewWrap").classList.remove("hidden");
    };
    r.readAsDataURL(file);
  }
});
document.getElementById("removeFileBtn").addEventListener("click", function() { uploadedFile = null; document.getElementById("filePreviewWrap").classList.add("hidden"); document.getElementById("fileInput").value = ""; });

document.getElementById("cancelReplyBtn").addEventListener("click", function() { cancelReply(); });

function updateTabs() {
  document.querySelectorAll(".chat-tab").forEach(function(t) {
    t.className = t.getAttribute("data-tab") === currentTab
      ? "chat-tab flex-1 px-2 py-1.5 text-[11px] font-semibold rounded-lg bg-blue-600 text-white"
      : "chat-tab flex-1 px-2 py-1.5 text-[11px] font-semibold rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50";
  });
  renderChatList();
}

document.addEventListener("click", function(e) {
  var tab = e.target.closest(".chat-tab");
  if (tab) { currentTab = tab.getAttribute("data-tab"); updateTabs(); return; }

  var chatItem = e.target.closest(".gc-item");
  if (chatItem) {
    var type = chatItem.getAttribute("data-chat-type"), id = chatItem.getAttribute("data-chat-id");
    activeChat = {type: type, id: type === "dm" ? parseInt(id) : id};
    infoPanelMode = null; membersDisplayCount = 12;
    document.getElementById("infoPanel").classList.add("hidden");
    cancelReply(); renderChat(); return;
  }

  var joinGroupBtn = e.target.closest(".join-group-btn");
  if (joinGroupBtn) {
    var gcId = joinGroupBtn.getAttribute("data-gc-id");
    var gc = groupChats.find(function(g) { return g.id === gcId; });
    if (gc) { gc.joined = true; gc.members += 1; saveJoinState(); renderChat(); showToast("You joined " + gc.name + "!"); }
    return;
  }

  if (e.target.closest("#chatTitleWrap") && activeChat && activeChat.type === "group") {
    var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
    if (gc && gc.joined) { document.getElementById("chatSettingsMenu").classList.toggle("hidden"); }
    return;
  }
  if (e.target.closest("#menuSearchChat")) { document.getElementById("chatSettingsMenu").classList.add("hidden"); showToast("Search in chat coming soon!"); return; }
  if (e.target.closest("#menuAddPeople")) { document.getElementById("chatSettingsMenu").classList.add("hidden"); showToast("Invite link copied!"); return; }
  if (e.target.closest("#menuViewMembers")) { document.getElementById("chatSettingsMenu").classList.add("hidden"); membersDisplayCount = 9999; renderPanel("members"); return; }
  if (e.target.closest("#menuGroupInfo")) { document.getElementById("chatSettingsMenu").classList.add("hidden"); renderPanel("info"); return; }
  if (e.target.closest("#menuMute")) {
    document.getElementById("chatSettingsMenu").classList.add("hidden");
    var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
    if (gc) { gc.muted = !gc.muted; showToast(gc.muted ? "Group muted" : "Group unmuted"); }
    return;
  }
  if (e.target.closest("#menuNotifs")) { document.getElementById("chatSettingsMenu").classList.add("hidden"); showToast("Notification preferences updated!"); return; }
  if (e.target.closest("#menuPinnedMsgs")) { document.getElementById("chatSettingsMenu").classList.add("hidden"); renderPanel("pinned"); return; }
  if (e.target.closest("#menuLeave")) {
    document.getElementById("chatSettingsMenu").classList.add("hidden");
    if (!confirm("Leave this group?")) return;
    var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
    if (gc) { gc.joined = false; gc.members = Math.max(0, gc.members - 1); saveJoinState(); renderChat(); }
    return;
  }

  if (e.target.closest("#closeInfoBtn")) { document.getElementById("infoPanel").classList.add("hidden"); infoPanelMode = null; return; }

  if (e.target.closest("#attachPlusBtn")) { document.getElementById("attachMenu").classList.toggle("hidden"); document.getElementById("stickerPicker").classList.add("hidden"); document.getElementById("gifPicker").classList.add("hidden"); return; }
  if (e.target.closest("#attachPhotoItem")) { document.getElementById("attachMenu").classList.add("hidden"); document.getElementById("photoInput").click(); return; }
  if (e.target.closest("#attachFileItem")) { document.getElementById("attachMenu").classList.add("hidden"); document.getElementById("fileInput").click(); return; }

  if (e.target.closest("#sendBtn")) {
    var input = document.getElementById("chatInput"), text = input.value.trim();
    if (uploadedFile) { sendMessage("", "file", uploadedFile); uploadedFile = null; document.getElementById("filePreviewWrap").classList.add("hidden"); document.getElementById("fileInput").value = ""; input.value = ""; input.style.height = "44px"; return; }
    if (uploadedPhoto) { sendMessage("", "photo", uploadedPhoto); uploadedPhoto = null; document.getElementById("photoPreviewWrap").classList.add("hidden"); document.getElementById("photoInput").value = ""; input.value = ""; input.style.height = "44px"; return; }
    if (!text) return;
    sendMessage(text, "text"); input.value = ""; input.style.height = "44px"; return;
  }

  if (e.target.closest("#stickerBtn")) {
    document.getElementById("stickerPicker").classList.toggle("hidden");
    document.getElementById("gifPicker").classList.add("hidden");
    document.getElementById("attachMenu").classList.add("hidden");
    if (!document.getElementById("stickerPicker").classList.contains("hidden")) {
      document.getElementById("stickerSearchInput").value = "";
      renderStickerGrid(allStickers);
      document.getElementById("stickerSearchInput").focus();
    }
    return;
  }
  var sp = e.target.closest(".sticker-pick");
  if (sp) {
    var emoji = sp.getAttribute("data-sticker");
    var input = document.getElementById("chatInput");
    input.value += emoji;
    input.focus();
    document.getElementById("stickerPicker").classList.add("hidden");
    return;
  }

  if (e.target.closest("#gifBtn")) {
    document.getElementById("gifPicker").classList.toggle("hidden");
    document.getElementById("stickerPicker").classList.add("hidden");
    document.getElementById("attachMenu").classList.add("hidden");
    if (!document.getElementById("gifPicker").classList.contains("hidden")) {
      document.getElementById("gifSearchInput").value = "";
      loadTrendingGifs();
      document.getElementById("gifSearchInput").focus();
    }
    return;
  }
  var gp = e.target.closest(".gif-result");
  if (gp) { sendMessage(gp.getAttribute("data-gif-label"), "gif", gp.getAttribute("data-gif-url")); document.getElementById("gifPicker").classList.add("hidden"); return; }

  var replyBtn = e.target.closest(".reply-msg-btn");
  if (replyBtn) { setReply(parseInt(replyBtn.getAttribute("data-msg-id"))); return; }

  var reactBtn = e.target.closest(".react-msg-btn");
  if (reactBtn) {
    var existing = document.querySelector(".react-picker-popup");
    if (existing) existing.remove();
    var msgId = parseInt(reactBtn.getAttribute("data-msg-id"));
    var picker = document.createElement("div");
    picker.className = "react-picker-popup bg-white border border-gray-200 rounded-xl shadow-lg z-50 flex items-center gap-1 px-2 py-1.5";
    picker.style.position = "absolute";
    var emojiHtml = "";
    for (var re = 0; re < reactionEmojis.length; re++) {
      emojiHtml += '<button class="react-emoji-pick w-7 h-7 flex items-center justify-center text-[16px] hover:bg-gray-100 rounded-lg cursor-pointer transition" data-msg-id="' + msgId + '" data-emoji="' + reactionEmojis[re] + '">' + reactionEmojis[re] + '</button>';
    }
    picker.innerHTML = emojiHtml;
    var rect = reactBtn.getBoundingClientRect();
    var msgContainer = document.getElementById("chatMessages");
    var containerRect = msgContainer.getBoundingClientRect();
    picker.style.top = (rect.top - containerRect.top + msgContainer.scrollTop - 40) + "px";
    picker.style.left = (rect.left - containerRect.left - 80) + "px";
    msgContainer.style.position = "relative";
    msgContainer.appendChild(picker);
    return;
  }

  var emojiPick = e.target.closest(".react-emoji-pick");
  if (emojiPick) {
    toggleReaction(parseInt(emojiPick.getAttribute("data-msg-id")), emojiPick.getAttribute("data-emoji"));
    var popup = document.querySelector(".react-picker-popup");
    if (popup) popup.remove();
    return;
  }

  var reactionBadge = e.target.closest(".reaction-badge");
  if (reactionBadge) { toggleReaction(parseInt(reactionBadge.getAttribute("data-msg-id")), reactionBadge.getAttribute("data-emoji")); return; }

  var pinBtn = e.target.closest(".pin-msg-btn");
  if (pinBtn) { pinMessage(parseInt(pinBtn.getAttribute("data-msg-id"))); return; }

  if (e.target.closest("#unpinBannerBtn")) {
    if (activeChat && activeChat.type === "group") {
      var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
      if (gc && gc.pinnedMessages && gc.pinnedMessages.length) { gc.pinnedMessages.pop(); renderPinnedBanner(); renderChat(); showToast("Message unpinned."); }
    }
    return;
  }

  var unpinPanelBtn = e.target.closest(".unpin-panel-btn");
  if (unpinPanelBtn) {
    var mid = parseInt(unpinPanelBtn.getAttribute("data-msg-id"));
    if (activeChat && activeChat.type === "group") {
      var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
      if (gc && gc.pinnedMessages) {
        var idx = gc.pinnedMessages.findIndex(function(p) { return p.msgId === mid; });
        if (idx > -1) { gc.pinnedMessages.splice(idx, 1); renderPanel("pinned"); renderPinnedBanner(); renderChat(); showToast("Message unpinned."); }
      }
    }
    return;
  }

  if (e.target.closest("#pinnedBanner") && !e.target.closest("#unpinBannerBtn")) {
    if (activeChat && activeChat.type === "group") {
      var gc = groupChats.find(function(g) { return g.id === activeChat.id; });
      if (gc && gc.pinnedMessages && gc.pinnedMessages.length) {
        var lastPin = gc.pinnedMessages[gc.pinnedMessages.length - 1];
        var el = document.getElementById("msg-" + lastPin.msgId);
        if (el) { el.scrollIntoView({behavior: "smooth", block: "center"}); el.style.background = "#FEF3C7"; setTimeout(function() { el.style.background = ""; }, 1500); }
      }
    }
    return;
  }

  var scrollToMsg = e.target.closest("[data-scroll-to-msg]");
  if (scrollToMsg) {
    var targetId = scrollToMsg.getAttribute("data-scroll-to-msg");
    var el = document.getElementById("msg-" + targetId);
    if (el) { el.scrollIntoView({behavior: "smooth", block: "center"}); el.style.background = "#DBEAFE"; setTimeout(function() { el.style.background = ""; }, 1500); }
    return;
  }

  var seenBtn = e.target.closest(".seen-by-btn");
  if (seenBtn) { openSeenByModal(parseInt(seenBtn.getAttribute("data-msg-id"))); return; }

  var dlBtn = e.target.closest(".file-download-btn");
  if (dlBtn) {
    var fileData = decodeURIComponent(dlBtn.getAttribute("data-file-data"));
    var fileName = dlBtn.getAttribute("data-file-name");
    var a = document.createElement("a"); a.href = fileData; a.download = fileName; a.click();
    showToast("Downloading " + fileName + "...");
    return;
  }

  if (e.target.closest(".show-more-members-btn")) { membersDisplayCount = 9999; renderPanel("members"); return; }
  if (e.target.closest(".show-less-members-btn")) { membersDisplayCount = 12; renderPanel("members"); return; }

  var eventCard = e.target.closest(".event-card");
  if (eventCard) { openEventDetail(eventCard.getAttribute("data-gc-id"), parseInt(eventCard.getAttribute("data-event-index"))); return; }

  var memberAddBtn = e.target.closest(".member-add-btn");
  if (memberAddBtn) {
    var name = memberAddBtn.getAttribute("data-member-name");
    for (var g = 0; g < groupChats.length; g++) {
      for (var m = 0; m < groupChats[g].membersList.length; m++) {
        if (groupChats[g].membersList[m].name === name && groupChats[g].membersList[m].friendStatus === "none") groupChats[g].membersList[m].friendStatus = "pending";
      }
    }
    renderPanel("members"); showToast("Friend request sent to " + name + "!"); return;
  }

  var unfriendBtn = e.target.closest(".member-unfriend-btn");
  if (unfriendBtn) {
    var name = unfriendBtn.getAttribute("data-member-name");
    if (!confirm("Unfriend " + name + "?")) return;
    for (var g = 0; g < groupChats.length; g++) {
      for (var m = 0; m < groupChats[g].membersList.length; m++) {
        if (groupChats[g].membersList[m].name === name) groupChats[g].membersList[m].friendStatus = "none";
      }
    }
    renderPanel("members"); showToast(name + " removed from friends."); return;
  }

  var editBtn = e.target.closest(".edit-msg-btn");
  if (editBtn) {
    var mid = parseInt(editBtn.getAttribute("data-msg-id"));
    var msgs = activeChat.type === "group" ? groupChats.find(function(g) { return g.id === activeChat.id; }).messages : dms.find(function(d) { return d.id === activeChat.id; }).messages;
    var msg = msgs.find(function(m) { return m.id === mid; });
    if (msg && msg.type === "text") { editingMsg = {chatType: activeChat.type, chatId: activeChat.id, msgId: mid}; document.getElementById("editMsgText").value = msg.text; openModal("editMsgModal"); }
    return;
  }

  var delBtn = e.target.closest(".delete-msg-btn");
  if (delBtn) {
    if (!confirm("Delete this message?")) return;
    var mid = parseInt(delBtn.getAttribute("data-msg-id"));
    var msgs = activeChat.type === "group" ? groupChats.find(function(g) { return g.id === activeChat.id; }).messages : dms.find(function(d) { return d.id === activeChat.id; }).messages;
    var idx = msgs.findIndex(function(m) { return m.id === mid; });
    if (idx > -1) { msgs.splice(idx, 1); renderChat(); showToast("Message deleted."); }
    return;
  }

  if (e.target.closest("#saveEditMsg")) {
    var t = document.getElementById("editMsgText").value.trim();
    if (!t) { alert("Message cannot be empty."); return; }
    var msgs = editingMsg.chatType === "group" ? groupChats.find(function(g) { return g.id === editingMsg.chatId; }).messages : dms.find(function(d) { return d.id === editingMsg.chatId; }).messages;
    var msg = msgs.find(function(m) { return m.id === editingMsg.msgId; });
    if (msg) { msg.text = t; msg.edited = true; }
    closeModal("editMsgModal"); renderChat(); showToast("Message updated."); return;
  }
  if (e.target.closest("#cancelEditMsg") || e.target.closest("#closeEditMsgBtn")) { closeModal("editMsgModal"); return; }

  if (e.target.closest("#eventRsvpBtn")) { showToast("RSVP confirmed! See you there!"); closeModal("eventDetailModal"); return; }
  if (e.target.closest("#closeEventBtn")) { closeModal("eventDetailModal"); return; }
  if (e.target.closest("#closeSeenByBtn")) { closeModal("seenByModal"); return; }

  if (e.target.closest("#profileAddBtn")) {
    var btn = document.getElementById("profileAddBtn"), name = btn.getAttribute("data-member-name");
    var currentStatus = "none";
    for (var g = 0; g < groupChats.length; g++) {
      for (var m = 0; m < groupChats[g].membersList.length; m++) {
        if (groupChats[g].membersList[m].name === name) { currentStatus = groupChats[g].membersList[m].friendStatus; break; }
      }
    }
    if (currentStatus === "accepted") {
      if (!confirm("Unfriend " + name + "?")) return;
      for (var g = 0; g < groupChats.length; g++) {
        for (var m = 0; m < groupChats[g].membersList.length; m++) {
          if (groupChats[g].membersList[m].name === name) groupChats[g].membersList[m].friendStatus = "none";
        }
      }
      btn.innerHTML = "Add Friend";
      btn.className = "flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 text-[13px] font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition";
      showToast(name + " removed from friends.");
    } else if (currentStatus === "none") {
      for (var g = 0; g < groupChats.length; g++) {
        for (var m = 0; m < groupChats[g].membersList.length; m++) {
          if (groupChats[g].membersList[m].name === name) groupChats[g].membersList[m].friendStatus = "pending";
        }
      }
      btn.innerHTML = "Pending";
      btn.className = "flex-1 px-4 py-2.5 bg-yellow-50 text-yellow-600 border border-yellow-200 text-[13px] font-semibold rounded-lg flex items-center justify-center gap-2 cursor-default";
      showToast("Friend request sent to " + name + "!");
    }
    return;
  }
  if (e.target.closest("#profileMsgBtn")) { var name = document.getElementById("profileMsgBtn").getAttribute("data-member-name"); closeModal("memberProfileModal"); openDm(name); return; }
  if (e.target.closest("#closeProfileBtn")) { closeModal("memberProfileModal"); return; }

  var memberEl = e.target.closest("[data-member-name]");
  if (memberEl && !memberEl.closest("#memberProfileModal") && !memberEl.classList.contains("member-add-btn") && !memberEl.classList.contains("member-unfriend-btn") && !memberEl.classList.contains("seen-dot")) {
    openProfile(memberEl.getAttribute("data-member-name")); return;
  }

  var seenDot = e.target.closest(".seen-dot");
  if (seenDot) { openProfile(seenDot.getAttribute("data-member-name")); return; }

  if (!e.target.closest("#chatTitleWrap") && !e.target.closest("#chatSettingsMenu")) document.getElementById("chatSettingsMenu").classList.add("hidden");
  if (!e.target.closest("#stickerBtn") && !e.target.closest("#stickerPicker")) document.getElementById("stickerPicker").classList.add("hidden");
  if (!e.target.closest("#gifBtn") && !e.target.closest("#gifPicker")) document.getElementById("gifPicker").classList.add("hidden");
  if (!e.target.closest("#attachPlusBtn") && !e.target.closest("#attachMenu")) document.getElementById("attachMenu").classList.add("hidden");
  if (!e.target.closest(".react-msg-btn") && !e.target.closest(".react-picker-popup")) {
    var rp = document.querySelector(".react-picker-popup");
    if (rp) rp.remove();
  }
});

document.getElementById("chatInput").addEventListener("keydown", function(e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); document.getElementById("sendBtn").click(); } });
document.getElementById("chatInput").addEventListener("input", function() { this.style.height = "44px"; this.style.height = Math.min(this.scrollHeight, 120) + "px"; });
document.getElementById("gcSearchInput").addEventListener("input", function() {
  var q = this.value.toLowerCase();
  document.querySelectorAll(".gc-item").forEach(function(item) {
    var n = item.querySelector("p").textContent.toLowerCase();
    item.style.display = n.includes(q) ? "" : "none";
  });
});

// ===== HEADER DROPDOWNS =====
document.getElementById("avatarBtn").addEventListener("click", function(e) { e.stopPropagation(); closeAll(); document.getElementById("userDropdown").classList.toggle("hidden"); });
document.getElementById("notifBtn").addEventListener("click", function(e) { e.stopPropagation(); closeAll(); document.getElementById("notifDropdown").classList.toggle("hidden"); });
document.getElementById("markAllReadBtn").addEventListener("click", function() { document.querySelectorAll(".notif-dot").forEach(function(d) { d.classList.add("hidden"); }); document.getElementById("notifBadge").classList.add("hidden"); });
document.getElementById("searchInput").addEventListener("focus", function() { closeAll(); document.getElementById("searchDropdown").classList.remove("hidden"); });

function closeAll() {
  document.getElementById("userDropdown").classList.add("hidden");
  document.getElementById("notifDropdown").classList.add("hidden");
  document.getElementById("searchDropdown").classList.add("hidden");
  document.getElementById("chatSettingsMenu").classList.add("hidden");
}

document.addEventListener("click", function(e) {
  if (!e.target.closest("#avatarBtn") && !e.target.closest("#userDropdown")) document.getElementById("userDropdown").classList.add("hidden");
  if (!e.target.closest("#notifBtn") && !e.target.closest("#notifDropdown")) document.getElementById("notifDropdown").classList.add("hidden");
  if (!e.target.closest("#searchContainer")) document.getElementById("searchDropdown").classList.add("hidden");
});

document.getElementById("logoutBtn").addEventListener("click", function() { if (confirm("Logout?")) { alert("Logged out."); window.location.href = "../index.html"; } });

function openModal(id) { document.getElementById(id).classList.add("active"); }
function closeModal(id) { document.getElementById(id).classList.remove("active"); }
document.querySelectorAll(".modal-overlay").forEach(function(m) { m.addEventListener("click", function(e) { if (e.target === m) m.classList.remove("active"); }); });

function showToast(msg) {
  var t = document.getElementById("successToast");
  document.getElementById("toastMsg").textContent = msg;
  t.classList.remove("hidden");
  setTimeout(function() { t.classList.add("hidden"); }, 3000);
}

saveJoinState();
renderChatList();

var urlParams = new URLSearchParams(window.location.search);
var targetGroup = urlParams.get("group");
if (targetGroup) {
  var targetGc = groupChats.find(function(g) { return g.id === targetGroup; });
  if (targetGc) {
    activeChat = {type: "group", id: targetGc.id};
    renderChat();
  } else {
    var firstJoined = groupChats.find(function(g) { return g.joined; });
    if (firstJoined) { activeChat = {type: "group", id: firstJoined.id}; renderChat(); }
  }
} else {
  var firstJoined = groupChats.find(function(g) { return g.joined; });
  if (firstJoined) { activeChat = {type: "group", id: firstJoined.id}; renderChat(); }
}
})();

// ===== SIDEBAR TOGGLE (MOBILE) =====
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('-translate-x-full');document.getElementById('sidebarOverlay').classList.toggle('hidden');}
function closeSidebar(){document.getElementById('sidebar').classList.add('-translate-x-full');document.getElementById('sidebarOverlay').classList.add('hidden');}
document.querySelectorAll('#sidebar nav a').forEach(function(a){a.addEventListener('click',function(){if(window.innerWidth<1024)closeSidebar();});});

// ===== CHAT LIST TOGGLE (MOBILE) =====
function toggleChatList(){document.getElementById('chatListPanel').classList.toggle('-translate-x-full');document.getElementById('chatListOverlay').classList.toggle('hidden');}
function closeChatList(){document.getElementById('chatListPanel').classList.add('-translate-x-full');document.getElementById('chatListOverlay').classList.add('hidden');}

// ===== INFO PANEL (MOBILE) =====
function closeInfoPanel(){document.getElementById('infoPanel').classList.add('hidden');document.getElementById('infoPanelOverlay').classList.add('hidden');}
function showInfoPanel(){document.getElementById('infoPanel').classList.remove('hidden');if(window.innerWidth<1024){document.getElementById('infoPanelOverlay').classList.remove('hidden');}}
