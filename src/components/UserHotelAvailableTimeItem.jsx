import React, { useState } from "react";
import useAuthStore from "../stores/auth-store";
import { createBooking } from "../api/host";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function UserHotelAvailableTimeItem({ availableTimeItem, getAvailableTime }) {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hdlOnClick = async () => {
    await createBooking(token, availableTimeItem);
    await getAvailableTime();
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-around border-2 text-InputBg border-InputBg p-4 rounded-xl">
      <div className="flex flex-col gap-4">
        <div>{`Start Date : ${availableTimeItem.startDate}`}</div>
        <div>{`Start Time : ${availableTimeItem.startTime}`}</div>
        <div>{`End Date : ${availableTimeItem.endDate}`}</div>
        <div>{`End Time : ${availableTimeItem.endTime}`}</div>
        <div>{`Price : ${availableTimeItem.price} ฿`}</div>
      </div>

      {user.role === "USER" && (
        <>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <button className="flex justify-center my-auto border-4 w-[150px] h-[50px] border-MainOrange text-MainOrange text-xl font-bold font-bebas px-2 py-2 rounded-xl tracking-widest hover:bg-MainOrange hover:text-InputText transition">
                BOOK
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Confirm Booking</DialogTitle>
              <DialogDescription>
                Are you sure you want to book the time slot from{" "}
                {availableTimeItem.startDate} {availableTimeItem.startTime} to{" "}
                {availableTimeItem.endDate} {availableTimeItem.endTime}?
              </DialogDescription>
              <DialogFooter>
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={hdlOnClick}>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}

export default UserHotelAvailableTimeItem;
