import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React, { useEffect, useRef, useState } from "react";
import cat from "../../assets/cat.svg";
import { AvatarFallback } from "@/components/ui/avatar";
import EditUserPersonalInfo from "@/src/components/EditUserPersonalInfo";
import useAuthStore from "@/src/stores/auth-store";
import { getAllUserInfo } from "@/src/api/auth";
import { toast } from "react-toastify";
import Resize from "react-image-file-resizer";
import { deleteProfile, uploadProfile } from "@/src/api/userImage";

function PersonalInfo() {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  const getUserInfo = async () => {
    const resp = await getAllUserInfo(token);
    await setUserData(resp.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  console.log(userData);

  // upload profile pic
  const fileInputRef = useRef(null);

  const hdlUploadPic = () => {
    fileInputRef.current.click();
  };

  const hdlPicChange = (e) => {
    // console.log("change");
    const file = e.target.files[0];
    if (file) {
      // console.log("select file : ", file);
      setIsloading(true);
    }

    if (!file.type.startsWith("image/")) {
      toast.error(`File ${file.name} is not PICTURE`);
    }

    //image resizer
    Resize.imageFileResizer(
      file,
      720,
      720,
      "JPEG",
      100,
      0,
      async (data) => {
        //endpoint

        await uploadProfile(token, data)
          .then((resp) => {
            // console.log(resp);

            toast.success("Upload Profile Success!");
          })
          .catch((err) => {
            console.log(err);
          });

        await getAllUserInfo(token).then((result) => {
          // console.log(result);
          setUserData(result.data);
        });
      },
      "base64"
    );
  };

  const onDelete = async (publicId) => {
    console.log("delete", publicId);
    await deleteProfile(token, publicId);
    await getAllUserInfo(token).then((result) => {
      console.log(result);
      setUserData(result.data.user);
    });
  };
  // console.log(userData);
  console.log(token);
  return (
    <div className=" mt-[11vh] bg-MyBg w-full h-[90vh] flex justify-center items-center text-white ">
      <div className="ml-60 flex flex-col gap-6 justify-center items-center w-2/5 h-fit  ">
        <div className=" outline outline-8 outline-MainOrange  bg-white w-[70%] rounded-full overflow-hidden ">
          <Avatar>
            <AvatarImage src={userData?.userImage || cat} />
            <AvatarFallback>{`${userData.firstName}   ${userData.lastName}`}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex gap-6">
          {/* upload button */}
          <button
            onClick={hdlUploadPic}
            className=" border-4 bg-MyBg border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-3 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
          >
            Upload
            <input
              ref={fileInputRef}
              onChange={hdlPicChange}
              className="hidden"
              type="file"
              // hidden
            />
          </button>
          {/* Delete button */}
          <button
            onClick={() => onDelete(userData.imagePublicId)}
            className="border-4 bg-MyBg border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-3 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
          >
            Delete
          </button>
          {/* input upload file */}
        </div>
      </div>
      <div className="flex  flex-col  justify-around items-center w-3/5 h-full">
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            FIRST NAME :{" "}
          </p>
          <p className="text-white text-4xl font-body ">{userData.firstName}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            LAST NAME :{" "}
          </p>
          <p className="text-white text-4xl font-body ">{userData.lastName}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            EMAIL :{" "}
          </p>
          <p className="text-white text-4xl font-body ">{userData.email}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            DATE of Birth :{" "}
          </p>
          <p className="text-white text-4xl font-body ">
            {userData?.dateOfBirth || "-"}
          </p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            GENDER :{" "}
          </p>
          <p className="text-white text-4xl font-body ">{userData.gender}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            PAYMENT METHOD :{" "}
          </p>
          <p className="text-white text-4xl font-body ">
            {userData.paymentMethod}
          </p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            ROLE :{" "}
          </p>
          <p className="text-white text-4xl font-body ">{userData.role}</p>
        </div>
        <div>
          <EditUserPersonalInfo getUserInfo={getUserInfo} />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
