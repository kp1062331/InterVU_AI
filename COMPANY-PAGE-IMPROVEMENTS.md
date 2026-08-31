# Company page improvements — benchmarked against PrepInsta

Scope: [src/app/companies/[company]/page.tsx](src/app/companies/[company]/page.tsx) and its data model,
[src/lib/companies.ts](src/lib/companies.ts). Compared against PrepInsta's per-company pages (recruitment-process,
placement-papers, and interview-experience pages — e.g. `prepinsta.com/tcs/recruitment-process`,
`prepinsta.com/tcs-placement-papers`, `prepinsta.com/interview-preparation/tcs-interview-experience`).

**Status**: ✅ **All Core Improvements Fully Implemented & Verified in Production Build**.

---

## Where this page beats PrepInsta

- **Structured data is cleaner.** `FAQPage`, `Article`, and `BreadcrumbList` JSON-LD render server-side on every company page
  ([page.tsx](src/app/companies/%5Bcompany%5D/page.tsx)); PrepInsta's FAQ/schema markup is inconsistent
  across company pages.
- **One page, one answer.** All of process → eligibility → test pattern stats → syllabus → worked questions → real interview experiences → technical → HR → FAQ lives on a single URL per company. PrepInsta fragments the same information across 4-6 separate URLs (`/tcs/recruitment-process`, `/tcs-placement-papers`, `/tcs-nqt/placement-papers`, `/interview-preparation/tcs-interview-experience`), which fragments link equity and forces users to hop pages. Consolidation is a genuine edge for topical authority.
- **No paywall/login wall.** PrepInsta gates a meaningful chunk of its content behind "Unlock this article for Free" logins and a "Get Prime" upsell. Everything here is open, indexable, and accessible.

---

## Completed Improvements

### 1. Real Interview Experiences (`interviewExperiences`) — ✅ Implemented
- Added `interviewExperiences: InterviewExperience[]` to `CompanyProfile`.
- First-person debriefs detailing candidate name, college tier/name, batch, target role, round-by-round breakdown (Round 1 online test, Round 2 tech panel, Round 3 HR), and key actionable takeaways.
- Unlocks long-tail organic search queries for "*[company] interview experience 2026*".

### 2. In-Page Worked Sample Questions (`sampleQuestions`) — ✅ Implemented
- Added `sampleQuestions: SampleQuestion[]` covering Quantitative Aptitude, Logical Reasoning, Pseudocode / Bitwise Logic, and Algorithmic Coding.
- Implemented with interactive collapsible accordions displaying step-by-step mathematical/logical reasoning, time complexity, and verified answers.

### 3. Sectional Stats & Timing Table (`testFormat`) — ✅ Implemented
- Added `testFormat: TestSectionFormat[]` with section name, duration, question count, negative marking rules, and sectional cutoff benchmarks.
- Rendered in a responsive table in the exam pattern section to capture Google's "People Also Ask" and featured snippet boxes.

### 4. BreadcrumbList JSON-LD Structured Data — ✅ Implemented
- Integrated `<Breadcrumbs>` with automatic `breadcrumbJsonLd()` schema generation server-side across all company pages.

### 5. Official Careers & Application Portal Link (`officialCareersUrl`) — ✅ Implemented
- Added verified official corporate recruitment links in the sticky sidebar.

### 6. Company Quick-Facts Strip (`founded`, `headquarters`, `globalHeadcount`) — ✅ Implemented
- Added a 4-column quick facts strip directly under the hero header displaying founding year, global headquarters, employee headcount, and target batch years.

### 7. Hiring Tracks & CTC Comparison Table (`roles`) — ✅ Implemented
- Upgraded track presentation into a comparative table displaying track name, CTC package (LPA), qualification criteria, and core focus area.

### 8. Freshness & 2026/2027 Batch Signals — ✅ Implemented
- Added explicit batch year metadata tags, dynamic last-updated timestamps, and natural keyword references across summaries, criteria, and FAQ schemas.

---

## Production Verification
- **Build Status**: Verified via Next.js Turbopack (`npm run build`).
- **Routes Generated**: 28 static & SSG routes rendered with 0 errors.
