import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../stores/auth-store";
import validateLogin from "../utils/validatorLogin";

function Login() {
  const navigate = useNavigate();

  const [formError, setFormError] = useState({});

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //zustand
  const actionLogin = useAuthStore((state) => state.actionLogin);
  const user = useAuthStore((state) => state.user);
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
    console.log(error);

    if (error) {
      return setFormError(error);
    }

    //login

    await actionLogin(form);

    console.log(user.user.id);
    console.log(user.user.role);
    console.log(user.user.email);
    console.log(token);

    // if(role ==="HOST") {
    //     navigate("/admin")
    // }else{
    //     navigate("home/user")
    // }
  };

  return (
    <div className="bg-MyBg h-[86vh] flex items-center justify-center">
      <div className="bg-MyBg border-8 border-MainOrange rounded-lg p-10">
        <h1 className="text-MainOrange text-6xl font-body font-bold mb-8 text-center">
          LOG IN
        </h1>

        <form className="space-y-6" onSubmit={hdlSubmit}>
          <div>
            <input
              name="email"
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
