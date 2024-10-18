import axios from "axios";

export const uploadHotelPics = async (token, form) => {
  return axios.post(
    "http://localhost:8000/host/hote/77",
    {
      image: form,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
