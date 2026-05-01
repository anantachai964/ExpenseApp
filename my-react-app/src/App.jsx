import "./App.css";
import Header from "./Components/Header";
import DailyBudgetWidget from "./Components/DailyBudgetWidget"; 

function App() {
  return (
    <div className="max-w-md mx-auto min-h-screen overflow-x-hidden bg-indigo-50 rounded-t-4xl font-sarabun">
      <Header />
      <DailyBudgetWidget />
    </div>
  );
}

export default App;
