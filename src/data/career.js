// ExcelMaster Hub - Career & Job Launchpad Dataset
// Comprehensive 60-Day Roadmap, Hiring Criteria, Portfolio Blueprints, Company Database & Cold Outreach Kit

const CAREER_ROADMAP = [
  {
    phase: 1,
    duration: "Days 1 – 15",
    title: "Phase 1: Speed, Navigation & Data Hygiene",
    badge: "FOUNDATION BENCHMARK",
    tagline: "Build unshakeable speed — throw away the mouse in front of the interviewer.",
    goal: "Navigate sheets 3x faster than average candidates and clean messy imported data in seconds.",
    weeklyBreakdown: [
      {
        week: "Week 1 (Days 1–7)",
        focus: "Keyboard Navigation & Essential Data Layout",
        tasks: [
          "Master Ctrl + Arrow keys and Ctrl + Shift + Arrows for instant navigation.",
          "Learn Ctrl + Space (Select Column) and Shift + Space (Select Row).",
          "Practice AutoSum (Alt + =) and Paste Special (Alt + E + S).",
          "Learn to freeze top rows and columns (Alt + W + F + F)."
        ],
        milestone: "Can build a 10-column table and calculate sums without touching the mouse once."
      },
      {
        week: "Week 2 (Days 8–15)",
        focus: "Data Hygiene & Cleaning ERP Exports",
        tasks: [
          "Master =TRIM() to eliminate hidden spaces that cause VLOOKUP #N/A errors.",
          "Convert text-stored numbers using =VALUE() and Paste Special Multiply.",
          "Use Flash Fill (Ctrl + E) to split combined Full Names and extract ID codes.",
          "Find and remove duplicate rows instantly using Alt + A + M."
        ],
        milestone: "Can take an ugly 500-row corrupted Tally/SAP export and sanitize it into a pristine model in under 3 minutes."
      }
    ],
    proTip: "In corporate Excel tests, hiring managers watch your hands. If your right hand stays on the keyboard instead of the mouse, you are instantly rated in the top 10% of applicants."
  },
  {
    phase: 2,
    duration: "Days 16 – 30",
    title: "Phase 2: The Formulas Companies Actually Test",
    badge: "CORE HIRING EXAMS",
    tagline: "Master the 10 formulas that appear in 95% of screening assessments.",
    goal: "Never struggle with lookup errors, multi-criteria summations, or dynamic criteria logic.",
    weeklyBreakdown: [
      {
        week: "Week 3 (Days 16–22)",
        focus: "Lookups & Reference Engineering",
        tasks: [
          "Master VLOOKUP with exact match 0 and absolute lock ($) with F4.",
          "Learn why VLOOKUP fails going left and master INDEX + MATCH as the bulletproof replacement.",
          "Master XLOOKUP (Excel 365) for two-way lookups and multi-column returns.",
          "Mask ugly errors using =IFERROR(lookup, \"Not Found\")."
        ],
        milestone: "Can join two separate ERP tables using employee/product IDs without a single #N/A error."
      },
      {
        week: "Week 4 (Days 23–30)",
        focus: "Multi-Criteria Aggregation & Decision Logic",
        tasks: [
          "Master SUMIFS and COUNTIFS with multiple date, region, and threshold conditions.",
          "Build nested IF / IFS statements for tax slabs and employee performance ratings.",
          "Use AND / OR inside IF statements to evaluate dual-criteria bonuses.",
          "Calculate date differences and deadlines using DATEDIF, EDATE, and EOMONTH."
        ],
        milestone: "Can calculate department-wise quarterly sales totals filtered by city and target threshold in a single formula."
      }
    ],
    proTip: "Companies don't test esoteric math. They test if you know when to use SUMIFS over SUM, why to use XLOOKUP/INDEX+MATCH over VLOOKUP, and how to prevent calculation errors with IFERROR."
  },
  {
    phase: 3,
    duration: "Days 31 – 45",
    title: "Phase 3: Business Intelligence, Pivots & Dashboards",
    badge: "EXECUTIVE REPORTING",
    tagline: "Turn raw row-level data into visual C-level decision reports.",
    goal: "Build interactive executive dashboards that managers can slice and filter with 1 click.",
    weeklyBreakdown: [
      {
        week: "Week 5 (Days 31–37)",
        focus: "Pivot Table Engineering & Slicers",
        tasks: [
          "Generate Pivot Tables from structured tables (Ctrl + T) to ensure dynamic range expansion.",
          "Group transaction dates into Months, Quarters, and Financial Years.",
          "Add Calculated Fields (e.g. Profit Margin % = Profit / Revenue).",
          "Connect interactive Timeline and Category Slicers across multiple pivot tables."
        ],
        milestone: "Can summarize 10,000 transaction rows into a regional performance report in 90 seconds."
      },
      {
        week: "Week 6 (Days 38–45)",
        focus: "Executive Dashboard Design & Data Validation",
        tasks: [
          "Create C-Level KPI summary cards (Total Revenue, YoY Growth, Active Headcount).",
          "Apply formula-driven Conditional Formatting (e.g. highlight top 10% and overdue invoices).",
          "Enforce error-proof data entry using Data Validation drop-downs and dependent lists.",
          "Remove default gridlines, style headers in corporate palette, and lock formula cells."
        ],
        milestone: "Complete an interactive 1-page executive dashboard ready for presentation to Directors."
      }
    ],
    proTip: "Executives hate busy, cluttered spreadsheets. A clean 1-page summary sheet with 4 prominent KPI numbers, 2 trend charts, and 2 slicers will impress a CEO 10x more than a 50-column raw sheet."
  },
  {
    phase: 4,
    duration: "Days 46 – 60",
    title: "Phase 4: Corporate Portfolios, Cold Outreach & Getting Hired",
    badge: "JOB LAUNCHPAD",
    tagline: "Stop applying to job boards with a plain resume — show live proof of work.",
    goal: "Build 4 portfolio projects, reach out directly to hiring managers, and crack screening tests.",
    weeklyBreakdown: [
      {
        week: "Week 7 (Days 46–53)",
        focus: "Building Your 4 Portfolio Projects",
        tasks: [
          "Build Project 1: Executive Sales MIS Dashboard with Target vs Actual.",
          "Build Project 2: Employee Payroll & Statutory Register (PF/ESI/TDS).",
          "Build Project 3: FMCG Inventory Reorder Planner & Stock Health Tracker.",
          "Build Project 4: GST / Vendor Reconciliation Model (2B vs Books).",
          "Host workbooks on Google Drive / OneDrive with clean view links for your resume."
        ],
        milestone: "Have a live, clickable portfolio link ready on the top line of your resume and LinkedIn."
      },
      {
        week: "Week 8 (Days 54–60)",
        focus: "Targeted Outreach & Interview Conversion",
        tasks: [
          "Optimize LinkedIn headline: 'MIS Analyst | Advanced Excel | Financial & Sales Modeling'.",
          "Send 10 targeted cold emails daily to HR heads and Finance Controllers using the templates below.",
          "Reach out to mid-sized CA and accounting firms for fast immediate hiring.",
          "Practice the Top 8 Corporate Excel Test Questions under a 20-minute timer."
        ],
        milestone: "Secure 3 to 5 interview screening calls and clear the practical Excel assessment on day one."
      }
    ],
    proTip: "Never send just a PDF resume. Include: 'P.S. I built an interactive Sales MIS & Payroll Model in Excel. You can view the live interactive file here: [Link]'. Your interview call rate jumps by 300%."
  }
];

