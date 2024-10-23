import axios from "axios";

export const cancelBooking = async (token, bookingId) => {
  console.log(bookingId);
  return await axios.delete(
    `http://localhost:8000/user/cancelBooking/` + `${bookingId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getAllBookingHistory = async (token, userId) => {
  // console.log(userId);
  return await axios.get(
    `http://localhost:8000/user/bookingHistory/` + `${userId}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
