import React from "react";

import HostConfirmBookingItem from "./HostConfirmBookingItem";

function HostConfirmBooking() {
  return (
    <div className=" bg-MyBg w-full h-auto flex  flex-col ">
      <p className="flex justify-start text-body text-4xl font-bold text-MainOrange ml-40">
        Confirm Booking
      </p>
      <HostConfirmBookingItem />
      <HostConfirmBookingItem />
      <HostConfirmBookingItem />
    </div>
  );
}

export default HostConfirmBooking;
