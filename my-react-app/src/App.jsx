import "./App.css";
import Header from "./Components/Header";
import DailyBudgetWidget from "./Components/DailyBudgetWidget";
import AddForm from "./Components/AddForm";
import Current from "./Components/Current";
import ListItem from "./Components/ListItem";
import { useState } from "react";
import { getSummaryMonthly } from "./Services/summaryService.js";

function App() {
  // เวลาปัจจุบัน
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  // ค่าสรุปประจำเดือน
  const summary = getSummaryMonthly(year, month);
  console.log(summary);

  return (
    <div className="mx-auto min-h-screen overflow-x-hidden bg-indigo-50 font-sarabun">
      <Header summary={summary} />
      <DailyBudgetWidget />
      <AddForm />
      <Current />
      <ListItem />
    </div>
  );
}

export default App;
