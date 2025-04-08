import useGlobalStates from "@/@redux/hooks/useGlobalStates";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function AuthChecker() {
  const { user } = useGlobalStates();
  const location = usePathname();



  useEffect(() => {
    if (user.username) return;

    const isOnAuthRoutes = location.includes("/auth/");

    if (isOnAuthRoutes) return;
    redirect("/auth/login");
  }, [user, location]);

  return <></>;
}
