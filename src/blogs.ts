// src/blogs.ts - TypeScript conversion of original blogs.js

function qs<T extends Element = Element>(sel: string): T | null { return document.querySelector(sel) as T | null; }

function icon(basePath: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="icon">${basePath}</svg>`;
}
function iconLink() { return icon('<path d="M10 13a5 5 0 0 0 7.07 0l1.76-1.76a5 5 0 0 0-7.07-7.07L10 5"/><path d="M14 11a5 5 0 0 0-7.07 0L5.17 12.76a5 5 0 0 0 7.07 7.07L14 19"/>'); }

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

function buildNav() {
  const nav = qs<HTMLElement>('#nav-links');
  if (!nav) return;
  const links = [
    { label: 'About', href: 'index.html#about' },
    { label: 'Skills', href: 'index.html#skills' },
    { label: 'Experience', href: 'index.html#experience' },
    { label: 'Projects', href: 'index.html#projects' },
    { label: 'Blogs', href: 'blogs.html' },
    { label: 'Contact', href: 'index.html#contact' },
  ];
  nav.innerHTML = links.map(l => `<a class="nav-link" href="${l.href}">${l.label}</a>`).join('');
}

function renderHeaderFooter(d: any) {
  const brand = qs<HTMLElement>('#nav-brand');
  if (brand) brand.textContent = d.profile?.name || 'My Portfolio';
  const resume = qs<HTMLAnchorElement>('#resume-link');
  if (resume) {
    if (d.profile?.resume) resume.href = d.profile.resume; else resume.style.display = 'none';
  }
  const year = qs<HTMLElement>('#year'); if (year) year.textContent = String(new Date().getFullYear());
  const owner = qs<HTMLElement>('#site-owner'); if (owner) owner.textContent = d.profile?.name || '';
}

function profileButtons(d: any) {
  const el = qs<HTMLElement>('#profile-buttons');
  if (!el) return;
  const socials = d.socials || [];
  const dev = socials.find((s: any) => /dev\.to/i.test(s.href) || /dev/i.test(s.label || ''));
  const medium = socials.find((s: any) => /medium\.com/i.test(s.href) || /medium/i.test(s.label || ''));
  const btn = (label: string, href: string) => `<a class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 inline-flex items-center gap-2" href="${href}" target="_blank" rel="noopener">${iconLink()}<span>${label}</span></a>`;
  const parts: string[] = [];
  if (dev) parts.push(btn('View my Dev.to', dev.href));
  if (medium) parts.push(btn('View my Medium', medium.href));
  el.innerHTML = parts.join('');
}

function renderBlogs(d: any) {
  const grid = qs<HTMLElement>('#blogs-grid');
  if (!grid) return;
  const blogs = d.blogs || [];
  grid.innerHTML = blogs.map((b: any) => `
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
    buildNav();
    const d = await loadData();
    renderHeaderFooter(d);
    profileButtons(d);
    renderBlogs(d);
  } catch (err) {
     
    console.error(err);
    alert('Failed to load blogs. Please check data/content.json');
  }
}

window.addEventListener('DOMContentLoaded', init);

export {};
