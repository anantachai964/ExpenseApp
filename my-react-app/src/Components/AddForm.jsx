import React, { useEffect } from "react";
import { useState } from "react";

function AddForm({ categories, changeIncome, changeExpense, type }) {
  const [formData, setFormData] = useState({
    type: type,
    amount: "",
    categories: categories[type][0].id,
    note: "",
  });

  useEffect(() => {
    setFormData({
      type: type,
      amount: "",
      categories: categories[type][0].id,
      note: "",
    });
  }, [type]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const seletedCat =
    categories[type].find((cat) => cat.id === formData.categories) ??
    categories[type][0].id;

  return (
    <div className="bg-white p-6 mx-4 mt-4 border-indigo-100 shadow-sm rounded-3xl">
      {/* เพิ่มรายการ */}
      <div className="">
        <p className="text-sm text-slate-500 font-bold mb-4">เพิ่มรายการ</p>
      </div>
      {/* เลือกรายรับรายจ่าย */}
      <div className="flex gap-4 items-center bg-slate-200 rounded-xl p-1">
        <button
          className={`flex-1 text-sm p-4 font-bold text-slate-500 rounded-xl  transition-colors duration-300 ${type === "income" ? "text-white bg-emerald-500 shadow-sm" : ""}`}
          onClick={changeIncome}
        >
          รายรับ
        </button>
        <button
          className={`flex-1 text-sm p-4 font-bold text-slate-500 rounded-xl  transition-colors duration-300 ${type === "expense" ? "text-white bg-red-400 shadow-sm" : ""}`}
          onClick={changeExpense}
        >
          รายจ่าย
        </button>
      </div>
      {/* กรอกจำนวนเงิน เลือกประเภท */}
      <div className="flex  gap-2 items-start mt-4">
        <input
          className="flex-1 bg-slate-200 text-sm border-2 border-slate-400 p-4 rounded-xl font-bold tracking-widest"
          type="number"
          placeholder="จำนวนเงิน"
        />
        {/* Dropdown ประเภท */}
        <div className="relative w-2/5 ">
          <div
            className="w-full bg-slate-200 border-2 border-slate-400 rounded-xl p-4 text-slate-600 text-sm font-bold tracking-widest text-center truncate "
            onClick={() => setIsDropdownOpen(true)}
          >
            {seletedCat.label}
          </div>
          {/* ลูก DropDown */}
          {isDropdownOpen && (
            <div className="absolute top-full z-100 mt-2 w-full bg-slate-200 border-2 border-slate-400 hover:bg-red-600 rounded-xl p-4 text-slate-600 text-sm font-bold tracking-widest text-center">
              {categories[type].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, categories: cat.id }));
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left p-2 mb-1 rounded-lg transition-colors text-slate-600 hover:bg-red-600 hover:text-white cursor-pointer pointer-events-auto"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* หมายเหตุ */}
      <div>
        <input
          className="w-full mt-4 bg-slate-200 text-sm border-2 border-slate-400 p-4 rounded-xl font-bold tracking-widest"
          type="text"
          placeholder="หมายเหตุ (ไม่จำเป็น)"
        />
      </div>
      {/* ปุ่มบันทึก */}
      <button className="w-full mt-4 bg-red-400 text-sm text-white border-slate-400 p-4 rounded-xl font-bold tracking-widest text-center">
        บันทึกรายจ่าย
      </button>
    </div>
  );
}

export default AddForm;
