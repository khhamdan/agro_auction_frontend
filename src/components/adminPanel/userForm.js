import React, { useState } from 'react';
// import './login.css';
import '../login/login.css';
// import image from '../../assets/carousel-5.jpg';
// import logo from '../../assets/ca';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../farmer/farmer.module.css';

import Swal from 'sweetalert2';
import { requestRegisterUser } from '../../Http/api';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
const { Text } = Typography;

function UserForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = () => {
    // Email validation for @gmail.com format
    const gmailRegex = /@gmail\.com$/;
    if (!gmailRegex.test(email)) {
      Swal.fire({
        title: 'Error',
        text: 'Email must be in the @gmail.com format',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Error',
        text: 'Passwords do not match',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: 'Error',
        text: 'Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    const data = {
      username,
      email,
      password,
      role,
    };

    requestRegisterUser(data).then((res) => {
      if (res.status === 201) {
        Swal.fire({
          title: 'Success',
          text: 'User registered successfully',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then(() => {
          navigate('/adminpanel');
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });
  };

  return (
    <div className="login-container">
      <div className="left-section">
        {/* <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link> */}
        <Text className={styles.componentHeading}>Add User</Text>

        <div>
          <label htmlFor="username">{t('global.SignUp.username')}</label>
          <input
            id="username"
            name="username"
            value={username}
            placeholder="user_abc"
            onChange={handleUsernameChange}
            required
          />
          <label htmlFor="email">{t('global.SignUp.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="someone@example.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">{t('global.SignUp.password')}</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label htmlFor="confirmPassword">
            {t('global.SignUp.confirmPassword')}
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="password"
            onChange={handleConfirmPasswordChange}
            required
          />
          <label htmlFor="role">{t('global.SignUp.role')}</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={handleRoleChange}
            required
          >
            <option value="user">{t('global.SignUp.user')}</option>
            <option value="farmer">{t('global.SignUp.farmer')}</option>
          </select>
          <button
            type="submit"
            className="landing-box-button"
            onClick={handleSubmit}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
