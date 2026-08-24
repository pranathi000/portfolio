# Santhoshini Pranathi Singaraju — personal site

A minimal, editorial research/engineering site. Next.js (App Router) + TypeScript +
Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy free (GitHub → Vercel)

1. Create a new GitHub repo and push this folder.
2. Go to vercel.com → New Project → import the repo → Deploy.
3. You get a free URL like `santhoshinipranathi.vercel.app` (HTTPS included).
4. Later, buy a domain and add it under Vercel → Project → Settings → Domains.
   Then change `url` in `lib/site.ts` to the new domain.

## Where to edit things

- `lib/site.ts` — your name, links (GitHub, LinkedIn, email, Medium, papers,
  certificates), CV path, site URL, and SEO description.
- `lib/data.ts` — all content: research fields, publications, research log,
  systems projects, other projects, education, certifications, contributions.
- Components live in `components/`. You rarely need to touch them — the text and
  links come from the two files above.

## Two things to fill in

1. **Google Scholar** — `lib/site.ts` → `links.scholar` is empty. Paste your
   Scholar profile URL there. Until then, the Scholar link points to your papers
   folder as a stand-in.
2. **CV** — your resume already ships as `public/cv.pdf`. Replace that file to
   update the CV download.

## Fonts & colors

Newsreader (display serif), Geist (body), Geist Mono (labels) via `next/font`.
Palette lives in `tailwind.config.ts` (paper, ink, soft, faint, line, oxblood).
