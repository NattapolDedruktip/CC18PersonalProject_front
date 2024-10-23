import React from "react";

function HotelBookingDetail({ booking }) {
  return (
    <div className="flex flex-col justify-around h-[350px] ">
      <div className="text-body font-bold text-3xl text-MainOrange">
        {booking.hotel.hotelName}
      </div>
      <div className="text-body font-bold text-2xl text-white">{`Start : ${booking.availiableTime.startDate}`}</div>
      <div className="text-body font-bold text-2xl text-white">{`${booking.availiableTime.startTime} o'clock`}</div>
      <div className="text-body font-bold text-2xl text-white">{`End : ${booking.availiableTime.endDate}`}</div>
      <div className="text-body font-bold text-2xl text-white">{`${booking.availiableTime.endTime} o'clock`}</div>
      <div className="text-body font-bold text-5xl text-InputBg">
        {`${booking.availiableTime.price}  ฿`}
      </div>
    </div>
  );
}

export default HotelBookingDetail;
