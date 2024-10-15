import useAuthStore from "@/src/stores/auth-store";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

function SidebarHost() {
  const navigate = useNavigate();

  const actionLogout = useAuthStore((state) => state.actionLogout);

  const hdlLogout = () => {
    actionLogout();
    navigate("/");
  };
  return (
    <div className="z-10 fixed mt-[8vh] bg-MyBg flex flex-col justify-between h-[100vh]">
      <div className="flex flex-col justify-around flex-1 ">
        <NavLink
          end
          className={({ isActive }) =>
            isActive
              ? " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest text-MainOrange border-4 border-MainOrange"
              : " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest hover:text-MainOrange hover:border-4 border-MainOrange"
          }
          to={""}
        >
          My Hote
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest text-MainOrange border-4 border-MainOrange"
              : " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest hover:text-MainOrange hover:border-4 border-MainOrange"
          }
          to={"confirmBooking"}
        >
          Confirm Booking
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest text-MainOrange border-4 border-MainOrange"
              : " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest hover:text-MainOrange hover:border-4 border-MainOrange"
          }
          to={"hostHistory"}
        >
          History
        </NavLink>

        <div className="text-center">
          <button
            onClick={hdlLogout}
            className="flex gap-1 mx-auto border-4 my-3 border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
          >
            <LogOut size={36} />
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarHost;
