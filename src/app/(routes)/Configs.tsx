"use client";
import useGlobalStates from "@/@redux/hooks/useGlobalStates";
import ReduxProvider from "@/@redux/reduxProvider";
import AuthChecker from "@/components/auth/AuthChecker";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "react-toastify/dist/ReactToastify.css";

interface IProps {
  children: JSX.Element | JSX.Element[];
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
  const initialOptions = {
    "client-id":
      "BAAxZ8X6Jrip-0ZbGzxyX2RQAC5PWapiFLZdprn8jIAXMFUUjFKI8YnuJqhbE0tolJ-FMavoXfDaUB6wUA",
    clientId:
      "BAAxZ8X6Jrip-0ZbGzxyX2RQAC5PWapiFLZdprn8jIAXMFUUjFKI8YnuJqhbE0tolJ-FMavoXfDaUB6wUA",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <ReduxProvider>
        <QueryClientProvider client={queryClient}>
          <>{children}</>
          <AuthChecker />
          <ToastContainer autoClose={2000} />
        </QueryClientProvider>
      </ReduxProvider>
    </PayPalScriptProvider>
  );
}
