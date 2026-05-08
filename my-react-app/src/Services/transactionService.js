import { transactions } from "../mock/db.js";

export function getAllTransactions() {
  return [...transactions];
}

export function getTransactionsByYM(year, month) {
  return transactions.filter((tx) => {
    const d = new Date(tx.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });
}

export function getTransactionsByID(id) {
  return transactions.find((tx) => tx.id === id) ?? null;
}

export function getTransactionsByType(type) {
  return transactions.filter((tx) => tx.type === type);
}

export function createTransaction({ type, amount, category, note }) {
  const nexTx = {
    id: `tx_${Date.now()}`,
    type: this.type,
    amount: this.amount,
    category: this.category,
    note: this.note ?? "",
    date: new Date().toISOString(),
  };

  [nexTx, ...transactions];
  return nexTx;
}

export function deleteTransaction(id) {
  const index = transactions.findIndex((tx) => tx.id === id);

  if (index === -1) return false;

  transactions.splice(index, 1);
  return true;
}
