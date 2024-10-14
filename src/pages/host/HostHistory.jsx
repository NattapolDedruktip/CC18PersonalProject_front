import HostHistoryItem from "@/src/components/HostHistoryItem";
import React from "react";

function HostHistory() {
  return (
    <div className=" bg-MyBg w-full h-auto flex  flex-col ">
      <p className="flex justify-start text-body text-4xl font-bold text-MainOrange ml-40">
        My Booking
      </p>
      <HostHistoryItem />
      <HostHistoryItem />
      <HostHistoryItem />
    </div>
  );
}

export default HostHistory;
