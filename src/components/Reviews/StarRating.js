// StarRating.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const StarRating = ({ rating, onRatingChange }) => {
  const stars = [1, 2, 3, 4, 5];
  const [t, i18n] = useTranslation('global');

  return (
    <div>
      <label>{t('global.review.rating')}:</label>
      {stars.map((star) => (
        <span
          key={star}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
          onClick={() => onRatingChange(star)}
        >
          &#9733; {/* Unicode for a solid star */}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
