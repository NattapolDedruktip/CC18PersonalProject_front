import React, { useEffect, useState } from "react";
import useAuthStore from "../stores/auth-store";
import { getAvailableTimeById } from "../api/host";

function HostBookingDetail({ transactions }) {
  // console.log(transactions.booking, "booking");
  // console.log(transactions.booking.hotel.hotelName, "hotel name");
  // console.log(transactions.booking.availiableTimeId,"availableTimeId");
  const [bookingDetail, setBookingDetail] = useState({});
  const token = useAuthStore((state) => state.token);
  const AvailableTimeId = transactions.booking.availiableTimeId;
  const getBookingDetail = async () => {
    const resp = await getAvailableTimeById(token, AvailableTimeId);
    await setBookingDetail(resp.data);
  };

  useEffect(() => {
    getBookingDetail();
  }, []);

  // console.log(bookingDetail);
  return (
    <div className="flex flex-col justify-around h-[350px] ">
      <div className="text-body font-bold text-3xl text-MainOrange">
        {`Hotel : ${transactions.booking.hotel.hotelName}`}
      </div>
      {/* <div className="text-body font-bold text-xl text-InputBg">
        User : Pack
      </div> */}
      <div className="text-body font-bold text-2xl text-white">
        {`Start Date : ${bookingDetail.startDate}`}
      </div>
      <div className="text-body font-bold text-2xl text-white">
        {`Start Time : ${bookingDetail.startTime}`}
      </div>
      <div className="text-body font-bold text-2xl text-white">
        {`End Date : ${bookingDetail.endDate}`}
      </div>
      <div className="text-body font-bold text-2xl text-white">
        {`End Time : ${bookingDetail.endTime}`}
      </div>

      <div className="text-body font-bold text-3xl text-InputBg">
        {`Price : ${bookingDetail.price} ฿`}
      </div>
    </div>
  );
}

export default HostBookingDetail;
