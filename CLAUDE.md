# CLAUDE.md

Guidance for AI coding agents working in this repository.

## What this is

The static marketing and informational website for CINQCARE, a community-based healthcare organization, including its sub-brands (Grace at Home, Care Medical Practice, CINQCARE for Moms). It has pages for patients, providers, payers, communities, careers, and privacy policies. Visitors use it to learn about the services and to reach embedded third-party forms (contact, SMS opt-in) and a job board.

## Tech stack

- Next.js 15 with the **Pages Router** (`pages/`), React 19, plain JavaScript (no TypeScript).
- Styling: Sass. Each component has a CSS Module (`*.module.scss`), plus global styles in `styles/`. Tailwind CSS v4 is loaded through PostCSS (`postcss.config.mjs`) and `@use "tailwindcss"` in `styles/globals.scss`.
- Libraries: `aos` (scroll animations), `@mux/mux-player-react` (video), `react-masonry-css`, `dompurify` / `isomorphic-dompurify`.
- Third-party embeds: Jotform forms in iframes (`components/form`) and a JobScore widget script (`components/jobBoard`).
- Package manager: npm (`package-lock.json`).

## Folder map

```
pages/            One file per route (kebab-case filename = URL), plus _app.js, _document.js, 404.js
pages/api/        Only the create-next-app sample route (hello.js)
components/       One folder per section component: <name>/<name>.js + <name>.module.scss
styles/           globals.scss, abstracts/ (variables, fonts, utilities), pages/ (page-specific partials)
public/           Static assets: images, icons, fonts, portraits, headshots, videos, sitemap.xml
next.config.mjs   reactStrictMode and a long list of permanent redirects
jsconfig.json     Path alias "@/*" -> repo root (existing code mostly uses relative imports)
```

## Commands

Verified from `package.json`:

| Task | Command | Notes |
| --- | --- | --- |
| Install | `npm ci` | Uses the lockfile; `npm install` when adding deps |
| Run locally | `npm run dev` | http://localhost:3000 |
| Build | `npm run build` | `next build`; all pages prerender as static |
| Serve build | `npm start` | `next start`, run after a build |
| Lint | `npm run lint` | Runs `next lint`, but **no ESLint config is committed**, so it opens an interactive setup prompt. Treat lint as not configured. |
| Test | unknown | No test framework, test files, or test script |
| Deploy | unknown | No deploy config or CI in the repo. `.gitignore` lists `.vercel`, which points to Vercel, but this is unconfirmed. |

Node version: unknown (there is no `.nvmrc` and no `engines` field). Next 15 needs Node 18.18 or newer; the build has been confirmed to work on Node 22.

CI: none (no `.github/workflows` or other CI config).

## Conventions

- **Indentation and quotes:** tabs, double quotes, semicolons in JS and SCSS. There is no formatter config, so match the surrounding code.
- **Components:** use a camelCase folder and file name (`sideBySide/sideBySide.js`), a PascalCase default export, and a co-located `<name>.module.scss` imported as `styles`. Class names look like `section_Form` and `container_Form`.
- **Per-page content:** many components take a `page` prop (for example `page="join-our-family"`) and use `if (page === "...")` blocks to pick that page's copy and images. To add or change content for a page, edit the matching block in the component.
- **Pages:** each page defines `title`, `metaDescription`, `pageURL`, and `opengraphImg`, and renders them in `<Head>`. It then lays out `Header`, the section components, and `Footer`. Keep this SEO block on new pages.
- **SCSS:** module files start with `@use "./styles/abstracts" as *;` to get the shared variables, fonts, and mixins. Put new design tokens in `styles/abstracts/_variables.scss`.
- **Raw HTML:** copy containing inline HTML (`<em>`, `<br>`) is rendered with `dangerouslySetInnerHTML`. Only pass hard-coded, trusted strings this way. Sanitize anything else with DOMPurify, and never pass user input.
- **Assets:** components reference files in `public/` with root-relative paths (`images/...`, `/icons/...`).

## Guardrails

- **Redirects:** keep old URLs working by adding redirects to `next.config.mjs`. Some sources appear more than once (only the first match takes effect). Don't remove or reorder entries unless asked.
- **`public/sitemap.xml`** is maintained by hand. Update it when you add or remove a page.
- **Do not edit or commit generated files:** `.next/`, `out/`, `build/`, `node_modules/`, and `next-env.d.ts`. Only change `package-lock.json` through npm.
- **Migrations / database:** none. The site has no database or backend beyond the sample API route.
- **Environment variables:** none are referenced in the code. `.env*` files are gitignored. If you add one, document only its name, never its value.
- **Secrets:** never commit API keys, tokens, or credentialed URLs. The third-party embed URLs in components are public form and widget links.
- **Health data:** this is a healthcare organization's site, and the embedded forms may collect personal or health information. PHI/PII must never be logged, committed, or used in fixtures, examples, or screenshots. Don't add analytics or logging that would capture form contents.
- **Real people:** the images in `public/portraits` and `public/headshots` show real people. Don't repurpose them or use them as placeholder data.
- **Verifying changes:** there are no tests, so run `npm run build` to check that every page still prerenders. Then check the affected pages with `npm run dev`.

## Personal context

Daymon's personal working preferences and cross-repo context live in `memory.md`. Read it if it is available to you. It is not committed to this repo.
