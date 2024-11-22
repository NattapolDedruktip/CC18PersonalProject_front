import axios from "../config/axios";

export const uploadHotelPics = async (token, form) => {
  console.log(form);
  return axios.post(
    "/host/images",

    form
  );
};

export const removeHotelPic = async (token, formRemove) => {
  console.log(formRemove);
  return axios.post("/host/removeImage", formRemove, {});
};
