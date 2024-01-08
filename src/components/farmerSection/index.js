import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import CardFarmer from './card';
import { useTranslation } from 'react-i18next';
import FarmerSideBarMenu from '../farmer/menu';

export default function MapCardFarmer() {
  const classes = useStyles();
  const [t, i18n] = useTranslation('global');
  return (
    <Box className={classes.main}>
      <div className={classes.inner}>
        <Typography className="typo1" variant="h2">
          {t('global.Farmer.title')}
        </Typography>
        <Typography className="typo2" variant="subtitle2">
          {t('global.Farmer.subTitle')}
        </Typography>
      </div>
      <div className={classes.gridSection}>
        {Data.map(({ description }, i) => {
          return (
            <CardFarmer key={i} description={t('global.Farmer.description')} />
          );
        })}
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: '#f5f5f5',
    height: '100vh',
  },
  gridSection: {
    width: '80%',
    margin: '0 auto',
    padding: '60px 0px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 60,
  },
  inner: {
    width: '80%',
    color: theme.palette.text.secondary,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    // paddingTop: 60,
    // paddingBottom: 40,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },

    '& .typo1': {
      fontSize: 38,
      [theme.breakpoints.down('sm')]: {
        fontSize: 36,
      },
    },
    '& .typo2': {
      fontSize: 18,
      paddingTop: 20,
      maxWidth: '350px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      },
    },
  },
}));

export const Data = [
  {
    description: 'Sell Your Producing Material through Us',
  },
];

// Add the following CSS to your CardFarmer component to add a hover effect
// .card:hover {
//   transform: scale(1.05);
//   cursor: pointer;
// }
