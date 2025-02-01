import { ILogin, IUser } from "@/types/auth.types";
import apiRoutes from "@/utils/apisRoutes";
import axiosConfig from "@/utils/axiosConfig";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const { login, users } = apiRoutes.auth;

const { postRequest, getRequest } = axiosConfig;

export const LoginAPI = (data: ILogin) => {
  const url = `${NEXT_PUBLIC_API_URL}${login}`;
  return postRequest<any>(url, null, {
    params: data,
  });
};

export const GetAllUsersAPI = (params: any) => {
  return getRequest<any[]>(`${NEXT_PUBLIC_API_URL}${users.list}`, params);
};
