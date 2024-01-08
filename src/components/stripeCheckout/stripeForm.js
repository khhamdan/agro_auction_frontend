import React, { useState } from 'react';
import { Button, Input, Form, message } from 'antd';
import axios from 'axios';
import './CheckoutComponent.css'; // Import the CSS file for styling
import { stripeCheckoutApi } from '../../Http/api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCartData } from '../../redux/cart/cart.slicer';
import { CircularProgress } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const CheckoutComponent = (productDetail) => {
  const dispatch = useDispatch();
  // const cartData = useSelector((state) => state.Product.allCartData);
  const [isLoading, setIsLoading] = useState(false);
  const [t, i18n] = useTranslation('global');
  const datOfProduct = productDetail;
  console.log('what is product detail', datOfProduct);

  const user = JSON.parse(localStorage.getItem('user'));
  console.log('User', user.username);
  const navigate = useNavigate();
  const initialFormData = {
    amount: 50000,
    currency: 'pkr',
    description: 'Whatever',
    name: 'asad',
    card: {
      number: '4242424242424242',
      exp_month: 11,
      exp_year: 2025,
      cvc: '123',
    },
    productId: 5,
    auctionId: 0,
    userId: 2,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // Send a POST request to the API endpoint with the selected data
      const {
        amount,
        description,
        name,
        currency,
        productId,
        auctionId,
        userId,
        card,
      } = formData;

      const payload = {
        amount: parseInt(datOfProduct.productDetail.highestBid) * 100,
        description: `Buying ${datOfProduct.productDetail.count} ${datOfProduct.productDetail.productTitle} after winning auction of ${datOfProduct.productDetail.highestBid} PKR `,
        name: user.username,
        currency,
        productId: datOfProduct.productDetail.productId,
        auctionId: datOfProduct.productDetail.auctionId,
        userId: user.userId,
        card,
      };
      // Handle the response as needed
      console.log('Stripe payload', payload);
      await stripeCheckoutApi(payload)
        .then((res) => {
          setIsLoading(false);

          const paymentSlipLink = res.data.paymentSlip;
          dispatch(setCartData(datOfProduct));

          Swal.fire({
            title: 'Success',
            html: `Payment Successfully Done <br/> To view Payment Slip, click <a href=${paymentSlipLink} target="_blank">"here"</a>`,
            icon: 'success',
            confirmButtonText: 'Ok',
          }).then(() => {
            navigate(`/addReview/${datOfProduct.productDetail.productId}`);
          });
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            title: 'Error',
            text: 'Error',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        });

      // Display a success message
      message.success('Checkout successful!');
    } catch (error) {
      // Handle errors
      console.error('Error during checkout:', error);
      message.error('Checkout failed. Please try again.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: '200px',
        background: 'rgba(147, 178, 140, 0.8)',
        color: 'white',
        marginTop: '70px',
        padding: '20px',
      }}
    >
      <div style={{ paddingRight: '100px' }}>
        <h1 style={{ fontSize: '55px' }}>{t('global.checkout.productInfo')}</h1>
        <div style={{ marginTop: '30px' }}>
          <p style={{ fontSize: '35px' }}>
            <span style={{ fontWeight: 'bold' }}>
              {t('global.checkout.amount')}
            </span>{' '}
            {datOfProduct.productDetail.highestBid} {formData.currency}
          </p>
          <p style={{ fontSize: '35px' }}>
            <span style={{ fontWeight: 'bold' }}>
              {t('global.checkout.name')}
            </span>{' '}
            {user.username}
          </p>

          <p style={{ fontSize: '30px' }}>
            <span style={{ fontWeight: 'bold' }}>
              {t('global.checkout.description')}
            </span>{' '}
            <br />
            {`${t('global.checkout.buying')} ${
              datOfProduct.productDetail.count
            } ${datOfProduct.productDetail.productTitle} ${t(
              'global.checkout.statement'
            )} ${datOfProduct.productDetail.highestBid} ${t(
              'global.checkout.pkr'
            )}
            `}
          </p>
        </div>
        <div style={{ paddingBottom: '165px' }}></div>
      </div>
      <div>
        <div style={{ marginTop: '50px' }}>
          <h1 style={{ fontSize: '55px' }}>{t('global.checkout.cardInfo')}</h1>
          <Form onFinish={handleSubmit}>
            {/* Your form fields go here */}
            <Form.Item
              label={t('global.checkout.cardNumber')}
              name={['card', 'number']}
              rules={[{ required: true }]}
              labelCol={{ span: 24 }} // Set label column width to full width
              wrapperCol={{ span: 24 }}
              style={{ fontSize: '20px' }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t('global.checkout.month')}
              name={['card', 'exp_month']}
              rules={[{ required: true }]}
              labelCol={{ span: 24 }} // Set label column width to full width
              wrapperCol={{ span: 64 }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t('global.checkout.year')}
              name={['card', 'exp_year']}
              rules={[{ required: true }]}
              labelCol={{ span: 24 }} // Set label column width to full width
              wrapperCol={{ span: 24 }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t('global.checkout.cvc')}
              name={['card', 'cvc']}
              rules={[{ required: true }]}
              labelCol={{ span: 24 }} // Set label column width to full width
              wrapperCol={{ span: 24 }}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit-btn">
                {isLoading ? (
                  <CircularProgress size={20} style={{ color: 'white' }} />
                ) : (
                  <>{t('global.checkout.buttonText')}</>
                )}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
