import {
  ArrowLeftOutlined,
  CodeSandboxOutlined,
  HomeOutlined,
  LineChartOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './farmer.module.css';
import logo from '../../assets/logo-white.png';
import { useTranslation } from 'react-i18next';
const { Sider } = Layout;
const { Title } = Typography;

export default function FarmerSideBarMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
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

  useEffect(() => {
    getSelectedKeys();
  }, [location]);

  const getSelectedKeys = () => {
    if (location.pathname === '/farmer/reports') {
      return ['1'];
    } else if (location.pathname === '/farmer/dashboard') {
      return ['2'];
    } else if (location.pathname === '/farmer/product/upload') {
      return ['3'];
    }

    return [];
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={styles.sideBarTitle}>
        <Link to="/farmer" className={styles.sideBarLink}>
          <ArrowLeftOutlined color="white" />
        </Link>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={getSelectedKeys()}>
        <Menu.Item key="1" icon={<LineChartOutlined />}>
          <Link to="/farmer/reports">
            {t('global.FarmerDashboard.reports')}
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CodeSandboxOutlined />}>
          <Link to="/farmer/dashboard">
            {t('global.FarmerDashboard.products.title')}
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<PlusOutlined />}>
          <Link to="/farmer/product/upload">
            {t('global.FarmerDashboard.upload')}
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
