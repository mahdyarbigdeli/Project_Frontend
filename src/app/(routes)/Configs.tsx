"use client";
import ReduxProvider from "@/@redux/reduxProvider";
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
        <ToastContainer autoClose={2000} />
      </QueryClientProvider>
    </ReduxProvider>
  );
}
