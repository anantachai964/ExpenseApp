import React from "react";

function AddForm() {
  return (
    <div className="bg-white p-6 mx-4 mt-4 border-indigo-100 shadow-sm rounded-3xl">
      {/* เพิ่มรายการ */}
      <div className="">
        <p className="text-sm text-slate-600 font-bold mb-4">เพิ่มรายการ</p>
      </div>
      {/* เลือกรายรับรายจ่าย */}
      <div className="flex gap-4 items-center bg-slate-100 rounded-xl p-1">
        <button className="flex-1 text-sm p-4 font-bold text-white bg-green-500 rounded-xl shadow-sm">
          รายรับ
        </button>
        <button className="flex-1 text-sm p-4 font-bold text-slate-400">
          รายจ่าย
        </button>
      </div>
      {/* กรอกจำนวนเงิน เลือกประเภท */}
      <div className="flex gap-4 items-center mt-4">
        <input
          className="flex-1 bg-slate-200 text-sm border-2 border-slate-400 p-4 rounded-xl font-bold tracking-widest"
          type="number"
          placeholder="จำนวนเงิน"
        />
        <select className="bg-slate-200 text-sm border-2 border-slate-400 p-4 rounded-xl appearance-none">
          <option value="food">อาหาร</option>
          <option value="transport">ค่าน้ำมัน</option>
        </select>
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
