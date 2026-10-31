# Nasir Uddin Khan — Portfolio V7

A unified six-section portfolio: **Home · Research · Engineering · About · Skills · Contact**.

Built with React, TypeScript, Vite and Tailwind CSS. The homepage portrait remains included.

## New in V7

Real screenshots supplied by the portfolio owner are included in `public/images/projects/` for:
- TruthGuard AI (dashboard, image result, model lab, reviewer queue)
- BizFlow 360 (reports, CRM, landing page)
- StockPilot (dashboard, products, stock management)
- NovaUI (button docs, forms, charts, homepage)

Each project gallery has thumbnail selectors and an enlarged image viewer. The Research section still has explicit placeholders for authentic research figures.

**Content caveats:** TruthGuard image-service integration is distinguished from fallback voice/video modes. Figures on application dashboards may be sample/demo values; do not treat them as independently validated results. Review case filenames, contact details, and other screenshot content before publication.

## Deploy to GitHub Pages

1. Back up your current repository (`Code → Download ZIP`).
2. Upload the *contents* of this folder into `nasir050298.github.io` on `main`, preserving folder structure.
3. Keep `.github/workflows/deploy.yml` from your current working site if the browser does not include hidden folders.
4. Keep Settings → Pages → Source set to **GitHub Actions**.
5. Check Actions → **Deploy portfolio to GitHub Pages** for a green checkmark.
6. Open https://nasir050298.github.io and hard-refresh.

The old top-level `engineering/` and `research/` redirect folders are not required for the single-page site and may be removed once deployment is confirmed.

For local development: `npm install`, `npm run dev`; verify with `npm run build`.
