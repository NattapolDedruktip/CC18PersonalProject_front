import HostAvatar from "@/src/components/HostAvatar";
import HostMainLogo from "@/src/components/hostMainLogo";
import React from "react";

function HostHeader() {
  return (
    <div className="flex justify-between h-[104px] bg-MyBg">
      <HostMainLogo />
      <HostAvatar />
    </div>
  );
}

export default HostHeader;
