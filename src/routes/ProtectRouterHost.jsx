import React, { useEffect, useState } from "react";
import useAuthStore from "../stores/auth-store";
import { getHostInfo } from "../api/auth";
import LoadingToRedirect from "./LoadingToRedirect";

function ProtectRouterHost({ element }) {
  const [ok, setOk] = useState(false);
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  // console.log(user.role);
  // console.log(token);

  useEffect(() => {
    if (user.role == "HOST" && token) {
      // send to back
      getHostInfo(token)
        .then((resp) => setOk(true))
        .catch((err) => setOk(false));
    }
    //resp.data  = response from axios
  }, []);

  return ok ? element : <LoadingToRedirect />;
}

export default ProtectRouterHost;
