function iconMedium() {
  // Single 'M' glyph, centered and sized to fit 24x24
  // Strokes create two verticals with diagonals to form an M
  return icon(
    '<path d="M6 18V7"/>' +
    '<path d="M6 7l6 7 6-7"/>' +
    '<path d="M18 18V7"/>'
  );
}
// main.js - loads JSON content and renders the portfolio

function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

// SVG icon helpers (stroke-based for a consistent, clean look)
function icon(basePath) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="icon">${basePath}</svg>`;
}
function iconGitHub() {
  return icon('<path d="M15 22v-3.13a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18.5 4.77 5.07 5.07 0 0 0 18.4 1S17.09.65 15 2.2a13.38 13.38 0 0 0-6 0C6.91.65 5.6 1 5.6 1a5.07 5.07 0 0 0-.1 3.77A5.44 5.44 0 0 0 3.5 9.26c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.87V22"/>');
}
function iconLinkedIn() {
  return icon('<rect x="2" y="9" width="4" height="13" rx="1"/><circle cx="4" cy="4" r="2"/><path d="M9 22v-8a4 4 0 0 1 8 0v8"/>');
}
function iconDevto() {
  // DEV logo: rounded rectangle with stylized D E V
  return icon('<rect x="2" y="3" width="20" height="18" rx="2"/>'+
    '<path d="M6 9v6h1.6a2.6 2.6 0 0 0 0-6H6Z"/>' + // D
    '<path d="M11 9v6M13.5 9H11M13 12h-2M13.5 15H11"/>' + // E
    '<path d="M15 9l2 6 2-6"/>' // V
  );
}
// Simplified LeetCode glyph
function iconLeetCode() {
  return icon('<path d="M13 4 7 10l6 6"/><path d="M17 7 12 12l5 5"/><path d="M14 19h5"/>');
}
// Simplified Stack Overflow glyph
function iconStackOverflow() {
  return icon('<path d="M5 20h10v-5"/><path d="M7 18h6"/><path d="m8 14 6 2"/><path d="m9 11 6 3"/><path d="m10 8 6 4"/><path d="m11 5 6 5"/>');
}
function iconMail() {
  return icon('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>');
}
function iconPhone() {
  return icon('<path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.61a2 2 0 0 1-.45 2.11L7 8a16 16 0 0 0 6 6l.53-1.2a2 2 0 0 1 2.11-.45c.84.24 1.71.42 2.61.54A2 2 0 0 1 22 16.92Z"/>');
}
function iconLink() {
  return icon('<path d="M10 13a5 5 0 0 0 7.07 0l1.76-1.76a5 5 0 0 0-7.07-7.07L10 5"/><path d="M14 11a5 5 0 0 0-7.07 0L5.17 12.76a5 5 0 0 0 7.07 7.07L14 19"/>');
}
function iconGlobe() { // website
  return icon('<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>');
}
function iconRss() { // blog
  return icon('<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>');
}
function iconMapPin() {
  return icon('<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>');
}
function iconForSocial(label, href) {
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
function iconForContact(item) {
  const t = (item?.type || '').toLowerCase();
  const label = (item?.label || '').toLowerCase();
  const url = (item?.href || item?.value || '').toLowerCase();
  if (t === 'email') return iconMail();
  if (t === 'phone') return iconPhone();
  // Infer platform
  if (t === 'github' || label.includes('github') || url.includes('github.com')) return iconGitHub();
  // Dev.to
  if (t === 'devto' || label.includes('dev.to') || label.includes('devto') || url.includes('dev.to')) return iconDevto();
  // Medium
  if (t === 'medium' || label.includes('medium') || url.includes('medium.com')) return iconMedium();
  // Blog/RSS
  if (t === 'blog' || label.includes('blog') || url.includes('/blog') || url.includes('/rss')) return iconRss();
  if (
    t === 'website' || t === 'site' || t === 'portfolio' ||
    label.includes('website') || label.includes('site') || label.includes('portfolio')
  ) return iconGlobe();
  return iconLink();
}

// Monochrome skill icons (minimal stroke-based)
function skillIconSVG(name) {
  const n = (name || '').toLowerCase();
  const svg = (p) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="skill-icon">${p}</svg>`;
  // Generic icons
  const code = svg('<path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/>');
  const box = svg('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>');
  const db = svg('<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>');
  const cloud = svg('<path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.3 1.7A4 4 0 0 0 7 19Z"/>');
  const test = svg('<path d="M4 5h16"/><path d="M4 9h16"/><rect x="4" y="13" width="16" height="7" rx="2"/><path d="M8 13v7"/>');

  // Mappings by keyword
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

