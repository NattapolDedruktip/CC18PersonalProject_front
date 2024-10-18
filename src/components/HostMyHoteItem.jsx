import React from "react";
import HotelRoomPics from "./HotelRoomPics";
import HostHotelDetail from "./HostHotelDetail";
import HostHotelDetailManagement from "./HostHotelDetailManagement";
import HostHotelAvailableTime from "./HostHotelAvailableTime";

function HostMyHoteItem({ item }) {
  // console.log(id);
  return (
    <div className="border-4 border-MainOrange p-2 rounded-lg">
      <div className="flex mx-auto w-[90%] my-5 h-[40vh]  justify-around items-center  ">
        <div className=" flex-1">
          <HotelRoomPics item={item} />
        </div>
        <div className="ml-20 flex-1">
          <HostHotelAvailableTime id={item.id} userId={item.userId} />
        </div>
        <div className="flex-1">
          <HostHotelDetailManagement id={item.id} userId={item.userId} />
        </div>
      </div>
    </div>
  );
}

export default HostMyHoteItem;
