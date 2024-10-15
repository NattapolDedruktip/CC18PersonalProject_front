import HostConfirmBookingItem from "@/src/components/HostConfirmBookingItem";
import React from "react";

function ConfirmBooking() {
  return (
    <div className="mt-[11vh] px-10 bg-MyBg w-full h-auto flex  flex-col gap-5">
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
