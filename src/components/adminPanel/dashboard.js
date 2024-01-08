import React, { useEffect, useState } from 'react';
import { Avatar, Button, Dropdown, Layout, Menu, Typography } from 'antd';
import styles from '../farmer/farmer.module.css';
import AdminSideBarMenu from './menu';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminTable from './adminTable';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const { Title } = Typography;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

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

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <AdminSideBarMenu />
      <Layout className={styles.siteLayout}>
        <Header className={styles.siteLayoutBackground} style={{ padding: 0 }}>
          <div className={styles.headerTitle}>
            <Title level={4}>Admin Panel</Title>
          </div>
          <div className={styles.header}>
            <div className={styles.headerLeft}></div>
            <div className={styles.headerRight}>
              <Dropdown overlay={menu}>
                <Avatar icon={<UserOutlined />} className={styles.avatar} />
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className={styles.siteLayoutContent}>
            <AdminTable />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
