import HostAvatar from "../../components/HostAvatar";
import HostMainLogo from "../../components/hostMainLogo";
import React from "react";

function HostHeader() {
  return (
    <div className="z-20 w-full fixed flex justify-between h-[104px] bg-MyBg">
      <HostMainLogo />
      <HostAvatar />
    </div>
  );
}

export default HostHeader;
