import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function UserPaidHistory({ history }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl font-bold text-body text-InputBg">
        {`Payment is complete (${history.price} ฿)`}
      </div>

      <Dialog>
        <DialogTrigger>
          <button className="flex justify-center border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas w-full px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
            {"Check - In"}
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>QR for Check-in</DialogTitle>
            <DialogDescription>
              This QR code can be used for check-in at the hotel you booked.
            </DialogDescription>
          </DialogHeader>
          <img
            src="https://blog.tcea.org/wp-content/uploads/2022/05/qrcode_tcea.org-1.png"
            alt="QR code for hotel check-in"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UserPaidHistory;
