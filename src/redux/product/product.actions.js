import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addBidApi,
  addProductApi,
  deleteProductsApi,
  getAllProductsApi,
  getSingleProductApi,
  searchProductApi,
  searchProductDataBySearchApi,
  settleAuctionApi,
} from '../../Http/api';

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (payload) => {
    const { data } = await addProductApi(payload);
    return data;
  }
);
export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (payload) => {
    const { data } = await getAllProductsApi(payload);
    return data;
  }
);
export const getSingleProduct = createAsyncThunk(
  'product/getSingleProduct',
  async (payload) => {
    const { data } = await getSingleProductApi(payload);
    return data;
  }
);
export const addBid = createAsyncThunk('product/addBid', async (payload) => {
  const { data } = await addBidApi(payload);
  return data;
});
export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (payload) => {
    const { data } = await deleteProductsApi(payload);
    return data;
  }
);
export const searchProduct = createAsyncThunk(
  'search/searchProduct',
  async (payload) => {
    const { data } = await searchProductApi(payload);
    return data;
  }
);

export const searchProductByLocation = createAsyncThunk(
  'search/searchProductByLocation',
  async (payload) => {
    console.log('Selected payload', payload);
    const { data } = await searchProductDataBySearchApi(payload);
    console.log('Data location', data);
    return data;
  }
);

export const cartData = createAsyncThunk(async (payload) => {
  const { data } = payload;
  return data;
});

export const settleAuction = createAsyncThunk(
  'auction/settleAuction',
  async (payload) => {
    const { data } = await settleAuctionApi(payload);
    return data;
  }
);
