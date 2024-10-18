import axios from "axios";

export const uploadProfile = async (token, form) => {
  // console.log(form, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  //change form to  {image : form}
  return axios.post(
    "http://localhost:8000/user/profileImage",
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
