import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './style.css';
import ChatComponent from '../chat/chat';
import { useTranslation } from 'react-i18next';
import { Button, Dropdown, Menu } from 'antd';
import {
  CaretDownOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
const BuyerHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [role, setRole] = useState('');
  const [t, il8n] = useTranslation('global');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };
  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to={`/myprofile/${userId}`} className="nav-link">
          <UserOutlined />
          {t('global.Header.profile')}
        </Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined /> {t('global.Header.logout')}
      </Menu.Item>
    </Menu>
  );
  const headerStyle = {
    backgroundColor: '#5b8c5116',
    position: 'absolute',
    zIndex: '1000000',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
  };

  const logoStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    width: '120px',
    objectFit: 'cover',
    height: '50px',
    // marginLeft: '20px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: '#4CAF50',
    marginLeft: '20px',
    fontSize: '18px',
    transition: 'color 0.3s ease', // Smooth color transition on hover
  };

  const signInButtonStyle = {
    backgroundColor: 'white',
    color: '#4CAF50',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth hover effect
    marginLeft: '20px',
    marginRight: '20px',
  };
  const menu2 = (
    <Menu>
      <Menu.Item key="home">
        <Link to={`/`} className="nav-link">
          {t('global.Header.home')}
        </Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Link to={`/myprofile/${userId}`} className="nav-link">
          {t('global.Header.profile')}
        </Link>
      </Menu.Item>
      <Menu.Item key="aboutus">
        <Link to={`/aboutus`} className="nav-link">
          {t('global.Header.about')}
        </Link>
      </Menu.Item>
      <Menu.Item key="farmer">
        <Link to={`/farmer`} className="nav-link">
          {t('global.Header.farmer')}
        </Link>
      </Menu.Item>
      <Menu.Item key="buyer">
        <Link to={`/consumer`} className="nav-link">
          {t('global.Header.buyer')}
        </Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        {t('global.Header.logout')}
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      setRole(userInfo.role);
      setUserId(userInfo.userId);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div style={headerStyle}>
      <div>
        <Link to="/" style={logoStyle}>
          <img src={logo} alt="logo" style={logoStyle} />
        </Link>
      </div>
      <div>
        <Link to="/" style={navLinkStyle} className="nav-link">
          {t('global.Header.home')}
        </Link>
        <Link to="/consumer" style={navLinkStyle} className="nav-link">
          {t('global.Header.buyer')}
        </Link>

        {/* )} */}
        <Link to="/aboutus" style={navLinkStyle} className="nav-link">
          {t('global.Header.about')}
        </Link>
        {isLoggedIn === true ? (
          <>
            <Dropdown overlay={menu}>
              <span
                style={navLinkStyle}
                className="nav-link"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                {t('global.Header.logout')}
              </span>
            </Dropdown>
          </>
        ) : (
          <Link to="/signin">
            <button style={signInButtonStyle} className="signin-button">
              {t('global.Header.signin')}
            </button>
          </Link>
        )}
        <ChatComponent />
      </div>
    </div>
  );
};

export default BuyerHeader;
