import React, { useEffect, useState } from "react";
import HotelRoomPics from "./HotelRoomPics";
import HostHotelDetail from "./HostHotelDetail";
import HostHotelDetailManagement from "./HostHotelDetailManagement";
import UserHotelAvailableTime from "./UserHotelAvailableTime";
import { getHoteInfo } from "../api/host";
import useAuthStore from "../stores/auth-store";
import UserHotelDescription from "./UserHotelDescription";

function UserHoteIMarkertem({ hotelId }) {
  const token = useAuthStore((state) => state.token);
  const [hoteData, setHoteData] = useState({});

  const getHoteDetail = async () => {
    const resp = await getHoteInfo(token, hotelId);
    setHoteData(resp.data);
  };
  useEffect(() => {
    getHoteDetail();
  }, []);

  return (
    <div className="bg-MyBg border-4 border-MainOrange p-2 rounded-lg w-[800px]">
      <div className="flex mx-auto w-full my-5 h-fit  justify-around items-center  ">
        <div className="mr-40 w-[35%] ">
          <HotelRoomPics item={hoteData} />
        </div>
        <div className="w-[40%] ">
          <UserHotelAvailableTime
            item={hoteData}
            hotelId={hoteData.id}
            userId={hoteData.userId}
          />
        </div>
        <div className="flex justify-end  w-[25%]">
          <UserHotelDescription
            hoteData={hoteData}
            setHoteData={setHoteData}
            getHoteInfoById={getHoteDetail}
          />
        </div>
      </div>
    </div>
  );
}

export default UserHoteIMarkertem;
