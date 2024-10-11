import React from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";

function UserMapLayout() {
  return (
    <div>
      <UserHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default UserMapLayout;
