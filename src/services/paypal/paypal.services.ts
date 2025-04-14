const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import apiRoutes from "@/utils/apisRoutes";
import axiosConfig from "@/utils/axiosConfig";

const { postRequest } = axiosConfig;

const { paypal } = apiRoutes;

const { create_payment, create_order } = paypal;

export const CapturePyPalAPI = () => {
  const url = `${NEXT_PUBLIC_API_URL}${create_payment}`;
  return postRequest<any>(url);
};

export const PayPalCreateOrderAPI = (data: {
  currency: string;
  sku: "lifetme";
  name: "lifetme";
  price: number;
}) => {
  const url = `${NEXT_PUBLIC_API_URL}${create_order}`;
  return postRequest<any>(url, data);
};
