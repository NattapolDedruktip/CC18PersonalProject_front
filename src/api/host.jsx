import axios from "axios";

export const createHote = async (token, form) => {
  return await axios.post("http://localhost:8000/host/hote", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteHote = async (token, id) => {
  // console.log(token, id, "=============================");
  return await axios.delete(
    `http://localhost:8000/host/removeHote/` + `${id}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getAllHote = (token) => {
  // console.log(token);
  return axios.get(
    "http://localhost:8000/host/getAllHote",

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getHoteInfo = async (token, hoteId) => {
  // console.log(hoteId, "0000000000");
  return await axios.get("http://localhost:8000/host/getHoteInfo/" + hoteId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getHotelAvailableTimebyId = async (token, hoteId) => {
  // console.log(hoteId);
  return await axios.get(
    "http://localhost:8000/host/getHoteAvailableTime/" + hoteId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createAvailableTime = async (token, form) => {
  return await axios.post(
    "http://localhost:8000/host/createAvailableTime",
    form,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getAvailableTimeById = async (token, AvailableTimeId) => {
  return await axios.get(
    "http://localhost:8000/host/getHoteAvailableTimeById/" + AvailableTimeId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const removeAvailableTime = async (token, AvailableTimeId) => {
  return await axios.delete(
    "http://localhost:8000/host/removeAvailableTime/" + AvailableTimeId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const editHoteDescription = async (token, description, hotelId) => {
  // console.log(token);
  // console.log(description);
  return await axios.patch(
    "http://localhost:8000/host/hote/" + hotelId,
    { description },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//map api
export const createLatLng = async (token, latLng, hotelId) => {
  // console.log(latLng);
  return await axios.patch(
    "http://localhost:8000/host/hote/createLatLng/" + hotelId,
    { latLng },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getEveryHoteLatLng = async (token) => {
  return await axios.get("http://localhost:8000/host/hote/getAllLatLng", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//booking
export const createBooking = async (token, availableTimeItem) => {
  // console.log(availableTimeItem);
  return await axios.post(
    "http://localhost:8000/user/createBooking",
    availableTimeItem,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getMyBookingByUSerId = async (token, userId) => {
  return await axios.get("http://localhost:8000/user/getMyBooking", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllTransactionByUserId = async (token) => {
  return await axios.get("http://localhost:8000/host/getAllTransactions", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const confirmTransaction = async (token, form) => {
  // console.log(form);
  return await axios.patch(
    "http://localhost:8000/host/confirmTransaction",
    form,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const cancelTransaction = async (token, form) => {
  return await axios.patch(
    "http://localhost:8000/host/cancelTransaction",
    form,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getTransactionHistory = async (token) => {
  return await axios.get("http://localhost:8000/host/transactionHistory", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
