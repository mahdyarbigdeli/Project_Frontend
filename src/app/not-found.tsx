"use client";
import React, { useEffect } from "react";

import { redirect } from "next/navigation";
import useGlobalStates from "@/@redux/hooks/useGlobalStates";
export default function NotFound() {
  const { user } = useGlobalStates();

  useEffect(() => {
    if (!user.role) redirect("/auth/login");
    if (user.role) redirect("/services");
  }, []);
  return <div>404</div>;
}
