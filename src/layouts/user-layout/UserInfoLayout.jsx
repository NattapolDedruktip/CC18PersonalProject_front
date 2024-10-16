import React from "react";
import UserHeader from "./UserHeader";
import SidebarUser from "@/src/layouts/user-layout/SidebarUser";
import { Outlet } from "react-router-dom";

function UserInfoLayout() {
  return (
    <div className="flex flex-col bg-MyBg">
      <div>
        <UserHeader />
      </div>
      <div className="flex">
        <div className=" bg-MyBg w-1/6 justify-center text-center h-[100vh]">
          <SidebarUser />
        </div>
        <div className=" w-5/6 justify-center text-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserInfoLayout;
