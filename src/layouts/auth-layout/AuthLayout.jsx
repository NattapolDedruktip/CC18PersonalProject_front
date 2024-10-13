import React from 'react'
import AuthHeader from './AuthHeader'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <div>
            <AuthHeader />
            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default AuthLayout