# Nasir Uddin Khan — Portfolio V6

A unified **single-page** portfolio built with React, TypeScript, Vite, and Tailwind CSS. Sections: **Home → Research → Engineering → About → Skills → Contact**.

## Deploy to GitHub Pages

1. Back up your repository from **Code → Download ZIP**.
2. Upload the contents of this folder to the root of `nasir050298.github.io` (not the ZIP or enclosing directory).
3. Preserve `.github/workflows/deploy.yml` in the repo. If Windows hides the folder, the existing GitHub workflow can remain untouched.
4. Commit to `main` and leave **Settings → Pages → Source** set to **GitHub Actions**.
5. Confirm the *Deploy portfolio to GitHub Pages* workflow succeeds. Then visit `https://nasir050298.github.io`.

The old top-level `engineering/` and `research/` HTML folders are no longer needed. You can delete those old files from GitHub after confirming V6 is live. React now renders every section on `/` and navigation uses anchors.

## Images

- Portrait: `public/images/nasir-portrait.jpg`
- Research placeholders: `public/images/research-01.webp`, `research-02.webp`, `research-03.webp`
- Project placeholders: `public/images/project-01.webp` through `project-04.webp`

Do not use fabricated research or project screenshots. The site displays intentional placeholders until authentic images are supplied.

## Local development

```bash
npm install
npm run dev
npm run build
```

Site is static and requires no paid backend. `public/cv.pdf` is publicly downloadable; review it for personal details before publishing.
