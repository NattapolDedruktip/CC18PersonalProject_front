import React from "react";
import HotelRoomPics from "./HotelRoomPics";
import HostHotelDetail from "./HostHotelDetail";
import HostHotelDetailManagement from "./HostHotelDetailManagement";
import UserHotelAvailableTime from "./UserHotelAvailableTime";
import HostHotelAvailableTime from "./HostHotelAvailableTime";

function HostMyHoteItem({ item }) {
  console.log(item);

  return (
    <div className="border-4 border-MainOrange p-2 rounded-lg">
      <div className="flex mx-auto w-[90%] my-5 h-fit  justify-around items-center  ">
        <div className="mr-40 w-[35%] ">
          <HotelRoomPics item={item} />
        </div>
        <div className="w-[40%] ">
          <HostHotelAvailableTime
            item={item}
            hotelId={item.id}
            userId={item.userId}
          />
        </div>
        <div className="flex justify-end  w-[25%]">
          <HostHotelDetailManagement id={item.id} userId={item.userId} />
        </div>
      </div>
    </div>
  );
}

export default HostMyHoteItem;
