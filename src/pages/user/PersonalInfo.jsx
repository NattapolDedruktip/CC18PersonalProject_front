import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React, { useEffect, useRef, useState } from "react";
import cat from "../../assets/cat.svg";
import { AvatarFallback } from "@/components/ui/avatar";
import EditUserPersonalInfo from "@/src/components/EditUserPersonalInfo";
import useAuthStore from "@/src/stores/auth-store";
import { getAllUserInfo } from "@/src/api/auth";
import { toast } from "react-toastify";
import Resize from "react-image-file-resizer";
import { uploadProfile } from "@/src/api/userImage";

function PersonalInfo() {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [userImageForm, setUserImageForm] = useState({
    url: "",
    asset_id: "",
    public_id: "",
    secure_url: "",
  });
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    getAllUserInfo(token).then((result) => {
      console.log(result);
      setUserData(result.data.user);
      console.log("=================");

      // if it return promise  you can solve with 2 way
      // 1   wrap function  arrow other layer
      // 2   use .then
    });
  }, []);

  useEffect(() => {
    if (userImageForm.url) {
      console.log("Image form updated:", userImageForm);
    }
  }, [userImageForm]);

  // upload profile pic
  const fileInputRef = useRef(null);

  const hdlUploadPic = () => {
    fileInputRef.current.click();
  };

  const hdlPicChange = (e) => {
    // console.log("change");
    const file = e.target.files[0];
    if (file) {
      console.log("select file : ", file);
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
      (data) => {
        //endpoint

        uploadProfile(token, data)
          .then((resp) => {
            console.log(resp);
            setUserImageForm({
              url: resp.data.url,
              asset_id: resp.data.asset_id,
              public_id: resp.data.public_id,
              secure_url: resp.data.secure_url,
            });
            toast.success("Upload Profile Success!");
          })
          .catch((err) => {
            console.log(err);
          });
      },
      "base64"
    );
  };

  return (
    <div className=" mt-[11vh] bg-MyBg w-full h-[90vh] flex justify-center items-center text-white ">
      <div className="ml-60 flex flex-col gap-6 justify-center items-center w-2/5 h-fit  ">
        <div className=" outline outline-8 outline-MainOrange  bg-white w-[70%] rounded-full overflow-hidden ">
          <Avatar>
            <AvatarImage src={userData?.image || cat} />
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
          <button className="border-4 bg-MyBg border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-3 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
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
          <p>{userData.firstName}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            LAST NAME :{" "}
          </p>
          <p>{userData.lastName}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            EMAIL :{" "}
          </p>
          <p>{userData.email}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            DATE of Birth :{" "}
          </p>
          <p>{userData?.dateOfBirth || "-"}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            GENDER :{" "}
          </p>
          <p>{userData.gender}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            PAYMENT METHOD :{" "}
          </p>
          <p>{userData.paymentMethod}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-body text-MainOrange text-4xl font-bold">
            ROLE :{" "}
          </p>
          <p>{userData.role}</p>
        </div>
        <div>
          <EditUserPersonalInfo />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
