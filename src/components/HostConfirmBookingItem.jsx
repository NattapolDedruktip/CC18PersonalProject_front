import React, { useEffect, useState } from "react";
import HostSlipFromUser from "./HostSlipFromUser";
import HostConfirmButton from "./HostConfirmButton";
import HostBookingDetail from "./HostBookingDetail";
import { getAllTransactionByUserId } from "../api/host";
import useAuthStore from "../stores/auth-store";

function HostConfirmBookingItem() {
  const token = useAuthStore((state) => state.token);

  const [allTransactions, setAllTransactions] = useState([]);

  const getAllTransaction = async () => {
    const resp = await getAllTransactionByUserId(token);
    setAllTransactions(resp.data);
  };

  useEffect(() => {
    getAllTransaction();
  }, []);

  // console.log(allTransactions[0].booking);
  return (
    <div className="flex flex-col gap-4">
      {allTransactions.map((transactions) => (
        <div
          key={transactions.id}
          className="border-4 border-MainOrange p-2 rounded-lg"
        >
          <div className="flex mx-auto w-[90%] my-5 h-[40vh]  justify-around items-center">
            <div className="w-[40%]">
              <HostSlipFromUser transactions={transactions} />
            </div>
            <div className="w-[35%]">
              <HostBookingDetail transactions={transactions} />
            </div>
            <div className="w-[25%]">
              <HostConfirmButton
                transactions={transactions}
                getAllTransaction={getAllTransaction}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HostConfirmBookingItem;
