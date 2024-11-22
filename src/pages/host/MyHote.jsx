import CreateHote from "../../components/CreateHote";
import HostMyHoteItem from "../../components/HostMyHoteItem";
import useAuthStore from "../../stores/auth-store";
import useHostStore from "../../stores/host-store";
import React, { useState, useEffect } from "react";

function MyHote() {
  const hoteList = useHostStore((state) => state.hoteList);
  const token = useAuthStore((state) => state.token);
  const actionHostGetAllHote = useHostStore(
    (state) => state.actionHostGetAllHote
  );

  useEffect(() => {
    // console.log(token);
    actionHostGetAllHote(token);

    // console.log(">>>>>>>>>>>>>>>>");
  }, []);

  // console.log("hoteList", hoteList);
  return (
    <div className=" mt-[11vh] px-10 bg-MyBg w-full h-auto flex  flex-col gap-5">
      <p className="flex justify-start text-body text-4xl font-bold text-MainOrange ml-40">
        My Hote
      </p>
      {hoteList.map((item) => (
        <HostMyHoteItem key={item.id} item={item} />
      ))}
      <div className="text-center">
        <CreateHote />
      </div>
    </div>
  );
}

export default MyHote;
