import axios from "../config/axios";

export const register = async (form) =>
  await axios.post("/auth/register", form);

export const login = async (form) => await axios.post("/auth/login", form);

export const getUserInfo = async (token) => await axios.get("/user");

export const getHostInfo = async (token) => {
  return await axios.get("/host");
};

export const getAllUserInfo = async (token) => {
  return await axios.get("/user/all");
};
