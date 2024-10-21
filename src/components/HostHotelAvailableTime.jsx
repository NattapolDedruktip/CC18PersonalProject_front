import React, { useEffect, useState } from "react";
import UserHotelAvailableTimeItem from "./UserHotelAvailableTimeItem";
import HostAddAvailableTime from "./HostAddAvailableTime";
import HostHoteAvailableTimeItem from "./HostHoteAvailableTimeItem";
import useAuthStore from "../stores/auth-store";
import { getHotelAvailableTimebyId } from "../api/host";

function HostHotelAvailableTime({ hotelId }) {
  const [freeTime, setFreeTime] = useState([]);

  const token = useAuthStore((state) => state.token);

  const getAvailableTime = async () => {
    try {
      const resp = await getHotelAvailableTimebyId(token, hotelId);
      setFreeTime(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAvailableTime(token, hotelId);
  }, []);
  // console.log(freeTime);

  //useEffect for monitor freeTime
  // useEffect(() => {
  //   console.log("Updated freeTime:", freeTime);
  // }, [freeTime]); // This effect will run when freeTime changes

  return (
    <div className="flex flex-col gap-3 w-[90%]">
      <div className="mx-auto text-4xl font-body font-bold text-MainOrange h-[10%] flex items-center">
        Available Time
      </div>
      <div className="flex flex-col gap-3">
        {freeTime.map((availableTimeItem) => (
          <HostHoteAvailableTimeItem
            key={availableTimeItem.id}
            availableTimeItem={availableTimeItem}
            getAvailableTime={getAvailableTime}
          />
        ))}
      </div>
      <div>
        <HostAddAvailableTime
          freeTime={freeTime}
          setFreeTime={setFreeTime}
          getAvailableTime={getAvailableTime}
          hotelId={hotelId}
        />
      </div>
    </div>
  );
}

export default HostHotelAvailableTime;
