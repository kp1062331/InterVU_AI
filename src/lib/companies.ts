/**
 * Company-wise placement preparation content. One entry here powers one
 * comprehensive `/companies/[slug]` page (process, eligibility, syllabus,
 * aptitude, coding, interviews, FAQ) — see `src/app/companies/[company]/page.tsx`.
 *
 * Content is written in the same register as `src/lib/blogs.ts`: general,
 * widely-known hiring patterns rather than proprietary or unverifiable
 * statistics. Figures that overlap with an existing blog post reuse that
 * post's numbers so the two stay consistent. `lastUpdated` is a real date —
 * update it whenever a company's section is materially revised.
 */

export interface ProcessStep {
  title: string;
  description: string;
}

export interface SyllabusSection {
  section: string;
  topics: string[];
}

export interface QuestionAnswer {
  question: string;
  answer: string;
}

export interface RoleTrack {
  title: string;
  note: string;
}

export interface TechnicalTopic {
  topic: string;
  detail: string;
}

export interface CompanyProfile {
  slug: string;
  /** Full legal/common name, e.g. "Tata Consultancy Services (TCS)". */
  name: string;
  /** Short form used in headings and UI, e.g. "TCS". */
  shortName: string;
  badge: string;
  focus: string;
  logoInitial: string;
  tagline: string;
  /** Answer-first summary: what is the placement process, in 2-4 sentences. */
  summary: string;
  roles: RoleTrack[];
  process: ProcessStep[];
  eligibility: string[];
  documentsRequired: string[];
  syllabus: SyllabusSection[];
  aptitudeTopics: string[];
  codingTopics: string[];
  technicalInterview: TechnicalTopic[];
  hrInterview: QuestionAnswer[];
  /** Answer-first FAQ — also rendered as FAQPage JSON-LD. */
  commonQuestions: QuestionAnswer[];
  preparationTips: string[];
  commonMistakes: string[];
  /** Slugs into BLOG_POSTS for related-content internal links. */
  relatedBlogSlugs: string[];
  /** ISO date. Real — set when this profile was last materially edited. */
  lastUpdated: string;
}

