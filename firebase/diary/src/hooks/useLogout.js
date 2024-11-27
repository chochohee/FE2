import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { appAuth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const [error, setError] = useState(null);

  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const logout = () => {
    setError(null);
    setIsPending(true);
    signOut(appAuth)
      .then(() => {
        dispatch({ type: "logout" });
        setIsPending(false);
      })
      .catch((error) => {
        setError(error);
        setIsPending(false);
      });
  };

  return { logout, error, isPending };
};
