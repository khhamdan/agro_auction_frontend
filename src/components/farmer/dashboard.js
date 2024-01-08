import React, { useEffect, useState } from 'react';
import { Avatar, Button, Dropdown, Layout, Menu, Typography } from 'antd';
import styles from './farmer.module.css';
import FarmerSideBarMenu from './menu';
import ProductsTable from './productsTable';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;

const { Title } = Typography;

const FarmerDashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();

  // const handleButton = () => {
  //   navigate('/farmer/product/upload');
  // };

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
            <Title level={4}>
              {t('global.FarmerDashboard.products.title')}
            </Title>
          </div>
          {/* <div className={styles.header}>
            <div className={styles.headerLeft}>
              <Button onClick={handleButton}>
                {t('global.FarmerDashboard.upload')}
              </Button>
            </div>
          </div> */}
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className={styles.siteLayoutContent}>
            <ProductsTable />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default FarmerDashboard;
