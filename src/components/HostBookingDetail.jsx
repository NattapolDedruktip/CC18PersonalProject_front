import React from "react";

function HostBookingDetail() {
  return (
    <div className="flex flex-col justify-around h-[350px] ">
      <div className="text-body font-bold text-3xl text-white">
        {" "}
        Hotel : Rose
      </div>
      <div className="text-body font-bold text-xl text-InputBg">
        User : Pack
      </div>
      <div className="text-body font-bold text-2xl text-white">
        Booking Date : xxxx/xx/xx
      </div>
      <div className="text-body font-bold text-2xl text-white">
        Booking time : 20-24 pm
      </div>
      <div className="text-body font-bold text-2xl text-white">
        Price : 2000 ฿{" "}
      </div>
    </div>
  );
}

export default HostBookingDetail;
