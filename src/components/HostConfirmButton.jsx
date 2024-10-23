import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { cancelTransaction, confirmTransaction } from "../api/host";
import useAuthStore from "../stores/auth-store";
import { toast } from "react-toastify";

function HostConfirmButton({ transactions, getAllTransaction }) {
  // Separate state for each modal (Confirm and Cancel)
  const token = useAuthStore((state) => state.token);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);

  const form = {
    transactionId: transactions.id,
    bookingId: transactions.booking_id,
  };

  const confirmBooking = async () => {
    // console.log(transactions.id);

    await confirmTransaction(token, form);
    await setConfirmOpen(false);
    await getAllTransaction();
    toast.success("Confirm Transaction Successfully!");
  };

  const cancelBooking = async () => {
    await cancelTransaction(token, form);
    await setCancelOpen(false);
    await getAllTransaction();
    toast.success("Cancel Transaction Successfully!");
  };
  console.log(form);
  return (
    <div className="flex flex-col gap-5">
      {/* Confirm Button */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogTrigger asChild>
          <button className="flex justify-center border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas w-[60%] px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
            CONFIRM
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm booking</DialogTitle>
            <DialogDescription>
              Are you sure you want to confirm this booking? This cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              className="bg-MainOrange text-InputText font-bold py-2 px-4 rounded-full"
              onClick={confirmBooking}
            >
              Yes, Confirm
            </button>
            <button
              className="border-2 border-gray-400 text-gray-600 font-bold py-2 px-4 rounded-full"
              onClick={() => setConfirmOpen(false)}
            >
              Cancel
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Cancel Button */}
      <Dialog open={cancelOpen} onOpenChange={setCancelOpen}>
        <DialogTrigger asChild>
          <button className="flex justify-center border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas w-[60%] px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
            CANCEL
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel booking</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this booking? Any changes will be
              lost.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              className="bg-MainOrange text-InputText font-bold py-2 px-4 rounded-full"
              onClick={cancelBooking}
            >
              Yes, Cancel
            </button>
            <button
              className="border-2 border-gray-400 text-gray-600 font-bold py-2 px-4 rounded-full"
              onClick={() => setCancelOpen(false)}
            >
              Go Back
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HostConfirmButton;
