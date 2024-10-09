import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../stores/auth-store';

function Login() {

    const navigate =useNavigate()

    const [form , setForm] = useState({
        email : "" ,
        password : "",
    });

    const  actionLogin = useAuthStore( ( state )=> state.actionLogin)

    const hdlChange = (e) => {
        console.log(e.target.name, e.target.value)
        setForm({
            ...form ,
            [e.target.name] : [e.target.name]
        })
    }

    const hdlSubmit = async (e) => {
        e.preventDefault()
        // const role = await actionLogin(form)
        console.log("Role :" ,role )

        // if(role ==="ADMIN") {
        //     navigate("/admin")
        // }else{
        //     navigate("home/user")
        // }

        console.log(form)
    }

    return (

        <div className="bg-MyBg h-[86vh] flex items-center justify-center">
            <div className="bg-MyBg border-8 border-MainOrange rounded-lg p-10">
                <h1 className="text-MainOrange text-6xl font-body font-bold mb-8 text-center">LOG IN</h1>

                <form  className="space-y-6">
                    <div >
                        <input
                            name='email'
                
                            onChange={hdlChange}
                            type="email"
                            placeholder="EMAIL"
                            className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
                        />
                    </div>

                    <div >
                        <input
                            name='password'
                            
                            onChange={hdlChange}
                            type="password"
                            placeholder="PASSWORD"
                            className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
                        >
                            LOG IN
                        </button>
                    </div>
                    <div className='opacity-50 text-white text-center font-body'>
                        No account ?
                        <Link to={"/register"} className='text-InputBg'> Create one </Link>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Login