export const COMPANIES: CompanyProfile[] = [
  {
    slug: "tcs",
    name: "Tata Consultancy Services (TCS)",
    shortName: "TCS",
    badge: "National Benchmark",
    focus: "Placement assessment",
    logoInitial: "T",
    tagline:
      "India's largest campus recruiter, hiring through the TCS iON National Qualifier Test (NQT).",
    summary:
      "TCS hires freshers primarily through the TCS iON NQT — a single online test with a Foundation section (numerical, verbal, reasoning) and an Advanced section (advanced quant/reasoning plus two coding problems) that together decide whether you're placed on the Ninja or Digital/Prime track, followed by a combined technical and HR interview.",
    roles: [
      { title: "TCS Ninja", note: "Entry-level track, roughly 3.6–4 LPA, cleared via the NQT Foundation section." },
      { title: "TCS Digital / Prime", note: "Higher package track, roughly 7–9 LPA, requires clearing the Advanced section including both coding problems." },
    ],
    process: [
      { title: "Registration & eligibility check", description: "Register via the TCS NQT portal or your campus drive; academic eligibility is verified before a test slot is issued." },
      { title: "TCS iON NQT (online test)", description: "Foundation section (Numerical, Verbal, Reasoning Ability) for every candidate, plus an Advanced section (Advanced Quant & Reasoning, two coding problems) for the Digital/Prime track." },
      { title: "Technical + HR interview", description: "One combined panel interview covering your resume, core CS fundamentals, and the code you wrote in the NQT." },
      { title: "Document verification & offer", description: "Final academic and identity document check before the formal offer letter." },
    ],
    eligibility: [
      "Full-time B.E./B.Tech, M.E./M.Tech, MCA, or equivalent from a recognized university",
      "Minimum 60% (or equivalent CGPA) in Class 10, Class 12, and every year of graduation — a consistency requirement, not just the final aggregate",
      "No standing backlogs at the time of the interview",
      "A career/education gap of up to 2 years is generally accepted, subject to the specific drive's notification",
    ],
    documentsRequired: [
      "Government photo ID (Aadhaar/PAN/passport)",
      "Class 10 and Class 12 mark sheets",
      "Semester-wise degree mark sheets and provisional/consolidated degree certificate",
      "Passport-size photographs",
      "Updated resume",
    ],
    syllabus: [
      { section: "Numerical Ability", topics: ["Percentages, profit & loss, simple/compound interest", "Time, speed & distance; time & work", "Ratio, proportion & averages", "Number series and data interpretation"] },
      { section: "Verbal Ability", topics: ["Reading comprehension", "Sentence correction & rearrangement", "Synonyms/antonyms and error spotting", "Email writing / workplace communication"] },
      { section: "Reasoning Ability", topics: ["Syllogisms and logical deduction", "Coding-decoding, blood relations", "Puzzles, seating arrangement", "Data sufficiency"] },
      { section: "Advanced section (Digital/Prime only)", topics: ["Higher-difficulty quant & logical reasoning", "Two coding problems, roughly 50–60 minutes combined"] },
    ],
    aptitudeTopics: ["Percentages & profit-loss", "Time, speed, distance & work", "Permutations, combinations & probability", "Logical reasoning (syllogisms, puzzles, blood relations)", "Data interpretation from tables/graphs"],
    codingTopics: ["Arrays and string manipulation", "Hashing and two-pointer/sliding-window patterns", "Basic recursion and searching/sorting", "Simple dynamic programming and greedy problems"],
    technicalInterview: [
      { topic: "Resume & projects", detail: "Be ready to explain every project and internship on your resume line by line — TCS interviewers commonly dig into the 'why' behind technical choices." },
      { topic: "Core CS fundamentals", detail: "OOPs concepts, DBMS (normalization, joins, SQL queries), basic OS concepts (process vs thread, deadlock), and computer networks basics." },
      { topic: "Your NQT code", detail: "Interviewers often reopen the code you submitted in the coding round and ask you to modify it, explain its complexity, or handle an edge case live." },
    ],
    hrInterview: [
      { question: "Tell me about yourself.", answer: "Keep it to 60–90 seconds: academic background, one strong project or achievement, and why you want to join TCS — not a recited resume." },
      { question: "Why do you want to join TCS?", answer: "Anchor your answer in something specific — scale of projects, learning opportunities, or a business domain you're interested in — rather than generic praise." },
      { question: "Are you willing to relocate or work in shifts?", answer: "Answer honestly, but affirmatively where possible — TCS placements often come with relocation and shift-based project assignments." },
    ],
    commonQuestions: [
      { question: "What is the TCS placement process?", answer: "It's a single online assessment (TCS iON NQT) followed by one combined technical and HR interview. The NQT has a Foundation section every candidate takes and an Advanced section — with two coding problems — for candidates targeting the Digital/Prime track." },
      { question: "What is the eligibility criteria for TCS placements?", answer: "A full-time B.E./B.Tech, M.E./M.Tech, MCA, or equivalent degree with at least 60% (or equivalent CGPA) in Class 10, Class 12, and every year of graduation, and no active backlogs at the time of the interview." },
      { question: "How many coding questions are asked in the TCS NQT?", answer: "Candidates attempting the Advanced section solve two coding problems — typically arrays, strings, and hashing for the first, and dynamic programming, sliding window, or graph traversal for the second." },
      { question: "What is the difference between TCS Ninja and TCS Digital?", answer: "Ninja is the entry-level track (roughly 3.6–4 LPA) cleared via the Foundation section alone; Digital/Prime is the higher package track (roughly 7–9 LPA) that additionally requires clearing the Advanced section, including both coding problems." },
      { question: "How should I prepare for TCS placements?", answer: "Focus on speed under the Foundation section's tight per-question time limit, practice two-pointer/hashing/DP coding patterns for the Advanced section, and revise core CS subjects (OOPs, DBMS, OS, networks) for the interview." },
    ],
    preparationTips: [
      "Take at least 3–4 full-length, 150-minute mock tests to build stamina for the real exam pressure.",
      "Prioritize accuracy on Numerical Ability first — it carries the strictest sectional cutoff.",
      "Practice writing and explaining your own code out loud — the interview often reopens your NQT submission.",
      "Revise DBMS and OOPs from a placement-focused source, not a full semester textbook.",
    ],
    commonMistakes: [
      "Spending more than roughly 75 seconds on a single numerical-ability question and running out of time later in the section.",
      "Ignoring the Foundation section because you're targeting Digital/Prime — you must still clear it.",
      "Walking into the interview without being able to explain your own resume in detail.",
      "Not practicing under a timer, so the real 150-minute format feels unfamiliar.",
    ],
    relatedBlogSlugs: ["tcs-nqt-2026-complete-syllabus-preparation-strategy"],
    lastUpdated: "2026-08-31",
  },
  {
    slug: "infosys",
    name: "Infosys",
    shortName: "Infosys",
    badge: "Specialist & SE",
    focus: "Technical & coding",
    logoInitial: "I",
    tagline:
      "Hires freshers across three tracks — Systems Engineer, Digital Specialist Engineer, and Specialist Programmer — through InfyTQ/on-campus tests and HackWithInfy.",
    summary:
      "Infosys recruits through three distinct packages: Systems Engineer (roughly 3.6 LPA), Digital Specialist Engineer (roughly 6.25 LPA), and Specialist Programmer (roughly 9.5 LPA via HackWithInfy). Systems Engineer and DSE candidates sit an online test with quant, logical reasoning, pseudocode, and English sections plus one coding problem; Specialist Programmer candidates instead solve three algorithmic coding problems in a longer online round — all followed by a technical and HR interview.",
    roles: [
      { title: "Systems Engineer (SE)", note: "Roughly 3.6 LPA — entry track, broadest hiring volume." },
      { title: "Digital Specialist Engineer (DSE)", note: "Roughly 6.25 LPA — for candidates with stronger technical/analytical scores." },
      { title: "Specialist Programmer (SP)", note: "Roughly 9.5 LPA via HackWithInfy — algorithm-heavy hiring track." },
    ],
    process: [
      { title: "Online test / HackWithInfy qualifier", description: "SE/DSE candidates take a proctored test (quant, reasoning, pseudocode, English, one coding problem). SP candidates instead solve three coding problems in 180 minutes with no MCQs." },
      { title: "Technical interview", description: "A deep dive into data structures, the logic of your test-round code, projects, and core CS subjects." },
      { title: "HR interview", description: "Communication, willingness to relocate, and cultural-fit questions." },
      { title: "Offer & onboarding", description: "Document verification, followed by the offer letter and track assignment (SE/DSE/SP)." },
    ],
    eligibility: [
      "B.E./B.Tech, M.E./M.Tech, or MCA (specific eligible streams vary by drive notification)",
      "Minimum 60% or equivalent CGPA throughout Class 10, Class 12, and graduation, with no standing backlog at the time of the interview",
      "Consistent academic performance year-on-year, not just the final aggregate",
      "A maximum career/education gap as specified in that year's notification — commonly up to 2 years",
    ],
    documentsRequired: ["Photo ID proof", "Class 10 and Class 12 mark sheets", "Degree mark sheets and provisional/consolidated certificate", "Passport-size photographs", "Updated resume"],
    syllabus: [
      { section: "Quantitative Aptitude", topics: ["Percentages, profit & loss, SI/CI", "Time-speed-distance and time & work", "Permutations, combinations & probability", "Data interpretation"] },
      { section: "Logical Reasoning", topics: ["Syllogisms and blood relations", "Coding-decoding and number/letter series", "Puzzles and seating arrangement", "Data sufficiency"] },
      { section: "Pseudocode", topics: ["Reading and tracing pseudocode snippets", "Identifying output/errors in given logic", "Loop and conditional tracing"] },
      { section: "Specialist Programmer coding", topics: ["Strings, greedy algorithms, prefix sums", "Trees, segment trees, binary lifting, Dijkstra's algorithm", "Multi-dimensional DP, bitmasking, game theory"] },
    ],
    aptitudeTopics: ["Quantitative aptitude (percentages, time-work, permutations & combinations)", "Logical reasoning and puzzles", "Pseudocode tracing", "Verbal/English ability"],
    codingTopics: ["Arrays, strings & hashing (SE/DSE round)", "Recursion & basic DP (SE/DSE round)", "Trees, graphs & shortest paths (SP round)", "Bitmask & multi-dimensional DP, game theory (SP round)"],
    technicalInterview: [
      { topic: "Your test-round code", detail: "Interviewers commonly ask you to re-derive the time/space complexity of the code you submitted, or extend it to a follow-up variant on the spot." },
      { topic: "Core CS fundamentals", detail: "OOPs, DBMS/SQL, operating systems basics, and computer networks — asked at a depth proportional to the track (deeper for DSE/SP)." },
      { topic: "Projects & internships", detail: "Be ready to justify technology choices and trade-offs in any project listed on your resume." },
    ],
    hrInterview: [
      { question: "Why Infosys, and why this specific track?", answer: "Reference something concrete about the track you're being considered for (SE/DSE/SP) rather than a generic company-praise answer." },
      { question: "Are you comfortable with a location you don't choose?", answer: "Infosys assigns base locations after onboarding — answer honestly, but flexibility is generally viewed favorably." },
      { question: "Describe a time you solved a difficult problem.", answer: "Use a real, specific example (academic project, hackathon, or internship) and focus on your reasoning process, not just the outcome." },
    ],
    commonQuestions: [
      { question: "What is the Infosys placement process?", answer: "An online test — a different format for Systems Engineer/DSE than for the algorithm-heavy Specialist Programmer track — followed by a technical interview and an HR interview, then document verification and the offer." },
      { question: "What is the difference between Infosys SE, DSE, and Specialist Programmer?", answer: "They're three separate hiring tracks with different packages and test formats: SE (roughly 3.6 LPA, broadest intake), DSE (roughly 6.25 LPA, stronger technical bar), and Specialist Programmer (roughly 9.5 LPA, hired via HackWithInfy's three-question algorithmic test)." },
      { question: "What coding topics should I prepare for Infosys?", answer: "For SE/DSE, focus on arrays, strings, hashing, and basic recursion/DP inside one coding problem. For Specialist Programmer, prepare trees, graphs, segment trees, and multi-dimensional/bitmask DP across three progressively harder problems in 180 minutes." },
      { question: "What is asked in the Infosys technical interview?", answer: "Expect questions on the logic and complexity of the code you wrote in the online test, core CS subjects (OOPs, DBMS, OS, networks), and a walkthrough of your resume projects." },
      { question: "How should I prepare for Infosys placements?", answer: "Practice pseudocode tracing and quant/reasoning under timed conditions for SE/DSE, or focus heavily on medium-to-hard DSA (trees, DP, graphs) if targeting Specialist Programmer, and revise core CS subjects for the interview stage." },
    ],
    preparationTips: [
      "If targeting Specialist Programmer, practice full 180-minute, 3-problem sets rather than isolated questions — pacing across three problems is the real skill being tested.",
      "For SE/DSE, don't neglect the pseudocode section — it's scored separately and often under-practiced.",
      "Use fast I/O in C++ (`ios_base::sync_with_stdio(false); cin.tie(NULL);`) — Infosys's compiler enforces strict time limits.",
      "Revisit your own submitted code before the interview; you may be asked to modify it live.",
    ],
    commonMistakes: [
      "Treating all three Infosys tracks as the same test and preparing generically instead of for the specific track's format.",
      "Skipping pseudocode practice because it feels 'easy' — it still has a cutoff.",
      "Not accounting for compiler time-limit overhead in competitive languages, leading to unexpected TLEs.",
      "Under-preparing core CS subjects because the online round felt purely coding-focused.",
    ],
    relatedBlogSlugs: ["infosys-specialist-programmer-dsa-coding-round-guide"],
    lastUpdated: "2026-08-31",
  },
  {
    slug: "cognizant",
    name: "Cognizant",
    shortName: "Cognizant",
    badge: "GenC & GenC Next",
    focus: "Aptitude & technical",
    logoInitial: "C",
    tagline: "Hires freshers through the GenC (entry-level) and GenC Next / GenC Pro (higher-package, coding-heavy) tracks.",
    summary:
      "Cognizant's fresher hiring runs through GenC, GenC Next, and GenC Pro — an online assessment covering aptitude, verbal, and reasoning for every candidate, with an additional coding round for the Next/Pro tracks, followed by a technical and HR interview that's often a single combined panel.",
    roles: [
      { title: "GenC", note: "Entry-level track, largest intake, aptitude + basic technical screening." },
      { title: "GenC Next", note: "Coding-focused track with a higher package, includes a dedicated programming round." },
      { title: "GenC Pro", note: "Highest package tier for candidates with strong DSA/coding performance." },
    ],
    process: [
      { title: "Online assessment", description: "Aptitude (quant, verbal, logical reasoning) for all candidates; GenC Next/Pro candidates additionally solve coding problems." },
      { title: "Coding round", description: "For Next/Pro tracks — typically one to two programming problems testing DSA fundamentals." },
      { title: "Technical + HR interview", description: "A single combined panel round covering programming fundamentals, your projects, and communication/culture-fit questions." },
      { title: "Offer & document verification", description: "Final eligibility and document check before the formal offer." },
    ],
    eligibility: [
      "B.E./B.Tech, M.E./M.Tech, MCA, or equivalent, in eligible streams as per that drive's notification",
      "Minimum 60% (or equivalent CGPA) in Class 10, Class 12, and graduation, with no active backlog at the time of joining",
      "Consistent academic performance across semesters is generally expected",
      "Career gaps are evaluated case-by-case against the specific notification",
    ],
    documentsRequired: ["Photo ID proof", "Class 10 and Class 12 mark sheets", "Degree mark sheets and provisional/consolidated certificate", "Passport-size photographs", "Updated resume"],
    syllabus: [
      { section: "Quantitative Aptitude", topics: ["Percentages, ratios, averages", "Time & work, time-speed-distance", "Simple/compound interest, profit & loss", "Data interpretation"] },
      { section: "Verbal Ability", topics: ["Reading comprehension", "Grammar and sentence correction", "Vocabulary (synonyms/antonyms)"] },
      { section: "Logical Reasoning", topics: ["Series completion, coding-decoding", "Puzzles and arrangements", "Data sufficiency, syllogisms"] },
      { section: "Coding (GenC Next/Pro)", topics: ["Arrays, strings, basic data structures", "Loops, conditionals, recursion", "Time-complexity-aware problem solving"] },
    ],
    aptitudeTopics: ["Percentages, ratios & time-work", "Time, speed & distance", "Logical reasoning & puzzles", "Data interpretation"],
    codingTopics: ["Arrays and string handling", "Basic data structures (stacks, queues, linked lists)", "Recursion and simple searching/sorting", "Time and space complexity reasoning"],
    technicalInterview: [
      { topic: "Programming fundamentals", detail: "Expect questions on OOPs concepts, basic data structures, and simple problem-solving on a whiteboard or shared editor." },
      { topic: "Projects & academics", detail: "Interviewers ask you to explain your final-year or major academic project in your own words, including choices you made and problems you hit." },
      { topic: "SQL & databases", detail: "Basic SQL query writing and normalization concepts are common for candidates from CS/IT backgrounds." },
    ],
    hrInterview: [
      { question: "Tell me about yourself.", answer: "Structure it as education → one strong project or skill → why Cognizant, in under two minutes." },
      { question: "Why should we hire you?", answer: "Pick one or two concrete strengths backed by an example rather than a list of adjectives." },
      { question: "Are you open to relocation and rotational shifts?", answer: "Answer honestly — Cognizant projects frequently involve relocation across delivery centers." },
    ],
    commonQuestions: [
      { question: "What is the Cognizant placement process?", answer: "An online aptitude assessment for every candidate, an additional coding round for the GenC Next/Pro tracks, and a combined technical + HR interview before the offer." },
      { question: "What is the difference between GenC, GenC Next, and GenC Pro?", answer: "GenC is the standard entry-level track evaluated mainly on aptitude; GenC Next and GenC Pro carry higher packages and require clearing an additional coding round focused on data structures and problem solving." },
      { question: "What aptitude topics does Cognizant test?", answer: "Quantitative aptitude (percentages, time & work, time-speed-distance), verbal ability, and logical reasoning, each with its own sectional weight." },
      { question: "How should I prepare for a Cognizant interview?", answer: "Revise OOPs and basic data structures, be ready to explain your major academic project end-to-end, and practice concise answers to standard HR questions about relocation and career goals." },
    ],
    preparationTips: [
      "Practice full-length timed aptitude sets — the sectional format rewards consistent pacing over brilliance on a few questions.",
      "If targeting GenC Next/Pro, build fluency with arrays, strings, and basic data structures before test day.",
      "Prepare a 90-second walkthrough of your main project that you can deliver without notes.",
      "Brush up on basic SQL — it comes up often for CS/IT candidates even outside a dedicated DBMS round.",
    ],
    commonMistakes: [
      "Assuming the coding round only applies to 'coding roles' and skipping DSA prep entirely.",
      "Memorizing HR answers word-for-word instead of practicing them conversationally.",
      "Not reviewing your own final-year project before the interview.",
      "Ignoring verbal ability prep because English 'seems easy' — it still carries a sectional cutoff.",
    ],
    relatedBlogSlugs: ["mastering-mnc-aptitude-and-logical-reasoning-speed-tricks"],
    lastUpdated: "2026-08-31",
  },
  {
    slug: "accenture",
    name: "Accenture",
    shortName: "Accenture",
    badge: "Prime Assessment",
    focus: "Coding & communication",
    logoInitial: "A",
    tagline: "An elimination-based, multi-round hiring process built around the Cognitive & Technical Assessment.",
    summary:
      "Accenture's fresher hiring is elimination-based at every stage: a 90-question, 90-minute Cognitive & Technical Assessment (critical reasoning, abstract reasoning, English, pseudocode, and cloud/security MCQs) must clear every sectional cutoff before you're allowed into the coding assessment, followed by a communication assessment and a final technical + HR interview.",
    roles: [
      { title: "Associate Software Engineer (ASE)", note: "Standard entry-level track." },
      { title: "Advanced App Engineering (AAE)", note: "Coding-heavy track for stronger technical performers." },
    ],
    process: [
      { title: "Cognitive & Technical Assessment", description: "90 questions in 90 minutes across six modules: Critical Reasoning, Abstract Reasoning, English Ability, MS Office/Common Applications, Pseudocode, and Cloud/Network Security." },
      { title: "Coding assessment", description: "Only candidates who clear every sectional cutoff in Round 1 advance to the coding round." },
      { title: "Communication assessment", description: "An automated or panel-based English communication and voice-clarity evaluation." },
      { title: "Technical + HR interview", description: "Final panel round covering technical fundamentals, the coding round, and standard HR/fit questions." },
    ],
    eligibility: [
      "B.E./B.Tech, B.Sc, BCA, M.E./M.Tech, MCA, or equivalent, depending on the specific drive",
      "Minimum 65% or equivalent CGPA is commonly required — always confirm against the current notification, as thresholds vary by drive",
      "No active standing backlog at the time of the interview",
      "Consistent academic performance across Class 10, Class 12, and graduation",
    ],
    documentsRequired: ["Photo ID proof", "Class 10 and Class 12 mark sheets", "Degree mark sheets and provisional/consolidated certificate", "Passport-size photographs", "Updated resume"],
    syllabus: [
      { section: "Critical & Abstract Reasoning", topics: ["Pattern and sequence recognition", "Logical deduction and analogy", "Data sufficiency"] },
      { section: "English Ability", topics: ["Reading comprehension", "Grammar and error identification", "Business/workplace email writing"] },
      { section: "Pseudocode", topics: ["Tracing loops and conditionals", "Identifying output of given logic", "Spotting logical errors in pseudocode"] },
      { section: "Cloud & Network Security", topics: ["Basic cloud computing concepts", "Networking fundamentals", "Common security terminology"] },
    ],
    aptitudeTopics: ["Critical reasoning & problem solving", "Abstract/pattern reasoning", "English ability", "MS Office & common applications basics"],
    codingTopics: ["Pseudocode tracing and logic evaluation", "Arrays and string manipulation", "Basic conditionals and loop-heavy problems"],
    technicalInterview: [
      { topic: "Pseudocode & logic", detail: "Interviewers may hand you a fresh pseudocode snippet and ask you to trace the output or spot the bug, similar to the online round." },
      { topic: "Cloud & security basics", detail: "Simple conceptual questions on cloud service models or basic network security are common for candidates who scored well in that module." },
      { topic: "Projects", detail: "Be ready to explain any project in plain language — Accenture interviewers weigh communication clarity alongside technical correctness." },
    ],
    hrInterview: [
      { question: "Tell me about yourself.", answer: "Accenture places real weight on communication clarity here — practice a smooth, well-paced answer rather than a memorized script." },
      { question: "Why Accenture?", answer: "Reference the variety of clients/domains Accenture works across rather than generic 'great company' language." },
      { question: "How do you handle ambiguous instructions from a client or manager?", answer: "Give a specific example of clarifying requirements or asking questions before acting — Accenture's consulting-style delivery model values this." },
    ],
    commonQuestions: [
      { question: "What is the Accenture placement process?", answer: "A 90-minute, 90-question Cognitive & Technical Assessment across six modules, with sectional cutoffs that must all be cleared to advance to a coding assessment, then a communication assessment, and finally a technical + HR interview." },
      { question: "What sections are in the Accenture Cognitive & Technical Assessment?", answer: "Critical Reasoning & Problem Solving, Abstract Reasoning, English Ability, Common Applications & MS Office, Pseudocode, and Cloud/Network Security — 90 questions in 90 minutes total." },
      { question: "Is Accenture's test elimination-based?", answer: "Yes. You must clear the minimum cutoff in every section of the Cognitive & Technical Assessment; missing even one section's cutoff removes you from the process regardless of your overall score." },
      { question: "How should I prepare for Accenture placements?", answer: "Practice all six assessment modules individually since each has its own cutoff, pay particular attention to pseudocode tracing, and rehearse spoken English clearly for the communication assessment." },
    ],
    preparationTips: [
      "Practice every module separately — a strong overall score doesn't help if one section misses its cutoff.",
      "Time-box pseudocode questions; they're logic puzzles, not memorization.",
      "Record yourself answering common HR questions to check pacing and clarity before the communication assessment.",
      "Skim basic cloud computing and networking terms even if you're not from a core CS background.",
    ],
    commonMistakes: [
      "Over-preparing coding and under-preparing the cloud/security and pseudocode modules.",
      "Not realizing the process is elimination-based per section, and coasting on a high overall score.",
      "Rushing through the communication assessment without practicing clear pacing.",
      "Giving vague, unstructured answers about ambiguous work scenarios in the HR round.",
    ],
    relatedBlogSlugs: ["accenture-cognitive-technical-assessment-pattern-breakdown"],
    lastUpdated: "2026-08-31",
  },
  {
    slug: "capgemini",
    name: "Capgemini",
    shortName: "Capgemini",
    badge: "Exceller Track",
    focus: "Pseudocode & English",
    logoInitial: "C",
    tagline: "Uses a distinctive game-based aptitude battery (Capgemini Exceller) instead of traditional quant MCQs.",
    summary:
      "Capgemini's fresher hiring runs through the Exceller assessment: a game-based cognitive aptitude battery (Grid Challenge, Motion Challenge, Deductive-Logical Switch Challenge, Digit Challenge) in place of traditional quant MCQs, plus English/communication and pseudocode sections, followed by a technical interview and an HR interview.",
    roles: [{ title: "Analyst / Graduate Engineer Trainee", note: "Standard entry-level track hired through Exceller." }],
    process: [
      { title: "Capgemini Exceller assessment", description: "A game-based cognitive battery measuring spatial memory, focus, response latency, and inductive reasoning, alongside English and pseudocode sections." },
      { title: "Group discussion / communication round", description: "Some drives include a group discussion or written communication task assessing clarity and teamwork." },
      { title: "Technical interview", description: "Core CS fundamentals, pseudocode/coding logic, and a walkthrough of your academic projects." },
      { title: "HR interview", description: "Standard fit, relocation, and career-goal questions before the offer." },
    ],
    eligibility: [
      "B.E./B.Tech, B.Sc, BCA, M.E./M.Tech, MCA, or equivalent, per the specific drive's eligible streams",
      "Minimum 60% or equivalent CGPA generally required across Class 10, Class 12, and graduation",
      "No active standing backlog at the time of the interview",
      "Career gap limits vary by notification — confirm against the specific drive",
    ],
    documentsRequired: ["Photo ID proof", "Class 10 and Class 12 mark sheets", "Degree mark sheets and provisional/consolidated certificate", "Passport-size photographs", "Updated resume"],
    syllabus: [
      { section: "Exceller game-based aptitude", topics: ["Grid Challenge (spatial/pattern memory)", "Motion Challenge (visual tracking & response speed)", "Deductive-Logical Switch Challenge (rule-based logic)", "Digit Challenge (numeric working memory)"] },
      { section: "English / Communication", topics: ["Reading comprehension", "Grammar and sentence correction", "Workplace email writing"] },
      { section: "Pseudocode", topics: ["Tracing bitwise and conditional logic", "Loop and function tracing", "Identifying output/errors in given code logic"] },
    ],
    aptitudeTopics: ["Game-based spatial and pattern reasoning (Exceller)", "Inductive and deductive logic", "Numeric working memory", "English/verbal ability"],
    codingTopics: ["Pseudocode tracing, including bitwise operations", "Basic programming logic (loops, conditionals, functions)", "Simple data structure concepts for the interview stage"],
    technicalInterview: [
      { topic: "Pseudocode & bitwise logic", detail: "Capgemini interviewers often probe bitwise-operator tracing specifically, since it trips up candidates who only practiced arithmetic pseudocode." },
      { topic: "Core CS fundamentals", detail: "Basic OOPs, DBMS, and OS concepts, proportional to your branch and resume." },
      { topic: "Projects", detail: "Be ready to explain your project's architecture and your individual contribution clearly." },
    ],
    hrInterview: [
      { question: "Tell me about yourself.", answer: "Keep it structured and under two minutes — Capgemini interviewers commonly follow up on whatever you mention first." },
      { question: "Why Capgemini?", answer: "Reference its consulting/technology services model and global delivery scale rather than generic praise." },
      { question: "Are you comfortable working in a client-facing delivery model?", answer: "Answer honestly — many Capgemini roles involve direct or indirect client interaction from early on." },
    ],
    commonQuestions: [
      { question: "What is the Capgemini placement process?", answer: "The Capgemini Exceller game-based aptitude assessment plus English and pseudocode sections, sometimes followed by a group discussion, then a technical interview and an HR interview." },
      { question: "What is the Capgemini Exceller test?", answer: "A game-based cognitive aptitude battery — Grid Challenge, Motion Challenge, Deductive-Logical Switch Challenge, and Digit Challenge — used in place of traditional quantitative-aptitude MCQs to measure spatial memory, focus, and reasoning speed." },
      { question: "How should I prepare for the Capgemini pseudocode section?", answer: "Practice tracing loops, conditionals, and especially bitwise operations by hand — Capgemini's pseudocode questions frequently test bitwise logic that candidates rarely rehearse elsewhere." },
      { question: "How should I prepare for Capgemini placements overall?", answer: "Practice Exceller-style game formats under time pressure (they reward speed and pattern recognition more than formula memorization), revise pseudocode/bitwise tracing, and prepare a clear walkthrough of your main project for the interview." },
    ],
    preparationTips: [
      "Practice game-style pattern and memory exercises under a timer — Exceller rewards speed and consistency, not just correctness.",
      "Specifically rehearse bitwise pseudocode tracing; it's a frequent surprise for candidates coming from a purely arithmetic-aptitude prep background.",
      "Prepare a clean, structured explanation of your final-year project's architecture.",
      "Practice concise written communication — some drives include an email or short-answer writing task.",
    ],
    commonMistakes: [
      "Preparing only traditional quant-MCQ style questions and being caught off guard by the game-based format.",
      "Skipping bitwise-logic practice in pseudocode prep.",
      "Under-preparing the English/communication section because it 'seems easy.'",
      "Not being able to explain your own project's technical decisions clearly.",
    ],
    relatedBlogSlugs: ["capgemini-exceller-game-based-aptitude-pseudocode-tips"],
    lastUpdated: "2026-08-31",
  },
  {
    slug: "ibm",
    name: "IBM",
    shortName: "IBM",
    badge: "Cognitive Assessment",
    focus: "Technical & coding",
    logoInitial: "I",
    tagline: "Fresher hiring built around a cognitive/technical aptitude test followed by a coding round and technical + HR interviews.",
    summary:
      "IBM's campus hiring typically starts with an online cognitive and technical aptitude assessment (quantitative, logical reasoning, and verbal sections), followed by a coding round testing programming fundamentals and problem solving, and closes with a technical interview and an HR interview focused on communication and role fit.",
    roles: [{ title: "Associate Software Developer / entry-level roles", note: "Primary fresher track hired through campus and off-campus drives." }],
    process: [
      { title: "Online cognitive & technical assessment", description: "Quantitative aptitude, logical reasoning, and verbal ability sections, evaluated against role-specific cutoffs." },
      { title: "Coding assessment", description: "Programming problems testing data structures, algorithms, and code correctness/efficiency." },
      { title: "Technical interview", description: "Core CS fundamentals, your coding-round solutions, and project/internship deep-dives." },
      { title: "HR interview", description: "Communication, cultural fit, and career-goal questions before the final offer." },
    ],
    eligibility: [
      "B.E./B.Tech, M.E./M.Tech, MCA, or equivalent, in eligible streams per the specific drive",
      "Minimum 60–65% or equivalent CGPA is commonly required — confirm against the current notification, as thresholds vary by drive",
      "No active standing backlog at the time of the interview",
      "Consistent academic record expected across Class 10, Class 12, and graduation",
    ],
    documentsRequired: ["Photo ID proof", "Class 10 and Class 12 mark sheets", "Degree mark sheets and provisional/consolidated certificate", "Passport-size photographs", "Updated resume"],
    syllabus: [
      { section: "Quantitative Aptitude", topics: ["Percentages, ratios, averages", "Time, speed & distance; time & work", "Profit & loss, SI/CI", "Data interpretation"] },
      { section: "Logical Reasoning", topics: ["Series and pattern completion", "Puzzles and seating arrangement", "Syllogisms and data sufficiency"] },
      { section: "Verbal Ability", topics: ["Reading comprehension", "Grammar and sentence correction", "Vocabulary"] },
      { section: "Coding assessment", topics: ["Arrays, strings, and basic data structures", "Recursion and searching/sorting", "Time-complexity-aware problem solving"] },
    ],
    aptitudeTopics: ["Quantitative aptitude", "Logical reasoning & puzzles", "Verbal ability", "Data interpretation"],
    codingTopics: ["Arrays and string manipulation", "Basic data structures (stacks, queues, linked lists)", "Recursion, searching & sorting", "Complexity analysis of your own solutions"],
    technicalInterview: [
      { topic: "Data structures & algorithms", detail: "Expect follow-up questions on the approach and complexity of the code you wrote in the coding assessment." },
      { topic: "Core CS fundamentals", detail: "OOPs, basic DBMS/SQL, and operating-systems concepts, at a depth suited to your branch." },
      { topic: "Projects & cloud/AI exposure", detail: "Given IBM's focus areas, genuine exposure to cloud platforms, AI/ML, or open-source contributions in your projects is a natural talking point if it's real work you've done." },
    ],
    hrInterview: [
      { question: "Tell me about yourself.", answer: "Lead with your strongest technical strength or project, then connect it to why you're interested in IBM's focus areas." },
      { question: "Why IBM?", answer: "Reference IBM's scale in enterprise technology, cloud, or research rather than generic company praise." },
      { question: "How do you keep learning new technologies?", answer: "Give a specific, recent example — a course, a project, or a technology you picked up independently." },
    ],
    commonQuestions: [
      { question: "What is the IBM placement process for freshers?", answer: "An online cognitive and technical aptitude assessment, a coding round testing data structures and algorithms, and then a technical interview followed by an HR interview." },
      { question: "What coding topics should I prepare for IBM?", answer: "Arrays, strings, basic data structures (stacks, queues, linked lists), recursion, and searching/sorting — with a strong emphasis on being able to explain the time and space complexity of your solution." },
      { question: "What is asked in the IBM technical interview?", answer: "Expect a walkthrough of your coding-assessment solutions, core CS fundamentals (OOPs, DBMS/SQL, OS basics), and questions about any projects or internships on your resume." },
      { question: "How should I prepare for IBM placements?", answer: "Practice timed aptitude sets, build comfort explaining the complexity of your own code, and revise core CS subjects so you can hold a technical conversation beyond just solving the problem." },
    ],
    preparationTips: [
      "Practice explaining your code's time and space complexity out loud — IBM interviewers frequently ask this as a direct follow-up.",
      "Don't neglect verbal ability and data interpretation while focusing on coding — the aptitude round has its own cutoff.",
      "Prepare one or two projects you can discuss in real technical depth rather than many projects at a surface level.",
      "Revise core CS fundamentals (OOPs, DBMS, OS) — the technical interview goes beyond the coding round.",
    ],
    commonMistakes: [
      "Solving coding problems without being able to state their time/space complexity when asked.",
      "Treating the aptitude round as a formality and under-preparing it.",
      "Listing many shallow projects on the resume instead of one or two you can defend in depth.",
      "Giving generic, unprepared answers about why IBM specifically.",
    ],
    relatedBlogSlugs: [],
    lastUpdated: "2026-08-31",
  },
];

export function getCompanyBySlug(slug: string): CompanyProfile | undefined {
  return COMPANIES.find((company) => company.slug === slug);
}

export function getAllCompanySlugs(): string[] {
  return COMPANIES.map((company) => company.slug);
}
