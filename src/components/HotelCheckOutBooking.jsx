import React, { useState } from "react";
import UserCheckOutBooking from "./UserCheckOutBooking";
import { cancelBooking } from "../api/user";
import useAuthStore from "../stores/auth-store";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function HotelCheckOutBooking({ booking, getBooking }) {
  const token = useAuthStore((state) => state.token);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hdlCancel = async () => {
    await cancelBooking(token, booking.id);
    toast.success("Cancel Successfully!");
    await getBooking();
    setIsModalOpen(false); // Close the modal after cancel
  };

  return (
    <div className="flex flex-col gap-5">
      <UserCheckOutBooking booking={booking} getBooking={getBooking} />

      {/* Modal for cancel confirmation */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <button className="flex justify-center border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas w-full px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
            CANCEL
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Confirm Cancellation</DialogTitle>
          <DialogDescription>
            Are you sure you want to cancel this booking?
          </DialogDescription>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              No, Go Back
            </Button>
            <Button onClick={hdlCancel}>Yes, Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HotelCheckOutBooking;
