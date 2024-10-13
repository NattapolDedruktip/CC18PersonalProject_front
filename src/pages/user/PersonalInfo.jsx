import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import cat from "../../assets/cat.svg";
import { AvatarFallback } from "@/components/ui/avatar";
import EditUserPersonalInfo from "@/src/components/EditUserPersonalInfo";

function PersonalInfo() {
  return (
    <div className=" bg-MyBg w-full h-[90vh] flex justify-center items-center text-white">
      <div className="flex flex-col gap-6 justify-center items-center w-2/5 h-full">
        <div className=" outline outline-8 outline-MainOrange  bg-white w-[70%] rounded-full overflow-hidden ">
          <Avatar>
            <AvatarImage src={cat} />
            <AvatarFallback>{"User's Profile"}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex gap-6">
          <button className="border-4 bg-MyBg border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-3 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
            Upload
          </button>
          <button className="border-4 bg-MyBg border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-3 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
            Delete
          </button>
        </div>
      </div>
      <div className="  flex  flex-col  justify-around items-center w-3/5 h-full">
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            FIRST NAME :{" "}
          </p>
          <p>{"USER's fisrtName"}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            LAST NAME :{" "}
          </p>
          <p>{"USER's LastName"}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            EMAIL :{" "}
          </p>
          <p>{"USER's Email"}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            DATE of Birth :{" "}
          </p>
          <p>{"USER's DOB"}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            GENDER :{" "}
          </p>
          <p>{"USER's GENDER"}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            PAYMENT METHOD :{" "}
          </p>
          <p>{"USER's PAYMENTMETHOD"}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            ROLE :{" "}
          </p>
          <p>{"USER's Role"}</p>
        </div>
        <div>
          <EditUserPersonalInfo />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
