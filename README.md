# Nasir Uddin Khan — Portfolio V5

Original, responsive research + engineering portfolio, developed using React, TypeScript, Vite and Tailwind CSS 4.

## Pages
- `/` — identity, portrait, two paths, research, engineering, about, contact
- `/research/` — selected research and manuscripts
- `/engineering/` — selected software projects

## Deployment to nasir050298.github.io
1. Back up the current repository with Code > Download ZIP.
2. Replace matching files by uploading this folder's **contents** to the repository root. Keep `.github/workflows/deploy.yml`. Uploading through GitHub's web UI does not remove obsolete files.
3. Ensure `public/images/nasir-portrait.jpg` is included.
4. Commit to `main`.
5. In Settings > Pages, select GitHub Actions. The existing deployment workflow runs `npm install` then `npm run build`, publishing `dist`.
6. Inspect the latest Actions run, and refresh https://nasir050298.github.io/.

If you still have a `cache: npm` directive in your old workflow and no lockfile, replace it with this V5 workflow, which omits npm caching.

## Pending authentic visuals
Replace placeholders only with images you own or are permitted to use:
- public/images/research-01.webp (LightFace-SAM)
- public/images/research-02.webp (melanoma fairness)
- public/images/research-03.webp (underwater fouling)
- public/images/project-01.webp (TruthGuard)
- public/images/project-02.webp (BizFlow 360)
- public/images/project-03.webp (StockPilot)
- public/images/project-04.webp (NovaUI)

The research cards intentionally distinguish under-review, submitted, and co-authored work. Add verified scholarly links, authorship, and experimental data when available. Source project links are stored in `src/data/content.ts`.

## Local development
- Node.js 22 recommended
- `npm install`
- `npm run dev`
- `npm run build`

Note: the V5 package has not been validated with a successful local production build in the creation environment due to dependency-installation timeout. GitHub Actions will provide build feedback after the commit.
