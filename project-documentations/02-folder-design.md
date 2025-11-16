# 02 — Folder Design

```
playwright-framework/
├── node_modules
├── playwright-report
├─ project-documentations/      # Architecture notes & design docs
├─ src/
│  ├─ data/                     # Test Data
│  ├─ fixtures/                 # Reusable Playwright fixtures
│  ├─ pom/                      # POM classes
│  └─ utils/                    # Helpers: env, logger, data generator
├─ test-results/
├─ tests/                       # Spec files (organized by domains/features)
├─ .env                         # Template for env variables.
├─ .gitignore                   # Excludes .env etc.
├─ package-lock.json
├─ package.json
├─ playwright.config.ts         # Global Playwright configuration
├─ tsconfig.json                # TS compiler config
└─ README.md
```
