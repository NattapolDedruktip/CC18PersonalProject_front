import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HostHotelDetailManagement({ id, userId }) {
  const navigate = useNavigate();

  const hdlDelete = () => {
    console.log("DELETE hoteId", id);
  };
  return (
    <div className="flex flex-col gap-5">
      <Link
        to={`/host/hote/${id}`}
        className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas w-[60%] px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
      >
        Edit
      </Link>
      <button
        onClick={hdlDelete}
        className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas w-[60%] px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
      >
        Delete
      </button>
    </div>
  );
}

export default HostHotelDetailManagement;
