# Nasir Uddin Khan — Unified Research + Engineering Portfolio

Single-page portfolio for **prospective PhD supervisors** and **software engineering recruiters**.

Sections: **Home → Research → Engineering → About → Skills → Contact**.

This is based on the existing V7 React/TypeScript/Tailwind website with the same professional portrait and homepage layout.

## What's included
- Three research entries, including both unpublished manuscripts with factual, public-safe high-level summaries and statuses.
- Research Vision and explicit non-disclosure notice; **no manuscript PDFs, unpublished results, or architecture diagrams included**.
- Five featured engineering case studies and authentic screenshot galleries:
  - TruthGuard AI (4 screenshots)
  - BizFlow 360 (3 screenshots)
  - CollabSpace (5 screenshots extracted from user's supplied project ZIP)
  - StockPilot (3 screenshots)
  - NovaUI (4 screenshots)
- Filterable project archive; **ElectroHub included only as an archive link and NOT a featured screenshot project** until genuine screenshots are available.
- Existing resume (`public/cv.pdf`) and portrait.

## Important content review before publishing
1. Review `src/data/content.ts` for authorship, manuscript statuses, technical wording, email address and project ownership details. A public repo does not establish who implemented every feature.
2. Some screenshots may contain example names, file names, case information, or sample business figures. Mask anything you don't want public.
3. Research software archive links may point to already public repos: assess the sharing status of any unpublished research code.
4. Ensure all descriptions of prototype systems, demo figures and AI fallbacks remain accurate.

## GitHub Pages deployment
1. Back up current GitHub repo first.
2. Extract ZIP.
3. Upload the **contents** of this folder, not the outer folder, to the root of `nasir050298/nasir050298.github.io`.
4. Preserve `src/`, `public/`, `package.json`, `vite.config.ts`, and `.github/workflows/deploy.yml` folder structure. Browsers may not upload `.github` by default; preserve the existing working workflow in that case.
5. Under repository **Settings → Pages**, select **GitHub Actions** as the source.
6. Commit and check **Actions** for build/deploy results.
7. Visit https://nasir050298.github.io

Local: `npm install`, `npm run dev`; production build `npm run build`.

The V7 project did not include a package lock; workflow uses `npm install` without npm cache.
