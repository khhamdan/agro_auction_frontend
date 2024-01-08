import React, { useRef } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
function ImageUpload({ formik, value, helperText, error }) {
  const inputRef = useRef(null);
  const handleChange = async (event) => {
    const file = event.target.files[0];
    formik.setFieldValue('file', file);
  };
  const classes = useStyles();
  const [t, i18n] = useTranslation('global');
  return (
    <div>
      <div className={classes.upload} onClick={() => inputRef.current.click()}>
        <div className={classes.widthNft}>
          <PublishIcon className={classes.icon} />

          <Typography variant="h5">
            {t('global.FarmerDashboard.uploadPage.uploadImageText')}
          </Typography>
        </div>
        {value && (
          <div className={classes.image}>
            <img
              src={value && URL.createObjectURL(value)}
              alt="img"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        )}
      </div>

      <small
        className={clsx(classes.helperText, { [classes.error]: error })}
        dangerouslySetInnerHTML={{ __html: helperText }}
      />
      <Typography className={classes.helperText}>
        File format&nbsp;:&nbsp; JPEG, GIF, JPG, PNG, SVG, MP4
      </Typography>

      <input
        type={'file'}
        name="file"
        onChange={handleChange}
        ref={inputRef}
        hidden
      />
    </div>
  );
}

export default ImageUpload;

const useStyles = makeStyles((theme) => ({
  upload: {
    border: '1px solid lightgray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    flexDirection: 'column',
    height: '100px',
    overflow: 'hidden',
    width: '330px',
    borderRadius: 10,
    marginLeft: 8,
  },
  icon: {
    color: theme.palette.text.secondary,
    height: 40,
  },
  widthNft: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'Center',
    flexDirection: 'column',
    width: 'fit-content',
    height: 'fit-content',
    zIndex: 10,
  },

  image: {
    width: '100%',
    height: '100%',
    zIndex: 100,
    '&:hover': {
      zIndex: -1,
    },
  },

  helperText: {
    fontSize: 12,
    marginBottom: 10,
    marginTop: -10,
  },
  error: {
    color: 'red',
  },
}));
