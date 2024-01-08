import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/carousel-5.jpg';
import logo from '../../assets/logo.png';
import './login.css';
import { requestLoginUser } from '../../Http/api';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const [t, i18n] = useTranslation('global');

  const validateEmail = (email) => {
    // Add allowed email domains to this array
    const allowedDomains = [
      'gmail.com',
      'hotmail.com',
      'yahoo.com',
      'outlook.com',
    ];

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Split the email to get the domain
    const [, domain] = email.split('@');

    // Check if the email format is valid and the domain is allowed
    if (!emailRegex.test(email) || !allowedDomains.includes(domain)) {
      setEmailError('Invalid email or email domain not allowed');
      return false;
    }

    // Reset the email error if it was set previously
    setEmailError('');
    return true;
  };
  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return re.test(password);
  };

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Invalid email');
      isValid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
      );
      isValid = false;
    }

    if (isValid) {
      const payload = {
        email,
        password,
      };

      requestLoginUser(payload)
        .then((res) => {
          const userInfo = res.data.userInfo;
          Swal.fire({
            title: 'Success',
            text: 'Login Successful',
            icon: 'success',
            confirmButtonText: 'Ok',
          }).then(() => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.userInfo));
            if (userInfo.role === 'admin') {
              navigate('/adminpanel');
            } else {
              navigate('/');
            }
          });
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            title: 'Error',
            text: 'Error',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        });
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div>
          <label htmlFor="email">{t('global.SignIn.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            placeholder="someone@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
          <label htmlFor="password">{t('global.SignIn.password')}</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
          <button
            type="submit"
            className="landing-box-button"
            onClick={handleLogin}
          >
            {t('global.SignIn.buttonText')}
          </button>
        </div>
        <p>
          {t('global.SignIn.noAccountText')}{' '}
          <Link to="/signup">{t('global.SignIn.buttonText')}</Link>
        </p>
      </div>
      <div className="right-section">
        <img src={image} alt="Login Image" />
      </div>
    </div>
  );
}

export default LoginComponent;
