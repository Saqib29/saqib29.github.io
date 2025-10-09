// src/projects.ts - Projects page renderer

function qs<T extends Element = Element>(sel: string): T | null { return document.querySelector(sel) as T | null; }

async function loadData(): Promise<any> {
  const res = await fetch('./data/content.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load content.json');
  return res.json();
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

function buildNav() {
  const nav = qs<HTMLElement>('#nav-links');
  const mobileNav = qs<HTMLElement>('#mobile-nav-links');
  if (!nav || !mobileNav) return;
  const links = [
    { label: 'About', href: 'index.html#about' },
    { label: 'Skills', href: 'index.html#skills' },
    { label: 'Experience', href: 'index.html#experience' },
    { label: 'Projects', href: 'projects.html' },
    { label: 'Blogs', href: 'blogs.html' },
    { label: 'Contact', href: 'index.html#contact' },
  ];
  const linkHTML = links.map(l => `<a class="nav-link" href="${l.href}">${l.label}</a>`).join('');
  nav.innerHTML = linkHTML;
  mobileNav.innerHTML = linkHTML;
}

function renderHeaderFooter(d: any) {
  const brand = qs<HTMLElement>('#nav-brand');
  if (brand) brand.textContent = d.profile?.name || 'My Portfolio';
  const resumeDesktop = qs<HTMLAnchorElement>('#resume-link-desktop');
  const resumeMobile = qs<HTMLAnchorElement>('#resume-link-mobile');
  if (d.profile?.resume) {
    if(resumeDesktop) resumeDesktop.href = d.profile.resume;
    if(resumeMobile) resumeMobile.href = d.profile.resume;
  } else {
    if(resumeDesktop) resumeDesktop.style.display = 'none';
    if(resumeMobile) resumeMobile.style.display = 'none';
  }
  const year = qs<HTMLElement>('#year'); if (year) year.textContent = String(new Date().getFullYear());
  const owner = qs<HTMLElement>('#site-owner'); if (owner) owner.textContent = d.profile?.name || '';
}

function renderProjects(d: any) {
  const grid = qs<HTMLElement>('#projects-grid');
  if (!grid) return;
  const projects = Array.isArray(d.projects) ? d.projects : [];
  const slugify = (s: string) => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  grid.innerHTML = projects.map((p: any) => {
    const hasLinks = Array.isArray(p.links) && p.links.length > 0;
    const status = (p.status || '').toLowerCase();
    const statusClass = status.includes('live') ? 'status-live' : status.includes('dev') ? 'status-development' : 'status-completed';
    const slug = slugify(p.title || 'project');
    return `
      <article class="project-card" id="${slug}">
        <div class="project-header">
          ${p.company ? `<div class="project-company">${p.company}</div>` : ''}
          <h3 class="project-title">${p.title}</h3>
          ${p.status ? `<span class="project-status ${statusClass}">${p.status}</span>` : ''}
          ${p.description ? `<p class="project-subtitle">${p.description}</p>` : ''}
        </div>
        <div class="project-body">
          ${Array.isArray(p.responsibilities) && p.responsibilities.length ? `
            <div class="project-responsibilities">
              ${p.responsibilities.map((resp: string) => `<div class="responsibility-item">${resp}</div>`).join('')}
            </div>
          ` : ''}
          ${Array.isArray(p.tags) && p.tags.length ? `
            <div class="project-tech-stack">
              ${p.tags.map((tech: string) => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          ` : ''}
          ${hasLinks ? `
            <div class="project-links">
              ${p.links.map((link: any, index: number) => `
                <a href="${link.href}" target="_blank" rel="noopener" class="project-link ${index === 0 ? 'project-link-primary' : 'project-link-secondary'}">${link.label}</a>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </article>
    `;
  }).join('');
}

async function init() {
  try {
    setupDarkMode();
    setupMobileMenu();
    buildNav();
    const d = await loadData();
    renderHeaderFooter(d);
    renderProjects(d);
  } catch (err) {
    console.error(err);
    alert('Failed to load projects. Please check data/content.json');
  }
}

window.addEventListener('DOMContentLoaded', init);

export {};
