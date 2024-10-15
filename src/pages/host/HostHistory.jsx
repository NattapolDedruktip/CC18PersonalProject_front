import HostHistoryItem from "@/src/components/HostHistoryItem";
import React from "react";

function HostHistory() {
  return (
    <div className=" mt-[11vh] px-10 bg-MyBg w-full h-auto flex  flex-col  gap-5">
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
