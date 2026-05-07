import { budget, transactions } from "../mock/db.js";

export function getAllBudget() {
  return { ...budget };
}

export function updateBudget(amount) {
  budget.amount = this.amount;
  budget.updated_at = new Date().toISOString();
  return { ...budget };
}

export function getBudgetStatus() {
  const today = new Date().toISOString();
  const spent = transactions;
  spent
    .filter((tx) => {
      return tx.type === "expense" && new Date(tx.date).toISOString() === today;
    })
    .reduce((sum, tx) => sum + tx.amount, 0);

  const remaining = budget.amount - spent;
  const pct = budget.amount ? (spent / budget.amount) * 100 : 0;
  const status = pct >= 100 ? "over" : pct >= 70 ? "war" : "0k";

  return { budget: budget.amount, spent, remaining, pct, status };
}
