import axios from "axios";

export const uploadHotelPics = async (token, form) => {
  console.log(form);
  return axios.post(
    "http://localhost:8000/host/images",

    form,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const removeHotelPic = async (token, formRemove) => {
  console.log(formRemove);
  return axios.post("http://localhost:8000/host/removeImage", formRemove, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
