import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function HotelRoomPics({ item, carouselPublicId, setCarouselPublicId }) {
  const [count, setCount] = useState(0);
  const handleClick = (value) => {
    if (count + value < 0) return;
    if (count + value > item.hotelImages.length - 1) return;
    setCount(count + value);
    console.log(count + value);
    console.log(item?.hotelImages[count + value]?.public_id);
    setCarouselPublicId(item?.hotelImages[count + value]?.public_id);
    // console.log(item?.hotelImages[count + value]);
  };

  // console.log("=================", item);
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

export default HotelRoomPics;
