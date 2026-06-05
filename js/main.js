/* ============================================================
   main.js — nav, สลับภาษา, scroll-spy, ค้นหา, เมนูมือถือ
   ============================================================ */

(function () {
  // ---------- ภาษา ----------
  window.__lang = localStorage.getItem("pg_lang") || "th";

  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (I18N[key]) node.textContent = window.__lang === "th" ? I18N[key].th : I18N[key].en;
    });
    document.documentElement.lang = window.__lang;
    document.body.classList.toggle("lang-en", window.__lang === "en");
    const search = document.getElementById("search");
    if (search) search.placeholder = window.__lang === "th" ? I18N["search.placeholder"].th : I18N["search.placeholder"].en;
  }

  function buildNav() {
    const nav = document.getElementById("nav");
    nav.innerHTML = "";
    const items = [...DATA.sections.map((s) => ({ id: s.id, emoji: s.emoji, title: s.title })),
                   { id: DATA.cheatsheet.id, emoji: DATA.cheatsheet.emoji, title: DATA.cheatsheet.title },
                   { id: DATA.exportsheet.id, emoji: DATA.exportsheet.emoji, title: DATA.exportsheet.title }];
    items.forEach((s) => {
      const a = document.createElement("a");
      a.href = "#" + s.id;
      a.dataset.target = s.id;
      a.innerHTML = `<span class="nav-emoji">${s.emoji}</span><span>${window.__lang === "th" ? s.title.th : s.title.en}</span>`;
      nav.appendChild(a);
    });
  }

  function rerender() {
    renderAll();
    applyStaticI18n();
    buildNav();
    setupScrollSpy();
    runSearch();
  }

  // ---------- scroll-spy ----------
  let spyObserver;
  function setupScrollSpy() {
    if (spyObserver) spyObserver.disconnect();
    const links = document.querySelectorAll("#nav a");
    const map = {};
    links.forEach((l) => (map[l.dataset.target] = l));
    spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            if (map[e.target.id]) map[e.target.id].classList.add("active");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    document.querySelectorAll(".section").forEach((s) => spyObserver.observe(s));
  }

  // ---------- ค้นหา ----------
  function runSearch() {
    const q = (document.getElementById("search").value || "").trim().toLowerCase();
    document.querySelectorAll(".section").forEach((section) => {
      const cards = section.querySelectorAll(".card");
      if (!cards.length) {
        // sections without cards (cheat sheet): show unless query present & no match in title
        const txt = section.textContent.toLowerCase();
        section.classList.toggle("hide", q && !txt.includes(q));
        return;
      }
      let visible = 0;
      cards.forEach((c) => {
        const match = !q || (c.dataset.search || "").includes(q);
        c.classList.toggle("hide", !match);
        if (match) visible++;
      });
      section.classList.toggle("hide", visible === 0);
    });
  }

  // ---------- เมนูมือถือ ----------
  function setupMobileNav() {
    const menuBtn = document.getElementById("menuBtn");
    const scrim = document.getElementById("scrim");
    const close = () => document.body.classList.remove("nav-open");
    menuBtn.addEventListener("click", () => document.body.classList.toggle("nav-open"));
    scrim.addEventListener("click", close);
    document.getElementById("nav").addEventListener("click", (e) => {
      if (e.target.closest("a")) close();
    });
  }

  // ---------- init ----------
  document.addEventListener("DOMContentLoaded", () => {
    rerender();
    setupMobileNav();

    document.getElementById("langBtn").addEventListener("click", () => {
      window.__lang = window.__lang === "th" ? "en" : "th";
      localStorage.setItem("pg_lang", window.__lang);
      rerender();
    });

    let t;
    document.getElementById("search").addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(runSearch, 120);
    });
  });
})();
