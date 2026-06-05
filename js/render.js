/* ============================================================
   render.js — สร้าง DOM จาก DATA
   - การ์ดใช้ "รูปจริง" (โหลดจาก LoremFlickr ตามคีย์เวิร์ด ฟรี ไม่ต้องมี key)
   - การ์ด composition มีกริด/เส้นนำสายตา (SVG) ซ้อนบนรูปจริง
   ============================================================ */

const W = 300, H = 200; // viewBox ของ overlay (อัตราส่วน 3:2)
const SVGNS = "http://www.w3.org/2000/svg";

function el(tag, attrs = {}, kids = []) {
  const svgTags = ["svg","line","rect","circle","polygon","polyline","path","text","defs","linearGradient","stop","g","ellipse"];
  const node = svgTags.includes(tag) ? document.createElementNS(SVGNS, tag) : document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "html") node.innerHTML = v;
    else if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  }
  (Array.isArray(kids) ? kids : [kids]).forEach((c) => c && node.appendChild(c));
  return node;
}

const C = {
  Y: "rgba(255,210,90,0.95)",  B: "rgba(120,205,255,0.95)",
  G: "rgba(130,240,150,0.95)", P: "rgba(255,140,190,0.95)",
  A: "rgba(160,135,255,0.95)", W: "rgba(255,255,255,0.92)",
};
function line(x1, y1, x2, y2, stroke, w = 1.6, dash = "") {
  return el("line", { x1, y1, x2, y2, stroke, "stroke-width": w, "stroke-dasharray": dash });
}
function circ(cx, cy, r, stroke, fill = "none", w = 2) {
  return el("circle", { cx, cy, r, stroke, fill, "stroke-width": w });
}

/* ---------- รูปจริง: คีย์เวิร์ดต่อการ์ด (ภาษาอังกฤษ ชื่อ item = key) ---------- */
const PHOTOS = {
  // Composition
  "Rule of Thirds": "landscape,field", "Golden Ratio / Fibonacci": "portrait,woman",
  "Leading Lines": "road,perspective", "Framing": "archway,door",
  "Symmetry": "symmetry,reflection", "Triangle / Golden Triangles": "mountain,peak",
  "Diagonals & Dynamic": "staircase,diagonal", "Negative Space": "minimalism,sky",
  "Fill the Frame": "face,closeup", "Pattern & Repetition": "pattern,texture",
  "Depth & Layering": "forest,path", "Rule of Odds": "flowers,three",
  // Lighting
  "Golden Hour": "golden,hour,sunset", "Blue Hour": "bluehour,city",
  "Soft vs Hard Light": "portrait,studio", "Backlight & Silhouette": "silhouette,sunset",
  "Side Light": "stilllife,light", "Rembrandt Light": "dramatic,portrait",
  "Window Light": "window,portrait",
  // Genres
  "Portrait": "portrait,face", "Landscape": "landscape,mountains", "Street": "street,city",
  "Macro": "macro,insect", "Food": "food,plate", "Architecture": "architecture,building",
  "Wildlife": "wildlife,animal", "Night / Astro": "nightsky,stars",
  "Product": "product,studio", "Event": "wedding,celebration",
  // Pro tips
  "Focal Length & Perspective": "camera,lens", "RAW vs JPEG": "camera,photography",
  "White Balance": "colorful,light", "Focus Modes": "camera,lens",
  "Pre-Shoot Checklist": "camera,bag", "Common Mistakes": "blur,camera",
  // Filters
  "UV / Protection Filter": "lens,camera", "Polarizer (CPL)": "lake,reflection",
  "Neutral Density (ND)": "waterfall,longexposure", "Variable ND": "videocamera,filmmaking",
  "Graduated ND (GND)": "sunset,landscape", "Black Mist / Diffusion": "bokeh,cinematic",
  "Color / Creative": "colorful,abstract",
  // Export & sharing
  "Use sRGB Color Space": "colorful,spectrum", "Right Size per Platform": "smartphone,social",
  "JPEG Quality ~85%": "computer,screen", "Turn Off Output Sharpening": "macro,detail",
  "File Format & Metadata": "laptop,editing", "Social Export Recipe": "phone,instagram",
};

function hashNum(str) { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 997; return h; }
function photoURL(item) {
  const kw = PHOTOS[item.name] || "photography";
  return `https://loremflickr.com/640/420/${encodeURIComponent(kw)}?lock=${hashNum(item.name)}`;
}

