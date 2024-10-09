import React, { useState } from 'react'
import useAuthStore from '../stores/auth-store'




const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  role : ""
}


function Register() {

  //zustand
  const actionRegister = useAuthStore((state) => state.actionRegister)

  const [formError, setFormError] = useState({})



  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
  })

  const hdlOnChange = (e) => {
    console.log(e.target.name, e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const hdlUpdateMember = (e) => {

  }

  const hdlSubmit = (e) => {
    e.preventDefault()
    // console.log(form)

    // const error = validateRegister(form)
    // console.log(error)
    // if (error) {
    //   return setFormError(error);
    // }
    //step 1 validate with joi
    //step 2 send to back

    console.log(form)
    // actionRegister(form)

    setForm(initialState)

  }

  return (

    <div className="bg-MyBg h-[86vh] flex items-center justify-center">
      <div className="bg-MyBg border-8 border-MainOrange rounded-lg p-10">
        <h1 className="text-MainOrange text-6xl font-body font-bold mb-8 text-center">Register</h1>

        <form
          onSubmit={hdlSubmit}
          className="space-y-6">

          <div>
            <input
              name='email'
              value={form.email}
              onChange={hdlOnChange}
              type="email"
              placeholder="EMAIL"
              className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
            />

            {
              formError.email && (
                <span className='text-red-400 text-sm'>{formError.email}</span>
              )
            }

          </div>

          <div >
            <input
              name='password'
              value={form.password}
              onChange={hdlOnChange}
              type="password"
              placeholder="PASSWORD"
              className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
            />

            {
              formError.password && (
                <span className='text-red-400 text-sm'>{formError.password}</span>
              )
            }

          </div>

          <div >
            <input
              name='confirmPassword'
              value={form.confirmPassword}
              onChange={hdlOnChange}
              type="password"
              placeholder="CONFIRM PASSWORD"
              className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
            />

            {
              formError.confirmPassword && (
                <span className='text-red-400 text-sm'>{formError.confirmPassword}</span>
              )
            }


          </div>

          <select
            className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
            name='role'
            value={form.role}
            onChange={hdlOnChange}
          >
            <option value="" disabled >Select Role</option>
            <option value="USER">USER</option>
            <option value="HOST">HOST</option>
          </select>


          <div className="text-center">
            <button
              className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
            >
              Sign Up
            </button>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Register