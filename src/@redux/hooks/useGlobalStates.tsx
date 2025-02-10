import { IUser } from "@/types/auth.types";
import { useSelector } from "react-redux";

export default function useGlobalStates() {
  // const user: IUser = useSelector((state: any) => state.user);
  const user: IUser = {
    // email: "",
    email: "testuser1@gmail.com",
    password: "StrongPassword123!",
    message: "Welcome to our service!",
    auth: 1,
    status: "active",
    exp_date: "2025-12-31",
    is_trial: "false",
    active_cons: "1",
    created_at: new Date().toISOString(),
    max_connections: "5",
    allowed_output_formats: ["json", "xml", "csv"],
    role: "user",
  };

  return {
    user,
  };
}
