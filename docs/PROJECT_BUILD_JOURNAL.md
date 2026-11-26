# Project Build Journal

This is the living engineering and learning record for `playwright-ts-hybrid-framework`. It is updated alongside each approved implementation milestone so the project owner can understand the framework from first principles and explain its design in technical interviews.

## Ownership and working agreement

- The portfolio author owns the architecture, technical decisions, review, and approval of accepted changes.
- AI-assisted tooling may support research, drafting, implementation, and review. It does not independently own the architecture or acceptance of the work.
- Every change must be understood and reviewed by the portfolio author before it is considered accepted.
- Do not claim a check or test passed unless it was actually executed and its result recorded.
- Use only public demo systems and synthetic test data. Never include employer code, confidential information, credentials, or personal data.

## Project objective

Build an interview-ready Senior SDET portfolio framework that demonstrates UI and API automation, maintainable architecture, test isolation, diagnostics, reporting, and CI engineering using Playwright and TypeScript.

## Approved architecture baseline

The project owner approved the following starting design:

- TypeScript with strict compiler settings
- Playwright Test as the automation runner
- Page Object Model for UI workflows
- Custom Playwright fixtures for lifecycle management and dependency injection
- A separate API client/service layer
- Externalized JSON and TypeScript test data
- Environment-based configuration
- Playwright HTML and Allure reporting
- Screenshots, videos, and traces for failure diagnosis
- GitHub Actions for CI
- UI demo target: https://www.saucedemo.com
- API demo target: https://restful-booker.herokuapp.com

This is an approved baseline, not a claim that all components have been implemented or verified.

## Milestone 1 — Architecture approval

**Status:** Approved by project owner.

**Decisions:** Adopt a layered hybrid UI/API automation framework. Keep UI and API concerns separate while sharing configuration, test data, fixtures, utilities, and reporting infrastructure where appropriate.

**Rationale:** This provides a clear interview narrative around separation of concerns, reusability, test isolation, maintainability, and end-to-end quality ownership without introducing unnecessary abstraction.

**Interview explanation:** The framework separates test intent from interaction mechanics. UI tests use page objects; API tests use dedicated clients/services; fixtures manage test-scoped dependencies and lifecycle. Shared infrastructure handles configuration, data, diagnostics, and reporting.

## Milestone 2 — Repository initialization

**Status:** In progress.

**Repository:** https://github.com/SDET-Vikram/playwright-ts-hybrid-framework

**Branch:** `main`

**Files created:**

- `README.md` — project positioning, engineering ownership, demo targets, planned capabilities, and security boundaries.
- `package.json` — initial npm scripts and development-tool dependency declarations.
- `tsconfig.json` — strict TypeScript compiler baseline.
- `playwright.config.ts` — separate `chromium-ui` and `api` projects, CI-aware retries/workers, HTML and Allure reporters, and failure diagnostics.
- `.gitignore` — excludes dependencies, generated reports, local environment files, and authentication state.
- `.env.example` — safe public demo URL configuration template.

**Key implementation decisions:** Keep API tests in a distinct Playwright project so they are not unintentionally repeated across browser projects. Use `.ui.spec.ts` and `.api.spec.ts` naming conventions to make test selection explicit. Enable trace, screenshot, and video capture on failure for debugging evidence. Keep secrets out of Git and commit only the example environment template.

**GitHub commits returned by the file operations:**

- README: `ad695e6df3815032ea1e7f35a83b7a00e85b0ef2`
- Build journal: `f2bdc99387c971a43bea19d60fc5b6f522118b30`
- package.json: `69445284426984dabb2458ea2e09b477cd4229da`
- tsconfig.json: `8a7c7e66d33db3c4e6d405d31a8ad0399878a52b`
- Playwright config: `dddf4579f2028ad268ab7aa42d3765b1dfb58619`
- .gitignore: `63aa40a8e78175aab070008903627b158d9f6cc2`
- .env.example: `26c27242776ed5f51ab7ec6d3c60515ff5ff30f2`

**Verification:** GitHub confirmed each file creation and returned commit SHAs. No local dependency installation, TypeScript check, lint, or automated test has been run. These files are an initial scaffold, not yet a locally verified build.

**Pending work:** Verify the dependency versions and lockfile through a local install; add initial source/test structure and configuration loading; then run type checks and a first smoke test before describing the setup as verified.

## Learning notes and interview preparation

For each subsequent milestone, add:

1. What was built and why.
2. Key files and responsibilities.
3. Important implementation choices and trade-offs.
4. How the implementation works, step by step.
5. How it was verified, including actual commands and results.
6. Common failure modes and debugging approach.
7. Likely Senior SDET interview questions with concise, defensible answers.
8. What the project owner should be able to explain or implement independently.

## Change log

| Date | Milestone | Change | Verification |
|---|---|---|---|
| 2026-11-26 | Architecture | Approved hybrid UI/API architecture | Owner approval |
| 2026-11-26 | Repository initialization | Added initial README | GitHub file creation confirmed; no tests run |
