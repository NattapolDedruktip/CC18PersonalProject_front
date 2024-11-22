import axios from "../config/axios";

export const uploadProfile = async (token, form) => {
  // console.log(form, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  //change form to  {image : form}
  return axios.post("/user/profileImage", {
    image: form,
  });
};

export const deleteProfile = async (token, publicId) => {
  return await axios.post("/user/removeProfileImage", { publicId });
};

export const uploadPaymentSlip = async (token, form) => {
  console.log(form);
  return axios.post("/user/uploadSlip", form);
};
