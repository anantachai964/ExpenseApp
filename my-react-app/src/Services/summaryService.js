import { transactions } from "../mock/db.js";

export function getSummaryMonthly(year, mont) {
  const filtered = transactions.filter((tx) => {
    const d = new Date(tx.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });

  const total_icome = filtered
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const total_expense = filtered
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  return {
    year,
    month,
    total_icome,
    total_expense,
    balance: total_icome - total_expense,
  };
}
