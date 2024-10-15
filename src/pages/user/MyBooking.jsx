import MyBookingItem from "@/src/components/MyBookingItem";
import React from "react";

function MyBooking() {
  return (
    <div className=" px-10 mt-[11vh] bg-MyBg w-full h-auto flex  flex-col gap-5 ">
      <p className="flex justify-start text-body text-4xl font-bold text-MainOrange ml-40">
        My Booking
      </p>
      <MyBookingItem />
      <MyBookingItem />
      <MyBookingItem />
    </div>
  );
}

export default MyBooking;
