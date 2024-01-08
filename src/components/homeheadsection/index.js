import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import LanguageSelector from '../../translations/LanguageSelector ';
import { useTranslation } from 'react-i18next';

function Homehead() {
  const classes = useStyles();
  const [t, il8n] = useTranslation('global');
  const user = JSON.parse(localStorage.getItem('user'));
  const cropsTranslation = t('global.HomePage.homeHead.crops');
  return (
    <div className={classes.mainAboutHead}>
      <div className={classes.gradientOverlay}></div>
      <div className={classes.content}>
        <h2 className={classes.typoSubHead}>
          {user
            ? user.role === 'farmer'
              ? t('global.HomePage.homeHead.farmerDashTitle')
              : t('global.HomePage.homeHead.buyerDashTitle')
            : t('global.HomePage.homeHead.welcomeTitle')}
        </h2>
        <div className={classes.underline}></div>

        <Typography className={classes.typoHead} variant="h1">
          {user
            ? user.role === 'farmer'
              ? t('global.HomePage.homeHead.farmerSubHead')
              : t('global.HomePage.homeHead.buyerSubHead')
            : t('global.HomePage.homeHead.subHead', {
                crops: cropsTranslation,
              })}
        </Typography>
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Homehead;
