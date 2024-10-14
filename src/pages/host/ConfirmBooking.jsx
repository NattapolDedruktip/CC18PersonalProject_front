import HostConfirmBookingItem from "@/src/components/HostConfirmBookingItem";
import React from "react";

function ConfirmBooking() {
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

export default ConfirmBooking;
