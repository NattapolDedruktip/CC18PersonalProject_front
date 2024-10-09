import { create } from "zustand";
import { login, register } from "../api/auth";
// import { toast } from "react-toastify";
import { createJSONStorage, persist } from "zustand/middleware";





const useAuthStore = create( persist(( set , get ) => ({
    user : null ,
    token : null ,

    actionRegister : async(form) => {
        try {
            const resp = await register(form);
            console.log("resp",resp.data)
            // toast.success(resp.data.message)
        } catch (err) {
            console.log(err.response.data.message)
            // toast.error(err.response.data.message)
        }
    },

    actionLogin : async (form) => {
        try {
            const resp = await login(form);
            console.log("resp",resp.data)
            // toast.success(resp.data.message)

            set({
                user : resp.data.user,
                token : resp.data.token,
            })

        } catch (err) {
            console.log(err.response.data.message)
            // toast.error(err.response.data.message)
        }
    },

    actionLogout : () => {
        localStorage.clear()

        set({
            user : null ,
            token : null
        })

    },


}),{
    name : "user-store" ,
    Storage : createJSONStorage(() => localStorage )
}))


export default useAuthStore