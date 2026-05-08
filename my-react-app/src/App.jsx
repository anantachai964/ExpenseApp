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

function App() {
  // เวลาปัจจุบัน
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  // Dialog ของ ตั้งค่า ใน Budget
  const [modalOpen, setModalOpen] = useState(false);

  // ค่าสรุปประจำเดือน
  const summary = getSummaryMonthly(year, month);
  console.log(summary);

  // Budget
  const budgetStatus = getBudgetStatus();
  console.log(budgetStatus);

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
      />
      <AddForm />
      <Current />
      <ListItem />
    </div>
  );
}

export default App;
