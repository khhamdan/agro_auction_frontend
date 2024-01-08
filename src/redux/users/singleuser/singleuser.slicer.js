import { createSlice } from "@reduxjs/toolkit";
import { singleusers } from "./singleuser.action";

const initialState = {
  singleuserLoading: false,
  singleuserLoadingFailed: false,
  singleuserLoadingSuccess: false,
  singleuser: { userInfo: {} },
};

const singleSlicer = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [singleusers.pending]: (state, action) => {
      state.singleuserLoading = true;
    },
    [singleusers.fulfilled]: (state, action) => {
      state.singleuser = action.payload;
      state.singleuserLoading = false;
      state.singleuserLoadingSuccess = true;
    },
    [singleusers.rejected]: (state, action) => {
      state.singleuserLoading = false;
      state.singleuserLoadingFailed = true;
      state.singleuserLoadingSuccess = false;
    },
  },
});

export default singleSlicer.reducer;
