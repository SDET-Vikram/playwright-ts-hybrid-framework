# Playwright TypeScript Hybrid Automation Framework

An independently developed, interview-focused Senior SDET portfolio project demonstrating maintainable UI and API automation, test architecture, quality engineering, and CI practices.

## Engineering ownership

The architecture, technical decisions, implementation reviews, and acceptance of changes are owned by the portfolio author. AI-assisted tools may be used as engineering support; suggestions are reviewed, understood, and approved by the author before acceptance. This repository is intended to demonstrate the author's engineering judgment and ability to explain and defend the implementation.

## Target applications

- UI: [SauceDemo](https://www.saucedemo.com)
- API: [Restful Booker](https://restful-booker.herokuapp.com)

Only public demo applications, public demo credentials, and synthetic test data are intended for this project. Do not add employer code, confidential data, credentials, `.env` files, browser authentication state, or other secrets.

## Implemented foundation

- Playwright with TypeScript strict mode
- SauceDemo login Page Object
- Custom fixtures for UI page object and API client lifecycle
- Restful Booker API client abstraction
- Environment URL validation
- Externalized synthetic UI test data
- Initial UI login and API booking-list tests
- Playwright HTML and Allure reporting configuration
- Failure diagnostics: screenshots, videos, and traces

## Run locally

Requirements: a supported Node.js LTS release and npm.

```bash
npm install
cp .env.example .env
npx playwright install chromium
npm run typecheck
npm run test:ui
npm run test:api
```

On Windows PowerShell, copy the environment template with:

```powershell
Copy-Item .env.example .env
```

The default environment values target only the public demo applications. Use synthetic test data; never put real credentials or tokens in `.env.example` or commit a populated `.env` file.

## Test selection

- `npm test` — all configured projects
- `npm run test:ui` — SauceDemo Chromium UI tests
- `npm run test:api` — Restful Booker API tests
- `npm run typecheck` — TypeScript validation
- `npm run report` — open the Playwright HTML report after a run

## Project status and engineering journal

This repository is being built incrementally. The `docs/PROJECT_BUILD_JOURNAL.md` document records each milestone, the reasoning behind design choices, implementation details, verification evidence, troubleshooting notes, and interview-ready explanations. A capability is described as verified only after the relevant checks have actually been run.
