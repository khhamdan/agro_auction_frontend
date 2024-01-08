import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react';
import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function RedesignedFooter() {
  const classes = useStyles();
  const [t, i18n] = useTranslation('global');
  const user = JSON.parse(localStorage.getItem('user'));
  console.log('footer', user);
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box className={classes.logoContainer}>
              <img src={logo} alt="logo" className={classes.logo} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" className={classes.heading}>
              {t('global.Footer.aboutUs')}
            </Typography>
            <Typography className={classes.text}>
              {t('global.Footer.text')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" className={classes.heading}>
              {t('global.Footer.quickLinks')}
            </Typography>
            <Typography className={classes.link}>
              <Link to={'/farmer'}>{t('global.Footer.link.farmer')}</Link>
            </Typography>
            <Typography className={classes.link}>
              <Link to={'/consumer'}>{t('global.Footer.link.buyer')}</Link>
            </Typography>
            <Typography className={classes.link}>
              <Link to={'/aboutus'}>{t('global.Footer.link.about')}</Link>
            </Typography>
            <Typography className={classes.link}>
              <Link to={'/'}>{t('global.Footer.link.home')}</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" className={classes.heading}>
              {t('global.Footer.contact')}
            </Typography>
            <Box className={classes.contactInfo}>
              <Box className={classes.contactItem}>
                <HomeIcon className={classes.icon} />
                <Typography className={classes.text}>
                  {t('global.Footer.country')}
                </Typography>
              </Box>
              <Box className={classes.contactItem}>
                <MailIcon className={classes.icon} />
                <Typography className={classes.text}>
                  {t('global.Footer.email')}
                </Typography>
              </Box>
              <Box className={classes.contactItem}>
                <PhoneIcon className={classes.icon} />
                <Typography className={classes.text}>
                  {t('global.Footer.phone')}
                </Typography>
              </Box>
              <Box className={classes.contactItem}>
                <WhatsAppIcon className={classes.icon} />
                {t('global.Footer.whatsapp')}
                <Typography className={classes.text}></Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.socialContainer}>
          <Typography className={classes.socialText}>
            {t('global.Footer.socialText')}
          </Typography>
          <Box className={classes.socialIcons}>
            <a
              href={
                'https://www.facebook.com/profile.php?id=61554554921267&mibextid=gik2fB'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className={classes.icon} id="fb-icon" />
            </a>
            <a
              href={
                'https://x.com/SyedaTayyabaTa2?t=bLfN71qm_tDfE3fqMRsBLA&s=08'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className={classes.icon} id="twitter-icon" />
            </a>
            <a
              href={
                'https://www.instagram.com/agroauction111?igshid=NGVhN2U2NjQ0Yg=='
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className={classes.icon} id="insta-icon" />
            </a>
          </Box>
        </Box>
      </Container>

      <Box className={classes.footerBottom}>
        <Typography variant="body1" className={classes.text}>
          &copy; 2024 Agroic. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#5b8c5116',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '150px',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  text: {
    fontSize: '1rem',
    color: theme.palette.text.primary,
  },
  link: {
    fontSize: '1rem',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
    width: 30,
  },
  socialContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing(4),
  },
  socialText: {
    fontSize: '1rem',
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2),
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
}));
