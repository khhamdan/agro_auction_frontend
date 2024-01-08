import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { Tabs } from 'antd';
import Swal from 'sweetalert2';
import ProductsMap from '../../components/productCard/productMap';
import SearchBar from '../../components/searchBar';
import {
  getAuctionsByUserIdApi,
  getCartByUserIdApi,
  getProductsApi,
  getShipmentsApi,
} from '../../Http/api';
import BidsTable from './bidsTable';
import CartTable from './cartTable';
import LocationsFilter from './locationFilter';
import ProductsFilter from './productsFilter';
import ShipmentsTable from './shipmentsTable';
import { useTranslation } from 'react-i18next';

export default function Consumer() {
  const classes = useStyles();
  const [auctions, setAuctions] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [shipments, setShipments] = useState([]);
  const [auctionId, setAuctionId] = useState();
  const [biddings, setBiddings] = useState([]);
  const [t, i18n] = useTranslation('global');
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user.userId : null;
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.userId) {
      getAuctionsByUserIdApi(user.userId)
        .then((res) => {
          setAuctions(res.data.auctions);
        })
        .catch((err) => {
          // Handle the error, if needed
        });
    } else {
      // Handle the case where the user is not logged in
      // For example, you can redirect them to the login page
      console.log('User is not logged in');
      // Redirect to the login page or show a login prompt
    }
    // getProductsApi()
    //   .then((res) => {
    //     setAuctionId(res);
    //   })
    //   .catch((err) => {});
    if (user && user.userId) {
      getCartByUserIdApi(user.userId)
        .then((res) => {
          setCartData(res.data.data);
        })
        .catch((err) => {});
    } else {
      // Handle the case where the user is not logged in
      // For example, you can redirect them to the login page
      console.log('User is not logged in');
      // Redirect to the login page or show a login prompt
    }
    if (user && user.userId) {
      getShipmentsApi(user.userId)
        .then((res) => {
          setShipments(res.data.data);
        })
        .catch((err) => {});
    } else {
      // Handle the case where the user is not logged in
      // For example, you can redirect them to the login page
      console.log('User is not logged in');
      // Redirect to the login page or show a login prompt
    }
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.inner}>
        <Typography
          className="typo1"
          variant="h2"
          style={{
            fontSize: '40px',
          }}
        >
          {t('global.Consumer.title')}
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '20%',
            paddingRight: '20%',
          }}
        >
          <Typography className="typo2" variant="p">
            {t('global.Consumer.subTitle')}
          </Typography>
        </div>
      </div>
      <div className={classes.endone}>
        <SearchBar />
        {/* <div
          style={{
            marginLeft: '10%',
            display: 'flex',
          }}
        >
          <div
            style={{
              marginRight: '10%',
            }}
          >
            <ProductsFilter />
          </div>
          <div>
            <LocationsFilter />
          </div>
        </div> */}
        <ProductsMap />
        {userId && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Tabs defaultActiveKey="1" centered>
              <Tabs.TabPane tab={t('global.Consumer.cart')} key="2">
                <CartTable data={cartData} />
              </Tabs.TabPane>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
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
      fontSize: 18,
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
