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
