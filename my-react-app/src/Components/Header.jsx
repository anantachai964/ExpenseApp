import React from "react";

function Header() {
  return (
    <header className="h-header-h w-full p-4 bg-[url('/img/header-01.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      {/* div ที่จัดการตัวเเหน่ง */}
      <div className="mt-20 h-7/10 w-8/10 bg-white/20 backdrop-blur-3xl mx-auto rounded-2xl shadow-xl p-6">
        {/* ยอดเงินคงเหลือ */}
        <p className="text-[10px] text-black/40 tracking-widest mb-1">
          ยอดคงเหลือ
        </p>
        {/* จำนวนเงิน */}
        <p className="font-extrabold text-xl leading-none text-black/70 font-prompt mb-4">
          1,234.56
        </p>
        {/* รายรับเเละรายจ่าย */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/15 rounded-2xl p-4">
            <p className="text-[10px] text-black/40 tracking-widest mb-2">
              รายรับ
            </p>
            <p className="font-extrabold text-lg leading-none text-black/70 font-prompt">
              1,234.56
            </p>
          </div>
          <div className="bg-white/15 rounded-2xl p-4">
            <p className="text-[10px] text-black/40 tracking-widest mb-2">
              รายจ่าย
            </p>
            <p className="font-extrabold text-lg leading-none text-black/70 font-prompt">
              1,234.56
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
