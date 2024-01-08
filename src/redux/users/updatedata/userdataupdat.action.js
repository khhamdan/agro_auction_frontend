import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { editProfileApi, updateProfileAPI } from "../../../Http/api";

export const updateProfilePic = createAsyncThunk(
  "usercoverprofilepicture/Profilepicture",
  async (payload) => {
    const { data } = await updateProfileAPI(payload);

    return data;
  },
);

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async (payload) => {
    const { data } = await editProfileApi(payload);
    return data;
  },
);

export const resetUpdatingData = createAction("userprofileUpdate/UpdatingData");
