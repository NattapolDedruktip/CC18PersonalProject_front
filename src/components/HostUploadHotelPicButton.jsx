import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Resize from "react-image-file-resizer";
import { uploadHotelPics } from "../api/hostImage";
import useAuthStore from "../stores/auth-store";
import { useParams } from "react-router-dom";

function HostUploadHotelPicButton({
  inputRef,
  hoteImages,
  setHoteImages,
  getHoteInfoById,
  hoteId,
}) {
  const [isLoading, setIsloading] = useState(false);
  const { id } = useParams();

  const token = useAuthStore((state) => state.token);
  useEffect(() => {
    if (hoteImages.url) {
      console.log("hote images updated:", hoteImages);
    }
  }, [hoteImages]);

  const hdlOnChange = (e) => {
    //how to fix that cant upload more than 3 pic
    // how to manage data ??  should it store in zustand  but there is more that 1 hote  , in obj form ?? ?
    const files = e.target.files;
    if (files) {
      setIsloading();
      let allFiles = hoteImages;
      for (let i = 0; i < files.length; i++) {
        // console.log(files[i]);

        //validate
        const file = files[i];
        if (!file.type.startsWith("image/")) {
          toast.error(`File ${file.name} is not PHOTO`);
          continue;
        }

        Resize.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (data) => {
            const body = {
              id: id,
              data: data,
            };
            //endpoint  : how to change url along with hoteId
            // console.log("data", data);
            uploadHotelPics(token, body)
              .then((resp) => {
                console.log(resp);
                getHoteInfoById(token, hoteId);
              })
              .catch((err) => {
                console.log(err);
              });
          },
          "base64"
        );
      }
    }
  };

  return (
    <div>
      <input
        onChange={hdlOnChange}
        ref={inputRef}
        type="file"
        hidden
        multiple
      />
    </div>
  );
}

export default HostUploadHotelPicButton;
