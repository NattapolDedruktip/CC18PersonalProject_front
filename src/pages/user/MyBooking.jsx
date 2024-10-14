import MyBookingItem from "@/src/components/MyBookingItem";
import React from "react";

function MyBooking() {
  return (
    <div className=" bg-MyBg w-full h-auto flex  flex-col ">
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
