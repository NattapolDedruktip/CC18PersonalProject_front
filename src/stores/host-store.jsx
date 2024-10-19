import React from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "react-toastify";
import { getAllHote } from "../api/host";

const useHostStore = create(
  persist(
    (set, get) => ({
      hoteList: [],

      actionHostGetAllHote: async (token) => {
        try {
          const resp = await getAllHote(token);
          // console.log("GET ALL HOST", resp.data);
          set({
            hoteList: resp.data,
          });
          // toast.success("Get all Hote successfully!");
          return resp.data;
        } catch (err) {
          console.log(err);
          toast.error(err);
        }
      },
    }),
    {
      name: "host-store",
      Storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useHostStore;
