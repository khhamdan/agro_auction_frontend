import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.png';
import './style.css';
import { useTranslation } from 'react-i18next';
import { Dropdown, Menu } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {
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
    background: '#7da375',
    position: 'sticky',
    top: 0,
    zIndex: '1000000',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
  };
  const homeLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  };

  const languageContainerStyle = {
    marginRight: '40px',
  };
  const logoStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    width: '170px',
    objectFit: 'cover',
    height: '50px',
    marginLeft: '20px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      setRole(userInfo.role);
      setUserId(userInfo.userId);
      setIsLoggedIn(true);
      // setIsDropdownVisible(false);
    }
  }, []);

  return (
    <div style={headerStyle} className="landing-header">
      <Link to="/" style={logoStyle}>
        <img src={logo} alt="logo" style={logoStyle} />
      </Link>
      <div>
        <Link to="/" style={navLinkStyle} className="nav-link">
          {t('global.Header.home')}
        </Link>
        {
  user ? (
    user.role === 'farmer' ? (
      <Link to="/farmer" style={navLinkStyle} className="nav-link">
        {t('global.Header.farmer')}
      </Link>
    ) : (
      <Link to="/consumer" style={navLinkStyle} className="nav-link">
        {t('global.Header.buyer')}
      </Link>
    )
  ) : (
    <>
      <Link to="/farmer" style={navLinkStyle} className="nav-link">
        {t('global.Header.farmer')}
      </Link>
      <Link to="/consumer" style={navLinkStyle} className="nav-link">
        {t('global.Header.buyer')}
      </Link>
    </>
  )
}
        {/* <Link to="/consumer" style={navLinkStyle} className="nav-link">
          {t('global.Header.buyer')}
        </Link> */}
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
      </div>
    </div>
  );
};

export default Header;
