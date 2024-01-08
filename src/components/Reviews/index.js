import React from 'react';
import ReviewPage from './reviewPage';
import { useTranslation } from 'react-i18next';

const index = () => {
  const [t, i18n] = useTranslation('global');
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
      {/* <h1 style={{ fontSize: '55px' }}>{t('global.review.heading')}</h1> */}
      <ReviewPage />
    </div>
  );
};

export default index;
