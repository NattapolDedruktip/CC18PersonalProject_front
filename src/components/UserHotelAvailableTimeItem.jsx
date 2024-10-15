import React from "react";

function UserHotelAvailableTimeItem() {
  return (
    <div className="flex justify-around border-2 border-InputBg p-4 rounded-xl">
      <div className="flex flex-col gap-4">
        <div>Date : xxxx/xx/xx</div>
        <div>Time : xx.xx</div>
        <div>Price : xxxx ฿</div>
      </div>
      <button className="my-auto border-4 h-[50px] border-MainOrange text-MainOrange text-xl font-bold font-bebas px-2 py-2 rounded-xl tracking-widest hover:bg-MainOrange hover:text-InputText transition">
        BOOK NOW
      </button>
    </div>
  );
}

export default UserHotelAvailableTimeItem;
