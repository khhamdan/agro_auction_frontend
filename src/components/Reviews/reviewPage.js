import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating'; // Import the StarRating component
import { Button } from 'antd';
import Swal from 'sweetalert2';
import { addReviewApi } from '../../Http/api';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ReviewPage = React.memo(() => {
  const [rating, setRating] = useState(0); // Initialize rating with 0
  const [feedback, setFeedback] = useState('');
  const [t, i18n] = useTranslation('global');

  const navigate = useNavigate();
  const cartPaidData = useSelector((state) => state.Cart.allCartData);
  console.log('Paid data', cartPaidData);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    console.log('ReviewPage component mounted');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      productId: cartPaidData.productDetail.productId,
      auctionId: cartPaidData.productDetail.auctionId,
      userId: user.userId,
      rating: parseFloat(rating),
      feedback: feedback,
    };
    await addReviewApi(payload)
      .then((res) => {
        Swal.fire({
          title: 'Success',
          text: 'Review Successfully Given ',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then(() => {
          console.log('Response from addReviewApi:', res);

          navigate(`/consumer/`);
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
  };

  useEffect(() => {
    window.history.pushState({}, null, '/consumer/');

    const handleBackNavigation = () => {
      window.location.replace('/consumer/');
    };

    window.addEventListener('popstate', handleBackNavigation);

    return () => {
      window.removeEventListener('popstate', handleBackNavigation);
    };
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        gap: '200px',
        background: 'linear-gradient(90deg, #93B28C 100%, #27ae60 40.1%)',
        color: 'white',
        marginTop: '70px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <h1>{t('global.review.feedback')}:</h1>
        </div>
        <br />
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={{ width: '300px', height: '150px', borderRadius: '20px' }} // Increase the size of the textarea
        />
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <br />
          <br />
          <StarRating rating={rating} onRatingChange={setRating} />{' '}
          {/* Use the StarRating component */}
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <Button htmlType="submit" className="submit-btn">
            {t('global.review.buttonText')}
          </Button>
        </div>
      </form>
    </div>
  );
});

export default ReviewPage;
