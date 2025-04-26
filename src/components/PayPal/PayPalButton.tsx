import {
  ICreateOrder,
  PayPalCreateOrderAPI,
} from "@/services/paypal/paypal.services";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const NEXT_PUBLIC_APP_PAYPAL_CLIENT_ID = process.env
  .NEXT_PUBLIC_APP_PAYPAL_CLIENT_ID as string;

const PayPalCheckout = (data: ICreateOrder) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: NEXT_PUBLIC_APP_PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture", 
        commit: true,   
      }}>
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "paypal",
        }}
        createOrder={async () => {
          const res: any = await PayPalCreateOrderAPI(data);
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
