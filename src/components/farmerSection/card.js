import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../buttons';
import farmerImage from '../../assets/farmer.webp';
import { useTranslation } from 'react-i18next';
export default function CardFarmer({ description }) {
  const classes = useStyles();
  const [t, i18n] = useTranslation('global');
  return (
    <Box className={classes.main}>
      <img className={classes.image} src={farmerImage} alt="farmer" />
      <div>
        <Typography className={classes.description} variant="subtitle1">
          {description}
        </Typography>
      </div>

      <div className={classes.btn}>
        <Link
          to="/farmer/dashboard"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <Buttons variant="contained" className={classes.exploreButton}>
            {t('global.Farmer.buttonText')}
          </Buttons>
        </Link>
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    width: 400,
    borderRadius: '5px',

    textAlign: 'center',
    border: '2px solid' + theme.palette.background.border,
    backgroundColor: 'white',
    padding: '10px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  heading: {
    padding: '15px 0px',
    color: theme.palette.text.secondary,
  },

  description: {
    padding: 10,
    fontSize: 16,
    maxWidth: 250,
    color: theme.palette.text.secondary,
  },

  btn: {
    padding: ' 20px 0px',
  },

  image: {
    width: '100px',
    borderRadius: '5px 5px 0 0',
  },

  exploreButton: {
    animation: '$pulse 1s infinite',

    background: 'linear-gradient(135deg, #849F70, #587547)',

    '&:hover': {
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #587547, #849F70)',
    },
  },

  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));
