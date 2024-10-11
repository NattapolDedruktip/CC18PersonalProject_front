import React from "react";
import MainLogo from "../../components/MainLogo";
import HeaderAvatar from "@/src/components/HeaderAvatar";

function UserHeader() {
  return (
    <div className="flex justify-between h-[104px] bg-MyBg">
      <MainLogo />
      <HeaderAvatar />
    </div>
  );
}

export default UserHeader;
