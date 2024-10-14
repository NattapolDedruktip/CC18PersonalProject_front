import BookingHistoryItem from "@/src/components/BookingHistoryItem";
import React from "react";

function BookingHistory() {
  return (
    <div className=" bg-MyBg w-full h-auto flex  flex-col ">
      <p className="flex justify-start text-body text-4xl font-bold text-MainOrange ml-40">
        My Booking History
      </p>
      <BookingHistoryItem />
      <BookingHistoryItem />
      <BookingHistoryItem />
    </div>
  );
}

export default BookingHistory;
