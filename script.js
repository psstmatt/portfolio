const projects = [
  {
    id: "boeing-social-web",
    title: "Social web",
    company: "Boeing",
    companyGroup: "Social web",
    companyChapter: "Boeing",
    companyLogo: "assets/favicons/boeing.ico",
    logoSource: "https://www.boeing.com/favicon.ico",
    role: "Commercial IT, Space & Defense",
    year: "June 2010-January 2016",
    platform: "Enterprise web",
    oneLiner: "A social product surface for teams navigating Boeing-scale knowledge and collaboration.",
    impact: "A social product surface for teams navigating Boeing-scale knowledge and collaboration.",
    summary: "Public-safe Boeing chapter focused on social web patterns for large enterprise teams, with the sensitive product detail intentionally abstracted.",
    tags: ["Enterprise web", "Social systems", "Knowledge sharing"],
    deviceType: "laptop",
    previewAsset: "boeing-social",
    accent: "#1f65b7",
    threadColor: "#1f65b7",
    deviceTilt: -4,
    deviceScale: 0.94,
    railOffset: -18,
    confidential: false
  },
  {
    id: "boeing-search-web",
    title: "Search web",
    company: "Boeing",
    companyGroup: "Search web",
    companyChapter: "Boeing",
    companyLogo: "assets/favicons/boeing.ico",
    logoSource: "https://www.boeing.com/favicon.ico",
    role: "Commercial IT, Space & Defense",
    year: "June 2010-January 2016",
    platform: "Enterprise search",
    oneLiner: "Search patterns that made large enterprise knowledge easier to find and act on.",
    impact: "Search patterns that made large enterprise knowledge easier to find and act on.",
    summary: "Search and discovery work for complex internal information spaces, framed here as a public, abstract product node.",
    tags: ["Search", "Enterprise UX", "Information architecture"],
    deviceType: "laptop",
    previewAsset: "boeing-search",
    accent: "#235b98",
    threadColor: "#235b98",
    deviceTilt: 3,
    deviceScale: 0.9,
    railOffset: 20,
    confidential: false
  },
  {
    id: "boeing-skywalker-app",
    title: "Skywalker app",
    company: "Boeing",
    companyGroup: "Skywalker",
    companyChapter: "Boeing",
    companyLogo: "assets/favicons/boeing.ico",
    logoSource: "https://www.boeing.com/favicon.ico",
    role: "Commercial IT, Space & Defense",
    year: "June 2010-January 2016",
    platform: "Internal app",
    oneLiner: "An app surface for complex aerospace work, kept abstract and portfolio-safe.",
    impact: "An app surface for complex aerospace work, kept abstract and portfolio-safe.",
    summary: "A named internal app project represented as an abstract device preview so the rail can show range without exposing sensitive details.",
    tags: ["Internal app", "Aerospace", "Systems design"],
    deviceType: "phone",
    previewAsset: "boeing-skywalker",
    accent: "#2a70c8",
    threadColor: "#2a70c8",
    deviceTilt: -7,
    deviceScale: 0.92,
    railOffset: -6,
    confidential: false
  },
  {
    id: "expedia-list-making",
    title: "List making web + app",
    company: "Expedia Group",
    companyGroup: "Lists",
    companyChapter: "Expedia",
    companyLogo: "assets/favicons/expedia.ico",
    logoSource: "https://www.expedia.com/favicon.ico",
    role: "Engagement growth",
    year: "January 2016-July 2017",
    platform: "Web, iOS, Android",
    oneLiner: "Saved-place and trip-list patterns that helped travelers gather options before deciding.",
    impact: "Saved-place and trip-list patterns that helped travelers gather options before deciding.",
    summary: "Travel planning work centered on collecting, comparing, and returning to options across web and app surfaces.",
    tags: ["Travel", "Lists", "Engagement", "Mobile"],
    deviceType: "phone",
    previewAsset: "expedia-lists",
    accent: "#f2b705",
    threadColor: "#f2b705",
    deviceTilt: 6,
    deviceScale: 0.98,
    railOffset: 28,
    confidential: false
  },
  {
    id: "expedia-city-mobile-web",
    title: "City accelerated mobile web",
    company: "Expedia Group",
    companyGroup: "City web",
    companyChapter: "Expedia",
    companyLogo: "assets/favicons/expedia.ico",
    logoSource: "https://www.expedia.com/favicon.ico",
    role: "Engagement growth",
    year: "January 2016-July 2017",
    platform: "Accelerated mobile web",
    oneLiner: "A faster city discovery experience for travelers already on the move.",
    impact: "A faster city discovery experience for travelers already on the move.",
    summary: "Mobile web project work focused on speed, lightweight browsing, and city-level travel discovery.",
    tags: ["Mobile web", "Travel discovery", "Performance"],
    deviceType: "phone",
    previewAsset: "expedia-city",
    accent: "#e7a80a",
    threadColor: "#e7a80a",
    deviceTilt: -3,
    deviceScale: 0.94,
    railOffset: -22,
    confidential: false
  },
  {
    id: "expedia-voice-skills",
    title: "Google Home & Amazon Alexa voice skills",
    company: "Expedia Group",
    companyGroup: "Voice",
    companyChapter: "Expedia",
    companyLogo: "assets/favicons/expedia.ico",
    logoSource: "https://www.expedia.com/favicon.ico",
    role: "Engagement growth",
    year: "January 2016-July 2017",
    platform: "Voice assistants",
    oneLiner: "Voice-first travel interactions for Google Home and Amazon Alexa.",
    impact: "Voice-first travel interactions for Google Home and Amazon Alexa.",
    summary: "Early voice interaction work translating travel intent into conversational flows for home assistants.",
    tags: ["Voice UX", "Google Home", "Amazon Alexa", "Travel"],
    deviceType: "phone",
    previewAsset: "expedia-voice",
    accent: "#c98d05",
    threadColor: "#c98d05",
    deviceTilt: 8,
    deviceScale: 0.88,
    railOffset: 12,
    confidential: false
  },
  {
    id: "uber-driver-marketplace",
    title: "Driver marketplace web",
    company: "Uber",
    companyGroup: "Marketplace",
    companyChapter: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    logoSource: "https://www.uber.com/favicon.ico",
    role: "New verticals",
    year: "August 2017-July 2022",
    platform: "Web tools",
    oneLiner: "A marketplace surface for understanding driver supply, demand, and operational health.",
    impact: "A marketplace surface for understanding driver supply, demand, and operational health.",
    summary: "Operational marketplace work represented as a web artifact: dense, legible, and grounded in real-world movement.",
    tags: ["Marketplace", "Operations", "Driver tools"],
    deviceType: "laptop",
    previewAsset: "uber-marketplace",
    accent: "#151515",
    threadColor: "#151515",
    deviceTilt: -5,
    deviceScale: 0.9,
    railOffset: -14,
    confidential: false
  },
  {
    id: "uber-multi-driver-dispatch",
    title: "Multi-driver dispatch app",
    company: "Uber",
    companyGroup: "Dispatch",
    companyChapter: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    logoSource: "https://www.uber.com/favicon.ico",
    role: "New verticals",
    year: "August 2017-July 2022",
    platform: "Dispatch app",
    oneLiner: "A dispatch workflow for coordinating multiple drivers through high-pressure operations.",
    impact: "A dispatch workflow for coordinating multiple drivers through high-pressure operations.",
    summary: "A logistics-focused product surface for coordinating more than one driver, abstracted into a map-and-queue preview.",
    tags: ["Dispatch", "Logistics", "Operational UX"],
    deviceType: "laptop",
    previewAsset: "uber-dispatch",
    accent: "#2f2f2f",
    threadColor: "#2f2f2f",
    deviceTilt: 4,
    deviceScale: 0.94,
    railOffset: 28,
    confidential: false
  },
  {
    id: "uber-recruiting-app",
    title: "Uber recruiting app",
    company: "Uber",
    companyGroup: "Recruiting",
    companyChapter: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    logoSource: "https://www.uber.com/favicon.ico",
    role: "New verticals",
    year: "August 2017-July 2022",
    platform: "Internal app",
    oneLiner: "A recruiting surface that helped candidates and teams move through hiring with less friction.",
    impact: "A recruiting surface that helped candidates and teams move through hiring with less friction.",
    summary: "People-systems work shown as a quiet internal app artifact, balancing process clarity with human moments.",
    tags: ["Recruiting", "Internal tools", "Workflow"],
    deviceType: "laptop",
    previewAsset: "uber-recruiting",
    accent: "#4d4d4d",
    threadColor: "#4d4d4d",
    deviceTilt: -2,
    deviceScale: 0.88,
    railOffset: -26,
    confidential: false
  },
  {
    id: "uber-pool-app",
    title: "Uber Pool app",
    company: "Uber",
    companyGroup: "Pool",
    companyChapter: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    logoSource: "https://www.uber.com/favicon.ico",
    role: "New verticals",
    year: "August 2017-July 2022",
    platform: "Rider app",
    oneLiner: "Shared-ride product work aimed at making pooled trips easier to understand and trust.",
    impact: "Shared-ride product work aimed at making pooled trips easier to understand and trust.",
    summary: "Consumer mobility work focused on expectations, matching, pickup clarity, and the mental model of sharing a ride.",
    tags: ["Rider app", "Shared rides", "Mobility"],
    deviceType: "phone",
    previewAsset: "uber-pool",
    accent: "#111111",
    threadColor: "#111111",
    deviceTilt: 7,
    deviceScale: 0.96,
    railOffset: 18,
    confidential: false
  },
  {
    id: "uber-shared-app",
    title: "Uber Shared app",
    company: "Uber",
    companyGroup: "Shared",
    companyChapter: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    logoSource: "https://www.uber.com/favicon.ico",
    role: "New verticals",
    year: "August 2017-July 2022",
    platform: "Rider app",
    oneLiner: "A later shared-mobility surface for clearer rider expectations and trip coordination.",
    impact: "A later shared-mobility surface for clearer rider expectations and trip coordination.",
    summary: "Shared mobility design work represented as a follow-on node, keeping the portfolio public-safe while showing product evolution.",
    tags: ["Shared mobility", "Consumer UX", "Rider trust"],
    deviceType: "phone",
    previewAsset: "uber-shared",
    accent: "#383838",
    threadColor: "#383838",
    deviceTilt: -6,
    deviceScale: 0.91,
    railOffset: -18,
    confidential: false
  },
  {
    id: "uber-connect-app",
    title: "Uber Connect app",
    company: "Uber",
    companyGroup: "Connect",
    companyChapter: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    logoSource: "https://www.uber.com/favicon.ico",
    role: "New verticals",
    year: "August 2017-July 2022",
    platform: "Delivery app",
    oneLiner: "Delivery workflows that helped people send and receive items through the Uber network.",
    impact: "Delivery workflows that helped people send and receive items through the Uber network.",
    summary: "A new-verticals delivery node for item sending, pickup confidence, and lightweight logistics in a consumer app.",
    tags: ["Delivery", "New verticals", "Consumer logistics"],
    deviceType: "phone",
    previewAsset: "uber-connect",
    accent: "#0f0f0f",
    threadColor: "#0f0f0f",
    deviceTilt: 4,
    deviceScale: 0.98,
    railOffset: 24,
    confidential: false
  },
  {
    id: "meta-privacy-account-center",
    title: "Privacy Account Center app/web",
    company: "Meta",
    companyGroup: "Account Center",
    companyChapter: "Meta",
    companyLogo: "assets/favicons/meta.ico",
    logoSource: "https://www.meta.com/favicon.ico",
    role: "Privacy",
    year: "May 2022-April 2024",
    platform: "App and web",
    oneLiner: "Privacy controls across app and web made easier to understand in one account surface.",
    impact: "Privacy controls across app and web made easier to understand in one account surface.",
    summary: "A privacy systems project represented through a restrained control-surface mock, with emphasis on clarity and trust.",
    tags: ["Privacy", "Account systems", "App + web"],
    deviceType: "laptop",
    previewAsset: "meta-privacy",
    accent: "#0668e1",
    threadColor: "#0668e1",
    deviceTilt: -3,
    deviceScale: 0.94,
    railOffset: -24,
    confidential: false
  },
  {
    id: "meta-premium-subscription",
    title: "Meta Premium subscription",
    company: "Meta",
    companyGroup: "Subscription",
    companyChapter: "Meta",
    companyLogo: "assets/favicons/meta.ico",
    logoSource: "https://www.meta.com/favicon.ico",
    role: "Privacy",
    year: "May 2022-April 2024",
    platform: "Mobile subscription",
    oneLiner: "Subscription product work shaped around clarity, trust, and purchase confidence.",
    impact: "Subscription product work shaped around clarity, trust, and purchase confidence.",
    summary: "A premium subscription node focused on clear value framing, decision support, and trust in a consumer-grade flow.",
    tags: ["Subscription", "Consumer product", "Trust"],
    deviceType: "phone",
    previewAsset: "meta-premium",
    accent: "#0a7cff",
    threadColor: "#0a7cff",
    deviceTilt: 6,
    deviceScale: 0.96,
    railOffset: 14,
    confidential: false
  },
  {
    id: "meta-ai-app",
    title: "Meta AI app",
    company: "Meta",
    companyGroup: "Meta AI",
    companyChapter: "Meta",
    companyLogo: "assets/favicons/meta.ico",
    logoSource: "https://www.meta.com/favicon.ico",
    role: "Privacy",
    year: "May 2022-April 2024",
    platform: "AI app",
    oneLiner: "AI product work exploring useful, approachable creative and assistant experiences.",
    impact: "AI product work exploring useful, approachable creative and assistant experiences.",
    summary: "The default focused project: a public-safe Meta AI app node with a phone-native preview and restrained generative-product motion.",
    tags: ["Generative AI", "Assistant UX", "Consumer app"],
    deviceType: "phone",
    previewAsset: "meta-ai",
    accent: "#4169e1",
    threadColor: "#4169e1",
    deviceTilt: -5,
    deviceScale: 1.04,
    railOffset: -16,
    confidential: false
  },
  {
    id: "tiktok-confidential-genai",
    title: "Confidential GenAI work",
    company: "TikTok",
    companyGroup: "Confidential",
    companyChapter: "TikTok",
    companyLogo: "assets/favicons/tiktok.ico",
    logoSource: "https://www.tiktok.com/favicon.ico",
    role: "GenAI",
    year: "May 2024-Present",
    platform: "Confidential",
    oneLiner: "Current GenAI work; intentionally held at teaser level until it can be discussed publicly.",
    impact: "Current GenAI work; intentionally held at teaser level until it can be discussed publicly.",
    summary: "A locked teaser node for current TikTok GenAI work. Details stay deliberately high-level until they are safe to share.",
    tags: ["GenAI", "Current work", "Confidential"],
    deviceType: "phone",
    previewAsset: "tiktok-confidential",
    accent: "#ee1d52",
    threadColor: "#00f2ea",
    deviceTilt: 5,
    deviceScale: 0.96,
    railOffset: 20,
    confidential: true
  }
];

