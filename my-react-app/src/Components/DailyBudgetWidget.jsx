import React from "react";

function DailyBudgetWidget({ budgetStatus, onOpenModal, onCloseModal }) {
  // สีตาม Status
  const badgeStyle = {
    ok: "text-emerald-600 bg-emerald-100",
    warn: "text-amber-500 bg-amber-200",
    over: "text-red-500 bg-red-100",
  };

  const badgeText = {
    ok: `เหลือ ${budgetStatus.remaining.toLocaleString()}`,
    warn: `เหลือ ${budgetStatus.remaining.toLocaleString()}`,
    over: `เกินงบ ${Math.abs(budgetStatus.remaining).toLocaleString()}`,
  };

  return (
    <section className="bg-white rounded-3xl mx-4 mt-4 border-indigo-100 shadow-sm p-6 ">
      {/* งบ / การตั้งค่า */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-slate-600 font-bold ">งบที่ใช้ได้วันนี้</p>
        <button
          onClick={onOpenModal}
          className="text-[10px] text-white font-bold h-7 w-14 bg-green-700 rounded-lg shadow-indigo-200 tracking-widest border-slate-100"
        >
          ตั้งค่า
        </button>
      </div>
      {/* หลอดเงิน */}
      <div className="bg-slate-100 rounded-full h-2.5 mb-4">
        <div className="bg-amber-400 w-[72.5%] rounded-full h-full"></div>
      </div>
      {/* ยอดเงินต่อวัน */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-amber-500 font-bold ">
          ใช้ไป {budgetStatus.spent}
        </p>
        <p className="text-sm text-slate-600 font-bold">
          /{budgetStatus.budget} ต่อวัน
        </p>
      </div>
      {/* เงินเหลือ */}
      <div
        className={`text-sm inline-flex px-2 py-1 rounded-lg shadow-indigo-200 tracking-widest ${badgeStyle[budgetStatus.status]}`}
      >
        <p className="">{badgeText[budgetStatus.status]}</p>
      </div>
    </section>
  );
}

export default DailyBudgetWidget;