/* ---------- Overlay เฉพาะ composition (เส้นล้วน วางทับรูป) ---------- */
const OVERLAYS = {
  "rule-of-thirds": () => {
    const k = [];
    for (const x of [W/3, 2*W/3]) k.push(line(x, 0, x, H, C.Y, 1.4, "6,5"));
    for (const y of [H/3, 2*H/3]) k.push(line(0, y, W, y, C.Y, 1.4, "6,5"));
    [[W/3,H/3],[2*W/3,H/3],[W/3,2*H/3],[2*W/3,2*H/3]].forEach(([x,y]) => k.push(circ(x,y,5,C.Y,"none",2)));
    return k;
  },
  "golden-ratio": () => {
    const k = [];
    // phi grid (38.2% / 61.8%)
    for (const x of [W*0.382, W*0.618]) k.push(line(x, 0, x, H, C.Y, 1.3, "5,5"));
    for (const y of [H*0.382, H*0.618]) k.push(line(0, y, W, y, C.Y, 1.3, "5,5"));
    k.push(circ(W*0.618, H*0.382, 5, C.Y, "none", 2));
    // golden spiral (log spiral, ม้วนเข้าหาจุดทอง)
    const PHI = 1.618, pole = [W*0.618, H*0.382];
    const pts = [], N = 150, tMax = 3.05 * Math.PI / 2;
    for (let i = 0; i <= N; i++) {
      const t = (i / N) * tMax;
      const r = Math.pow(PHI, t / (Math.PI / 2));
      pts.push([Math.cos(-t) * r, Math.sin(-t) * r]);
    }
    const maxR = Math.max(...pts.map((p) => Math.hypot(p[0], p[1])));
    const fit = Math.min(W, H) * 0.62 / maxR;
    const d = pts.map((p, i) => (i ? "L" : "M") + (pole[0] + p[0]*fit).toFixed(1) + " " + (pole[1] + p[1]*fit).toFixed(1)).join(" ");
    k.push(el("path", { d, fill: "none", stroke: C.Y, "stroke-width": 2 }));
    return k;
  },
  "leading-lines": () => {
    const fx = W*0.5, fy = H*0.34;
    return [
      line(0, H, fx, fy, C.B, 2, "9,5"), line(W, H, fx, fy, C.B, 2, "9,5"),
      line(0, H*0.72, fx, fy, C.B, 1.3, "5,5"), line(W, H*0.72, fx, fy, C.B, 1.3, "5,5"),
      circ(fx, fy, 8, C.B, "none", 2),
    ];
  },
  "framing": () => {
    const k = [el("rect", { x: W*0.18, y: H*0.16, width: W*0.64, height: H*0.68, fill: "none", stroke: C.P, "stroke-width": 2.4 })];
    [[W*0.18,H*0.16,1,1],[W*0.82,H*0.16,-1,1],[W*0.18,H*0.84,1,-1],[W*0.82,H*0.84,-1,-1]].forEach(([x,y,sx,sy]) =>
      k.push(el("path", { d: `M ${x} ${y+22*sy} L ${x} ${y} L ${x+22*sx} ${y}`, fill: "none", stroke: C.P, "stroke-width": 3 })));
    return k;
  },
  "symmetry": () => [
    line(W/2, 0, W/2, H, C.G, 2),
    line(0, H/2, W, H/2, C.G, 1.3, "6,5"),
  ],
  "triangle": () => {
    const k = [el("polygon", { points: `${W*0.5},${H*0.16} ${W*0.16},${H*0.86} ${W*0.84},${H*0.86}`, fill: "none", stroke: C.Y, "stroke-width": 2 })];
    [[W*0.5,H*0.16],[W*0.16,H*0.86],[W*0.84,H*0.86]].forEach(([x,y]) => k.push(circ(x,y,5,C.Y,"none",2)));
    return k;
  },
  "diagonal": () => [
    line(0, 0, W, H, C.B, 2.2, "10,5"),
    line(0, H*0.4, W*0.6, H, C.B, 1.3, "6,5"), line(W*0.4, 0, W, H*0.6, C.B, 1.3, "6,5"),
  ],
  "negative-space": () => [
    circ(W*0.78, H*0.7, 11, C.A, "none", 2),
    line(W*0.06, H*0.5, W*0.5, H*0.5, C.A, 1.2, "4,5"),
    el("text", { x: W*0.1, y: H*0.4, fill: C.A, "font-size": 11, "font-family": "Sora", text: "negative space" }),
  ],
  "fill-frame": () => [
    el("rect", { x: 4, y: 4, width: W-8, height: H-8, fill: "none", stroke: C.P, "stroke-width": 2.4, "stroke-dasharray": "8,5" }),
  ],
  "pattern": () => {
    const k = [];
    for (const x of [W/3, 2*W/3]) k.push(line(x, 0, x, H, C.B, 1, "4,5"));
    for (const y of [H/3, 2*H/3]) k.push(line(0, y, W, y, C.B, 1, "4,5"));
    k.push(circ(2*W/3, H/3, 14, C.Y, "none", 2.5));
    return k;
  },
  "depth": () => [
    el("rect", { x: 4, y: H*0.66, width: W-8, height: H*0.3, fill: "none", stroke: C.B, "stroke-width": 1.5, "stroke-dasharray": "6,5" }),
    el("rect", { x: W*0.22, y: H*0.42, width: W*0.56, height: H*0.28, fill: "none", stroke: C.G, "stroke-width": 1.5, "stroke-dasharray": "6,5" }),
    circ(W*0.5, H*0.32, 8, C.Y, "none", 2),
    el("text", { x: 6, y: H-7, fill: C.W, "font-size": 9, "font-family": "Sora", text: "fore · mid · back" }),
  ],
  "rule-of-odds": () => {
    const k = [];
    [W*0.32, W*0.5, W*0.68].forEach((x) => k.push(circ(x, H*0.5, 15, C.G, "none", 2)));
    return k;
  },
};

