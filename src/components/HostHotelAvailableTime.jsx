import React from "react";
import HostHotelAvailableTimeItem from "./HostHotelAvailableTimeItem";

function HostHotelAvailableTime() {
  return (
    <div className="flex flex-col gap-2 justify-between">
      <p className="font-body text-3xl font-bold text-MainOrange">
        Available Time
      </p>
      <div className="flex flex-col gap-3">
        <HostHotelAvailableTimeItem />
        <HostHotelAvailableTimeItem />
        <HostHotelAvailableTimeItem />
      </div>
      <div className="flex gap-2 justify-center">
        <button className="border-4 border-MainOrange text-MainOrange text-xl font-bold font-bebas w-[25%]  py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
          Add
        </button>
        <button className="border-4 border-MainOrange text-MainOrange text-xl font-bold font-bebas w-[25%]  py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
          Edit
        </button>
        <button className="border-4 border-MainOrange text-MainOrange text-xl font-bold font-bebas w-[25%]  py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
          Delete
        </button>
      </div>
    </div>
  );
}

export default HostHotelAvailableTime;
