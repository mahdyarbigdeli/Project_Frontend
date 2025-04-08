"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton() {
  return (
    <PayPalButtons 
      createOrder={(props, actions) => {
        return actions.order
          .create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: "599",
                },
                items: [
                  {
                    name: "Lifetime Subscription",
                    quantity: "1",
                    unit_amount: { currency_code: "USD", value: "599" },
                  },
                ],
              },
            ],
            intent: "CAPTURE",
          })
          .then((err) => {
            console.log("error => ", err);
            return err;
          });
      }}></PayPalButtons>
  );
}
