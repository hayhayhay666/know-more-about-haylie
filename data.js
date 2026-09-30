// ============================================
// Portfolio data — Journey timeline structure
// ============================================

const IMG_PORTRAIT = "./images/aadkxpdiwroou_ve_miaoda-fdc527f9.png";
const IMG_HERO_BG = "assets/images/journey-mountain.jpg";
const IMG_DOOMSDAY_BG = "assets/images/journey-mountain.jpg";

const HERO_DATA = {
  eyebrow: "Haylie Chau · Hiu Ying CHAU",
  title: "It's not practical to ask people to stop. So why not ask the corporates to make the change instead?",
  subtitle: "Changing systems, not asking people to sacrifice.",
  name: "Haylie Chau",
  role: "MSc Climate Change, Management & Finance · Imperial College London",
  bgImage: IMG_HERO_BG
};

// ===== Journey Timeline =====
// Each chapter: era, title, tagline, keywords[], type ("hero"|"text"|"photo-grid"|"no-photo"),
// heroImage + heroCaption (for hero type), images[] (for photo-grid type), metrics[]
const JOURNEY_DATA = [
  // 01 — Doomsday Clock (full-bleed image + quote)
  {
    era: "01 · Starting Point",
    title: "Doomsday Clock",
    tagline: '"This place belongs to many living things — not just us. We cannot destroy it."',
    type: "hero",
    heroImage: IMG_DOOMSDAY_BG,
    heroCaption: "The thought that started it all",
    reverse: true
  },

  // 02 — Two Suitcases
  {
    era: "02 · Turning Point",
    title: "Two Suitcases",
    tagline: "Arrived in the UK alone during COVID — and now I know where the best coffee in London is. Learned independence, but also when to ask for help.",
    keywords: ["Resilience", "Adaptability", "Independence"],
    metrics: [
      { value: "2", label: "Suitcases arrived with" },
      { value: "London", label: "Is now my home" }
    ],
    type: "photo",
    heroImage: "assets/images/journey-coffee.jpg",
    heroCaption: "Best coffee in London",
    reverse: false
  },

  // 03 — UCL (undergrad + dissertation)
  {
    era: "03 · Undergrad",
    title: "UCL — Earth Sciences",
    tagline: "First Class dissertation on Himalayan weathering & climate feedback — self-taught the coding, self-directed the research.",
    keywords: ["Climate Science", "Research", "Independent Work"],
    metrics: [
      { value: "74.11", label: "Final score" }
    ],
    type: "photo",
    heroImage: "assets/images/ucl-dissertation.jpg",
    heroCaption: "Dissertation report — GEOL0014",
    reverse: false
  },

  // 04 — Imperial (current)
  {
    era: "04 · Current Chapter",
    title: "Imperial College",
    tagline: "MSc Climate Change, Management & Finance, where the science meets capital and business decisions. To be continued ...",
    keywords: ["Energy Systems", "Finance", "Strategy"],
    type: "photo",
    heroImage: "assets/images/imperial-business-school.jpg",
    heroCaption: "Imperial College Business School",
    reverse: true
  },

  // 05 — HKPC (CarbonSorb + food waste)
  {
    era: "05 · Policy and Tech · HKPC",
    title: "CarbonSorb & Food TranSmarter",
    tagline: "Built a direct air capture prototype with engineering interns. Also worked on the Food TranSmarter food waste-to-energy initiative, contributed to promotion, daily operations, which involved many stakeholder engagements, and procurement for the next phase.",
    keywords: ["Prototyping", "Cross-functional communication", "Team player", "Critical Assessment"],
    metrics: [
      { value: "90%", label: "CO₂ reduced in 12h" },
      { value: "Won the deck presentation", label: "amongst 6 groups of interns" }
    ],
    type: "photo-grid",
    heroImage: "assets/images/hkpc-prototype.jpg",
    heroCaption: "Photo of the desktop prototype @HKPC",
    images: [
      { src: "assets/images/hkpc-group.jpg", caption: "Group photo @HKPC" },
      { src: "assets/images/hkpc-foodtrans.jpg", caption: "Working with the Food TranSmarter @HKPC", rotate: 90 },
      { src: "assets/images/hkpc-elderly.jpg", caption: "Promoting the Food TranSmarter to an elderly in an estate @HKPC" },
      { src: "assets/images/hkpc-present.jpg", caption: "Presenting our prototype to our general managers @HKPC", rotate: 90 },
      { src: "assets/images/hkpc-award.jpg", caption: "We won the deck presentation amongst 6 groups of interns @HKPC" }
    ],
    reverse: true
  },

  // 06 — Fugro
  {
    era: "06 · Geotechnical · Fugro",
    title: "Landslide Risk Assessment",
    tagline: "Conducted field inspections, slope hazard assessments, and trial pit logging to generate reports in ArcGIS, which are presented to the Hong Kong Civil Engineering & Development Department to plan hard engineering work.",
    keywords: ["Fieldwork", "ArcGIS", "Soil Logging", "Landslide Modelling"],
    type: "photo-grid",
    heroImage: "assets/images/fugro-slope1.jpg",
    heroCaption: "Slope mapping @Fugro",
    images: [
      { src: "assets/images/fugro-slope2.jpg", caption: "Slope mapping @Fugro" },
      { src: "assets/images/fugro-soil.jpg", caption: "Soil logging @Fugro" },
      { src: "assets/images/fugro-landslide.jpg", caption: "Landslide modelling @Fugro" },
      { src: "assets/images/fugro-trialpit.jpg", caption: "Trial pit logging @Fugro" }
    ],
    reverse: false
  },

  // 07 — WGO
  {
    era: "07 · Community · WGO",
    title: "Source Reduction Education",
    tagline: "Ran booths and Green Walk events for World Green Organisation — discovered most people don't even know basic recycling rules.",
    keywords: ["Community Engagement", "Public Education", "Event Coordination"],
    type: "photo-grid",
    heroImage: "assets/images/wgo-greenwalk-v3.jpg",
    heroCaption: "Green Walk 2022 @WGO",
    images: [
      { src: "assets/images/wgo-group.jpg", caption: "Group photo @WGO" },
      { src: "assets/images/wgo-stall.jpg", caption: "Hosting stall games @WGO", rotate: 90 }
    ],
    reverse: true
  },

  // 08 — Headstart
  {
    era: "08 · Consulting · Headstart",
    title: "Restaurant Sustainability Scoring",
    tagline: "Delivered what the client asked for — then told them honestly why incentives alone wouldn't work. Real change needs reward and penalty mechanisms from the authorities.",
    keywords: ["Consulting", "Sustainability Strategy", "Honest Assessment"],
    type: "no-photo",
    reverse: false
  },

  // 09 — UCL Energy Society / G3 Summit
  {
    era: "09 · Leadership · UCL Energy Society",
    title: "G3 Energy Summit",
    tagline: "As Marketing & Social Secretary, created promotional materials, outreached to guest speakers and co-organised a 150-person conference across 3 universities — content reached 27,000 people.",
    keywords: ["External facing", "Event Production", "Partnerships"],
    metrics: [
      { value: "150", label: "Attendees" },
      { value: "27,000", label: "Content reach" },
      { value: "3 unis", label: "Cross-institutional" }
    ],
    type: "photo-grid",
    heroImage: "assets/images/energy-society1.jpg",
    heroCaption: "Society networking events with UCL Energy Society",
    images: [
      { src: "assets/images/energy-society2.jpg", caption: "Society networking events with UCL Energy Society" }
    ],
    reverse: true
  },

  // 10 — Energy Advisory (future direction)
  {
    era: "10 · Future",
    title: "Energy Advisory",
    tagline: "Help corporations switch to clean energy — so ordinary people can keep their air conditioning on. Change should happen upstream, so it doesn't feel like a sacrifice downstream.",
    keywords: ["Clean Energy Transition", "Corporate Strategy", "Systems Change"],
    type: "text",
    reverse: false
  }
];