const state = {
  activeIndex: 0,
  expanded: false,
  points: [],
  trackWidth: 0,
  worldHeight: 0
};

const railViewport = document.querySelector("#rail-viewport");
const railTrack = document.querySelector("#rail-track");
const railSvg = document.querySelector("#rail-svg");
const threadSvg = document.querySelector("#thread-svg");
const projectNodes = document.querySelector("#project-nodes");
const railCount = document.querySelector("#rail-count");
const navButtons = Array.from(document.querySelectorAll(".nav-button"));
const downloadPromptButton = document.querySelector("#download-prompt-button");
const downloadDialog = document.querySelector("#download-dialog");
const downloadCloseButton = document.querySelector("#download-close-button");
const downloadBothButton = document.querySelector("#download-both-button");
const sheetHandle = document.querySelector(".sheet-handle");
const sheetHandleText = document.querySelector(".sheet-handle-text");
const sheetLogo = document.querySelector("#sheet-logo");
const sheetKicker = document.querySelector("#sheet-kicker");
const sheetTitle = document.querySelector("#sheet-title");
const sheetImpact = document.querySelector("#sheet-impact");
const sheetMeta = document.querySelector("#sheet-meta");
const sheetSummary = document.querySelector("#sheet-summary");
const sheetSummaryCopy = document.querySelector("#sheet-summary-copy");
const sheetTags = document.querySelector("#sheet-tags");
const progressRail = document.querySelector("#progress-rail");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const downloadFiles = [
  "assets/downloads/matt-reynolds-resume.pdf",
  "assets/downloads/matt-reynolds-portfolio.pdf"
];

