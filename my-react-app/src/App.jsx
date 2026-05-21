import "./App.css";
import Header from "./Components/Header";
import DailyBudgetWidget from "./Components/DailyBudgetWidget";
import AddForm from "./Components/AddForm";
import Current from "./Components/Current";
import ListItem from "./Components/ListItem";
import { useState } from "react";
import { getSummaryMonthly } from "./Services/summaryService.js";
import { getBudgetStatus, updateBudget } from "./Services/budgetService.js";
import BudgetModal from "./Components/BudgetModal.jsx";

// ข้อมูลหมวดหมู่
import { categories } from "./mock/db.js";

function App() {
  // ข้อมูล Type รายรับ รายจ่าย
  const [type, setType] = useState("expense");
  // console.log("type", type);

  // เวลาปัจจุบัน
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  // Dialog ของ ตั้งค่า ใน Budget
  const [modalOpen, setModalOpen] = useState(false);

  // ค่าสรุปประจำเดือน
  const summary = getSummaryMonthly(year, month);
  // console.log(summary);

  // Budget
  const budgetStatus = getBudgetStatus();
  // console.log(budgetStatus);

  const handleSaveBudget = (newAmount) => {
    updateBudget(newAmount);
    setModalOpen(false);
  };

  return (
    <div className="mx-auto min-h-screen overflow-x-hidden bg-indigo-50 font-sarabun">
      <Header summary={summary} />
      <DailyBudgetWidget
        budgetStatus={budgetStatus}
        onOpenModal={() => setModalOpen(true)}
        onCloseModal={() => setModalOpen(false)}
      />
      <BudgetModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveBudget}
        budget={budgetStatus.budget}
      />
      <AddForm
        categories={categories}
        changeIncome={() => setType("income")}
        changeExpense={() => setType("expense")}
        type={type}
      />
      <Current />
      <ListItem />
    </div>
  );
}

export default App;