// ===== Skills =====
const SKILLS_DATA = [
  {
    number: "01",
    title: "Systems Analysis & Net-Impact Judgment",
    evidence: "Questioned food waste-to-energy when transport was factored in. Diagnosed incentive misalignment in the Headstart restaurant project."
  },
  {
    number: "02",
    title: "Cross-Organisation Collaboration & Delivery",
    evidence: "Initiated partnerships across 3 universities for the 150-person G3 Energy Summit. Coordinated with engineers at HKPC — translating problems into engineering solutions."
  },
  {
    number: "03",
    title: "Hands-On Verification & Iterative Testing",
    evidence: "Assembled CarbonSorb prototype and drilled the casing myself. Extended CO₂ capture testing from 1-hour trials to overnight endurance runs."
  }
];

// ===== Expectations (added from food waste reflection) =====
const EXPECTATIONS_DATA = [
  {
    label: "What I expect from energy work",
    title: "Real net impact — not just for KPIs",
    body: "Transporting food waste consumed more resources than the energy produced. Too many green projects exist to check boxes. I want to work on things that actually move the needle."
  },
  {
    label: "What I expect from myself",
    title: "Meaningful work, constantly verified",
    body: "Deliver what's asked, then tell the truth about what won't work. Keep building, testing, iterating. The goal isn't to look busy; it's to get better at what matters."
  }
];

const TRAITS = ["Pragmatic", "Fast learner", "Honest self-assessment"];

// ===== Contact =====
const CONTACT_DATA = {
  title: "Energy advisory",
  subtitle: "Looking for meaningful roles where I can make a change.",
  email: "hayliechau.hy@gmail.com",
  phone: "+44 7832593789"
};

Object.assign(window, {
  HERO_DATA, JOURNEY_DATA, SKILLS_DATA, EXPECTATIONS_DATA, TRAITS, CONTACT_DATA,
  IMG_PORTRAIT, IMG_HERO_BG, IMG_DOOMSDAY_BG
});
