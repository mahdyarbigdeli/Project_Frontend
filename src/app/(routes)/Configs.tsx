"use client";
import useGlobalStates from "@/@redux/hooks/useGlobalStates";
import ReduxProvider from "@/@redux/reduxProvider";
import AuthChecker from "@/components/auth/AuthChecker";
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
  return (
    <ReduxProvider>
      <QueryClientProvider client={queryClient}>
        <>{children}</>
        <AuthChecker/>
        <ToastContainer autoClose={2000} />
      </QueryClientProvider>
    </ReduxProvider>
  );
}
