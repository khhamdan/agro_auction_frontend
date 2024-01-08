import React, { useEffect, useState } from 'react';
import StripeForm from './stripeForm';
import { useParams } from 'react-router-dom';
import { getSingleProductApi } from '../../Http/api';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import BuyerHeader from '../header/BuyerHeader';
const index = () => {
  const { id } = useParams();
  console.log('ProductId', id);
  const [productDetail, setProductDetail] = useState({});
  const [t, i18n] = useTranslation('global');
  useEffect(() => {
    getSingleProductApi(id)
      .then((res) => {
        console.log('single product', res.data.productInfo);
        setProductDetail(res.data.productInfo);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <StripeForm productDetail={productDetail} />
    </div>
  );
};

export default index;
