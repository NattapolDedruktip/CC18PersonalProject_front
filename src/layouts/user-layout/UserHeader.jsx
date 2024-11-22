import React from "react";
import HeaderAvatar from "../../components/HeaderAvatar";
import UserMainLogo from "../../components/UserMainLogo";

function UserHeader() {
  return (
    <div className="z-10 w-full fixed flex justify-between h-[104px] bg-MyBg ">
      <UserMainLogo />
      <HeaderAvatar />
    </div>
  );
}

export default UserHeader;
