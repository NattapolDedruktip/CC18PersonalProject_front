import HostMyHoteItem from "@/src/components/HostMyhoteItem";
import React from "react";

function MyHote() {
  return (
    <div className=" mt-[11vh] px-10 bg-MyBg w-full h-auto flex  flex-col gap-5">
      <p className="flex justify-start text-body text-4xl font-bold text-MainOrange ml-40">
        My Hote
      </p>
      <HostMyHoteItem />
      <HostMyHoteItem />
      <div className="text-center">
        <button className=" border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
          CREATE NEW HOTE +
        </button>
      </div>
    </div>
  );
}

export default MyHote;
