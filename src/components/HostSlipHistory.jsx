import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function HostSlipHistory({ history }) {
  const slipImg = history.secure_url;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-fit max-w-sm h-[40vh] mx-16 border overflow-hidden border-4 border-MainOrange">
      {/* DialogTrigger handles the click to open the modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <img
            className="w-fit cursor-pointer"
            src={slipImg}
            alt="Transaction Slip"
          />
        </DialogTrigger>

        {/* Modal content with dynamic width */}
        <DialogContent className="p-0 w-auto max-w-[90vw] max-h-[90vh] flex justify-center items-center">
          <img
            className="w-auto h-auto max-w-full max-h-full"
            src={slipImg}
            alt="Full-size Transaction Slip"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HostSlipHistory;
