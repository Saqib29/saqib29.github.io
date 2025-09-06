# Portfolio – Editing & Deployment Guide

This portfolio is a static site powered by TailwindCSS (via CDN) and JSON content. All content is editable in `data/content.json`.

## Edit Content

- Profile & Site
  - `site.title`, `site.description`, `site.url`, `site.image`
  - `profile.name`, `profile.resume` (URL to your resume PDF)
- Hero
  - `hero.title`, `hero.subtitle`, `hero.image`
  - `hero.ctas` – add/remove CTA buttons (`label`, `href`, `primary`, `external`)
- Socials
  - `socials[]` – `label`, `href`, optional `icon` (emoji or small text)
- About
  - `about.html` – supports basic HTML.
- Skills
  - `skills[]` – strings. Add/remove freely.
- Projects
  - `projects[]` with: `title`, `description`, optional `badge`, `tags[]`, `links[]` ({label, href})
- Experience
  - `experience[]` with: `company`, `role`, `period`, `location`, `description`, `highlights[]`, `tech[]`
- Education
  - `education[]` with: `institution`, `degree`, `period`, `details`
- Contact
  - `contact[]` items of type `email`, `phone`, or `link`

Add new items by appending to the corresponding array.

## Structure

- `index.html` – page layout and sections
- `scripts/main.js` – loads `data/content.json` and renders sections
- `styles.css` – minimal custom styling (Tailwind handles most)
- `data/content.json` – your source of truth for content

## Local Preview

Use a local web server (needed because `fetch()` from file:// is blocked):

```bash
python3 -m http.server 5173
```
Then open http://127.0.0.1:5173 in your browser.

## Dark Mode

- Toggle in the header. Preference is stored in `localStorage`.

## SEO

- SEO tags are generated from `site.title`, `site.description`, `site.url`, `site.image`.
- You can add a `favicon.ico` to the project root.

## Deployment

Any static host works (Netlify, Vercel Static, GitHub Pages):
- Deploy the repo as-is. No build step required.
- Ensure `data/content.json` is served (it is included in the repo).

## Customization

- Colors: update Tailwind CDN config in `<head>` of `index.html` (primary color)
- Sections: You can remove sections by deleting their `<section>` in `index.html` and corresponding render in `main.js`.
- Fonts: add a Google Font `<link>` and extend Tailwind via `tailwind.config` in the same `<script>`.

## Troubleshooting

- Blank content: open DevTools console; check that `data/content.json` loads without 404. Use a local web server.
- Emojis not desired for social icons: replace with SVGs or text labels.