function buildOverlay(key) {
  const fn = OVERLAYS[key];
  if (!fn) return null;
  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: "none", class: "overlay" });
  fn().forEach((p) => svg.appendChild(p));
  return svg;
}

/* ---------- ภาษา ---------- */
function L(obj) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  return obj[window.__lang || "th"] || obj.th || obj.en || "";
}
const LVL_LABEL = { 1: { th:"มือใหม่", en:"Beginner" }, 2: { th:"กลาง", en:"Intermediate" }, 3: { th:"โปร", en:"Pro" } };

/* ---------- การ์ด ---------- */
function buildFigure(item, withOverlay) {
  const figure = el("div", { class: "card-figure" });
  const img = el("img", { src: photoURL(item), alt: item.name, loading: "lazy" });
  // ถ้า LoremFlickr ล่ม → ลอง Picsum (รูปจริง เสถียร) → ถ้ายังไม่ได้ค่อยโชว์พื้นเปล่า
  img.addEventListener("error", () => {
    if (!img.dataset.fallback) {
      img.dataset.fallback = "1";
      img.src = `https://picsum.photos/seed/${hashNum(item.name)}/640/420`;
    } else {
      figure.classList.add("no-img");
    }
  });
  figure.appendChild(img);
  if (withOverlay && item.diagram && OVERLAYS[item.diagram]) {
    const ov = buildOverlay(item.diagram);
    if (ov) figure.appendChild(ov);
  }
  if (item.level) {
    const dot = el("span", { class: `lvl lvl-${item.level} lvl-dot`, text: L(LVL_LABEL[item.level]) });
    figure.appendChild(dot);
  }
  return figure;
}

function buildCard(item, withOverlay) {
  const name = el("div", { class: "card-name" });
  name.appendChild(document.createTextNode(item.name));
  if (item.nameTh) { const th = el("span", { class: "th", text: item.nameTh }); name.appendChild(th); }

  const tags = el("div", { class: "tag-row" });
  (item.tags || []).forEach((t) => tags.appendChild(el("span", { class: "tag", text: t })));

  const bf = el("div", { class: "best-for" });
  bf.appendChild(el("b", { text: L(I18N["label.bestFor"]) }));
  bf.appendChild(document.createTextNode(L(item.bestFor)));

  const tips = el("ul", { class: "tips" });
  (item.tips || []).forEach((t) => tips.appendChild(el("li", { text: L(t) })));

  const body = el("div", { class: "card-body" }, [
    name, el("p", { class: "card-desc", text: L(item.desc) }),
    tags.children.length ? tags : null, bf, tips,
  ]);

  const card = el("div", { class: "card" }, [buildFigure(item, withOverlay), body]);
  card.dataset.search = (item.name + " " + (item.nameTh||"") + " " + L(item.desc) + " " + (item.tags||[]).join(" ")).toLowerCase();
  return card;
}

