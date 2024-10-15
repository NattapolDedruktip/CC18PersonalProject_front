import React from "react";

function HostConfirmButton() {
  return (
    <div className="flex flex-col gap-5">
      <button className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas w-[60%] px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
        CONFIRM
      </button>
      <button className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas w-[60%] px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
        CANCEL
      </button>
    </div>
  );
}

export default HostConfirmButton;
