import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import dog1 from "../assets/dog.png";
import dog2 from "../assets/dog2.png";
import dog4 from "../assets/dog4.png";

function HotelRoomPics({ item }) {
  console.log("=================", item);
  return (
    <Carousel className="w-full max-w-sm mx-16">
      <CarouselContent>
        {item?.hotelImages?.map((image) => {
          console.log(image);
          return (
            <CarouselItem>
              <img
                src={image.secure_url}
                className="w-full h-full p-1 aspect-square items-center border-4 border-MainOrange"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="border-4  border-MainOrange text-InputBg bg-MyBg  hover:bg-MainOrange hover:text-InputText transition" />
      <CarouselNext className="border-4 border-MainOrange text-InputBg bg-MyBg  hover:bg-MainOrange hover:text-InputText transition" />
    </Carousel>
  );
}

export default HotelRoomPics;
