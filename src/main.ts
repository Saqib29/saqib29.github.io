// src/main.ts - TypeScript conversion of original main.js

export {};

type Maybe<T> = T | null | undefined;

function qs<T extends Element = Element>(sel: string): Maybe<T> { return document.querySelector(sel) as Maybe<T>; }
function qsa<T extends Element = Element>(sel: string): T[] { return Array.from(document.querySelectorAll(sel)) as T[]; }

function icon(basePath: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="icon">${basePath}</svg>`;
}

function iconMedium(): string {
  return icon(
    '<path d="M6 18V7"/>' +
    '<path d="M6 7l6 7 6-7"/>' +
    '<path d="M18 18V7"/>'
  );
}

function iconGitHub() { return icon('<path d="M15 22v-3.13a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18.5 4.77 5.07 5.07 0 0 0 18.4 1S17.09.65 15 2.2a13.38 13.38 0 0 0-6 0C6.91.65 5.6 1 5.6 1a5.07 5.07 0 0 0-.1 3.77A5.44 5.44 0 0 0 3.5 9.26c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.87V22"/>'); }
function iconLinkedIn() { return icon('<rect x="2" y="9" width="4" height="13" rx="1"/><circle cx="4" cy="4" r="2"/><path d="M9 22v-8a4 4 0 0 1 8 0v8"/>'); }
function iconDevto() { return icon('<rect x="2" y="3" width="20" height="18" rx="2"/>' + '<path d="M6 9v6h1.6a2.6 2.6 0 0 0 0-6H6Z"/>' + '<path d="M11 9v6M13.5 9H11M13 12h-2M13.5 15H11"/>' + '<path d="M15 9l2 6 2-6"/>' ); }
function iconLeetCode() { return icon('<path d="M13 4 7 10l6 6"/><path d="M17 7 12 12l5 5"/><path d="M14 19h5"/>'); }
function iconStackOverflow() { return icon('<path d="M5 20h10v-5"/><path d="M7 18h6"/><path d="m8 14 6 2"/><path d="m9 11 6 3"/><path d="m10 8 6 4"/><path d="m11 5 6 5"/>'); }
function iconMail() { return icon('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'); }
function iconPhone() { return icon('<path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.61a2 2 0 0 1-.45 2.11L7 8a16 16 0 0 0 6 6l.53-1.2a2 2 0 0 1 2.11-.45c.84.24 1.71.42 2.61.54A2 2 0 0 1 22 16.92Z"/>'); }
function iconLink() { return icon('<path d="M10 13a5 5 0 0 0 7.07 0l1.76-1.76a5 5 0 0 0-7.07-7.07L10 5"/><path d="M14 11a5 5 0 0 0-7.07 0L5.17 12.76a5 5 0 0 0 7.07 7.07L14 19"/>'); }
function iconGlobe() { return icon('<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>'); }
function iconRss() { return icon('<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>'); }
function iconMapPin() { return icon('<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'); }

function iconForSocial(label?: string, href?: string): string {
  const l = (label || '').toLowerCase();
  const h = (href || '').toLowerCase();
  if (l.includes('github') || h.includes('github.com')) return iconGitHub();
  if (l.includes('linkedin') || h.includes('linkedin.com')) return iconLinkedIn();
  if (l.includes('leetcode') || h.includes('leetcode.com')) return iconLeetCode();
  if (l.includes('stack') || l.includes('stackoverflow') || h.includes('stackoverflow.com')) return iconStackOverflow();
  if (l.includes('medium') || h.includes('medium.com')) return iconMedium();
  if (l.includes('dev.to') || l.includes('devto') || h.includes('dev.to')) return iconDevto();
  if (l.includes('blog') || h.includes('/blog') || h.includes('/rss')) return iconRss();
  if (l.includes('website') || l.includes('site') || l.includes('portfolio') || h.includes('http')) return iconGlobe();
  return iconLink();
}

function skillIconSVG(name?: string): string {
  const n = (name || '').toLowerCase();
  const svg = (p: string) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="skill-icon">${p}</svg>`;
  const code = svg('<path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/>');
  const box = svg('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>');
  const db = svg('<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>');
  const cloud = svg('<path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.3 1.7A4 4 0 0 0 7 19Z"/>');
  const test = svg('<path d="M4 5h16"/><path d="M4 9h16"/><rect x="4" y="13" width="16" height="7" rx="2"/><path d="M8 13v7"/>');

  if (n.includes('javascript') || n === 'js') return code;
  if (n.includes('typescript') || n === 'ts') return code;
  if (n.includes('html')) return svg('<path d="M6 2h12l-1 18-5 2-5-2L6 2Z"/><path d="M8 7h8M8 12h6M9 17h5"/>');
  if (n.includes('css')) return svg('<path d="M6 2h12l-1 18-5 2-5-2L6 2Z"/><path d="M8 7h8M8 12h8M9 17h6"/>');
  if (n.includes('tailwind')) return svg('<path d="M3 14c2-4 4-6 8-6 4 0 6 2 8 6-2 4-4 6-8 6-4 0-6-2-8-6Z"/><path d="M6 12c1-2 2-3 5-3 3 0 4 1 5 3-1 2-2 3-5 3-3 0-4-1-5-3Z"/>');
  if (n.includes('flutter')) return svg('<path d="m4 19 8-8"/><path d="m8 21 8-8-4-4L4 17"/>');
  if (n.includes('node')) return svg('<path d="M12 2 3 7v10l9 5 9-5V7Z"/><path d="M7 9v6l5 3 5-3V9"/>');
  if (n.includes('express')) return svg('<circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/><path d="M10 12h4"/>');
  if (n.includes('nestjs') || n.includes('nest')) return svg('<path d="M12 2c5.5 3 8 6.5 8 10s-2.5 7-8 10c-5.5-3-8-6.5-8-10S6.5 5 12 2Z"/>');
  if (n.includes('spring')) return svg('<path d="M12 21c-4.97 0-9-4.03-9-9 0-2.2.8-4.22 2.12-5.77L12 12l6.88-5.77A8.97 8.97 0 0 1 21 12c0 4.97-4.03 9-9 9Z"/>');
  if (n.includes('laravel')) return box;
  if (n.includes('django')) return box;
  if (n.includes('flask')) return box;
  if (n.includes('redis')) return db;
  if (n.includes('mongo')) return db;
  if (n.includes('postgres')) return db;
  if (n.includes('mysql')) return db;
  if (n.includes('rest')) return svg('<path d="M3 12h18"/><path d="M7 8l-4 4 4 4"/><path d="M17 8l4 4-4 4"/>');
  if (n.includes('microservice')) return svg('<circle cx="6" cy="12" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 12h8M12 8v8"/>');
  if (n.includes('rabbit')) return svg('<path d="M5 19V8a3 3 0 1 1 6 0v11"/><path d="M13 19V8a3 3 0 1 1 6 0v5"/><rect x="3" y="14" width="18" height="7" rx="2"/>');
  if (n.includes('graphql')) return svg('<polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2"/><path d="M12 2v20M2 7l10 5 10-5M2 17l10-5 10 5"/>');
  if (n.includes('event')) return svg('<path d="M3 5h18M7 3v4M17 3v4"/><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M7 15h4M13 15h4"/>');
  if (n.includes('docker')) return svg('<path d="M3 13h10v4h6a2 2 0 0 0 0-4h-1"/><path d="M5 9h4v4H5zM10 9h4v4h-4zM15 9h4v3h-4z"/>');
  if (n.includes('aws')) return cloud;
  if (n.includes('ci/cd') || n.includes('cicd') || n.includes('ci')) return svg('<path d="M3 12h6l3 7 3-14 3 7h3"/>');
  if (n.includes('git')) return svg('<path d="M7 7v10M17 7v10"/><circle cx="7" cy="7" r="2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="17" cy="17" r="2"/><path d="M9 7h6M7 9l10 8M7 15l10-8"/>');
  if (n.includes('linux')) return svg('<path d="M9 21c-3 0-5-2-5-5 0-2 1-3 2-4 0-3 2-6 6-6s6 3 6 6c1 1 2 2 2 4 0 3-2 5-5 5"/><path d="M9 10s1 1 3 1 3-1 3-1"/>');
  if (n.includes('nginx')) return svg('<path d="M12 2 3 7v10l9 5 9-5V7Z"/><path d="m8 9 8 6M16 9l-8 6"/>');
  if (n.includes('jest')) return test;
  if (n.includes('selenium')) return test;
  if (n.includes('unit') || n.includes('integration')) return test;
  if (n.includes('cheerio')) return svg('<circle cx="12" cy="12" r="9"/><path d="M8 10h8M7 14h10"/>');
  return code;
}

