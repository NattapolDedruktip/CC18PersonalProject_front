import React from "react";
import slip from "../assets/slipExample.jpeg";

function HostSlipFromUser() {
  return (
    <div className="w-full max-w-sm h-[40vh] mx-16 border overflow-hidden">
      <div>
        <img src={slip} />
      </div>
    </div>
  );
}

export default HostSlipFromUser;
