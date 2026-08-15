# Mostafa Yehia Rageb — Data Analyst Portfolio

A production-ready, single-page portfolio website for **Mostafa Yehia Rageb**, Junior
Data Analyst, built for recruiters and hiring managers evaluating Junior Data
Analyst / Data Analyst candidates.

---

## 1. Project overview

Single-page React site with sections: Hero, About, Skills, Featured Projects
(Salla, Pharmaceutical/Pet Pharmacy, RVO), Additional Projects (MISUO, Python
Data Quality), Experience & Education, Contact, and Footer. Dark mode
(default) and Light mode, sticky navigation with smooth scrolling, a filterable
project grid, an image lightbox, and a Google-Drive-backed video walkthrough
modal.

No fabricated projects, KPIs, employers, dates, or testimonials — every fact
on the site comes from the brief you provided. Anything not supplied (email,
LinkedIn URL, WhatsApp number, CV file, project screenshots) is a clearly
labeled placeholder — see **Section 7–11** below to fill them in.

## 2. Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (custom dark/light design tokens, no default-theme look)
- **lucide-react** for icons
- **framer-motion** for subtle, restrained entrance animations
- No backend, no CMS, no unnecessary dependencies

## 3. Folder structure

```
mostafa-yehia-portfolio/
├── index.html
├── package.json
├── vite.config.js              (base: '/portfolio/' — see Section 12)
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.cjs
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions: builds & deploys to Pages
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── .nojekyll                ← prevents GitHub Pages from Jekyll-processing the build
│   ├── CV_README.md              ← instructions; add your real CV next to it
│   ├── Mostafa_Yehia_Rageb_CV.pdf  ← ADD THIS FILE (see Section 10)
│   └── images/
│       ├── profile/               ← add profile.jpg here (Section 8)
│       └── projects/
│           ├── salla/             ← salla-cover.png, salla-1.png, salla-2.png
│           ├── pharmacy/          ← pharmacy-cover.png, pharmacy-1.png, pharmacy-2.png
│           └── rvo/                ← rvo-cover.png, rvo-1.png, rvo-2.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── hooks/
    │   └── useTheme.js
    ├── utils/
    │   └── paths.js             ← resolves public asset paths against Vite's base
    ├── data/                      ← EDIT THESE to update content, no JSX changes needed
    │   ├── portfolio.js           (name, contact, socials, about copy)
    │   ├── skills.js
    │   ├── experience.js
    │   └── projects.js            (all project details + links)
    └── components/
        ├── Navbar.jsx / ThemeToggle.jsx
        ├── Hero.jsx / About.jsx / Skills.jsx
        ├── Projects.jsx / ProjectCard.jsx / AdditionalProjectCard.jsx
        ├── ProjectModal.jsx / ImageLightbox.jsx / VideoModal.jsx / ModalShell.jsx
        ├── ImageWithFallback.jsx / Reveal.jsx
        ├── Experience.jsx / Contact.jsx / Footer.jsx
```

## 4. How to install

Requires Node.js 18+ and npm.

```bash
cd mostafa-yehia-portfolio
npm install
```

## 5. How to run (development)

```bash
npm run dev
```

Open the printed local URL exactly as shown in the terminal. Because this
project sets `base: '/portfolio/'` for GitHub Pages (Section 12), the dev
server serves the app under that same path — e.g.
`http://localhost:5173/portfolio/`, not the bare root. Always use the URL
Vite prints; don't manually drop the `/portfolio/` part.

## 6. How to build (production)

```bash
npm run build
```

Output is generated in `dist/`. Preview it locally with:

```bash
npm run preview
```

Same as with `npm run dev`, use the exact URL Vite prints (it will include
`/portfolio/`).

## 7. How to update personal info, socials & copy

Almost everything editable lives in **`src/data/`** — you should rarely need
to touch component files.

- `src/data/portfolio.js` — name, headline, hero summary, email, LinkedIn,
  GitHub, WhatsApp number, CV path, About Me story and career-path steps.
