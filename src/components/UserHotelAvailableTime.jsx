import React from "react";
import UserHotelAvailableTimeItem from "./UserHotelAvailableTimeItem";

function UserHotelAvailableTime() {
  return (
    <div className="flex flex-col gap-3 w-[90%]">
      <div className="mx-auto text-4xl font-body font-bold text-MainOrange h-[10%] flex items-center">
        Available Time
      </div>
      <div className="flex flex-col gap-3">
        <UserHotelAvailableTimeItem />
        <UserHotelAvailableTimeItem />
        <UserHotelAvailableTimeItem />
      </div>
    </div>
  );
}

export default UserHotelAvailableTime;
