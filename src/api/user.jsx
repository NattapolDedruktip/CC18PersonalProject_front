import axios from "../config/axios";

export const cancelBooking = async (token, bookingId) => {
  console.log(bookingId);
  return await axios.delete(`/user/cancelBooking/` + `${bookingId}`);
};

export const getAllBookingHistory = async (token, userId) => {
  // console.log(userId);
  return await axios.get(`/user/bookingHistory/` + `${userId}`);
};

export const editProfile = async (token, userId, form) => {
  console.log(token);
  return await axios.patch(`/user/editProfile/` + `${userId}`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