const state = {
  data: null,
};

async function loadData() {
  const res = await fetch('./data/content.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load content.json');
  state.data = await res.json();
}

function setSEO(d) {
  const title = d.site?.title || 'Portfolio';
  const desc = d.site?.description || '';
  const url = d.site?.url || '';
  const image = d.site?.image || '';

  document.title = title;
  qs('#site-title').textContent = title;
  qs('#site-description').setAttribute('content', desc);
  qs('#og-title').setAttribute('content', title);
  qs('#og-description').setAttribute('content', desc);
  qs('#og-url').setAttribute('content', url);
  if (image) qs('#og-image').setAttribute('content', image);
}

function setupDarkMode() {
  const saved = localStorage.getItem('theme');
  const isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', isDark);
  const btn = qs('#dark-toggle');
  btn.textContent = isDark ? '☀️' : '🌙';
  btn.addEventListener('click', () => {
    const newDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    btn.textContent = newDark ? '☀️' : '🌙';
  });
}

function buildNav(sections) {
  const nav = qs('#nav-links');
  nav.innerHTML = sections.map(s => {
    const href = s.href || `#${s.id}`;
    return `<a class="nav-link" href="${href}">${s.label}</a>`;
  }).join('');
}

function renderHero(d) {
  qs('#nav-brand').textContent = d.profile?.name || 'My Portfolio';
  qs('#hero-title').textContent = d.hero?.title || '';
  qs('#hero-subtitle').textContent = d.hero?.subtitle || '';
  const img = qs('#hero-image');
  if (d.hero?.image) {
    img.src = d.hero.image;
    img.alt = d.profile?.name || 'Portrait';
  } else {
    img.style.display = 'none';
  }

  // CTAs
  const ctas = qs('#hero-ctas');
  ctas.innerHTML = (d.hero?.ctas || []).map(b => {
    const style = b.primary ? 'bg-primary text-white hover:bg-primary-dark' : 'border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800';
    return `<a class="px-4 py-2 rounded-md ${style}" href="${b.href}" target="${b.external ? '_blank' : '_self'}" rel="noopener">${b.label}</a>`;
  }).join('');

  // Social
  const socials = qs('#social-links');
  const baseSocials = Array.isArray(d.socials) ? [...d.socials] : [];
  const contact = Array.isArray(d.contact) ? d.contact : [];
  const additions = [];
  const platforms = [
    { key: 'Medium', match: (u='') => u.includes('medium.com') },
    { key: 'Dev.to', match: (u='') => u.includes('dev.to') },
    { key: 'LeetCode', match: (u='') => u.includes('leetcode.com') },
    { key: 'Stack Overflow', match: (u='') => u.includes('stackoverflow.com') },
  ];
  const existing = new Set(baseSocials.map(s => (s.href || s.label || '').toLowerCase()));
  contact.forEach(c => {
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
  socials.innerHTML = merged.map(s => `<a class="icon-btn" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${iconForSocial(s.label, s.href)}</a>`).join('');

  // Resume
  const resume = qs('#resume-link');
  if (d.profile?.resume) {
    resume.href = d.profile.resume;
  } else {
    resume.style.display = 'none';
  }
}

function renderAbout(d) {
  const about = qs('#about-content');
  about.innerHTML = (d.about?.html) || '';
}

// Inline icons for About cards
function iconCode() { return icon('<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>'); }
function iconBriefcase() { return icon('<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect>'); }
function iconGraduation() { return icon('<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>'); }

function renderAboutCards(d) {
  const wrap = qs('#about-cards');
  if (!wrap) return;
  // Prepare summaries
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

function renderSkills(d) {
  const skills = d.skills || {};

  // Backward compatibility if skills is a flat array
  if (Array.isArray(skills)) {
    const list = qs('#skills-list');
    const filters = qs('#skills-filters');
    if (filters) filters.innerHTML = '';
    if (list) list.innerHTML = skills.map(s => `<span class="skill-tag">${skillIconSVG(s)}<span class="skill-name">${s}</span></span>`).join('');
    return;
  }

  const filtersEl = qs('#skills-filters');
  const listEl = qs('#skills-list');
  if (!filtersEl || !listEl) return;

  const categories = Object.keys(skills);

  // Build filters
  const allLabel = 'All';
  filtersEl.innerHTML = [allLabel, ...categories].map((cat, idx) => `
    <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-cat="${cat}">${cat}</button>
  `).join('');

  function renderList(filter) {
    let items = [];
    if (!filter || filter === allLabel) {
      // Flatten all skills (unique)
      const set = new Set();
      categories.forEach(c => (skills[c] || []).forEach(s => set.add(s)));
      items = Array.from(set);
    } else {
      items = skills[filter] || [];
    }
    listEl.innerHTML = items.map(s => `<span class="skill-tag">${skillIconSVG(s)}<span class="skill-name">${s}</span></span>`).join('');
  }

  // Initial render: show all
  renderList(allLabel);

  // Click handlers
  filtersEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button.filter-btn');
    if (!btn) return;
    const cat = btn.getAttribute('data-cat');
    // Toggle active state
    qsa('#skills-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderList(cat);
  });
}

function renderProjects(d) {
  const grid = qs('#projects-grid');
  const projects = d.projects || [];
  
  grid.innerHTML = projects.map(p => {
    const statusClass = p.status ? `status-${p.status.toLowerCase().replace(/\s+/g, '-')}` : 'status-completed';
    const hasLinks = Array.isArray(p.links) && p.links.length > 0;
    
    return `
    <article class="project-card">
      <div class="project-header">
        ${p.company ? `<div class="project-company">${p.company}</div>` : ''}
        <h3 class="project-title">${p.title}</h3>
        ${p.description ? `<p class="project-subtitle">${p.description}</p>` : ''}
      </div>
      
      <div class="project-body">
        ${Array.isArray(p.responsibilities) && p.responsibilities.length ? `
          <div class="project-responsibilities">
            ${p.responsibilities.slice(0, 4).map(resp => `<div class="responsibility-item">${resp}</div>`).join('')}
          </div>
        ` : ''}
        
        ${Array.isArray(p.tags) && p.tags.length ? `
          <div class="project-tech-stack">
            ${p.tags.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        ` : ''}
        
        ${hasLinks ? `
          <div class="project-links">
            ${p.links.map((link, index) => `
              <a href="${link.href}" 
                 target="_blank" 
                 rel="noopener" 
                 class="project-link ${index === 0 ? 'project-link-primary' : 'project-link-secondary'}">
                ${link.label}
              </a>
            `).join('')}
          </div>
        ` : `
          <div class="project-links">
            <span class="project-link project-link-secondary" style="cursor: default; opacity: 0.7;">
              Confidential Project
            </span>
          </div>
        `}
      </div>
    </article>
  `;
  }).join('');
}

function renderExperience(d) {
  const container = qs('#experience .container');
  const experiences = d.experience || [];
  
  container.innerHTML = `
    <h2 class="section-title">Experience</h2>
    <div class="experience-timeline">
      ${experiences.map(exp => `
        <div class="experience-item">
          <div class="experience-marker"></div>
          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-title-group">
                <h3 class="experience-role">${exp.role}</h3>
                <div class="experience-company">${exp.company}</div>
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
                ${exp.highlights.map(highlight => `
                  <div class="highlight-item">${highlight}</div>
                `).join('')}
              </div>
            ` : ''}
            
            ${exp.tech && exp.tech.length ? `
              <div class="experience-tech">
                ${exp.tech.map(tech => `
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

function renderEducation(d) {
  const list = qs('#education-list');
  const items = d.education || [];
  list.innerHTML = items.map(e => {
    // Derive department/group from explicit field or details prefix
    const details = e.details || '';
    let department = e.department || '';
    let deptLabel = '';
    const prefixMatch = details.match(/^\s*(Department|Group)\s*:\s*(.*)$/i);
    if (!department && prefixMatch) {
      deptLabel = prefixMatch[1].charAt(0).toUpperCase() + prefixMatch[1].slice(1).toLowerCase();
      department = (prefixMatch[2] || '').trim();
    } else if (department) {
      deptLabel = 'Department';
    }
    // Keep the remaining details if it wasn't just department
    const showDetails = details && !/^\s*(Department|Group)\s*:/i.test(details);

    return `
    <article class="card">
      <div class="card-body">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            ${e.logo ? `<img class="edu-logo" src="${e.logo}" alt="${e.institution}" />` : ''}
            <div>
              ${e.institution ? `<div class="text-base md:text-lg font-medium">${e.institution}</div>` : ''}
              ${e.location ? `<div class="text-xs text-gray-500">${e.location}</div>` : ''}
              ${department ? `<div class="mt-1 text-sm">${deptLabel}: ${department}</div>` : ''}
              ${e.degree ? `<div class="mt-2"><span class="badge">${e.degree}</span></div>` : ''}
            </div>
          </div>
          <div class="text-right">
            ${e.period ? `<div class="text-xs text-gray-500">${e.period}</div>` : ''}
            ${e.gpa ? `<span class="badge">GPA ${e.gpa}</span>` : ''}
          </div>
        </div>
        ${showDetails ? `<p class="mt-2 text-sm text-gray-600 dark:text-gray-300 clamp-3">${details}</p>` : ''}
        ${Array.isArray(e.highlights) && e.highlights.length ? `<div class="mt-3 flex flex-wrap gap-2">${e.highlights.map(h => `<span class=\"tag\">${h}</span>`).join('')}</div>` : ''}
        ${e.link ? `<div class="mt-3"><a class="link" href="${e.link}" target="_blank" rel="noopener">View credential →</a></div>` : ''}
      </div>
    </article>`;
  }).join('');
}

function renderContact(d) {
  const el = qs('#contact-content');
  const ways = Array.isArray(d.contact) ? d.contact : [];
  const primaryEmail = (ways.find(w => w.type === 'email')?.value) || '';
  const phone = ways.find(w => w.type === 'phone');
  // Remove GitHub, Medium, Dev.to from Contact
  const filtered = ways.filter(w => {
    const v = (w.href || w.value || '').toLowerCase();
    if (v.includes('github.com')) return false;
    if (v.includes('dev.to')) return false;
    if (v.includes('medium.com')) return false;
    return true;
  });
  // Derive location (prefer profile.location if exists; else first experience.location)
  let location = d.profile?.location || '';
  if (!location && Array.isArray(d.experience) && d.experience.length) location = d.experience[0].location || '';

  // Build inline info items (left) and form (right)
  const inlineItems = [];
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

  // Add mailto submission handler
  const form = qs('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = /** @type {HTMLInputElement} */(qs('#cf-name')).value.trim();
      const email = /** @type {HTMLInputElement} */(qs('#cf-email')).value.trim();
      const subject = /** @type {HTMLInputElement} */(qs('#cf-subject')).value.trim();
      const message = /** @type {HTMLTextAreaElement} */(qs('#cf-message')).value.trim();
      const to = primaryEmail || '';
      const body = `From: ${name} <${email}>\n\n${message}`;
      const mailto = `mailto:${encodeURIComponent(primaryEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }
}

function renderFooter(d) {
  qs('#year').textContent = new Date().getFullYear();
  qs('#site-owner').textContent = d.profile?.name || '';
}

// Scroll reveal animations
function setupReveal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = [
    ...qsa('section.section > .container'),
    ...qsa('.card'),
    ...qsa('.timeline-card')
  ];
  
  // Add section titles and dividers to animation targets
  const sectionTitles = qsa('.section-title');
  const sectionDividers = qsa('.section-divider');
  
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
  
  // Observer for section titles
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-underline');
      }
    });
  }, { threshold: 0.5 });
  
  // Observer for section dividers
  const dividerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.3 });
  
  targets.forEach(t => io.observe(t));
  sectionTitles.forEach(t => titleObserver.observe(t));
  sectionDividers.forEach(d => dividerObserver.observe(d));
}

