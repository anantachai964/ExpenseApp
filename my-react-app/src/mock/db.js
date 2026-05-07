import { BanknoteArrowUp } from "lucide-react";

const now = new Date();
const y = now.getFullYear();
const m = now.getMonth();
const d = now.getDate();

// รายการธุรกรรมเงินเข้า / เงินออก
export let transactions = [
  {
    id: "tx_001",
    type: "income", // "income" | "expense"
    amount: 28000, // number
    category: "salary", // ดูหมวดหมู่
    note: "เงินเดือนเดือนนี้",
    date: new Date(y, m, 1, 9, 0).toISOString(),
  },
  {
    id: "tx_002",
    type: "expense",
    amount: 85,
    category: "food",
    note: "ข้าวผัดกระเพราหมูกรอบ",
    date: new Date(y, m, d, 8, 30).toISOString(),
  },
  {
    id: "tx_003",
    type: "expense",
    amount: 350,
    category: "transport",
    note: "Grab ไปทำงาน",
    date: new Date(y, m, d, 7, 45).toISOString(),
  },
  {
    id: "tx_004",
    type: "expense",
    amount: 220,
    category: "shopping",
    note: "ซื้อของใช้ Lotus's",
    date: new Date(y, m, d - 1, 15, 10).toISOString(),
  },
  {
    id: "tx_005",
    type: "income",
    amount: 3500,
    category: "freelance",
    note: "งานออกแบบ Logo",
    date: new Date(y, m, d - 2, 11, 0).toISOString(),
  },
  {
    id: "tx_006",
    type: "expense",
    amount: 450,
    category: "entertain",
    note: "ดูหนัง + ป๊อปคอร์น",
    date: new Date(y, m, d - 2, 19, 0).toISOString(),
  },
  {
    id: "tx_007",
    type: "expense",
    amount: 1200,
    category: "bill",
    note: "ค่าไฟ + เน็ต",
    date: new Date(y, m, d - 3, 10, 0).toISOString(),
  },
];

// ยอดเงินที่ใช้ได้ต่อวัน
export let budget = {
  id: "budget_001",
  amount: 600,
  updated_at: new Date().toISOString(),
};

// ประเภทของรายรับและรายจ่าย
export const categories = {
  income: [
    { id: "salary", label: "เงินเดือน" },
    { id: "freelance", label: "ฟรีแลนซ์" },
    { id: "invest", label: "การลงทุน" },
    { id: "other_in", label: "อื่นๆ" },
  ],
  expense: [
    { id: "food", label: "อาหาร" },
    { id: "transport", label: "เดินทาง" },
    { id: "shopping", label: "ช้อปปิ้ง" },
    { id: "health", label: "สุขภาพ" },
    { id: "entertain", label: "บันเทิง" },
    { id: "bill", label: "ค่าบิล" },
    { id: "other_ex", label: "อื่นๆ" },
  ],
};
