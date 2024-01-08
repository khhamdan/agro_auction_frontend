import { createSlice } from "@reduxjs/toolkit";
import { getInWallet, List, PlaceBid } from "./inWallet.actions";

const initialState = {
  isinWalletAddLoading: false,
  isinWalletAddLoadingFailed: false,
  isinWalletAdded: false,
  inWallet: { createdProducts: [] },

  isOnAuctionLoading: false,
  isONAuctionFailed: false,
  isOnAuctiontAdded: false,

  isAddingBid: false,
  isaddingBidSucces: false,
  isAddingBidfailed: false,
  message: "",
};

const inWalletSlice = createSlice({
  name: "inWallet",
  initialState,
  extraReducers: {
    [getInWallet.pending]: (state, action) => {
      state.isinWalletAddLoading = true;
    },
    [getInWallet.fulfilled]: (state, action) => {
      state.isinWalletAddLoading = false;
      state.isinWalletAdded = true;
      state.inWallet = action.payload;
    },
    [getInWallet.rejected]: (state, action) => {
      state.isinWalletAddLoading = false;
      state.isinWalletAddLoadingFailed = true;
    },

    [List.pending]: (state, action) => {
      state.isOnAuctionLoading = true;
      state.isONAuctionFailed = false;
      state.isOnAuctiontAdded = false;
    },
    [List.fulfilled]: (state, action) => {
      state.isOnAuctionLoading = false;
      state.isONAuctionFailed = false;
      state.isOnAuctiontAdded = true;
    },
    [List.rejected]: (state, action) => {
      state.isOnAuctionLoading = false;
      state.isONAuctionFailed = true;
      state.isOnAuctiontAdded = false;
    },

    [PlaceBid.pending]: (state, action) => {
      state.isAddingBid = true;
      state.isaddingBidSucces = false;
      state.isAddingBidfailed = false;
      state.message = "in Progress....";
    },
    [PlaceBid.fulfilled]: (state, action) => {
      state.isAddingBid = false;
      state.isaddingBidSucces = true;
      state.isAddingBidfailed = false;
      state.message = "Bidding Sucess";
    },
    [PlaceBid.rejected]: (state, action) => {
      state.isAddingBid = false;
      state.isaddingBidSucces = false;
      state.isAddingBidfailed = true;
      state.message = "Bidding Failed";
    },
  },

  reducers: {
    resetStateinWallet: (state, action) => {
      state.isinWalletAddLoading = false;
      state.isinWalletAddLoadingFailed = false;
      state.isinWalletAdded = false;
      state.inWallet = { cretedProducts: [] };

      state.isOnAuctionLoading = false;
      state.isONAuctionFailed = false;
      state.isOnAuctiontAdded = false;

      state.isAddingBid = false;
      state.isaddingBidSucces = false;
      state.isAddingBidfailed = false;
      state.message = "";
    },
  },
});

export default inWalletSlice.reducer;
export const { resetStateinWallet } = inWalletSlice.actions;
