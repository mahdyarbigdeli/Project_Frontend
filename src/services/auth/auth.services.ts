import { ILogin, IRegister, IUser } from "@/types/auth.types";
import apiRoutes from "@/utils/apisRoutes";
import axiosConfig from "@/utils/axiosConfig";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const { login, users, register, channels, passwordForgot, userInfo, noPass } = apiRoutes.auth;

const { postRequest, getRequest } = axiosConfig;

export const LoginAPI = (data: ILogin) => {
  const url = `${NEXT_PUBLIC_API_URL}${login}`;
  return postRequest<any>(url,  {
      username: data.email,
      email: data.email,
      password: data.password,
  });
};



export const FetchUserApi = (data: IUser) => {
  return postRequest<IUser>(`${NEXT_PUBLIC_API_URL}${userInfo}`, {
    username: data.username,
    password: data.password,
  });

}

export const RegisterAPI = (data: IRegister) => {
  const url = `${NEXT_PUBLIC_API_URL}${register}`;
  return postRequest<any>(url, null, {
    params: {
      ...data,
      username: data.email,
    },
  });
};

export const GetAllUsersAPI = (params: any) => {
  return getRequest<any[]>(`${NEXT_PUBLIC_API_URL}${users.list}`, params);
};


export const NoPassAPI = (data: Partial<IUser>) => {
  return getRequest<any[]>(`${NEXT_PUBLIC_API_URL}${noPass}`, data);
};

export const SendPasswordForgetAPI = (email: string) => {
  return postRequest(`${NEXT_PUBLIC_API_URL}${passwordForgot}`, {
    email: email,
  });
};
