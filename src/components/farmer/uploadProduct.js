import React, { useEffect, useState } from 'react';
import { Avatar, Dropdown, Layout, Menu, Typography } from 'antd';
import styles from './farmer.module.css';
import FarmerSideBarMenu from './menu';
import ProductsTable from './productsTable';
import UploadFile from '../../pages/uploadProduct';
import { useTranslation } from 'react-i18next';

const { Header, Content } = Layout;

const { Title } = Typography;

const FarmerUploadProduct = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    });

    if (window.innerWidth < 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, []);

  return (
    <Layout>
      <FarmerSideBarMenu />
      <Layout className={styles.siteLayout}>
        <Header className={styles.siteLayoutBackground} style={{ padding: 0 }}>
          <div className={styles.headerTitle}>
            <Title level={4}>{t('global.FarmerDashboard.title')}</Title>
          </div>
          <div className={styles.header}>
            <div className={styles.headerLeft}></div>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className={styles.siteLayoutContent}>
            <UploadFile />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default FarmerUploadProduct;
