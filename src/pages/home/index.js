import React from 'react';
import MapCard from '../../components/cards/mapCards';
import Homehead from '../../components/homeheadsection';
import Location from '../../components/Location';
import CardServicesHome from '../../components/servicesHomeSec';
import ServicesCarousel from '../../components/servicesHomeSec/servicesCarousel';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [t, il8n] = useTranslation('global');

  return (
    <div>
      <Homehead />

      <ServicesCarousel />
      <Typography variant="h2" align="center" style={{ marginTop: 60 }}>
        {t('global.HomePage.explore')}
      </Typography>
      <MapCard />
      <Location />
    </div>
  );
}
