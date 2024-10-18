import { create } from "zustand";
import { login, register } from "../api/auth";
import { toast } from "react-toastify";
import { createJSONStorage, persist } from "zustand/middleware";
import { getAllHote } from "../api/host";

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,

      actionRegister: async (form) => {
        try {
          const resp = await register(form);
          console.log("resp", resp.data);
          toast.success(resp.data.message);
        } catch (err) {
          console.log(err.response.data.message);
          toast.error(err.response.data.message);
        }
      },

      actionLogin: async (form) => {
        try {
          const resp = await login(form);
          console.log("resp", resp.data);
          toast.success(resp.data.message);

          set({
            user: resp.data.payload,
            token: resp.data.token,
          });

          return resp;
        } catch (err) {
          console.log(err.response.data.message);
          toast.error(err.response.data.message);
        }
      },

      actionHostGetAllHote: async (token) => {
        try {
          const resp = await getAllHote(token);
          console.log("GET ALL HOST", resp.data);
          toast.success("Get all Hote successfully!");
          return resp.data;
        } catch (err) {
          console.log(err);
          toast.error(err);
        }
      },

      actionLogout: () => {
        localStorage.clear();

        set({
          user: null,
          token: null,
        });
      },
    }),
    {
      name: "user-store",
      Storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
