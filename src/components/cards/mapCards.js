import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import CardComponent from '.';
import farmerImage from '../../assets/farmer.webp';
import supplierImage from '../../assets/supplier.webp';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  gridSection: {
    width: '100%',
    margin: '0 auto',
    padding: '90px 0px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 40,
    justifyContent: 'center',
  },
}));

export default function MapCard() {
  const classes = useStyles();
  const { t } = useTranslation('global');

  return (
    <div className={classes.gridSection}>
      {Data.map(({ text, description, link, image }, i) => {
        return (
          <CardComponent
            key={i}
            text={t(`global.HomePage.mapCard.text${i + 1}`)}
            description={t(`global.HomePage.mapCard.description${i + 1}`)}
            link={link}
            image={image}
          />
        );
      })}
    </div>
  );
}

export const Data = [
  {
    text: 'Farmer',
    link: '/farmer',
    image: farmerImage,
  },
  {
    text: 'Buyer',
    link: '/consumer',
    image: supplierImage,
  },
];
