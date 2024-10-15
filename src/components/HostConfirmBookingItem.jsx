import React from "react";
import HostSlipFromUser from "./HostSlipFromUser";
import HostConfirmButton from "./HostConfirmButton";
import HostBookingDetail from "./HostBookingDetail";

function HostConfirmBookingItem() {
  return (
    <div className="border-4 border-MainOrange p-2 rounded-s-lg">
      <div className="flex mx-auto w-[90%] my-5 h-[40vh]  justify-around items-center">
        <div className=" flex-1">
          <HostSlipFromUser />
        </div>
        <div className="ml-20 flex-1">
          <HostBookingDetail />
        </div>
        <div className="flex-1">
          <HostConfirmButton />
        </div>
      </div>
    </div>
  );
}

export default HostConfirmBookingItem;
