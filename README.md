# Santhoshini Pranathi Singaraju — personal site

Plain, top-to-bottom Next.js site. Lavender background, black text, purple
hyperlinks, no cards, no side-by-side layouts.

## Run locally
```bash
npm install
npm run dev
```

## Deploy (GitHub → Vercel, free)
Push this to your repo (delete old app/, components/, lib/, and the config
files first, then upload everything here) — Vercel redeploys automatically.

## Everything you'll ever edit is in `lib/data.ts` and `lib/site.ts`

`lib/site.ts` — your links: email, GitHub, LinkedIn, Hugging Face, Discord,
Medium, Scholar, CV path. Empty string = "coming soon" shown on the site
instead of a broken link.

`lib/data.ts` — every piece of content on the homepage, as plain arrays:

- `articles` — things you wrote. Add `{ emoji, title, date, preview, pdf }`.
  Put the PDF file in `public/` (e.g. `public/articles/name.pdf`) and set
  `pdf: "/articles/name.pdf"`.
- `research`, `projects` — your own work. `link` can point to a paper or a
  GitHub repo; leave `""` until you have one.
- `discoveries` — other people's papers, articles, sites, tools you're
  recommending. Always opens externally.
- `thingsILove` — broader interests (art, music, books, etc.) — loose format.
- `aiEvolution` — your own dated log of AI developments you find notable.
- `education`, `certifications` — folded into the About section only.

To add a **new kind of content** later (a painting, a course, anything),
copy the shape of the closest existing array and add a new `<Section>` in
`app/page.tsx` — no other component needs to change.
