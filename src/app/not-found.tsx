"use client";
import React, { useEffect } from "react";

import { redirect } from "next/navigation";
import useGlobalStates from "@/@redux/hooks/useGlobalStates";
import useRedirect from "@/hooks/useRedirect";
export default function NotFound() {
  const { user } = useGlobalStates();

  const {SUBSCRIPTIONS,AUTH} = useRedirect()

  useEffect(() => {
    if (!user.role) AUTH.GoLogin();
    if (user.role) SUBSCRIPTIONS.GoServices();
  }, []);
  return <div>404</div>;
}
