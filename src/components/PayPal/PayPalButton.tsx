"use client";

import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import { ICreateOrder, PayPalCreateOrderAPI } from "@/services/paypal/paypal.services";

const PayPalCheckout = (data: ICreateOrder) => {
  const NEXT_PUBLIC_APP_PAYPAL_CLIENT_ID = process.env
    .NEXT_PUBLIC_APP_PAYPAL_CLIENT_ID as string;

  // useEffect(() => {
  //   // اگر PayPal قبلاً لود شده باشه، پاکش کن
  //   const existingScript = document.querySelector(
  //     'script[src*="paypal.com/sdk/js"]'
  //   );
  //   if (existingScript) {
  //     existingScript.remove();
  //   }
  // }, []);

  return (
    <PayPalScriptProvider
      options={{
        clientId: NEXT_PUBLIC_APP_PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
        commit: true,
      }}
    >
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "paypal",
        }}
        createOrder={async () => {
          const res: any = await PayPalCreateOrderAPI(data);
        
          console.log(res.order_id)
          return res.order_id;
        }}
        onApprove={async (data, actions) => {
          try {
            const res = await fetch(`https://bo.tamasha.me/api/paypal/capture-order/${data.orderID}`, {
              method: "POST",
            });

            const result = await res.json();

            console.log(result)
            if (result.status === "success") {
                window.location.href = `https://bo.tamasha.me/api/paypal/payment-success?token=${data.orderID}`;
            } else {
              window.location.href = "https://bo.tamasha.me/api/paypal/payment-cancel";
            }
          } catch (error) {
            console.error("Capture error:", error);
            window.location.href = "/subscriptions/error";
          }
        }}
        onError={(error) => {
          console.error("PayPal Error:", error);
        }}
        onCancel={() => {
          window.location.href = "https://bo.tamasha.me/api/paypal/payment-cancel";
        }}

      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckout;