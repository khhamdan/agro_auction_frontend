import { createSlice } from "@reduxjs/toolkit";
import { deleteuser, getAllUsers } from "./users.actions";

const initialState = {
  usersLoading: false,
  usersLoadingFailed: false,
  usersLoadingSuccess: false,
  users: [],
  farmers: [],
  ////////////////////////////////
  isuserDeleteLoading: false,
  isuserDeleted: false,
  isuserDeleteFailed: false,
};

const UsersSlicer = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.usersLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      const data = action.payload;
      state.usersLoading = false;
      state.usersLoadingSuccess = true;
      if (data) {
        data.users.forEach((item) => {
          switch (item.role) {
            case "farmer":
              let duplicate = state.farmers.find(
                (obj) => JSON.stringify(obj) === JSON.stringify(item),
              );
              if (!duplicate) {
                state.farmers.push(item);
              }
              break;
            case "user":
              let duplicateUser = state.users.find(
                (obj) => JSON.stringify(obj) === JSON.stringify(item),
              );
              if (!duplicateUser) {
                state.users.push(item);
              }
              break;
            default:
              break;
          }
        });
      }
    },
    [getAllUsers.rejected]: (state) => {
      state.usersLoading = false;
      state.usersLoadingFailed = true;
      state.usersLoadingSuccess = false;
    },

    ////////////////////////////////
    [deleteuser.pending]: (state) => {
      state.isuserDeleteLoading = true;
    },
    [deleteuser.fulfilled]: (state) => {
      state.isuserDeleteLoading = false;
      state.isuserDeleted = true;
    },
    [deleteuser.rejected]: (state) => {
      state.isuserDeleteLoading = false;
      state.isuserDeleteFailed = true;
    },
  },
});

export default UsersSlicer.reducer;