const state: { data: any | null } = { data: null };

async function loadData(): Promise<void> {
  const res = await fetch('./data/content.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load content.json');
  state.data = await res.json();
}

function setSEO(d: any) {
  const title = d.site?.title || 'Portfolio';
  const desc = d.site?.description || '';
  const url = d.site?.url || '';
  const image = d.site?.image || '';

  document.title = title;
  qs<HTMLSpanElement>('#site-title')!.textContent = title;
  qs<HTMLMetaElement>('#site-description')!.setAttribute('content', desc);
  qs<HTMLMetaElement>('#og-title')!.setAttribute('content', title);
  qs<HTMLMetaElement>('#og-description')!.setAttribute('content', desc);
  qs<HTMLMetaElement>('#og-url')!.setAttribute('content', url);
  if (image) qs<HTMLMetaElement>('#og-image')!.setAttribute('content', image);
}

function setupDarkMode() {
  const saved = localStorage.getItem('theme');
  const isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', isDark);
  const btn = qs<HTMLButtonElement>('#dark-toggle');
  if (btn) {
    btn.textContent = isDark ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      const newDark = !document.documentElement.classList.contains('dark');
      document.documentElement.classList.toggle('dark', newDark);
      localStorage.setItem('theme', newDark ? 'dark' : 'light');
      btn.textContent = newDark ? '☀️' : '🌙';
    });
  }
}

