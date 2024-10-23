import { getMyBookingByUSerId } from "@/src/api/host";
import MyBookingItem from "@/src/components/MyBookingItem";
import useAuthStore from "@/src/stores/auth-store";
import React, { useEffect, useState } from "react";

function MyBooking() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  const [bookingList, setBookingList] = useState([]);

  const getBooking = async () => {
    const resp = await getMyBookingByUSerId(token, user.id);
    setBookingList(resp.data);
  };

  useEffect(() => {
    getBooking();
  }, []);

  return (
    <div className=" px-10 mt-[11vh] bg-MyBg w-full h-auto flex  flex-col gap-5 ">
      <p className="flex justify-start text-body text-4xl font-bold text-MainOrange ml-40">
        My Booking
      </p>
      {bookingList.map((booking) => (
        <MyBookingItem
          key={booking.id}
          booking={booking}
          getBooking={getBooking}
        />
      ))}
    </div>
  );
}

export default MyBooking;
