import React from 'react';

import Carousel from 'react-material-ui-carousel';

import carouselImgOne from '../../assets/carousel-1.jpg';
import carouselImgTwo from '../../assets/carousel-2.jpg';
import carouselImgThree from '../../assets/carousel-3.jpg';
import carouselImgFour from '../../assets/carousel-4.jpg';
import carouselImgFive from '../../assets/carousel-5.jpg';
import carouselImgSix from '../../assets/carousel-6.jpg';

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';

const ServicesCarousel = () => {
  const [t, i18n] = useTranslation('global');
  const items = [
    {
      Name: t('global.HomePage.servicesCarousel.name1'),
      Caption: t('global.HomePage.servicesCarousel.caption1'),
      contentPosition: 'left',
      Items: [
        {
          Name: t('global.HomePage.servicesCarousel.items1.name1'),
          Image: carouselImgOne,
        },
        {
          Name: t('global.HomePage.servicesCarousel.items1.name2'),
          Image: carouselImgFour,
        },
      ],
    },
    {
      Name: t('global.HomePage.servicesCarousel.name2'),
      Caption: t('global.HomePage.servicesCarousel.captain2'),
      contentPosition: 'middle',
      Items: [
        {
          Name: t('global.HomePage.servicesCarousel.items2.name1'),
          Image: carouselImgTwo,
        },
        {
          Name: t('global.HomePage.servicesCarousel.items2.name2'),
          Image: carouselImgSix,
        },
      ],
    },
    {
      Name: t('global.HomePage.servicesCarousel.name3'),
      Caption: t('global.HomePage.servicesCarousel.captain3'),
      contentPosition: 'right',
      Items: [
        {
          Name: t('global.HomePage.servicesCarousel.items3.name1'),
          Image: carouselImgThree,
        },
        {
          Name: t('global.HomePage.servicesCarousel.items3.name2'),
          Image: carouselImgFive,
        },
      ],
    },
  ];

  const useStyles = makeStyles((theme) => ({
    main: {
      paddingTop: '5%',
    },
    inner: {
      width: '80%',
      color: theme.palette.text.secondary,
      margin: 'auto',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },

      '& .typo1': {
        padding: '40px  0px',
        [theme.breakpoints.down('sm')]: {
          padding: '10px 0px',
        },
      },
      '& .typo2': {
        fontSize: 22,
        padding: '5px  0px',
        [theme.breakpoints.down('sm')]: {
          padding: '10px 0px',
        },
      },
    },
    endone: {
      display: 'flex',
      gap: 20,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  }));
  const classes = useStyles();

  return (
    <div style={{ marginTop: '50px', color: '#494949' }}>
      <Typography variant="h2" align="center" style={{ marginBottom: 10 }}>
        {t('global.HomePage.servicesCarousel.heading')}
      </Typography>
      <div className={classes.inner}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '20%',
            paddingRight: '20%',
            marginBottom: 10,
          }}
        >
          <Typography className="typo2" variant="p">
            {t('global.HomePage.servicesCarousel.subHeading')}
          </Typography>
        </div>
      </div>
      <br />

      <Carousel
        className="Example"
        style={{ height: '60vh' }}
        indicators={false}
      >
        {items.map((item, index) => {
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
            />
          );
        })}
      </Carousel>
      <br />
    </div>
  );
};

const Banner = (props) => {
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : 'left';
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={4} key="content">
      <CardContent
        className="Content"
        style={{
          height: '60vh',
        }}
      >
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid
        item
        xs={4}
        key={item.Name}
        style={{
          height: '60vh',
        }}
      >
        <CardMedia
          className="Media"
          image={item.Image}
          title={item.Name}
          style={{
            height: '60vh',
          }}
        >
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === 'left') {
    items.unshift(content);
  } else if (contentPosition === 'right') {
    items.push(content);
  } else if (contentPosition === 'middle') {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card
      raised
      className="Banner"
      style={{
        height: '60vh',
      }}
    >
      <Grid
        container
        spacing={0}
        className="BannerGrid"
        style={{
          height: '60vh',
        }}
      >
        {items}
      </Grid>
    </Card>
  );
};

export default ServicesCarousel;
