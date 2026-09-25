// Excel Shortcuts Master Encyclopedia — COMPLETE EDITION
// 120+ essential shortcuts categorized by Ribbon Tab and Class
// With deep practical teacher explanations in Hinglish

const EXCEL_SHORTCUTS = [

  // ==========================================
  // 1. HOME TAB
  // ==========================================
  {
    id: "sc-home-1",
    keys: ["Alt", "="],
    title: "AutoSum Formula Instantly",
    ribbonClass: "Home Tab",
    description: "Automatically writes the =SUM() formula for the entire column or row above/to the left.",
    teacherExplanation: "Ye har accountant ka number 1 favorite shortcut hai! Jab aap kisi number column ke niche khali cell me ho, toh =SUM(...) type karne ki koi zaroorat nahi. Bas keyboard se Alt aur = (equal sign) sath me dabayein, Excel automatic upar ke sabhi numbers ko select kar lega, aur Enter dabate hi Total aa jayega!",
    timeSaved: "Saves 5-10 seconds on every single sum"
  },
  {
    id: "sc-home-2",
    keys: ["Ctrl", "1"],
    title: "Open Format Cells Dialog Box",
    ribbonClass: "Home Tab",
    description: "Opens the comprehensive formatting window for Numbers, Currency, Dates, Alignment, Font, Borders, and Protection.",
    teacherExplanation: "Numbers ko Rupee Currency me badalna ho, custom date format (DD-MMM-YYYY) lagana ho, ya text ko 45 degree tilt karna ho, Ctrl + 1 dabana Excel me sabse fast tarika hai. Mouse se right-click karke Format Cells dhoondne ki zaroorat nahi hai.",
    timeSaved: "Saves 5 seconds per formatting tweak"
  },
  {
    id: "sc-home-3",
    keys: ["Alt", "H", "B", "A"],
    title: "Apply All Borders to Selected Cells",
    ribbonClass: "Home Tab",
    description: "Instantly adds black grid borders around every selected cell for clean printing and reporting.",
    teacherExplanation: "Excel ki default grey gridlines print nahi hoti! Agar aap report print kar rahe hain ya boss ko bhej rahe hain, toh range select karke Alt + H + B + A dabayein. 1 second me table ready!",
    timeSaved: "Instantly styles professional reports"
  },
  {
    id: "sc-home-4",
    keys: ["Alt", "H", "M", "C"],
    title: "Merge & Center Cells",
    ribbonClass: "Home Tab",
    description: "Merges multiple selected cells into a single large cell and centers the heading text.",
    teacherExplanation: "Table ka main title poori table ke center me dikhane ke liye cells select karein aur Alt + H + M + C dabayein. Multiple cells ek hokar text beech me aa jayega.",
    timeSaved: "Saves 5 seconds per header"
  },
  {
    id: "sc-home-5",
    keys: ["Alt", "H", "W"],
    title: "Wrap Text Inside Cell",
    ribbonClass: "Home Tab",
    description: "Wraps long sentences into multiple lines inside the same cell instead of overflowing into adjacent cells.",
    teacherExplanation: "Jab column heading lambi ho aur column ko zyada chauda nahi karna ho, Alt + H + W dabane se text do ya teen lines me wrap ho jata hai aur column ki width clean rehti hai.",
    timeSaved: "Makes tables fit on printed sheets"
  },
  {
    id: "sc-home-6",
    keys: ["Ctrl", "Shift", "%"],
    title: "Format as Percentage (%)",
    ribbonClass: "Home Tab",
    description: "Converts 0.18 into 18% instantly with the percent sign.",
    teacherExplanation: "Tax rate ya commission rate calculate karte waqt result 0.05 ya 0.12 aata hai. Bas Ctrl + Shift + % dabayein, wo turant 5% ya 12% ban jayega.",
    timeSaved: "Saves 4 clicks in Home ribbon"
  },
  {
    id: "sc-home-7",
    keys: ["Ctrl", "Shift", "$"],
    title: "Format as Currency (₹/$)",
    ribbonClass: "Home Tab",
    description: "Formats numbers with currency symbol, commas (thousands separator), and two decimal places.",
    teacherExplanation: "50000 ko readable format Rs. 50,000.00 banane ke liye Ctrl + Shift + $ dabayein. Numbers professional accounts look le lete hain.",
    timeSaved: "Instant clean accounting look"
  },
  {
    id: "sc-home-8",
    keys: ["Ctrl", "B"],
    title: "Bold Selected Text or Cell",
    ribbonClass: "Home Tab",
    description: "Toggles bold formatting on the selected cells or text inside a cell.",
    teacherExplanation: "Heading ya Total row ko bold banane ke liye row/cell select karke Ctrl + B dabayein. Dobara dabane par bold hat jata hai.",
    timeSaved: "Saves 3 seconds per bold action"
  },
  {
    id: "sc-home-9",
    keys: ["Ctrl", "I"],
    title: "Italic Selected Text",
    ribbonClass: "Home Tab",
    description: "Toggles italic formatting on the selected cells or text.",
    teacherExplanation: "Notes ya special remarks ko italic me likhne ke liye Ctrl + I dabayein.",
    timeSaved: "Instant text formatting"
  },
  {
    id: "sc-home-10",
    keys: ["Ctrl", "U"],
    title: "Underline Selected Text",
    ribbonClass: "Home Tab",
    description: "Toggles underline formatting on selected text.",
    teacherExplanation: "Important values ya headings ke niche underline lagane ke liye Ctrl + U dabayein.",
    timeSaved: "Instant underline formatting"
  },
  {
    id: "sc-home-11",
    keys: ["Ctrl", "Shift", "~"],
    title: "General Format (Remove Number Formatting)",
    ribbonClass: "Home Tab",
    description: "Removes all number formatting and displays values in General default format.",
    teacherExplanation: "Kisi cell se sab formatting hatani ho (currency, date, percent sab ek saath), Ctrl + Shift + ~ dabayein.",
    timeSaved: "One-step format reset"
  },
  {
    id: "sc-home-12",
    keys: ["Ctrl", "Shift", "#"],
    title: "Format as Date (DD-MMM-YY)",
    ribbonClass: "Home Tab",
    description: "Instantly formats numbers as date in DD-MMM-YY format (e.g. 01-Jan-24).",
    teacherExplanation: "Kisi number ya date serial ko date format me dikhane ke liye Ctrl + Shift + # dabayein.",
    timeSaved: "Saves clicking through Format Cells"
  },
  {
    id: "sc-home-13",
    keys: ["Ctrl", "Shift", "@"],
    title: "Format as Time (HH:MM AM/PM)",
    ribbonClass: "Home Tab",
    description: "Formats a decimal number or time serial as readable time (e.g. 2:30 PM).",
    teacherExplanation: "Attendance sheet ya time tracking me time values ko proper format me dikhane ke liye Ctrl + Shift + @ dabayein.",
    timeSaved: "Quick time format apply"
  },
  {
    id: "sc-home-14",
    keys: ["Ctrl", "Shift", "!"],
    title: "Format as Number (with commas, 2 decimals)",
    ribbonClass: "Home Tab",
    description: "Formats number with comma separator and 2 decimal places (e.g. 12,500.00).",
    teacherExplanation: "Large numbers ko readable comma format me dikhane ke liye Ctrl + Shift + ! dabayein. Accounting reports ke liye perfect.",
    timeSaved: "Instant number formatting"
  },
  {
    id: "sc-home-15",
    keys: ["Alt", "H", "H"],
    title: "Fill Cell Background / Highlight Color",
    ribbonClass: "Home Tab",
    description: "Opens the fill color picker to highlight or color the background of selected cells.",
    teacherExplanation: "Total row ko green ya important cells ko yellow highlight karne ke liye Alt + H + H dabayein aur color choose karein.",
    timeSaved: "Saves mouse clicks on ribbon"
  },
  {
    id: "sc-home-16",
    keys: ["Ctrl", "Shift", "&"],
    title: "Apply Outline Border to Selection",
    ribbonClass: "Home Tab",
    description: "Applies a solid border around the outer edges of the selected range only.",
    teacherExplanation: "Puri table ke chaaro taraf sirf outer border lagani ho (inner borders nahi), Ctrl + Shift + & dabayein.",
    timeSaved: "Quick outer border"
  },
  {
    id: "sc-home-17",
    keys: ["Ctrl", "Shift", "_"],
    title: "Remove All Borders from Selection",
    ribbonClass: "Home Tab",
    description: "Clears and removes all existing borders from the selected cell range.",
    teacherExplanation: "Galat border lag gayi ho toh saaf karne ke liye range select karke Ctrl + Shift + _ (underscore) dabayein.",
    timeSaved: "One-step border removal"
  },
  {
    id: "sc-home-18",
    keys: ["Alt", "H", "A", "C"],
    title: "Center-Align Cell Content Horizontally",
    ribbonClass: "Home Tab",
    description: "Centers text or numbers horizontally within the selected cells.",
    teacherExplanation: "Column headings ko center me align karne ke liye cells select karke Alt + H + A + C dabayein.",
    timeSaved: "Faster than clicking ribbon"
  },
  {
    id: "sc-home-19",
    keys: ["Alt", "H", "A", "L"],
    title: "Left-Align Cell Content",
    ribbonClass: "Home Tab",
    description: "Aligns text to the left side of the selected cells.",
    teacherExplanation: "Text data ko left align karne ke liye Alt + H + A + L dabayein.",
    timeSaved: "Quick alignment shortcut"
  },
  {
    id: "sc-home-20",
    keys: ["Alt", "H", "A", "R"],
    title: "Right-Align Cell Content",
    ribbonClass: "Home Tab",
    description: "Aligns text or numbers to the right side of the selected cells.",
    teacherExplanation: "Numbers ko right side me align karne ke liye Alt + H + A + R dabayein. Numbers always right-aligned honi chahiye — professional standard.",
    timeSaved: "Quick alignment shortcut"
  },

  // ==========================================
  // 2. DATA TAB
  // ==========================================
  {
    id: "sc-data-1",
    keys: ["Ctrl", "Shift", "L"],
    title: "Turn AutoFilter On / Off",
    ribbonClass: "Data Tab",
    description: "Instantly applies or removes filter dropdown arrows on all headers of your data table.",
    teacherExplanation: "Dosto! Jab aapke paas 5,000 rows ka data ho aur boss aapse kahe ki sirf Mumbai branch ya Pending invoices dikhao, toh mouse se Data Tab me jaakar Filter par click karne me time kharab mat kijiye. Bas table me kisi bhi cell par cursor rakhein aur Ctrl + Shift + L dabayein! Dropdown arrows turant aa jayenge.",
    timeSaved: "Saves 10 seconds every time you filter"
  },
  {
    id: "sc-data-2",
    keys: ["Alt", "A", "S", "S"],
    title: "Open Multi-Level Sort Dialog Box",
    ribbonClass: "Data Tab",
    description: "Opens the advanced Sort dialog to sort by multiple columns simultaneously.",
    teacherExplanation: "Agar aapko data ko pehle Department wise aur fir department ke andar Salary highest to lowest arrange karna ho, toh Alt + A + S + S dabao. Advanced Sort box khul jayega jahan aap multiple levels add kar sakte hain.",
    timeSaved: "Saves 15 seconds navigating menus"
  },
  {
    id: "sc-data-3",
    keys: ["Alt", "A", "E"],
    title: "Text to Columns Wizard",
    ribbonClass: "Data Tab",
    description: "Splits combined cell text into multiple columns using delimiters (comma, space, hyphen) or fixed widths.",
    teacherExplanation: "Client ya ERP software se aane wala data aksar ek hi cell me Name, City, Phone jaisa chipka hua hota hai. Column select karke Alt + A + E dabate hi Text-to-Columns wizard khul jata hai.",
    timeSaved: "Saves hours of manual re-typing"
  },
  {
    id: "sc-data-4",
    keys: ["Alt", "A", "M"],
    title: "Remove Duplicates Wizard",
    ribbonClass: "Data Tab",
    description: "Instantly scans columns and deletes repeated duplicate rows, keeping only unique records.",
    teacherExplanation: "Accounts aur billing me duplicate invoice number ya customer phone number aane se calculation galat ho jati hai. Table select karke Alt + A + M dabayein. Excel aapse puchega ki kis column ke basis par duplicate check karna hai.",
    timeSaved: "Saves 20-30 minutes of manual checking"
  },
  {
    id: "sc-data-5",
    keys: ["Alt", "A", "V", "V"],
    title: "Open Data Validation Dialog",
    ribbonClass: "Data Tab",
    description: "Creates dropdown lists in cells and restricts user inputs (e.g. only specific dates or list values).",
    teacherExplanation: "Office me jab multiple log ek hi sheet par data entry karte hain, toh spelling mistakes ki wajah se VLOOKUP break ho jata hai. Kisi cell par Alt + A + V + V dabayein, 'List' choose karein aur apni items (jaise Cash, UPI, Cheque) likhein.",
    timeSaved: "Prevents data entry errors permanently"
  },
  {
    id: "sc-data-6",
    keys: ["Ctrl", "Alt", "F5"],
    title: "Refresh All Data & Power Query Connections",
    ribbonClass: "Data Tab",
    description: "Refreshes all external data sources, SQL connections, and Power Query pipelines across the workbook.",
    teacherExplanation: "Power Query ka sabse bada jadu yahi shortcut hai! Agar aapne 12 mahine ki branch files ko combine karne ka pipeline banaya hai, toh naye mahine ka data folder me daal kar bas Ctrl + Alt + F5 dabana hota hai.",
    timeSaved: "Automates hours of weekly reporting"
  },
  {
    id: "sc-data-7",
    keys: ["Alt", "A", "G", "G"],
    title: "Group Rows or Columns",
    ribbonClass: "Data Tab",
    description: "Groups selected rows or columns so they can be collapsed/expanded with a + or - toggle button.",
    teacherExplanation: "Bade financial statements me quarterly data ko group karke collapse karna ho toh rows/columns select karke Alt + A + G + G dabayein. Chhota + button aa jayega jisse section hide/show kar sakte hain.",
    timeSaved: "Makes large reports navigable"
  },
  {
    id: "sc-data-8",
    keys: ["Alt", "A", "U", "U"],
    title: "Ungroup Rows or Columns",
    ribbonClass: "Data Tab",
    description: "Removes the grouping from previously grouped rows or columns.",
    teacherExplanation: "Galat grouping ho gayi ho ya grouping hatani ho toh Alt + A + U + U dabayein.",
    timeSaved: "Quick ungroup action"
  },
  {
    id: "sc-data-9",
    keys: ["Alt", "A", "B"],
    title: "Open Subtotal Dialog",
    ribbonClass: "Data Tab",
    description: "Automatically inserts subtotal rows grouped by a column, calculating SUM/AVERAGE/COUNT per group.",
    teacherExplanation: "Har department ka alag SUM chahiye bina manual formula likhne ke? Sort karke Alt + A + B dabayein. Excel har group ke niche automatically subtotal insert kar dega!",
    timeSaved: "Saves hours of manual sub-grouping"
  },
  {
    id: "sc-data-10",
    keys: ["Alt", "A", "W", "F"],
    title: "Advanced Filter Dialog",
    ribbonClass: "Data Tab",
    description: "Opens Advanced Filter to filter with complex multi-condition criteria and copy results to another location.",
    teacherExplanation: "Normal AutoFilter se zyada complex filtering chahiye (jaise multiple OR conditions ya unique values copy karna), toh Alt + A + W + F se Advanced Filter kholta hai.",
    timeSaved: "Powerful complex data extraction"
  },

  // ==========================================
  // 3. INSERT TAB
  // ==========================================
  {
    id: "sc-insert-1",
    keys: ["Ctrl", "T"],
    title: "Convert Range to Official Excel Table",
    ribbonClass: "Insert Tab",
    description: "Turns raw data into a dynamic Excel Table with auto-filters, zebra shading, and auto-expanding formulas.",
    teacherExplanation: "Normal range me kaam karna aur Official Excel Table (Ctrl + T) me kaam karna zameen aasmaan ka fark hai! Jab aap Ctrl + T dabate ho, toh naya row jodte hi formula automatic neeche copy ho jata hai.",
    timeSaved: "Saves 10-15 minutes of formula maintenance"
  },
  {
    id: "sc-insert-2",
    keys: ["Alt", "N", "V"],
    title: "Insert Pivot Table Wizard",
    ribbonClass: "Insert Tab",
    description: "Launches the Pivot Table creation dialog on the active table or range.",
    teacherExplanation: "10,000 rows ka sales summary banana ho, toh table me cursor rakh kar Alt + N + V dabaiye aur Enter kijiye! New sheet me Pivot Table fields ka panel open ho jayega.",
    timeSaved: "Saves 8 seconds every time you build a Pivot"
  },
  {
    id: "sc-insert-3",
    keys: ["Alt", "F1"],
    title: "Instant Embedded Column Chart",
    ribbonClass: "Insert Tab",
    description: "Creates an embedded chart of the selected data directly on the active worksheet.",
    teacherExplanation: "Boss ke samne meeting me ho aur unhone kaha 'Is data ka graph dikhao', bas data select karke Alt + F1 dabao! 1 second me sundar column chart sheet par ban kar samne aa jayega.",
    timeSaved: "Instant visual presentation"
  },
  {
    id: "sc-insert-4",
    keys: ["F11"],
    title: "Create Chart on a Dedicated Full Sheet",
    ribbonClass: "Insert Tab",
    description: "Generates a full-screen chart on a new separate chart tab.",
    teacherExplanation: "Agar aapko graph alag full sheet par print karne ke liye chahiye, toh data select karke seedha F11 dabayein. Excel naya Chart Tab create karke graph display kar dega.",
    timeSaved: "Full-page chart in one keystroke"
  },
  {
    id: "sc-insert-5",
    keys: ["Ctrl", "K"],
    title: "Insert Hyperlink",
    ribbonClass: "Insert Tab",
    description: "Links a cell to a website, another sheet in the workbook, or a local file.",
    teacherExplanation: "Invoice sheet par GST invoice ka PDF link karna ho ya Index page se different sheets par jump karne ka button banana ho, Ctrl + K dabayein aur link add karein.",
    timeSaved: "Saves 10 seconds per link"
  },
  {
    id: "sc-insert-6",
    keys: ["Ctrl", "Shift", "+"],
    title: "Insert New Row or Column",
    ribbonClass: "Insert Tab",
    description: "Inserts a new blank row above the selected row or a new column to the left of the selected column.",
    teacherExplanation: "Table me naya row ya column add karna ho toh row/column select karke Ctrl + Shift + + (plus) dabayein. Naya blank row turant insert ho jayega.",
    timeSaved: "Saves right-click insert steps"
  },
  {
    id: "sc-insert-7",
    keys: ["Alt", "N", "S", "P"],
    title: "Insert Spark Lines (Mini Charts in Cells)",
    ribbonClass: "Insert Tab",
    description: "Inserts tiny in-cell sparkline charts to show trends without creating a full chart.",
    teacherExplanation: "Monthly sales ka trend ek chote graph me dikhana ho, sirf ek cell ke andar, Alt + N + S + P (Sparkline Insert) dabayein. Bahut professional look aata hai report me!",
    timeSaved: "Adds visual appeal instantly"
  },
  {
    id: "sc-insert-8",
    keys: ["Alt", "N", "SF"],
    title: "Insert Slicer for Pivot Table",
    ribbonClass: "Insert Tab",
    description: "Inserts a clickable visual filter button panel for Pivot Tables — no need to use dropdown filters.",
    teacherExplanation: "Pivot Table me visual filter buttons lagane ke liye Alt + N + SF dabayein. Manager log slicer buttons click karke report filter kar sakte hain bina kuch samjhe!",
    timeSaved: "Makes dashboards interactive"
  },

  // ==========================================
  // 4. FORMULAS TAB
  // ==========================================
  {
    id: "sc-form-1",
    keys: ["F4"],
    title: "Cycle Cell Locking ($ Sign) / Repeat Last Action",
    ribbonClass: "Formulas Tab",
    description: "Cycles through absolute locking ($A$1 -> A$1 -> $A1 -> A1) when inside formula bar.",
    teacherExplanation: "Ye shortcut Excel seekhne wale har student ko pata hona chahiye! Jab aap formula likhte waqt cell reference select karte ho (jaise D1), F4 dabane se wo turant $D$1 (lock) ho jata hai. Dollar sign haath se type karne ki koi zaroorat nahi!",
    timeSaved: "Saves hours when dragging formulas"
  },
  {
    id: "sc-form-2",
    keys: ["Shift", "F3"],
    title: "Insert Function (fx) Dialog Box",
    ribbonClass: "Formulas Tab",
    description: "Opens the function library search box where you can search functions and read argument descriptions.",
    teacherExplanation: "Agar aapko kisi formula ka exact spelling ya arguments yaad nahi aa rahe (jaise DATEDIF ya NETWORKDAYS), Shift + F3 dabayein. Excel aapse har argument ki value step-by-step puchega.",
    timeSaved: "Perfect guide for beginners"
  },
  {
    id: "sc-form-3",
    keys: ["Ctrl", "`"],
    title: "Show / Hide All Formulas on Worksheet",
    ribbonClass: "Formulas Tab",
    description: "Toggles between showing calculated results and showing the raw underlying formula text in every cell.",
    teacherExplanation: "Audit time par ya calculation check karne ke liye Ctrl + ` (backtick key, Esc ke niche) dabayein. Puri sheet me jahan-jahan formula laga hai, wo visible ho jata hai.",
    timeSaved: "Auditor's best friend"
  },
  {
    id: "sc-form-4",
    keys: ["Shift", "F9"],
    title: "Calculate Active Worksheet Only",
    ribbonClass: "Formulas Tab",
    description: "Re-evaluates formulas only on the currently visible worksheet, skipping all other sheets.",
    teacherExplanation: "Badi financial model sheets me lakho formulas hone se Excel hang hota hai. Calculation ko Manual set karke sirf current sheet update karne ke liye Shift + F9 dabate hain.",
    timeSaved: "Prevents Excel freezing"
  },
  {
    id: "sc-form-5",
    keys: ["F9"],
    title: "Calculate All Worksheets Now",
    ribbonClass: "Formulas Tab",
    description: "Forces recalculation of all formulas across all sheets in the workbook.",
    teacherExplanation: "Jab calculation Manual mode me ho aur puri workbook ek saath update karni ho toh F9 dabayein.",
    timeSaved: "Instant full recalculation"
  },
  {
    id: "sc-form-6",
    keys: ["Ctrl", "Shift", "A"],
    title: "Insert All Function Arguments",
    ribbonClass: "Formulas Tab",
    description: "After typing a function name, Ctrl+Shift+A inserts all argument placeholders in the formula bar.",
    teacherExplanation: "Agar =VLOOKUP likhne ke baad Ctrl + Shift + A dabate ho toh Excel automatically (lookup_value, table_array, col_index_num, [range_lookup]) dikhata hai — aapko sirf values fill karni hain!",
    timeSaved: "Instant argument template"
  },
  {
    id: "sc-form-7",
    keys: ["Alt", "M", "P"],
    title: "Trace Precedents (Show Which Cells Feed This Cell)",
    ribbonClass: "Formulas Tab",
    description: "Draws blue arrows showing which cells are referenced by the formula in the active cell.",
    teacherExplanation: "Kisi formula cell par click karke Alt + M + P dabayein. Blue arrows dikhayenge ki formula kaunse cells ki values use kar raha hai — debugging ke liye perfect!",
    timeSaved: "Visual formula debugging"
  },
  {
    id: "sc-form-8",
    keys: ["Alt", "M", "D"],
    title: "Trace Dependents (Show Which Cells Use This Cell)",
    ribbonClass: "Formulas Tab",
    description: "Draws arrows showing which other formula cells depend on the selected cell.",
    teacherExplanation: "Ek cell ka value change karne se kaunse formulas affect honge ye jaanna ho toh Alt + M + D dabayein. Arrows dikhayenge ki kaun dependent hai.",
    timeSaved: "Find impact of changes"
  },
  {
    id: "sc-form-9",
    keys: ["Ctrl", "Alt", "F9"],
    title: "Force Recalculate All Workbooks",
    ribbonClass: "Formulas Tab",
    description: "Forces complete recalculation of all open workbooks — even cells marked as unchanged.",
    teacherExplanation: "Kuch formulas stubborn hote hain aur update nahi hote. Ctrl + Alt + F9 se Excel force karke har cell recalculate karta hai.",
    timeSaved: "Fixes stubborn calculation issues"
  },

  // ==========================================
  // 5. PAGE LAYOUT TAB
  // ==========================================
  {
    id: "sc-page-1",
    keys: ["Ctrl", "P"],
    title: "Print & Print Setup Screen",
    ribbonClass: "Page Layout Tab",
    description: "Opens the Print Preview screen with printer selection, scaling, and orientation options.",
    teacherExplanation: "Report print karne se pehle hamesha Ctrl + P dabakar print preview check karein taaki check kar sakein ki data cut toh nahi ho raha.",
    timeSaved: "Prevents wrong prints"
  },
  {
    id: "sc-page-2",
    keys: ["Alt", "P", "R", "S"],
    title: "Set Print Area",
    ribbonClass: "Page Layout Tab",
    description: "Marks the currently selected range as the only region that will be printed.",
    teacherExplanation: "Poori sheet nahi sirf specific table print karni ho, toh table select karke Alt + P + R + S dabayein. Sirf wahi hissa print hoga.",
    timeSaved: "Saves paper and ink"
  },
  {
    id: "sc-page-3",
    keys: ["Alt", "P", "R", "C"],
    title: "Clear Print Area",
    ribbonClass: "Page Layout Tab",
    description: "Removes the defined print area so the entire sheet prints again.",
    teacherExplanation: "Print area set ki ho aur hatani ho toh Alt + P + R + C dabayein.",
    timeSaved: "Quick print area reset"
  },
  {
    id: "sc-page-4",
    keys: ["Alt", "P", "O"],
    title: "Toggle Landscape / Portrait Orientation",
    ribbonClass: "Page Layout Tab",
    description: "Switches page orientation between portrait (vertical) and landscape (horizontal).",
    teacherExplanation: "Wide table jo portrait me fit nahi hoti, usse landscape me print karne ke liye Alt + P + O dabayein.",
    timeSaved: "Quick page orientation switch"
  },

  // ==========================================
  // 6. VIEW TAB
  // ==========================================
  {
    id: "sc-view-1",
    keys: ["Alt", "W", "F", "F"],
    title: "Freeze Panes (Lock Header Rows & Columns)",
    ribbonClass: "View Tab",
    description: "Locks the top header row or first column so they remain visible while scrolling through thousands of rows.",
    teacherExplanation: "Dosto! Jab aap 500 rows neeche scroll karte ho, toh pata hi nahi chalta ki kaun sa column Sales hai aur kaun sa Profit. Header row ke theek niche wale cell me cursor rakhein aur Alt + W + F + F dabayein.",
    timeSaved: "Essential daily office necessity"
  },
  {
    id: "sc-view-2",
    keys: ["Alt", "W", "L"],
    title: "Page Break Preview Mode",
    ribbonClass: "View Tab",
    description: "Switches to blue-bordered page break view where you can see exactly which columns will print on each page.",
    teacherExplanation: "Office me print nikalte waqt aakhiri column doosre page par chala jata hai aur paper waste hota hai. Alt + W + L dabayein. Blue lines ko mouse se drag karke sabhi columns ko Page 1 ke andar fit karein.",
    timeSaved: "Saves paper and printing disasters"
  },
  {
    id: "sc-view-3",
    keys: ["Alt", "W", "G"],
    title: "Toggle Gridlines On / Off",
    ribbonClass: "View Tab",
    description: "Shows or hides the grey cell gridlines on the worksheet for clean presentation view.",
    teacherExplanation: "Jab aap dashboard ya report present karna ho aur gridlines distracting lagte hain, Alt + W + G dabane se hide ho jaate hain.",
    timeSaved: "Clean presentation in seconds"
  },
  {
    id: "sc-view-4",
    keys: ["Alt", "W", "H"],
    title: "Toggle Row & Column Headings (A, B, C / 1, 2, 3)",
    ribbonClass: "View Tab",
    description: "Hides or shows the row numbers (1, 2, 3) and column letters (A, B, C) at the edges.",
    teacherExplanation: "Full clean dashboard view ke liye headers bhi hide karne ho toh Alt + W + H dabayein.",
    timeSaved: "Cleaner presentation mode"
  },
  {
    id: "sc-view-5",
    keys: ["Ctrl", "F6"],
    title: "Switch Between Open Workbooks",
    ribbonClass: "View Tab",
    description: "Cycles focus between multiple open Excel workbook windows.",
    teacherExplanation: "Kai files ek saath khuli ho toh taskbar me click karne ke bajaye Ctrl + F6 se next workbook me jump karein.",
    timeSaved: "Faster workbook switching"
  },
  {
    id: "sc-view-6",
    keys: ["Alt", "W", "N"],
    title: "Open a New Window of the Same Workbook",
    ribbonClass: "View Tab",
    description: "Opens a second window showing the same workbook so you can view two different sheets simultaneously.",
    teacherExplanation: "Ek sheet ko dekhte hue doosri sheet edit karni ho toh Alt + W + N se same file ki dusri window khul jati hai. Phir Alt + W + A (Arrange All) se side by side rakh sakte hain.",
    timeSaved: "Multi-sheet view simultaneously"
  },
  {
    id: "sc-view-7",
    keys: ["Alt", "W", "Q"],
    title: "Zoom Dialog Box",
    ribbonClass: "View Tab",
    description: "Opens the Zoom dialog to set a custom zoom percentage (e.g. 85%, 110%).",
    teacherExplanation: "Sheet ko thoda zoom in ya out karna ho, Alt + W + Q dabayein aur exact percentage set karein.",
    timeSaved: "Custom zoom in seconds"
  },
  {
    id: "sc-view-8",
    keys: ["Alt", "W", "I"],
    title: "Zoom to Fit Selection",
    ribbonClass: "View Tab",
    description: "Automatically zooms the worksheet so that the currently selected range fills the screen.",
    teacherExplanation: "Selected table ko poori screen par fill karna ho toh Alt + W + I dabayein — Excel automatic zoom adjust kar dega.",
    timeSaved: "Perfect focus zoom"
  },

  // ==========================================
  // 7. NAVIGATION & SELECTION
  // ==========================================
  {
    id: "sc-nav-1",
    keys: ["Ctrl", "Arrow Keys"],
    title: "Jump to the Extreme Edge of Data Region",
    ribbonClass: "Navigation & Selection",
    description: "Instantly teleports the active cell to the last non-empty row or column in that direction.",
    teacherExplanation: "10,000 rows ke aakhiri row par jane ke liye mouse se scroll karne me 2 minute lagte hain. Bas Ctrl dabakar Down Arrow (↓) dabayein, 1 millisecond me row 10,000 par pahunch jayenge!",
    timeSaved: "Saves minutes of endless scrolling"
  },
  {
    id: "sc-nav-2",
    keys: ["Ctrl", "Shift", "Arrow Keys"],
    title: "Select Data from Active Cell to Extreme Edge",
    ribbonClass: "Navigation & Selection",
    description: "Expands the active selection to the last contiguous populated cell in the chosen direction.",
    teacherExplanation: "Pura column select karna ho formula lagane ke liye, toh pehle cell par cursor rakhein aur Ctrl + Shift + Down Arrow (↓) dabayein. Poora data ek jhatke me select!",
    timeSaved: "Selects 100,000 rows in 0.1 seconds"
  },
  {
    id: "sc-nav-3",
    keys: ["Ctrl", "Space"],
    title: "Select Entire Column",
    ribbonClass: "Navigation & Selection",
    description: "Selects every cell in the active column from row 1 down to row 1,048,576.",
    teacherExplanation: "Kisi poore column ko delete ya format karna ho, column letter par mouse le jane ke bajaye cell me khade hokar Ctrl + Space dabayein.",
    timeSaved: "Super fast keyboard workflow"
  },
  {
    id: "sc-nav-4",
    keys: ["Shift", "Space"],
    title: "Select Entire Row",
    ribbonClass: "Navigation & Selection",
    description: "Selects every cell in the active row from column A to column XFD.",
    teacherExplanation: "Poori row ko select karke highlight ya delete karne ke liye Shift + Space dabayein. Fir Ctrl + - dabane se row delete ho jati hai!",
    timeSaved: "Fastest way to select rows"
  },
  {
    id: "sc-nav-5",
    keys: ["Ctrl", "PageDown / PageUp"],
    title: "Switch to Next / Previous Worksheet",
    ribbonClass: "Navigation & Selection",
    description: "Navigates between workbook sheets without touching the mouse.",
    teacherExplanation: "Agar aapke workbook me 12 sheets hain (Jan, Feb, Mar...), toh sheet tabs par click karne ke bajaye Ctrl + PageDown se agli sheet par aur Ctrl + PageUp se pichhli sheet par jump karein.",
    timeSaved: "Effortless workbook navigation"
  },
  {
    id: "sc-nav-6",
    keys: ["Ctrl", "Home"],
    title: "Jump Back to Cell A1 Instantly",
    ribbonClass: "Navigation & Selection",
    description: "Instantly moves active cell to the top-left origin (cell A1) of the sheet.",
    teacherExplanation: "Sheet ke kisi bhi kone me bhatak gaye hon, bas Ctrl + Home dabayein, aap wapas cell A1 par pahunch jayenge.",
    timeSaved: "Instant reset to start"
  },
  {
    id: "sc-nav-7",
    keys: ["Ctrl", "End"],
    title: "Jump to Last Used Cell in the Sheet",
    ribbonClass: "Navigation & Selection",
    description: "Moves the active cell to the last cell that contains data or formatting in the worksheet.",
    teacherExplanation: "Sheet ka aakhiri data kaun se row-column tak gaya hai, ye jaanne ke liye Ctrl + End dabayein. Excel seedha last used cell par le jayega.",
    timeSaved: "Find sheet extent instantly"
  },
  {
    id: "sc-nav-8",
    keys: ["Ctrl", "G"],
    title: "Go To Specific Cell / Named Range",
    ribbonClass: "Navigation & Selection",
    description: "Opens Go To dialog to jump directly to a specific cell address (e.g. B500) or named range.",
    teacherExplanation: "Directly Row 500 ya B200 par jaana ho toh Ctrl + G dabayein, cell address type karein aur Enter dabayein. Seedha wahan pahunch jayenge.",
    timeSaved: "Instant cell navigation"
  },
  {
    id: "sc-nav-9",
    keys: ["Ctrl", "G", "Alt", "S"],
    title: "Go To Special (Select Blanks, Formulas, etc.)",
    ribbonClass: "Navigation & Selection",
    description: "Opens Go To Special to select specific types of cells: blanks, formulas, constants, errors, etc.",
    teacherExplanation: "Puri sheet me sirf blank cells select karni ho ya sirf formulas, toh Ctrl + G dabao, fir Alt + S dabakar 'Go To Special' dialog kholo aur type choose karo.",
    timeSaved: "Selects complex cell types instantly"
  },
  {
    id: "sc-nav-10",
    keys: ["Ctrl", "A"],
    title: "Select All Cells or Entire Worksheet",
    ribbonClass: "Navigation & Selection",
    description: "First press selects the current data region; second press selects the entire worksheet.",
    teacherExplanation: "Pura data select karna ho toh Ctrl + A. Data region ke bahar ho toh Ctrl + A se puri sheet select ho jati hai.",
    timeSaved: "Select all in one key"
  },
  {
    id: "sc-nav-11",
    keys: ["Ctrl", "Shift", "End"],
    title: "Extend Selection to Last Used Cell",
    ribbonClass: "Navigation & Selection",
    description: "Extends the current selection from the active cell all the way to the last used cell in the worksheet.",
    teacherExplanation: "A1 se last used cell tak ka poora data select karna ho toh A1 me cursor rakh kar Ctrl + Shift + End dabayein.",
    timeSaved: "Full data selection instantly"
  },
  {
    id: "sc-nav-12",
    keys: ["Ctrl", "Shift", "Home"],
    title: "Extend Selection to Cell A1",
    ribbonClass: "Navigation & Selection",
    description: "Extends selection from the current cell backwards up to cell A1.",
    teacherExplanation: "Last row me cursor ho aur A1 tak sab kuch select karna ho toh Ctrl + Shift + Home dabayein.",
    timeSaved: "Quick full upward selection"
  },
  {
    id: "sc-nav-13",
    keys: ["F5"],
    title: "Open Go To Dialog Directly",
    ribbonClass: "Navigation & Selection",
    description: "Alternative key for Go To dialog — same as Ctrl+G.",
    teacherExplanation: "F5 ya Ctrl+G dono ek hi kaam karte hain — Go To dialog kholta hai.",
    timeSaved: "Quick navigation shortcut"
  },

  // ==========================================
  // 8. DATA ENTRY & EDITING
  // ==========================================
  {
    id: "sc-edit-1",
    keys: ["F2"],
    title: "Edit Active Cell Directly",
    ribbonClass: "Data Entry & Editing",
    description: "Enters edit mode in the active cell, placing cursor at the end of the text without overwriting content.",
    teacherExplanation: "Students sabse badi galti ye karte hain ki cell me kuch edit karne ke liye seedha type kar dete hain jisse purana data delete ho jata hai! Pehle F2 dabayein taaki cursor cell ke andar aa jaye, fir edit karein.",
    timeSaved: "Prevents accidental data loss"
  },
  {
    id: "sc-edit-2",
    keys: ["Alt", "Enter"],
    title: "Insert Line Break Inside the Same Cell",
    ribbonClass: "Data Entry & Editing",
    description: "Starts a new line of text within the same cell without moving down to the next row.",
    teacherExplanation: "Agar aapko ek hi cell me Address likhna hai: Shop No 4 (Line 1), MG Road (Line 2), Mumbai (Line 3), toh Enter dabane ke bajaye Alt + Enter dabayein!",
    timeSaved: "Essential for multi-line formatting"
  },
  {
    id: "sc-edit-3",
    keys: ["Ctrl", "D"],
    title: "Fill Down (Copy from Cell Above)",
    ribbonClass: "Data Entry & Editing",
    description: "Copies the content or formula of the cell directly above into the active cell or selected range.",
    teacherExplanation: "Upar wale cell ka formula ya text neeche lana ho, toh Copy aur Paste karne ke 2 steps ke bajaye bas niche wale cell par cursor rakh kar Ctrl + D dabayein.",
    timeSaved: "Saves 3 seconds per duplicate entry"
  },
  {
    id: "sc-edit-4",
    keys: ["Ctrl", "R"],
    title: "Fill Right (Copy from Cell to Left)",
    ribbonClass: "Data Entry & Editing",
    description: "Copies content or formula of the cell directly to the left into the active cell.",
    teacherExplanation: "Left wale cell ka data right me lane ke liye Ctrl + R dabayein.",
    timeSaved: "Saves 3 seconds per horizontal copy"
  },
  {
    id: "sc-edit-5",
    keys: ["Ctrl", ";"],
    title: "Insert Today's Date (Static Stamp)",
    ribbonClass: "Data Entry & Editing",
    description: "Inserts the current system date as a fixed, permanent static value.",
    teacherExplanation: "Voucher ya bill entry karte waqt date type karne me time lagta hai. Bas Ctrl aur semicolon (;) dabayein. Aaj ki tareekh turant aa jayegi aur ye kal change nahi hogi.",
    timeSaved: "Enters date in half a second"
  },
  {
    id: "sc-edit-6",
    keys: ["Ctrl", "Shift", ":"],
    title: "Insert Current Time (Static Stamp)",
    ribbonClass: "Data Entry & Editing",
    description: "Inserts current system time (hours and minutes) as a static stamp.",
    teacherExplanation: "Security in/out time ya punching time note karne ke liye Ctrl + Shift + : dabayein. Current time instantly print ho jayega.",
    timeSaved: "Saves manual time entry"
  },
  {
    id: "sc-edit-7",
    keys: ["Ctrl", "E"],
    title: "Flash Fill Pattern Recognition",
    ribbonClass: "Data Entry & Editing",
    description: "Magically detects patterns and fills the remaining column (e.g. splitting names, joining text, formatting phone numbers).",
    teacherExplanation: "Excel ka sabse smart AI feature Flash Fill hai! Jaise Column A me Rahul Sharma hai, aapne Column B me Rahul type kiya aur Ctrl + E dabaya, Excel poore 10,000 logo ke first names turant extract kar dega!",
    timeSaved: "Replaces complex text formulas in seconds"
  },
  {
    id: "sc-edit-8",
    keys: ["Ctrl", "'"],
    title: "Copy Exact Formula from Cell Above (No Reference Shift)",
    ribbonClass: "Data Entry & Editing",
    description: "Copies the exact formula text of the cell above without shifting relative cell coordinates.",
    teacherExplanation: "Agar aap formula ko copy-paste karte ho toh cell reference badal jata hai. Agar aapko wahi same formula dekhna ya edit karna hai bina reference change kiye, Ctrl + ' dabayein.",
    timeSaved: "Saves formula editing time"
  },
  {
    id: "sc-edit-9",
    keys: ["Ctrl", "Z"],
    title: "Undo Last Action",
    ribbonClass: "Data Entry & Editing",
    description: "Reverses the most recent action. Can be pressed multiple times to undo a sequence of actions.",
    teacherExplanation: "Galat delete kar diya? Galat formula laga diya? Ghabrao mat! Ctrl + Z dabate jao jab tak pichli state na aa jaye. Excel 100+ steps undo kar sakta hai!",
    timeSaved: "Saves panic and data loss"
  },
  {
    id: "sc-edit-10",
    keys: ["Ctrl", "Y"],
    title: "Redo (Reverse the Last Undo)",
    ribbonClass: "Data Entry & Editing",
    description: "Re-applies the action that was undone by Ctrl+Z.",
    teacherExplanation: "Undo ke baad sochte ho ki woh change sahi tha, toh Ctrl + Y se redo karo.",
    timeSaved: "Quick forward action"
  },
  {
    id: "sc-edit-11",
    keys: ["Ctrl", "X"],
    title: "Cut (Move Data)",
    ribbonClass: "Data Entry & Editing",
    description: "Cuts the selected cells and prepares them for pasting to a new location, removing them from the original.",
    teacherExplanation: "Data ek jagah se doosri jagah move karna ho toh Ctrl + X se cut karein, fir destination par Ctrl + V se paste karein.",
    timeSaved: "Quick data relocation"
  },
  {
    id: "sc-edit-12",
    keys: ["Ctrl", "C"],
    title: "Copy Selected Cells",
    ribbonClass: "Data Entry & Editing",
    description: "Copies the selected cells to clipboard (with marching ants/dashed border animation).",
    teacherExplanation: "Data ya formula copy karna ho toh Ctrl + C dabayein. Cell ke around dashed marching border dikhega.",
    timeSaved: "Essential copy action"
  },
  {
    id: "sc-edit-13",
    keys: ["Ctrl", "V"],
    title: "Paste Copied / Cut Data",
    ribbonClass: "Data Entry & Editing",
    description: "Pastes the clipboard contents to the active cell location.",
    teacherExplanation: "Ctrl + C ya Ctrl + X ke baad destination cell pe cursor rakh kar Ctrl + V dabayein.",
    timeSaved: "Essential paste action"
  },
  {
    id: "sc-edit-14",
    keys: ["Ctrl", "Alt", "V"],
    title: "Paste Special Dialog Box",
    ribbonClass: "Data Entry & Editing",
    description: "Opens Paste Special with options to paste only Values, Formats, Formulas, Transpose, Operations, etc.",
    teacherExplanation: "Formula wala cell copy karne ke baad sirf value paste karni ho (formula nahi), Ctrl + Alt + V dabayein, fir V dabayein (Values only). Yeh accountants ka sabse useful shortcut hai!",
    timeSaved: "Saves formula paste errors"
  },
  {
    id: "sc-edit-15",
    keys: ["Ctrl", "-"],
    title: "Delete Selected Row / Column / Cells",
    ribbonClass: "Data Entry & Editing",
    description: "Opens delete dialog to remove selected rows, columns, or shift cells up/left.",
    teacherExplanation: "Row ya column delete karna ho, pehle Shift+Space (row) ya Ctrl+Space (column) se select karein, fir Ctrl + - (minus) dabayein. Row/column turant delete ho jati hai.",
    timeSaved: "Fastest row/column deletion"
  },
  {
    id: "sc-edit-16",
    keys: ["Delete"],
    title: "Clear Cell Content (Keep Formatting)",
    ribbonClass: "Data Entry & Editing",
    description: "Erases the value or formula from selected cells but keeps all number formats, colors, and borders.",
    teacherExplanation: "Cell ka content delete karna ho par formatting (color, border) rakhni ho, toh Delete key dabayein. Backspace bhi same kaam karta hai active cell ke liye.",
    timeSaved: "Safe content clearing"
  },
  {
    id: "sc-edit-17",
    keys: ["Ctrl", "Shift", "V"],
    title: "Paste Without Formatting (Values Only — Excel 365)",
    ribbonClass: "Data Entry & Editing",
    description: "In Excel 365, pastes only values without any source formatting. Quick alternative to Paste Special > Values.",
    teacherExplanation: "Excel 365 me ek naya shortcut aaya hai — Ctrl + Shift + V se seedha values only paste ho jata hai bina Paste Special dialog khole. Super fast!",
    timeSaved: "Fastest paste values action"
  },
  {
    id: "sc-edit-18",
    keys: ["Tab"],
    title: "Move Right to Next Cell (Data Entry Mode)",
    ribbonClass: "Data Entry & Editing",
    description: "During data entry, Tab moves one cell to the right. After pressing Enter, cursor returns to the starting column.",
    teacherExplanation: "Row me data enter karte waqt Tab se aage badhte raho. Jab row ka data ho jaye, Enter dabao. Cursor automatically next row ke starting column par aa jayega.",
    timeSaved: "Efficient row-by-row data entry"
  },
  {
    id: "sc-edit-19",
    keys: ["Ctrl", "Enter"],
    title: "Fill Same Value in All Selected Cells",
    ribbonClass: "Data Entry & Editing",
    description: "When multiple cells are selected, Ctrl+Enter fills them all with the same value or formula simultaneously.",
    teacherExplanation: "50 cells me ek hi value fill karni ho, pehle sab cells select karein, value ya formula type karein, aur Ctrl + Enter dabayein. Sab me ek saath fill ho jayega!",
    timeSaved: "Fills 50 cells in 1 step"
  },
  {
    id: "sc-edit-20",
    keys: ["Escape"],
    title: "Cancel / Exit Cell Edit Mode",
    ribbonClass: "Data Entry & Editing",
    description: "Cancels any incomplete data entry or formula editing and restores the cell to its previous value.",
    teacherExplanation: "Cell edit kar rahe ho aur pehle wali value wapas chahiye? Escape dabao. Formula likha par save nahi karna? Escape dabao.",
    timeSaved: "Safe cancel without errors"
  },
  {
    id: "sc-edit-21",
    keys: ["Ctrl", "H"],
    title: "Find & Replace Dialog",
    ribbonClass: "Data Entry & Editing",
    description: "Opens Find & Replace to search for text/values and replace them with something else across the worksheet.",
    teacherExplanation: "Poori sheet me ABC Company ka naam badal kar XYZ Company karna ho, toh Ctrl + H dabayein, purana naam aur naya naam type karein, Replace All dabayein. Ek second me poori sheet update!",
    timeSaved: "Saves hours of manual text replacement"
  },
  {
    id: "sc-edit-22",
    keys: ["Ctrl", "F"],
    title: "Find Dialog (Search in Sheet)",
    ribbonClass: "Data Entry & Editing",
    description: "Opens the Find toolbar to search for specific text, numbers, or formulas in the worksheet.",
    teacherExplanation: "10,000 rows me se kisi specific employee ya invoice number ko dhoondna ho, Ctrl + F dabayein aur type karein.",
    timeSaved: "Instant search in any dataset"
  },

  // ==========================================
  // 9. GENERAL & FILE MANAGEMENT
  // ==========================================
  {
    id: "sc-gen-1",
    keys: ["F12"],
    title: "Save As Dialog Box Directly",
    ribbonClass: "General & File",
    description: "Opens the Save As dialog directly to rename or save the workbook as a new copy or PDF.",
    teacherExplanation: "File > Save As karne ke bajaye seedha keyboard se F12 dabayein. Direct file save dialogue box khul jayega.",
    timeSaved: "Saves 5-10 seconds per save"
  },
  {
    id: "sc-gen-2",
    keys: ["Ctrl", "S"],
    title: "Save Current File",
    ribbonClass: "General & File",
    description: "Saves the workbook with its current filename. If never saved, opens the Save As dialog.",
    teacherExplanation: "Har 5-10 minute me Ctrl + S dabane ki habit banao. Ek baar current cut ho gayi ya Excel crash ho gaya toh ghante bhar ka kaam waste ho jata hai!",
    timeSaved: "Prevents data loss — use FREQUENTLY!"
  },
  {
    id: "sc-gen-3",
    keys: ["Ctrl", "W"],
    title: "Close Current Workbook",
    ribbonClass: "General & File",
    description: "Closes the active workbook without closing the entire Excel application.",
    teacherExplanation: "Excel ko band kiye bina sirf current sheet/file close karni ho toh Ctrl + W dabayein. Agar save nahi kiya hoga toh Excel save karne ka prompt dega.",
    timeSaved: "Clean workbook management"
  },
  {
    id: "sc-gen-4",
    keys: ["Ctrl", "N"],
    title: "Create Brand New Blank Workbook",
    ribbonClass: "General & File",
    description: "Opens a fresh, empty Excel workbook immediately.",
    teacherExplanation: "Kisi nayi company ya calculation ke liye fresh Excel file kholni ho toh Ctrl + N dabayein. Pura naya blank sheet khul jayega.",
    timeSaved: "Instant blank workbook"
  },
  {
    id: "sc-gen-5",
    keys: ["Ctrl", "O"],
    title: "Open Existing Workbook",
    ribbonClass: "General & File",
    description: "Opens the Open file dialog to browse for and open an existing Excel file.",
    teacherExplanation: "Purani file kholne ke liye Ctrl + O dabayein aur browse karein.",
    timeSaved: "Quick file open"
  },
  {
    id: "sc-gen-6",
    keys: ["Alt", "F4"],
    title: "Close Excel Application Completely",
    ribbonClass: "General & File",
    description: "Closes the entire Excel application (with save prompt if unsaved changes exist).",
    teacherExplanation: "Poora Excel band karna ho toh Alt + F4 dabayein. Unsaved changes hone par Excel save karne ka prompt dega.",
    timeSaved: "Quick Excel exit"
  },
  {
    id: "sc-gen-7",
    keys: ["Ctrl", "F4"],
    title: "Close Only Current Workbook Window",
    ribbonClass: "General & File",
    description: "Closes only the current workbook without closing Excel itself.",
    teacherExplanation: "Ctrl + W ki tarah kaam karta hai — sirf current file close hoti hai, Excel application open rehti hai.",
    timeSaved: "Targeted window close"
  },
  {
    id: "sc-gen-8",
    keys: ["F1"],
    title: "Open Excel Help Panel",
    ribbonClass: "General & File",
    description: "Opens the Excel Help and Search panel to find documentation on any feature.",
    teacherExplanation: "Koi feature samajh nahi aaya? F1 dabao aur description box me type karo. Excel ka built-in help system open ho jayega.",
    timeSaved: "Instant help access"
  },
  {
    id: "sc-gen-9",
    keys: ["Alt", "F8"],
    title: "Open Macro Dialog Box",
    ribbonClass: "General & File",
    description: "Opens the Macro list dialog where you can run, edit, create, or delete recorded macros.",
    teacherExplanation: "Workbook me saved macros run karne ke liye Alt + F8 dabayein, macro select karein aur Run dabayein.",
    timeSaved: "Fast macro access"
  },
  {
    id: "sc-gen-10",
    keys: ["Alt", "F11"],
    title: "Open VBA Editor (Visual Basic Editor)",
    ribbonClass: "General & File",
    description: "Opens the Visual Basic for Applications code editor to write, view, or edit VBA macro code.",
    teacherExplanation: "VBA macro likhna ho ya existing code dekhna ho toh Alt + F11 dabayein. Developer ka sabse important tool!",
    timeSaved: "Direct VBA editor access"
  },
  {
    id: "sc-gen-11",
    keys: ["Ctrl", "Z"],
    title: "Undo Last Change",
    ribbonClass: "General & File",
    description: "Reverses the last action performed.",
    teacherExplanation: "Kuch galat ho gaya? Ctrl + Z dabao — ek baar se lekar 100+ baar tak undo kar sakte ho.",
    timeSaved: "Essential safety shortcut"
  },

  // ==========================================
  // 10. ROWS & COLUMNS MANAGEMENT
  // ==========================================
  {
    id: "sc-row-1",
    keys: ["Ctrl", "Shift", "+"],
    title: "Insert Row / Column / Cell",
    ribbonClass: "Rows & Columns",
    description: "Inserts a new blank row above or column to the left of the selected row/column.",
    teacherExplanation: "Puri row select karo (Shift+Space) ya column (Ctrl+Space), phir Ctrl + Shift + + dabao. Naya blank row/column turant add ho jayega.",
    timeSaved: "Saves right-click menu steps"
  },
  {
    id: "sc-row-2",
    keys: ["Ctrl", "-"],
    title: "Delete Row / Column / Cell",
    ribbonClass: "Rows & Columns",
    description: "Deletes the selected row(s) or column(s) completely from the sheet.",
    teacherExplanation: "Row delete karna ho: Shift+Space se row select karo, phir Ctrl + - (minus) dabao. Column delete karna ho: Ctrl+Space se column select karo, phir Ctrl + - dabao.",
    timeSaved: "Fastest delete action"
  },
  {
    id: "sc-row-3",
    keys: ["Alt", "O", "R", "H"],
    title: "Set Row Height (Custom Height Dialog)",
    ribbonClass: "Rows & Columns",
    description: "Opens the Row Height dialog to set an exact pixel height for selected rows.",
    teacherExplanation: "Rows ki height exact 20 ya 25 points set karni ho toh Alt + O + R + H dabayein.",
    timeSaved: "Precise row height control"
  },
  {
    id: "sc-row-4",
    keys: ["Alt", "O", "C", "W"],
    title: "Set Column Width (Custom Width Dialog)",
    ribbonClass: "Rows & Columns",
    description: "Opens Column Width dialog to type an exact width for selected columns.",
    teacherExplanation: "Columns ki width ek standard size par set karni ho toh Alt + O + C + W dabayein.",
    timeSaved: "Uniform column width setting"
  },
  {
    id: "sc-row-5",
    keys: ["Alt", "H", "O", "I"],
    title: "AutoFit Column Width",
    ribbonClass: "Rows & Columns",
    description: "Automatically resizes the selected columns to fit the widest content perfectly.",
    teacherExplanation: "Data ke hisaab se automatically column width adjust karni ho, columns select karke Alt + H + O + I dabayein. Sabhi columns perfect fit ho jayenge.",
    timeSaved: "Auto-adjusts all columns instantly"
  },
  {
    id: "sc-row-6",
    keys: ["Alt", "H", "O", "A"],
    title: "AutoFit Row Height",
    ribbonClass: "Rows & Columns",
    description: "Automatically adjusts row height to fit the tallest content (e.g. after wrapping text).",
    teacherExplanation: "Text wrap karne ke baad rows ki height adjust nahi hoti. Rows select karke Alt + H + O + A dabayein. Sab rows perfect height le lengi.",
    timeSaved: "Perfect row height in one step"
  },
  {
    id: "sc-row-7",
    keys: ["Alt", "H", "O", "H"],
    title: "Hide Selected Rows",
    ribbonClass: "Rows & Columns",
    description: "Hides the selected rows — they remain in the data but are not visible or printed.",
    teacherExplanation: "Kuch rows temporarily chhupani ho (salary details boss ke samne na dikhein), Alt + H + O + H se hide karein.",
    timeSaved: "Quick row hiding"
  },
  {
    id: "sc-row-8",
    keys: ["Alt", "H", "O", "O"],
    title: "Unhide Rows",
    ribbonClass: "Rows & Columns",
    description: "Shows previously hidden rows by selecting the rows around the hidden area and using this shortcut.",
    teacherExplanation: "Hidden rows wapas dikhane ke liye, hidden rows ke upar aur niche ki rows select karein, phir Alt + H + O + O dabayein.",
    timeSaved: "Quick row unhiding"
  },
  {
    id: "sc-row-9",
    keys: ["Ctrl", "9"],
    title: "Hide Selected Row(s)",
    ribbonClass: "Rows & Columns",
    description: "Faster alternative to hide the currently selected row(s).",
    teacherExplanation: "Row select karke Ctrl + 9 dabayein — row instantly hide ho jayegi.",
    timeSaved: "Fastest hide shortcut"
  },
  {
    id: "sc-row-10",
    keys: ["Ctrl", "Shift", "9"],
    title: "Unhide Selected Row(s)",
    ribbonClass: "Rows & Columns",
    description: "Shows hidden rows within the selected range.",
    teacherExplanation: "Hidden rows ke aas-paas ki rows select karke Ctrl + Shift + 9 dabayein.",
    timeSaved: "Fastest unhide shortcut"
  },
  {
    id: "sc-row-11",
    keys: ["Ctrl", "0"],
    title: "Hide Selected Column(s)",
    ribbonClass: "Rows & Columns",
    description: "Hides the currently selected column(s) from view.",
    teacherExplanation: "Column select karke Ctrl + 0 (zero) dabayein — column instantly hide ho jayega.",
    timeSaved: "Fast column hiding"
  },
  {
    id: "sc-row-12",
    keys: ["Ctrl", "Shift", "0"],
    title: "Unhide Selected Column(s)",
    ribbonClass: "Rows & Columns",
    description: "Shows hidden columns within the selected range. (May require enabling in some Windows settings.)",
    teacherExplanation: "Hidden columns ke around wale columns select karke Ctrl + Shift + 0 dabayein. Note: Kuch Windows me ye shortcut conflict karta hai, Alt+H+O+U use karein.",
    timeSaved: "Fast column unhiding"
  },

  // ==========================================
  // 11. WORKSHEET MANAGEMENT
  // ==========================================
  {
    id: "sc-sheet-1",
    keys: ["Shift", "F11"],
    title: "Insert New Worksheet",
    ribbonClass: "Worksheet",
    description: "Inserts a brand new blank worksheet immediately to the left of the current sheet.",
    teacherExplanation: "Naya sheet insert karne ke liye + button click karne ke bajaye Shift + F11 dabayein. Turant naya blank sheet aa jayega.",
    timeSaved: "Instant new sheet"
  },
  {
    id: "sc-sheet-2",
    keys: ["Ctrl", "PageDown"],
    title: "Move to Next Sheet",
    ribbonClass: "Worksheet",
    description: "Navigates to the next sheet tab (right direction) in the workbook.",
    teacherExplanation: "Agla sheet dekhne ke liye Ctrl + PageDown dabayein.",
    timeSaved: "Fast sheet navigation"
  },
  {
    id: "sc-sheet-3",
    keys: ["Ctrl", "PageUp"],
    title: "Move to Previous Sheet",
    ribbonClass: "Worksheet",
    description: "Navigates to the previous sheet tab (left direction) in the workbook.",
    teacherExplanation: "Pichhla sheet dekhne ke liye Ctrl + PageUp dabayein.",
    timeSaved: "Fast sheet navigation"
  },
  {
    id: "sc-sheet-4",
    keys: ["Alt", "E", "L"],
    title: "Delete Current Sheet",
    ribbonClass: "Worksheet",
    description: "Deletes the currently active worksheet. A confirmation dialog appears if the sheet has data.",
    teacherExplanation: "Poora sheet delete karna ho toh Alt + E + L dabayein. Confirmation aayegi, OK dabao.",
    timeSaved: "Quick sheet deletion"
  },
  {
    id: "sc-sheet-5",
    keys: ["Alt", "E", "M"],
    title: "Move or Copy Sheet",
    ribbonClass: "Worksheet",
    description: "Opens the Move or Copy dialog to move or create a copy of the current sheet to another location.",
    teacherExplanation: "Sheet ki copy banana ho ya doosri position par move karna ho toh Alt + E + M dabayein. 'Create a copy' checkbox se copy banta hai.",
    timeSaved: "Easy sheet copy/move"
  },

  // ==========================================
  // 12. RIBBON & FUNCTION KEYS
  // ==========================================
  {
    id: "sc-ribbon-1",
    keys: ["Alt"],
    title: "Show Ribbon Keyboard Access Keys",
    ribbonClass: "Ribbon Navigation",
    description: "Pressing Alt alone reveals letter badges on all ribbon tabs and buttons for full keyboard navigation.",
    teacherExplanation: "Sirf Alt dabayein aur chodein. Ribbon par letters dikhenge. Jaise H dabao Home Tab, A dabao Data Tab, N dabao Insert Tab. Bina mouse ke pura Excel chalao!",
    timeSaved: "Complete mouse-free Excel use"
  },
  {
    id: "sc-ribbon-2",
    keys: ["Ctrl", "F1"],
    title: "Toggle Ribbon Collapse / Expand",
    ribbonClass: "Ribbon Navigation",
    description: "Collapses or expands the ribbon to maximize the spreadsheet viewing area.",
    teacherExplanation: "Laptop par screen space kam ho toh Ctrl + F1 se ribbon collapse ho jata hai — sirf tab names dikhte hain. Dobara dabane par ribbon wapas aata hai.",
    timeSaved: "More screen space for data"
  },
  {
    id: "sc-ribbon-3",
    keys: ["F10"],
    title: "Activate Ribbon Key Tips (Same as Alt)",
    ribbonClass: "Ribbon Navigation",
    description: "Alternative to Alt — activates key tip badges on the ribbon for keyboard-only navigation.",
    teacherExplanation: "Alt key ki jagah F10 bhi ribbon key tips activate karta hai.",
    timeSaved: "Alternative ribbon access"
  },

  // ==========================================
  // 13. CONDITIONAL FORMATTING & SPECIAL
  // ==========================================
  {
    id: "sc-cf-1",
    keys: ["Alt", "H", "L"],
    title: "Open Conditional Formatting Menu",
    ribbonClass: "Conditional Formatting",
    description: "Opens the Conditional Formatting submenu to highlight cells, create data bars, color scales, and icon sets.",
    teacherExplanation: "Automatically cells ko color karna ho based on values (jaise red for negative, green for positive), Alt + H + L se Conditional Formatting menu khulta hai.",
    timeSaved: "Smart visual data formatting"
  },
  {
    id: "sc-cf-2",
    keys: ["Alt", "H", "L", "H", "G"],
    title: "Highlight Cells Greater Than (Quick Rule)",
    ribbonClass: "Conditional Formatting",
    description: "Creates a rule to highlight all cells in the selection that are greater than a specified value.",
    teacherExplanation: "Cells select karke Alt + H + L + H + G dabayein — ek value dalo aur color choose karo. Jitni cells us value se badi hongi, wo colored ho jayengi!",
    timeSaved: "Visual threshold highlighting"
  },
  {
    id: "sc-cf-3",
    keys: ["Alt", "H", "L", "C"],
    title: "Clear Conditional Formatting from Selection",
    ribbonClass: "Conditional Formatting",
    description: "Removes all conditional formatting rules from the selected cells.",
    teacherExplanation: "Galat conditional formatting lag gayi ya hatani ho toh cells select karke Alt + H + L + C dabayein.",
    timeSaved: "Quick formatting clear"
  },

  // ==========================================
  // 14. NAME BOX & FORMULA BAR
  // ==========================================
  {
    id: "sc-nb-1",
    keys: ["Ctrl", "Shift", "F3"],
    title: "Create Names from Row/Column Labels",
    ribbonClass: "Name & Formula Bar",
    description: "Opens the 'Create Names from Selection' dialog to auto-name ranges using surrounding row/column headers.",
    teacherExplanation: "Table me column headers se automatically named ranges banana ho toh headers aur data dono select karke Ctrl + Shift + F3 dabayein.",
    timeSaved: "Instant named range creation"
  },
  {
    id: "sc-nb-2",
    keys: ["Ctrl", "F3"],
    title: "Open Name Manager",
    ribbonClass: "Name & Formula Bar",
    description: "Opens the Name Manager to view, edit, create, and delete named ranges in the workbook.",
    teacherExplanation: "Workbook me saari named ranges dekhni ho, edit karni ho ya delete karni ho toh Ctrl + F3 dabayein.",
    timeSaved: "Named range management"
  },
  {
    id: "sc-nb-3",
    keys: ["F3"],
    title: "Paste Named Range Into Formula",
    ribbonClass: "Name & Formula Bar",
    description: "While typing a formula, F3 opens a list of all named ranges so you can click to insert them.",
    teacherExplanation: "Formula likhte waqt named range ka naam yaad nahi aa raha? F3 dabao — saare names ki list aayegi. Select karo aur Enter dabao!",
    timeSaved: "Named range lookup in formulas"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXCEL_SHORTCUTS };
}