- `src/data/skills.js` — Power BI / Excel / SQL / Python capability lists.
- `src/data/experience.js` — job history and education.
- `src/data/projects.js` — every featured and additional project, including
  KPIs, tools, descriptions, and links.

## 8. How to replace the profile image

Add your photo as:

```
public/images/profile/profile.jpg
```

The Hero section reads this exact path. If it's missing, the site shows a
clean initials placeholder instead of breaking.

## 9. How to add project images

Drop screenshots into the matching folder using the filenames already
referenced in `src/data/projects.js`:

```
public/images/projects/salla/salla-cover.png, salla-1.png, salla-2.png
public/images/projects/pharmacy/pharmacy-cover.png, pharmacy-1.png, pharmacy-2.png
public/images/projects/rvo/rvo-cover.png, rvo-1.png, rvo-2.png
```

To add more gallery images, drop the file in the folder and add its path to
the relevant project's `images.gallery` array in `src/data/projects.js`.
Missing images automatically show a graceful placeholder — the site never
breaks because of a missing screenshot.

## 10. How to update the CV

Add your real CV file at:

```
public/Mostafa_Yehia_Rageb_CV.pdf
```

The "Download CV" buttons in the Hero and Contact sections already point to
this file (resolved automatically through `src/utils/paths.js`, so it works
correctly both locally and on GitHub Pages under `/portfolio/`) — no code
changes needed once the file is added.

## 11. How to update project & social links

- **Power BI links, video links, GitHub links, LinkedIn post links** — all
  live in `src/data/projects.js` inside each project's `links` object. The
  Power BI and video URLs are already filled in exactly as provided.
- **Email, LinkedIn profile, GitHub profile, WhatsApp number** — live in
  `src/data/portfolio.js`. Three of these are placeholders because they
  weren't included in the original brief:
  - `email`: replace `'your.email@example.com'` with your real email.
  - `linkedin`: replace the placeholder URL with your real profile URL.
  - `whatsappNumber`: left blank on purpose (no phone number was supplied).
    Fill it in as digits only with country code, e.g. `'201234567890'` for
    an Egyptian number — no `+`, no spaces, no leading zero. Until it's
    filled in, the Contact section shows a disabled WhatsApp card instead of
    a broken link.
  - `github` is pre-filled as `https://github.com/Moustafa-tech`, derived
    from the MISUO repository owner in the brief — update it if that isn't
    your GitHub username.

## 12. Deploy to GitHub Pages

This project is pre-configured for **GitHub Pages** as a project site at:

```
https://moustafa-tech.github.io/portfolio/
```

using the repository **`Moustafa-tech/portfolio`** and the **`main`** branch.
Deployment is automatic via GitHub Actions — you don't need `gh-pages`, a
separate hosting account, or a custom domain.

### 12.1 What's already set up for you

- `vite.config.js` has `base: '/portfolio/'` so every built asset URL
  (JS, CSS, images, icons, fonts) resolves correctly under `/portfolio/`
  instead of the domain root.
- All public-asset references in the code (profile image, project
  screenshots, the CV) are resolved through `src/utils/paths.js`, which
  reads Vite's `import.meta.env.BASE_URL` — so they automatically work
  both locally (`/`) and on GitHub Pages (`/portfolio/`) with no manual
  path editing.
- `.github/workflows/deploy.yml` builds the project and deploys the `dist/`
  output using GitHub's official Pages actions
  (`configure-pages`, `upload-pages-artifact`, `deploy-pages`) with the
  minimal required permissions (`contents: read`, `pages: write`,
  `id-token: write`) — no personal access tokens needed.
- `public/.nojekyll` stops GitHub Pages from running Jekyll over the build
  output.
- This is a single-page app using section anchors only (no React Router),
  so no SPA-fallback / 404 redirect trick is needed.

### 12.2 One-time local check before you push

Always confirm the production build succeeds locally first:

```bash
npm install
npm run build
```

If `npm run build` completes without errors, you're ready to push — the
same command is what GitHub Actions runs.

### 12.3 Push the project to GitHub

