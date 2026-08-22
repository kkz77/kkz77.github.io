# Kaung Khant Zaw — Portfolio

Personal portfolio website built with **React + Vite + Tailwind CSS**, deployed to **GitHub Pages**.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Edit your content

Almost everything lives in one file: **`src/data/profile.js`**
Update your name, tagline, projects, skills, and links there — no need to touch the components.

To swap the résumé download: put your PDF in `public/resume.pdf`.

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Deploy to GitHub Pages (automatic)

1. Create a repo named **`kkz77.github.io`** (this makes the site live at `https://kkz77.github.io`).
2. Push this project to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
4. Every push to `main` now builds and deploys automatically (see `.github/workflows/deploy.yml`).

> If you instead name the repo something else (e.g. `portfolio`), set `base: '/portfolio/'`
> in `vite.config.js` so asset paths resolve correctly.
