import {
  ArrowLeftOutlined,
  HomeOutlined,
  LineChartOutlined,
  PlusOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../farmer/farmer.module.css';
import logo from '../../assets/logo-white.png';
import { useTranslation } from 'react-i18next';
const { Sider } = Layout;
const { Title } = Typography;

export default function AdminSideBarMenu() {
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
    if (location.pathname === '/adminpanel/users') {
      return ['1'];
    } else if (location.pathname === '/adminpanel/farmer') {
      return ['2'];
    }

    return [];
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={styles.sideBarTitle}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={getSelectedKeys()}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/adminpanel/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/adminpanel/farmer">Farmer</Link>
        </Menu.Item>{' '}
        <Menu.Item key="3" icon={<UserAddOutlined />}>
          <Link to="/adminpanel/addusers">Add Users</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
