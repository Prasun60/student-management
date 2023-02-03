import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    islogin:false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setLogin: (state, action) => {
        state.islogin = action.payload.islogin;
      },
    },
  });
  
  export const { setLogin} =
    authSlice.actions;
  export default authSlice.reducer;