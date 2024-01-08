import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  checkSessionApi,
  requestLoginUser,
  requestRegisterUser,
} from "../../Http/api.js";
export const registerUser = createAsyncThunk(
  "registerUser/register",
  async (payload) => {
    try {
      const { data } = await requestRegisterUser(payload);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const resetRegisteringUser = createAction(
  "registerUser/resetRegisteringUser",
);
///login

export const LoginUser = createAsyncThunk(
  "loginUser/login",
  async (payload, { dispatch }) => {
    try {
      const res = await requestLoginUser(payload);

      return res;
    } catch (error) {
      throw error;
    }
  },
);

export const checkSession = createAsyncThunk(
  "loginUser/checkSession",
  async () => {
    try {
      const { data } = await checkSessionApi();
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const resetLoginUser = createAction("LoginUser/resetLoginUser");
