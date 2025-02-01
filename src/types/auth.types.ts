import { ColDef } from "@ag-grid-community/core";

export interface ILogin {
  username: string;
  password: string;
}

export interface IUser {
  username: string;
  password: string;
  message: string;
  auth: number;
  status: string;
  exp_date: string;
  is_trial: string;
  active_cons: string;
  created_at: string;
  max_connections: string;
  allowed_output_formats: string[];
  role : string;
}

export const usersColDef: ColDef[] = [
  {
    headerName: "شناسه",
    field: "id",
  },
  {
    headerName: "نام کاربری",
    field: "username",
  },
  {
    headerName: "ایمیل",
    field: "email",
    flex: 1,
  },
  {
    headerName: "نقش",
    field: "role",
    flex: 1,
  },
];
