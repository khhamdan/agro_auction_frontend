import { MuiBAseUrl } from './config';

export const requestRegisterUser = async (payload) => {
  try {
    const res = await MuiBAseUrl.post('/api/users/signup', payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const requestLoginUser = async (payload) => {
  try {
    const res = await MuiBAseUrl.post('api/users/login', payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
export const addProductApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post('/api/users/addProduct', payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getAllProductsApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post('/api/users/getAllProducts', payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const stripeCheckoutApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post('/api/users/checkOut', payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const addReviewApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post('/api/users/addReview', payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getFarmerReportApi = async (payload) => {
  console.log('what is payload', payload);
  try {
    const res = await MuiBAseUrl.get(
      `/api/users/soldProductsByFarmer/${payload}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      }
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getProductsApi = async () => {
  try {
    const res = await MuiBAseUrl.post('/api/users/getProducts', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProductApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/getSingleProduct/${payload}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// Get All Users Api Start
export const getAllUsersApi = async () => {
  try {
    const res = await MuiBAseUrl.get('/api/users/getAllUsers', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
// Get All Users Api End

// export const addProductApi = async (payload) => {
//   try {
//     const res = await MuiBAseUrl.post("/api/users/addProduct", payload, {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return res;
//   } catch (err) {
//     throw err;
//   }
// };
// export const getAllProductsApi = async () => {
//   try {
//     const res = await MuiBAseUrl.get("/api/users/getAllProducts", {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json;charset=UTF-8",
//       },
//     });
//     return res;
//   } catch (err) {
//     throw err;
//   }
// };
export const getSingleUserApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/getSingleUser/${payload}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
export const addBidApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post(`/api/users/addBid`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
export const checkSessionApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get('api/users/checkSession', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('JWTtoken'),
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getAllInWallet = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/createdProducts/${payload}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getBidHistoryApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/getBidHistory/${payload}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const putOnAuction = async (payload) => {
  try {
    const res = await MuiBAseUrl.post(`/api/users/listOnAuction`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const cancelAuctionApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post(`/api/users/cancelAuction`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const AddBidOn = async (payload) => {
  try {
    const res = await MuiBAseUrl.post(`/api/users/addBid`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteProductsApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`api/users/deleteProduct/${payload}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteuserApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/deleteUser/${payload}`);
    return res;
  } catch (error) {
    throw error;
  }
};

////////////////////////////////////////////////////////////////
export const updateProfileAPI = async (payload) => {
  const res = await MuiBAseUrl.post('api/users/uploadProfilePic', payload);
  return res;
};
export const searchProductApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.get('api/users/searchProduct', {
      params: {
        title: payload,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const searchProductDataBySearchApi = async (location) => {
  try {
    const res = await MuiBAseUrl.get('api/users/searchProductByLocation', {
      params: {
        location: location,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const editProfileApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post('api/users/updateUserInfo', payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const editUserFromAdminApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post(
      'api/users/updateUserInfoFromAdmin',
      payload
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const settleAuctionApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post('api/users/settleAuction', payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getChatUsersApi = async (userId) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/getChatUsers/${userId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const sendMessageApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post('/api/users/sendMessage', payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getAuctionsByUserIdApi = async (userId) => {
  try {
    const res = await MuiBAseUrl.get(
      `/api/users/getAuctionsByUserId/${userId}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCartByUserIdApi = async (userId) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/getCart/${userId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getShipmentsApi = async (userId) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/shipments/${userId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const payApi = async (payload) => {
  try {
    const res = await MuiBAseUrl.post('/api/users/pay', payload);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductById = async (productId) => {
  try {
    const res = await MuiBAseUrl.get(`/api/users/delete/product/${productId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateProductInfo = async (updatedProduct_Payload) => {
  try {
    const res = await MuiBAseUrl.post(
      `/api/users/updateProductInfo`,
      JSON.stringify(updatedProduct_Payload),
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (userId, payload) => {
  try {
    const res = await MuiBAseUrl.post(
      `/api/users/update/profile/${userId}`,
      payload
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
