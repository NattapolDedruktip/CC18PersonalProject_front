import React from "react";
import HotelBookingDetail from "./HotelBookingDetail";
import HostSlipFromUser from "./HostSlipFromUser";
import HostConfirmButton from "./HostConfirmButton";

function HostConfirmBookingItem() {
  return (
    <div className="flex mx-auto w-[90%] mt-10 h-[40vh]  justify-around items-center">
      <div className=" flex-1">
        <HostSlipFromUser />
      </div>
      <div className="flex-1">
        <HotelBookingDetail />
      </div>
      <div className="flex-1">
        <HostConfirmButton />
      </div>
    </div>
  );
}

export default HostConfirmBookingItem;
