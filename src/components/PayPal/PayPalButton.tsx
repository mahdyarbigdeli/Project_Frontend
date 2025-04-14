import { PayPalCreateOrderAPI } from "@/services/paypal/paypal.services";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const NEXT_PUBLIC_APP_PAYPAL_CLIENT_ID = process.env
  .NEXT_PUBLIC_APP_PAYPAL_CLIENT_ID as string;

const PayPalCheckout = () => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: NEXT_PUBLIC_APP_PAYPAL_CLIENT_ID,
        currency: "USD",
      }}>
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "paypal",
        }}
        createOrder={async () => {
          const res: any = await PayPalCreateOrderAPI({
            currency: "USD",
            name: "lifetme",
            price: 20,
            sku: "lifetme",
          });

          return res.order_id; // return the PayPal order ID
        }}
        onApprove={async (data, actions) => {
          // order capture logic here
        }}
        onError={(error) => {
          console.log(error);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckout;
