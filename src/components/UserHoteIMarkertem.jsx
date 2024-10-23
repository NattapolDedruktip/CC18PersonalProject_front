import React, { useEffect, useState } from "react";
import HotelRoomPics from "./HotelRoomPics";
import HostHotelDetail from "./HostHotelDetail";
import HostHotelDetailManagement from "./HostHotelDetailManagement";
import UserHotelAvailableTime from "./UserHotelAvailableTime";
import { getHoteInfo, getHotelAvailableTimebyId } from "../api/host";
import useAuthStore from "../stores/auth-store";
import UserHotelDescription from "./UserHotelDescription";
import UserHotelAvailableTimeItem from "./UserHotelAvailableTimeItem";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function UserHoteIMarkertem({ hotelId }) {
  const token = useAuthStore((state) => state.token);
  const [freeTime, setFreeTime] = useState([]);
  const [hoteData, setHoteData] = useState({});

  const getHoteDetail = async () => {
    const resp = await getHoteInfo(token, hotelId);
    setHoteData(resp.data);
  };

  const getAvailableTime = async () => {
    try {
      const resp = await getHotelAvailableTimebyId(token, hotelId);
      setFreeTime(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getHoteDetail();
    getAvailableTime();
  }, []);
  // console.log(hoteData);
  return (
    <div className="bg-MyBg border-4 border-MainOrange p-2 rounded-lg w-[1000px]">
      <div>
        <div className="flex mx-auto w-full my-5 h-fit  justify-around items-center  ">
          <div className="mr-40 w-[25%] flex flex-col gap-4">
            <div className="flex justify-start ml-10  font-body text-4xl text-MainOrange font-bold">
              {hoteData.hotelName}
            </div>
            <HotelRoomPics item={hoteData} />
          </div>
          <div className="w-[25%] flex flex-col ">
            <div className="flex justify-start ml-10 mt-5 font-body text-3xl text-MainOrange font-bold">
              Available Time
            </div>
            <Carousel className="w-full max-w-sm mx-3">
              <CarouselContent>
                {freeTime.map((availableTimeItem) => (
                  <CarouselItem key={freeTime.id}>
                    <UserHotelAvailableTimeItem
                      key={availableTimeItem.id}
                      availableTimeItem={availableTimeItem}
                      getAvailableTime={getAvailableTime}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div>
                <CarouselPrevious className="border-4  border-MainOrange text-InputBg bg-MyBg  hover:bg-MainOrange hover:text-InputText transition" />
              </div>
              <div>
                <CarouselNext className="border-4 border-MainOrange text-InputBg bg-MyBg  hover:bg-MainOrange hover:text-InputText transition" />
              </div>
            </Carousel>
          </div>
          <div className="ml-12 flex justify-center  w-[50%]">
            <UserHotelDescription
              hoteData={hoteData}
              setHoteData={setHoteData}
              getHoteInfoById={getHoteDetail}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHoteIMarkertem;
