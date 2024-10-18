import React from "react";
import { useNavigate } from "react-router-dom";

function HostHotelDetailManagement({ id, userId }) {
  const navigate = useNavigate();

  const newURL = `http://localhost:5173/host/hote/${id}`;

  const hdlEdit = () => {
    console.log("EDIT hoteId", id);
  };

  const hdlDelete = () => {
    console.log("DELETE hoteId", id);
  };
  return (
    <div className="flex flex-col gap-5">
      <button
        onClick={hdlEdit}
        className="border-4 border-MainOrange text-MainOrange text-3xl font-bold font-bebas w-[60%] px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
      >
        Edit
      </button>
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
