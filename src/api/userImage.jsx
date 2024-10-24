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

export const deleteProfile = async (token, publicId) => {
  return await axios.post(
    "http://localhost:8000/user/removeProfileImage",
    { publicId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const uploadPaymentSlip = async (token, form) => {
  console.log(form);
  return axios.post("http://localhost:8000/user/uploadSlip", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
