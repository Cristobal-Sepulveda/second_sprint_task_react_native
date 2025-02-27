import React, { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import useUserActions from "../store/hooks/useUserActions";
import { getUser } from "../utils/storage";
import { router } from "expo-router";

export default function WithUser({ children }) {
  const [loading, setLoading] = useState(true);
  const [userInStorage, setUserInStorage] = useState(null);
  const { user, login } = useUserActions();

  useEffect(() => {
    getUser()
      .then((data) => {
        setUserInStorage(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (userInStorage !== null) {
      login(userInStorage);
      router.replace("(tabs)");
    }
  }, [userInStorage]);

  if (loading) return null;
  if (userInStorage === null) return <Redirect href={"/login"} />;
  if (!user) return <Redirect href={"/login"} />;
  return <>{children}</>;
}
