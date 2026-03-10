# AI Automation Log

## Tools

- **AI tool**: Gemini Chat
- **Codegen**: Playwright `npx playwright codegen` for recording actions and generating starter code
- **Manual knowledge**: personal experience with automation testing

---

## 📝 Process (steps)

1. **Project setup review**
   - Inspected the existing repo and `automation/` folder structure
   - Checked `package.json` and available dependencies (Playwright)

2. **Generating starter code (codegen)**
   - Ran `npx playwright codegen <url>` to record actions (navigation, clicks, filling fields)
   - Captured user flows and generated Playwright steps from them

3. **Editing and cleanup**
   - Replaced outdated or incorrect API calls (e.g., `mouseHover()` → `hover()`)
   - Applied better file naming and conventions (`*.spec.ts`)

4. **Verification and running tests**
   - Ran tests using `npx playwright test` and `npx playwright test --ui`
   - Reviewed test results and trace artifacts in `test-results/`

---

## 🧩 What AI generated vs. what was corrected

### AI (Gemini Chat + codegen) generated:
- Base Playwright actions (navigation, clicks, filling inputs)
- Test structure and initial locators

### Manual / corrected:
- Fixed incorrect API calls (e.g., `mouseHover()` → `hover()`)
- Corrected import paths (relative paths within `tests/`)
- Added documentation (`automation/README.md`) and the log file
- Removed hard-coded credentials / loaded from `auth.ts` dataset

---


