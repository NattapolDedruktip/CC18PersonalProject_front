import React from "react";
import HotelPaidHistory from "@/src/components/HotelPaidHistory";
import HostSlipFromUser from "./HostSlipFromUser";
import HostBookingDetail from "./HostBookingDetail";

function HostHistoryItem() {
  return (
    <div className="border-4 border-MainOrange p-2 rounded-s-lg">
      <div className="flex mx-auto w-[90%] my-5 h-[40vh]  justify-around items-center">
        <div className="flex-1">
          <HostSlipFromUser />
        </div>
        <div className="ml-20 flex-1">
          <HostBookingDetail />
        </div>
        <div className="flex-1">
          <HotelPaidHistory />
        </div>
      </div>
    </div>
  );
}

export default HostHistoryItem;
