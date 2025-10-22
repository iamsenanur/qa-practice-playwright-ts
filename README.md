# QA Practice Project | Playwright + TypeScript + API Tests  

This project is a sample **QA Portfolio** for Junior / Entry-Level Test Automation Engineer roles.  
It demonstrates both **manual** and **automated** testing fundamentals using modern tools.

---

## 🔍 Includes
- **UI Tests (Playwright + TypeScript):**  
  Login and product listing flows on [SauceDemo](https://www.saucedemo.com)
- **API Tests (ReqRes):**  
  Public test API [ReqRes](https://reqres.in) with GET, POST, and negative scenarios.
- **Manual Test Cases:**  
  Included in `test-cases.md`
- **CI/CD:**  
  Automated test runs on every push via GitHub Actions.
- **HTML Report:**  
  Playwright's built-in HTML report for visual test results.

---

## 🚀 Setup & Run
```bash
npm install
npx playwright install --with-deps
npm test
npx playwright show-report
