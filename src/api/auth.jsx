import axios from "axios";

export const register = async (form) =>
  await axios.post("http://localhost:8000/auth/register", form);

export const login = async (form) =>
  await axios.post("http://localhost:8000/auth/login", form);

export const getUserInfo = async (token) =>
  await axios.get("http://localhost:8000/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getHostInfo = async (token) => {
  return await axios.get("http://localhost:8000/host", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllUserInfo = async (token) => {
  return await axios.get("http://localhost:8000/user/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
