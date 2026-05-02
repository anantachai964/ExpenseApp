import "./App.css";
import Header from "./Components/Header";
import DailyBudgetWidget from "./Components/DailyBudgetWidget"; 
import AddForm from "./Components/AddForm";

function App() {
  return (
    <div className="mx-auto min-h-screen overflow-x-hidden bg-indigo-50 font-sarabun">
      <Header />
      <DailyBudgetWidget />
      <AddForm />
    </div>
  );
}

export default App;
