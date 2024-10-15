import React from "react";
import HotelRoomPics from "./HotelRoomPics";
import UserHotelDescription from "./UserHotelDescription";
import UserHotelAvailableTime from "./UserHotelAvailableTime";

function UserHotelDetail() {
  return (
    <div className="h-[100vh]  bg-MyBg flex flex-col justify-center items-center">
      <div className="h-[10vh]"> test</div>
      <div className="text-InputBg   w-[90vw] h-[80vh] flex flex-col border-4 border-MainOrange p-10">
        <div className="mx-auto text-7xl font-body font-bold text-MainOrange h-[10%] flex items-center">
          Hotel Name
        </div>
        <div className="flex flex-1">
          <div className="flex-1  flex justify-center items-center">
            <HotelRoomPics />
          </div>
          <div className="flex-1  flex justify-center items-center ">
            <UserHotelDescription />
          </div>
          <div className="flex-1 flex justify-center items-center ">
            <UserHotelAvailableTime />
          </div>
        </div>
        <div className="mx-auto flex gap-5 h-[10%] items-center text-4xl font-body font-bold text-white">
          <div>FOR MORE INFO :</div>
          <button className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
            CONTACT HOST
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserHotelDetail;
