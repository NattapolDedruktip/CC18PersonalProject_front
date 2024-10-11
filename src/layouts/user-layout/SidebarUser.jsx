import useAuthStore from "@/src/stores/auth-store";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

function SidebarUser() {
  const navigate = useNavigate();

  const actionLogout = useAuthStore((state) => state.actionLogout);

  const hdlLogout = () => {
    actionLogout();
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-between h-[90vh]">
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
          my info
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest text-MainOrange border-4 border-MainOrange"
              : " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest hover:text-MainOrange hover:border-4 border-MainOrange"
          }
          to={"myBooking"}
        >
          My Booking
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest text-MainOrange border-4 border-MainOrange"
              : " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest hover:text-MainOrange hover:border-4 border-MainOrange"
          }
          to={"bookingHistory"}
        >
          Booking History
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest text-MainOrange border-4 border-MainOrange"
              : " mx-auto w-[80%] text-InputBg text-2xl font-bebas px-10 py-3 rounded-full font-bold tracking-widest hover:text-MainOrange hover:border-4 border-MainOrange"
          }
          to={"waitForPayment"}
        >
          Wait for payment
        </NavLink>
      </div>

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
  );
}

export default SidebarUser;
