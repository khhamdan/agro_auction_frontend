import { EnvironmentOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProductByLocation } from '../../redux/product/product.actions';
import { useTranslation } from 'react-i18next';

function LocationsFilter() {
  const dispatch = useDispatch();
  const [selectedLocation, setselectedLocation] = useState(null);
  const [t, i18n] = useTranslation('global');

  const handleMenuClick = (e) => {
    const selectedKey = e.key;

    var selectedCity = menuItems.find(function (item) {
      return item.key === selectedKey;
    })
      ? menuItems.find(function (item) {
          return item.key === selectedKey;
        }).city
      : undefined;

    if (selectedCity) {
      setselectedLocation(selectedCity);
      console.log('Selected City', selectedCity);
      dispatch(searchProductByLocation(selectedCity));
    }
  };

  const menuItems = [
    { key: '1', city: 'Islamabad' },
    { key: '2', city: 'Lahore' },
    { key: '3', city: 'Karachi' },
    { key: '4', city: 'Peshawar' },
    { key: '5', city: 'Quetta' },
  ];

  const menu = (
    <Menu onClick={handleMenuClick}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>{item.city}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown.Button overlay={menu}>
      {t('global.Consumer.location')} <EnvironmentOutlined />
    </Dropdown.Button>
  );
}

export default LocationsFilter;
