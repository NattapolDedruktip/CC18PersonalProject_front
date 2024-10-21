import React from "react";

function UserHotelDescription({ hoteData, setHoteData, getHoteInfoById }) {
  return (
    <div className="flex flex-col gap-10 items-center p-5  h-[70%]">
      <div className="mx-auto text-4xl font-body font-bold text-MainOrange">
        Description
      </div>
      <p className="text-white text-body text-xl">
        {hoteData ? `${hoteData.description}` : "Loading..."}
      </p>
    </div>
  );
}

export default UserHotelDescription;
