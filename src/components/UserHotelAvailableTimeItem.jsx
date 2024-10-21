import React from "react";
import useAuthStore from "../stores/auth-store";

function UserHotelAvailableTimeItem({ availableTimeItem, getAvailableTime }) {
  const user = useAuthStore((state) => state.user);
  // console.log(user, "======================");

  return (
    <div className="flex flex-col gap-3 items-center justify-around border-2 text-InputBg border-InputBg p-4 rounded-xl">
      <div className="flex flex-col gap-4">
        <div>{`Start Date : ${availableTimeItem.startDate}`}</div>
        <div>{`Start Time : ${availableTimeItem.startTime}`}</div>
        <div>{`End Date : ${availableTimeItem.endDate}`}</div>
        <div>{`End Time : ${availableTimeItem.endTime}`}</div>
        <div>{`Price : ${availableTimeItem.price} ฿`}</div>
      </div>

      {user.role === "USER" && (
        <button className="flex justify-center my-auto border-4 w-[150px] h-[50px] border-MainOrange text-MainOrange text-xl font-bold font-bebas px-2 py-2 rounded-xl tracking-widest hover:bg-MainOrange hover:text-InputText transition">
          BOOK
        </button>
      )}
    </div>
  );
}

export default UserHotelAvailableTimeItem;
