import { createSlice } from '@reduxjs/toolkit';
import {
  addBid,
  addProduct,
  cartData,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  searchProduct,
  searchProductByLocation,
} from './product.actions';

const initialState = {
  isProductAddLoading: false,
  isProductAddLoadingFailed: false,
  isProductAdded: false,
  addProductData: {},
  ///////////////////
  areAllProductsLoaded: false,
  areAllProductsLoadedFailed: false,
  areAllProductsLoading: false,
  allProductsData: [],
  ////////////////
  isSingleProductLoading: false,
  isSingleProductLoadingFailed: false,
  singleProductData: [],
  ////////////////
  isBidAddLoading: false,
  isBidAddLoadingFailed: false,
  isBidAdded: false,
  bidData: [],
  ////////////////
  isProductDeleteLoading: false,
  isProductDeleted: false,
  isProductDeleteFailed: false,
  ////////////////
  allProductsDataByLocation: [],
};

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetData: (state) => {
      state.isProductAddLoading = false;
      state.isProductAdded = false;
      state.isProductAddLoadingFailed = false;
    },
    resetSearchResults: (state) => {
      state.allProductsData = [];
    },
  },
  extraReducers: {
    [addProduct.pending]: (state, action) => {
      state.isProductAddLoading = true;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.isProductAddLoading = false;
      state.isProductAdded = true;
      state.addProductData = action.payload;
    },
    [addProduct.rejected]: (state, action) => {
      state.isProductAddLoading = false;
      state.isProductAddLoadingFailed = true;
    },
    ////////////////////
    [getAllProducts.pending]: (state, action) => {
      state.areAllProductsLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.areAllProductsLoading = false;
      state.areAllProductsLoaded = true;
      state.allProductsData = action.payload.productInfo;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.areAllProductsLoading = false;
      state.areAllProductsLoadedFailed = true;
    },
    ////////////////////
    [getSingleProduct.pending]: (state, action) => {
      state.isSingleProductLoading = true;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.isSingleProductLoading = false;
      state.singleProductData = action.payload.productInfo;
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.isSingleProductLoadingFailed = true;
      state.isSingleProductLoading = false;
    },
    [addBid.pending]: (state, action) => {
      state.isBidAddLoading = true;
    },
    [addBid.fulfilled]: (state, action) => {
      state.isBidAddLoading = false;
      state.isBidAdded = true;
      state.bidData = action.payload;
    },
    [addBid.rejected]: (state, action) => {
      state.isBidAddLoading = false;
      state.isBidAddLoadingFailed = true;
    },
    ////////////////////////////////
    [deleteProduct.pending]: (state, action) => {
      state.isProductDeleteLoading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.isProductDeleteLoading = false;
      state.isProductDeleted = true;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.isProductDeleteLoading = false;
      state.isProductDeleteFailed = true;
    },
    /////////////////////////////////
    [searchProduct.pending]: (state) => {
      state.areAllProductsLoading = true;
    },
    [searchProduct.fulfilled]: (state, action) => {
      state.areAllProductsLoading = false;
      state.areAllProductsLoaded = true;
      state.allProductsData = action.payload.products;
    },
    [searchProductByLocation.fulfilled]: (state, action) => {
      state.allProductsDataByLocation = action.payload;
    },
    [searchProduct.rejected]: (state) => {
      state.areAllProductsLoading = false;
      state.areAllProductsLoadedFailed = true;
    },
    // [updateSearchItem.type]: (state, action) => {
    //   // Assuming payload is an array of search results
    //   state.allProductsData = action.payload.product;
    // },
  },
});

export const { setCartData } = ProductSlice.actions;
export const { resetData, resetSearchResults } = ProductSlice.actions;
export default ProductSlice.reducer;
