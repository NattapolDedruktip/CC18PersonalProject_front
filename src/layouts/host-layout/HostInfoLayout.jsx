import React from "react";
import HostHeader from "./HostHeader";
import SidebarHost from "./SidebarHost";
import { Outlet } from "react-router-dom";

function HostInfoLayout() {
  return (
    <div className="flex flex-col bg-MyBg z-20">
      <div className="bg-MyBg">
        <HostHeader />
      </div>
      <div className="flex bg-MyBg">
        <div className=" bg-MyBg w-1/6 justify-center text-center h-[90vh]">
          <SidebarHost />
        </div>
        <div className=" bg-MyBg w-5/6 h-screen justify-center text-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HostInfoLayout;
