import React from "react";
import UserHotelAvailableTimeItem from "./UserHotelAvailableTimeItem";
import HostAddAvailableTime from "./HostAddAvailableTime";

function UserHotelAvailableTime({ hotelId }) {
  return (
    <div className="flex flex-col gap-3 w-[90%]">
      <div className="mx-auto text-4xl font-body font-bold text-MainOrange h-[10%] flex items-center">
        Available Time
      </div>
      <div className="flex flex-col gap-3">
        {/* <UserHotelAvailableTimeItem /> */}
      </div>
      <div>
        <HostAddAvailableTime hotelId={hotelId} />
      </div>
    </div>
  );
}

export default UserHotelAvailableTime;
