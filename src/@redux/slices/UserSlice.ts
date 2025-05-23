  import { IUser } from "@/types/auth.types";
  import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import moment from "moment-jalaali";

  const initialState = {};

  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      login: (state, { payload }: PayloadAction<IUser>) => {
        return {
          ...payload,
          // exp_date: moment(parseInt(payload.exp_date) * 1000).toLocaleString(),
        };
      },
      logout: () => {
        return {};
      },
      fetchUser: (state, { payload }: PayloadAction<IUser>) => {
        return { ...state, ...payload};
      },
    },
  });

  export const userActions = userSlice.actions;

  export default userSlice.reducer;
