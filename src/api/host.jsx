import axios from "../config/axios";

export const createHote = async (token, form) => {
  return await axios.post("/host/hote", form);
};

export const deleteHote = async (token, id) => {
  // console.log(token, id, "=============================");
  return await axios.delete(`/host/removeHote/` + `${id}`);
};

export const getAllHote = (token) => {
  // console.log(token);
  return axios.get("/host/getAllHote");
};

export const getHoteInfo = async (token, hoteId) => {
  // console.log(hoteId, "0000000000");
  return await axios.get("/host/getHoteInfo/" + hoteId);
};

export const getHotelAvailableTimebyId = async (token, hoteId) => {
  // console.log(hoteId);
  return await axios.get("/host/getHoteAvailableTime/" + hoteId);
};

export const createAvailableTime = async (token, form) => {
  return await axios.post("/host/createAvailableTime", form);
};

export const getAvailableTimeById = async (token, AvailableTimeId) => {
  return await axios.get("/host/getHoteAvailableTimeById/" + AvailableTimeId);
};

export const removeAvailableTime = async (token, AvailableTimeId) => {
  return await axios.delete("/host/removeAvailableTime/" + AvailableTimeId);
};

export const editHoteDescription = async (token, description, hotelId) => {
  // console.log(token);
  // console.log(description);
  return await axios.patch("/host/hote/" + hotelId, { description });
};

//map api
export const createLatLng = async (token, latLng, hotelId) => {
  // console.log(latLng);
  return await axios.patch("/host/hote/createLatLng/" + hotelId, { latLng });
};

export const getEveryHoteLatLng = async (token) => {
  return await axios.get("/host/hote/getAllLatLng");
};

//booking
export const createBooking = async (token, availableTimeItem) => {
  // console.log(availableTimeItem);
  return await axios.post("/user/createBooking", availableTimeItem);
};

export const getMyBookingByUSerId = async (token, userId) => {
  return await axios.get("/user/getMyBooking/");
};

export const getAllTransactionByUserId = async (token) => {
  return await axios.get("/host/getAllTransactions");
};

export const confirmTransaction = async (token, form) => {
  // console.log(form);
  return await axios.patch("/host/confirmTransaction", form);
};

export const cancelTransaction = async (token, form) => {
  return await axios.patch("/host/cancelTransaction", form);
};

export const getTransactionHistory = async (token) => {
  return await axios.get("/host/transactionHistory");
};
