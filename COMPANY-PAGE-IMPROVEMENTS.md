# Company page improvements — benchmarked against PrepInsta

Scope: [src/app/companies/[company]/page.tsx](src/app/companies/[company]/page.tsx) and its data model,
[src/lib/companies.ts](src/lib/companies.ts). Compared against PrepInsta's per-company pages (recruitment-process,
placement-papers, and interview-experience pages — e.g. `prepinsta.com/tcs/recruitment-process`,
`prepinsta.com/tcs-placement-papers`, `prepinsta.com/interview-preparation/tcs-interview-experience`).

This is an analysis + recommendation doc, not a change log — nothing in the codebase was modified while writing it.

## Where this page already beats PrepInsta

Worth stating so nothing below reads as "copy PrepInsta wholesale":

- **Structured data is cleaner.** `FAQPage` + `Article` JSON-LD render server-side on every company page
  ([page.tsx:55-65](src/app/companies/%5Bcompany%5D/page.tsx#L55-L65)); PrepInsta's FAQ/schema markup is inconsistent
  across company pages. Keep leaning into this — it's a real ranking and rich-result advantage.
- **One page, one answer.** All of process → eligibility → syllabus → aptitude/coding → technical → HR → FAQ lives on
  a single URL per company. PrepInsta fragments the same information across 4-6 separate URLs
  (`/tcs/recruitment-process`, `/tcs-placement-papers`, `/tcs-nqt/placement-papers`,
  `/interview-preparation/tcs-interview-experience`, …), which fragments link equity and forces users to hop pages.
  Consolidation is a genuine edge for topical authority — don't undo it by over-splitting later.
- **No paywall/login wall.** PrepInsta gates a meaningful chunk of its content behind "Unlock this article for Free"
  logins and a "Get Prime" upsell. Everything here is open, which is better for both users and crawlability.

## Gaps worth closing, ranked by impact

### 1. No real interview experiences (highest impact, matches PrepInsta's core strength)
PrepInsta's `*-interview-experience` pages are built entirely from first-person narratives: candidate name, college,
target role, then a round-by-round Q&A retelling. That's the single biggest content type this page is missing, and
it's also the strongest E-E-A-T ("Experience") signal Google rewards for this query space — synthetic Q&A (what
`hrInterview` and `technicalInterview` currently provide) reads as generic advice, not a lived account.

- Add a new content type — `interviewExperiences: { candidateName, college?, role, year, rounds: { title, detail }[] }[]`
  — to `CompanyProfile`, sourced from real (consented, anonymizable-if-needed) submissions or credible public accounts.
- Render as its own section between "Technical interview" and "FAQ", 2-3 experiences per company to start.
- This also unlocks long-tail queries this page can't currently rank for: "`<company>` interview experience 2026",
  "`<company>` interview questions asked".
- Fabricating names/colleges to fake this is out of scope — do not synthesize fake candidates to fill the section.

### 2. No downloadable/structured "previous papers" artifact
PrepInsta's highest-traffic page type per company is literally "Placement Papers" — a distinct URL/intent from
"recruitment process." Right now `syllabus`, `aptitudeTopics`, and `codingTopics` describe *what* to study but never
show *actual worked questions*.

- Consider a `sampleQuestions: { topic, question, options?, answer, explanation }[]` field, rendered as an in-page
  practice block (accordion, one per topic) rather than a PDF download — keeps content indexable and avoids a
  gated-download UX PrepInsta uses as a lead-gen wall.
- Even 4-6 worked questions per company (one per syllabus section) would materially improve dwell time and give
  Google concrete, quotable Q&A content beyond the FAQ.

### 3. Sectional stats table missing (duration, question count, marks, negative marking)
PrepInsta shows this as a compact table right under the process overview (e.g. TCS: Foundation section duration,
question count per sub-section, total 191 minutes). This page's `process` and `syllabus` are prose/topic-list only —
no one glance-able table of "how many questions, how long, what's the cutoff."

- Add an optional `testFormat: { section, duration, questionCount, negativeMarking? }[]` to `CompanyProfile` and
  render it as a table in the "Syllabus" section (reuse the existing table markup at
  [page.tsx:172-193](src/app/companies/%5Bcompany%5D/page.tsx#L172-L193)).
- This is exactly the kind of fact-dense block that gets pulled into Google's "People also ask" / featured snippets.

### 4. No BreadcrumbList structured data (quick win — the helper already exists and is unused)
`breadcrumbJsonLd()` is fully implemented in [src/lib/seo.ts:123-134](src/lib/seo.ts#L123-L134) and used nowhere.
The visual `<Breadcrumbs>` component renders on this page ([page.tsx:78-84](src/app/companies/%5Bcompany%5D/page.tsx#L78-L84))
but without the matching JSON-LD, so Google can't turn it into breadcrumb rich results in search. This is a one-line
addition (`<JsonLd data={breadcrumbJsonLd([...])} />` next to the existing two `<JsonLd>` calls) — no new data needed,
lowest-effort item on this list.

### 5. No official "apply" link, only the internal mock-test CTA
The sidebar's only CTA is "Practice a `<company>`-style mock test" ([page.tsx:401-409](src/app/companies/%5Bcompany%5D/page.tsx#L401-L409)).
A meaningful share of PrepInsta's traffic is students who arrived specifically to find *where to apply* — PrepInsta
links out to the company's official careers/registration portal from the top of the recruitment-process page.
- Add an optional `officialCareersUrl` (and maybe `currentDrivesUrl` when a company has an active off-campus/NQT-style
  portal) to `CompanyProfile`, surfaced as a secondary sidebar link or inline badge near the hero. Only add it where
  you're confident the link target is current — a stale/broken official link is worse than no link.

### 6. Company facts strip is missing (trust/E-E-A-T signal, cheap to add)
PrepInsta shows Founded year / Founder / HQ near the top of every company page. This page's data model has no place
for it — `badge`, `focus`, and `tagline` cover positioning but not verifiable company facts.
- Add optional `founded`, `headquarters` fields to `CompanyProfile`; render as a small facts row in `PageHeader` or
  right below it. Small effort, reinforces the page as a genuine reference rather than just advice.

### 7. Track comparisons are prose, not a scannable table
Multi-track companies (TCS Ninja vs Digital, Infosys SE/DSE/SP, Cognizant GenC/Next/Pro) currently render `roles` as
individual cards ([page.tsx:96-104](src/app/companies/%5Bcompany%5D/page.tsx#L96-L104)) — good for a quick read, but
a side-by-side comparison (package, test format, rounds required) is what PrepInsta effectively achieves once you
piece its separate pages together, and it's a table users specifically look to screenshot/save.
- When a company has 2+ roles, consider rendering `roles` as a comparison table (columns: track, package, how you
  qualify) in addition to — or instead of — the card grid, reusing data already in `RoleTrack` plus `process`.

### 8. Freshness/batch-year signals are thinner than PrepInsta's
PrepInsta repeats "2026 batch" / "2027 batch" throughout body copy and often maintains near-duplicate pages per
batch year. This page already does the right minimal version — year in the `<title>`
([page.tsx:29](src/app/companies/%5Bcompany%5D/page.tsx#L29)) and a real `lastUpdated` date — which is the more
maintainable approach. Don't fork pages per batch year; if anything, just make sure body copy occasionally says
"for the 2026 and 2027 batches" where it reads naturally, so both cohorts' searches match.

## Deliberately not recommending

- **Login/paywall + "Prime" upsell gating** — actively worse for users and for crawlability; PrepInsta does this for
  monetization, not content quality. Do not copy it.
- **Splitting one company across many URLs** (recruitment-process / placement-papers / interview-experience as
  separate pages) — this page's single-URL consolidation is already the stronger SEO structure; adding the content
  types above as *sections* on the existing page beats fragmenting into new routes.
- **Open comments/discussion threads** — real UGC engagement signal, but a real moderation burden (spam, unverifiable
  claims) for a two-person-scale project. Worth revisiting only once there's traffic to justify moderating it.

## Suggested priority order

1. BreadcrumbList JSON-LD (§4) — trivial, no new content needed.
2. Sectional stats table (§3) — structured version of data you already have in prose form.
3. Sample/worked questions (§2) — biggest content gap relative to effort.
4. Interview experiences (§1) — highest impact, but needs real source material (not something to fabricate).
5. Company facts strip (§6) and official careers link (§5) — small, independent additions.
6. Track comparison table (§7) — polish once the above data exists.