const WHAT_COMPANIES_ALWAYS_WANT = [
  {
    id: "test-1",
    title: "The VLOOKUP / XLOOKUP Exact Match & Duplicate Trap",
    category: "Lookups",
    frequency: "Appears in 98% of Excel Tests",
    scenario: "You are given two sheets: 'Employees' (ID, Name, Dept) and 'Salaries' (ID, CTC). The recruiter asks you to bring CTC into the Employees sheet, but some IDs in the lookup sheet are repeated or formatted as text.",
    whatRecruitersTest: "1) Did you remember the 4th argument 0/FALSE? 2) Did you lock the table range with $ (F4)? 3) Did you notice if IDs have trailing spaces? 4) Do you know XLOOKUP or INDEX+MATCH handles left columns better?",
    winningFormula: "=XLOOKUP(TRIM(A2), Salaries!$A$2:$A$500, Salaries!$D$2:$D$500, \"Not Found\")",
    fallbackFormula: "=IFERROR(VLOOKUP(TRIM(A2), Salaries!$A$2:$D$500, 4, FALSE), \"Not Found\")",
    mistakesToAvoid: "Leaving the 4th argument blank (defaults to approximate match and pulls wrong salaries), forgetting to lock the table ($A$2:$D$500), and not trimming input cells."
  },
  {
    id: "test-2",
    title: "Multi-Criteria SUMIFS with Dynamic Date Ranges",
    category: "Aggregations",
    frequency: "Appears in 92% of Excel Tests",
    scenario: "The Director wants to know total sales generated by the 'North' region between '01-Jan-2024' and '31-Mar-2024' (Q1) for transactions greater than ₹50,000.",
    whatRecruitersTest: "Can you construct SUMIFS syntax correctly (sum_range comes FIRST, not last like SUMIF) and correctly quote comparison operators with date cell references (\">=\"&StartDate).",
    winningFormula: "=SUMIFS(Sales!$E:$E, Sales!$B:$B, \"North\", Sales!$C:$C, \">=\"&DATE(2024,1,1), Sales!$C:$C, \"<=\"&DATE(2024,3,31), Sales!$E:$E, \">50000\")",
    fallbackFormula: "=SUMPRODUCT((Sales!$B$2:$B$1000=\"North\")*(Sales!$C$2:$C$1000>=DATE(2024,1,1))*(Sales!$C$2:$C$1000<=DATE(2024,3,31))*(Sales!$E$2:$E$1000>50000)*(Sales!$E$2:$E$1000))",
    mistakesToAvoid: "Writing \">=DATE(...)\" inside quotes without the ampersand (&), which breaks Excel syntax, or mixing up range sizes."
  },
  {
    id: "test-3",
    title: "Pivot Table Month-over-Month Grouping & % Growth",
    category: "Reporting",
    frequency: "Appears in 89% of Excel Tests",
    scenario: "Given 15,000 raw sales transaction dates and amounts, build a summary report showing Monthly Revenue and the Month-over-Month (MoM) Growth percentage.",
    whatRecruitersTest: "Can you group daily dates into Months/Quarters without writing formulas, and do you know how to use 'Show Values As > % Difference From > Previous' in Pivot Tables?",
    winningFormula: "Right click Date in Pivot > Group by Months & Years. Add Sales Amount twice to Values > Set 2nd Amount to 'Show Values As' > '% Difference From' > Base Item: '(previous)'.",
    fallbackFormula: "=(B3-B2)/B2 formatted as Percentage (%)",
    mistakesToAvoid: "Manually typing formulas beside a pivot table that break when slicers or filters update."
  },
  {
    id: "test-4",
    title: "Cleaning Corrupted ERP / Tally Data (Spaces & Text Numbers)",
    category: "Data Hygiene",
    frequency: "Appears in 95% of Excel Tests",
    scenario: "Tally or SAP exported numbers with leading spaces and currency symbols (' ₹ 45,000 '), causing =SUM() to return 0 or miss numbers entirely.",
    whatRecruitersTest: "Do you understand why Excel treats these as text, and can you clean 1,000 rows in 30 seconds?",
    winningFormula: "=VALUE(SUBSTITUTE(SUBSTITUTE(TRIM(A2), \"₹\", \"\"), \",\", \"\"))",
    fallbackFormula: "Copy an empty cell with number 1 > Select column > Alt + E + S + M (Paste Special Multiply).",
    mistakesToAvoid: "Trying to manually backspace cells one by one or not noticing green error triangles on cell corners."
  },
  {
    id: "test-5",
    title: "Executive Error Masking with IFERROR",
    category: "Presentation",
    frequency: "Appears in 85% of Excel Tests",
    scenario: "Your lookup sheet generates some #N/A (unmatched products) and division by zero #DIV/0! in margin calculation for new items with zero cost.",
    whatRecruitersTest: "A report with #N/A and #DIV/0! looks unprofessional and broken to senior executives. Recruiters test if you know how to wrap calculations gracefully.",
    winningFormula: "=IFERROR((Revenue - Cost) / Revenue, 0)",
    fallbackFormula: "=IF(Revenue=0, 0, (Revenue-Cost)/Revenue)",
    mistakesToAvoid: "Leaving raw Excel error codes on printable or executive summary tabs."
  },
  {
    id: "test-6",
    title: "Cell Reference Locking ($) with F4 Key",
    category: "Core Mechanics",
    frequency: "Appears in 90% of Excel Tests",
    scenario: "Calculate GST (18%) for 200 items where the 18% rate is stored in cell $B$1. Candidate drags formula down and GST calculation becomes 0 after row 1.",
    whatRecruitersTest: "Do you understand Absolute Reference ($B$1) vs Mixed Reference ($B1 or B$1) vs Relative Reference (B1)?",
    winningFormula: "=C2 * $B$1 (Press F4 once on B1 to lock both row and column)",
    fallbackFormula: "=C2 * 18%",
    mistakesToAvoid: "Dragging formulas down without locking the reference cell, causing the multiplier to drift down into empty cells."
  },
  {
    id: "test-7",
    title: "Nested Decisions & Tiered Tax / Commission Slabs",
    category: "Logical Logic",
    frequency: "Appears in 88% of Excel Tests",
    scenario: "Sales commission structure: <₹1 Lakh = 2%, ₹1L to ₹3L = 5%, >₹3L = 8%. Calculate incentive for 100 sales reps.",
    whatRecruitersTest: "Do you know how to build a clean =IFS() or nested =IF() formula without reverse logic errors?",
    winningFormula: "=IFS(A2>300000, A2*0.08, A2>=100000, A2*0.05, TRUE, A2*0.02)",
    fallbackFormula: "=IF(A2>300000, A2*0.08, IF(A2>=100000, A2*0.05, A2*0.02))",
    mistakesToAvoid: "Writing conditions in the wrong order (e.g. checking >100000 first will trap all values above 300000 and calculate the wrong rate)."
  },
  {
    id: "test-8",
    title: "Deduplication & Data Integrity Verification",
    category: "Data Integrity",
    frequency: "Appears in 84% of Excel Tests",
    scenario: "Check if customer invoice numbers contain duplicate payments before releasing vendor payments.",
    whatRecruitersTest: "Can you flag duplicate entries with Conditional Formatting or COUNTIF before taking destructive action with Remove Duplicates?",
    winningFormula: "=IF(COUNTIF($A$2:$A$1000, A2) > 1, \"DUPLICATE ALERT\", \"OK\")",
    fallbackFormula: "Select Column A > Alt + H + L + H + D (Highlight Duplicate Values)",
    mistakesToAvoid: "Immediately deleting duplicates without verifying why they were duplicated or checking secondary columns like date."
  }
];

