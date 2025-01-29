import { ISubscirption } from "@/types/subscription.types";
import apiRoutes from "@/utils/apisRoutes";
import axiosConfig from "@/utils/axiosConfig";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const { list, buy } = apiRoutes.subscriptions;

const { getRequest } = axiosConfig;

export const GetAllAPI = (params: any) => {
  return getRequest<any[]>(`${NEXT_PUBLIC_API_URL}${list}`, params);
};

export const BuySubscriptionAPI = (id: ISubscirption["id"]) => {
  const url = `${NEXT_PUBLIC_API_URL}${buy}`;
  return getRequest<{ redirect_url: string }>(
    url.replace("{id}", id.toString()),
  );
};
