import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleUserApi } from "../../../Http/api";

export const singleusers = createAsyncThunk(
  "user/singleUser",
  async (payload) => {
    const { data } = await getSingleUserApi(payload);

    return data;
  },
);
