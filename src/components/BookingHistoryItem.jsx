import React from "react";
import HotelBookingDetail from "@/src/components/HotelBookingDetail";
import HotelPaidHistory from "@/src/components/HotelPaidHistory";
import HotelRoomPics from "@/src/components/HotelRoomPics";

function BookingHistoryItem() {
  return (
    <div>
      <div className="flex mx-auto w-[90%] mt-10 h-[40vh]  justify-around items-center">
        <div className="flex-1">
          <HotelRoomPics />
        </div>
        <div className="flex-1">
          <HotelBookingDetail />
        </div>
        <div className="flex-1">
          <HotelPaidHistory />
        </div>
      </div>
    </div>
  );
}

export default BookingHistoryItem;
