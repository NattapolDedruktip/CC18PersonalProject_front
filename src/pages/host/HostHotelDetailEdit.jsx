import React, { useEffect, useRef, useState } from "react";
import HotelRoomPics from "../../components/HotelRoomPics";
import UserHotelDescription from "../../components/UserHotelDescription";
import UserHotelAvailableTime from "../../components/UserHotelAvailableTime";
import Map from "../../components/Map";
import useAuthStore from "@/src/stores/auth-store";
import HostUploadHotelPicButton from "@/src/components/HostUploadHotelPicButton";
import { useParams } from "react-router-dom";
import { getHoteInfo } from "@/src/api/host";
import { removeHotelPic } from "@/src/api/hostImage";
import { toast } from "react-toastify";
import HostAddAvailableTime from "@/src/components/HostAddAvailableTime";
import HostHotelAvailableTime from "@/src/components/HostHotelAvailableTime";
import HostUpdateDescription from "@/src/components/ui/HostUpdateDescription";

function HostHotelDetailEdit() {
  const { id } = useParams();
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const [hoteData, setHoteData] = useState();
  const [carouselPublicId, setCarouselPublicId] = useState();

  const [hoteImages, setHoteImages] = useState({
    url: "",
    asset_id: "",
    public_id: "",
    secure_url: "",
  });

  //uploadHotelPic
  const inputFileRef = useRef(null);

  const hdlUploadClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  //getAllPicIn carousel
  const getHoteInfoById = async (token, hoteId) => {
    const resp = await getHoteInfo(token, hoteId);
    // console.log(">>>>>>>>>>>>>>>>>>>>", resp.data);
    setHoteData(resp.data);
  };

  useEffect(() => {
    getHoteInfoById(token, id);
  }, []);

  //removeHotelPic

  const hdlRemovePic = async (carouselPublicId) => {
    // console.log(carouselPublicId);
    // console.log(token);
    const formRemove = {
      id: id,
      public_id: carouselPublicId,
    };
    // console.log("--------------", hoteData);
    await removeHotelPic(token, formRemove);
    await getHoteInfoById(token, id);
    toast.success("remove pic successfully !");
  };
  // console.log(hoteData);
  return (
    <div className="flex flex-col bg-MyBg ">
      <div className="h-[10vh] bg-MyBg">header</div>
      <div className="h-fit bg-MyBg flex ">
        <div className="w-full bg-MyBg h-fit flex justify-center items-center ">
          {/* real-component here */}
          <div className="h-fit  bg-MyBg flex flex-col justify-center items-center">
            <div className="h-[10vh] bg-MyBg"></div>
            <div className="text-InputBg bg-MyBg rounded-xl w-[80vw] h-fit flex flex-col border-4 border-MainOrange p-10">
              <div className="mx-auto text-7xl font-body font-bold text-MainOrange h-[10%] flex items-center ">
                {hoteData ? `${hoteData.hotelName}` : "Loading..."}
              </div>

              <div className="flex flex-1 ">
                <div className="flex-1  flex flex-col gap-5 justify-center items-center">
                  <HotelRoomPics
                    item={hoteData}
                    carouselPublicId={carouselPublicId}
                    setCarouselPublicId={setCarouselPublicId}
                  />
                  <div className="flex gap-4">
                    {/* upload pic */}
                    <button
                      onClick={hdlUploadClick}
                      className="border-4 border-MainOrange text-MainOrange text-base font-bold font-bebas px-5 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
                    >
                      Upload
                      <HostUploadHotelPicButton
                        hoteImages={hoteImages}
                        setHoteImages={setHoteImages}
                        inputRef={inputFileRef}
                        getHoteInfoById={getHoteInfoById}
                        hoteId={id}
                      />
                    </button>

                    <button
                      onClick={() => hdlRemovePic(carouselPublicId)}
                      className="border-4 border-MainOrange text-MainOrange text-base font-bold font-bebas px-5 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="ml-5 flex-1  flex flex-col justify-center items-center ">
                  <UserHotelDescription
                    hoteData={hoteData}
                    setHoteData={setHoteData}
                    getHoteInfoById={getHoteInfoById}
                  />

                  <div>
                    <HostUpdateDescription
                      getHoteInfoById={getHoteInfoById}
                      id={id}
                      hoteData={hoteData}
                      setHoteData={setHoteData}
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-2">
                  <HostHotelAvailableTime
                    hotelId={id}
                    setHoteData={setHoteData}
                    getHoteInfoById={getHoteInfoById}
                  />
                </div>
              </div>

              {/* <div className="mx-auto flex gap-5 h-[10%] items-center text-4xl font-body font-bold text-white p-5">
                <div>FOR MORE INFO :</div>
                <div>Hostcontact@#gmail.com</div>
                <button className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
                  EDIT HOST CONTACT
                </button>
              </div> */}

              <div className="bg-MyBg z-10">
                <Map hotelId={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostHotelDetailEdit;
