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


## Milestone 3 — First UI/API automation foundation

**Status:** Implemented on a feature branch; local execution and verification are pending.

**Branch:** \`feature/milestone-3-ui-api-foundation\`

**Objective:** Establish one working vertical slice for each test type: a SauceDemo UI login flow and a Restful Booker API read flow. Keep the test layer readable and put interaction/request mechanics behind reusable abstractions.

### Files added

- \`src/config/environment.ts\` — loads \`.env\`, validates both configured URLs, allows only HTTP/HTTPS, and removes a trailing slash for consistent base URL handling.
- \`src/ui/pages/login.page.ts\` — encapsulates SauceDemo login locators and actions in a Page Object.
- \`src/api/restful-booker.client.ts\` — wraps the booking-list GET request behind a small API client.
- \`src/fixtures/test.fixture.ts\` — creates the page object from Playwright's page fixture and creates/disposes an isolated API request context per test.
- \`tests/test-data/users.json\` — keeps public demo login scenarios outside test implementation.
- \`tests/ui/login.ui.spec.ts\` — covers a successful standard-user login and an invalid-credentials message.
- \`tests/api/bookings.api.spec.ts\` — checks the booking-list endpoint returns HTTP 200 and a JSON array.

### Files modified

- \`playwright.config.ts\` — consumes validated UI configuration while retaining separate UI and API projects.
- \`README.md\` — adds setup, test-selection, and execution commands.

### Design reasoning

1. **Page Object Model:** The UI test states the business intent (log in and verify the result); the page object owns selectors and the interaction sequence. This reduces locator duplication and keeps tests readable.
2. **API client:** Tests should not repeat raw endpoint paths and request setup. The client is deliberately small at this stage; it can grow as additional endpoints are tested.
3. **Fixture lifecycle:** The API context is created for the test and disposed in a \`finally\` block after use. This prevents request-context resources from leaking between tests. The UI page remains managed by Playwright's built-in fixture lifecycle.
4. **Separate projects:** UI and API test files are selected by explicit suffix patterns. The API tests therefore do not run once per browser configuration.
5. **Environment validation:** Invalid URLs or unsupported protocols fail early during configuration rather than causing confusing request/navigation errors later.

### How the flow works

**UI:** Playwright creates a browser page → the custom fixture injects \`LoginPage\` → the test navigates to SauceDemo → the page object fills the username/password and clicks login → Playwright web-first assertions wait for the inventory page or error message.

**API:** Playwright starts the API test → the fixture creates an \`APIRequestContext\` with the Restful Booker base URL → the client sends \`GET /booking\` → the test validates status and response shape → the fixture disposes the context.

### Trade-offs and current limits

- The first API check validates status and top-level response shape only. It does not yet cover booking creation, update, deletion, authentication, schema validation, or cleanup.
- The initial UI suite covers two login paths only. It is a foundation, not broad application coverage.
- Credentials in the JSON file are public SauceDemo demo credentials, not personal or employer credentials.
- The tests target public demo services; availability and behavior may change outside this repository's control.
- The API fixture currently creates a fresh request context per test for isolation. A shared worker-scoped context could reduce setup cost later, but would introduce shared-state considerations and is not justified yet.

### Commands for local verification

Run from the repository root after installing dependencies:

\`\`\`bash
npm install
npx playwright install chromium
npm run typecheck
npm run test:ui
npm run test:api
\`\`\`

**Actual verification result:** GitHub confirmed the branch and file writes. No local Node.js environment was available in this workflow, so dependency installation, TypeScript compilation, browser installation, UI execution, and API execution have **not** been run. No test pass is claimed.

### Troubleshooting guide

- If Playwright reports no tests found, inspect each project's \`testMatch\` suffix and the test file names.
- If navigation fails, check \`UI_BASE_URL\` in the local \`.env\` and confirm the public demo site is reachable.
- If the API test cannot connect, check \`API_BASE_URL\` and the public Restful Booker service status.
- If a locator times out, inspect the current demo page and its accessible/test-id attributes; do not add a hard wait as a workaround.
- If TypeScript cannot resolve JSON imports, confirm \`resolveJsonModule\` and \`esModuleInterop\` remain enabled in \`tsconfig.json\`.

### Interview preparation

**Q: Why use a Page Object instead of putting locators directly in tests?**  
A: The Page Object centralizes page-specific selectors and actions. Tests focus on behavior, while UI changes are usually handled in one place.

**Q: Why create a separate API client?**  
A: It separates HTTP mechanics and endpoint paths from test assertions. The abstraction can be reused as API coverage grows without coupling tests to request details.

**Q: Why use a fixture for the API context?**  
A: The fixture controls setup and teardown consistently. Each test gets a context and the fixture disposes it even if the test fails.

**Q: Why split UI and API into separate Playwright projects?**  
A: Their runtime requirements differ. A dedicated API project avoids coupling API checks to browser projects and makes targeted execution straightforward.

**Owner knowledge checkpoint:** Be able to explain the difference between \`Page\`, \`APIRequestContext\`, and a custom fixture; trace one UI test from fixture injection to assertion; explain why \`finally\` is used for disposal; and run the UI and API scripts independently.

## Change log

| Date | Milestone | Change | Verification |
|---|---|---|---|
| 2026-11-26 | Milestone 3 | Added UI/API foundation and learning notes on feature branch | GitHub writes confirmed; local checks not run |
