// Excel Problem Solver & Formula Finder Knowledge Base
// Contains real-world Excel problems with dynamic formula generator, sample tables, step-by-step guides, and Hinglish tips.

const PROBLEM_SOLUTIONS = [
  {
    id: "prob-1",
    title: "Calculate Exact Age from Date of Birth",
    category: "Dates & Time",
    keywords: ["age", "calculate age", "dob", "date of birth", "years old", "datedif", "today", "umar kaise nikale"],
    description: "Calculate how many completed years old someone is based on their Date of Birth and today's date.",
    hinglishSummary: "Date of birth se aaj tak kitne saal hue hain, ye nikalne ke liye DATEDIF aur TODAY use karein.",
    defaultFormula: '=DATEDIF(B2, TODAY(), "Y")',
    template: '=DATEDIF({dob_cell}, TODAY(), "Y")',
    paramFields: [
      { key: "dob_cell", label: "Date of Birth Cell", default: "B2" }
    ],
    howItWorks: [
      "1. `TODAY()` returns the dynamic current system date (updates automatically every day).",
      "2. `DATEDIF(start_date, end_date, unit)` computes the difference between two dates.",
      "3. The unit `\"Y\"` specifies that you want completed whole years."
    ],
    sampleData: {
      headers: ["Name", "DOB", "Formula Result (Age)"],
      rows: [
        ["Rahul Sharma", "15-Aug-1995", "29"],
        ["Sneha Verma", "03-Nov-2001", "23"]
      ]
    },
    commonErrors: "Ensure the DOB cell is formatted as a true Excel Date, not stored as text.",
    alternatives: 'For age with months and days: `=DATEDIF(B2, TODAY(), "Y") & " yrs " & DATEDIF(B2, TODAY(), "YM") & " mos"`'
  },
  {
    id: "prob-2",
    title: "Sum Values with Multiple Conditions (SUMIFS)",
    category: "Math & Aggregations",
    keywords: ["sumifs", "sum with conditions", "multiple conditions", "sum if", "sum by region and status", "jodna do sharto ke sath"],
    description: "Calculate the total sum only for rows that meet two or more criteria (e.g. Region is 'North' AND Status is 'Delivered').",
    hinglishSummary: "Do ya do se zyada conditions match hone par hi numbers ko add karna ho toh SUMIFS use karein.",
    defaultFormula: '=SUMIFS(C2:C100, A2:A100, "North", B2:B100, "Delivered")',
    template: '=SUMIFS({sum_range}, {range1}, "{crit1}", {range2}, "{crit2}")',
    paramFields: [
      { key: "sum_range", label: "Values to Sum Range", default: "C2:C100" },
      { key: "range1", label: "Condition 1 Range", default: "A2:A100" },
      { key: "crit1", label: "Condition 1 Value", default: "North" },
      { key: "range2", label: "Condition 2 Range", default: "B2:B100" },
      { key: "crit2", label: "Condition 2 Value", default: "Delivered" }
    ],
    howItWorks: [
      "1. The first parameter is ALWAYS the column you want to sum (`C2:C100`).",
      "2. Next comes the first condition column (`A2:A100`) and the criteria (`\"North\"`).",
      "3. Then the second condition column (`B2:B100`) and criteria (`\"Delivered\"`).",
      "4. Only rows where BOTH conditions match will be summed."
    ],
    sampleData: {
      headers: ["Region (A)", "Status (B)", "Sales (C)"],
      rows: [
        ["North", "Delivered", "5,000  ✓"],
        ["North", "Pending", "2,000  (Skipped)"],
        ["South", "Delivered", "3,500  (Skipped)"],
        ["North", "Delivered", "4,200  ✓"]
      ]
    },
    commonErrors: "All ranges (`C2:C100`, `A2:A100`, `B2:B100`) must have the EXACT same number of rows, otherwise Excel gives `#VALUE!` error.",
    alternatives: "You can reference a cell instead of hardcoding text: `=SUMIFS(C2:C100, A2:A100, E1, B2:B100, E2)`"
  },
  {
    id: "prob-3",
    title: "Lookup from Right to Left (XLOOKUP or INDEX/MATCH)",
    category: "Lookup & Reference",
    keywords: ["vlookup left", "lookup left", "index match", "xlookup", "right to left", "vlookup reverse", "piche se dhoondhna"],
    description: "Traditional VLOOKUP cannot look to the left. Learn how to search a column and fetch data from a column to its left.",
    hinglishSummary: "VLOOKUP sirf right me dhoondh sakta hai. Left side ka data laane ke liye modern XLOOKUP ya INDEX-MATCH lagayein.",
    defaultFormula: '=XLOOKUP(A2, C2:C100, B2:B100, "Not Found")',
    template: '=XLOOKUP({search_cell}, {search_col}, {return_col}, "Not Found")',
    paramFields: [
      { key: "search_cell", label: "Search Value Cell", default: "A2" },
      { key: "search_col", label: "Lookup Column", default: "C2:C100" },
      { key: "return_col", label: "Return Column (To the left)", default: "B2:B100" }
    ],
    howItWorks: [
      "1. `XLOOKUP` doesn't care about column position: simply provide the lookup array and the return array.",
      "2. It searches `C2:C100` for the value in `A2` and returns the item from `B2:B100` in the same row.",
      "3. The 4th argument `\"Not Found\"` prevents `#N/A` errors cleanly."
    ],
    sampleData: {
      headers: ["Return: Emp Name (B)", "Lookup: Emp ID (C)", "Search Value (A2)", "Result"],
      rows: [
        ["Aditi Rao", "ID-901", "ID-902", "Vikram Sen"],
        ["Vikram Sen", "ID-902", "", ""]
      ]
    },
    commonErrors: "If using older Excel (2019 or earlier), use INDEX/MATCH: `=INDEX(B2:B100, MATCH(A2, C2:C100, 0))`.",
    alternatives: 'INDEX/MATCH formula: `=INDEX(B2:B100, MATCH(A2, C2:C100, 0))`'
  },
  {
    id: "prob-4",
    title: "Find and Highlight Duplicate Values in a Column",
    category: "Data Cleaning",
    keywords: ["duplicates", "find duplicate", "highlight duplicates", "duplicate values", "repeat data", "nakal pakadna"],
    description: "Identify repeated entries in a customer list, phone number column, or invoice list.",
    hinglishSummary: "Ek hi column me do baar aane wale data (duplicates) ko identify ya highlight karein.",
    defaultFormula: '=IF(COUNTIF(A:A, A2) > 1, "Duplicate", "Unique")',
    template: '=IF(COUNTIF({col_range}, {cell}) > 1, "Duplicate", "Unique")',
    paramFields: [
      { key: "col_range", label: "Full Column Range", default: "A:A" },
      { key: "cell", label: "Active Cell", default: "A2" }
    ],
    howItWorks: [
      "1. `COUNTIF(A:A, A2)` counts how many times the value of `A2` appears in the entire column A.",
      "2. If the count is strictly greater than 1, `IF` returns 'Duplicate'.",
      "3. If it appears only once, it returns 'Unique'."
    ],
    sampleData: {
      headers: ["Email (A)", "Status Formula"],
      rows: [
        ["user@gmail.com", "Duplicate"],
        ["test@yahoo.com", "Unique"],
        ["user@gmail.com", "Duplicate"]
      ]
    },
    commonErrors: "Invisible spaces at the end of words can make identical text look unique to Excel. Wrap with `=TRIM(A2)` if needed.",
    alternatives: "No-formula method: Select column ➔ Home tab ➔ Conditional Formatting ➔ Highlight Cells Rules ➔ Duplicate Values."
  },
  {
    id: "prob-5",
    title: "Extract First Name from Full Name",
    category: "Text Manipulation",
    keywords: ["first name", "extract name", "split name", "naam alag karna", "left find space", "text split"],
    description: "Extract only the first name from strings like 'Sachin Tendulkar' or 'Dr. APJ Kalam'.",
    hinglishSummary: "Poore naam me se sirf pehla naam (First Name) nikalne ka formula.",
    defaultFormula: '=LEFT(A2, FIND(" ", A2) - 1)',
    template: '=LEFT({name_cell}, FIND(" ", {name_cell}) - 1)',
    paramFields: [
      { key: "name_cell", label: "Full Name Cell", default: "A2" }
    ],
    howItWorks: [
      "1. `FIND(\" \", A2)` locates the character position of the very first space.",
      "2. We subtract 1 (`- 1`) so that the space character itself is not included.",
      "3. `LEFT(A2, ...)` extracts all characters from the beginning up to that space position."
    ],
    sampleData: {
      headers: ["Full Name (A)", "First Name Result"],
      rows: [
        ["Rohit Sharma", "Rohit"],
        ["MS Dhoni", "MS"]
      ]
    },
    commonErrors: "If a name has no space (single name like 'Prince'), `FIND` returns `#VALUE!`. Bulletproof formula: `=LEFT(A2, FIND(\" \", A2 & \" \") - 1)`.",
    alternatives: "Modern Excel 365: `=TEXTBEFORE(A2, \" \")` or Shortcut **Ctrl + E** (Flash Fill)."
  },
  {
    id: "prob-6",
    title: "Extract Domain or Username from Email Address",
    category: "Text Manipulation",
    keywords: ["extract domain", "email extract", "email to domain", "mid find @", "split email", "email se domain alag karna"],
    description: "Extract the domain (e.g. 'gmail.com' or 'company.org') from an email address.",
    hinglishSummary: "Email address me se '@' ke baad ka company/domain name nikalna.",
    defaultFormula: '=MID(A2, FIND("@", A2) + 1, LEN(A2))',
    template: '=MID({email_cell}, FIND("@", {email_cell}) + 1, LEN({email_cell}))',
    paramFields: [
      { key: "email_cell", label: "Email Address Cell", default: "A2" }
    ],
    howItWorks: [
      "1. `FIND(\"@\", A2)` finds the exact position number of the '@' sign.",
      "2. Adding 1 (`+ 1`) starts the extraction right after '@'.",
      "3. `MID(A2, start, length)` cuts the remaining characters to the end of the email."
    ],
    sampleData: {
      headers: ["Email (A)", "Domain Extracted"],
      rows: [
        ["contact@microsoft.com", "microsoft.com"],
        ["support@google.com", "google.com"]
      ]
    },
    commonErrors: "Ensure cell contains a valid '@' symbol. Use `IFERROR` around the formula if some rows are empty.",
    alternatives: "Modern Excel 365: `=TEXTAFTER(A2, \"@\")`"
  },
  {
    id: "prob-7",
    title: "Sum Values Between Two Dates",
    category: "Dates & Time",
    keywords: ["sum between dates", "date range sum", "sumifs dates", "sales between two dates", "do tareekhon ke beech ka sum"],
    description: "Calculate total revenue or sales made between a Start Date and an End Date.",
    hinglishSummary: "Do tareekh (start date aur end date) ke beech kitni sale hui, ye nikalne ke liye SUMIFS me >= aur <= lagayein.",
    defaultFormula: '=SUMIFS(C2:C100, A2:A100, ">=" & E1, A2:A100, "<=" & E2)',
    template: '=SUMIFS({sum_range}, {date_col}, ">=" & {start_date}, {date_col}, "<=" & {end_date})',
    paramFields: [
      { key: "sum_range", label: "Amount Column", default: "C2:C100" },
      { key: "date_col", label: "Date Column", default: "A2:A100" },
      { key: "start_date", label: "Start Date Cell", default: "E1" },
      { key: "end_date", label: "End Date Cell", default: "E2" }
    ],
    howItWorks: [
      "1. `\">=\" & E1` concatenates the greater-than-or-equal operator with your Start Date cell.",
      "2. `\"<=\" & E2` creates the less-than-or-equal condition for your End Date cell.",
      "3. `SUMIFS` adds up values in `C2:C100` only where the date falls inside the inclusive window."
    ],
    sampleData: {
      headers: ["Date (A)", "Sales (C)", "Start: 01-Jan (E1)", "End: 31-Jan (E2)"],
      rows: [
        ["10-Jan-2024", "1,500", "Total Jan Sales:", "4,500"],
        ["25-Jan-2024", "3,000", "", ""],
        ["05-Feb-2024", "2,200 (Excluded)", "", ""]
      ]
    },
    commonErrors: "Always put the operator in quotes and use ampersand: `\">=\" & E1`. Do NOT write `\" >= E1 \"`.",
    alternatives: "For hardcoded dates: `=SUMIFS(C2:C100, A2:A100, \">=2024-01-01\", A2:A100, \"<=2024-01-31\")`"
  },
  {
    id: "prob-8",
    title: "Hide Ugly Errors (#N/A, #DIV/0!) with IFERROR",
    category: "Error Fixing",
    keywords: ["iferror", "na error", "div 0 error", "hide error", "blank if error", "error kaise chupaye", "value error"],
    description: "Make your worksheets professional by displaying a clean message or leaving cells blank instead of ugly formula error codes.",
    hinglishSummary: "Formula me aane wale #N/A ya #DIV/0! errors ki jagah blank ya custom text dikhane ke liye IFERROR lagayein.",
    defaultFormula: '=IFERROR(VLOOKUP(A2, E:F, 2, 0), "Not Found")',
    template: '=IFERROR({formula}, "{fallback_text}")',
    paramFields: [
      { key: "formula", label: "Your Original Formula", default: "VLOOKUP(A2, E:F, 2, 0)" },
      { key: "fallback_text", label: "Message if Error Occurs (or leave empty)", default: "Not Found" }
    ],
    howItWorks: [
      "1. `IFERROR` evaluates your formula first.",
      "2. If the formula succeeds normally, it outputs the calculation result.",
      "3. If any error (`#N/A`, `#DIV/0!`, `#VALUE!`, `#REF!`) occurs, it cleanly shows the fallback value."
    ],
    sampleData: {
      headers: ["Lookup ID (A)", "Standard VLOOKUP", "Wrapped with IFERROR"],
      rows: [
        ["999 (Missing)", "#N/A", "Not Found (Clean!)"],
        ["101 (Valid)", "₹45,000", "₹45,000"]
      ]
    },
    commonErrors: "If you want the cell to be completely blank when an error happens, use `\"\"` as the fallback argument.",
    alternatives: "If using XLOOKUP, error handling is already built-in via the 4th argument: `=XLOOKUP(A2, E:E, F:F, \"Not Found\")`"
  },
  {
    id: "prob-9",
    title: "Calculate Percentage Growth or Change",
    category: "Math & Aggregations",
    keywords: ["percentage increase", "percentage change", "growth formula", "pct change", "profit growth", "percentage nikalna"],
    description: "Calculate the percentage increase or decrease between New Value and Old Value.",
    hinglishSummary: "Pichhle saal se is saal kitna percent growth hua: (New - Old) / Old.",
    defaultFormula: '=(B2 - A2) / A2',
    template: '=({new_val} - {old_val}) / {old_val}',
    paramFields: [
      { key: "old_val", label: "Old / Baseline Value", default: "A2" },
      { key: "new_val", label: "New / Current Value", default: "B2" }
    ],
    howItWorks: [
      "1. `(New - Old)` calculates the absolute difference.",
      "2. Dividing by `Old` computes the proportion relative to the starting number.",
      "3. Format the cell as **Percentage (%)** in the Home ribbon to display as `+25.0%` or `-10.5%`."
    ],
    sampleData: {
      headers: ["2023 Sales (A)", "2024 Sales (B)", "Formula Result", "Formatted as %"],
      rows: [
        ["10,000", "12,500", "0.25", "+25.0%"],
        ["8,000", "6,000", "-0.25", "-25.0%"]
      ]
    },
    commonErrors: "If the old value is 0 or blank, you will get a `#DIV/0!` error. Safeguard it: `=IF(A2=0, 0, (B2-A2)/A2)`.",
    alternatives: 'Alternative shorthand: `=(B2 / A2) - 1`'
  },
  {
    id: "prob-10",
    title: "Remove Accidental Leading, Trailing & Extra Spaces",
    category: "Data Cleaning",
    keywords: ["trim", "remove extra spaces", "clean spaces", "leading space", "trailing space", "extra space hatana"],
    description: "Data copied from websites, ERPs, or emails often contains ghost spaces that break VLOOKUPs.",
    hinglishSummary: "Text ke aage, piche ya beech me aane wale extra faltu spaces ko ek second me hatayein.",
    defaultFormula: '=TRIM(CLEAN(A2))',
    template: '=TRIM(CLEAN({cell}))',
    paramFields: [
      { key: "cell", label: "Dirty Text Cell", default: "A2" }
    ],
    howItWorks: [
      "1. `TRIM` removes all leading and trailing spaces, and reduces internal multiple spaces to a single space.",
      "2. `CLEAN` strips non-printable ASCII characters (common in web exports).",
      "3. Together, they guarantee clean text that lookups can match perfectly."
    ],
    sampleData: {
      headers: ["Raw Imported Text", "Cleaned Result"],
      rows: [
        ["\"  John   Doe   \"", "\"John Doe\""],
        ["\"  P10992  \"", "\"P10992\""]
      ]
    },
    commonErrors: "Web pages often use non-breaking spaces (ASCII 160) which standard `TRIM` misses. To kill them: `=TRIM(SUBSTITUTE(A2, CHAR(160), \" \"))`.",
    alternatives: "Use Power Query's 'Trim' & 'Clean' transform options for entire columns."
  },
  {
    id: "prob-11",
    title: "Extract Distinct / Unique Values from a Column (UNIQUE)",
    category: "Advanced & Dynamic",
    keywords: ["unique values", "distinct items", "remove duplicates formula", "unique list", "unique filter", "alag alag items nikalna"],
    description: "Generate a dynamic list of unique items from a column without manual copy-pasting.",
    hinglishSummary: "Ek lambi list me se bina duplicate ke distinct items ki nayi list nikalne ke liye =UNIQUE() lagayein.",
    defaultFormula: '=UNIQUE(A2:A100)',
    template: '=UNIQUE({range})',
    paramFields: [
      { key: "range", label: "Source Column Range", default: "A2:A100" }
    ],
    howItWorks: [
      "1. `UNIQUE(array)` scans through the list and automatically spills distinct items down the sheet.",
      "2. If source data changes, the unique list auto-refreshes immediately."
    ],
    sampleData: {
      headers: ["Sales Reps (A)", "Formula =UNIQUE(A2:A6)"],
      rows: [
        ["Amit", "Amit"],
        ["Sneha", "Sneha"],
        ["Amit", "Rohan"],
        ["Rohan", ""],
        ["Sneha", ""]
      ]
    },
    commonErrors: "Ensure there are empty cells below the formula cell, otherwise you will trigger a `#SPILL!` error.",
    alternatives: "Combine with SORT to get an alphabetized unique list: `=SORT(UNIQUE(A2:A100))`."
  },
  {
    id: "prob-12",
    title: "Calculate Working Days Excluding Weekends & Holidays",
    category: "Dates & Time",
    keywords: ["networkdays", "working days", "business days", "exclude weekends", "holidays exclude", "chhuttiya hatakar working days"],
    description: "Calculate real turnaround time or project SLA duration between two dates without counting Saturdays, Sundays, or custom holidays.",
    hinglishSummary: "Do tareekhon ke beech weekends aur festival holidays hata kar kitne kaam ke din (working days) hue.",
    defaultFormula: '=NETWORKDAYS(A2, B2, $H$2:$H$10)',
    template: '=NETWORKDAYS({start_date}, {end_date}, {holiday_range})',
    paramFields: [
      { key: "start_date", label: "Start Date Cell", default: "A2" },
      { key: "end_date", label: "End Date Cell", default: "B2" },
      { key: "holiday_range", label: "Holidays List Range", default: "$H$2:$H$10" }
    ],
    howItWorks: [
      "1. Automatically excludes all Saturdays and Sundays.",
      "2. The 3rd argument is an optional list of holiday dates you define.",
      "3. Returns the exact count of net working days."
    ],
    sampleData: {
      headers: ["Task Start (A)", "Task End (B)", "Holidays (H)", "Working Days"],
      rows: [
        ["01-Jan-2024", "10-Jan-2024", "01-Jan (New Year)", "7 Days"]
      ]
    },
    commonErrors: "If your weekend is Friday-Saturday instead of Saturday-Sunday, use `=NETWORKDAYS.INTL(A2, B2, 7, $H$2:$H$10)`.",
    alternatives: "To find the completion date N working days from today: `=WORKDAY(A2, 10, $H$2:$H$10)`."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PROBLEM_SOLUTIONS };
}
