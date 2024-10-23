import React from "react";

function HotelPaidHistory({ history }) {
  return (
    <div className="flex flex-col">
      <div className="text-3xl font-bold text-body text-InputBg">{`payment is complete (${history.netSpend} ฿)`}</div>
      <div className="text-3xl font-bold text-body text-InputBg">
        {`Paid at : ${new Date(history.booking.updateAt).toLocaleDateString(
          "en-GB"
        )} ${new Date(history.booking.updateAt).toLocaleTimeString("en-GB", {
          hour12: false,
        })}`}
      </div>
    </div>
  );
}

export default HotelPaidHistory;
