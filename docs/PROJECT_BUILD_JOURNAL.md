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

**Initial file created:** `README.md`.

**Commit:** `ad695e6df3815032ea1e7f35a83b7a00e85b0ef2`.

**Purpose:** Establish the project's public positioning, engineering ownership statement, target demo systems, planned capabilities, and security boundaries.

**Verification:** GitHub API confirmed the file creation operation and returned the commit SHA. No local TypeScript build or automated test has been run at this stage.

**Pending work:** Add the package/toolchain configuration, strict TypeScript settings, Playwright configuration, environment example, ignore rules, initial source/test structure, and setup instructions. Then perform local installation, type checks, and an initial test run before describing those capabilities as verified.

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
