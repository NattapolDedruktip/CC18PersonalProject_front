import { getAllBookingHistory } from "@/src/api/user";
import BookingHistoryItem from "@/src/components/BookingHistoryItem";
import useAuthStore from "@/src/stores/auth-store";
import React, { useEffect, useState } from "react";

function BookingHistory() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  const [bookingHistory, setBookingHistory] = useState([]);

  const getHistory = async () => {
    const resp = await getAllBookingHistory(token, user.id);
    setBookingHistory(resp.data);
  };

  useEffect(() => {
    getHistory();
  }, []);
  console.log(bookingHistory);
  return (
    <div className="px-10 mt-[11vh] bg-MyBg w-full h-auto flex  flex-col gap-5">
      <p className="flex justify-start text-body text-4xl font-bold text-MainOrange ml-40">
        My Booking History
      </p>
      {bookingHistory.map((history) => (
        <BookingHistoryItem key={history.id} history={history} />
      ))}
    </div>
  );
}

export default BookingHistory;
