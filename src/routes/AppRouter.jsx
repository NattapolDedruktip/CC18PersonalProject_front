import React from 'react'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import AuthLayout from '../layouts/auth-layout/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Unauthorization from '../pages/Unauthorization'
import PageNotFound from '../pages/PageNotFound'



const router = createBrowserRouter([
    {
        path : "/",
        element : <AuthLayout/>,
        children : [
            {index : true , element : <Login/> },
            {path : "register" , element : <Register/> } ,
            {path : "unauthorization" ,element : <Unauthorization/>  } ,
            {path : "*" , element : <PageNotFound/> }

        ],

    },

    
])


function AppRouter() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default AppRouter