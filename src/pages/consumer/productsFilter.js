import React from 'react';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  FilterOutlined,
  EnvironmentOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useTranslation } from 'react-i18next';

function handleMenuClick(e) {
  console.log('click', e);
}

function ProductsFilter() {
  const { t } = useTranslation('global');
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<ArrowUpOutlined />}>
        {t('global.Consumer.ratingLth')}
      </Menu.Item>
      <Menu.Item key="2" icon={<ArrowDownOutlined />}>
        {t('global.Consumer.ratingLth')}
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown.Button overlay={menu}>
      {t('global.Consumer.rating')} <StarOutlined />
    </Dropdown.Button>
  );
}

export default ProductsFilter;
