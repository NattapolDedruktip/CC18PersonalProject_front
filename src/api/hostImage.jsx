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
