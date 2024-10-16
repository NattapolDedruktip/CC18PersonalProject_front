import React, { useEffect, useState } from "react";
import useAuthStore from "../stores/auth-store";
import { getUserInfo } from "../api/auth";
import LoadingToRedirect from "./loadingToRedirect";

function ProtectRouterUser({ element }) {
  const [ok, setOk] = useState(false);
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  // console.log(user.role);
  // console.log(token);

  useEffect(() => {
    if (user.role == "USER" && token) {
      // send to back
      getUserInfo(token)
        .then((resp) => setOk(true))
        .catch((err) => setOk(false));
    }
    //resp.data  = response from axios
  }, []);

  return ok ? element : <LoadingToRedirect />;
}

export default ProtectRouterUser;
