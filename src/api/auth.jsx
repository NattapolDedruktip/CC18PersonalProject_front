import axios from "axios";

export const register = (form) => 
    axios.post("http://localhost:8000/auth/register",form)

export const login = (form) =>
    axios.post("http://localhost:8000/auth/login",form)