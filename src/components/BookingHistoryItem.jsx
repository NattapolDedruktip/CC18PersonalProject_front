import React from "react";
import HotelBookingDetail from "@/src/components/HotelBookingDetail";
import HotelPaidHistory from "@/src/components/HotelPaidHistory";
import HotelRoomPics from "@/src/components/HotelRoomPics";
import UserPaidHistory from "./UserPaidHistory";

function BookingHistoryItem({ history }) {
  const HotelDetail = history.hotel;
  const HotelAvailableTime = history.availiableTime;
  return (
    <div className="border-4 border-MainOrange p-2 rounded-lg">
      <div className=" p-2 rounded-lg">
        <div className="flex mx-auto w-[90%]  h-[40vh]  justify-around items-center">
          <div className="flex-1">
            <HotelRoomPics item={HotelDetail} />
          </div>
          <div className="ml-20 flex-1">
            <HotelBookingDetail booking={history} />
          </div>
          <div className="flex-1">
            <UserPaidHistory history={history} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingHistoryItem;
