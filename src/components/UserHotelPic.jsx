import React from "react";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getHostInfo } from "../api/auth";
import useAuthStore from "../stores/auth-store";

function UserHotelPic({ hotelId }) {
  const token = useAuthStore((state) => state.token);
  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);

  const getHoteData = async () => {
    const resp = await getHostInfo(token, hotelId);
    setItem(resp.data);
  };

  useEffect(() => {
    getHoteData();
  }, []);

  console.log(item);
  return (
    <Carousel className="w-full max-w-sm mx-16">
      <CarouselContent>
        {item?.hotelImages?.map((image) => {
          // console.log(image);
          // console.log("publicId", image.public_id);
          return (
            <CarouselItem key={image.id}>
              <img
                src={image.secure_url}
                className="w-full h-full p-1 aspect-square items-center border-4 border-MainOrange"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div onClick={() => handleClick(-1)}>
        <CarouselPrevious className="border-4  border-MainOrange text-InputBg bg-MyBg  hover:bg-MainOrange hover:text-InputText transition" />
      </div>
      <div onClick={() => handleClick(1)}>
        <CarouselNext className="border-4 border-MainOrange text-InputBg bg-MyBg  hover:bg-MainOrange hover:text-InputText transition" />
      </div>
    </Carousel>
  );
}

export default UserHotelPic;