const PORTFOLIO_BLUEPRINTS = [
  {
    id: "proj-1",
    title: "Executive Sales MIS & Performance Dashboard",
    category: "MIS & Business Analytics",
    difficulty: "Intermediate to Advanced",
    forRoles: "MIS Executive, Business Analyst, Sales Operations Analyst",
    summary: "An interactive, C-suite dashboard summarizing multi-region revenue, target achievement %, month-over-month growth, and sales rep leaderboard with dynamic slicers.",
    keyColumnsNeeded: [
      "Transaction ID", "Invoice Date", "Sales Rep Name", "Region (North/South/East/West)", "Product Category", "Units Sold", "Unit Price", "Gross Revenue", "Target Quota", "Achievement %"
    ],
    essentialFormulas: [
      "=SUMIFS(Revenue, Region, SlicerRegion, Date, \">=\"&StartDate)",
      "=IFERROR((Actual - Target) / Target, 0)",
      "=RANK(ActualSales, $SalesRange, 0)",
      "=XLOOKUP(RepName, TargetTable[Name], TargetTable[Quota])"
    ],
    presentationRules: [
      "Tab 1 must be named 'Executive Summary' — no raw data on this tab.",
      "Include 4 high-impact KPI summary cards at top (Total Revenue, Quota Attainment %, Top Region, Top Sales Rep).",
      "Hide all worksheet gridlines on the dashboard tab (View > uncheck Gridlines).",
      "Add 2 linked slicers (Region and Product Category) connected to 2 pivot charts."
    ],
    interviewPitch: "'In this project, I engineered a dynamic Sales MIS Model that consolidates 5,000 monthly transactions into an interactive 1-page executive view. Management can filter by region and quarter, and instantly see quota attainment and margin variances without waiting for manual reports.'"
  },
  {
    id: "proj-2",
    title: "Automated Employee Payroll & Statutory Compliance Register",
    category: "HR & Accounting",
    difficulty: "Intermediate",
    forRoles: "Payroll Executive, Accounts Assistant, HR Operations Executive",
    summary: "Complete corporate payroll workbook that calculates employee earnings, statutory deductions (PF 12%, ESIC 0.75%, Professional Tax, TDS), and generates printable payslips.",
    keyColumnsNeeded: [
      "Emp ID", "Employee Name", "Department", "Bank Account", "PAN", "Days Worked", "Basic Pay", "HRA (40%)", "Conveyance", "Gross Pay", "PF (12%)", "ESIC (0.75%)", "TDS", "Total Deductions", "Net Payable"
    ],
    essentialFormulas: [
      "=ROUND(Basic * 0.40, 0) — HRA Calculation",
      "=IF(Basic <= 15000, Basic * 0.12, 1800) — PF Statutory Cap",
      "=IF(Gross <= 21000, ROUNDUP(Gross * 0.0075, 0), 0) — ESIC Threshold",
      "=Gross - (PF + ESIC + PT + TDS) — Net Payable"
    ],
    presentationRules: [
      "Include a dedicated 'Printable Payslip' tab where entering an Employee ID in cell C2 auto-populates the entire pay slip using VLOOKUP/XLOOKUP.",
      "Lock formula cells using sheet protection so payroll calculations cannot be accidentally overwritten.",
      "Format all currency values with the ₹ symbol and comma separators (₹#,##0)."
    ],
    interviewPitch: "'I built an automated payroll register that calculates statutory PF and ESIC deductions based on current Indian labor law thresholds. It features an automated payslip lookup where selecting an employee ID generates an audit-ready salary slip formatted for 1-click A4 printing.'"
  },
  {
    id: "proj-3",
    title: "FMCG Inventory Health & Automated Reorder Tracker",
    category: "Supply Chain & Retail",
    difficulty: "Intermediate",
    forRoles: "Inventory Analyst, Supply Chain Coordinator, Store Operations Executive",
    summary: "Stock management model that monitors opening inventory, goods received, sales issues, safety stock thresholds, and flags automated purchase reorders.",
    keyColumnsNeeded: [
      "SKU Code", "Item Description", "Category", "Unit of Measure", "Opening Stock", "Receipts (In)", "Issues (Out)", "Closing Stock", "Safety Stock Level", "Lead Time (Days)", "Reorder Status", "Recommended Order Qty"
    ],
    essentialFormulas: [
      "=Opening + Receipts - Issues — Closing Stock",
      "=IF(ClosingStock <= SafetyStock, \"REORDER NOW\", \"OPTIMAL\")",
      "=IF(Status=\"REORDER NOW\", (SafetyStock * 2) - ClosingStock, 0)",
      "=COUNTIF(StatusRange, \"REORDER NOW\") — High-priority shortage badge"
    ],
    presentationRules: [
      "Apply Conditional Formatting to color cells RED when closing stock falls below safety threshold.",
      "Include an 'Inventory Aging' column calculating days since last receipt using =TODAY() - LastReceiptDate.",
      "Provide a Top 10 Stock Out Risk table on the dashboard."
    ],
    interviewPitch: "'This inventory tracker prevents stock-outs by automatically comparing live closing balances against safety stock levels. It calculates exact reorder quantities based on supplier lead times and highlights shortage items with automated conditional formatting.'"
  },
  {
    id: "proj-4",
    title: "GST Reconciliation Model (GSTR-2B vs Purchase Register)",
    category: "Taxation & Finance",
    difficulty: "Advanced",
    forRoles: "Taxation Analyst, Accounts Executive, Financial Accountant",
    summary: "A robust financial reconciliation model that matches government GST portal GSTR-2B input tax credit records against internal purchase invoices to identify missing invoices and ITC mismatch.",
    keyColumnsNeeded: [
      "Vendor GSTIN", "Vendor Name", "Invoice No", "Invoice Date", "Taxable Value (Books)", "Taxable Value (2B)", "CGST", "SGST", "IGST", "Reconciliation Status", "ITC Eligible Flag"
    ],
    essentialFormulas: [
      "=A2&\"-\"&C2 — Unique Composite Key (GSTIN + Invoice)",
      "=XLOOKUP(CompositeKey, PortalData[Key], PortalData[Taxable], \"Missing in 2B\")",
      "=IF(ABS(BooksVal - PortalVal) <= 1, \"MATCHED\", \"AMOUNT MISMATCH\")",
      "=SUMIF(StatusRange, \"Missing in 2B\", TaxAmountRange) — At-Risk ITC Total"
    ],
    presentationRules: [
      "Add a 'Summary of Ineligible ITC' card calculating tax credit that cannot be claimed this month.",
      "Use Data Validation to allow selecting vendors from a drop-down list to audit vendor-specific mismatches.",
      "Document assumptions and statutory limits in a dedicated 'ReadMe' tab."
    ],
    interviewPitch: "'I designed a GST reconciliation workbook that compares company purchase books with government GSTR-2B data using composite keys. It flags missing invoices and value mismatches in seconds, saving hours of manual checking and preventing ineligible tax credit penalties.'"
  }
];

