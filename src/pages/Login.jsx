import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../stores/auth-store";
import validateLogin from "../utils/validatorLogin";

function Login() {
  const navigate = useNavigate();

  const [formError, setFormError] = useState({});

  const [form, setForm] = useState({
    email: "anddy@gmail.com",
    password: "123456",
  });

  //zustand
  const user = useAuthStore((state) => state.user);
  const actionLogin = useAuthStore((state) => state.actionLogin);
  const token = useAuthStore((state) => state.token);

  const hdlChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    //validate with joi
    const error = validateLogin(form);
    console.log(error, "<<<<<");

    if (error) {
      setFormError(error);
      alert("Email or Password is Invalid!!");
      return;
    }

    //login

    const resp = await actionLogin(form);
    console.log("resp", resp.data.payload.role);
    console.log("=============");

    const role = resp.data.payload.role;

    if (role === "HOST") {
      navigate("/host");
    } else {
      navigate("/user/search");
    }
  };

  return (
    <div className="bg-MyBg h-[100vh] flex items-center justify-center">
      <div className="mb-[13vh] bg-MyBg border-8 border-MainOrange rounded-lg p-10">
        <h1 className="text-MainOrange  text-6xl font-body font-bold mb-8 text-center">
          LOG IN
        </h1>

        <form className="space-y-6" onSubmit={hdlSubmit}>
          <div>
            <input
              name="email"
              value={form.email}
              onChange={hdlChange}
              type="email"
              placeholder="EMAIL"
              className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
            />
          </div>

          {formError.email && (
            <span className="text-red-400 text-sm">{formError.email}</span>
          )}

          <div>
            <input
              name="password"
              value={form.password}
              onChange={hdlChange}
              type="password"
              placeholder="PASSWORD"
              className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
            />
          </div>

          {formError.password && (
            <span className="text-red-400 text-sm">{formError.password}</span>
          )}

          <div className="text-center">
            <button className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
              LOG IN
            </button>
          </div>
          <div className="opacity-50 text-white text-center font-body">
            No account ?
            <Link to={"/register"} className="text-InputBg">
              {" "}
              Create one{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
