import React from "react";
import HotelRoomPics from "./HotelRoomPics";
import HotelBookingDetail from "./HotelBookingDetail";
import HotelCheckOutBooking from "./HotelCheckOutBooking";

function MyBookingItem() {
  return (
    <div className="flex mx-auto w-[90%] mt-10 h-[40vh]  justify-around items-center">
      <div className=" flex-1">
        <HotelRoomPics />
      </div>
      <div className="flex-1">
        <HotelBookingDetail />
      </div>
      <div className="flex-1">
        <HotelCheckOutBooking />
      </div>
    </div>
  );
}

export default MyBookingItem;