function buildAutoNav() {
  // Add nav links for each major section if not provided in JSON
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs', href: 'blogs.html' },
    { id: 'contact', label: 'Contact' },
  ];
  buildNav(sections);
}

function renderBlogs(d) {
  const list = qs('#blogs-list');
  if (!list) return; // section may be removed
  const blogs = d.blogs || [];
  list.innerHTML = blogs.map(b => `
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

// Scroll-triggered timeline animation
function initTimelineAnimation() {
  const timeline = qs('.experience-timeline');
  if (!timeline) return;

  // Progressive line drawing based on scroll position
  function updateTimelineProgress() {
    const timelineRect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how much of the timeline is visible
    const timelineTop = timelineRect.top;
    const timelineHeight = timelineRect.height;
    
    // Start animation when timeline enters viewport
    if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
      // Calculate progress based on scroll position
      let scrollProgress = 0;
      
      if (timelineTop <= windowHeight * 0.8) {
        // Timeline is in view, calculate how much should be drawn
        const visibleAmount = Math.min(windowHeight - timelineTop, timelineHeight);
        scrollProgress = Math.max(0, Math.min(1, visibleAmount / timelineHeight));
      }
      
      // Apply the progress to the timeline line
      timeline.style.setProperty('--timeline-progress', scrollProgress);
    } else if (timelineTop > windowHeight) {
      // Timeline is below viewport
      timeline.style.setProperty('--timeline-progress', 0);
    } else {
      // Timeline is above viewport
      timeline.style.setProperty('--timeline-progress', 1);
    }
  }

  // Throttled scroll handler
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
  // Initial call
  updateTimelineProgress();
}

window.addEventListener('DOMContentLoaded', init);
