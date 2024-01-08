import React from 'react';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import v1 from '../../assets/video.mp4';
import v2 from '../../assets/video1.mp4';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const classes = useStyles();
  const [t, i18n] = useTranslation('global');
  return (
    <div className={classes.root}>
      <div className={classes.headingSec}>
        <Typography variant="h1" className={classes.heading}>
          {t('global.AboutUs.title')}
        </Typography>
      </div>
      <div className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="body1" paragraph>
                {t('global.AboutUs.body1')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('global.AboutUs.body2')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.videoContainer}>
              <video className={classes.video} loop autoPlay controls>
                <source src={v1} type="video/mp4" />
              </video>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className={classes.videoContainer}>
              <video className={classes.video} loop autoPlay controls>
                <source src={v2} type="video/mp4" />
              </video>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="body1" paragraph>
                {t('global.AboutUs.body3')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('global.AboutUs.body4')}
              </Typography>
              <Typography variant="body1">
                {t('global.AboutUs.thanks')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  headingSec: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '6%',
  },
  heading: {
    fontSize: '2.5rem',
  },
  container: {
    marginTop: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
    minHeight: '410px',
  },
  videoContainer: {
    position: 'relative',
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

export default AboutUs;
