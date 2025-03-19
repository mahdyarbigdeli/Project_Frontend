const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
import apiRoutes from "@/utils/apisRoutes";
import axiosConfig from "@/utils/axiosConfig";

const { postRequest } = axiosConfig;

const { paypal } = apiRoutes;

const { capturePayment } = paypal;

export const CapturePyPalAPI = () => {
  const url = `${NEXT_PUBLIC_API_URL}${capturePayment}`;
  return postRequest<any>(url);
};
