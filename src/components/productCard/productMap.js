import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardProduct from '.';
import image from '../../assets/dalchana.jpg';
import { Dropdown, Menu } from 'antd';
import { Button } from '@mui/material';
import { getProductsApi } from '../../Http/api';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useTranslation } from 'react-i18next';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  FilterOutlined,
  EnvironmentOutlined,
  StarOutlined,
} from '@ant-design/icons';
import RefreshIcon from '@mui/icons-material/Refresh';
import { resetSearchResults } from '../../redux/product/product.slicer';

export default function ProductsMap() {
  const [allProductsData, setAllProductsData] = useState([]);
  let searchItem = useSelector((state) => state.Product.allProductsData) || [];
  console.log('search', searchItem);
  const classes = useStyles();

  const dispatch = useDispatch();
  const [selectedLocation, setselectedLocation] = useState(null);
  const [t, i18n] = useTranslation('global');
  const [selectedRating, setSelectedRating] = useState(null);

  // ----------------Location----------------

  const handleLocationFilter = (e) => {
    const location = e.item.props.city.toLowerCase();
    console.log('Selected location:', location);
    setselectedLocation(location);
  };

  const menuItems = [
    { key: '1', city: 'Islamabad' },
    { key: '2', city: 'Lahore' },
    { key: '3', city: 'Karachi' },
    { key: '4', city: 'Peshawar' },
    { key: '5', city: 'Quetta' },
  ];

  const menu = (
    <Menu onClick={handleLocationFilter}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} city={item.city}>
          {item.city}
        </Menu.Item>
      ))}
    </Menu>
  );

  // ---------------------------Rating-------------------

  const handleRatingFilter = (e) => {
    const rating = e.item.props.rating;
    console.log('Selected rating:', rating);

    setSelectedRating(rating);
  };

  const ratingMenuItems = [
    { key: '1', rating: 0 },
    { key: '2', rating: 1 },
    { key: '3', rating: 2 },
    { key: '4', rating: 3 },
    { key: '5', rating: 4 },
    { key: '6', rating: 5 },
  ];

  const menu1 = (
    <Menu onClick={handleRatingFilter}>
      {ratingMenuItems.map((item) => (
        <Menu.Item key={item.key} rating={item.rating}>
          {item.rating}
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleRefresh = () => {
    getProductsApi().then((res) => {
      if (res) {
        // Set local state for updated display
        setAllProductsData(res.data.productInfo);
        setSelectedRating(null);
        setselectedLocation(null);
        dispatch(resetSearchResults([]));
      }
    });
  };
  // Fetch all products on component mount
  useEffect(() => {
    getProductsApi().then((res) => {
      if (res) {
        // Set local state based on searchItem
        console.log('products', res);
        setAllProductsData(
          searchItem && searchItem.length > 0
            ? searchItem
            : res.data.productInfo
        );
      }
    });
  }, [searchItem]);

  return (
    <Box className={classes.main}>
      <div
        style={{
          marginLeft: '10%',
          display: 'flex',
          gap: '20px',
        }}
      >
        <div>
          <Dropdown.Button overlay={menu1}>
            {t('global.Consumer.rating')} <StarOutlined />
          </Dropdown.Button>
        </div>
        <div>
          <Dropdown.Button overlay={menu}>
            {t('global.Consumer.location')} <EnvironmentOutlined />
          </Dropdown.Button>
        </div>
        <div>
          {/* Add a refresh button */}
          <Button onClick={handleRefresh}>
            <RefreshIcon />
          </Button>
        </div>
      </div>
      <div className={classes.gridSection}>
        {(searchItem.length > 0 ? searchItem : allProductsData)
          .filter((item) => item.status === 1 && item.status !== null)
          .filter((item) =>
            selectedRating ? item.rating === selectedRating : true
          )
          .filter((item) =>
            selectedLocation
              ? item.location.toLowerCase() === selectedLocation
              : true
          )
          .map((item, i) => (
            <CardProduct key={i} {...item} />
          ))}
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  gridSection: {
    width: '80%',
    margin: '0 auto',
    padding: '90px 0px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 40,
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
}));

export const Data = [
  {
    image: image,
    text: ' chana dhal',
    price: '50',
    location: 'hunza',
    weight: '500g',
  },
  {
    image: image,
    text: ' chana dhal',
    price: '50',
    location: 'hunza',
    weight: '500g',
  },
  {
    image: image,
    text: ' chana dhal',
    price: '50',
    location: 'hunza',
    weight: '500g',
  },
  {
    image: image,
    text: ' chana dhal',
    price: '50',
    location: 'hunza',
    weight: '500g',
  },
  {
    image: image,
    text: ' chana dhal',
    price: '50',
    location: 'hunza',
    weight: '500g',
  },
];