const COMPANY_RESEARCH_PANEL = [
  {
    sector: "Big 4 & Global Accounting Advisory",
    badge: "PRESTIGE & FAST-TRACK CAREER",
    avgSalary: "₹4.5 – ₹8.5 LPA",
    targetRoles: ["MIS Analyst", "Data Assurance Associate", "Tax & Reporting Analyst", "Operations Specialist"],
    topCompanies: ["Deloitte", "Ernst & Young (EY)", "PwC", "KPMG", "BDO India", "Grant Thornton Bharat"],
    whatTheyLookFor: "Flawless speed on shortcuts, VLOOKUP/XLOOKUP without errors, Pivot Table data grouping, and high-standard spreadsheet presentation without gridlines.",
    searchQueryLinkedIn: "title:(\"MIS Analyst\" OR \"Data Analyst\") company:(Deloitte OR EY OR PwC OR KPMG)",
    naukriKeywords: "Advanced Excel, VLOOKUP, Pivot Table, MIS Executive, Big 4"
  },
  {
    sector: "Global Capability Centers (GCCs) & Shared Services",
    badge: "HIGHEST VOLUME OF HIRING",
    avgSalary: "₹3.8 – ₹6.5 LPA",
    targetRoles: ["MIS Executive", "Reporting Analyst", "Financial Operations Executive", "Supply Chain Analyst"],
    topCompanies: ["Accenture", "Genpact", "WNS Global", "EXL Service", "Concentrix", "Infosys BPM", "Cognizant"],
    whatTheyLookFor: "Handling large datasets (50,000+ rows), SUMIFS across multiple criteria, Power Query data transformation, and scheduled daily report distribution.",
    searchQueryLinkedIn: "title:(\"MIS Executive\" OR \"Reporting Analyst\") (\"Shared Services\" OR \"BPM\")",
    naukriKeywords: "MIS Reporting, Advanced Excel, Dashboards, Shared Services, Daily MIS"
  },
  {
    sector: "E-Commerce, FMCG & Retail Operations",
    badge: "FAST PACED & HIGH DEMAND",
    avgSalary: "₹3.5 – ₹6.0 LPA",
    targetRoles: ["Inventory Analyst", "Catalog Operations Executive", "Logistics Analyst", "Vendor Billing Executive"],
    topCompanies: ["Amazon India", "Flipkart", "Blinkit", "Zepto", "Reliance Retail", "D-Mart", "Nykaa"],
    whatTheyLookFor: "Data sanitization (TRIM, Flash Fill, Text-to-Columns), stock inventory tracking formulas, turnaround time calculations, and rapid error debugging.",
    searchQueryLinkedIn: "title:(\"Operations Analyst\" OR \"MIS\") (\"E-Commerce\" OR \"Retail\")",
    naukriKeywords: "Excel, Inventory Tracking, Vendor Reconciliation, MIS Operations"
  },
  {
    sector: "Banking, NBFC & Financial Services",
    badge: "STABLE & LONG-TERM GROWTH",
    avgSalary: "₹3.2 – ₹5.5 LPA",
    targetRoles: ["Credit Operations Executive", "Branch MIS Coordinator", "Loan Processing Analyst", "Collections MIS"],
    topCompanies: ["HDFC Bank", "ICICI Bank", "Kotak Mahindra", "Axis Bank", "Bajaj Finserv", "Tata Capital"],
    whatTheyLookFor: "EMI and loan amortization schedules (=PMT, =PV, =RATE), age overdue analysis with DATEDIF, and customer statement reconciliation.",
    searchQueryLinkedIn: "title:(\"MIS Executive\" OR \"Credit Operations\") (\"Banking\" OR \"NBFC\")",
    naukriKeywords: "Banking MIS, Loan Schedule, Advanced Excel, Financial Statements"
  },
  {
    sector: "Top Mid-Sized CA & Accounting Firms",
    badge: "BEST FOR FRESHERS & IMMEDIATE JOINING",
    avgSalary: "₹2.5 – ₹4.2 LPA",
    targetRoles: ["Accounts Executive", "Audit Assistant", "Tally & Excel Operator", "GST Compliance Executive"],
    topCompanies: ["Singhi & Co", "Haribhakti & Co", "S.R. Batliboi", "Local Registered CA Firms in Metro Cities"],
    whatTheyLookFor: "Immediate ability to take Tally exports into Excel, prepare Bank Reconciliation Statements (BRS), calculate GST and TDS, and build payroll sheets.",
    searchQueryLinkedIn: "\"CA Firm\" (\"Accounts Assistant\" OR \"Excel Executive\")",
    naukriKeywords: "CA Firm, Accounts Assistant, Excel Tally, GST TDS Reconciliation"
  }
];

