import {
  ArrowLeftOutlined,
  HomeOutlined,
  LineChartOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './farmer.module.css';
import logo from '../../assets/logo-white.png';
import { useTranslation } from 'react-i18next';
const { Sider } = Layout;
const { Title } = Typography;

export default function FarmerMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

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
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={getSelectedKeys()}>
        <Menu.Item key="1">
          <Link to="/">
            {'   '}
            {t('global.Header.home')}
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/farmer">{t('global.Header.farmer')}</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/aboutus">{t('global.Header.about')}</Link>
        </Menu.Item>
        {user && user ? (
          <Menu.Item key="logout" onClick={handleLogout}>
            {t('global.Header.logout')}
          </Menu.Item>
        ) : (
          <></>
        )}
      </Menu>
    </>
  );
}
