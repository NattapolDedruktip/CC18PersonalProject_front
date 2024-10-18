import axios from "axios";

export const createHote = async (token, form) => {
  return await axios.post("http://localhost:8000/host/hote", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllHote = async (token) => {
  console.log(token);
  return await axios.get(
    "http://localhost:8000/host/getAllHote",

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