const COLD_EMAIL_TEMPLATES = [
  {
    id: "email-1",
    name: "Cold Email to HR for MIS Executive / Data Analyst Role",
    tag: "BEST FOR HR INBOXES",
    subject: "Application: MIS & Data Analyst — Proven Excel Modeling Skills ([Your Name])",
    body: `Dear [Hiring Manager Name / HR Team],

I noticed [Company Name] is expanding its analytics and operations team, and I am writing to apply for the [MIS Executive / Junior Data Analyst] role.

Rather than just listing Excel on my resume, I have built real corporate models that solve day-to-day office challenges:
• Automated Sales MIS & KPI Dashboard: Consolidating 5,000+ transaction rows with dynamic slicers and run-rate variance analysis.
• Statutory Payroll & Deduction Engine: Complete Basic, HRA, PF (12%), and ESIC (0.75%) automated salary register.
• Clean ERP Data Sanitizer: Eliminating ghost spaces, text-stored numbers, and duplicates in under 3 minutes.

You can inspect my interactive Excel portfolio workbooks directly here:
👉 [Your Portfolio Link / Google Drive View Link]

I am thoroughly proficient in XLOOKUP, INDEX+MATCH, multi-criteria SUMIFS, Pivot Tables, and keyboard-first speed (mouse-free). I would welcome a 15-minute conversation or a practical Excel screening test to prove my capabilities.

Thank you for your time and consideration.

Warm regards,

[Your Name]
[Your Phone Number]
[Your LinkedIn Profile Link]
[Your City, India]`
  },
  {
    id: "email-2",
    name: "Direct LinkedIn DM to Finance Controller / Operations Head",
    tag: "HIGH RESPONSE RATE (DIRECT TO MANAGER)",
    subject: "LinkedIn Message (150 words)",
    body: `Hi [Manager Name],

I came across your profile and admire the scale at which your team manages operations at [Company Name].

I specialize in building clean, error-free Excel MIS models that eliminate manual reporting hours. Recently, I designed an interactive Sales MIS Dashboard and a GST/Vendor Reconciliation workbook that automatically flags invoice mismatches and calculates statutory metrics.

Here is a quick 1-click view of my portfolio:
👉 [Your Portfolio Link]

If your team currently needs someone who can hit the ground running with advanced lookups, SUMIFS, and automated data cleaning without requiring training, I would love to connect.

Best regards,
[Your Name]
[Your Phone Number]`
  },
  {
    id: "email-3",
    name: "Strategic Follow-Up Email (Sent 4 Days After Application)",
    tag: "DOUBLES INTERVIEW CALLS",
    subject: "Following up on MIS Analyst application — [Your Name]",
    body: `Dear [Hiring Manager Name],

I hope you are having a productive week.

I am following up on my application submitted on [Day of application] for the [MIS Executive / Data Analyst] position at [Company Name].

To demonstrate my readiness for your team's workflow, I took the initiative to build a quick sample model demonstrating automated monthly sales and margin reporting:
👉 [Link to Sample Workbook or Portfolio]

I am eager to contribute to [Company Name]'s reporting efficiency and am ready to take any practical Excel assessment test at your convenience.

Thank you again for your time and guidance.

Warm regards,

[Your Name]
[Your Phone Number]`
  },
  {
    id: "email-4",
    name: "Cold Pitch for Remote / Freelance Spreadsheet Work",
    tag: "FOR FREELANCING & CLIENTS",
    subject: "Automating [Company Name]'s Excel reporting workflows",
    body: `Hi [Business Owner / Manager Name],

Do your team members spend hours every week manually copy-pasting numbers from Tally/SAP into Excel to prepare monthly reports?

I help businesses automate their spreadsheets so weekly reports update with 1 click:
1. Converting messy ERP exports into clean, formatted reports instantly.
2. Building automated Payroll slips, GST reconciliations, and Sales dashboards.
3. Eliminating formula errors (#N/A, #VALUE!) that cause calculation mistakes.

I would be glad to audit one of your current manual spreadsheets completely free of charge and show you how it can be automated.

Would you be open to a 10-minute chat this Thursday?

Best regards,

[Your Name]
Excel & MIS Specialist
[Your Portfolio Link]
[Your Phone / WhatsApp]`
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    CAREER_ROADMAP,
    WHAT_COMPANIES_ALWAYS_WANT,
    PORTFOLIO_BLUEPRINTS,
    COMPANY_RESEARCH_PANEL,
    COLD_EMAIL_TEMPLATES
  };
}
