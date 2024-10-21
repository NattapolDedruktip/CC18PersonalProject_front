import React from "react";
import useAuthStore from "../stores/auth-store";
import { removeAvailableTime } from "../api/host";

export default function HostHoteAvailableTimeItem({
  availableTimeItem,
  getAvailableTime,
}) {
  // console.log(availableTimeItem);

  const token = useAuthStore((state) => state.token);

  const onDelete = async () => {
    await removeAvailableTime(token, availableTimeItem.id);
    await getAvailableTime(token, availableTimeItem.hotelId);
  };
  return (
    <div className="flex justify-around border-2 border-InputBg p-4 rounded-xl">
      <div className="flex flex-col gap-4">
        <div>{`Start Date : ${availableTimeItem.startDate}`}</div>
        <div>{`Start Time : ${availableTimeItem.startTime}`}</div>
        <div>{`End Date : ${availableTimeItem.endDate}`}</div>
        <div>{`End Time : ${availableTimeItem.endTime}`}</div>
        <div>{`Price : ${availableTimeItem.price}  ฿`}</div>
      </div>

      <button
        onClick={onDelete}
        className="my-auto border-4 h-[50px] border-MainOrange text-MainOrange text-xl font-bold font-bebas px-2 py-2 rounded-xl tracking-widest hover:bg-MainOrange hover:text-InputText transition"
      >
        Delete
      </button>
    </div>
  );
}