1. Create a new **empty** GitHub repository:
   - Owner: **Moustafa-tech**
   - Repository name: **portfolio** (exact spelling/casing)
   - Do not initialize it with a README, .gitignore, or license — this
     project already has those.
2. From inside the project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/Moustafa-tech/portfolio.git
   git push -u origin main
   ```
   `node_modules/` and `dist/` are already excluded via `.gitignore`, so
   they won't be pushed.

   Alternatively, you can skip Git entirely and upload the project files
   through GitHub's website: open the empty repository → **Add file** →
   **Upload files** → drag in everything except `node_modules/` and
   `dist/` (they don't exist yet if you haven't built locally) → commit
   directly to `main`.

### 12.4 Enable GitHub Pages (one-time)

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**
   (not "Deploy from a branch").
3. That's it — no branch or folder to pick manually.

### 12.5 Let GitHub Actions deploy it

1. Pushing to `main` automatically triggers the workflow in
   `.github/workflows/deploy.yml`.
2. Go to the **Actions** tab in the repository to watch it run: it
   installs dependencies, runs `npm run build`, and deploys the `dist/`
   folder to Pages.
3. Once the **"Deploy to GitHub Pages"** workflow shows a green checkmark,
   your site is live at:
   ```
   https://moustafa-tech.github.io/portfolio/
   ```
4. Every future push to `main` re-triggers the workflow and redeploys
   automatically — no manual steps needed after the first setup.

## 13. Deploy to Vercel (optional alternative)

GitHub Pages is fully sufficient for this project and requires no signup
beyond GitHub itself. Vercel is not required, but if you'd like to use it
instead or in addition:

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`. Click **Deploy**.
   Note: Vercel serves the site from the domain root, so remove or override
   the `base: '/portfolio/'` line in `vite.config.js` for a Vercel deploy
   (GitHub Pages needs it; Vercel/Netlify don't).

## 14. Deploy to Netlify (optional alternative)

Also optional — GitHub Pages does not require this.

1. Push this project to a GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** →
   **Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`. Deploy.
   Same note as above: remove/override the `/portfolio/` base for Netlify.

Alternatively, drag-and-drop the `dist/` folder (after `npm run build`) into
Netlify's manual deploy page.

## 15. GitHub Pages troubleshooting

**Blank white page after deploying**
Check `vite.config.js` — `base` must be exactly `'/portfolio/'` (matching
the exact repository name, case-sensitive). Rebuild and let the workflow
redeploy.

**CSS not loading**
Same root cause as above — an incorrect `base` breaks the built
`<link>`/`<script>` asset URLs. Confirm the `base` value, then check the
Network tab in browser dev tools for 404s on `/portfolio/assets/...`.

**Images not loading**
Make sure image paths go through `src/utils/paths.js` (`withBase(...)`)
rather than a hardcoded leading-slash string like `/images/...` — a
hardcoded path resolves to the domain root, not `/portfolio/`, and 404s.

**CV not opening**
Confirm `public/Mostafa_Yehia_Rageb_CV.pdf` exists with that exact filename
and was committed to the repo (check the repo's file list on GitHub).

**GitHub Actions workflow failed**
Open **Repository → Actions**, click the failed run, and expand the failing
step's logs — most commonly a build error from `npm run build`. Reproduce
it locally with the same command before pushing again.

**GitHub Pages not updating after a push**
Check **Repository → Actions** for the latest workflow run — it must finish
with a green checkmark. If it's still running, wait for it to complete.
Also try a hard-refresh (browsers cache static sites aggressively).

**404 error on the live site**
Usually one of: the repository isn't named exactly `portfolio`, the Vite
`base` doesn't match it, or **Settings → Pages → Source** isn't set to
**GitHub Actions**. Double-check all three.

---

## Notes on content accuracy

Every project, employer, KPI, and responsibility on this site was taken
directly from the brief supplied for this build. Nothing was invented —
where information was missing (email, LinkedIn URL, WhatsApp number,
LinkedIn post links, CV file, screenshots), the site uses a clearly
documented placeholder rather than guessing.
