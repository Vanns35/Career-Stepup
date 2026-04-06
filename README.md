# Career Upsteps — Website Starter

This is a Next.js + Tailwind CSS starter for Career Upsteps (immigration & career consultancy).

Features included:
- Next.js pages: Home, About, Services, Blog, Reviews, Contact
- Responsive layout using Tailwind CSS
- Testimonial component and Contact form (client-side fallback; see notes)
- SEO-friendly Head usage on pages

Quick start

1. Install dependencies

```bash
cd /Users/vanns/Documents/Career\ Upsteps
npm install
```

2. Run dev server

```bash
npm run dev
```

Open http://localhost:3000

Forms & CMS
- The enquiry form demonstrates a client-side submission flow. For production, integrate Formspree, Netlify Forms, or a serverless API endpoint.
- For content editing, consider Sanity, Contentful, or using Markdown + a small admin (or commit-based content if you prefer Git-driven workflows).

Deploy
- Recommended hosting: Vercel (native Next.js support). You can also use Netlify or any static host after `next build` + `next export` for static export.

Notes
- This starter focuses on a clean, modern design and is intentionally minimal to make future customization easy.