let lastFocusedElement = null;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatCount(index) {
  return `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
}

function getRailMetrics() {
  const viewportWidth = railViewport.clientWidth || window.innerWidth;
  const viewportHeight = railViewport.clientHeight || Math.round(window.innerHeight * 0.72);
  const spacing = clamp(viewportWidth * 0.68, 248, 360);
  const sidePad = viewportWidth / 2;
  const baseline = clamp(viewportHeight * 0.64, 300, 460);
  const trackWidth = sidePad * 2 + spacing * (projects.length - 1);

  return { viewportWidth, viewportHeight, spacing, sidePad, baseline, trackWidth };
}

function pathThrough(points) {
  if (points.length === 0) return "";

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let index = 1; index < points.length; index += 1) {
    const prev = points[index - 1];
    const point = points[index];
    const cx = (prev.x + point.x) / 2;
    d += ` Q ${cx} ${prev.y}, ${point.x} ${point.y}`;
  }

  return d;
}

function makeWavyPath(start, end, lift = -90) {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) + lift;
  const wobble = Math.abs(end.x - start.x) * 0.08;
  return `M ${start.x} ${start.y} C ${midX - wobble} ${midY}, ${midX + wobble} ${midY}, ${end.x} ${end.y}`;
}

function renderMock(project) {
  const panelCount = project.deviceType === "phone" ? 4 : 5;
  const confidentialClass = project.confidential ? " is-confidential" : "";
  const lockOverlay = project.confidential ? "<span class=\"confidential-overlay\" aria-hidden=\"true\">Locked</span>" : "";
  let panels = "";

  for (let index = 0; index < panelCount; index += 1) {
    const hero = index === 0 ? " mock-hero" : "";
    const dots = index === panelCount - 1 ? "<span class=\"mock-dotgrid\"><span></span><span></span><span></span><span></span><span></span><span></span></span>" : "";
    panels += `
      <span class="mock-panel${hero}">
        <span class="mock-line ${index % 2 === 0 ? "long" : "medium"}"></span>
        <span class="mock-line ${index % 3 === 0 ? "short" : "medium"}"></span>
        ${dots}
      </span>
    `;
  }

  return `
    <span class="logo-chip" aria-hidden="true">
      <img src="${project.companyLogo}" alt="" decoding="async">
    </span>
    <span class="device-shell ${project.deviceType}${confidentialClass}">
      <span class="device-screen">
        <span class="mock-ui mock-${project.previewAsset}">
          ${panels}
        </span>
      </span>
      ${lockOverlay}
    </span>
    <span class="artifact-label">
      <span>${project.companyChapter}</span>
      <span>${project.companyGroup}</span>
    </span>
  `;
}

function renderNodes() {
  projectNodes.innerHTML = projects.map((project, index) => {
    const point = state.points[index];
    return `
      <button
        class="project-node${project.confidential ? " is-confidential-project" : ""}"
        type="button"
        data-index="${index}"
        data-project-id="${project.id}"
        aria-label="Show ${project.title}"
        style="
          left: ${point.x}px;
          top: ${point.artifactY}px;
          --tilt: ${project.deviceTilt}deg;
          --node-scale: ${project.deviceScale};
          --project-color: ${project.accent};
        "
      >
        ${renderMock(project)}
      </button>
    `;
  }).join("");

  projectNodes.querySelectorAll(".project-node").forEach((node) => {
    node.addEventListener("click", () => {
      setActiveProject(Number(node.dataset.index), true);
    });
  });
}

function renderRail() {
  const railPath = pathThrough(state.points);
  const tickMarkup = state.points.map((point, index) => `
    <path class="rail-tick" d="M ${point.x - 8} ${point.y - 46} C ${point.x - 6} ${point.y - 16}, ${point.x - 4} ${point.y + 20}, ${point.x - 2} ${point.y + 48}" />
    ${index % 2 === 0 ? `<path class="sky-doodle" d="M ${point.x - 132} ${point.y - 178} c 38 18 52 18 82 -2 c 28 -18 42 -17 68 2" />` : ""}
    ${index % 3 === 1 ? `<path class="sky-doodle" d="M ${point.x + 118} ${point.y - 154} c 8 -28 30 -28 35 -8" />` : ""}
  `).join("");

  railSvg.setAttribute("viewBox", `0 0 ${state.trackWidth} ${state.worldHeight}`);
  railSvg.innerHTML = `
    <path class="rail-path shadow" d="${railPath}" />
    <path class="rail-path" d="${railPath}" />
    ${tickMarkup}
  `;
}

function renderThreads() {
  const active = state.points[state.activeIndex];
  const previous = state.points[Math.max(0, state.activeIndex - 1)];
  const next = state.points[Math.min(projects.length - 1, state.activeIndex + 1)];
  const first = state.points[0];
  const activeProject = projects[state.activeIndex];
  const progressPath = makeWavyPath(
    { x: first.x, y: first.y - 34 },
    { x: active.x, y: active.y - 34 },
    -62
  );

  const threadPaths = [
    {
      d: progressPath,
      color: activeProject.threadColor,
      className: "progress"
    },
    {
      d: makeWavyPath({ x: previous.x, y: previous.artifactY - 82 }, { x: active.x, y: active.artifactY - 60 }, -88),
      color: projects[Math.max(0, state.activeIndex - 1)].threadColor,
      className: "energy"
    },
    {
      d: makeWavyPath({ x: next.x, y: next.artifactY - 70 }, { x: active.x, y: active.artifactY - 46 }, -112),
      color: projects[Math.min(projects.length - 1, state.activeIndex + 1)].threadColor,
      className: "energy"
    },
    {
      d: makeWavyPath({ x: active.x - 210, y: active.artifactY - 145 }, { x: active.x + 40, y: active.artifactY - 90 }, -40),
      color: "#f0b22f",
      className: "energy"
    },
    {
      d: makeWavyPath({ x: active.x + 230, y: active.artifactY - 132 }, { x: active.x - 34, y: active.artifactY - 82 }, -52),
      color: "#e85f9d",
      className: "energy"
    }
  ];

  threadSvg.setAttribute("viewBox", `0 0 ${state.trackWidth} ${state.worldHeight}`);
  threadSvg.innerHTML = threadPaths.map((thread, index) => `
    <path
      class="thread ${thread.className}"
      d="${thread.d}"
      stroke="${thread.color}"
      style="animation-delay: ${index * -0.48}s"
    />
  `).join("");
}

function buildGeometry() {
  const metrics = getRailMetrics();
  state.trackWidth = metrics.trackWidth;
  state.worldHeight = metrics.viewportHeight;
  railTrack.style.width = `${metrics.trackWidth}px`;

  state.points = projects.map((project, index) => {
    const x = metrics.sidePad + metrics.spacing * index;
    const wave = Math.sin(index * 1.23) * 16;
    const y = metrics.baseline + wave + project.railOffset * 0.45;
    const artifactY = y - clamp(metrics.viewportHeight * 0.2, 78, 128) + project.railOffset;
    return { x, y, artifactY };
  });

  renderRail();
  renderThreads();
  renderNodes();
  syncActiveClasses();
}

function renderMeta(project) {
  const items = [
    ["Company", project.company],
    ["Role", project.role],
    ["Dates", project.year],
    ["Platform", project.platform]
  ];

  sheetMeta.innerHTML = items.map(([label, value]) => `
    <div>
      <dt>${label}</dt>
      <dd>${value}</dd>
    </div>
  `).join("");
}

function renderProgress() {
  const progress = projects.length === 1 ? 100 : (state.activeIndex / (projects.length - 1)) * 100;
  document.documentElement.style.setProperty("--active-progress", `${progress}%`);
  progressRail.innerHTML = projects.map((project, index) => {
    const left = projects.length === 1 ? 100 : (index / (projects.length - 1)) * 100;
    return `<span class="progress-dot" style="--dot-left: ${left}%; --dot-color: ${project.threadColor};"></span>`;
  }).join("");
}

function syncActiveClasses() {
  const nodes = Array.from(document.querySelectorAll(".project-node"));

  nodes.forEach((node, index) => {
    const distance = Math.abs(index - state.activeIndex);
    node.classList.toggle("is-active", distance === 0);
    node.classList.toggle("is-near", distance === 1);
    node.classList.toggle("is-far", distance > 1);
    node.setAttribute("aria-current", distance === 0 ? "true" : "false");
  });
}

function setExpanded(isExpanded) {
  state.expanded = isExpanded;
  sheetSummary.hidden = !isExpanded && window.innerWidth < 960;
  sheetHandle.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  sheetHandleText.textContent = isExpanded ? "Less" : "More";
}

function setDownloadDialogOpen(isOpen) {
  if (!downloadDialog || !downloadPromptButton) return;

  downloadDialog.hidden = !isOpen;
  downloadPromptButton.setAttribute("aria-expanded", isOpen ? "true" : "false");

  if (isOpen) {
    lastFocusedElement = document.activeElement;
    window.setTimeout(() => downloadCloseButton?.focus(), 0);
  } else if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

function triggerDownload(filePath, delay = 0) {
  window.setTimeout(() => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "";
    link.rel = "noopener";
    document.body.append(link);
    link.click();
    link.remove();
  }, delay);
}

function setActiveProject(index, shouldScroll = false) {
  state.activeIndex = (index + projects.length) % projects.length;
  const project = projects[state.activeIndex];
  const point = state.points[state.activeIndex];

  document.documentElement.style.setProperty("--active-accent", project.accent);
  document.documentElement.style.setProperty("--active-thread", project.threadColor);
  railCount.textContent = formatCount(state.activeIndex);
  sheetKicker.textContent = `${project.company} / ${project.year}`;
  sheetTitle.textContent = project.title;
  sheetImpact.textContent = project.oneLiner || project.impact;
  sheetSummaryCopy.textContent = project.summary;
  sheetTags.innerHTML = project.tags.map((tag) => `<li>${tag}</li>`).join("");

  if (sheetLogo) {
    sheetLogo.hidden = !project.companyLogo;
    sheetLogo.src = project.companyLogo || "";
    sheetLogo.alt = project.companyLogo ? `${project.company} logo` : "";
  }

  renderMeta(project);
  renderProgress();
  renderThreads();
  syncActiveClasses();

  if (shouldScroll && point) {
    const scrollLeft = point.x - railViewport.clientWidth / 2;
    suppressScrollUntil = performance.now() + 700;
    railViewport.scrollTo({
      left: scrollLeft,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  }
}

function getCenteredIndex() {
  const viewportCenter = railViewport.scrollLeft + railViewport.clientWidth / 2;
  let closestIndex = state.activeIndex;
  let closestDistance = Infinity;

  state.points.forEach((point, index) => {
    const distance = Math.abs(point.x - viewportCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

let scrollTimer;
let suppressScrollUntil = 0;
railViewport.addEventListener("scroll", () => {
  if (performance.now() < suppressScrollUntil) {
    return;
  }

  window.clearTimeout(scrollTimer);
  scrollTimer = window.setTimeout(() => {
    const centeredIndex = getCenteredIndex();
    if (centeredIndex !== state.activeIndex) {
      setActiveProject(centeredIndex, false);
    }
  }, 80);
}, { passive: true });

railViewport.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    event.stopPropagation();
    setActiveProject(state.activeIndex + 1, true);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    event.stopPropagation();
    setActiveProject(state.activeIndex - 1, true);
  }
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable;
  if (isTyping) return;
  if (downloadDialog && !downloadDialog.hidden) return;

  if (event.key === "ArrowRight") {
    setActiveProject(state.activeIndex + 1, true);
  }

  if (event.key === "ArrowLeft") {
    setActiveProject(state.activeIndex - 1, true);
  }
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveProject(state.activeIndex + Number(button.dataset.direction), true);
  });
});

downloadPromptButton?.addEventListener("click", () => {
  setDownloadDialogOpen(true);
});

downloadCloseButton?.addEventListener("click", () => {
  setDownloadDialogOpen(false);
});

downloadDialog?.addEventListener("click", (event) => {
  if (event.target === downloadDialog) {
    setDownloadDialogOpen(false);
  }
});

downloadBothButton?.addEventListener("click", () => {
  downloadFiles.forEach((filePath, index) => {
    triggerDownload(filePath, index * 180);
  });
});

sheetHandle.addEventListener("click", () => {
  setExpanded(!state.expanded);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && downloadDialog && !downloadDialog.hidden) {
    setDownloadDialogOpen(false);
  }
});

window.addEventListener("resize", () => {
  const activeIndex = state.activeIndex;
  buildGeometry();
  setActiveProject(activeIndex, true);
  setExpanded(state.expanded);
});

buildGeometry();
setExpanded(false);
const initialProjectIndex = projects.findIndex((project) => project.id === "meta-ai-app");
setActiveProject(initialProjectIndex >= 0 ? initialProjectIndex : 0, false);

const initialPoint = state.points[state.activeIndex];
if (initialPoint) {
  railViewport.scrollLeft = initialPoint.x - railViewport.clientWidth / 2;
}
