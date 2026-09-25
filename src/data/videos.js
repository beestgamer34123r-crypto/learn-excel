// Excel Mastery Hub - Video Masterclasses & AI Concept Visualizers
// Curated high-yield video tutorials including Accounts Experts lessons & visual explainers

const EXCEL_VIDEOS = [
  {
    id: "vid-1",
    title: "Excel Complete Beginner to Pro Accounting Overview",
    creator: "Accounts Experts",
    category: "Office Accounting",
    youtubeId: "5Z2PTHdHUXY",
    duration: "25 mins",
    level: "Beginner to Intermediate",
    badge: "👨‍🏫 Accounts Expert Special",
    thumbnail: "https://img.youtube.com/vi/5Z2PTHdHUXY/hqdefault.jpg",
    description: "Complete practical overview of daily accounting sheet work, invoice registers, salary calculations, and office workflow explained in simple Hindi.",
    teacherNote: "Dosto! Is video me Accounts Experts ne live office working style me Excel ka overview diya hai. Real bills, vouchers aur statements kaise bante hain, ise zaroor dekhein.",
    formulasCovered: ["=SUM()", "=AVERAGE()", "=IF()", "=ROUND()"],
    shortcutsCovered: ["Alt + =", "Ctrl + 1", "Ctrl + D", "Alt + H + B + A"],
    keyTakeaways: [
      "Real accounting billing sheet structure",
      "How to avoid manual calculation mistakes",
      "Using AutoSum and percentage formatting for GST"
    ]
  },
  {
    id: "vid-2",
    title: "AI Visual Explainer: How VLOOKUP Actually Works Inside Cells",
    creator: "ExcelMaster AI Lab",
    category: "AI Concept Visualizer",
    youtubeId: "d3BYVQ6xIE4",
    duration: "12 mins",
    level: "Intermediate",
    badge: "🤖 AI Animated Guide",
    thumbnail: "https://img.youtube.com/vi/d3BYVQ6xIE4/hqdefault.jpg",
    description: "Animated step-by-step visual demonstration of how Excel scans row by row, finds matching IDs, and fetches return columns without confusion.",
    teacherNote: "VLOOKUP ka logic samajhne ke liye ye visual guide best hai. Dekho kaise Excel cursor table ke pehle column me scan karta hai aur exact match (0) par rukta hai.",
    formulasCovered: ["=VLOOKUP(lookup, table, col, 0)", "=IFERROR(VLOOKUP(...), \"Not Found\")"],
    shortcutsCovered: ["F4 (Lock Reference)", "Shift + F3 (Function Wizard)"],
    keyTakeaways: [
      "Why the 4th argument 0 (False) is mandatory for exact match",
      "How to lock table array with $ sign using F4 key",
      "Fixing #N/A errors using IFERROR"
    ]
  },
  {
    id: "vid-3",
    title: "Top 25 Excel Keyboard Shortcuts You Must Use Daily",
    creator: "Accounts Experts & Pro Tips",
    category: "Shortcuts Mastery",
    youtubeId: "NM_7k6zHrq0",
    duration: "18 mins",
    level: "All Levels",
    badge: "⚡ Speed Booster",
    thumbnail: "https://img.youtube.com/vi/NM_7k6zHrq0/hqdefault.jpg",
    description: "Practical demonstration of keyboard shortcuts that save 2+ hours daily in offices — without touching the mouse!",
    teacherNote: "Mouse ko chhod kar keyboard master banna hai toh ye 25 shortcuts apke ungliyon par hone chahiye. Flash Fill, AutoFilter, Freeze Panes sab live dikhaya gaya hai.",
    formulasCovered: ["=SUM() with Alt + =", "=TODAY() with Ctrl + ;"],
    shortcutsCovered: ["Ctrl + Shift + L", "Alt + =", "Ctrl + E", "Ctrl + 1", "Alt + W + F + F", "F4"],
    keyTakeaways: [
      "Navigation with Ctrl + Arrow keys instead of scroll wheel",
      "Selecting entire columns and rows with Ctrl/Shift + Space",
      "Flash Fill magic (Ctrl + E) to split names without formulas"
    ]
  },
  {
    id: "vid-4",
    title: "Employee Salary Sheet & Payroll with PF (12%) and ESI (0.75%)",
    creator: "Accounts Experts",
    category: "Office Accounting",
    youtubeId: "k1xGDe0_x08",
    duration: "22 mins",
    level: "Intermediate",
    badge: "💼 Office Payroll",
    thumbnail: "https://img.youtube.com/vi/k1xGDe0_x08/hqdefault.jpg",
    description: "Build an official corporate salary slip and payroll register from scratch with Basic, HRA, Conveyance, PF deductions, and Net Payable calculations.",
    teacherNote: "Har private company aur accountant ko monthly salary register banana hota hai. Is video me step-by-step statutory deductions calculate karna sikhaya gaya hai.",
    formulasCovered: ["=Basic*0.4 (HRA)", "=Basic*0.12 (PF)", "=Gross - Total Deductions (Net)"],
    shortcutsCovered: ["Ctrl + D (Fill Down)", "Alt + H + M + C (Merge Header)", "Ctrl + Shift + $ (Currency)"],
    keyTakeaways: [
      "Creating professional header and employee columns",
      "Locking tax rate cells with $ sign so formula drags safely",
      "Calculating Net Salary = Gross Pay - (PF + ESIC + TDS)"
    ]
  },
  {
    id: "vid-5",
    title: "AI Visual Guide: Cell Locking ($A$1 vs A$1 vs $A1) Explained",
    creator: "ExcelMaster AI Lab",
    category: "AI Concept Visualizer",
    youtubeId: "Vl0r_vYdI38",
    duration: "10 mins",
    level: "Beginner",
    badge: "🤖 AI Visual Animated",
    thumbnail: "https://img.youtube.com/vi/Vl0r_vYdI38/hqdefault.jpg",
    description: "Crystal clear visual animation showing what happens when you drag formulas across rows and columns with and without the dollar ($) sign.",
    teacherNote: "Ye concept agar samajh aa gaya toh aapke 80% formula errors hamesha ke liye khatam ho jayenge! F4 button ka kamaal dekhein.",
    formulasCovered: ["=$B$1*C2", "=B$1*C2", "=$B1*C2"],
    shortcutsCovered: ["F4 (Press 1x, 2x, 3x, 4x)"],
    keyTakeaways: [
      "Why dragging without $ breaks multiplication and GST tables",
      "Absolute ($A$1), Row lock (A$1), Column lock ($A1)",
      "How F4 toggles between all 4 modes in 1 click"
    ]
  },
  {
    id: "vid-6",
    title: "Full GST Billing Invoice with Automatic CGST & SGST Split",
    creator: "Accounts Experts",
    category: "Office Accounting",
    youtubeId: "770Zp5GqCBo",
    duration: "28 mins",
    level: "Intermediate",
    badge: "📜 GST & Taxation",
    thumbnail: "https://img.youtube.com/vi/770Zp5GqCBo/hqdefault.jpg",
    description: "Design a professional GST Tax Invoice template with auto-calculating CGST 9%, SGST 9%, or IGST 18% based on Buyer State Code.",
    teacherNote: "Agar buyer same state ka hai toh CGST + SGST lagta hai, doosre state ka ho toh IGST! Is video me IF formula se ye automatic switch banana seekhein.",
    formulasCovered: ["=IF(StateCode=\"27\", Tax/2, 0)", "=ROUND(Subtotal*18%, 2)"],
    shortcutsCovered: ["Ctrl + P (Print Preview)", "Alt + P + R + S (Set Print Area)", "Ctrl + 1 (Borders)"],
    keyTakeaways: [
      "Tax Invoice layout standards under GST law",
      "Auto-detecting Intra-state vs Inter-state supply with IF()",
      "Formatting invoice for crisp 1-page A4 printing"
    ]
  },
  {
    id: "vid-7",
    title: "XLOOKUP vs INDEX & MATCH: The Modern Data Lookup Battle",
    creator: "ExcelMaster AI Lab",
    category: "Formulas & Functions",
    youtubeId: "bO3WbU8nKjY",
    duration: "16 mins",
    level: "Advanced",
    badge: "🚀 Modern Excel 365",
    thumbnail: "https://img.youtube.com/vi/bO3WbU8nKjY/hqdefault.jpg",
    description: "Comparison of traditional VLOOKUP limitations and why XLOOKUP + INDEX/MATCH are superior for looking left, multi-column returns, and performance.",
    teacherNote: "Excel 365 me VLOOKUP purana ho chuka hai! XLOOKUP left bhi dhoondta hai, right bhi dhoondta hai aur bina IFERROR ke missing values handle karta hai.",
    formulasCovered: ["=XLOOKUP(A2, B:B, C:C, \"Not Found\")", "=INDEX(C:C, MATCH(A2, B:B, 0))"],
    shortcutsCovered: ["Ctrl + Space", "Shift + Space", "Ctrl + Shift + Down Arrow"],
    keyTakeaways: [
      "Looking up values from right to left effortlessly",
      "Returning multiple columns with a single dynamic array formula",
      "INDEX & MATCH compatibility for older Excel versions"
    ]
  },
  {
    id: "vid-8",
    title: "Data Cleaning Masterclass: Fix Broken Dates, Spaces & Duplicates",
    creator: "Accounts Experts",
    category: "Data Cleaning & Fixing",
    youtubeId: "rwbho0CgEAE",
    duration: "20 mins",
    level: "Intermediate",
    badge: "🧹 Data Cleaner",
    thumbnail: "https://img.youtube.com/vi/rwbho0CgEAE/hqdefault.jpg",
    description: "Learn how to instantly clean messy ERP export data, remove ghost spaces that break VLOOKUP, split full names, and deduplicate safely.",
    teacherNote: "Jab ERP ya Tally se Excel export karte hain, data me bohot galti hoti hai. TRIM, CLEAN, Text to Columns aur Remove Duplicates se 5 minute me sheet clean karein.",
    formulasCovered: ["=TRIM(A2)", "=PROPER(A2)", "=VALUE(A2)", "=SUBSTITUTE(A2, \"-\", \"/\")"],
    shortcutsCovered: ["Alt + A + E (Text to Columns)", "Alt + A + M (Remove Duplicates)", "Ctrl + H (Find & Replace)"],
    keyTakeaways: [
      "Why TRIM() is the secret cure for #N/A lookup errors",
      "Converting text numbers (green triangle) to real calculations",
      "Using Flash Fill (Ctrl + E) for rapid name & phone formatting"
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXCEL_VIDEOS };
}