function setupMobileMenu() {
    const toggleBtn = qs<HTMLButtonElement>('#mobile-menu-toggle');
    const mobileMenu = qs<HTMLElement>('#mobile-menu');
    if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function buildNav(sections: Array<{id?: string; label: string; href?: string}>) {
  const nav = qs<HTMLElement>('#nav-links');
  const mobileNav = qs<HTMLElement>('#mobile-nav-links');
  if (!nav || !mobileNav) return;
  
  const linkHTML = sections.map(s => {
    const href = s.href || `#${s.id}`;
    return `<a class="nav-link" href="${href}">${s.label}</a>`;
  }).join('');

  nav.innerHTML = linkHTML;
  mobileNav.innerHTML = linkHTML;
}

function renderHero(d: any) {
  qs<HTMLDivElement>('#nav-brand')!.textContent = d.profile?.name || 'My Portfolio';
  qs<HTMLHeadingElement>('#hero-title')!.textContent = d.hero?.title || '';
  qs<HTMLParagraphElement>('#hero-subtitle')!.textContent = d.hero?.subtitle || '';
  const img = qs<HTMLImageElement>('#hero-image')!;
  if (d.hero?.image) {
    img.src = d.hero.image;
    img.alt = d.profile?.name || 'Portrait';
  } else {
    img.style.display = 'none';
  }

  const ctas = qs<HTMLElement>('#hero-ctas')!;
  ctas.innerHTML = (d.hero?.ctas || []).map((b: any) => {
    const style = b.primary ? 'bg-primary text-white hover:bg-primary-dark' : 'border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800';
    return `<a class="px-4 py-2 rounded-md ${style}" href="${b.href}" target="${b.external ? '_blank' : '_self'}" rel="noopener">${b.label}</a>`;
  }).join('');

  const socials = qs<HTMLElement>('#social-links')!;
  const baseSocials = Array.isArray(d.socials) ? [...d.socials] : [];
  const contact = Array.isArray(d.contact) ? d.contact : [];
  const additions: any[] = [];
  const platforms = [
    { key: 'Medium', match: (u = '') => u.includes('medium.com') },
    { key: 'Dev.to', match: (u = '') => u.includes('dev.to') },
    { key: 'LeetCode', match: (u = '') => u.includes('leetcode.com') },
    { key: 'Stack Overflow', match: (u = '') => u.includes('stackoverflow.com') },
  ];
  const existing = new Set(baseSocials.map((s: any) => (s.href || s.label || '').toLowerCase()));
  contact.forEach((c: any) => {
    const href = (c.href || c.value || '').toLowerCase();
    if (!href) return;
    platforms.forEach(p => {
      if (p.match(href)) {
        const id = href;
        if (!existing.has(id)) {
          additions.push({ label: p.key, href: c.href || c.value });
          existing.add(id);
        }
      }
    });
  });
  const merged = [...baseSocials, ...additions];
  socials.innerHTML = merged.map((s: any) => `<a class="icon-btn" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${iconForSocial(s.label, s.href)}</a>`).join('');

  const resumeDesktop = qs<HTMLAnchorElement>('#resume-link-desktop');
  const resumeMobile = qs<HTMLAnchorElement>('#resume-link-mobile');
  if (d.profile?.resume) {
    if(resumeDesktop) resumeDesktop.href = d.profile.resume;
    if(resumeMobile) resumeMobile.href = d.profile.resume;
  } else {
    if(resumeDesktop) resumeDesktop.style.display = 'none';
    if(resumeMobile) resumeMobile.style.display = 'none';
  }
}

function renderAbout(d: any) {
  const about = qs<HTMLElement>('#about-content')!;
  about.innerHTML = (d.about?.html) || '';
}

function iconCode() { return icon('<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>'); }
function iconBriefcase() { return icon('<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect>'); }
function iconGraduation() { return icon('<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>'); }

function renderAboutCards(d: any) {
  const wrap = qs<HTMLElement>('#about-cards');
  if (!wrap) return;
  const years = '3+ years';
  const exp = Array.isArray(d.experience) ? d.experience : [];
  const current = exp[0];
  const previous = exp[1];
  const edu = Array.isArray(d.education) ? d.education[0] : null;

  const expertiseText = 'Full‑stack focus with Node.js/NestJS and TypeScript. Build scalable REST APIs, microservices, and cloud‑ready backends with Docker and AWS.';
  const experienceText = current
    ? `Currently ${current.role || 'Engineer'} at ${current.company}. Previously ${previous?.company || 'other teams'}. ${years} of hands‑on development.`
    : `${years} of hands‑on development across startups and products.`;
  const educationText = edu
    ? `${edu.degree || ''} at ${edu.institution || ''}. ${edu.period || ''}.`
    : 'Formal background in Computer Science and Engineering.';

  const cards = [
    { title: 'Expertise', icon: iconCode(), text: expertiseText },
    { title: 'Experience', icon: iconBriefcase(), text: experienceText },
    { title: 'Education', icon: iconGraduation(), text: educationText },
  ];

  wrap.innerHTML = `
    <div class="about-cards-grid">
      ${cards.map(c => `
        <div class="about-card">
          <div class="about-card-body">
            <div class="about-card-icon">${c.icon}</div>
            <h3 class="about-card-title">${c.title}</h3>
            <p class="about-card-text">${c.text}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderSkills(d: any) {
  const skills = d.skills || {};
  if (Array.isArray(skills)) {
    const list = qs<HTMLElement>('#skills-list');
    const filters = qs<HTMLElement>('#skills-filters');
    if (filters) filters.innerHTML = '';
    if (list) list.innerHTML = skills.map(s => `<span class="skill-tag">${skillIconSVG(s)}<span class="skill-name">${s}</span></span>`).join('');
    return;
  }

  const filtersEl = qs<HTMLElement>('#skills-filters');
  const listEl = qs<HTMLElement>('#skills-list');
  if (!filtersEl || !listEl) return;

  const categories = Object.keys(skills);
  const allLabel = 'All';
  filtersEl.innerHTML = [allLabel, ...categories].map((cat, idx) => `
    <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-cat="${cat}">${cat}</button>
  `).join('');

  function renderList(filter: string) {
    let items: string[] = [];
    if (!filter || filter === allLabel) {
      const set = new Set<string>();
      categories.forEach(c => (skills[c] || []).forEach((s: string) => set.add(s)));
      items = Array.from(set);
    } else {
      items = skills[filter] || [];
    }
    if (listEl) {
      listEl.innerHTML = items.map(s => `<span class="skill-tag">${skillIconSVG(s)}<span class="skill-name">${s}</span></span>`).join('');
    }
  }

  renderList(allLabel);

  filtersEl.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('button.filter-btn') as HTMLElement | null;
    if (!btn) return;
    const cat = btn.getAttribute('data-cat') || '';
    qsa('#skills-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderList(cat);
  });
}

function renderProjects(d: any) {
  const grid = qs<HTMLElement>('#projects-grid');
  if (!grid) return;

  const projects = Array.isArray(d.projects) ? d.projects : [];
  const total = projects.length;
  // collect top tags by frequency
  const tagCount = new Map<string, number>();
  projects.forEach((p: any) => {
    (p.tags || []).forEach((t: string) => tagCount.set(t, (tagCount.get(t) || 0) + 1));
  });
  const computedTopTags = Array.from(tagCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([t]) => t);
  const manualTags = Array.isArray((d as any).homeProjectTags) ? (d as any).homeProjectTags as string[] : [];
  const topTags = manualTags.length ? manualTags.slice(0, 8) : computedTopTags;

  grid.innerHTML = `
    <div class="project-callout w-full relative rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-indigo-50/60 dark:from-gray-900 dark:to-gray-800 px-6 py-6 md:px-10 md:py-8 shadow-sm">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div class="flex-1 min-w-0">
          <h3 class="text-2xl font-extrabold tracking-tight mb-1">Explore my projects</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            ${total ? `${total}+ professional and personal projects` : 'A curated collection of my recent work'}, including web apps, APIs, automation, and AI.
          </p>
          ${topTags.length ? `
            <div class="mt-3 flex flex-wrap gap-2">
              ${topTags.map(t => `<span class=\"tag\">${t}</span>`).join('')}
            </div>
          ` : ''}
        </div>
        <div class="shrink-0 w-full md:w-auto flex gap-3 justify-end md:justify-start">
          <a class="px-5 py-2.5 rounded-md bg-primary text-white hover:bg-primary-dark text-sm md:text-base" href="projects.html">View all projects →</a>
        </div>
      </div>
    </div>
  `;

  // Inject full-bleed responsive styles once
  if (!document.getElementById('projects-callout-styles')) {
    const style = document.createElement('style');
    style.id = 'projects-callout-styles';
    style.textContent = `
      @media (min-width: 768px) {
        .projects-callout-fullbleed { width: calc(100% + 4rem); left: -2rem; }
      }
    `;
    document.head.appendChild(style);
  }
}

function renderExperience(d: any) {
  const container = qs<HTMLElement>('#experience .container');
  if (!container) return;
  const experiences = d.experience || [];
  container.innerHTML = `
    <h2 class="section-title">Experience</h2>
    <div class="experience-timeline">
      ${experiences.map((exp: any) => `
        <div class="experience-item">
          <div class="experience-marker"></div>
          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-title-group">
                <h3 class="experience-role">${exp.role}</h3>
                <div class="experience-company">
                  ${exp.companyUrl ? `<a href="${exp.companyUrl}" target="_blank" rel="noopener" class="company-link">${exp.company}</a>` : exp.company}
                </div>
              </div>
              <div class="experience-meta">
                <div class="experience-period">${exp.period}</div>
                <div class="experience-location">${exp.location}</div>
              </div>
            </div>
            <div class="experience-description">${exp.description}</div>
            ${exp.highlights && exp.highlights.length ? `
              <div class="experience-highlights">
                <h4 class="highlights-title">Key Achievements</h4>
                ${exp.highlights.map((highlight: string) => `
                  <div class="highlight-item">${highlight}</div>
                `).join('')}
              </div>
            ` : ''}
            ${exp.tech && exp.tech.length ? `
              <div class="experience-tech">
                ${exp.tech.map((tech: string) => `
                  <span class="experience-tech-tag">${tech}</span>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderContact(d: any) {
  const el = qs<HTMLElement>('#contact-content');
  if (!el) return;
  const ways = Array.isArray(d.contact) ? d.contact : [];
  const primaryEmail = (ways.find((w: any) => w.type === 'email')?.value) || '';
  const phone = ways.find((w: any) => w.type === 'phone');
  let location = d.profile?.location || '';
  if (!location && Array.isArray(d.experience) && d.experience.length) location = d.experience[0].location || '';

  const inlineItems: string[] = [];
  if (phone) {
    inlineItems.push(`
      <a class="contact-item" href="tel:${phone.value}">
        <span class="contact-icon">${iconPhone()}</span>
        <span class="contact-label">${phone.value}</span>
      </a>
    `);
  }
  if (primaryEmail) {
    inlineItems.push(`
      <a class="contact-item" href="mailto:${primaryEmail}">
        <span class="contact-icon">${iconMail()}</span>
        <span class="contact-label">${primaryEmail}</span>
      </a>
    `);
  }
  if (location) {
    inlineItems.push(`
      <div class="contact-item" role="group" aria-label="Location">
        <span class="contact-icon">${iconMapPin()}</span>
        <span class="contact-label">${location}</span>
      </div>
    `);
  }

  el.innerHTML = `
    <div class="contact-two-col">
      <div class="contact-inline">
        ${inlineItems.join('')}
      </div>
      <div class="contact-card contact-form-card">
        <div class="contact-card-header">
          <h3 class="contact-card-title">Send me a message</h3>
          <p class="contact-card-sub">I'll get back to you as soon as possible.</p>
        </div>
        <form id="contact-form" class="contact-form">
          <div class="form-row">
            <div class="form-field">
              <label for="cf-name">Name</label>
              <input id="cf-name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div class="form-field">
              <label for="cf-email">Email</label>
              <input id="cf-email" name="email" type="email" placeholder="Your email" required />
            </div>
          </div>
          <div class="form-field">
            <label for="cf-subject">Subject</label>
            <input id="cf-subject" name="subject" type="text" placeholder="Subject" required />
          </div>
          <div class="form-field">
            <label for="cf-message">Message</label>
            <textarea id="cf-message" name="message" rows="5" placeholder="Your message" required></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  `;

  const form = qs<HTMLFormElement>('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (qs<HTMLInputElement>('#cf-name') as HTMLInputElement).value.trim();
      const email = (qs<HTMLInputElement>('#cf-email') as HTMLInputElement).value.trim();
      const subject = (qs<HTMLInputElement>('#cf-subject') as HTMLInputElement).value.trim();
      const message = (qs<HTMLTextAreaElement>('#cf-message') as HTMLTextAreaElement).value.trim();
      const body = `From: ${name} <${email}>\n\n${message}`;
      const mailto = `mailto:${encodeURIComponent(primaryEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }
}

function renderFooter(d: any) {
  qs<HTMLElement>('#year')!.textContent = String(new Date().getFullYear());
  qs<HTMLElement>('#site-owner')!.textContent = d.profile?.name || '';
}

function setupReveal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = [
    ...qsa<HTMLElement>('section.section > .container'),
    ...qsa<HTMLElement>('.card'),
    ...qsa<HTMLElement>('.timeline-card')
  ];
  const sectionTitles = qsa<HTMLElement>('.section-title');
  const sectionDividers = qsa<HTMLElement>('.section-divider');
  if (!targets.length) return;
  if (reduce) {
    targets.forEach(el => el.classList.add('is-visible'));
    sectionTitles.forEach(el => el.classList.add('animate-underline'));
    sectionDividers.forEach(el => el.classList.add('animate'));
    return;
  }
  targets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  const titleObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('animate-underline'); }); }, { threshold: 0.5 });
  const dividerObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('animate'); }); }, { threshold: 0.3 });
  targets.forEach(t => io.observe(t));
  sectionTitles.forEach(t => titleObserver.observe(t));
  sectionDividers.forEach(d => dividerObserver.observe(d));
}

function buildAutoNav() {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects', href: 'projects.html' },
    { id: 'blogs', label: 'Blogs', href: 'blogs.html' },
    { id: 'contact', label: 'Contact' },
  ];
  buildNav(sections);
}

function renderBlogs(d: any) {
  const list = qs<HTMLElement>('#blogs-list');
  if (!list) return;
  const blogs = d.blogs || [];
  list.innerHTML = blogs.map((b: any) => `
    <article class="card h-full flex flex-col">
      ${b.image ? `<img src="${b.image}" alt="${b.title}" class="w-full h-40 object-cover" />` : ''}
      <div class="card-body flex-1 flex flex-col">
        <h3 class="text-lg font-semibold">${b.title}</h3>
        ${b.excerpt ? `<p class="mt-2 text-sm text-gray-600 dark:text-gray-300 clamp-2">${b.excerpt}</p>` : ''}
        <div class="mt-3 flex gap-3 flex-wrap mt-auto">
          ${b.url ? `<a class="link" href="${b.url}" target="_blank" rel="noopener">Read</a>` : ''}
          ${b.source ? `<span class="tag">${b.source}</span>` : ''}
          ${b.date ? `<span class="tag">${b.date}</span>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

async function init() {
  try {
    setupDarkMode();
    setupMobileMenu();
    await loadData();
    const d = state.data;
    setSEO(d);
    buildAutoNav();
    renderHero(d);
    renderAbout(d);
    renderAboutCards(d);
    renderSkills(d);
    renderProjects(d);
    renderBlogs(d);
    renderExperience(d);
    renderContact(d);
    renderFooter(d);
    setupReveal();
    initTimelineAnimation();
  } catch (err) {
     
    console.error(err);
    alert('Failed to load portfolio data. Please check data/content.json');
  }
}

function initTimelineAnimation() {
  const timeline = qs<HTMLElement>('.experience-timeline');
  if (!timeline) return;
  const timelineEl = timeline as HTMLElement;
  function updateTimelineProgress() {
    const timelineRect = timelineEl.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const timelineTop = timelineRect.top;
    const timelineHeight = timelineRect.height;
    if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
      let scrollProgress = 0;
      if (timelineTop <= windowHeight * 0.8) {
        const visibleAmount = Math.min(windowHeight - timelineTop, timelineHeight);
        scrollProgress = Math.max(0, Math.min(1, visibleAmount / timelineHeight));
      }
  timelineEl.style.setProperty('--timeline-progress', String(scrollProgress));
    } else if (timelineTop > windowHeight) {
  timelineEl.style.setProperty('--timeline-progress', '0');
    } else {
  timelineEl.style.setProperty('--timeline-progress', '1');
    }
  }
  let ticking = false;
  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateTimelineProgress();
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', handleScroll);
  updateTimelineProgress();
}

window.addEventListener('DOMContentLoaded', init);
