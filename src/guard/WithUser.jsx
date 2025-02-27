import React, { useEffect } from "react";
import { Redirect } from "expo-router";
import useUserActions from "../store/hooks/useUserActions";

export default function WithUser({ children }) {
  const { userReducer } = useUserActions();

  useEffect(() => {
    console.log("WithUser userReducer:", userReducer);
  }, [userReducer]);

  if (userReducer === null) return <Redirect href={"/login"} />;

  return <>{children}</>;
}
