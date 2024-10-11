import React from "react";
import { Link } from "react-router-dom";

function MainLogo() {
  return (
    <Link to={"/"} className="bg-MyBg flex items-start justify-start ">
      <div className="text-MainOrange font-body text-7xl border-8 border-MainOrange rounded-md px-6 py-1 mt-2 ml-2">
        FAKE-HOTE
      </div>
    </Link>
  );
}

export default MainLogo;
