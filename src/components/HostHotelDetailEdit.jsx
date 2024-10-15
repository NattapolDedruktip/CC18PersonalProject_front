import React from "react";
import HotelRoomPics from "./HotelRoomPics";
import UserHotelDescription from "./UserHotelDescription";
import UserHotelAvailableTime from "./UserHotelAvailableTime";
import Map from "./Map";

function HostHotelDetailEdit() {
  return (
    <div className="flex flex-col bg-MyBg">
      <div className="h-[10vh] bg-MyBg">header</div>
      <div className="h-[100vh] bg-MyBg flex ">
        <div className="w-full bg-MyBg h-fit flex justify-center items-center ">
          {/* real-component here */}
          <div className="h-fit  bg-MyBg flex flex-col justify-center items-center">
            <div className="h-[10vh] bg-MyBg"></div>
            <div className="text-InputBg bg-MyBg rounded-xl w-[80vw] h-fit flex flex-col border-4 border-MainOrange p-10">
              <div className="mx-auto text-7xl font-body font-bold text-MainOrange h-[10%] flex items-center ">
                Hotel Name
              </div>
              <div className="flex flex-1 ">
                <div className="flex-1  flex flex-col gap-5 justify-center items-center">
                  <HotelRoomPics />
                  <div className="flex gap-4">
                    <button className="border-4 border-MainOrange text-MainOrange text-base font-bold font-bebas px-5 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
                      Upload
                    </button>
                    <button className="border-4 border-MainOrange text-MainOrange text-base font-bold font-bebas px-5 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="ml-5 flex-1  flex flex-col justify-center items-center ">
                  <UserHotelDescription />

                  <button className="border-4 border-MainOrange text-MainOrange text-base font-bold font-bebas px-5 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
                    Update
                  </button>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-2">
                  <UserHotelAvailableTime />
                  <div className="flex gap-2">
                    <button className="border-4 border-MainOrange text-MainOrange text-base font-bold font-bebas px-5 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
                      Add
                    </button>
                    <button className="border-4 border-MainOrange text-MainOrange text-base font-bold font-bebas px-5 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
                      Update
                    </button>
                    <button className="border-4 border-MainOrange text-MainOrange text-base font-bold font-bebas px-5 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              <div className="mx-auto flex gap-5 h-[10%] items-center text-4xl font-body font-bold text-white p-5">
                <div>FOR MORE INFO :</div>
                <div>Hostcontact@#gmail.com</div>
                <button className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
                  EDIT HOST CONTACT
                </button>
              </div>

              <div>
                <Map />
                <button className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
                  Pin your Hote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostHotelDetailEdit;
