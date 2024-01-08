import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCartData: {},
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartData: (state, action) => {
      state.allCartData = action.payload;
    },
  },
});

export const { setCartData } = CartSlice.actions;
export default CartSlice.reducer;
