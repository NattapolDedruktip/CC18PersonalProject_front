import React, { useEffect, useState } from "react";
import UserHotelAvailableTimeItem from "./UserHotelAvailableTimeItem";
import HostAddAvailableTime from "./HostAddAvailableTime";
import useAuthStore from "../stores/auth-store";
import { getHotelAvailableTimebyId } from "../api/host";

function UserHotelAvailableTime({ item, hotelId, userId }) {
  console.log("hoteId", hotelId);
  const [freeTime, setFreeTime] = useState([]);

  const token = useAuthStore((state) => state.token);

  // useEffect(() => {
  //   getAvailableTime();
  // }, []);

  const getAvailableTime = async () => {
    try {
      const resp = await getHotelAvailableTimebyId(token, hotelId);
      setFreeTime(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(freeTime);

  // useEffect for monitor freeTime
  // useEffect(() => {
  //   console.log("Updated freeTime:", freeTime);
  // }, [freeTime]); // This effect will run when freeTime changes

  // console.log(item);
  console.log(freeTime, "90909090");
  return (
    <div className="flex flex-col gap-3 w-[90%]">
      <div className="mx-auto text-4xl font-body font-bold text-MainOrange h-[10%] flex items-center">
        Available Time
      </div>
      <div className=" flex flex-col gap-3">
        {freeTime.map((availableTimeItem) => (
          <UserHotelAvailableTimeItem
            key={availableTimeItem.id}
            availableTimeItem={availableTimeItem}
            getAvailableTime={getAvailableTime}
          />
        ))}
      </div>
    </div>
  );
}

export default UserHotelAvailableTime;
