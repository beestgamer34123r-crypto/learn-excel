// Excel Mastery Hub - Comprehensive Teacher-Led Curriculum (0 to Master)
// Inspired by Accounts Experts teaching style: warm conversational guidance, real accounting/office scenarios (Payroll, GST, Attendance, Lookups, Pivots, Power Query), and hands-on practice.

const CURRICULUM = [
  // =========================================================================
  // LEVEL 1: BEGINNER (EXCEL 0 TO 1 - FUNDAMENTALS & OFFICE OPERATIONS)
  // =========================================================================
  {
    id: "level-1",
    levelNumber: 1,
    title: "Level 1: Beginner (Excel 0 to 1)",
    subtitle: "Interface, Data Entry, Formatting, Core 10 Functions, AutoFill, Paste Special & Printing",
    badge: "Excel Novice",
    icon: "grid",
    color: "from-emerald-500 to-green-600",
    modules: [
      {
        id: "l1-m1",
        title: "1. The Excel Anatomy & Layout",
        duration: "6 mins",
        xp: 30,
        teacherIntro: "Namaste Dosto! Welcome to Excel Class 1. Jab bhi aap kisi office ya accounting firm me pehli baar computer par baithenge, Excel hi aapka sabse pehla saathi hoga. Aaiye pehle iske ghar (interface) ko achhe se samajhte hain taaki kaam karte waqt aap kabhi bhatkein nahi.",
        hinglishSummary: "Excel ka layout samjhein: Rows, Columns, Cells aur Formula Bar kya hote hain aur Name Box ka kya kaam hai.",
        overview: "Excel is a digital grid made of horizontal Rows and vertical Columns. The point where a row and column cross is called a Cell. Every cell has a unique address (like B4 or C10).",
        sections: [
          {
            heading: "Interface Components Every Accountant Must Know",
            content: `
- **Title Bar & Ribbon**: Top menu with tabs like Home, Insert, Page Layout, Formulas, and Data.
- **Formula Bar (fx)**: This is the brain scanner! Whatever you type or calculate in a cell shows up here. If a cell shows 100, the formula bar tells you if it's plain 100 or \`=50+50\`.
- **Name Box**: Located to the left of the formula bar. It shows the active cell address (e.g., **A1**). You can also type any cell name here and press Enter to teleport instantly!
- **Columns (Letters)**: Vertical strips labeled A, B, C... up to XFD (total 16,384 columns).
- **Rows (Numbers)**: Horizontal lines labeled 1, 2, 3... up to 1,048,576 rows.
- **Cell**: The intersection. For example, Column B and Row 3 meet at **B3**.
            `
          },
          {
            heading: "Teacher's Pro-Tip & Shortcut 💡",
            content: "Students aksar mouse se scroll karte rehte hain. Keyboard se \`Ctrl + Home\` dabayein, aap bina mouse chuye seedha cell **A1** par wapas aa jayenge!"
          }
        ],
        practice: {
          instruction: "Look at the mini spreadsheet. In which cell is the value 'Target Sales' located?",
          initialGrid: {
            headers: ["A", "B", "C"],
            rows: [
              { rowNum: 1, cells: ["Region", "Sales", "Status"] },
              { rowNum: 2, cells: ["North", "4500", "Pending"] },
              { rowNum: 3, cells: ["Target Sales", "5000", "Goal"] }
            ]
          },
          question: "Type the cell reference where 'Target Sales' is located (e.g. A1, B2):",
          expectedAnswer: ["A3", "a3"],
          hint: "Check Column A and look down to Row 3. Combine column letter and row number!",
          solutionExplanation: "'Target Sales' is located in Column A and Row 3, so its cell reference is A3."
        }
      },
      {
        id: "l1-m2",
        title: "2. Data Entry & Essential Cell Formatting",
        duration: "7 mins",
        xp: 35,
        teacherIntro: "Dosto! Data entry sirf type karna nahi hota. Ek professional accountant ka data dekh kar hi client ya boss ko pata chal jata hai ki kaam kitna saaf hai. Text hamesha left-align hota hai aur numbers hamesha right-align hote hain. Agar number left me dikhe, samajh lijiye Excel use text samajh raha hai!",
        hinglishSummary: "Numbers, Currency (₹), Dates, Wrap Text aur Merge & Center use karke clean professional sheet banana seekhein.",
        overview: "Proper formatting prevents disastrous calculation errors and makes your reports readable and ready for management.",
        sections: [
          {
            heading: "Essential Formatting Tools (Home Tab)",
            content: `
- **Number Formatting**: Select cells and press \`Ctrl + 1\` to open the Format Cells dialog.
- **Currency Format**: Format monetary numbers with ₹ or $ symbols. Shortcut: \`Ctrl + Shift + $\`.
- **Wrap Text (\`Alt + H + W\`)**: If a header like 'Employee Provident Fund' overflows into the next cell, Wrap Text stacks the words vertically inside the same cell.
- **Merge & Center (\`Alt + H + M + C\`)**: Combines multiple cells (like A1 to E1) into one large banner cell for report titles.
            `
          },
          {
            heading: "Common Student Mistake Alert ⚠️",
            content: "Kabhi bhi cell me haath se 'Rs. 500' mat likhein! Agar aap 'Rs.' sath me type kar denge toh Excel use Text manega aur SUM ya Multiply karne par \`#VALUE!\` error de dega. Number hamesha plain 500 type karein aur Currency format \`Ctrl + Shift + $\` se lagayein."
          }
        ],
        practice: {
          instruction: "What keyboard shortcut opens the 'Format Cells' dialog box instantly in Excel?",
          initialGrid: {
            headers: ["Formatting Shortcuts"],
            rows: [
              { rowNum: 1, cells: ["Ctrl + 1 (Format Cells)"] },
              { rowNum: 2, cells: ["Ctrl + B (Bold)"] },
              { rowNum: 3, cells: ["Ctrl + U (Underline)"] }
            ]
          },
          question: "Type the shortcut to open Format Cells dialog (e.g. Ctrl + 1):",
          expectedAnswer: ["Ctrl + 1", "CTRL + 1", "ctrl + 1", "Ctrl+1", "ctrl+1"],
          hint: "It combines the 'Ctrl' key and the number '1'.",
          solutionExplanation: "Pressing Ctrl + 1 opens the Format Cells window where you can adjust Numbers, Alignment, Borders, and Fonts."
        }
      },
      {
        id: "l1-m3",
        title: "3. Basic Math Operators & AutoSum (ALT + =)",
        duration: "8 mins",
        xp: 40,
        teacherIntro: "Dosto, Excel me calculation karne ke liye kisi calculator ki zaroorat nahi hoti. Bas ek rule yaad rakhna: Excel me koi bhi calculation ya formula hamesha barabar (=) ke nishan se shuru hota hai. Agar barabar nahi lagaya, toh Excel use normal text manega!",
        hinglishSummary: "Excel me +, -, *, / use karna aur AutoSum ka secret shortcut (ALT + =) seekhein.",
        overview: "Excel supports standard arithmetic operators and follows the BODMAS (Parentheses first, Exponents, Multiplication & Division, Addition & Subtraction) hierarchy.",
        sections: [
          {
            heading: "The 4 Core Operators",
            content: `
| Operator | Action | Example | Result |
| :--- | :--- | :--- | :--- |
| **\`+\`** | Addition | \`=100 + 50\` or \`=A2 + B2\` | 150 |
| **\`-\`** | Subtraction | \`=500 - 120\` or \`=A2 - B2\` | 380 |
| **\`*\`** | Multiplication | \`=25 * 4\` or \`=A2 * B2\` | 100 |
| **\`/\`** | Division | \`=1000 / 10\` or \`=A2 / B2\` | 100 |

**AutoSum Magic (\`ALT + =\`)**:
Kisi bhi column ya row ka total karne ke liye khali cell me jayein aur keyboard se \`ALT + =\` dabayein. Excel automatic upar ke sabhi numbers ko detect karke \`=SUM(...)\` likh deta hai!
            `
          }
        ],
        practice: {
          instruction: "Write a formula in cell D2 to calculate Total Amount by multiplying Quantity (B2) with Rate (C2).",
          initialGrid: {
            headers: ["A (Item)", "B (Qty)", "C (Rate)", "D (Total)"],
            rows: [
              { rowNum: 1, cells: ["Product", "Qty", "Rate", "Total"] },
              { rowNum: 2, cells: ["Notebook", "10", "45", ""] }
            ]
          },
          question: "Write the formula for cell D2:",
          expectedAnswer: ["=B2*C2", "=C2*B2", "=B2 * C2", "=C2 * B2"],
          hint: "Start with '=' and multiply cell B2 by cell C2 using '*'.",
          solutionExplanation: "`=B2*C2` multiplies 10 with 45, computing 450."
        }
      },
      {
        id: "l1-m4",
        title: "4. The Essential Core 10 Functions",
        duration: "10 mins",
        xp: 50,
        teacherIntro: "Students! Agar aap kisi interview me jaoge, toh interviewer aapse sabse pehle yahi 10 functions puchega. SUM, AVERAGE, COUNT, COUNTA, COUNTBLANK, MIN, MAX, ROUND, INT, PRODUCT. Ye daily office work ke building blocks hain.",
        hinglishSummary: "Excel ke 10 sabse zaroori functions jo har accountant aur data entry executive ko aane chahiye.",
        overview: "Functions are predefined formulas. Instead of typing `=A1+A2+A3...`, we use range syntax like `=SUM(A1:A10)`.",
        sections: [
          {
            heading: "Function Breakdown & When to Use",
            content: `
1. **\`=SUM(range)\`**: Numbers ko jodta hai (Total karta hai).
2. **\`=AVERAGE(range)\`**: Numbers ka ausat (arithmetic mean) nikalta hai.
3. **\`=COUNT(range)\`**: Sirf un cells ko ginta hai jinme **NUMBERS** hon.
4. **\`=COUNTA(range)\`**: Har us cell ko ginta hai jo khali nahi hai (Text + Numbers dono).
5. **\`=COUNTBLANK(range)\`**: Khali (empty) cells ki ginti karta hai (Pending records check karne ke liye).
6. **\`=MIN(range)\`**: Range me se sabse chhota number nikalta hai.
7. **\`=MAX(range)\`**: Range me se sabse bada number nikalta hai.
8. **\`=ROUND(number, num_digits)\`**: Decimals ko round off karta hai (e.g. \`=ROUND(125.678, 2)\` ➔ 125.68).
9. **\`=INT(number)\`**: Decimal hata kar pure integer value deta hai (e.g. \`=INT(99.9)\` ➔ 99).
10. **\`=PRODUCT(range)\`**: Sabhi numbers ko aapas me guna (multiply) karta hai.
            `
          }
        ],
        practice: {
          instruction: "Which function counts cells that contain TEXT as well as NUMBERS (any non-empty cell)?",
          initialGrid: {
            headers: ["Function Options"],
            rows: [
              { rowNum: 1, cells: ["COUNT"] },
              { rowNum: 2, cells: ["COUNTA"] },
              { rowNum: 3, cells: ["COUNTBLANK"] }
            ]
          },
          question: "Type the function name (COUNT, COUNTA, or COUNTBLANK):",
          expectedAnswer: ["COUNTA", "counta", "=COUNTA", "=counta"],
          hint: "The 'A' in the function name stands for 'All' (count all non-empty cells).",
          solutionExplanation: "COUNTA counts all cells containing data (text, numbers, errors), while COUNT only counts numbers."
        }
      },
      {
        id: "l1-m5",
        title: "5. AutoFill & Flash Fill Magic (Ctrl + E)",
        duration: "7 mins",
        xp: 45,
        teacherIntro: "Dosto! Smart worker aur hard worker me fark yahi hota hai. Jo kaam dusre log 2 ghante me haath se type karke karte hain, wo aap Flash Fill (Ctrl + E) se 2 second me kar sakte ho!",
        hinglishSummary: "Drag karke series fill karna aur automatic pattern recognition (Flash Fill Ctrl + E).",
        overview: "AutoFill uses Excel's Fill Handle (the tiny square at bottom-right of active cell) to repeat values or generate series. Flash Fill automatically detects patterns and fills the remaining rows.",
        sections: [
          {
            heading: "Flash Fill in Action (\`Ctrl + E\`)",
            content: `
- **Splitting Full Names**: Column A has 'Sachin Tendulkar'. In Column B row 1, type 'Sachin'. Press **Ctrl + E** ➔ Excel automatically extracts first names for all 5,000 rows!
- **Extracting Numbers**: Column A has 'INV-2024-001'. Type '001' in Column B and press **Ctrl + E** ➔ Extracts all invoice digits instantly!
- **Combining Text**: Column A has 'Amit', Column B has 'Sharma'. Type 'Amit Sharma' in Column C and press **Ctrl + E** ➔ Joins all rows!
            `
          }
        ],
        practice: {
          instruction: "What keyboard shortcut triggers Flash Fill to automatically complete patterns across a column?",
          initialGrid: {
            headers: ["AI Shortcuts in Excel"],
            rows: [
              { rowNum: 1, cells: ["Ctrl + E (Flash Fill)"] },
              { rowNum: 2, cells: ["Ctrl + F (Find)"] },
              { rowNum: 3, cells: ["Ctrl + H (Replace)"] }
            ]
          },
          question: "Type the shortcut for Flash Fill (e.g. Ctrl + E):",
          expectedAnswer: ["Ctrl + E", "CTRL + E", "ctrl + e", "Ctrl+E", "ctrl+e"],
          hint: "It combines 'Ctrl' with the letter 'E'.",
          solutionExplanation: "Ctrl + E triggers Flash Fill, instantly recognizing patterns and populating data without formulas."
        }
      },
      {
        id: "l1-m6",
        title: "6. Paste Special Secrets (Values, Transpose & Skip Blanks)",
        duration: "8 mins",
        xp: 45,
        teacherIntro: "Students! Aksar office me aisa hota hai ki aapne formula lagakar total nikala, aur jab us cell ko copy karke dusri jagah paste kiya, toh wahan #REF! error aa gaya! Kyun? Kyunki aapne Formula paste kar diya, Value nahi! Aaiye Paste Special ke raaz samajhte hain.",
        hinglishSummary: "Formula hata kar sirf values rakhna (Paste Values), aur rows ko columns me badalna (Transpose).",
        overview: "Paste Special (`Ctrl + Alt + V`) lets you choose exactly what to paste: Formulas, Values, Formats, or Transpose.",
        sections: [
          {
            heading: "Top Paste Special Options",
            content: `
- **Paste Values (\`Alt + E + S + V\` or Right-click > 123)**: Copies only the calculated result, stripping away the formula. Essential before sending files to clients!
- **Transpose (\`Alt + E + S + E\`)**: Flips horizontal rows into vertical columns, or vertical columns into horizontal rows.
- **Paste Formats**: Copies only colors, borders, and fonts without touching the numbers.
- **Operation (Add / Multiply)**: Can add a bonus 1000 or multiply an entire column by 1.18 directly without formulas!
            `
          }
        ],
        practice: {
          instruction: "Which Paste Special feature converts a vertical table (columns) into a horizontal table (rows)?",
          initialGrid: {
            headers: ["Feature Name"],
            rows: [
              { rowNum: 1, cells: ["Paste Values"] },
              { rowNum: 2, cells: ["Transpose"] },
              { rowNum: 3, cells: ["Paste Formulas"] }
            ]
          },
          question: "Type the feature name (Values, Transpose, or Formulas):",
          expectedAnswer: ["Transpose", "transpose", "TRANSPOSE"],
          hint: "It rotates the orientation by 90 degrees.",
          solutionExplanation: "Transpose swaps row and column axes, converting horizontal data to vertical and vice versa."
        }
      },
      {
        id: "l1-m7",
        title: "7. Sorting & Filtering Large Office Datasets",
        duration: "9 mins",
        xp: 45,
        teacherIntro: "Dosto! Jab aapke samne 20,000 customers ki list aati hai aur boss kahenge ki 'Mujhe sirf Delhi ke wo customers dikhao jinka balance 50,000 se zyada hai', toh Filter lagana aana chahiye. Filter Excel ka chashma hai jo faltu data ko chupata hai aur zaroori data dikhata hai.",
        hinglishSummary: "Data Tab ke filter aur sorting tools se data ko organize karna aur filter shortcut (Ctrl + Shift + L) seekhein.",
        overview: "Sorting arranges rows in ascending or descending order. Filtering temporarily hides rows that don't match your criteria.",
        sections: [
          {
            heading: "Sorting & Filter Mastery",
            content: `
- **AutoFilter Shortcut**: Press \`Ctrl + Shift + L\` to enable filter dropdowns on headers.
- **Wildcard Filtering**:
  - \`*\` (Asterisk): Matches any number of characters (e.g. typing \`*Sharma\` finds Rohit Sharma, Rahul Sharma).
  - \`?\` (Question mark): Matches exactly one character.
- **Multi-Level Sort (\`Alt + A + S + S\`)**: Sort first by 'State', then by 'City', then by 'Sales'.
            `
          }
        ],
        practice: {
          instruction: "What keyboard shortcut turns AutoFilter dropdown arrows On or Off?",
          initialGrid: {
            headers: ["Filter Shortcuts"],
            rows: [
              { rowNum: 1, cells: ["Ctrl + Shift + L"] },
              { rowNum: 2, cells: ["Ctrl + F"] },
              { rowNum: 3, cells: ["Alt + F4"] }
            ]
          },
          question: "Type the shortcut to toggle AutoFilter (e.g. Ctrl + Shift + L):",
          expectedAnswer: ["Ctrl + Shift + L", "CTRL + SHIFT + L", "ctrl + shift + l", "Ctrl+Shift+L"],
          hint: "It combines Ctrl, Shift, and the letter 'L' (List/Filter).",
          solutionExplanation: "Ctrl + Shift + L instantly toggles filter arrows on the selected table headers."
        }
      },
      {
        id: "l1-m8",
        title: "8. Page Setup & Office Printing Secrets (Fit on 1 Page)",
        duration: "8 mins",
        xp: 40,
        teacherIntro: "Dosto! Office me 90% naye log tab daant khate hain jab wo report ka print nikalte hain aur aakhiri do columns doosre panna par chale jate hain! Pura paper barbaad. Aaiye Page Setup aur Print Area ko 1 page par fit karne ka secret seekhein.",
        hinglishSummary: "Print nikalte waqt table ko 1 page par fit karna, print area set karna aur har page par header repeat karna.",
        overview: "Master Page Break Preview, scaling options, and printing titles so your paper reports look executive-grade.",
        sections: [
          {
            heading: "Printing Best Practices in Office",
            content: `
1. **Page Break Preview (\`Alt + W + L\`)**: Shows blue boundary lines. You can drag blue lines with mouse to force columns into Page 1.
2. **Fit Sheet on One Page**: In Print screen (\`Ctrl + P\`), change 'No Scaling' to **'Fit All Columns on One Page'**.
3. **Repeat Header Row on Every Page (Print Titles)**:
   - Go to **Page Layout tab > Print Titles**.
   - Click 'Rows to repeat at top' and select Row 1.
   - Now, whether your print is 2 pages or 50 pages, header Row 1 will print on top of every single page!
            `
          }
        ],
        practice: {
          instruction: "Which Page Layout feature repeats header rows automatically on every page of a multi-page printed report?",
          initialGrid: {
            headers: ["Print Features"],
            rows: [
              { rowNum: 1, cells: ["Print Titles"] },
              { rowNum: 2, cells: ["Margins"] },
              { rowNum: 3, cells: ["Orientation"] }
            ]
          },
          question: "Type the feature name (Print Titles, Margins, or Orientation):",
          expectedAnswer: ["Print Titles", "print titles", "PRINT TITLES"],
          hint: "Found under Page Layout tab > Page Setup group.",
          solutionExplanation: "Print Titles allows you to designate top rows to repeat at the top of every printed page."
        }
      }
    ]
  },

  // =========================================================================
  // LEVEL 2: INTERMEDIATE (OFFICE & ACCOUNTING ESSENTIALS)
  // =========================================================================
  {
    id: "level-2",
    levelNumber: 2,
    title: "Level 2: Intermediate (Office & Accounting Essentials)",
    subtitle: "Cell Locking ($), Salary Sheet & Payroll, Attendance Sheet, GST Billing, Logic (IF), Text & Dates",
    badge: "Formula Practitioner",
    icon: "layers",
    color: "from-blue-500 to-indigo-600",
    modules: [
      {
        id: "l2-m1",
        title: "1. Cell Referencing & The $ Sign Locking",
        duration: "9 mins",
        xp: 60,
        teacherIntro: "Students, dhyaan se suniye! Agar aapne cell reference ko lock karna ($ lagana) nahi seekha, toh aap kabhi bhi corporate ya accounting Excel me kaam nahi kar paoge. Formula drag karne par cell niche khisak jata hai. Usko fevicol ki tarah chipkane ke liye $ lagate hain!",
        hinglishSummary: "Absolute ($A$1), Relative (A1), aur Mixed ($A1 vs A$1) referencing ka deep concept seekhein.",
        overview: "When you copy or drag a formula, relative cell references move. Absolute references stay frozen.",
        sections: [
          {
            heading: "The 3 Types of Referencing",
            content: `
- **\`A1\` (Relative)**: Column aur Row dono drag karne par aage badhte hain.
- **\`$A$1\` (Absolute Lock)**: Column A aur Row 1 dono lock ho gaye. Formula ko chahe 1,000 rows niche drag karo, wo hamesha A1 ko hi refer karega.
- **\`A$1\` (Row Lock)**: Row 1 fix hai, column move karega.
- **\`$A1\` (Column Lock)**: Column A fix hai, row move karegi.

**Shortcut Alert**: Formula bar me cell reference par cursor rakhein aur **F4** dabayein to cycle locking!
            `
          }
        ],
        practice: {
          instruction: "Write a formula in cell C2 to calculate Tax by multiplying Sales (B2) with the Tax Rate locked in cell E1.",
          initialGrid: {
            headers: ["A (Item)", "B (Sales)", "C (Tax)", "D", "E (Rate)"],
            rows: [
              { rowNum: 1, cells: ["", "", "", "Tax Rate:", "0.18"] },
              { rowNum: 2, cells: ["Laptop", "50000", "", "", ""] },
              { rowNum: 3, cells: ["Mouse", "500", "", "", ""] }
            ]
          },
          question: "Write the formula for C2 with E1 locked with $ signs:",
          expectedAnswer: ["=B2*$E$1", "=b2*$e$1", "=$E$1*B2", "=$e$1*b2", "=B2 * $E$1"],
          hint: "Multiply B2 with $E$1 using the asterisk *.",
          solutionExplanation: "`=B2*$E$1` ensures that when dragged down to C3, it multiplies B3 with $E$1 instead of slipping to empty cell E2."
        }
      },
      {
        id: "l2-m2",
        title: "2. Employee Salary Sheet & Payroll Calculation",
        duration: "12 mins",
        xp: 70,
        teacherIntro: "Dosto! Har company me har mahine ki 1 se 7 tareekh tak HR aur Accounts department ka sabse bada kaam hota hai: Salary Sheet banana! Isme Basic Salary, HRA (House Rent Allowance), DA, PF deduction (12%), ESIC deduction (0.75%), aur aakhiri me Net Salary nikalna hota hai.",
        hinglishSummary: "Complete professional Salary Sheet banana: Gross Salary, PF (12%), ESIC (0.75%) aur Net Pay calculation.",
        overview: "A payroll worksheet computes total earnings, statutory government deductions (PF & ESI), and final take-home salary.",
        sections: [
          {
            heading: "Standard Payroll Formulas in India",
            content: `
1. **Basic Salary**: The primary base compensation.
2. **HRA (House Rent Allowance)**: Typically 40% (non-metro) or 50% (metro) of Basic Pay ➔ \`=B2 * 40%\`.
3. **DA (Dearness Allowance)**: e.g. 10% of Basic ➔ \`=B2 * 10%\`.
4. **Gross Salary**: Basic + HRA + DA + Conveyance ➔ \`=SUM(B2:D2)\`.
5. **PF (Provident Fund Deduction)**: 12% of Basic ➔ \`=B2 * 12%\`.
6. **ESIC Deduction**: 0.75% of Gross Salary (if Gross <= ₹21,000) ➔ \`=E2 * 0.75%\`.
7. **Net Take-Home Salary**: Gross Salary - (PF + ESIC) ➔ \`=Gross - Total_Deductions\`.
            `
          }
        ],
        practice: {
          instruction: "Write a formula in cell D2 to calculate Employee PF deduction (12% of Basic Salary in B2).",
          initialGrid: {
            headers: ["A (Emp Name)", "B (Basic)", "C (HRA)", "D (PF 12%)", "E (Net)"],
            rows: [
              { rowNum: 1, cells: ["Name", "Basic", "HRA", "PF", "Net"] },
              { rowNum: 2, cells: ["Rahul", "25000", "10000", "", ""] }
            ]
          },
          question: "Write the formula to calculate 12% PF on Basic B2:",
          expectedAnswer: ["=B2*12%", "=b2*12%", "=B2*0.12", "=b2*0.12", "=B2 * 12%"],
          hint: "Multiply cell B2 by 12% or 0.12.",
          solutionExplanation: "`=B2*12%` computes 12% of 25,000 = ₹3,000."
        }
      },
      {
        id: "l2-m3",
        title: "3. Monthly Attendance Sheet with Status Tracking",
        duration: "10 mins",
        xp: 65,
        teacherIntro: "Students! Salary nikalne se pehle hume pata hona chahiye ki employee mahine me kitne din Present (P) tha, kitne din Absent (A), aur kitni Chhutti (L) li. Ye count karne ke liye Excel ka COUNTIF function use hota hai.",
        hinglishSummary: "Employee attendance sheet me P, A, L count karna aur salary days calculate karna COUNTIF se.",
        overview: "Use `=COUNTIF(range, criteria)` to count specific text tags across a 30-day attendance calendar.",
        sections: [
          {
            heading: "Attendance Formulas",
            content: `
- **Total Present Days**: \`=COUNTIF(C2:AG2, "P")\`
- **Total Absent Days**: \`=COUNTIF(C2:AG2, "A")\`
- **Total Paid Leaves**: \`=COUNTIF(C2:AG2, "L")\`
- **Half Days (HD)**: \`=COUNTIF(C2:AG2, "HD") * 0.5\`
- **Total Payable Days**: \`=Present_Count + Leave_Count + (Half_Day_Count * 0.5)\`
            `
          }
        ],
        practice: {
          instruction: "Write a COUNTIF formula in cell F2 to count total Present days ('P') from day 1 to day 4 (B2:E2).",
          initialGrid: {
            headers: ["A (Name)", "B (Day1)", "C (Day2)", "D (Day3)", "E (Day4)", "F (P Count)"],
            rows: [
              { rowNum: 1, cells: ["Name", "D1", "D2", "D3", "D4", "Total P"] },
              { rowNum: 2, cells: ["Priya", "P", "P", "A", "P", ""] }
            ]
          },
          question: "Write the COUNTIF formula for cell F2:",
          expectedAnswer: [
            '=COUNTIF(B2:E2,"P")',
            '=countif(b2:e2,"P")',
            '=COUNTIF(B2:E2, "P")',
            '=countif(b2:e2,"p")'
          ],
          hint: "Syntax: =COUNTIF(range, \"P\"). Range is B2:E2.",
          solutionExplanation: "`=COUNTIF(B2:E2, \"P\")` counts cells containing 'P', returning 3."
        }
      },
      {
        id: "l2-m4",
        title: "4. GST Calculation & Tax Invoicing in Excel",
        duration: "11 mins",
        xp: 70,
        teacherIntro: "Dosto! GST (Goods and Services Tax) har accountant ka daily routine hai. Jab intra-state sale hoti hai (same state), toh CGST (Central GST) aur SGST (State GST) lagta hai. Jab inter-state sale hoti hai (doosre state), toh IGST lagta hai. Aaiye invoice me tax calculate karna seekhein!",
        hinglishSummary: "Taxable Value par CGST (9%), SGST (9%), IGST (18%) calculate karna aur Round Off lagana.",
        overview: "Build an automated billing template that calculates item subtotals, applies GST percentages, and computes the grand invoice total.",
        sections: [
          {
            heading: "GST Calculation Structure",
            content: `
- **Taxable Value**: \`Qty * Rate\` (e.g. \`=B2 * C2\`).
- **CGST (9%)**: \`=Taxable_Value * 9%\`
- **SGST (9%)**: \`=Taxable_Value * 9%\`
- **Total Tax**: \`=CGST + SGST\` (Total 18%)
- **Grand Total**: \`=Taxable_Value + Total_Tax\`
- **Round Off Formula**: \`=ROUND(Grand_Total, 0) - Grand_Total\` (Ensures invoice matches exact rupee coins).
            `
          }
        ],
        practice: {
          instruction: "Write a formula in cell C2 to calculate 18% GST on Taxable Value in B2.",
          initialGrid: {
            headers: ["A (Item)", "B (Taxable)", "C (GST 18%)", "D (Total)"],
            rows: [
              { rowNum: 1, cells: ["Item", "Taxable", "GST 18%", "Grand Total"] },
              { rowNum: 2, cells: ["LED TV", "20000", "", ""] }
            ]
          },
          question: "Write the formula to calculate 18% GST on B2:",
          expectedAnswer: ["=B2*18%", "=b2*18%", "=B2*0.18", "=b2*0.18", "=B2 * 18%"],
          hint: "Multiply cell B2 by 18%.",
          solutionExplanation: "`=B2*18%` computes 18% of 20,000 = ₹3,600."
        }
      },
      {
        id: "l2-m5",
        title: "5. Logical Decision Making (IF, AND, OR, IFS)",
        duration: "10 mins",
        xp: 65,
        teacherIntro: "Students! Excel ko dimag dena seekhein! Agar marks 40 se zyada hon toh 'Pass', warna 'Fail'. Agar sales 1 lakh se zyada ho toh 5% bonus, warna zero. Ye sab decisions lene ke liye `IF` function ka use hota hai.",
        hinglishSummary: "IF condition lagana, AND/OR se multiple conditions check karna, aur IFS se multiple slabs banana.",
        overview: "The `IF` function tests a logical condition and branches into two outcomes (TRUE or FALSE).",
        sections: [
          {
            heading: "Syntax of IF",
            content: `
\`=IF(condition, value_if_true, [value_if_false])\`

**Example**:
\`=IF(B2 >= 50, "Pass", "Fail")\`

**Combining with AND / OR**:
- \`=IF(AND(B2>=50, C2>=50), "Pass in Both", "Fail")\` (Dono shartein poori honi chahiye)
- \`=IF(OR(B2>=50, C2>=50), "Pass in At Least One", "Fail")\`
            `
          }
        ],
        practice: {
          instruction: "Write an IF formula in cell C2: If Marks in B2 are 50 or more, return 'Pass', otherwise 'Fail'.",
          initialGrid: {
            headers: ["A (Student)", "B (Score)", "C (Status)"],
            rows: [
              { rowNum: 1, cells: ["Name", "Score", "Status"] },
              { rowNum: 2, cells: ["Karan", "65", ""] }
            ]
          },
          question: "Write the IF formula for cell C2:",
          expectedAnswer: [
            '=IF(B2>=50,"Pass","Fail")',
            '=IF(B2 >= 50, "Pass", "Fail")',
            '=if(b2>=50,"Pass","Fail")',
            '=if(b2>=50,"pass","fail")'
          ],
          hint: "Syntax: =IF(B2>=50, \"Pass\", \"Fail\")",
          solutionExplanation: "`=IF(B2>=50, \"Pass\", \"Fail\")` checks if score 65 is >= 50. Since TRUE, it outputs 'Pass'."
        }
      },
      {
        id: "l2-m6",
        title: "6. Text Cleaning & Formatting (TRIM, PROPER, CONCAT)",
        duration: "9 mins",
        xp: 60,
        teacherIntro: "Dosto! ERP software ya bank statements se jab data download hota hai, toh customer ke naam me aage-peeche faltu space hote hain ya sab CAPITAL letters me likha hota hai. PROPER aur TRIM use karke 1 second me data ko clean karein!",
        hinglishSummary: "Extra spaces hatana (TRIM), First letter capital karna (PROPER), aur text ko jodna (CONCAT / TEXTJOIN).",
        overview: "Clean messy data using string functions before feeding it into accounting ledgers or lookups.",
        sections: [
          {
            heading: "Essential Text Functions",
            content: `
- **\`=TRIM(text)\`**: Removes all accidental leading, trailing, and multiple spaces.
- **\`=PROPER(text)\`**: Capitalizes the first letter of each word (e.g. \`"sachin tendulkar"\` ➔ \`"Sachin Tendulkar"\`).
- **\`=UPPER(text)\`** / **\`=LOWER(text)\`**: Converts to ALL CAPS or all lowercase.
- **\`=TEXTJOIN(delimiter, ignore_empty, text1, text2...)\`**: Combines multiple cells with a separator like comma or space.
            `
          }
        ],
        practice: {
          instruction: "Which text function capitalizes the first letter of every word (e.g. converting 'rohit sharma' to 'Rohit Sharma')?",
          initialGrid: {
            headers: ["Function Options"],
            rows: [
              { rowNum: 1, cells: ["UPPER"] },
              { rowNum: 2, cells: ["PROPER"] },
              { rowNum: 3, cells: ["LOWER"] }
            ]
          },
          question: "Type the function name (UPPER, PROPER, or LOWER):",
          expectedAnswer: ["PROPER", "proper", "=PROPER", "=proper"],
          hint: "It ensures the text is formatted in 'proper' case.",
          solutionExplanation: "PROPER capitalizes the initial letter in each word while converting all other letters to lowercase."
        }
      },
      {
        id: "l2-m7",
        title: "7. Accounting Dates & Due Date Aging",
        duration: "9 mins",
        xp: 60,
        teacherIntro: "Students! Accounts me bill ki payment kab aani hai, kitne din overdue ho gaye hain, ye nikalna har din ka kaam hota hai. TODAY(), EDATE(), EOMONTH() aur DATEDIF() aapke sabse bade dost hain.",
        hinglishSummary: "Invoice due dates nikalna, mahine ka aakhiri din (EOMONTH), aur kitne din baaki hain ye calculate karna.",
        overview: "Manage credit terms, payment deadlines, and calculate debtor aging using dynamic date arithmetic.",
        sections: [
          {
            heading: "Core Date Functions in Accounting",
            content: `
- **\`=TODAY()\`**: Returns current dynamic date (changes daily).
- **\`=EDATE(start_date, months)\`**: Adds N months to a date (e.g. 15-Jan + 1 month = 15-Feb).
- **\`=EOMONTH(start_date, months)\`**: Returns the End Of Month date (e.g. GST return filing deadline).
- **\`=DATEDIF(start_date, end_date, "D")\`**: Calculates exact number of elapsed days (Overdue days = \`=TODAY() - Invoice_Date\`).
            `
          }
        ],
        practice: {
          instruction: "Which dynamic formula returns today's system date automatically without typing numbers?",
          initialGrid: {
            headers: ["Date Functions"],
            rows: [
              { rowNum: 1, cells: ["=TODAY()"] },
              { rowNum: 2, cells: ["=NOW()"] },
              { rowNum: 3, cells: ["=DAY()"] }
            ]
          },
          question: "Type the formula to get today's date:",
          expectedAnswer: ["=TODAY()", "=today()", "TODAY()", "today()"],
          hint: "Starts with '=' and has empty parentheses.",
          solutionExplanation: "`=TODAY()` returns the current computer calendar date, updating dynamically every day."
        }
      },
      {
        id: "l2-m8",
        title: "8. Conditional Formatting for Business & Accounts",
        duration: "8 mins",
        xp: 55,
        teacherIntro: "Dosto! Jab aapka boss 500 bills ki sheet khole, toh jo bills overdue ho chuke hain wo laal (Red) rang me chamakne chahiye, aur jo clear ho gaye wo hare (Green) rang me! Ise kehte hain Conditional Formatting.",
        hinglishSummary: "Numbers aur status ke basis par cells ko automatic red, green, yellow color karna.",
        overview: "Apply dynamic rules to visually highlight critical business exceptions like overdue balances and low inventory.",
        sections: [
          {
            heading: "High-Impact Business Rules",
            content: `
- **Highlight Due Dates**: Use rule 'Date Occurring > In the last 7 days'.
- **Duplicate Records**: Highlight Duplicate Values instantly to catch double billing.
- **Data Bars**: Tiny progress bars inside cells to visualize sales scale.
- **Custom Formula Formatting**: Rule \`=$C2="Overdue"\` to color the entire row red when status matches!
            `
          }
        ],
        practice: {
          instruction: "Under which Excel Ribbon Tab is 'Conditional Formatting' located?",
          initialGrid: {
            headers: ["Excel Tabs"],
            rows: [
              { rowNum: 1, cells: ["Home Tab"] },
              { rowNum: 2, cells: ["Insert Tab"] },
              { rowNum: 3, cells: ["View Tab"] }
            ]
          },
          question: "Type the tab name (Home, Insert, or View):",
          expectedAnswer: ["Home", "home", "Home Tab", "HOME"],
          hint: "It is in the primary tab right next to Number formatting.",
          solutionExplanation: "Conditional Formatting is located on the Home Tab in the 'Styles' group."
        }
      }
    ]
  },

  // =========================================================================
  // LEVEL 3: ADVANCED (LOOKUPS, MULTI-CRITERIA & PIVOTS)
  // =========================================================================
  {
    id: "level-3",
    levelNumber: 3,
    title: "Level 3: Advanced (Lookups, Multi-Criteria & Pivots)",
    subtitle: "VLOOKUP Masterclass, HLOOKUP, Modern XLOOKUP, INDEX & MATCH, SUMIFS, Pivot Tables, Dropdowns & PMT",
    badge: "Data Analyst",
    icon: "search",
    color: "from-amber-500 to-orange-600",
    modules: [
      {
        id: "l3-m1",
        title: "1. VLOOKUP Complete Masterclass",
        duration: "12 mins",
        xp: 80,
        teacherIntro: "Namaste Students! Excel ka sabse mashhoor aur interview me 100% poocha jane wala formula hai VLOOKUP (Vertical Lookup). Jaise dictionary me hum word dhoondh kar uska meaning dekhte hain, waise hi VLOOKUP customer ID dhoondh kar uska naam ya balance nikal kar deta hai!",
        hinglishSummary: "Table se data dhoondhna: =VLOOKUP(kya_dhoondhna_hai, kahan_dhoondhna_hai, column_number, 0).",
        overview: "VLOOKUP searches down the leftmost column of a table and returns corresponding values from adjacent columns.",
        sections: [
          {
            heading: "VLOOKUP 4 Arguments Explained",
            content: `
\`=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])\`

1. **\`lookup_value\`**: Kya dhoondhna hai? (e.g. Employee ID in cell \`A2\`).
2. **\`table_array\`**: Kahan dhoondhna hai? (The lookup table range, e.g. \`$E$2:$G$100\`).
3. **\`col_index_num\`**: Kaun se column ka data chahiye? (1 = First column, 2 = Second, 3 = Third).
4. **\`range_lookup\`**: Hamesha **\`0\`** (ya **\`FALSE\`**) lagayein exact match ke liye!

**VLOOKUP Golden Rule**: Search column hamesha table ka sabse pehla (leftmost) column hona chahiye!
            `
          }
        ],
        practice: {
          instruction: "Write a VLOOKUP formula in cell B2 to look up the Price of Product Code in A2 from lookup table E2:F4 (Price is in column 2).",
          initialGrid: {
            headers: ["A (Item)", "B (Found Price)", "C", "D", "E (Code)", "F (Price)"],
            rows: [
              { rowNum: 1, cells: ["Code", "Price", "", "", "Code", "Price"] },
              { rowNum: 2, cells: ["P102", "", "", "", "P101", "150"] },
              { rowNum: 3, cells: ["", "", "", "", "P102", "320"] },
              { rowNum: 4, cells: ["", "", "", "", "P103", "80"] }
            ]
          },
          question: "Write the VLOOKUP formula for cell B2:",
          expectedAnswer: [
            '=VLOOKUP(A2,E2:F4,2,0)',
            '=VLOOKUP(A2,E2:F4,2,FALSE)',
            '=VLOOKUP(A2,$E$2:$F$4,2,0)',
            '=vlookup(a2,e2:f4,2,0)'
          ],
          hint: "Syntax: =VLOOKUP(A2, E2:F4, 2, 0)",
          solutionExplanation: "`=VLOOKUP(A2, E2:F4, 2, 0)` searches for 'P102' in Column E and returns the value from Column 2 (F), giving 320."
        }
      },
      {
        id: "l3-m2",
        title: "2. HLOOKUP & Two-Way Dynamic Lookup",
        duration: "10 mins",
        xp: 75,
        teacherIntro: "Dosto! VLOOKUP vertical tables (khadi lines) me kaam karta hai. Lekin agar data horizontal (aadi lines) me ho jahan mahine (Jan, Feb, Mar...) row me likhe hon, wahan HLOOKUP (Horizontal Lookup) kaam aata hai!",
        hinglishSummary: "Horizontal tables me data dhoondhna aur 2-way lookup (Row aur Column dono dynamic).",
        overview: "HLOOKUP searches across the top row of a horizontal table and returns values from specified row numbers.",
        sections: [
          {
            heading: "HLOOKUP Syntax",
            content: `
\`=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])\`

- Searches across row 1 of \`table_array\`.
- \`row_index_num\`: Specifies which row number down to fetch the answer from.
- Exact match: Use \`0\` or \`FALSE\`.
            `
          }
        ],
        practice: {
          instruction: "Which function performs horizontal lookups across rows instead of vertical columns?",
          initialGrid: {
            headers: ["Lookup Functions"],
            rows: [
              { rowNum: 1, cells: ["VLOOKUP"] },
              { rowNum: 2, cells: ["HLOOKUP"] },
              { rowNum: 3, cells: ["LOOKUP"] }
            ]
          },
          question: "Type the function name (VLOOKUP or HLOOKUP):",
          expectedAnswer: ["HLOOKUP", "hlookup", "=HLOOKUP", "=hlookup"],
          hint: "The 'H' stands for Horizontal.",
          solutionExplanation: "HLOOKUP searches horizontally across rows, whereas VLOOKUP searches vertically across columns."
        }
      },
      {
        id: "l3-m3",
        title: "3. The Modern Hero: XLOOKUP",
        duration: "11 mins",
        xp: 85,
        teacherIntro: "Students! Microsoft ne VLOOKUP ki saari kamzoriyan khatam karke ek naya jadugari formula banaya hai: XLOOKUP! Ye left me bhi dhoondh sakta hai, right me bhi dhoondh sakta hai, column count karne ki koi zaroorat nahi, aur #N/A error aane par automatic 'Not Found' dikha sakta hai.",
        hinglishSummary: "VLOOKUP ka modern successor: Left lookup, no column counting, aur built-in error handling.",
        overview: "XLOOKUP replaces both VLOOKUP and HLOOKUP, offering unmatched speed and flexibility in modern Excel.",
        sections: [
          {
            heading: "XLOOKUP 3 Simple Arguments",
            content: `
\`=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])\`

1. **\`lookup_value\`**: Kya search karna hai (\`A2\`).
2. **\`lookup_array\`**: Kis column me dhoondhna hai (\`E:E\`).
3. **\`return_array\`**: Kaun sa column wapas chahiye (\`F:F\`).
4. **\`[if_not_found]\`**: Agar na mile toh kya dikhaye (\`"Record Missing"\`).
            `
          }
        ],
        practice: {
          instruction: "Write an XLOOKUP formula in B2 to search ID (A2) in lookup array E2:E4 and return Salary from F2:F4.",
          initialGrid: {
            headers: ["A (ID)", "B (Salary)", "C", "D", "E (ID)", "F (Salary)"],
            rows: [
              { rowNum: 1, cells: ["ID", "Salary", "", "", "ID", "Salary"] },
              { rowNum: 2, cells: ["103", "", "", "", "101", "50000"] },
              { rowNum: 3, cells: ["", "", "", "", "102", "60000"] },
              { rowNum: 4, cells: ["", "", "", "", "103", "75000"] }
            ]
          },
          question: "Write the XLOOKUP formula for cell B2:",
          expectedAnswer: [
            '=XLOOKUP(A2,E2:E4,F2:F4)',
            '=xlookup(a2,e2:e4,f2:f4)',
            '=XLOOKUP(A2,$E$2:$E$4,$F$2:$F$4)',
            '=XLOOKUP(A2, E2:E4, F2:F4)'
          ],
          hint: "Syntax: =XLOOKUP(A2, E2:E4, F2:F4)",
          solutionExplanation: "`=XLOOKUP(A2, E2:E4, F2:F4)` matches ID 103 and pulls 75000 directly."
        }
      },
      {
        id: "l3-m4",
        title: "4. INDEX & MATCH Dynamic Matrix",
        duration: "11 mins",
        xp: 80,
        teacherIntro: "Dosto! Investment banks aur MNC companies me VLOOKUP par ban hota hai kyunki column insert karne par VLOOKUP toot jata hai. Wahan INDEX + MATCH use hota hai. INDEX target cell ka data nikalta hai aur MATCH uski row/column position batata hai.",
        hinglishSummary: "VLOOKUP se 10x zyada robust formula: INDEX aur MATCH ka combination jo column insert hone par bhi nahi toot-ta.",
        overview: "Combining INDEX with MATCH creates a flexible two-way coordinate lookup that works in any direction.",
        sections: [
          {
            heading: "How INDEX and MATCH Work Together",
            content: `
- **\`MATCH(lookup_val, lookup_range, 0)\`**: Scans the list and returns the item's row position number (e.g. Row 3).
- **\`INDEX(return_range, row_num)\`**: Fetches the value sitting at that row position!
- **Combined**: \`=INDEX(B2:B100, MATCH(A2, C2:C100, 0))\`.
            `
          }
        ],
        practice: {
          instruction: "Which function inside the INDEX/MATCH formula finds the position number of a value in a list?",
          initialGrid: {
            headers: ["Function Options"],
            rows: [
              { rowNum: 1, cells: ["INDEX"] },
              { rowNum: 2, cells: ["MATCH"] },
              { rowNum: 3, cells: ["LOOKUP"] }
            ]
          },
          question: "Type the function name (INDEX or MATCH):",
          expectedAnswer: ["MATCH", "match", "=MATCH", "=match"],
          hint: "It 'matches' the search item and returns its position.",
          solutionExplanation: "MATCH locates the position (e.g. 1st, 2nd, 3rd) of an item within an array."
        }
      },
      {
        id: "l3-m5",
        title: "5. Multi-Criteria Aggregation (SUMIFS & COUNTIFS)",
        duration: "10 mins",
        xp: 75,
        teacherIntro: "Students! SUMIF sirf ek condition check karta hai. Lekin agar boss kahe ki 'Sales in Mumbai' AND 'Month is March' AND 'Salesman is Amit' ka total sum nikalo, toh SUMIFS hi kaam aayega. Isme 127 conditions tak lagayi ja sakti hain!",
        hinglishSummary: "Do ya do se zyada sharton par jodna ya ginna (SUMIFS aur COUNTIFS).",
        overview: "Perform conditioned additions and counts based on multiple criteria ranges.",
        sections: [
          {
            heading: "SUMIFS Syntax (Notice the Order!)",
            content: `
\`=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2]...)\`

- **First argument**: Kis column ka total chahiye (\`C2:C100\`).
- **Next pairs**: Criteria Range aur Criteria (\`A2:A100, "North", B2:B100, "Delivered"\`).
            `
          }
        ],
        practice: {
          instruction: "Write a SUMIFS formula in F2 to sum Sales (C2:C5) where Region (A2:A5) is 'North'.",
          initialGrid: {
            headers: ["A (Region)", "B (Item)", "C (Sales)", "D", "E", "F (Total)"],
            rows: [
              { rowNum: 1, cells: ["Region", "Item", "Sales", "", "", "Total"] },
              { rowNum: 2, cells: ["North", "Pen", "100", "", "", ""] },
              { rowNum: 3, cells: ["South", "Book", "200", "", "", ""] },
              { rowNum: 4, cells: ["North", "Desk", "500", "", "", ""] },
              { rowNum: 5, cells: ["East", "Pen", "150", "", "", ""] }
            ]
          },
          question: "Write the SUMIFS formula for cell F2:",
          expectedAnswer: [
            '=SUMIFS(C2:C5,A2:A5,"North")',
            '=sumifs(c2:c5,a2:a5,"North")',
            '=SUMIFS(C2:C5, A2:A5, "North")',
            '=sumifs(c2:c5,a2:a5,"north")'
          ],
          hint: "Syntax: =SUMIFS(sum_range, criteria_range, \"North\")",
          solutionExplanation: "`=SUMIFS(C2:C5, A2:A5, \"North\")` sums 100 + 500 = 600."
        }
      },
      {
        id: "l3-m6",
        title: "6. Pivot Tables & Pivot Charts from Scratch",
        duration: "11 mins",
        xp: 80,
        teacherIntro: "Dosto! Pivot Table Excel ka sabse bada magic wand hai. Agar aapke paas 50,000 invoices ka data ho, bina koi formula likhe sirf mouse se drag-and-drop karke 10 second me Region-wise, Month-wise summary table ban jata hai!",
        hinglishSummary: "Bina kisi formula ke hazaaron rows ka summary table aur interactive charts banana.",
        overview: "Pivot Tables summarize, analyze, explore, and present summary data without complex formulas.",
        sections: [
          {
            heading: "The 4 Quadrants",
            content: `
1. **Rows**: Fields placed here form horizontal row headers (e.g. Salesperson names).
2. **Columns**: Fields here become vertical columns (e.g. Months/Quarters).
3. **Values**: Numeric calculation area (SUM of Sales, COUNT of orders).
4. **Filters**: Master high-level page filter (e.g. Country).

**Slicers (\`Alt + N + SF\`)**:
Visual buttons that filter Pivot Tables with 1-click simplicity!
            `
          }
        ],
        practice: {
          instruction: "Which quadrant in a Pivot Table calculates numbers (e.g. Sum of Revenue, Average Profit)?",
          initialGrid: {
            headers: ["Pivot Quadrants"],
            rows: [
              { rowNum: 1, cells: ["Rows"] },
              { rowNum: 2, cells: ["Columns"] },
              { rowNum: 3, cells: ["Values"] },
              { rowNum: 4, cells: ["Filters"] }
            ]
          },
          question: "Type the quadrant name (Rows, Columns, Values, or Filters):",
          expectedAnswer: ["Values", "values", "VALUES"],
          hint: "Numeric calculations always belong in this quadrant.",
          solutionExplanation: "The 'Values' quadrant performs mathematical operations like SUM, COUNT, and AVERAGE."
        }
      },
      {
        id: "l3-m7",
        title: "7. Data Validation & Cascading Dropdowns",
        duration: "9 mins",
        xp: 70,
        teacherIntro: "Students! Jab multiple users ek hi Excel file me entry karte hain, toh spelling mistakes se reports kharab hoti hain. Data Validation lagakar aap cells me dropdown list bana sakte hain taaki user sirf list me se hi select kar sake!",
        hinglishSummary: "Cell me dropdown list banana aur INDIRECT function se dependent (State ➔ City) dropdown create karna.",
        overview: "Control user input, restrict numbers to valid ranges, and create cascading linked dropdowns using `INDIRECT`.",
        sections: [
          {
            heading: "Creating a Dropdown List",
            content: `
1. Select target cells.
2. Go to **Data Tab > Data Validation** (Shortcut \`Alt + A + V + V\`).
3. Under 'Allow', select **'List'**.
4. In 'Source', type items separated by comma: \`Cash, UPI, Cheque, Card\` (or select a range \`=$H$2:$H$5\`).
            `
          }
        ],
        practice: {
          instruction: "What keyboard shortcut opens the Data Validation dialog box directly?",
          initialGrid: {
            headers: ["Validation Shortcuts"],
            rows: [
              { rowNum: 1, cells: ["Alt + A + V + V"] },
              { rowNum: 2, cells: ["Ctrl + V"] },
              { rowNum: 3, cells: ["Shift + F3"] }
            ]
          },
          question: "Type the shortcut for Data Validation (e.g. Alt + A + V + V):",
          expectedAnswer: ["Alt + A + V + V", "ALT + A + V + V", "alt + a + v + v", "Alt+A+V+V"],
          hint: "Press Alt, then A (Data), then V twice.",
          solutionExplanation: "Alt + A + V + V opens the Data Validation dialog box instantly."
        }
      },
      {
        id: "l3-m8",
        title: "8. Financial Functions for Accountants (PMT, IPMT, PPMT)",
        duration: "10 mins",
        xp: 75,
        teacherIntro: "Dosto! Jab company koi car, machinery ya building loan par leti hai, toh bank aapse EMI leta hai. Har mahine ki EMI me kitna Principal (mool-dhan) ja raha hai aur kitna Interest (byaj), ye calculate karne ke liye PMT, IPMT aur PPMT use hote hain.",
        hinglishSummary: "Loan ki monthly EMI (PMT), Interest portion (IPMT), aur Principal portion (PPMT) nikalna.",
        overview: "Build loan amortization schedules to forecast debt servicing costs accurately.",
        sections: [
          {
            heading: "Financial Function Breakdown",
            content: `
- **\`=PMT(rate/12, nper*12, -loan_amount)\`**: Calculates total monthly EMI payment.
- **\`=IPMT(...)\`**: Computes the interest portion of a specific payment month.
- **\`=PPMT(...)\`**: Computes the principal reduction portion.
- **Golden Rule**: Always divide annual interest rate by 12, and multiply loan years by 12 to get monthly figures!
            `
          }
        ],
        practice: {
          instruction: "Which Excel financial function calculates the total periodic EMI payment for a loan?",
          initialGrid: {
            headers: ["Financial Functions"],
            rows: [
              { rowNum: 1, cells: ["PMT (Payment)"] },
              { rowNum: 2, cells: ["NPV (Net Present Value)"] },
              { rowNum: 3, cells: ["IRR (Rate of Return)"] }
            ]
          },
          question: "Type the function name (PMT, NPV, or IRR):",
          expectedAnswer: ["PMT", "pmt", "=PMT", "=pmt"],
          hint: "It stands for periodic 'Payment'.",
          solutionExplanation: "PMT calculates the constant payment for a loan based on constant payments and a constant interest rate."
        }
      }
    ]
  },

  // =========================================================================
  // LEVEL 4: MASTER (DYNAMIC ARRAYS, POWER QUERY & VBA AUTOMATION)
  // =========================================================================
  {
    id: "level-4",
    levelNumber: 4,
    title: "Level 4: Master (Dynamic Arrays, Power Query & VBA)",
    subtitle: "FILTER, UNIQUE, SORT, Error Auditing, Goal Seek, Power Query ETL, Macros & MIS Dashboards",
    badge: "Excel Master",
    icon: "award",
    color: "from-purple-500 to-pink-600",
    modules: [
      {
        id: "l4-m1",
        title: "1. Modern Dynamic Arrays (FILTER, UNIQUE, SORT)",
        duration: "11 mins",
        xp: 85,
        teacherIntro: "Namaste Master Students! Modern Excel me formulas ek nayi duniya me pahunch chuke hain. Pehle ek formula sirf ek cell me answer deta tha. Ab ek single formula poori table banakar 'spill' kar deta hai! FILTER, UNIQUE aur SORT seekh lijiye, aap corporate Excel ke hero ban jayenge.",
        hinglishSummary: "Ek formula jo multiple rows/columns me automatic spill hota hai: FILTER, UNIQUE aur SORT.",
        overview: "Dynamic array formulas automatically spill results across neighboring empty cells without Ctrl+Shift+Enter.",
        sections: [
          {
            heading: "The Dynamic Array Power Trio",
            content: `
1. **\`=UNIQUE(array)\`**: List me se duplicates hata kar distinct unique items ki nayi list generate karta hai.
2. **\`=SORT(array, [sort_index], [sort_order])\`**: Table ko dynamically sort karta hai.
3. **\`=FILTER(array, condition, [if_empty])\`**: Criteria match karne wale sabhi rows ko filter karke nayi table me display karta hai!
            `
          }
        ],
        practice: {
          instruction: "Write a formula using UNIQUE to extract distinct regions from list A2:A6.",
          initialGrid: {
            headers: ["A (Regions)", "B (Unique Output)"],
            rows: [
              { rowNum: 1, cells: ["Region", "Unique"] },
              { rowNum: 2, cells: ["North", ""] },
              { rowNum: 3, cells: ["South", ""] },
              { rowNum: 4, cells: ["North", ""] },
              { rowNum: 5, cells: ["East", ""] },
              { rowNum: 6, cells: ["South", ""] }
            ]
          },
          question: "Write the UNIQUE formula for cell B2:",
          expectedAnswer: [
            '=UNIQUE(A2:A6)',
            '=unique(a2:a6)',
            '=UNIQUE(A2:A6) ',
            '=unique(a2:a6) '
          ],
          hint: "Syntax: =UNIQUE(range). Range is A2:A6.",
          solutionExplanation: "`=UNIQUE(A2:A6)` extracts distinct values 'North', 'South', and 'East' automatically spilling down."
        }
      },
      {
        id: "l4-m2",
        title: "2. Error Trapping & Spreadsheet Auditing",
        duration: "9 mins",
        xp: 75,
        teacherIntro: "Dosto! Dashboard ya client presentation me `#N/A`, `#DIV/0!`, `#VALUE!` errors aana sabse bura impression deta hai. Professional sheets me har lookup aur division ko IFERROR se bulletproof kiya jata hai taaki sheet clean dikhe.",
        hinglishSummary: "#N/A, #DIV/0! errors ko clean message ya zero se replace karna (IFERROR) aur formula trace karna.",
        overview: "Intercept worksheet errors gracefully and use auditing arrows (Trace Precedents / Dependents) to inspect model logic.",
        sections: [
          {
            heading: "IFERROR & Auditing Tools",
            content: `
- **\`=IFERROR(formula, fallback_value)\`**:
  Example: \`=IFERROR(VLOOKUP(A2, E:F, 2, 0), "Not Found")\`.
- **Trace Precedents (\`Alt + M + P\` )**: Draws blue arrows pointing to all cells that feed into the active cell.
- **Trace Dependents (\`Alt + M + D\` )**: Shows which formulas depend on the active cell.
            `
          }
        ],
        practice: {
          instruction: "Wrap the division formula A2/B2 with IFERROR so that if an error occurs, it returns 0.",
          initialGrid: {
            headers: ["A", "B", "C (Safe Division)"],
            rows: [
              { rowNum: 1, cells: ["Total", "Count", "Average"] },
              { rowNum: 2, cells: ["500", "0", ""] }
            ]
          },
          question: "Write the IFERROR formula for cell C2:",
          expectedAnswer: [
            '=IFERROR(A2/B2, 0)',
            '=IFERROR(A2/B2,0)',
            '=iferror(a2/b2, 0)',
            '=iferror(a2/b2,0)'
          ],
          hint: "Syntax: =IFERROR(A2/B2, 0)",
          solutionExplanation: "Dividing 500 by 0 would trigger `#DIV/0!`. `IFERROR(A2/B2, 0)` intercepts it cleanly, displaying 0."
        }
      },
      {
        id: "l4-m3",
        title: "3. What-If Analysis (Goal Seek & Scenarios)",
        duration: "10 mins",
        xp: 80,
        teacherIntro: "Students! Agar company ka target hai ₹10 Lakh profit kamana, toh hume kitne units bechne padenge? Ulta calculation (Reverse engineering) karne ke liye Excel me 'Goal Seek' tool diya gaya hai!",
        hinglishSummary: "Target achieve karne ke liye input calculate karna (Goal Seek) aur different budget scenarios banana.",
        overview: "Explore different operational outcomes by letting Excel back-solve variables using Goal Seek and Scenario Manager.",
        sections: [
          {
            heading: "Goal Seek Workflow",
            content: `
1. Go to **Data Tab > What-If Analysis > Goal Seek**.
2. **Set cell**: Target formula cell (e.g. Total Profit).
3. **To value**: Target number you want (e.g. 1,000,000).
4. **By changing cell**: Input cell Excel can adjust (e.g. Units Sold).
5. Click OK: Excel automatically computes the exact required sales units!
            `
          }
        ],
        practice: {
          instruction: "Under which group on the Data Tab is Goal Seek located?",
          initialGrid: {
            headers: ["Data Tab Tools"],
            rows: [
              { rowNum: 1, cells: ["Sort & Filter"] },
              { rowNum: 2, cells: ["What-If Analysis"] },
              { rowNum: 3, cells: ["Data Tools"] }
            ]
          },
          question: "Type the tool group name (What-If Analysis, Sort & Filter, or Data Tools):",
          expectedAnswer: ["What-If Analysis", "what-if analysis", "What-If", "what if analysis"],
          hint: "It asks 'what if' we change the inputs.",
          solutionExplanation: "Goal Seek is located inside the 'What-If Analysis' dropdown on the Data tab."
        }
      },
      {
        id: "l4-m4",
        title: "4. Power Query Automated ETL (Data Tab)",
        duration: "12 mins",
        xp: 90,
        teacherIntro: "Dosto! Agar aap har mahine 10 branch files se copy-paste karke master sheet banate hain, toh apna time barbad karna band kijiye. Power Query me ek baar pipeline set kijiye: folder me naye files aate hi bas 'Refresh All' (Ctrl + Alt + F5) dabaiye, saari files automatic jud kar clean ho jayengi!",
        hinglishSummary: "Messy ERP data files ko combine aur clean karna bina formula ke, 1-click auto-refresh ke sath.",
        overview: "Power Query is Excel's built-in Extract, Transform, Load (ETL) engine for automated data pipelines.",
        sections: [
          {
            heading: "Top Power Query Capabilities",
            content: `
- **Combine Files from Folder**: Merges 50 monthly CSV or Excel files in one click.
- **Unpivot Columns**: Converts matrix-style reports into clean tabular database rows.
- **Remove Garbage Rows**: Filters out top title lines, blank rows, and subtotals automatically.
- **Automation**: Every transformation step is recorded and replayed on new data when you click **Refresh All**.
            `
          }
        ],
        practice: {
          instruction: "What keyboard shortcut triggers 'Refresh All' to update all Power Query connections and data tables?",
          initialGrid: {
            headers: ["Refresh Shortcuts"],
            rows: [
              { rowNum: 1, cells: ["Ctrl + Alt + F5 (Refresh All)"] },
              { rowNum: 2, cells: ["F5 (Go To)"] },
              { rowNum: 3, cells: ["Ctrl + R (Fill Right)"] }
            ]
          },
          question: "Type the shortcut for Refresh All (e.g. Ctrl + Alt + F5):",
          expectedAnswer: ["Ctrl + Alt + F5", "CTRL + ALT + F5", "ctrl + alt + f5", "Ctrl+Alt+F5"],
          hint: "It combines Ctrl, Alt, and function key F5.",
          solutionExplanation: "Ctrl + Alt + F5 refreshes all external data connections, Power Query pipelines, and Pivot Tables workbook-wide."
        }
      },
      {
        id: "l4-m5",
        title: "5. Macros & VBA Automation for Office Work",
        duration: "12 mins",
        xp: 90,
        teacherIntro: "Students! Jab koi kaam rozana bilkul same steps me karna ho (jaise roz subah 9 baje bank statement download karke format karna, borders lagana, aur PDF export karna), toh Excel ko wo steps 'Record Macro' se sikha dijiye. Ek button click karte hi Excel wahi 15 minute ka kaam 1 second me kar dega!",
        hinglishSummary: "Repetitive tasks record karna, button click se macro run karna, aur Alt + F11 se VBA code dekhna.",
        overview: "Automate repetitive business processes using Excel's built-in Macro Recorder and Visual Basic for Applications (VBA).",
        sections: [
          {
            heading: "Getting Started with Macros",
            content: `
1. **Developer Tab**: Go to File > Options > Customize Ribbon > Check **Developer**.
2. **Record Macro**: Click 'Record Macro', name it, perform your routine actions, and click 'Stop Recording'.
3. **Assign to Button**: Insert a Shape (rounded rectangle), write 'Generate Invoice PDF', right-click and choose **Assign Macro**.
4. **View VBA Code**: Press **Alt + F11** to open the VBA code editor.
            `
          }
        ],
        practice: {
          instruction: "What keyboard shortcut opens the VBA (Visual Basic for Applications) code editor in Excel?",
          initialGrid: {
            headers: ["Developer Shortcuts"],
            rows: [
              { rowNum: 1, cells: ["Alt + F11 (VBA Editor)"] },
              { rowNum: 2, cells: ["Ctrl + Shift + V"] },
              { rowNum: 3, cells: ["Alt + F8 (Macro List)"] }
            ]
          },
          question: "Type the shortcut to open VBA Editor (e.g. Alt + F11):",
          expectedAnswer: ["Alt + F11", "ALT + F11", "alt + f11", "Alt+F11", "alt+f11"],
          hint: "It combines the 'Alt' key with function key 'F11'.",
          solutionExplanation: "Pressing Alt + F11 opens the Microsoft Visual Basic for Applications development environment."
        }
      },
      {
        id: "l4-m6",
        title: "6. Building an Executive MIS Management Dashboard",
        duration: "14 mins",
        xp: 100,
        teacherIntro: "Congratulations Students! Aap Excel ke antim padav par pahunch chuke hain. Corporate world me Top Management lambi sheets nahi dekhti; wo sirf ek page ka 'MIS Dashboard' dekhti hai jisme KPI cards, interactive slicers, aur charts hote hain. Aaiye sabhi seekhi hui skills ko combine karke world-class dashboard banate hain!",
        hinglishSummary: "Pivot Tables, Slicers, KPI Cards aur Charts ko combine karke 1-page dynamic executive dashboard banana.",
        overview: "Integrate Pivot Tables, Slicers, Timelines, and formatted KPI cards into a cohesive, interactive business intelligence dashboard.",
        sections: [
          {
            heading: "Architecture of an Executive Dashboard",
            content: `
1. **KPI Scorecards**: Top banner showing Total Revenue, Gross Margin %, Total Orders, and Pending Invoices.
2. **Interactive Slicers**: Slicers for Branch/Region, Year, and Product Category linked to all Pivot Charts.
3. **Trend Visualizations**: Line chart for monthly revenue growth and Bar chart for top sales representatives.
4. **Clean Aesthetics**: Turn off gridlines (\`Alt + W + V + G\`) to give the sheet an app-like modern dashboard look.
            `
          }
        ],
        practice: {
          instruction: "Which keyboard shortcut hides default grey gridlines on a worksheet to create a clean white dashboard surface?",
          initialGrid: {
            headers: ["View Shortcuts"],
            rows: [
              { rowNum: 1, cells: ["Alt + W + V + G (Toggle Gridlines)"] },
              { rowNum: 2, cells: ["Ctrl + G"] },
              { rowNum: 3, cells: ["Alt + V"] }
            ]
          },
          question: "Type the shortcut to toggle Gridlines (e.g. Alt + W + V + G):",
          expectedAnswer: [
            "Alt + W + V + G",
            "ALT + W + V + G",
            "alt + w + v + g",
            "Alt+W+V+G",
            "alt+w+v+g"
          ],
          hint: "Press Alt, then W (View), V (Views/Show), G (Gridlines).",
          solutionExplanation: "Alt + W + V + G toggles gridlines on and off, giving sheets a polished white canvas look for dashboards."
        }
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CURRICULUM };
}
