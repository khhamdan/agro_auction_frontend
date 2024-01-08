import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteuserApi, getAllUsersApi } from "../../Http/api";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (payload) => {
    const { data } = await getAllUsersApi(payload);
    return data;
  },
);

///////
export const deleteuser = createAsyncThunk(
  "product/deleteProduct",
  async (payload) => {
    const { data } = await deleteuserApi(payload);
    return data;
  },
);
