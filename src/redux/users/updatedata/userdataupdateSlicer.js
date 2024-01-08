import { createSlice } from "@reduxjs/toolkit";

import { updateProfilePic } from "./userdataupdat.action";
const initialState = {
  isUserDataUpadting: false,
  isUserDataUpadtingSuccess: false,
  isUserDataUpadtingFailed: false,
  isprofileupdating: false,
  isprofileupdatingSuccess: false,
  isprofileupdatingFailed: false,
};

const editUserDetailsSlicer = createSlice({
  name: "userprofileUpdate",
  initialState,
  extraReducers: {
    [updateProfilePic.pending]: (state) => {
      state.isprofileupdating = true;
      state.isprofileupdatingSuccess = false;
      state.isprofileupdatingFailed = false;
    },
    [updateProfilePic.fulfilled]: (state, action) => {
      state.isprofileupdating = false;
      state.isprofileupdatingSuccess = true;
      state.isprofileupdatingFailed = false;
    },
    [updateProfilePic.rejected]: (state) => {
      state.isprofileupdating = false;
      state.isprofileupdatingSuccess = false;
      state.isprofileupdatingFailed = true;
    },
  },
  reducers: {
    resetUpdatingData: (state) => {
      state.isUserDataUpadtingSuccess = false;
      state.isUserDataUpadtingFailed = false;
      state.isUserDataUpadting = false;
    },
  },
});

export default editUserDetailsSlicer.reducer;
