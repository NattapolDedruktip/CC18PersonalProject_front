import { getTransactionHistory } from "@/src/api/host";
import HostHistoryItem from "@/src/components/HostHistoryItem";
import useAuthStore from "@/src/stores/auth-store";
import React, { useEffect, useState } from "react";

function HostHistory() {
  const token = useAuthStore((state) => state.token);

  const [transactionHistory, setTransactionHistory] = useState([]);

  const getHistory = async () => {
    const resp = await getTransactionHistory(token);
    setTransactionHistory(resp.data);
  };

  useEffect(() => {
    getHistory();
  }, []);
  console.log(transactionHistory);
  return (
    <div className=" mt-[11vh] px-10 bg-MyBg w-full h-auto flex  flex-col  gap-5">
      <p className="flex justify-start text-body text-4xl font-bold text-MainOrange ml-40">
        History
      </p>
      {transactionHistory.map((history) => (
        <HostHistoryItem history={history} />
      ))}
    </div>
  );
}

export default HostHistory;
