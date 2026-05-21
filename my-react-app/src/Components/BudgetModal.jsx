import React from "react";
import { useState, useEffect } from "react";

function BudgetModal({ isOpen, onClose, onSave, budget }) {
  const [value, setValue] = useState(budget);
  const [err, setErr] = useState("");

  useEffect(() => {
    setValue(budget);
    setErr("");
  }, [isOpen]);

  const handleSave = () => {
    // เช็คค่าว่าง
    if (!value || value === "") {
      setErr("กรุณากรอกจำนวนเงิน");
      return;
    }

    // เช็คเป็นตัวเลขมั้ย
    if (isNaN(Number(value))) {
      setErr("กรุณากรอกตัวเลขเท่านั้น");
      return;
    }

    // เช็คมากกว่า 0
    if (Number(value) <= 0) {
      setErr("จำนวนเงินต้องมากกว่า 0");
      return;
    }

    // ผ่านทุกเงื่อนไข
    setErr("");
    onSave(Number(value));
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black/40 flex items-end justify-center z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white w-full max-w-md rounded-t-3xl p-6 transition-transform duration-500 ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-6" />
        <p className="font-bold text-md text-slate-800 m-4">
          กำหนดงบประมาณต่อวัน
        </p>
        <p className="text-slate-400 text-sm mx-4 mb-4">จำนวนเงิน (บาท</p>
        <input
          type="number"
          value={value ?? ""}
          onChange={(e) => {
            (setValue(e.target.value), setErr(""));
          }}
          placeholder="เช่น 600"
          className={`w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-3 text-lg font-bold text-slate-800 outline-none focus:border-emerald-500 mb-6  transition-colors duration-300 ${err ? "border-red-400" : "border-slate-200 focus:border-emerald-300"}`}
        />

        {err && <p className="text-red-500 text-xs  mb-4">{err}</p>}

        <button
          className={`w-full py-3 rounded-2xl font-bold text-white bg-emerald-500 `}
          onClick={handleSave}
        >
          บันทึก
        </button>
      </div>
    </div>
  );
}

export default BudgetModal;
