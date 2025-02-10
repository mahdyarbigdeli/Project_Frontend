"use client";
import useGlobalStates from "@/@redux/hooks/useGlobalStates";
import ReduxProvider from "@/@redux/reduxProvider";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
interface IProps {
  children: JSX.Element;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function Configs({ children }: IProps) {
  const { user } = useGlobalStates();
  const location = usePathname();
  useEffect(() => {
    console.log(user)
    if (user.email) return;

    const isOnAuthRoutes = location.includes("/auth/");

    if (isOnAuthRoutes) return;
    redirect("/auth/login");
  }, [user, location]);

  return (
    <ReduxProvider>
      <QueryClientProvider client={queryClient}>
        <>{children}</>
        <ToastContainer autoClose={2000} />
      </QueryClientProvider>
    </ReduxProvider>
  );
}
