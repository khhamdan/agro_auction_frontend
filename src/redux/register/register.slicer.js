import { createSlice } from '@reduxjs/toolkit';

import { checkSession, LoginUser, registerUser } from './register.actions';
const initialState = {
  isUserRegistering: false,
  isUserRegisteringSuccess: false,
  isUserRegisteringFailed: false,
  userResisgteringStatus: '',

  login: {},
  loginLoading: false,
  loginLoadingSucess: false,
  loginLoadingFailed: false,
  error: '',
  errorMsg: {},
  isAuthenticated: false,
};

const handleFulfillement = (state, action) => {
  console.log('Token', action.token);
  localStorage.setItem('JWTtoken', action.token);
};

const registerSlice = createSlice({
  name: 'registerUser',
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isUserRegistering = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isUserRegistering = false;
      state.isUserRegisteringSuccess = true;
      state.userResisgteringStatus = 'User Register SuccessFully';
    },
    [registerUser.rejected]: (state) => {
      state.isUserRegistering = false;
      state.isUserRegisteringFailed = true;
      state.userResisgteringStatus = 'Cannot Register User!';
    },
    /////////////////////////////////////
    [LoginUser.pending]: (state) => {
      state.loginLoading = true;
      state.error = '';
    },
    [LoginUser.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.loginLoading = false;
      state.loginLoadingSucess = true;
      state.isAuthenticated = true;
      state.login = data.userInfo;
      handleFulfillement(state, data);
      state.error = '';
    },
    [LoginUser.rejected]: (state, action) => {
      state.loginLoading = false;
      state.loginLoadingFailed = true;
      state.error = 'Invalid Email or Password';
      state.isAuthenticated = false;
    },
    ////////////////////////////////
    [checkSession.pending]: (state) => {
      state.loginLoading = true;
      state.error = '';
    },
    [checkSession.fulfilled]: (state, action) => {
      state.loginLoading = false;
      state.loginLoadingSucess = true;
      state.login = action.payload.userInfo;
      state.isAuthenticated = true;
    },
    [checkSession.rejected]: (state, action) => {
      state.loginLoading = false;
      state.loginLoadingFailed = true;
      state.error = '';
      state.isAuthenticated = false;
    },
  },

  reducers: {
    resetRegisteringUser: (state) => {
      state.login = {};
      state.loginLoading = false;
      state.loginLoadingSucess = false;
      state.loginLoadingFailed = false;
      state.error = '';
      state.isAuthenticated = false;
      localStorage.setItem('JWTtoken', '');
      state.isUserRegisteringSuccess = false;
    },
  },
});

export default registerSlice.reducer;
export const { resetRegisteringUser } = registerSlice.actions;
