import React, { useEffect, useState } from "react";
import useAuthStore from "../stores/auth-store";
import { useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import cat from "../assets/cat.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAllUserInfo } from "../api/auth";

function HeaderAvatar() {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const actionLogout = useAuthStore((state) => state.actionLogout);
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    getAllUserInfo(token).then((result) => {
      setUserData(result.data.user);
    });
  }, []);
  const hdlLogout = () => {
    actionLogout();
    navigate("/");
  };
  return (
    <div className="flex gap-4 ">
      <div className="flex justify-center items-center text-4xl text-bebas font-bold text-InputBg ">
        {user.role} : {userData.firstName} {userData.lastName}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="h-[104px] flex border-red-100">
            <div className="flex items-center">
              <Avatar className="w-20 h-20 bg-blue-50">
                <AvatarImage src={userData.image || cat} />
                <AvatarFallback>{"User's Profile"}</AvatarFallback>
              </Avatar>
            </div>

            <div>
              <AiFillCaretDown color="white" />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-MainOrange">
          <DropdownMenuItem>
            <div
              onClick={() => {
                navigate("/userInfo");
              }}
              className="flex justify-center bg-MyBg w-full text-MainOrange text-bebas font-bold py-2 px-3 cursor-pointer rounded-sm hover:bg-neutral-700 hover:duration-200 active:bg-green-400"
            >
              Account
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div
              onClick={hdlLogout}
              className="flex justify-center bg-MyBg w-full text-MainOrange text-bebas font-bold py-2 px-3 cursor-pointer rounded-sm hover:bg-neutral-700 hover:duration-200 active:bg-green-400"
            >
              LogOut
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default HeaderAvatar;
