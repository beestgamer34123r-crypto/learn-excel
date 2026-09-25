// Excel Formulas Encyclopedia
// Complete guide to Excel formulas — syntax, use cases, examples, teacher explanations

const EXCEL_FORMULAS = [

  // ==================================================
  // 1. MATH & STATISTICAL FUNCTIONS
  // ==================================================
  {
    id: "f-math-1",
    name: "SUM",
    category: "Math & Statistical",
    syntax: "=SUM(number1, [number2], ...)",
    shortSyntax: "=SUM(A1:A10)",
    description: "Adds all numbers in a given range or list of values.",
    usedFor: "Totaling sales figures, salary sums, expense totals, GST amounts.",
    realExample: "=SUM(B2:B20) — adds all values from B2 to B20",
    exampleTable: {
      headers: ["Month", "Sales", "Formula", "Result"],
      rows: [
        ["Jan", "15000", "", ""],
        ["Feb", "22000", "", ""],
        ["Mar", "18000", "", ""],
        ["TOTAL", "", "=SUM(B2:B4)", "55000"]
      ]
    },
    teacherExplanation: "Yeh Excel ka sabse pehla aur sabse important formula hai! Jab bhi numbers ka total chahiye — salary, GST, sales — seedha SUM lagao. SUM(B2:B20) matlab B2 se B20 tak ke sab numbers add karo.",
    hinglishTip: "SUM = Total nikalna. Bas ek colon (:) se puri range de do!",
    commonErrors: "#VALUE! aata hai agar range me text mix ho — numbers hi honi chahiye.",
    difficulty: "Beginner",
    tags: ["total", "add", "sum", "aggregate"]
  },
  {
    id: "f-math-2",
    name: "AVERAGE",
    category: "Math & Statistical",
    syntax: "=AVERAGE(number1, [number2], ...)",
    shortSyntax: "=AVERAGE(B2:B20)",
    description: "Calculates the arithmetic mean (average) of a set of numbers.",
    usedFor: "Average salary, average marks, average monthly sales, performance metrics.",
    realExample: "=AVERAGE(C2:C30) — average salary of all employees",
    exampleTable: {
      headers: ["Employee", "Salary", "Formula", "Result"],
      rows: [
        ["Rahul", "30000", "", ""],
        ["Priya", "45000", "", ""],
        ["Amit", "25000", "", ""],
        ["Average", "", "=AVERAGE(B2:B4)", "33333"]
      ]
    },
    teacherExplanation: "AVERAGE formula automatically total karta hai aur count se divide kar deta hai. Manlo 3 employees ke salaries hain — 30000, 45000, 25000. AVERAGE(B2:B4) = (30000+45000+25000)/3 = 33333.",
    hinglishTip: "AVERAGE = sabka sum / kitne hain. Excel ye calculation khud karta hai!",
    commonErrors: "Empty cells AVERAGE me count nahi hote, lekin zero (0) cells count hote hain — dhyan rakho!",
    difficulty: "Beginner",
    tags: ["average", "mean", "performance", "statistics"]
  },
  {
    id: "f-math-3",
    name: "MIN",
    category: "Math & Statistical",
    syntax: "=MIN(number1, [number2], ...)",
    shortSyntax: "=MIN(B2:B100)",
    description: "Returns the smallest (minimum) value from a range of numbers.",
    usedFor: "Lowest salary, minimum stock, cheapest product price, lowest score.",
    realExample: "=MIN(D2:D50) — find the lowest price in product list",
    exampleTable: {
      headers: ["Product", "Price"],
      rows: [["Laptop", "45000"], ["Mouse", "500"], ["Keyboard", "1200"], ["MIN Price", "=MIN(B2:B4)"]]
    },
    teacherExplanation: "MIN formula ek range me se sabse chhota number dhoondta hai. Salary list me sabse kum salary, ya stock me sabse kum quantity — MIN se ek second me mil jata hai.",
    hinglishTip: "MIN = sabse kum value. Lowest salary, cheapest price!",
    commonErrors: "Text cells ko MIN ignore karta hai — sirf numbers consider hote hain.",
    difficulty: "Beginner",
    tags: ["minimum", "lowest", "smallest", "min"]
  },
  {
    id: "f-math-4",
    name: "MAX",
    category: "Math & Statistical",
    syntax: "=MAX(number1, [number2], ...)",
    shortSyntax: "=MAX(B2:B100)",
    description: "Returns the largest (maximum) value from a range of numbers.",
    usedFor: "Highest salary, maximum stock level, top sales figure, highest score.",
    realExample: "=MAX(C2:C100) — find the highest salary in organization",
    exampleTable: {
      headers: ["Employee", "Salary"],
      rows: [["Rahul", "30000"], ["Director", "150000"], ["Clerk", "20000"], ["MAX Salary", "=MAX(B2:B4)"]]
    },
    teacherExplanation: "MAX formula range me se sabse bada number deta hai. CEO ki salary kya hai, top sales konsa tha, highest score kaun laya — MAX turant bata deta hai.",
    hinglishTip: "MAX = sabse badi value. Highest salary, best score!",
    commonErrors: "MIN aur MAX me text cells automatically ignore hoti hain.",
    difficulty: "Beginner",
    tags: ["maximum", "highest", "largest", "max"]
  },
  {
    id: "f-math-5",
    name: "COUNT",
    category: "Math & Statistical",
    syntax: "=COUNT(value1, [value2], ...)",
    shortSyntax: "=COUNT(B2:B100)",
    description: "Counts how many cells in a range contain numeric values.",
    usedFor: "Count number of entries, how many employees, how many sales, how many invoices.",
    realExample: "=COUNT(C2:C50) — count how many salaries are filled",
    exampleTable: {
      headers: ["Employee", "Salary"],
      rows: [["Rahul", "30000"], ["Priya", ""], ["Amit", "25000"], ["Count", "=COUNT(B2:B4)"]]
    },
    teacherExplanation: "COUNT sirf numbers count karta hai. Agar column me kuch cells blank hain ya text hai, COUNT unhe ignore karega. Priya ka salary column blank hai toh COUNT = 2 dega (sirf Rahul aur Amit).",
    hinglishTip: "COUNT = kitne numbers hain. Blank aur text cells count NAHI hote!",
    commonErrors: "Text count karna ho toh COUNTA use karo. Sirf numbers chahiye toh COUNT.",
    difficulty: "Beginner",
    tags: ["count", "how many", "numeric", "entries"]
  },
  {
    id: "f-math-6",
    name: "COUNTA",
    category: "Math & Statistical",
    syntax: "=COUNTA(value1, [value2], ...)",
    shortSyntax: "=COUNTA(A2:A100)",
    description: "Counts ALL non-empty cells — numbers, text, errors, dates — anything that is not blank.",
    usedFor: "Count total employees (including names), count all entries regardless of type.",
    realExample: "=COUNTA(A2:A100) — count total employee names in column A",
    exampleTable: {
      headers: ["Employee", "Attendance"],
      rows: [["Rahul", "P"], ["Priya", "A"], ["", ""], ["Count", "=COUNTA(A2:A4)"]]
    },
    teacherExplanation: "COUNTA sabse kuch bhi count karta hai — text, number, date — bas cell blank nahi hona chahiye. Employee ki attendance sheet me sabka naam count karna ho, COUNTA use karo.",
    hinglishTip: "COUNTA = kuch bhi count karo — text ya number. COUNT sirf numbers ke liye!",
    commonErrors: "Error cells (#VALUE!, #N/A) bhi COUNTA count karta hai — careful rahein.",
    difficulty: "Beginner",
    tags: ["counta", "count all", "non-empty", "total entries"]
  },
  {
    id: "f-math-7",
    name: "COUNTBLANK",
    category: "Math & Statistical",
    syntax: "=COUNTBLANK(range)",
    shortSyntax: "=COUNTBLANK(B2:B50)",
    description: "Counts how many cells in a range are empty (blank).",
    usedFor: "Find how many employees have missing salary, how many fields are unfilled.",
    realExample: "=COUNTBLANK(C2:C30) — count employees with missing attendance data",
    exampleTable: {
      headers: ["Employee", "Salary"],
      rows: [["Rahul", "30000"], ["Priya", ""], ["Amit", ""], ["Blanks", "=COUNTBLANK(B2:B4)"]]
    },
    teacherExplanation: "COUNTBLANK un cells ko count karta hai jo bilkul khali hain. Data entry ke baad check karo ki kitni missing entries hain.",
    hinglishTip: "COUNTBLANK = kitni cells khali hain — missing data track karna!",
    commonErrors: "Formula result (empty string) wale cells COUNTBLANK me count nahi hote.",
    difficulty: "Beginner",
    tags: ["countblank", "empty", "missing", "blank cells"]
  },
  {
    id: "f-math-8",
    name: "COUNTIF",
    category: "Math & Statistical",
    syntax: "=COUNTIF(range, criteria)",
    shortSyntax: "=COUNTIF(B2:B50, \"Present\")",
    description: "Counts cells that meet ONE specific condition.",
    usedFor: "Count employees from a city, count Present/Absent, count items above a threshold.",
    realExample: "=COUNTIF(C2:C31, \"P\") — count present days in attendance sheet",
    exampleTable: {
      headers: ["Employee", "Attendance"],
      rows: [["Day 1", "P"], ["Day 2", "A"], ["Day 3", "P"], ["Count P", "=COUNTIF(B2:B4,\"P\")"]]
    },
    teacherExplanation: "COUNTIF ek condition ke saath count karta hai. Manlo Column B me P aur A hai attendance ke liye. COUNTIF(B2:B31, 'P') batayega ki employee kitne din Present tha. Simple aur powerful!",
    hinglishTip: "COUNTIF = condition ke saath count. Attendance, cities, categories — sab ke liye!",
    commonErrors: "Criteria case-insensitive hota hai. 'P' aur 'p' same maana jaata hai.",
    difficulty: "Intermediate",
    tags: ["countif", "conditional count", "attendance", "criteria"]
  },
  {
    id: "f-math-9",
    name: "COUNTIFS",
    category: "Math & Statistical",
    syntax: "=COUNTIFS(range1, criteria1, [range2, criteria2], ...)",
    shortSyntax: "=COUNTIFS(B:B,\"Delhi\",C:C,\">50000\")",
    description: "Counts rows that meet MULTIPLE conditions simultaneously.",
    usedFor: "Count Delhi employees earning above 50000, count Present females, multiple filter count.",
    realExample: "=COUNTIFS(C:C,\"Mumbai\",D:D,\">30000\") — Mumbai employees with salary > 30000",
    exampleTable: {
      headers: ["Employee", "City", "Salary"],
      rows: [["Rahul", "Mumbai", "35000"], ["Priya", "Delhi", "28000"], ["Amit", "Mumbai", "42000"], ["Count", "", "=COUNTIFS(B2:B4,\"Mumbai\",C2:C4,\">30000\")"]]
    },
    teacherExplanation: "COUNTIFS multiple conditions ke saath kaam karta hai. Manlo Mumbai ke employees jo 30,000 se zyada kamate hain — COUNTIFS(B:B,'Mumbai', C:C, '>30000'). Bahut powerful reporting tool!",
    hinglishTip: "COUNTIFS = bahut saari conditions ke saath count. S at the end means multiple Conditions!",
    commonErrors: "Har range same size honi chahiye. Alag size ranges error denge.",
    difficulty: "Intermediate",
    tags: ["countifs", "multiple conditions", "count", "filter"]
  },
  {
    id: "f-math-10",
    name: "SUMIF",
    category: "Math & Statistical",
    syntax: "=SUMIF(range, criteria, [sum_range])",
    shortSyntax: "=SUMIF(A:A,\"Delhi\",B:B)",
    description: "Sums values in one range where a corresponding range meets a condition.",
    usedFor: "Total sales for a specific city, total salary of a department, GST for one category.",
    realExample: "=SUMIF(C:C,\"Cash\",D:D) — total sales where payment mode is Cash",
    exampleTable: {
      headers: ["Invoice", "Mode", "Amount"],
      rows: [["INV001", "Cash", "5000"], ["INV002", "UPI", "3000"], ["INV003", "Cash", "8000"], ["Cash Total", "", "=SUMIF(B2:B4,\"Cash\",C2:C4)"]]
    },
    teacherExplanation: "SUMIF ek condition ke basis par sum karta hai. Cash payment ka total alag, UPI ka alag, Cheque ka alag — ek hi formula se! Aap ek hi SUMIF ko category wise report banana sikh jaoge.",
    hinglishTip: "SUMIF = condition ke saath total. City, department, category — sab ke liye total nikalo!",
    commonErrors: "Sum_range aur Range ki size same honi chahiye.",
    difficulty: "Intermediate",
    tags: ["sumif", "conditional sum", "category total", "criteria"]
  },
  {
    id: "f-math-11",
    name: "SUMIFS",
    category: "Math & Statistical",
    syntax: "=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)",
    shortSyntax: "=SUMIFS(D:D,B:B,\"Delhi\",C:C,\"Jan\")",
    description: "Sums values that match MULTIPLE conditions across different columns.",
    usedFor: "Delhi branch January sales, Male employees PF above 25000, multi-criteria reports.",
    realExample: "=SUMIFS(E:E,B:B,\"Mumbai\",C:C,\"Q1\") — Mumbai Q1 sales total",
    exampleTable: {
      headers: ["Branch", "Quarter", "Sales"],
      rows: [["Mumbai", "Q1", "150000"], ["Delhi", "Q1", "120000"], ["Mumbai", "Q2", "180000"], ["Mumbai Q1", "", "=SUMIFS(C2:C4,A2:A4,\"Mumbai\",B2:B4,\"Q1\")"]]
    },
    teacherExplanation: "SUMIFS SUMIF ka powerful version hai — multiple conditions support karta hai. Mumbai ka Q1 sales total nikalna ho: SUMIFS(Sales Column, Branch Column, 'Mumbai', Quarter Column, 'Q1'). MIS reports me ye daily use hota hai!",
    hinglishTip: "SUMIFS = bahut saari conditions ke saath sum. Multi-column filter karke total nikalo!",
    commonErrors: "SUMIFS me sum_range PEHLE aata hai (SUMIF se ulta — dhyan se!)",
    difficulty: "Intermediate",
    tags: ["sumifs", "multiple conditions", "sum", "mis report"]
  },
  {
    id: "f-math-12",
    name: "AVERAGEIF",
    category: "Math & Statistical",
    syntax: "=AVERAGEIF(range, criteria, [average_range])",
    shortSyntax: "=AVERAGEIF(B:B,\"Sales\",C:C)",
    description: "Calculates average of values where a corresponding range meets one condition.",
    usedFor: "Average salary of Sales department, average marks of passing students.",
    realExample: "=AVERAGEIF(C:C,\"Sales Dept\",D:D) — average salary of Sales department only",
    exampleTable: {
      headers: ["Employee", "Department", "Salary"],
      rows: [["Rahul", "Sales", "35000"], ["Priya", "HR", "30000"], ["Amit", "Sales", "42000"], ["Sales Avg", "", "=AVERAGEIF(B2:B4,\"Sales\",C2:C4)"]]
    },
    teacherExplanation: "AVERAGEIF ek condition ke basis par average nikalta hai. Sales team ka average salary kya hai, ya sirf Delhi office ka average — AVERAGEIF se ek formula me ho jata hai.",
    hinglishTip: "AVERAGEIF = condition ke saath average nikalna!",
    commonErrors: "Average_range me text cells ignore hote hain.",
    difficulty: "Intermediate",
    tags: ["averageif", "conditional average", "department", "criteria"]
  },
  {
    id: "f-math-13",
    name: "ROUND",
    category: "Math & Statistical",
    syntax: "=ROUND(number, num_digits)",
    shortSyntax: "=ROUND(C2, 2)",
    description: "Rounds a number to a specified number of decimal places.",
    usedFor: "GST calculation (round to 2 decimals), salary rounding, percentage display.",
    realExample: "=ROUND(B2*0.18, 2) — GST calculation rounded to 2 decimal places",
    exampleTable: {
      headers: ["Amount", "GST @18%", "Formula"],
      rows: [["15000", "2700.0000", "=ROUND(A2*0.18,2)"], ["7500.75", "1350.135", "=ROUND(A3*0.18,2)"]]
    },
    teacherExplanation: "GST calculate karte waqt 1350.135 jaisi values aati hain jo invoice me theek nahi lagti. ROUND(B2*0.18, 2) se exactly 2 decimal places me rounded value aati hai — invoice-ready!",
    hinglishTip: "ROUND(value, 2) = 2 decimal places pe round. ROUND(value, 0) = integer me round.",
    commonErrors: "ROUND, ROUNDUP, ROUNDDOWN teen alag functions hain — use case dekh kar choose karo.",
    difficulty: "Beginner",
    tags: ["round", "decimal", "gst", "rounding"]
  },
  {
    id: "f-math-14",
    name: "ROUNDUP",
    category: "Math & Statistical",
    syntax: "=ROUNDUP(number, num_digits)",
    shortSyntax: "=ROUNDUP(C2, 0)",
    description: "Always rounds a number UP (away from zero), regardless of whether next digit is below 5.",
    usedFor: "Billing calculations where you always round up (never give discount), packaging quantities.",
    realExample: "=ROUNDUP(C2/12, 0) — number of boxes needed, always round up",
    exampleTable: {
      headers: ["Units", "Per Box", "Boxes Needed"],
      rows: [["100", "12", "=ROUNDUP(A2/B2,0)"], ["145", "12", "=ROUNDUP(A3/B3,0)"]]
    },
    teacherExplanation: "Agar 145 items hain aur ek box me 12 items aate hain, toh 145/12 = 12.08. Hume 13 boxes chahiye honge (12 mein fit nahi honge). ROUNDUP(145/12, 0) = 13. Perfect!",
    hinglishTip: "ROUNDUP = hamesha upar round karo. Kam padding ya extra boxes calculate karne ke liye!",
    commonErrors: "ROUNDUP negative numbers ke saath opposite direction me kaam karta hai.",
    difficulty: "Intermediate",
    tags: ["roundup", "ceiling", "packaging", "billing"]
  },
  {
    id: "f-math-15",
    name: "INT",
    category: "Math & Statistical",
    syntax: "=INT(number)",
    shortSyntax: "=INT(B2/C2)",
    description: "Rounds a number DOWN to the nearest integer (removes decimal part).",
    usedFor: "Calculate complete months of experience, full working days, complete units.",
    realExample: "=INT(DATEDIF(B2,TODAY(),\"M\")/12) — complete years of experience",
    exampleTable: {
      headers: ["Value", "INT Result"],
      rows: [["7.9", "=INT(A2) → 7"], ["12.1", "=INT(A3) → 12"], ["-3.5", "=INT(A4) → -4"]]
    },
    teacherExplanation: "INT kisi bhi decimal number ka integer part deta hai — decimal hata deta hai. 7.9 mahine ka experience ho toh INT(7.9) = 7 — sirf pure mahine count hote hain.",
    hinglishTip: "INT = decimal part hatao, sirf pura number rakhho!",
    commonErrors: "INT hamesha neeche round karta hai. -3.5 ka INT = -4 (neeche ki taraf, -3 nahi).",
    difficulty: "Intermediate",
    tags: ["int", "integer", "floor", "truncate decimal"]
  },
  {
    id: "f-math-16",
    name: "MOD",
    category: "Math & Statistical",
    syntax: "=MOD(number, divisor)",
    shortSyntax: "=MOD(A2, 2)",
    description: "Returns the remainder after dividing a number by another (modulus operation).",
    usedFor: "Check even/odd rows, find remaining items after packaging, cycle calculations.",
    realExample: "=MOD(ROW(), 2) in conditional formatting — highlights every alternate row",
    exampleTable: {
      headers: ["Number", "Divisor", "Remainder (MOD)"],
      rows: [["10", "3", "=MOD(A2,B2) → 1"], ["15", "4", "=MOD(A3,B3) → 3"], ["20", "5", "=MOD(A4,B4) → 0"]]
    },
    teacherExplanation: "MOD bakiya (remainder) deta hai. 10 ko 3 se divide karo: 3*3=9, bakiya = 1. MOD(10,3) = 1. MOD(A,2)=0 matlab even row, =1 matlab odd row. Alternate row coloring ke liye ye trick use hoti hai!",
    hinglishTip: "MOD = bakiya (remainder). Even/odd check karna, packaging calculation!",
    commonErrors: "MOD(0, N) = 0 aur MOD(N, N) = 0 — poora divide hone par 0 aata hai.",
    difficulty: "Advanced",
    tags: ["mod", "remainder", "even odd", "packaging"]
  },
  {
    id: "f-math-17",
    name: "PRODUCT",
    category: "Math & Statistical",
    syntax: "=PRODUCT(number1, [number2], ...)",
    shortSyntax: "=PRODUCT(B2:B5)",
    description: "Multiplies all numbers in a range together.",
    usedFor: "Calculate compound interest factors, multiple rate multiplication.",
    realExample: "=PRODUCT(1.12, 1.08, 1.05) — compound growth factor",
    exampleTable: {
      headers: ["Rate Year 1", "Rate Year 2", "Product"],
      rows: [["1.12", "1.15", "=PRODUCT(A2:B2) → 1.288"]]
    },
    teacherExplanation: "PRODUCT sabhi numbers ko multiply karta hai. =PRODUCT(2,3,4) = 24. Compound rates multiply karne ke liye useful.",
    hinglishTip: "PRODUCT = multiply karo. SUM jaise, par addition ki jagah multiplication!",
    commonErrors: "Koi bhi zero value PRODUCT ko zero bana deta hai.",
    difficulty: "Intermediate",
    tags: ["product", "multiply", "multiplication", "compound"]
  },
  {
    id: "f-math-18",
    name: "SUBTOTAL",
    category: "Math & Statistical",
    syntax: "=SUBTOTAL(function_num, ref1, ...)",
    shortSyntax: "=SUBTOTAL(9, B2:B100)",
    description: "Calculates subtotals in a filtered list — ignores hidden/filtered rows. Function number 9=SUM, 1=AVERAGE, 2=COUNT.",
    usedFor: "Dynamic totals that update when filters are applied, filtered reports.",
    realExample: "=SUBTOTAL(9, D2:D100) — SUM that changes when you filter",
    exampleTable: {
      headers: ["Function #", "What it does"],
      rows: [["1", "AVERAGE"], ["2", "COUNT"], ["9", "SUM"], ["3", "COUNTA"], ["4", "MAX"], ["5", "MIN"]]
    },
    teacherExplanation: "Ye SUM se alag hai kyunki filter karne par bhi correct total deta hai! Agar aap filter lagao to sirf visible rows ka total deta hai. Reports me SUBTOTAL use karo, SUM nahi.",
    hinglishTip: "SUBTOTAL = filter ke saath kaam karne wala sum/count. Filter ke baad bhi sahi total!",
    commonErrors: "Hidden rows ignore karta hai, lekin manually hide ki hui rows bhi skip karta hai (function 100+ series se control hota hai).",
    difficulty: "Intermediate",
    tags: ["subtotal", "filter total", "dynamic sum", "filtered list"]
  },

  // ==================================================
  // 2. LOOKUP & REFERENCE FUNCTIONS
  // ==================================================
  {
    id: "f-lookup-1",
    name: "VLOOKUP",
    category: "Lookup & Reference",
    syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
    shortSyntax: "=VLOOKUP(A2, Sheet2!A:D, 3, 0)",
    description: "Searches for a value in the FIRST column of a table and returns a value from a specified column in the same row.",
    usedFor: "Find employee name from ID, get product price from code, get GST rate from HSN code.",
    realExample: "=VLOOKUP(E2, A:C, 3, 0) — find department name using Employee ID",
    exampleTable: {
      headers: ["Emp ID", "Name", "Department", "", "Lookup ID", "Result"],
      rows: [
        ["E001", "Rahul", "Sales", "", "E002", "=VLOOKUP(E2,A:C,3,0)"],
        ["E002", "Priya", "HR", "", "", "→ HR"],
        ["E003", "Amit", "Finance", "", "", ""]
      ]
    },
    teacherExplanation: "VLOOKUP Excel ka superstar formula hai! V = Vertical. Ye pehle column me value dhoondta hai aur same row se koi column ki value return karta hai. Employee ID se name ya department nikalna — ye sab VLOOKUP karta hai! 4th argument hamesha 0 rakhna = exact match.",
    hinglishTip: "VLOOKUP = ID deke koi bhi detail nikalo. 4th argument 0 rakhna na bhulen!",
    commonErrors: "#N/A aata hai agar lookup value exist nahi karta. 0 (exact match) na likhne par galat result aata hai.",
    difficulty: "Intermediate",
    tags: ["vlookup", "lookup", "search", "find value", "id lookup"]
  },
  {
    id: "f-lookup-2",
    name: "HLOOKUP",
    category: "Lookup & Reference",
    syntax: "=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
    shortSyntax: "=HLOOKUP(B1, A1:F3, 2, 0)",
    description: "Searches for a value in the FIRST ROW of a table and returns a value from a specified row below.",
    usedFor: "When your lookup table is horizontal (months in row 1, data in rows below).",
    realExample: "=HLOOKUP(\"March\", B1:M3, 2, 0) — get March sales figures",
    exampleTable: {
      headers: ["", "Jan", "Feb", "Mar"],
      rows: [["Sales", "150000", "180000", "200000"], ["HLOOKUP for Mar", "", "", "=HLOOKUP(\"Mar\",B1:D2,2,0)"]]
    },
    teacherExplanation: "VLOOKUP vertical ke liye, HLOOKUP horizontal ke liye. Agar months row me hain (Jan, Feb, Mar) aur data neeche hai, toh HLOOKUP month ka naam deke value dhoondta hai.",
    hinglishTip: "H = Horizontal. Jab data row me ho toh HLOOKUP, column me ho toh VLOOKUP!",
    commonErrors: "#N/A agar header row me value nahi mili. Row_index 1 se start hota hai.",
    difficulty: "Intermediate",
    tags: ["hlookup", "horizontal lookup", "row lookup", "monthly data"]
  },
  {
    id: "f-lookup-3",
    name: "XLOOKUP",
    category: "Lookup & Reference",
    syntax: "=XLOOKUP(lookup_value, lookup_array, return_array, [not_found], [match_mode], [search_mode])",
    shortSyntax: "=XLOOKUP(A2, B:B, C:C, \"Not Found\")",
    description: "Modern replacement for VLOOKUP — can search left or right, top or bottom, handles errors automatically. Excel 365/2021+.",
    usedFor: "Everything VLOOKUP does + searching left columns + returning multiple values + reverse search.",
    realExample: "=XLOOKUP(E2, B:B, A:A, \"Not Found\") — find Employee ID from Name (reverse lookup!)",
    exampleTable: {
      headers: ["Emp ID", "Name", "Salary", "", "Search Name", "Result"],
      rows: [
        ["E001", "Rahul", "35000", "", "Priya", "=XLOOKUP(E2,B:B,C:C)"],
        ["E002", "Priya", "42000", "", "", "→ 42000"],
        ["E003", "Amit", "28000", "", "", ""]
      ]
    },
    teacherExplanation: "XLOOKUP VLOOKUP ka naya aur better version hai! VLOOKUP se zyada advantages: 1) Left column bhi search kar sakta hai, 2) Not Found message automatic deta hai, 3) Multiple results return kar sakta hai. Office 365 use karte ho toh XLOOKUP apnao!",
    hinglishTip: "XLOOKUP = VLOOKUP ka upgrade. Both left aur right me dhundh sakta hai!",
    commonErrors: "Excel 2019 ya purane versions me XLOOKUP available nahi hai.",
    difficulty: "Advanced",
    tags: ["xlookup", "modern lookup", "365", "search", "flexible"]
  },
  {
    id: "f-lookup-4",
    name: "INDEX",
    category: "Lookup & Reference",
    syntax: "=INDEX(array, row_num, [col_num])",
    shortSyntax: "=INDEX(B2:D10, 3, 2)",
    description: "Returns a value from a specific row and column position within a range.",
    usedFor: "Get any value by specifying exact row and column position. Used with MATCH for powerful lookups.",
    realExample: "=INDEX(B2:B100, MATCH(E2, A2:A100, 0)) — flexible lookup from any column",
    exampleTable: {
      headers: ["Position", "Row 1", "Row 2", "Row 3"],
      rows: [["Col 1", "Apple", "Banana", "Cherry"], ["Col 2", "100", "200", "300"]]
    },
    teacherExplanation: "INDEX ek grid se kisi specific cell ki value deta hai. INDEX(B2:D5, 2, 3) matlab B2 se D5 ke range me 2nd row 3rd column ki value do. Ek tarah se coordinates se cell value nikalna.",
    hinglishTip: "INDEX = row aur column number do, value milegi. MATCH ke saath use karo — VLOOKUP se bhi powerful!",
    commonErrors: "Row_num ya col_num 0 nahi hona chahiye (1-indexed).",
    difficulty: "Advanced",
    tags: ["index", "position", "row column", "grid lookup"]
  },
  {
    id: "f-lookup-5",
    name: "MATCH",
    category: "Lookup & Reference",
    syntax: "=MATCH(lookup_value, lookup_array, [match_type])",
    shortSyntax: "=MATCH(E2, A2:A100, 0)",
    description: "Returns the POSITION (row number) of a value within a range — not the value itself.",
    usedFor: "Used with INDEX to create flexible lookups; find the row number of any value.",
    realExample: "=MATCH(\"Rahul\", A2:A100, 0) — find which row number contains 'Rahul'",
    exampleTable: {
      headers: ["Row", "Name", "MATCH Result"],
      rows: [["2", "Rahul", ""], ["3", "Priya", ""], ["4", "Amit", ""], ["Search 'Priya'", "", "=MATCH(\"Priya\",B2:B4,0) → 2"]]
    },
    teacherExplanation: "MATCH value ki position batata hai, value nahi. 'Priya' row 3 me hai, lekin MATCH result 2 dega kyunki range B2:B4 me wo 2nd element hai. MATCH+INDEX milake VLOOKUP se powerful lookup banta hai!",
    hinglishTip: "MATCH = position batao. INDEX+MATCH = best lookup combination!",
    commonErrors: "Match_type 0 = exact match. 1 = less than. -1 = greater than. Hamesha 0 use karo exact ke liye.",
    difficulty: "Advanced",
    tags: ["match", "position", "find row", "index match"]
  },
  {
    id: "f-lookup-6",
    name: "INDEX + MATCH",
    category: "Lookup & Reference",
    syntax: "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
    shortSyntax: "=INDEX(C:C, MATCH(E2, B:B, 0))",
    description: "The most powerful lookup combination — overcomes all VLOOKUP limitations. Can search any direction.",
    usedFor: "Left-column lookup (not possible in VLOOKUP), multiple column return, large data efficient search.",
    realExample: "=INDEX(A:A, MATCH(E2, B:B, 0)) — find Employee ID from Name (VLOOKUP can't do this!)",
    exampleTable: {
      headers: ["Emp ID", "Name", "Salary", "", "Name to lookup", "ID result"],
      rows: [
        ["E001", "Rahul", "35000", "", "Priya", "=INDEX(A:A,MATCH(E2,B:B,0))"],
        ["E002", "Priya", "42000", "", "", "→ E002"]
      ]
    },
    teacherExplanation: "INDEX+MATCH VLOOKUP se better hai kyunki VLOOKUP sirf right side me dhoondh sakta hai. Agar naam se Employee ID chahiye (left column), VLOOKUP fail ho jayega. INDEX(A:A, MATCH(name, B:B, 0)) easily kar deta hai!",
    hinglishTip: "INDEX+MATCH = VLOOKUP ka boss. Left bhi dhoond sakta hai, zyada fast bhi hai!",
    commonErrors: "Return range aur lookup range same size honi chahiye aur properly aligned honi chahiye.",
    difficulty: "Advanced",
    tags: ["index match", "advanced lookup", "flexible", "left lookup"]
  },
  {
    id: "f-lookup-7",
    name: "OFFSET",
    category: "Lookup & Reference",
    syntax: "=OFFSET(reference, rows, cols, [height], [width])",
    shortSyntax: "=OFFSET(A1, 2, 3)",
    description: "Returns a reference that is a specified number of rows and columns from a starting cell.",
    usedFor: "Dynamic range references, moving reference calculations, dashboard dynamic data.",
    realExample: "=OFFSET(A1, 3, 2) — return value 3 rows down and 2 columns right from A1",
    exampleTable: {
      headers: ["Start Cell", "Rows Down", "Cols Right", "Returns"],
      rows: [["A1", "2", "1", "=OFFSET(A1,2,1) → value at B3"], ["A5", "0", "3", "=OFFSET(A5,0,3) → value at D5"]]
    },
    teacherExplanation: "OFFSET ek starting point se itne rows neeche aur itne columns daaye jaata hai. Dashboard me dynamically data reference karne ke liye use hota hai.",
    hinglishTip: "OFFSET = 'X steps neeche, Y steps daaye jao'. Dynamic range banana ke liye!",
    commonErrors: "Volatile function hai — baar baar recalculate hota hai. Large sheets slow kar sakta hai.",
    difficulty: "Advanced",
    tags: ["offset", "dynamic range", "reference", "dashboard"]
  },
  {
    id: "f-lookup-8",
    name: "CHOOSE",
    category: "Lookup & Reference",
    syntax: "=CHOOSE(index_num, value1, [value2], ...)",
    shortSyntax: "=CHOOSE(A2, \"Low\", \"Medium\", \"High\")",
    description: "Returns one value from a list based on a position number (index).",
    usedFor: "Map numeric codes to labels, create dynamic category labels, month number to name.",
    realExample: "=CHOOSE(MONTH(A2), \"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\")",
    exampleTable: {
      headers: ["Index", "Result of CHOOSE(index,\"A\",\"B\",\"C\")"],
      rows: [["1", "A"], ["2", "B"], ["3", "C"]]
    },
    teacherExplanation: "CHOOSE number se label deta hai. CHOOSE(2, 'Small', 'Medium', 'Large') = 'Medium'. Month number (1-12) se month name nikalne ke liye classic use case hai!",
    hinglishTip: "CHOOSE = number deke name pao. 1='Jan', 2='Feb'... Month names banane ke liye!",
    commonErrors: "Index_num usi range me hona chahiye jitne values hain. 5 values hain toh 1-5 hi valid hoga.",
    difficulty: "Intermediate",
    tags: ["choose", "index lookup", "label", "month name"]
  },

  // ==================================================
  // 3. TEXT FUNCTIONS
  // ==================================================
  {
    id: "f-text-1",
    name: "CONCATENATE / CONCAT / &",
    category: "Text Functions",
    syntax: "=CONCATENATE(text1, text2, ...) OR =CONCAT(text1, text2) OR =A1&\" \"&B1",
    shortSyntax: "=A2&\" \"&B2",
    description: "Joins/combines two or more text strings into one.",
    usedFor: "Combine first name + last name, create full address, build invoice numbers.",
    realExample: "=A2&\" \"&B2 — joins First Name (A2) and Last Name (B2) with space",
    exampleTable: {
      headers: ["First Name", "Last Name", "Full Name"],
      rows: [["Rahul", "Sharma", "=A2&\" \"&B2 → Rahul Sharma"], ["Priya", "Verma", "=A3&\" \"&B3 → Priya Verma"]]
    },
    teacherExplanation: "& (ampersand) do texts ko jodta hai. 'Rahul' aur 'Sharma' ko jodte hain: A2&' '&B2 = 'Rahul Sharma'. Bich me space bhi add karo! CONCATENATE same kaam karta hai par & zyada fast aur easy hai.",
    hinglishTip: "& se texts jodo. A2 & ' ' & B2 = Full Name!",
    commonErrors: "Number aur text jodne se number text ban jata hai — calculation me use nahi hoga.",
    difficulty: "Beginner",
    tags: ["concatenate", "join text", "combine", "full name", "ampersand"]
  },
  {
    id: "f-text-2",
    name: "LEFT",
    category: "Text Functions",
    syntax: "=LEFT(text, [num_chars])",
    shortSyntax: "=LEFT(A2, 3)",
    description: "Extracts a specified number of characters from the LEFT side of a text string.",
    usedFor: "Extract state code from GST number, first few digits of account number, prefix extraction.",
    realExample: "=LEFT(A2, 2) — extract state code from GST number (first 2 chars)",
    exampleTable: {
      headers: ["GST Number", "State Code (LEFT 2)"],
      rows: [["07AAAAA0000A1Z5", "=LEFT(A2,2) → 07"], ["27BBBBB1111B2Y6", "=LEFT(A3,2) → 27"]]
    },
    teacherExplanation: "LEFT text ke left side se characters kaata hai. GST number ka pehla 2 digit state code hota hai. LEFT(A2, 2) seedha state code nikal deta hai. Simple aur powerful!",
    hinglishTip: "LEFT = left side se itne characters lo!",
    commonErrors: "Num_chars 0 se bada hona chahiye. 0 ya negative pe error aata hai.",
    difficulty: "Beginner",
    tags: ["left", "extract text", "prefix", "gst code", "first characters"]
  },
  {
    id: "f-text-3",
    name: "RIGHT",
    category: "Text Functions",
    syntax: "=RIGHT(text, [num_chars])",
    shortSyntax: "=RIGHT(A2, 4)",
    description: "Extracts a specified number of characters from the RIGHT end of a text string.",
    usedFor: "Extract last 4 digits of account number, file extension, suffix.",
    realExample: "=RIGHT(A2, 4) — extract last 4 digits of bank account",
    exampleTable: {
      headers: ["Account Number", "Last 4 Digits"],
      rows: [["1234567890", "=RIGHT(A2,4) → 7890"], ["9876543210", "=RIGHT(A3,4) → 3210"]]
    },
    teacherExplanation: "RIGHT text ke right (aakhir) se characters kaata hai. Bank account ka aakhiri 4 digit chahiye security ke liye toh RIGHT(A2, 4) use karo.",
    hinglishTip: "RIGHT = right (aakhir) se itne characters lo!",
    commonErrors: "Num_chars text ki total length se zyada ho toh pura text hi return hota hai.",
    difficulty: "Beginner",
    tags: ["right", "extract text", "suffix", "last characters", "account"]
  },
  {
    id: "f-text-4",
    name: "MID",
    category: "Text Functions",
    syntax: "=MID(text, start_num, num_chars)",
    shortSyntax: "=MID(A2, 4, 7)",
    description: "Extracts a specified number of characters from the MIDDLE of a text string, starting from a given position.",
    usedFor: "Extract middle portion of PAN number, specific segment from product codes, date from text.",
    realExample: "=MID(A2, 3, 5) — extract characters 3 to 7 from a text string",
    exampleTable: {
      headers: ["PAN Number", "Middle Name Part"],
      rows: [["ABCDE1234F", "=MID(A2,4,2) → DE"], ["PQRST5678G", "=MID(A3,4,2) → ST"]]
    },
    teacherExplanation: "MID text ke beech se characters kaata hai. MID('ABCDE1234F', 4, 2) matlab 4th position se 2 characters nikalo = 'DE'. Product codes ya PAN ke beech se information nikalne ke liye use hota hai.",
    hinglishTip: "MID = beech se nikalo. Kahan se start (start_num) aur kitne (num_chars) — dono batao!",
    commonErrors: "Start_num 1-indexed hai (1 = first character, 0 nahi).",
    difficulty: "Intermediate",
    tags: ["mid", "middle text", "extract", "substring", "pan number"]
  },
  {
    id: "f-text-5",
    name: "LEN",
    category: "Text Functions",
    syntax: "=LEN(text)",
    shortSyntax: "=LEN(A2)",
    description: "Returns the total number of characters in a text string (including spaces).",
    usedFor: "Validate data entry length (PAN is 10 chars, GST is 15 chars), check password length.",
    realExample: "=IF(LEN(A2)<>10,\"Invalid PAN\",\"Valid\") — validate PAN number length",
    exampleTable: {
      headers: ["Value", "LEN Result"],
      rows: [["Rahul", "=LEN(A2) → 5"], ["ABCDE1234F", "=LEN(A3) → 10"], ["Hello World", "=LEN(A4) → 11"]]
    },
    teacherExplanation: "LEN characters count karta hai — spaces bhi. PAN number hamesha 10 characters ka hona chahiye. LEN se data entry validate karo: IF(LEN(PAN)<>10, 'Invalid', 'OK'). Data quality ensure hoti hai!",
    hinglishTip: "LEN = text me kitne characters hain. Data validation ke liye perfect!",
    commonErrors: "Spaces bhi count hote hain. TRIM karna padh sakta hai pehle.",
    difficulty: "Beginner",
    tags: ["len", "length", "character count", "validation", "pan"]
  },
  {
    id: "f-text-6",
    name: "TRIM",
    category: "Text Functions",
    syntax: "=TRIM(text)",
    shortSyntax: "=TRIM(A2)",
    description: "Removes all leading, trailing, and extra spaces between words (leaves single spaces between words).",
    usedFor: "Clean imported data, fix VLOOKUP errors caused by extra spaces, standardize names.",
    realExample: "=TRIM(A2) — clean '  Rahul  Sharma  ' to 'Rahul Sharma'",
    exampleTable: {
      headers: ["Raw Data (with spaces)", "TRIM Result"],
      rows: [["  Rahul Sharma  ", "=TRIM(A2) → Rahul Sharma"], [" Mumbai  Branch ", "=TRIM(A3) → Mumbai Branch"]]
    },
    teacherExplanation: "Imported data ya copied data me aksar extra spaces aate hain jo VLOOKUP fail karte hain. 'Rahul' aur ' Rahul' Excel ke liye alag hain! TRIM se spaces saaf ho jate hain aur VLOOKUP sahi kaam karta hai.",
    hinglishTip: "TRIM = extra spaces hatao. VLOOKUP fail ho raha hai? TRIM try karo pehle!",
    commonErrors: "Non-breaking spaces (NBSP — copy from web) TRIM nahi hata sakta. CLEAN + SUBSTITUTE chahiye.",
    difficulty: "Beginner",
    tags: ["trim", "remove spaces", "clean data", "vlookup fix"]
  },
  {
    id: "f-text-7",
    name: "UPPER",
    category: "Text Functions",
    syntax: "=UPPER(text)",
    shortSyntax: "=UPPER(A2)",
    description: "Converts all text to UPPERCASE letters.",
    usedFor: "Standardize company names, headings, GST category codes.",
    realExample: "=UPPER(A2) — converts 'rahul sharma' to 'RAHUL SHARMA'",
    exampleTable: {
      headers: ["Original", "UPPER Result"],
      rows: [["rahul sharma", "RAHUL SHARMA"], ["mumbai", "MUMBAI"]]
    },
    teacherExplanation: "UPPER sab text ko capital letters me badal deta hai. Report headings ya column headers standardize karne ke liye useful.",
    hinglishTip: "UPPER = sab capital mein. LOWER = sab small mein. PROPER = Har word Capital mein!",
    commonErrors: "Numbers aur special characters pe koi effect nahi hota.",
    difficulty: "Beginner",
    tags: ["upper", "capitalize", "uppercase", "text case"]
  },
  {
    id: "f-text-8",
    name: "LOWER",
    category: "Text Functions",
    syntax: "=LOWER(text)",
    shortSyntax: "=LOWER(A2)",
    description: "Converts all text to lowercase letters.",
    usedFor: "Standardize email addresses, username formatting.",
    realExample: "=LOWER(A2) — converts 'RAHUL@EMAIL.COM' to 'rahul@email.com'",
    exampleTable: {
      headers: ["Original", "LOWER Result"],
      rows: [["RAHUL@EMAIL.COM", "rahul@email.com"], ["DELHI BRANCH", "delhi branch"]]
    },
    teacherExplanation: "LOWER sab text ko chhote (lowercase) letters me badal deta hai. Email comparison ya username standardization ke liye use hota hai.",
    hinglishTip: "LOWER = sab chhote (small) letters mein.",
    commonErrors: "Numbers pe koi effect nahi.",
    difficulty: "Beginner",
    tags: ["lower", "lowercase", "text case", "email"]
  },
  {
    id: "f-text-9",
    name: "PROPER",
    category: "Text Functions",
    syntax: "=PROPER(text)",
    shortSyntax: "=PROPER(A2)",
    description: "Converts text so that the First Letter of Each Word is Capitalized.",
    usedFor: "Standardize employee names, city names, product names from inconsistently entered data.",
    realExample: "=PROPER(A2) — converts 'rahul sharma' or 'RAHUL SHARMA' to 'Rahul Sharma'",
    exampleTable: {
      headers: ["Raw Name", "PROPER Result"],
      rows: [["rahul sharma", "Rahul Sharma"], ["PRIYA VERMA", "Priya Verma"], ["amiT PATEL", "Amit Patel"]]
    },
    teacherExplanation: "PROPER har word ka pehla letter capital aur baki small kar deta hai. Data entry me log alag-alag tarike se naam likhte hain — PROPER se sab ek jaise ho jaate hain. Reports me professional look aata hai.",
    hinglishTip: "PROPER = Har Word Capital Se. Name standardization ke liye best!",
    commonErrors: "O'Brien jaisi names me apostrophe ke baad bhi capital ho jata hai — kabhi kabhi issue create karta hai.",
    difficulty: "Beginner",
    tags: ["proper", "title case", "name format", "capitalize"]
  },
  {
    id: "f-text-10",
    name: "TEXT",
    category: "Text Functions",
    syntax: "=TEXT(value, format_text)",
    shortSyntax: "=TEXT(A2, \"DD-MMM-YYYY\")",
    description: "Converts a number or date to text with a specific display format.",
    usedFor: "Combine date with text in a sentence, format numbers as text with currency, display month names.",
    realExample: "=TEXT(A2,\"DD-MMM-YYYY\") — display date as '23-Sep-2024'",
    exampleTable: {
      headers: ["Value", "Format Code", "Result"],
      rows: [
        ["45100", "\"DD-MMM-YYYY\"", "23-Sep-2024"],
        ["35000", "\"₹#,##0\"", "₹35,000"],
        ["0.18", "\"0.00%\"", "18.00%"]
      ]
    },
    teacherExplanation: "TEXT number ya date ko text format me convert karta hai. Jab aap date ko sentence me likhna chahte ho: 'Report for ' & TEXT(A2,'MMM-YYYY') = 'Report for Sep-2024'. &amp; se number join karne pe '45100 ka report' aata — TEXT se 'Sep-2024 ka report' aata hai!",
    hinglishTip: "TEXT = number ko formatted text me badlo. Date+Sentence combine karne ke liye!",
    commonErrors: "TEXT se result text ban jata hai — calculation me use nahi hoga.",
    difficulty: "Intermediate",
    tags: ["text", "format", "date text", "number format", "display"]
  },
  {
    id: "f-text-11",
    name: "SUBSTITUTE",
    category: "Text Functions",
    syntax: "=SUBSTITUTE(text, old_text, new_text, [instance_num])",
    shortSyntax: "=SUBSTITUTE(A2, \"old\", \"new\")",
    description: "Replaces all or specific occurrences of a string within text.",
    usedFor: "Remove unwanted characters, replace codes, clean product codes, remove dashes from phone numbers.",
    realExample: "=SUBSTITUTE(A2, \"-\", \"\") — remove all dashes from phone number",
    exampleTable: {
      headers: ["Original", "Formula", "Result"],
      rows: [
        ["98765-43210", "=SUBSTITUTE(A2,\"-\",\"\")", "9876543210"],
        ["INV-001-2024", "=SUBSTITUTE(A3,\"-\",\"/\")", "INV/001/2024"]
      ]
    },
    teacherExplanation: "SUBSTITUTE ek specific text replace karta hai. Phone number se dash hatana ho: SUBSTITUTE(A2, '-', ''). Blank hi replace karo to character delete ho jata hai. FIND & REPLACE se alag — ye formula me kaam karta hai!",
    hinglishTip: "SUBSTITUTE = purana text hatao, naya dalo. Characters remove karne ke liye '' (khali) rakho.",
    commonErrors: "Case-sensitive hai. 'abc' aur 'ABC' ko alag maanta hai.",
    difficulty: "Intermediate",
    tags: ["substitute", "replace text", "remove character", "phone number", "clean"]
  },
  {
    id: "f-text-12",
    name: "FIND / SEARCH",
    category: "Text Functions",
    syntax: "=FIND(find_text, within_text, [start_num])",
    shortSyntax: "=FIND(\"@\", A2)",
    description: "Returns the position number where a specific character or text is found. FIND is case-sensitive, SEARCH is not.",
    usedFor: "Find @ position in email, locate separator in combined codes, used with MID to extract portions.",
    realExample: "=LEFT(A2, FIND(\"@\",A2)-1) — extract username before @ in email",
    exampleTable: {
      headers: ["Email", "@ Position", "Username (before @)"],
      rows: [
        ["rahul@gmail.com", "=FIND(\"@\",A2) → 6", "=LEFT(A2,FIND(\"@\",A2)-1) → rahul"],
        ["priya@company.com", "=FIND(\"@\",A3) → 6", "priya"]
      ]
    },
    teacherExplanation: "FIND ek specific character ki position batata hai. Email me '@' kahan hai? FIND('@', A2) = 6 matlab 6th character par '@' hai. Fir LEFT(A2, 6-1) = LEFT(A2, 5) = 'rahul'. Aisa combination text parsing me use hota hai.",
    hinglishTip: "FIND = character ki position. SEARCH = case-insensitive version. MID aur LEFT ke saath combine karo!",
    commonErrors: "#VALUE! agar text nahi mila. ISNUMBER(FIND()) se check kar sakte hain.",
    difficulty: "Advanced",
    tags: ["find", "search", "position", "email", "text parse"]
  },
  {
    id: "f-text-13",
    name: "TEXTJOIN",
    category: "Text Functions",
    syntax: "=TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)",
    shortSyntax: "=TEXTJOIN(\", \", TRUE, A2:A10)",
    description: "Joins multiple text values with a specified delimiter, with option to ignore empty cells.",
    usedFor: "Create comma-separated lists from a range, combine multiple items into one cell.",
    realExample: "=TEXTJOIN(\", \", TRUE, A2:A10) — join all city names with comma separator",
    exampleTable: {
      headers: ["Cities", "Joined"],
      rows: [["Mumbai", ""], ["Delhi", ""], ["Pune", "=TEXTJOIN(\", \",TRUE,A2:A4) → Mumbai, Delhi, Pune"]]
    },
    teacherExplanation: "TEXTJOIN ek range ke sabhi values ko ek cell me join karta hai — comma ya koi bhi separator se. 10 cities alag cells me hain aur ek hi cell me comma separated list chahiye toh TEXTJOIN use karo!",
    hinglishTip: "TEXTJOIN = range ko ek cell me jodo. Comma-separated list banana!",
    commonErrors: "Excel 2016+ me available hai. Purane versions me nahi milega.",
    difficulty: "Intermediate",
    tags: ["textjoin", "join", "delimiter", "comma list", "combine range"]
  },
  {
    id: "f-text-14",
    name: "VALUE",
    category: "Text Functions",
    syntax: "=VALUE(text)",
    shortSyntax: "=VALUE(A2)",
    description: "Converts a text string that looks like a number back into an actual numeric value.",
    usedFor: "Fix numbers stored as text (common in imported data), enable math operations on text numbers.",
    realExample: "=VALUE(A2) — convert '15000' (text) to 15000 (number) for calculations",
    exampleTable: {
      headers: ["Text Number", "VALUE Result"],
      rows: [["'15000", "=VALUE(A2) → 15000 (number)"], ["'2024-01-15", "=VALUE(A3) → 45306 (date serial)"]]
    },
    teacherExplanation: "ERP ya tally se import kiye data me numbers text me hote hain — SUM nahi kaam karta! Cell corner me green triangle dikhta hai. VALUE(A2) se text ko real number me badal do — calculation fir sahi kaam karega.",
    hinglishTip: "VALUE = text wale number ko real number banana. Import data me green triangle dikhne par VALUE use karo!",
    commonErrors: "Text me commas ya currency symbols hon toh VALUE fail hoga — pehle SUBSTITUTE se hatao.",
    difficulty: "Beginner",
    tags: ["value", "text to number", "import fix", "number format"]
  },

  // ==================================================
  // 4. DATE & TIME FUNCTIONS
  // ==================================================
  {
    id: "f-date-1",
    name: "TODAY",
    category: "Date & Time",
    syntax: "=TODAY()",
    shortSyntax: "=TODAY()",
    description: "Returns the current date (updates automatically every day when you open the file).",
    usedFor: "Calculate age, days overdue, remaining days to deadline, dynamic date headers.",
    realExample: "=TODAY()-B2 — calculate number of days since joining date",
    exampleTable: {
      headers: ["Formula", "Result (example)"],
      rows: [["=TODAY()", "23-Sep-2024"], ["=TODAY()-DATE(2020,1,1)", "Days since Jan 2020"], ["=TODAY()+30", "Date 30 days from now"]]
    },
    teacherExplanation: "TODAY() aaj ki date deta hai aur har baar file khulne par automatically update ho jaata hai. Age calculate karna ho: (TODAY()-DOB)/365 = approximate age in years. Deadline count karna ho: Deadline_date - TODAY() = remaining days.",
    hinglishTip: "TODAY() = aaj ki date. File khulne par automatically badalta hai!",
    commonErrors: "TODAY() baar baar recalculate hota hai — static date chahiye toh Ctrl+; use karo.",
    difficulty: "Beginner",
    tags: ["today", "current date", "age", "days remaining", "dynamic date"]
  },
  {
    id: "f-date-2",
    name: "NOW",
    category: "Date & Time",
    syntax: "=NOW()",
    shortSyntax: "=NOW()",
    description: "Returns the current date AND time. Updates automatically every time the spreadsheet recalculates.",
    usedFor: "Timestamp reports, log entry time, time-sensitive dashboards.",
    realExample: "=NOW() — shows 23-Sep-2024 14:30:45 (date + time)",
    exampleTable: {
      headers: ["Formula", "Returns"],
      rows: [["=NOW()", "23-Sep-2024 14:30"], ["=INT(NOW())", "Today's date only"], ["=NOW()-INT(NOW())", "Current time only"]]
    },
    teacherExplanation: "NOW() date aur time dono deta hai. TODAY() sirf date deta hai. Agar aapko report ki last update time dikhani ho toh NOW() use karo. Static timestamp chahiye toh Ctrl+; (date) aur Ctrl+Shift+: (time) use karo.",
    hinglishTip: "NOW() = date + time. TODAY() = sirf date. Report timestamp ke liye!",
    commonErrors: "Volatile function — har calculation pe update hota hai. Slow sheets me performance issue ho sakta hai.",
    difficulty: "Beginner",
    tags: ["now", "current time", "timestamp", "date time"]
  },
  {
    id: "f-date-3",
    name: "DATE",
    category: "Date & Time",
    syntax: "=DATE(year, month, day)",
    shortSyntax: "=DATE(2024, 9, 23)",
    description: "Creates a date value from separate year, month, and day components.",
    usedFor: "Build dates from separate columns, create dynamic date ranges, fiscal year calculations.",
    realExample: "=DATE(C2, B2, A2) — build date from day, month, year in separate columns",
    exampleTable: {
      headers: ["Day", "Month", "Year", "DATE Result"],
      rows: [["15", "9", "2024", "=DATE(C2,B2,A2) → 15-Sep-2024"], ["1", "1", "2025", "=DATE(C3,B3,A3) → 01-Jan-2025"]]
    },
    teacherExplanation: "DATE(year, month, day) teen alag values se ek date banata hai. Salary sheet me year, month, day alag cells me ho aur tumhe join date banana ho toh DATE use karo.",
    hinglishTip: "DATE = saal, mahina, din se date banao. Alag-alag cells se ek date!",
    commonErrors: "Arguments order: year, month, day — dhyan rakhna!",
    difficulty: "Beginner",
    tags: ["date", "create date", "year month day", "date construction"]
  },
  {
    id: "f-date-4",
    name: "DATEDIF",
    category: "Date & Time",
    syntax: "=DATEDIF(start_date, end_date, unit)",
    shortSyntax: "=DATEDIF(B2, TODAY(), \"Y\")",
    description: "Calculates the difference between two dates in years (Y), months (M), or days (D).",
    usedFor: "Calculate employee age, years of experience, loan tenure, days overdue on payment.",
    realExample: "=DATEDIF(B2, TODAY(), \"Y\") — employee's complete years of experience",
    exampleTable: {
      headers: ["Join Date", "Unit", "Formula", "Result"],
      rows: [
        ["01-Jan-2018", "Y", "=DATEDIF(A2,TODAY(),\"Y\")", "6 (years)"],
        ["01-Jan-2018", "M", "=DATEDIF(A3,TODAY(),\"M\")", "81 (months)"],
        ["01-Jan-2018", "D", "=DATEDIF(A4,TODAY(),\"D\")", "2457 (days)"]
      ]
    },
    teacherExplanation: "DATEDIF do dates ke beech ka fark calculate karta hai. Y = complete years (age ke liye), M = complete months, D = total days. HR me employee ki experience nikalne ke liye DATEDIF(joining_date, TODAY(), 'Y') use karo!",
    hinglishTip: "DATEDIF = do tarikhon ka fark. 'Y' se years, 'M' se months, 'D' se days!",
    commonErrors: "DATEDIF ko formula bar me suggest nahi karta (hidden function). Par kaam karta hai — manually type karo.",
    difficulty: "Intermediate",
    tags: ["datedif", "date difference", "age", "experience", "years months"]
  },
  {
    id: "f-date-5",
    name: "YEAR / MONTH / DAY",
    category: "Date & Time",
    syntax: "=YEAR(date), =MONTH(date), =DAY(date)",
    shortSyntax: "=YEAR(A2), =MONTH(A2), =DAY(A2)",
    description: "Extracts the year, month, or day number from a date cell.",
    usedFor: "Group data by year or month, extract quarter from date, separate date components.",
    realExample: "=YEAR(A2) — extract year from date. =MONTH(A2) — extract month number.",
    exampleTable: {
      headers: ["Date", "YEAR", "MONTH", "DAY"],
      rows: [["23-Sep-2024", "=YEAR(A2) → 2024", "=MONTH(A2) → 9", "=DAY(A2) → 23"]]
    },
    teacherExplanation: "YEAR, MONTH, DAY se date ke specific part nikale jaate hain. Sales data me month wise report banana ho toh MONTH(Date) column add karo aur fir SUMIF se month wise total nikalo!",
    hinglishTip: "YEAR/MONTH/DAY = date se saal/mahina/din nikalo. SUMIF ke saath mile ke month-wise report banao!",
    commonErrors: "MONTH number return karta hai (1-12), name nahi. Name ke liye TEXT(date,'MMMM') use karo.",
    difficulty: "Beginner",
    tags: ["year", "month", "day", "date extract", "date components"]
  },
  {
    id: "f-date-6",
    name: "EOMONTH",
    category: "Date & Time",
    syntax: "=EOMONTH(start_date, months)",
    shortSyntax: "=EOMONTH(A2, 0)",
    description: "Returns the last day of the month, a specified number of months in the future or past.",
    usedFor: "EMI due dates, month-end reports, fiscal period end dates, invoice due dates.",
    realExample: "=EOMONTH(TODAY(), 0) — last day of current month",
    exampleTable: {
      headers: ["Date", "Formula", "Result"],
      rows: [
        ["23-Sep-2024", "=EOMONTH(A2,0)", "30-Sep-2024"],
        ["23-Sep-2024", "=EOMONTH(A3,1)", "31-Oct-2024"],
        ["23-Sep-2024", "=EOMONTH(A4,-1)", "31-Aug-2024"]
      ]
    },
    teacherExplanation: "EOMONTH mahine ka aakhiri din deta hai. 0 = isi mahine ka aakhir. 1 = agle mahine ka aakhir. -1 = pichle mahine ka aakhir. Loan EMI schedule, accounts payable deadline — sab jagah kaam aata hai!",
    hinglishTip: "EOMONTH = mahine ka aakhiri din. 0=is month, 1=agla, -1=pichla!",
    commonErrors: "February ke liye 28 ya 29 automatically handle karta hai.",
    difficulty: "Intermediate",
    tags: ["eomonth", "month end", "last day", "emi", "due date"]
  },
  {
    id: "f-date-7",
    name: "EDATE",
    category: "Date & Time",
    syntax: "=EDATE(start_date, months)",
    shortSyntax: "=EDATE(A2, 6)",
    description: "Returns a date that is exactly a specified number of months before or after a given date.",
    usedFor: "Calculate loan maturity date, insurance renewal date, warranty expiry date.",
    realExample: "=EDATE(B2, 12) — loan maturity date (1 year from disbursement)",
    exampleTable: {
      headers: ["Start Date", "Months", "End Date (EDATE)"],
      rows: [["01-Jan-2024", "6", "=EDATE(A2,B2) → 01-Jul-2024"], ["15-Mar-2024", "12", "=EDATE(A3,B3) → 15-Mar-2025"]]
    },
    teacherExplanation: "EDATE exactly N mahine aage ya peeche ki same tarikh deta hai. Loan 12 mahine ka hai aur starting 01-Jan-2024 hai: EDATE(A2, 12) = 01-Jan-2025. Warranty, insurance renewal sab ke liye!",
    hinglishTip: "EDATE = N mahine baad same date. Loan maturity, insurance renewal!",
    commonErrors: "February ke liye EDATE automatically last valid day use karta hai.",
    difficulty: "Intermediate",
    tags: ["edate", "add months", "loan maturity", "renewal date"]
  },
  {
    id: "f-date-8",
    name: "WORKDAY",
    category: "Date & Time",
    syntax: "=WORKDAY(start_date, days, [holidays])",
    shortSyntax: "=WORKDAY(A2, 30)",
    description: "Returns the date after a specified number of WORKING DAYS (skipping weekends and optional holidays).",
    usedFor: "Project deadline calculation, delivery date estimation, payment terms (30 working days).",
    realExample: "=WORKDAY(A2, 30) — date 30 working days from order date",
    exampleTable: {
      headers: ["Order Date", "Working Days", "Delivery Date"],
      rows: [["01-Sep-2024", "30", "=WORKDAY(A2,B2) → 14-Oct-2024"]]
    },
    teacherExplanation: "WORKDAY weekends ko automatically skip karta hai. Project 30 working days me complete hoga means 30 calendar days nahi — weekends chhod ke 30 days. WORKDAY correctly calculate karta hai.",
    hinglishTip: "WORKDAY = working days baad ki date. Weekend automatically skip hota hai!",
    commonErrors: "Holidays list alag range me deni hogi WORKDAY ko. Holidays ignore karne se wrong date aayegi.",
    difficulty: "Intermediate",
    tags: ["workday", "working days", "project deadline", "business days"]
  },
  {
    id: "f-date-9",
    name: "NETWORKDAYS",
    category: "Date & Time",
    syntax: "=NETWORKDAYS(start_date, end_date, [holidays])",
    shortSyntax: "=NETWORKDAYS(A2, B2)",
    description: "Counts the number of working days between two dates (excluding weekends and optional holidays).",
    usedFor: "Calculate working days in a month, days taken to complete project, overtime calculation.",
    realExample: "=NETWORKDAYS(A2, B2) — working days between start and end date",
    exampleTable: {
      headers: ["Start Date", "End Date", "Working Days"],
      rows: [["01-Sep-2024", "30-Sep-2024", "=NETWORKDAYS(A2,B2) → 21"]]
    },
    teacherExplanation: "NETWORKDAYS do dates ke beech kitne working days hain. September me total 30 days hain par NETWORKDAYS = 21 (8 weekends ki minus). HR salary calculation ke liye use hota hai — jo employee late join kiya uske working days count karo!",
    hinglishTip: "NETWORKDAYS = working days count karo. September me 30 nahi, 21 working days!",
    commonErrors: "Both start and end dates included hote hain count me.",
    difficulty: "Intermediate",
    tags: ["networkdays", "working days count", "business days", "attendance"]
  },

  // ==================================================
  // 5. LOGICAL FUNCTIONS
  // ==================================================
  {
    id: "f-logic-1",
    name: "IF",
    category: "Logical",
    syntax: "=IF(logical_test, value_if_true, value_if_false)",
    shortSyntax: "=IF(B2>35000, \"Senior\", \"Junior\")",
    description: "Tests a condition and returns one value if TRUE and another if FALSE.",
    usedFor: "Grade pass/fail, categorize salary levels, show 'Paid'/'Due' status, bonus eligibility.",
    realExample: "=IF(C2>=60, \"Pass\", \"Fail\") — grade students as Pass or Fail",
    exampleTable: {
      headers: ["Employee", "Salary", "Category"],
      rows: [
        ["Rahul", "35000", "=IF(B2>30000,\"Senior\",\"Junior\") → Senior"],
        ["Priya", "22000", "=IF(B3>30000,\"Senior\",\"Junior\") → Junior"]
      ]
    },
    teacherExplanation: "IF formula decision lena sikhata hai. IF(condition, 'agar sahi', 'agar galat'). Jaise: IF(Salary>30000, 'Senior', 'Junior'). Marks 60+ hain toh 'Pass' nahi toh 'Fail'. Yeh Excel ka most used formula hai!",
    hinglishTip: "IF = agar...toh...nahi toh. Condition check karo aur result do!",
    commonErrors: "Text values quotes me likhni chahiye. Numbers me quotes mat dalo.",
    difficulty: "Beginner",
    tags: ["if", "condition", "pass fail", "status", "decision"]
  },
  {
    id: "f-logic-2",
    name: "IFS",
    category: "Logical",
    syntax: "=IFS(test1, value1, [test2, value2], ...)",
    shortSyntax: "=IFS(B2>=90,\"A\",B2>=80,\"B\",B2>=70,\"C\",TRUE,\"F\")",
    description: "Tests multiple conditions in sequence and returns the value for the FIRST condition that is TRUE.",
    usedFor: "Multiple grade levels, tax slabs, salary bands — when IF alone isn't enough.",
    realExample: "=IFS(C2>=90,\"A\",C2>=80,\"B\",C2>=60,\"Pass\",TRUE,\"Fail\") — grading system",
    exampleTable: {
      headers: ["Score", "Grade (IFS)"],
      rows: [["95", "=IFS(A2>=90,\"A\",A2>=80,\"B\",TRUE,\"C\") → A"], ["82", "→ B"], ["71", "→ C"]]
    },
    teacherExplanation: "Nested IF (IF me IF) bahut confusing hota hai. IFS directly multiple conditions likhne deta hai. Grading: 90+ = A, 80-89 = B, 70-79 = C, else F. IFS me sab seedha likh do — zyada readable!",
    hinglishTip: "IFS = ek saath kai conditions. Nested IF ki jagah IFS use karo — easy aur clear!",
    commonErrors: "Aakhri condition TRUE rakhna mat bhulo — ye else clause ka kaam karta hai.",
    difficulty: "Intermediate",
    tags: ["ifs", "multiple conditions", "grading", "tax slab", "nested if"]
  },
  {
    id: "f-logic-3",
    name: "AND",
    category: "Logical",
    syntax: "=AND(logical1, [logical2], ...)",
    shortSyntax: "=AND(B2>25000, C2>2)",
    description: "Returns TRUE only if ALL conditions are true, otherwise FALSE. Used inside IF formulas.",
    usedFor: "Check if employee meets ALL criteria (experience AND salary both), dual-condition bonus.",
    realExample: "=IF(AND(B2>25000, C2>2), \"Eligible\", \"Not Eligible\") — bonus if salary>25k AND experience>2yr",
    exampleTable: {
      headers: ["Salary", "Exp (yrs)", "Bonus Eligible?"],
      rows: [
        ["30000", "3", "=IF(AND(A2>25000,B2>2),\"Yes\",\"No\") → Yes"],
        ["28000", "1", "→ No (experience <2)"]
      ]
    },
    teacherExplanation: "AND check karta hai ki sab conditions ek saath sahi hain ya nahi. Bonus ke liye: Salary > 25000 AND Experience > 2 years DONO sahi hone chahiye. Ek bhi galat = No Bonus. IF(AND(...), 'Yes', 'No') use karo.",
    hinglishTip: "AND = sab conditions sahi ho tabhi TRUE. Ek bhi galat = FALSE!",
    commonErrors: "AND sirf TRUE ya FALSE return karta hai — akele use nahi hota, IF ke andar use karo.",
    difficulty: "Intermediate",
    tags: ["and", "logical", "all conditions", "bonus", "eligibility"]
  },
  {
    id: "f-logic-4",
    name: "OR",
    category: "Logical",
    syntax: "=OR(logical1, [logical2], ...)",
    shortSyntax: "=OR(B2=\"Cash\", B2=\"UPI\")",
    description: "Returns TRUE if ANY ONE of the conditions is true.",
    usedFor: "Check if payment is Cash OR UPI, employee in Sales OR Marketing department.",
    realExample: "=IF(OR(B2=\"Cash\",B2=\"UPI\"), \"Digital/Cash\", \"Cheque\") — classify payment mode",
    exampleTable: {
      headers: ["Payment Mode", "Category"],
      rows: [
        ["Cash", "=IF(OR(A2=\"Cash\",A2=\"UPI\"),\"Accepted\",\"Other\") → Accepted"],
        ["UPI", "→ Accepted"],
        ["Cheque", "→ Other"]
      ]
    },
    teacherExplanation: "OR check karta hai ki koi bhi ek condition sahi hai ya nahi. Cash ya UPI dono accepted hain toh: IF(OR(B2='Cash', B2='UPI'), 'Accepted', 'Check'). Koi bhi ek match kare = TRUE!",
    hinglishTip: "OR = koi bhi ek condition sahi ho tabhi TRUE. ANY ONE match = TRUE!",
    commonErrors: "AND ke saath confuse mat karo — OR me ek bhi sahi = TRUE, AND me sab sahi = TRUE.",
    difficulty: "Intermediate",
    tags: ["or", "any condition", "logical", "payment mode", "department"]
  },
  {
    id: "f-logic-5",
    name: "NOT",
    category: "Logical",
    syntax: "=NOT(logical)",
    shortSyntax: "=NOT(A2=\"Paid\")",
    description: "Reverses a logical value — TRUE becomes FALSE and FALSE becomes TRUE.",
    usedFor: "Find invoices NOT yet paid, highlight rows NOT matching a condition.",
    realExample: "=IF(NOT(C2=\"Paid\"), \"Follow Up\", \"Done\") — find unpaid invoices",
    exampleTable: {
      headers: ["Invoice", "Status", "Action"],
      rows: [
        ["INV001", "Paid", "=IF(NOT(B2=\"Paid\"),\"Follow Up\",\"Done\") → Done"],
        ["INV002", "Pending", "→ Follow Up"]
      ]
    },
    teacherExplanation: "NOT condition ko ulta kar deta hai. Paid hai toh FALSE, NOT(Paid) = TRUE. Agar pending invoices highlight karni hain: NOT(status='Paid') = TRUE for pending ones.",
    hinglishTip: "NOT = ulta karo. TRUE → FALSE, FALSE → TRUE!",
    commonErrors: "NOT sirf ek condition accept karta hai. Multiple ke liye AND/OR use karo.",
    difficulty: "Intermediate",
    tags: ["not", "negate", "reverse condition", "unpaid", "exclude"]
  },
  {
    id: "f-logic-6",
    name: "IFERROR",
    category: "Logical",
    syntax: "=IFERROR(value, value_if_error)",
    shortSyntax: "=IFERROR(VLOOKUP(A2,B:C,2,0), \"Not Found\")",
    description: "Returns a custom value instead of showing ugly error messages (#N/A, #VALUE!, etc.).",
    usedFor: "Clean VLOOKUP results, handle divide by zero, professional error handling in reports.",
    realExample: "=IFERROR(VLOOKUP(A2,Sheet2!A:C,2,0),\"Not Found\") — show 'Not Found' instead of #N/A",
    exampleTable: {
      headers: ["Formula", "Result without IFERROR", "Result with IFERROR"],
      rows: [
        ["VLOOKUP not found", "#N/A", "Not Found"],
        ["=1/0", "#DIV/0!", "0 or 'Error'"],
        ["Wrong data type", "#VALUE!", "Check Input"]
      ]
    },
    teacherExplanation: "Report me #N/A, #DIV/0! jaisi errors bahut ugly lagti hain. IFERROR upar wrap karo toh error ki jagah aapka custom message show hoga. IFERROR(VLOOKUP(...), 'Not Found') — agar VLOOKUP fail kare toh 'Not Found' dikhao. Professional reports ka must-have!",
    hinglishTip: "IFERROR = error ko chhupao, custom message dikhao. #N/A se 'Not Found' zyada professional!",
    commonErrors: "IFERROR sab errors pakadta hai. Agar aap specific error type check karna chahte ho toh ISERROR/ISERR use karo.",
    difficulty: "Beginner",
    tags: ["iferror", "error handling", "vlookup error", "na error", "professional"]
  },
  {
    id: "f-logic-7",
    name: "IFNA",
    category: "Logical",
    syntax: "=IFNA(value, value_if_na)",
    shortSyntax: "=IFNA(VLOOKUP(A2,B:C,2,0), \"Not Found\")",
    description: "Like IFERROR, but only handles #N/A errors specifically (not #VALUE! or #DIV/0!).",
    usedFor: "Handle VLOOKUP #N/A specifically while still showing other errors.",
    realExample: "=IFNA(VLOOKUP(A2,Sheet2!A:C,2,0),\"Not Found\") — catch only 'not found' errors",
    exampleTable: {
      headers: ["Scenario", "IFERROR", "IFNA"],
      rows: [
        ["Value not found (#N/A)", "Catches", "Catches"],
        ["Wrong type (#VALUE!)", "Catches", "Shows error (good!)"]
      ]
    },
    teacherExplanation: "IFNA sirf #N/A errors ko handle karta hai. IFERROR sab pakad leta hai — agar aapka formula galat likha hai toh IFERROR chhupa dega. IFNA sirf 'not found' ko chhupata hai, real formula errors dikhne deta hai.",
    hinglishTip: "IFNA = sirf #N/A pakdo. IFERROR = sab errors pakdo. Zyada control chahiye toh IFNA!",
    commonErrors: "IFNA Excel 2013+ me available hai.",
    difficulty: "Intermediate",
    tags: ["ifna", "na error", "vlookup", "error handling", "not found"]
  },

  // ==================================================
  // 6. FINANCIAL FUNCTIONS
  // ==================================================
  {
    id: "f-fin-1",
    name: "PMT",
    category: "Financial",
    syntax: "=PMT(rate, nper, pv, [fv], [type])",
    shortSyntax: "=PMT(B2/12, C2, -D2)",
    description: "Calculates the fixed monthly payment for a loan based on interest rate, tenure, and principal.",
    usedFor: "Calculate EMI for home loan, car loan, personal loan, or any fixed payment loan.",
    realExample: "=PMT(8%/12, 240, -2000000) — monthly EMI for Rs 20 lakh home loan at 8% for 20 years",
    exampleTable: {
      headers: ["Loan Amount", "Rate/Year", "Tenure (months)", "Monthly EMI"],
      rows: [["2000000", "8%", "240", "=PMT(B2/12,C2,-A2) → ₹16,729"]]
    },
    teacherExplanation: "PMT EMI calculate karta hai. Rate MONTHLY honi chahiye (annual/12). Loan amount NEGATIVE dena hoga. PMT(8%/12, 240, -2000000) = Rs 16,729 per month EMI. Bank customer ko bhi aap ye formula se EMI instantly bata sakte ho!",
    hinglishTip: "PMT = EMI nikalo. Rate/12 karo (monthly chahiye), loan amount negative dalo!",
    commonErrors: "Annual rate ko 12 se divide karo monthly rate ke liye. Loan amount positive ya negative dono se kaam karta hai, result ulta sign me aata hai.",
    difficulty: "Advanced",
    tags: ["pmt", "emi", "loan", "monthly payment", "interest"]
  },
  {
    id: "f-fin-2",
    name: "FV",
    category: "Financial",
    syntax: "=FV(rate, nper, pmt, [pv], [type])",
    shortSyntax: "=FV(B2/12, C2*12, -D2)",
    description: "Calculates the Future Value of an investment — how much will you have after investing regularly.",
    usedFor: "SIP investment returns, RD maturity value, savings goal calculation.",
    realExample: "=FV(12%/12, 120, -10000) — value after 10 years SIP of Rs 10,000/month at 12% return",
    exampleTable: {
      headers: ["Monthly SIP", "Annual Return", "Years", "Maturity Value"],
      rows: [["10000", "12%", "10", "=FV(B2/12,C2*12,-A2) → ₹23,23,391"]]
    },
    teacherExplanation: "FV batata hai ki regular investment ke baad kitna paisa milega. 10 saal tak Rs 10,000/month SIP at 12% return = 23 lakh se zyada! Client ko financial planning samjhane ke liye FV perfect tool hai.",
    hinglishTip: "FV = future value. SIP/RD kitna banega — FV se turant pata karo!",
    commonErrors: "Payment (pmt) negative hona chahiye (outflow). Rate monthly chahiye.",
    difficulty: "Advanced",
    tags: ["fv", "future value", "sip", "investment", "savings"]
  },
  {
    id: "f-fin-3",
    name: "PV",
    category: "Financial",
    syntax: "=PV(rate, nper, pmt, [fv], [type])",
    shortSyntax: "=PV(B2/12, C2, -D2)",
    description: "Calculates the Present Value — how much money today is equivalent to a future sum.",
    usedFor: "Calculate how much you need to invest today for a future goal, loan principal calculation.",
    realExample: "=PV(8%/12, 240, -15000) — principal amount for Rs 15,000 EMI at 8% for 20 years",
    exampleTable: {
      headers: ["EMI", "Annual Rate", "Months", "Loan Amount (PV)"],
      rows: [["15000", "8%", "240", "=PV(B2/12,C2,-A2) → ₹17,92,689"]]
    },
    teacherExplanation: "PV present value calculate karta hai. Agar aap Rs 15,000 EMI afford kar sakte ho, 8% rate pe 20 saal ke liye kitna loan milega? PV(8%/12, 240, -15000) = Rs 17.9 lakh loan milega.",
    hinglishTip: "PV = aaj ki value. Kitna loan milega given EMI pe!",
    commonErrors: "Result negative aa sakta hai — ye outflow indicate karta hai. ABS() se positive banao.",
    difficulty: "Advanced",
    tags: ["pv", "present value", "loan", "current value", "borrowing"]
  },
  {
    id: "f-fin-4",
    name: "RATE",
    category: "Financial",
    syntax: "=RATE(nper, pmt, pv, [fv], [type])",
    shortSyntax: "=RATE(C2, -D2, A2)*12",
    description: "Calculates the INTEREST RATE per period for a loan or investment.",
    usedFor: "Find actual interest rate of a loan given EMI, find annual return of an investment.",
    realExample: "=RATE(240, -16729, 2000000)*12 — find annual rate for Rs 20 lakh loan with Rs 16,729 EMI",
    exampleTable: {
      headers: ["Loan", "EMI", "Months", "Annual Rate"],
      rows: [["2000000", "16729", "240", "=RATE(C2,-B2,A2)*12 → 8%"]]
    },
    teacherExplanation: "RATE given loan amount aur EMI se interest rate calculate karta hai. Bank ne Rs 16,729 EMI bataya Rs 20 lakh ke liye — RATE formula se check karo ki actual interest rate kya hai!",
    hinglishTip: "RATE = interest rate nikalo. Loan amount, EMI, tenure se rate calculate!",
    commonErrors: "Monthly rate aata hai — annual ke liye *12 karo.",
    difficulty: "Advanced",
    tags: ["rate", "interest rate", "loan rate", "investment return"]
  },
  {
    id: "f-fin-5",
    name: "NPER",
    category: "Financial",
    syntax: "=NPER(rate, pmt, pv, [fv], [type])",
    shortSyntax: "=NPER(B2/12, -C2, A2)",
    description: "Calculates the NUMBER OF PERIODS needed to pay off a loan or reach a savings goal.",
    usedFor: "How many months to pay off a loan at given EMI, how many years to reach savings goal.",
    realExample: "=NPER(8%/12, -20000, 2000000) — how many months to repay Rs 20 lakh at Rs 20,000 EMI",
    exampleTable: {
      headers: ["Loan", "Monthly EMI", "Rate/Year", "Months Needed"],
      rows: [["2000000", "20000", "8%", "=NPER(C2/12,-B2,A2) → 163 months"]]
    },
    teacherExplanation: "NPER batata hai kitne months/years me loan close hoga. 20 lakh loan, 20 thousand EMI, 8% rate — kitne mahine lagenge? NPER = 163 months = ~13.6 saal.",
    hinglishTip: "NPER = kitne mahine/saal lagenge. Loan kab khatam hoga!",
    commonErrors: "Monthly periods me result aata hai — saal ke liye /12 karo.",
    difficulty: "Advanced",
    tags: ["nper", "periods", "loan tenure", "how many months"]
  },
  {
    id: "f-fin-6",
    name: "IPMT",
    category: "Financial",
    syntax: "=IPMT(rate, per, nper, pv)",
    shortSyntax: "=IPMT(B2/12, C2, D2, -A2)",
    description: "Calculates the INTEREST PORTION of a specific loan payment for a given period.",
    usedFor: "Loan amortization schedule, see how much interest vs principal you pay in each EMI.",
    realExample: "=IPMT(8%/12, 1, 240, -2000000) — interest paid in first EMI",
    exampleTable: {
      headers: ["Period", "EMI", "Interest Part", "Principal Part"],
      rows: [
        ["1", "16729", "=IPMT(8%/12,1,240,2000000) → 13,333", "=PMT-IPMT → 3,396"],
        ["120", "16729", "~9,000 (less interest now)", "~7,729"]
      ]
    },
    teacherExplanation: "IPMT batata hai ki aapke EMI me se kitna Interest hai aur kitna Principal. Loan ke pehle saal me zyada interest hota hai, aakhiri saal me zyada principal. Loan amortization schedule banane ke liye IPMT use karte hain!",
    hinglishTip: "IPMT = EMI me kitna interest hai. Loan ke pehle zyada interest, baad me kam!",
    commonErrors: "per (period number) 1 se start hota hai, 0 nahi.",
    difficulty: "Advanced",
    tags: ["ipmt", "interest payment", "amortization", "loan schedule", "emi breakdown"]
  },

  // ==================================================
  // 7. DYNAMIC ARRAY FUNCTIONS (Excel 365/2021)
  // ==================================================
  {
    id: "f-dyn-1",
    name: "FILTER",
    category: "Dynamic Arrays",
    syntax: "=FILTER(array, include, [if_empty])",
    shortSyntax: "=FILTER(A2:C20, B2:B20=\"Mumbai\")",
    description: "Returns only the rows from a range that meet a specified condition — results 'spill' automatically.",
    usedFor: "Extract all Mumbai employees, show only pending invoices, dynamic filtered report.",
    realExample: "=FILTER(A2:C20, B2:B20=\"Mumbai\", \"No data\") — show all Mumbai branch rows",
    exampleTable: {
      headers: ["Employee", "City", "Salary", "", "FILTER Result"],
      rows: [
        ["Rahul", "Mumbai", "35000", "", "Rahul | Mumbai | 35000"],
        ["Priya", "Delhi", "42000", "", "Amit | Mumbai | 28000"],
        ["Amit", "Mumbai", "28000", "", ""]
      ]
    },
    teacherExplanation: "FILTER ek range se matching rows seedha extract kar deta hai — result automatically neeche spill hota hai. VLOOKUP ya manual filter ki zaroorat nahi. Mumbai employees ki list chahiye: FILTER(full table, City column = 'Mumbai'). Automatic update hoti hai jab data change hota hai!",
    hinglishTip: "FILTER = condition ke matching rows nikalo. Result automatic spill hota hai neeche!",
    commonErrors: "Excel 365 / 2021 only. Purane versions me SPILL nahi hota.",
    difficulty: "Advanced",
    tags: ["filter", "dynamic array", "spill", "extract rows", "365"]
  },
  {
    id: "f-dyn-2",
    name: "UNIQUE",
    category: "Dynamic Arrays",
    syntax: "=UNIQUE(array, [by_col], [exactly_once])",
    shortSyntax: "=UNIQUE(A2:A100)",
    description: "Returns a list of unique (non-duplicate) values from a range, automatically removing duplicates.",
    usedFor: "Get unique city list from data, unique product categories, unique customer names.",
    realExample: "=UNIQUE(B2:B100) — extract unique city names from 100 rows of data",
    exampleTable: {
      headers: ["Raw Cities", "", "UNIQUE Result"],
      rows: [["Mumbai", "", "Mumbai"], ["Delhi", "", "Delhi"], ["Mumbai", "", "Pune"], ["Pune", "", ""], ["Delhi", "", ""]]
    },
    teacherExplanation: "UNIQUE ek range se duplicate hatakar sirf unique values deta hai. 100 rows me different cities hain — UNIQUE ek baar me distinct cities ki list de deta hai. Remove Duplicates button se alag — ye formula based hai, data change hone par automatic update hota hai!",
    hinglishTip: "UNIQUE = duplicate hatakar unique list banao. Automatic aur dynamic!",
    commonErrors: "Excel 365/2021 only. Sort nahi hota by default — SORT ke saath combine karo.",
    difficulty: "Advanced",
    tags: ["unique", "distinct values", "deduplicate", "list", "dynamic"]
  },
  {
    id: "f-dyn-3",
    name: "SORT",
    category: "Dynamic Arrays",
    syntax: "=SORT(array, [sort_index], [sort_order], [by_col])",
    shortSyntax: "=SORT(A2:C20, 3, -1)",
    description: "Returns a sorted version of an array. sort_order: 1=ascending, -1=descending.",
    usedFor: "Dynamic sorted reports that auto-update, rank employees by salary, sort by date.",
    realExample: "=SORT(A2:C20, 3, -1) — sort all data by column 3 (salary) in descending order",
    exampleTable: {
      headers: ["Sorted Result — Highest Salary First"],
      rows: [["Director | Finance | 150000"], ["Manager | HR | 65000"], ["Analyst | Sales | 35000"]]
    },
    teacherExplanation: "SORT data ko dynamically sort karta hai. Original data touch nahi hota — sorted copy neeche spill hoti hai. New employee add hone par sorted list automatically update ho jati hai. Top 5 employees by salary: SORT(data, 3, -1) then TAKE first 5.",
    hinglishTip: "SORT = dynamic sorted list. 1=chhote se bade, -1=bade se chhote!",
    commonErrors: "Excel 365/2021 only. Sort_index column number hai (1=first column).",
    difficulty: "Advanced",
    tags: ["sort", "dynamic sort", "rank", "descending", "365"]
  },
  {
    id: "f-dyn-4",
    name: "SORTBY",
    category: "Dynamic Arrays",
    syntax: "=SORTBY(array, by_array1, [sort_order1], [by_array2, sort_order2], ...)",
    shortSyntax: "=SORTBY(A2:C20, C2:C20, -1)",
    description: "Sorts a range by one or more external arrays/columns — more flexible than SORT.",
    usedFor: "Sort employees by salary, sort products by price, multi-level sort.",
    realExample: "=SORTBY(A2:C20, B2:B20, 1, C2:C20, -1) — sort by city (asc) then by salary (desc)",
    exampleTable: {
      headers: ["Result — City Alphabetical, then Salary High to Low"],
      rows: [["Priya | Delhi | 42000"], ["Amit | Mumbai | 35000"], ["Rahul | Mumbai | 28000"]]
    },
    teacherExplanation: "SORTBY zyada flexible hai. Kisi bhi column ya external range ke basis par sort kar sakte ho. SORT me column number dete hain, SORTBY me actual range dete hain — zyada powerful!",
    hinglishTip: "SORTBY = baahri column se sort. Multi-level sort ke liye!",
    commonErrors: "by_array same size hona chahiye jitna array hai.",
    difficulty: "Advanced",
    tags: ["sortby", "multi-sort", "dynamic", "365", "flexible sort"]
  },
  {
    id: "f-dyn-5",
    name: "XLOOKUP",
    category: "Dynamic Arrays",
    syntax: "=XLOOKUP(lookup_value, lookup_array, return_array, [not_found], [match_mode], [search_mode])",
    shortSyntax: "=XLOOKUP(E2, B:B, D:D, \"Not Found\")",
    description: "Modern VLOOKUP replacement — searches in any direction, handles errors, returns multiple columns.",
    usedFor: "All VLOOKUP tasks + left-side lookup + multiple return columns + reverse search.",
    realExample: "=XLOOKUP(F2, A2:A100, B2:D100, \"Not Found\") — return 3 columns at once!",
    exampleTable: {
      headers: ["Advantage", "VLOOKUP", "XLOOKUP"],
      rows: [
        ["Left column lookup", "❌ Cannot", "✅ Can"],
        ["Multiple columns return", "❌ One at a time", "✅ One formula"],
        ["Not found handling", "❌ Need IFERROR", "✅ Built-in"],
        ["Reverse search", "❌ No", "✅ Yes"]
      ]
    },
    teacherExplanation: "XLOOKUP Microsoft ka VLOOKUP ka naya upgrade hai. Sabse badi advantage: left column bhi search kar sakta hai, multiple columns ek saath return kar sakta hai, aur 'Not Found' automatic handle karta hai. Office 365 use karte ho toh XLOOKUP seekho — yahi future hai!",
    hinglishTip: "XLOOKUP = VLOOKUP 2.0. Zyada powerful, zyada flexible, zyada smart!",
    commonErrors: "Excel 365/2021+ only. Purane versions me VLOOKUP use karo.",
    difficulty: "Advanced",
    tags: ["xlookup", "modern lookup", "365", "flexible", "multiple columns"]
  },

  // ==================================================
  // 8. INFORMATION & ERROR FUNCTIONS
  // ==================================================
  {
    id: "f-info-1",
    name: "ISBLANK",
    category: "Information & Error",
    syntax: "=ISBLANK(value)",
    shortSyntax: "=ISBLANK(A2)",
    description: "Returns TRUE if a cell is completely empty, FALSE if it has any content (even a space).",
    usedFor: "Check for missing data before calculations, conditional formatting of empty cells.",
    realExample: "=IF(ISBLANK(B2), \"Missing\", B2) — show 'Missing' if salary is empty",
    exampleTable: {
      headers: ["Cell", "Content", "ISBLANK Result"],
      rows: [["A1", "Rahul", "FALSE"], ["A2", "(empty)", "TRUE"], ["A3", "' '(space)", "FALSE"]]
    },
    teacherExplanation: "ISBLANK cell bilkul khali hai ya nahi check karta hai. Salary column me koi cell khali ho toh 'Missing' dikhao: IF(ISBLANK(B2), 'Missing', B2).",
    hinglishTip: "ISBLANK = cell khali hai kya? True/False batata hai!",
    commonErrors: "Ek space wala cell ISBLANK = FALSE. Truly empty cell chahiye.",
    difficulty: "Beginner",
    tags: ["isblank", "empty check", "missing data", "validation"]
  },
  {
    id: "f-info-2",
    name: "ISNUMBER",
    category: "Information & Error",
    syntax: "=ISNUMBER(value)",
    shortSyntax: "=ISNUMBER(A2)",
    description: "Returns TRUE if a cell contains a numeric value, FALSE for text or empty cells.",
    usedFor: "Validate data entry, check if imported values are numbers or text-formatted numbers.",
    realExample: "=IF(ISNUMBER(B2), B2*0.18, \"Not a number\") — calculate GST only if numeric",
    exampleTable: {
      headers: ["Value", "ISNUMBER"],
      rows: [["50000", "TRUE"], ["fifty thousand", "FALSE"], ["'50000 (text)", "FALSE"]]
    },
    teacherExplanation: "ISNUMBER check karta hai ki value sach me number hai ya text jaisi dikhne wali number. Import data me '50000' text hota hai — ISNUMBER = FALSE, calculation fail hogi.",
    hinglishTip: "ISNUMBER = number hai kya? Import data validate karne ke liye!",
    commonErrors: "Text formatted numbers ISNUMBER = FALSE dete hain — VALUE() se convert karo.",
    difficulty: "Intermediate",
    tags: ["isnumber", "type check", "validation", "number format"]
  },
  {
    id: "f-info-3",
    name: "ISERROR / ISERR / ISNA",
    category: "Information & Error",
    syntax: "=ISERROR(value), =ISNA(value)",
    shortSyntax: "=ISERROR(VLOOKUP(A2,B:C,2,0))",
    description: "Returns TRUE if a cell contains any error (ISERROR) or specifically #N/A (ISNA).",
    usedFor: "Check before displaying formula result, conditional formatting based on errors.",
    realExample: "=IF(ISERROR(VLOOKUP(A2,B:C,2,0)),\"Not Found\",VLOOKUP(A2,B:C,2,0))",
    exampleTable: {
      headers: ["Formula Result", "ISERROR", "Use in IF"],
      rows: [["#N/A", "TRUE", "Show 'Not Found'"], ["#VALUE!", "TRUE", "Show 'Error'"], ["35000", "FALSE", "Show 35000"]]
    },
    teacherExplanation: "ISERROR koi bhi error pakadta hai. ISNA sirf #N/A pakadta hai. Pehle IFERROR use karo — ye simple hai. Advanced control chahiye toh ISERROR/ISNA use karo.",
    hinglishTip: "ISERROR = koi bhi error hai kya? ISNA = sirf #N/A hai kya?",
    commonErrors: "IFERROR zyada simple hai. ISERROR old style — mostly IFERROR prefer karo.",
    difficulty: "Intermediate",
    tags: ["iserror", "isna", "error check", "validation", "conditional"]
  },
  {
    id: "f-info-4",
    name: "CELL",
    category: "Information & Error",
    syntax: "=CELL(info_type, [reference])",
    shortSyntax: "=CELL(\"type\", A2)",
    description: "Returns information about a cell's formatting, location, or contents.",
    usedFor: "Check cell type (text/number/blank), get filename, check number format.",
    realExample: "=CELL(\"type\",A2) — returns 'b'(blank), 'l'(label/text), 'v'(value/number)",
    exampleTable: {
      headers: ["Info Type", "Returns"],
      rows: [["\"type\"", "b=blank, l=text, v=number"], ["\"address\"", "Absolute cell address"], ["\"filename\"", "Full file path"]]
    },
    teacherExplanation: "CELL kisi cell ki information deta hai. Useful for audit formulas ya dynamic references.",
    hinglishTip: "CELL = cell ki information. type, address, filename — sab pata karo!",
    commonErrors: "Volatile function — recalculate hota rehta hai.",
    difficulty: "Advanced",
    tags: ["cell", "info", "type check", "cell information", "metadata"]
  },

  // ==================================================
  // 9. ARRAY & ADVANCED FUNCTIONS
  // ==================================================
  {
    id: "f-adv-1",
    name: "SUMPRODUCT",
    category: "Array & Advanced",
    syntax: "=SUMPRODUCT(array1, [array2], ...)",
    shortSyntax: "=SUMPRODUCT(B2:B10, C2:C10)",
    description: "Multiplies corresponding elements of arrays and returns the sum of those products. Excel's most versatile formula.",
    usedFor: "Weighted average, total sales (qty * price), count/sum with multiple conditions.",
    realExample: "=SUMPRODUCT(B2:B10, C2:C10) — total sales (Qty * Price for each product)",
    exampleTable: {
      headers: ["Product", "Qty", "Price", "Total"],
      rows: [["Laptop", "3", "45000", ""], ["Mouse", "10", "500", ""], ["TOTAL", "", "", "=SUMPRODUCT(B2:B3,C2:C3) → 140000"]]
    },
    teacherExplanation: "SUMPRODUCT Excel ka sabse powerful formula hai! Multiple columns ko pair-wise multiply karke total karta hai. Sales total: SUMPRODUCT(Qty column, Price column) = Qty1*Price1 + Qty2*Price2 + ... ek formula me! Weighted average bhi is se banta hai.",
    hinglishTip: "SUMPRODUCT = multiply karo + add karo. Sales total ek formula me!",
    commonErrors: "Sab arrays ek hi size ke hone chahiye. Unequal sizes pe #VALUE! error.",
    difficulty: "Advanced",
    tags: ["sumproduct", "array", "weighted average", "sales total", "multiply sum"]
  },
  {
    id: "f-adv-2",
    name: "LARGE / SMALL",
    category: "Array & Advanced",
    syntax: "=LARGE(array, k), =SMALL(array, k)",
    shortSyntax: "=LARGE(B2:B100, 1)",
    description: "LARGE returns the kth LARGEST value; SMALL returns the kth SMALLEST value from a range.",
    usedFor: "Top 3 salaries, 2nd highest sales, lowest 5 scores, ranking without sorting.",
    realExample: "=LARGE(C2:C100, 1) — highest salary. =LARGE(C2:C100, 2) — 2nd highest.",
    exampleTable: {
      headers: ["Formula", "Result"],
      rows: [
        ["=LARGE(B2:B10,1)", "Highest (1st)"],
        ["=LARGE(B2:B10,2)", "2nd Highest"],
        ["=SMALL(B2:B10,1)", "Lowest (1st)"],
        ["=SMALL(B2:B10,3)", "3rd Lowest"]
      ]
    },
    teacherExplanation: "LARGE(range, 1) = MAX jaisa hai. LARGE(range, 2) = 2nd highest. Sales ranking report me top 3 performers dekhne ke liye LARGE(Sales, 1), LARGE(Sales, 2), LARGE(Sales, 3) use karo!",
    hinglishTip: "LARGE(range, 2) = 2nd sabse bada. SMALL(range, 2) = 2nd sabse chhota!",
    commonErrors: "k range se bada nahi hona chahiye (jitne numbers hain).",
    difficulty: "Intermediate",
    tags: ["large", "small", "ranking", "top n", "kth value"]
  },
  {
    id: "f-adv-3",
    name: "RANK",
    category: "Array & Advanced",
    syntax: "=RANK(number, ref, [order])",
    shortSyntax: "=RANK(B2, B$2:B$20, 0)",
    description: "Returns the rank of a number within a list. order: 0=descending (highest=rank 1), 1=ascending (lowest=rank 1).",
    usedFor: "Rank employees by sales, students by marks, products by revenue.",
    realExample: "=RANK(C2, C$2:C$100, 0) — rank each employee's salary (highest = 1)",
    exampleTable: {
      headers: ["Employee", "Sales", "Rank"],
      rows: [["Rahul", "150000", "=RANK(B2,B$2:B$4,0) → 2"], ["Priya", "180000", "→ 1"], ["Amit", "120000", "→ 3"]]
    },
    teacherExplanation: "RANK ek value ki rank bata deta hai puri list me. Sales leader kaun hai? RANK formula each employee ke liye rank calculate karta hai. $signs reference lock karo taaki drag karne par range badlne na lage!",
    hinglishTip: "RANK = tera number range me kaunwa hai. 0=highest first, 1=lowest first!",
    commonErrors: "Duplicate values ko same rank milta hai aur next rank skip ho jata hai.",
    difficulty: "Intermediate",
    tags: ["rank", "ranking", "sales rank", "performance", "position"]
  },
  {
    id: "f-adv-4",
    name: "TRANSPOSE",
    category: "Array & Advanced",
    syntax: "=TRANSPOSE(array)",
    shortSyntax: "=TRANSPOSE(A1:E3)",
    description: "Converts rows to columns and columns to rows — flips the orientation of a range.",
    usedFor: "Flip horizontal data to vertical, convert month-in-columns layout to month-in-rows.",
    realExample: "=TRANSPOSE(A1:E3) — flip a 3x5 table to 5x3",
    exampleTable: {
      headers: ["Original (rows)", "", "Transposed (columns)"],
      rows: [["Jan | Feb | Mar", "→", "Jan"], ["100 | 200 | 300", "→", "Feb, 100"], ["", "", "Mar, 200, 300"]]
    },
    teacherExplanation: "TRANSPOSE rows aur columns ko flip karta hai. Agar data horizontally (months in columns) hai aur vertically chahiye — TRANSPOSE use karo. Excel 365 me formula based hai aur automatically spills.",
    hinglishTip: "TRANSPOSE = rows ko columns, columns ko rows banao. Data orientation flip!",
    commonErrors: "Old Excel me array formula (Ctrl+Shift+Enter) chahiye. Excel 365 me sirf Enter.",
    difficulty: "Advanced",
    tags: ["transpose", "flip", "rows columns", "orientation", "pivot"]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXCEL_FORMULAS };
}
