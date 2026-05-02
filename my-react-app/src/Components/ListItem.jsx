import React from "react";

function ListItem() {
  return (
    <div className="flex flex-col gap-2 mx-4 p-6">
      {/* เส้นเเบ่ง */}
      <div className="flex justify-center items-center gap-1">
        <span className="text-[11px] text-slate-400">1 พฤศภาคม</span>
        <div className="flex-1 bg-slate-200 h-px"></div>
      </div>
      {/* รายการ */}
      <div className="flex items-center gap-3 px-4 py-3.5 bg-white rounded-2xl mb-2 border-l-4 shadow-sm  border-rose-400">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 text-red-600">
          🍜
        </div>
        <div className="flex-1 ">
          <p className="text-sm font-semibold text-slate-700 truncate">
            ข้าวกะเพราหมูกรอบ
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-red-600 bg-red-100">
              อาหาร
            </span>
            <span className="text-[11px] text-slate-400">08:30</span>
          </div>
        </div>
        {/* ราคา */}
        <p className="font-prompt font-extrabold text-base flex-shrink-0 text-rose-500">
          450
        </p>
      </div>
      {/* รายการ */}
      <div className="flex items-center gap-3 px-4 py-3.5 bg-white rounded-2xl mb-2 border-l-4 shadow-sm  border-rose-400">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 text-red-600">
          🍜
        </div>
        <div className="flex-1 ">
          <p className="text-sm font-semibold text-slate-700 truncate">
            ข้าวกะเพราหมูกรอบ
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-red-600 bg-red-100">
              อาหาร
            </span>
            <span className="text-[11px] text-slate-400">08:30</span>
          </div>
        </div>
        {/* ราคา */}
        <p className="font-prompt font-extrabold text-base flex-shrink-0 text-rose-500">
          450
        </p>
      </div>
      {/* รายการ */}
      <div className="flex items-center gap-3 px-4 py-3.5 bg-white rounded-2xl mb-2 border-l-4 shadow-sm  border-rose-400">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 text-red-600">
          🍜
        </div>
        <div className="flex-1 ">
          <p className="text-sm font-semibold text-slate-700 truncate">
            ข้าวกะเพราหมูกรอบ
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-red-600 bg-red-100">
              อาหาร
            </span>
            <span className="text-[11px] text-slate-400">08:30</span>
          </div>
        </div>
        {/* ราคา */}
        <p className="font-prompt font-extrabold text-base flex-shrink-0 text-rose-500">
          450
        </p>
      </div>
    </div>
  );
}

export default ListItem;
