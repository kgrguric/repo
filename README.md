# Playwright Test Setup

##  Prerequisites

- Node.js 16+ installed (recommend LTS)
- Git (optional, for cloning)

---

## 0) Clone repository
```bash
git clone 
```
---

## 1) Install dependencies

From the `automation/` folder:

```bash
npm install
```

---

## 2) Run the Playwright tests

### Run all tests

```bash
npx playwright test
```

### Open Playwright UI

```bash
npx playwright test --ui
```

---

## 3) Structure

- Tests live in `automation/tests/`.
- Page objects are in `automation/tests/pages/`.
- Test data is in `automation/tests/data/`.
```text
automation/
├── package.json
├── package-lock.json
├── README.md
├── tests/
│   ├── AlbumCreation.spec.ts
│   ├── CorrectSearch.spec.ts
│   ├── IncorrectSearch.spec.ts
│   ├── InvalidLogin.spec.ts
│   ├── ValidLogin.spec.ts
│   ├── data/
│   │   ├── auth.ts
│   │   └── upload.jpeg
│   └── pages/
│       ├── album.ts
│       ├── login.ts
│       └── search.ts

