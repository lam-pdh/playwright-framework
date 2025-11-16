# Playwright Framework

Practice automation framework for: **https://pw-practice-dev.playwrightvn.com**

## Quick Start
```bash
# 1) Install deps
npm i

# 2) Create your env file
cp .env.example .env
# then edit .env (BASE_URL can remain default)

# 3) Run tests
npx playwright install --with-deps
npm test

# Optional
npm run test:ui
npm run test:report
```

## Docs
- [01 — Website Features & Notes](project-documentations/01-website-feature.md)
- [02 — Folder Design](project-documentations/02-folder-design.md)
- [03 — POM Design](project-documentations/03-pom-design.md)
- [04 — Utils Design](project-documentations/04-utils-design.md)
- [05 — Fixture Design](project-documentations/05-fixture-design.md)
- [06 — Coding Conventions](project-documentations/06-coding-convention-design.md)

## GitHub — Create & Push
```bash
# create new repo in GitHub UI named: playwright-framework
git init
git branch -M main
git add .
git commit -m "init project"
git remote add origin git@github.com:<your-username>/playwright-framework.git
git push -u origin main
```

## Notes
- `.env` is **ignored** by git; do not commit secrets.
- Auth test is **skipped** unless `APP_USERNAME` and `APP_PASSWORD` are set.
- Tweak `playwright.config.ts` projects/timeouts as needed.
