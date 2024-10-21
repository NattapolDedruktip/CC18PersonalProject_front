import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../stores/auth-store";
import useHostStore from "../stores/host-store";
import { deleteHote } from "../api/host";
import { toast } from "react-toastify";

function HostHotelDetailManagement({ id, userId }) {
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);
  const actionHostGetAllHote = useHostStore(
    (state) => state.actionHostGetAllHote
  );
  const hdlDelete = async () => {
    // console.log("DELETE hoteId", id);
    await deleteHote(token, id);
    await actionHostGetAllHote(token);
    toast.success("delete Hote Successfully!");
  };
  return (
    <div className="flex flex-col gap-5">
      <Link
        to={`/host/hote/${id}`}
        className="border-4 flex justify-center border-MainOrange text-MainOrange text-2xl font-bold font-bebas w-[80%] px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
      >
        Edit
      </Link>
      <button
        onClick={hdlDelete}
        className="border-4 flex justify-center border-MainOrange text-MainOrange text-2xl font-bold font-bebas w-[80%] px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
      >
        Delete
      </button>
    </div>
  );
}

export default HostHotelDetailManagement;
