import React from "react";
import HotelRoomPics from "./HotelRoomPics";
import HotelBookingDetail from "./HotelBookingDetail";
import HotelCheckOutBooking from "./HotelCheckOutBooking";

function MyBookingItem({ booking, getBooking }) {
  const holtelPics = booking.hotel;
  // console.log(getBooking);
  // console.log(booking);
  // console.log(holtelPics);
  return (
    <div className="border-4 border-MainOrange p-2 rounded-lg">
      <div className="flex mx-auto w-[90%] my-5 h-[40vh]  justify-around items-center">
        <div className="flex-1">
          <HotelRoomPics item={holtelPics} />
        </div>
        <div className="ml-40 flex-1">
          <HotelBookingDetail booking={booking} />
        </div>
        <div className="ml-20 flex-1">
          <HotelCheckOutBooking booking={booking} getBooking={getBooking} />
        </div>
      </div>
    </div>
  );
}

export default MyBookingItem;
