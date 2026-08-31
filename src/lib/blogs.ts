export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "MNC Tests" | "Coding & DSA" | "Aptitude & Logic" | "Interview Strategy";
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  featured?: boolean;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tcs-nqt-2026-complete-syllabus-preparation-strategy",
    title: "TCS iON NQT 2026: Complete Syllabus, Sectional Cut-offs & Preparation Strategy",
    excerpt: "Everything you need to crack TCS NQT Foundation & Advanced Cognitive sections, Ninja vs Digital grade benchmarks, and hands-on coding rounds.",
    category: "MNC Tests",
    readTime: "7 min read",
    publishedAt: "Aug 26, 2026",
    author: {
      name: "Aditya Verma",
      role: "Lead Placement Assessment Architect",
      avatar: "AV",
    },
    tags: ["TCS NQT", "Placement 2026", "Aptitude", "Ninja & Digital"],
    featured: true,
    content: `
      <h2>Understanding the 2026 TCS NQT Test Pattern</h2>
      <p>The Tata Consultancy Services National Qualifier Test (TCS NQT) remains one of the largest campus recruitment assessments in the world. In the latest 2026 hiring cycle, TCS has increased the emphasis on <strong>timed cognitive agility</strong> and <strong>hands-on algorithmic problem solving</strong>.</p>
      
      <p>Candidates are evaluated across two mandatory stages: the <strong>Foundation Section</strong> (Cognitive Skills) and the <strong>Advanced Section</strong> (Technical & Coding), which determines whether you qualify for the <em>Prime / Digital</em> track (7-9 LPA) or <em>Ninja</em> track (3.6-4 LPA).</p>

      <h3>Section-Wise Breakdown & Marks Distribution</h3>
      <table>
        <thead>
          <tr>
            <th>Section</th>
            <th>Questions</th>
            <th>Time Allocated</th>
            <th>Difficulty Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Numerical Ability</td>
            <td>20 Qs</td>
            <td>25 Mins</td>
            <td>Moderate to High</td>
          </tr>
          <tr>
            <td>Verbal Ability</td>
            <td>25 Qs</td>
            <td>25 Mins</td>
            <td>Easy to Moderate</td>
          </tr>
          <tr>
            <td>Reasoning Ability</td>
            <td>20 Qs</td>
            <td>25 Mins</td>
            <td>Moderate (Logic Heavy)</td>
          </tr>
          <tr>
            <td>Advanced Quantitative & Reasoning</td>
            <td>15 Qs</td>
            <td>20 Mins</td>
            <td>Hard (Digital Qualifier)</td>
          </tr>
          <tr>
            <td>Advanced Coding (2 Problems)</td>
            <td>2 Problems</td>
            <td>55 Mins</td>
            <td>LeetCode Medium / Hard</td>
          </tr>
        </tbody>
      </table>

      <h3>Key Focus Areas in Coding</h3>
      <p>The coding round consists of 2 problems. Problem 1 typically tests <strong>Array manipulation, Strings, and Hashing</strong>. Problem 2 focuses on <strong>Dynamic Programming, Sliding Window, or Graph traversal</strong>.</p>

      <pre><code>// Example: Optimized Two-Pointer approach for Subarray Target
int findOptimalSubarray(vector<int>& arr, int target) {
    int left = 0, currentSum = 0, minLen = INT_MAX;
    for (int right = 0; right < arr.size(); ++right) {
        currentSum += arr[right];
        while (currentSum >= target) {
            minLen = min(minLen, right - left + 1);
            currentSum -= arr[left++];
        }
    }
    return minLen == INT_MAX ? 0 : minLen;
}</code></pre>

      <h3>Pro-Tips to Score 95+ Percentile</h3>
      <ul>
        <li><strong>Zero negative marking on foundation:</strong> Attempt all questions, but prioritize accuracy on numerical ability to clear the sectional cutoff.</li>
        <li><strong>Practice on full-length mock timers:</strong> Simulating the 150-minute exam pressure is the single biggest predictor of clearance.</li>
        <li><strong>Master time management in Section 1:</strong> Never spend more than 75 seconds on a single numerical question.</li>
      </ul>

      <p>For the full process, eligibility criteria, and commonly asked interview questions, see the <a href="/companies/tcs">TCS placement preparation guide</a>.</p>
    `,
  },
  {
    slug: "infosys-specialist-programmer-dsa-coding-round-guide",
    title: "Infosys Specialist Programmer (SP) & DSE: Master Dynamic Programming & Trees",
    excerpt: "Detailed breakdown of the 3-question Infosys SP online test, recursion tree optimization, bit masking, and graph techniques.",
    category: "Coding & DSA",
    readTime: "9 min read",
    publishedAt: "Aug 24, 2026",
    author: {
      name: "Rohit Shenoy",
      role: "Ex-Infosys SP, Senior SWE",
      avatar: "RS",
    },
    tags: ["Infosys", "Specialist Programmer", "Hard DSA", "Dynamic Programming"],
    featured: false,
    content: `
      <h2>The Infosys Specialist Programmer Standard</h2>
      <p>Infosys offers three distinct hiring packages through its off-campus and on-campus hackathons (HackWithInfy / InfyTQ): <strong>Systems Engineer (3.6 LPA)</strong>, <strong>Digital Specialist Engineer (6.25 LPA)</strong>, and <strong>Specialist Programmer (9.5 LPA)</strong>.</p>
      
      <p>The SP qualifier is renowned for its intense algorithmic rigor. The test gives you <strong>3 coding questions to be solved in 180 minutes</strong> without any MCQs.</p>

      <h3>Pattern & Topic Weightage</h3>
      <ul>
        <li><strong>Question 1 (Easy-Medium):</strong> Strings, Greedy Algorithms, or Prefix Sums (Expected time: 25-35 mins).</li>
        <li><strong>Question 2 (Medium-Hard):</strong> Trees, Binary Lifting, Segment Trees, or Dijkstra shortest path (Expected time: 50-65 mins).</li>
        <li><strong>Question 3 (Hard):</strong> Multi-dimensional DP with Bitmasking, DP on Trees, or Game Theory (Expected time: 70-90 mins).</li>
      </ul>

      <h3>Common Pitfalls in Infosys SP Compiler</h3>
      <p>The Infosys testing environment runs on customized strict time limits (usually 1.0s for C++ and 2.0s for Java/Python). Beware of large I/O overheads — always use fast I/O in C++ (<code>cin.tie(NULL); ios_base::sync_with_stdio(false);</code>).</p>

      <p>For the full hiring process across all three tracks — Systems Engineer, DSE, and Specialist Programmer — see the <a href="/companies/infosys">Infosys placement preparation guide</a>.</p>
    `,
  },
  {
    slug: "mastering-mnc-aptitude-and-logical-reasoning-speed-tricks",
    title: "Mastering MNC Aptitude & Reasoning: 10 Speed Math & Logic Shortcuts",
    excerpt: "Speed tricks for Time & Work, Speed Distance Time, Syllogisms, and Data Sufficiency tested across Cognizant, Accenture, and Capgemini.",
    category: "Aptitude & Logic",
    readTime: "6 min read",
    publishedAt: "Aug 21, 2026",
    author: {
      name: "Pooja Deshmukh",
      role: "Quantitative Aptitude Lead",
      avatar: "PD",
    },
    tags: ["Aptitude", "Speed Math", "Logical Reasoning", "Cognizant"],
    featured: false,
    content: `
      <h2>Why 70% of Candidates Fail in Round 1 Aptitude</h2>
      <p>Most engineering students know how to solve a math problem using conventional formulas. However, MNC assessments give you roughly <strong>45 to 60 seconds per question</strong>. If you solve by traditional 10-step algebra, you will run out of time on 40% of the paper.</p>

      <h3>Trick 1: Unit Digit & Digital Root Elimination</h3>
      <p>When calculating large multiplications or powers in percentages and compound interest, calculate the digital sum (sum of digits reduced to a single digit modulo 9). Match the digital root of the question directly against the 4 options to eliminate 3 wrong choices in 5 seconds.</p>

      <h3>Trick 2: Efficiency Method in Time & Work</h3>
      <p>Instead of assuming total work as <code>1</code> and dealing with fractions like <code>1/12 + 1/15</code>, take the LCM of the days as total units of work. Convert days into daily unit efficiency directly.</p>
    `,
  },
  {
    slug: "accenture-cognitive-technical-assessment-pattern-breakdown",
    title: "Accenture Cognitive & Technical Assessment 2026: Complete Section Guide",
    excerpt: "Demystifying Accenture's Critical Thinking, Abstract Reasoning, Pseudo-Code, and Cloud/Security MCQ test tracks.",
    category: "MNC Tests",
    readTime: "8 min read",
    publishedAt: "Aug 18, 2026",
    author: {
      name: "Sneha Nair",
      role: "Campus Recruiter & Assessment Consultant",
      avatar: "SN",
    },
    tags: ["Accenture", "Pseudocode", "Cloud Computing", "Prime Track"],
    featured: false,
    content: `
      <h2>Inside Accenture’s Multi-Stage Hiring Funnel</h2>
      <p>Accenture's hiring assessment is elimination-based at every single stage. If you do not meet the minimum sectional cut-off in the Cognitive and Technical section (Round 1), you are not permitted to sit for the Coding Assessment (Round 2) or the Communication Test (Round 3).</p>

      <h3>Round 1: Cognitive & Technical (90 Questions in 90 Mins)</h3>
      <p>Divided into 6 distinct modules: Critical Reasoning & Problem Solving (18 Qs), Abstract Reasoning (15 Qs), English Ability (17 Qs), Common Applications & MS Office (12 Qs), Pseudocode (18 Qs), and Cloud / Network Security (10 Qs).</p>

      <p>See the full <a href="/companies/accenture">Accenture placement preparation guide</a> for eligibility, the coding and communication rounds, and commonly asked interview questions.</p>
    `,
  },
  {
    slug: "capgemini-exceller-game-based-aptitude-pseudocode-tips",
    title: "Capgemini Exceller: Game-Based Aptitude & Pseudocode Cracking Guide",
    excerpt: "How to score high in Capgemini's 24-game cognitive battery and master tricky pseudocode bitwise evaluation rounds.",
    category: "MNC Tests",
    readTime: "5 min read",
    publishedAt: "Aug 14, 2026",
    author: {
      name: "Aditya Verma",
      role: "Lead Placement Assessment Architect",
      avatar: "AV",
    },
    tags: ["Capgemini", "Game Aptitude", "Pseudocode", "Exceller"],
    featured: false,
    content: `
      <h2>The Unique Capgemini Game-Based Aptitude Battery</h2>
      <p>Capgemini replaced traditional quantitative MCQs with interactive <strong>Game-Based Aptitude rounds</strong> (Grid Challenge, Motion Challenge, Deductive-logical Switch Challenge, and Digit Challenge). These games measure spatial memory, focus, response latency, and inductive reasoning.</p>

      <p>For the complete process, eligibility, and interview breakdown, see the <a href="/companies/capgemini">Capgemini placement preparation guide</a>.</p>
    `,
  },
  {
    slug: "how-to-solve-dynamic-programming-in-tier1-mnc-tests",
    title: "How to Master Dynamic Programming for Tier-1 MNC Placement Assessments",
    excerpt: "A step-by-step framework to identify DP states, transition equations, and space optimization in 45 minutes under exam pressure.",
    category: "Coding & DSA",
    readTime: "10 min read",
    publishedAt: "Aug 10, 2026",
    author: {
      name: "Rohit Shenoy",
      role: "Ex-Infosys SP, Senior SWE",
      avatar: "RS",
    },
    tags: ["DSA", "Dynamic Programming", "Google", "Amazon", "Coding"],
    featured: false,
    content: `
      <h2>The 4-Step DP Framework for MNC Tests</h2>
      <p>Dynamic Programming questions terrify candidates because they try to write the bottom-up table immediately. In real placement tests, follow this proven 4-step framework:</p>
      <ol>
        <li><strong>Formulate the plain recursion:</strong> Express the solution in terms of sub-problems and define clear base cases.</li>
        <li><strong>Verify Optimal Substructure & Overlapping Subproblems:</strong> Identify which state parameters change during recursive calls.</li>
        <li><strong>Memoize with Top-Down Cache:</strong> Add a hash table or 2D array to eliminate redundant recursive subtree calls.</li>
        <li><strong>Convert to Bottom-Up DP with Space Optimization:</strong> If state <code>dp[i]</code> only depends on <code>dp[i-1]</code>, reduce space complexity from <code>O(N)</code> to <code>O(1)</code>.</li>
      </ol>
    `,
  },
];
