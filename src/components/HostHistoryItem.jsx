import React, { useEffect, useState } from "react";
import HotelPaidHistory from "@/src/components/HotelPaidHistory";
import HostSlipFromUser from "./HostSlipFromUser";
import HostBookingDetail from "./HostBookingDetail";
import useAuthStore from "../stores/auth-store";
import { getTransactionHistory } from "../api/host";
import HostSlipHistory from "./HostSlipHistory";
import HostBookingdetailHistory from "./HostBookingdetailHistory";

function HostHistoryItem({ history }) {
  return (
    <div className="border-4 border-MainOrange p-2 rounded-lg">
      <div className="flex mx-auto w-[90%] my-5 h-[40vh]  justify-around items-center">
        <div className="flex-1">
          <HostSlipHistory history={history} />
        </div>
        <div className="ml-20 flex-1">
          <HostBookingdetailHistory history={history} />
        </div>
        <div className="flex-1">
          <HotelPaidHistory history={history} />
        </div>
      </div>
    </div>
  );
}

export default HostHistoryItem;
