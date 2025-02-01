"use client";
import React, { useEffect } from "react";

import { redirect } from "next/navigation";
import useGlobalStates from "@/@redux/hooks/useGlobalStates";
<<<<<<< HEAD
<<<<<<< HEAD
import useRedirect from "@/hooks/useRedirect";
export default function NotFound() {
  const { user } = useGlobalStates();

  const {SUBSCRIPTIONS,AUTH} = useRedirect()

  useEffect(() => {
    if (!user.role) AUTH.GoLogin();
    if (user.role) SUBSCRIPTIONS.GoServices();
=======
=======
>>>>>>> origin/main
export default function NotFound() {
  const { user } = useGlobalStates();

  useEffect(() => {
    if (!user.role) redirect("/auth/login");
    if (user.role) redirect("/services");
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> origin/main
  }, []);
  return <div>404</div>;
}
