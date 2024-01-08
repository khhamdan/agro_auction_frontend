import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllInWallet, putOnAuction, AddBidOn } from "../../Http/api";

export const getInWallet = createAsyncThunk(
  "wallet/getInwallet",
  async (payload) => {
    const { data } = await getAllInWallet(payload);
    return data;
  },
);

export const List = createAsyncThunk("wallet/putOnAuction", async (payload) => {
  const { data } = await putOnAuction(payload);
  return data;
});

export const PlaceBid = createAsyncThunk("wallet/placeBid", async (payload) => {
  const { data } = await AddBidOn(payload);
  return data;
});