/* ---------- section ---------- */
function buildSection(sec) {
  const head = el("div", { class: "section-head" }, [
    el("h3", { class: "section-title" }, [ el("span", { text: sec.emoji }), el("span", { text: L(sec.title) }) ]),
    el("p", { class: "section-desc", text: L(sec.desc) }),
  ]);
  const section = el("section", { class: "section", id: sec.id }, [head]);

  if (sec.type === "cards") {
    const withOverlay = sec.id === "composition";
    const grid = el("div", { class: "grid" });
    sec.items.forEach((it) => grid.appendChild(buildCard(it, withOverlay)));
    section.appendChild(grid);
  } else if (sec.type === "triangle") {
    section.appendChild(buildTriangleBlock(sec));
    const grid = el("div", { class: "grid" });
    grid.style.marginTop = "22px";
    sec.pillars.forEach((p) => grid.appendChild(buildPillar(p)));
    section.appendChild(grid);
  }
  return section;
}

function buildTriangleBlock(sec) {
  const svg = el("svg", { viewBox: "0 0 300 240" });
  const pts = [[150,30],[40,210],[260,210]];
  svg.appendChild(el("polygon", { points: pts.map((p) => p.join(",")).join(" "), fill: "rgba(124,92,255,0.06)", stroke: "var(--border)", "stroke-width": 2 }));
  sec.triangle.nodes.forEach((n, i) => {
    const [x, y] = pts[i];
    svg.appendChild(circ(x, y, 30, n.color, "rgba(255,255,255,0.04)", 2.5));
    svg.appendChild(el("text", { x, y: y-2, fill: n.color, "font-size": 14, "font-family": "Sora", "text-anchor": "middle", "font-weight": "600", text: n.label }));
    svg.appendChild(el("text", { x, y: y+14, fill: "var(--text-dim)", "font-size": 10, "font-family": "Noto Sans Thai", "text-anchor": "middle", text: L({ th: n.labelTh, en: n.label }) }));
  });
  return el("div", { class: "triangle-block" }, [svg, el("div", {}, [el("p", { class: "section-desc", text: L(sec.desc) })])]);
}

function buildPillar(p) {
  const table = el("table");
  p.rows.forEach((r) => table.appendChild(el("tr", {}, [ el("td", {}, [el("b", { text: r[0] })]), el("td", { text: L(r[1]) }) ])));
  const name = el("div", { class: "card-name" });
  name.style.color = p.color;
  name.appendChild(document.createTextNode(p.name));
  name.appendChild(el("span", { class: "th", text: p.nameTh }));
  const body = el("div", { class: "card-body" }, [ name, el("p", { class: "card-desc", text: L(p.desc) }), el("div", { class: "table-wrap" }, [table]) ]);
  const card = el("div", { class: "card" }, [body]);
  card.dataset.search = (p.name + " " + p.nameTh + " " + L(p.desc)).toLowerCase();
  return card;
}

function buildCheatSheet(cs) {
  const head = el("div", { class: "section-head" }, [
    el("h3", { class: "section-title" }, [ el("span", { text: cs.emoji }), el("span", { text: L(cs.title) }) ]),
    el("p", { class: "section-desc", text: L(cs.desc) }),
  ]);
  const table = el("table");
  const thead = el("tr");
  cs.head.forEach((h) => thead.appendChild(el("th", { text: L(h) })));
  table.appendChild(thead);
  cs.rows.forEach((r) => {
    const tr = el("tr");
    r.forEach((c, i) => tr.appendChild((i === 0 || i === 4) ? el("td", { text: L(c) }) : el("td", {}, [el("b", { text: c })])));
    table.appendChild(tr);
  });
  return el("section", { class: "section", id: cs.id }, [head, el("div", { class: "table-wrap" }, [table])]);
}

function renderAll() {
  const root = document.getElementById("sections");
  root.innerHTML = "";
  DATA.sections.forEach((sec) => root.appendChild(buildSection(sec)));
  root.appendChild(buildCheatSheet(DATA.cheatsheet));
  root.appendChild(buildCheatSheet(DATA.exportsheet));

  const stats = document.getElementById("heroStats");
  const count = (id) => DATA.sections.find((s) => s.id === id).items.length;
  stats.innerHTML = "";
  [[count("composition"), I18N["stats.techniques"]], [count("lighting"), I18N["stats.lighting"]], [count("genres"), I18N["stats.genres"]]]
    .forEach(([n, lbl]) => stats.appendChild(el("div", { class: "stat" }, [el("b", { text: String(n) }), el("span", { text: L(lbl) })])));
}
