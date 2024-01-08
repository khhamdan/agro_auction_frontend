import {
  Box,
  CircularProgress,
  FormControl,
  FormHelperText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import image from '../../assets/farm-road.jpeg';
import { Alert } from '@material-ui/lab';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UploadImage from '../../components/dropFileInput';
import { addProduct } from '../../redux/product/product.actions';
import { resetData } from '../../redux/product/product.slicer';
import { addProductSchema } from './schema';
import { useTranslation } from 'react-i18next';

const UploadFile = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t, i18n] = useTranslation('global');

  const { isProductAddLoading, isProductAdded } = useSelector(
    (state) => state.Product
  );

  const { userId } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (isProductAdded) {
      setTimeout(() => {
        dispatch(resetData());
        navigate(`/farmer/dashboard`);
      }, 1000);
    }
  }, [dispatch, isProductAdded]);
  const initialValues = {
    title: '',
    description: '',
    rate: '',
    location: 'lahore',
    weight: '',
    weighttype: 'grams',
    count: '',
    counttype: 'pieces',
    volume: '',
    volumetype: 'bushels',
    userId: userId,
    auctionEnd: '',
    file: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: addProductSchema,
    onSubmit: (values) => {
      let fd = new FormData();
      fd.append('title', values.title);
      fd.append('description', values.description);
      fd.append('rate', values.rate);
      fd.append('location', values.location);
      fd.append('weight', values.weight);
      fd.append('weighttype', values.weighttype);
      fd.append('count', values.count);
      fd.append('counttype', values.counttype);
      fd.append('volume', values.volume);
      fd.append('volumetype', values.volumetype);
      fd.append('userId', userId);
      fd.append('image', values.file);
      fd.append('auctionend', values.auctionEnd);
      dispatch(addProduct(fd));
    },
  });

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.formContainer}>
          <Box className={classes.title}>
            <Typography variant="h2">
              {t('global.FarmerDashboard.uploadPage.uploadTitle')}
            </Typography>
          </Box>
          {isProductAdded && (
            <Alert severity="success" style={{ fontSize: 16 }}>
              Product Added Successfully
            </Alert>
          )}

          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <UploadImage
              formik={formik}
              value={formik.values.file}
              helperText={
                (formik.touched.file && formik.errors.file) || `&nbsp`
              }
              error={formik.touched.file && Boolean(formik.errors.file)}
            />

            <div className={classes.fields}>
              <FormControl>
                <input
                  placeholder={t(
                    'global.FarmerDashboard.uploadPage.productName'
                  )}
                  className="upload-form-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="title"
                  error={formik.touched.title && Boolean(formik.errors.title)}
                />
                {formik.touched.title && (
                  <FormHelperText error={true} className={classes.helper}>
                    {formik.errors.title}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <input
                  placeholder={t('global.FarmerDashboard.uploadPage.price')}
                  className="upload-form-input"
                  type="number"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="rate"
                  helperText={formik.touched.rate && formik.errors.rate}
                  error={formik.touched.rate && Boolean(formik.errors.rate)}
                />
                {formik.touched.rate && (
                  <FormHelperText error={true} className={classes.helper}>
                    {formik.errors.rate}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <input
                  placeholder="Auction Ends On"
                  className="upload-form-input"
                  type="datetime-local"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="auctionEnd"
                  helperText={formik.touched.rate && formik.errors.rate}
                  error={formik.touched.rate && Boolean(formik.errors.rate)}
                />
                {formik.touched.rate && (
                  <FormHelperText error={true} className={classes.helper}>
                    {formik.errors.rate}
                  </FormHelperText>
                )}
              </FormControl>

              <div>
                <select
                  onChange={(e) =>
                    formik.setFieldValue('location', e.target.value)
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                  inputProps={{
                    name: 'location',
                  }}
                  style={{
                    marginBottom: '15px',
                    height: '50px',
                    width: '300px',
                  }}
                >
                  <option value="" disabled>
                    {t('global.FarmerDashboard.uploadPage.city')}
                  </option>
                  <option value="Lahore">
                    {t('global.FarmerDashboard.uploadPage.lahore')}
                  </option>
                  <option value="Islamabad">
                    {t('global.FarmerDashboard.uploadPage.islamabad')}
                  </option>
                  <option value="Peshawar">
                    {t('global.FarmerDashboard.uploadPage.peshawar')}
                  </option>
                  <option value="Quetta">
                    {t('global.FarmerDashboard.uploadPage.quetta')}
                  </option>
                  <option value="Karachi">
                    {t('global.FarmerDashboard.uploadPage.karachi')}
                  </option>
                </select>
              </div>
              <Typography style={{ marginBottom: '10px' }}>
                {t('global.FarmerDashboard.uploadPage.qualityTitle')}
              </Typography>
              <FormControl
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <input
                    placeholder={t('global.FarmerDashboard.uploadPage.weight')}
                    className="upload-form-input"
                    type="number"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.weight && Boolean(formik.errors.weight)
                    }
                    name="weight"
                    style={{ marginRight: '10px' }}
                  />
                </div>
                <div>
                  <select
                    onChange={(e) =>
                      formik.setFieldValue('weighttype', e.target.value)
                    }
                    onBlur={formik.handleBlur}
                    value={formik.values.weighttype}
                    inputProps={{
                      name: 'weighttype',
                    }}
                    style={{
                      marginBottom: '15px',
                      height: '50px',
                    }}
                  >
                    <option value="grams">
                      {t('global.FarmerDashboard.uploadPage.grams')}
                    </option>
                    <option value="kilograms">
                      {t('global.FarmerDashboard.uploadPage.kilograms')}
                    </option>
                    <option value="milligrams">
                      {t('global.FarmerDashboard.uploadPage.miligrams')}
                    </option>
                  </select>
                </div>
              </FormControl>
              <FormControl
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <input
                    placeholder={t('global.FarmerDashboard.uploadPage.count')}
                    className="upload-form-input"
                    type="number"
                    // onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    // error={
                    // formik.touched.weight && Boolean(formik.errors.weight)
                    // }
                    name="count"
                    style={{ marginRight: '10px' }}
                  />
                </div>
                <div>
                  <select
                    onChange={(e) =>
                      formik.setFieldValue('counttype', e.target.value)
                    }
                    onBlur={formik.handleBlur}
                    value={formik.values.counttype}
                    inputProps={{
                      name: 'counttype',
                    }}
                    style={{
                      marginBottom: '15px',
                      height: '50px',
                    }}
                  >
                    <option value="pieces">
                      {t('global.FarmerDashboard.uploadPage.pieces')}
                    </option>
                  </select>
                </div>
              </FormControl>
              <FormControl
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <input
                    placeholder={t('global.FarmerDashboard.uploadPage.volume')}
                    className="upload-form-input"
                    type="number"
                    // onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    // error={
                    // formik.touched.weight && Boolean(formik.errors.weight)
                    // }
                    name="volume"
                    style={{ marginRight: '10px' }}
                  />
                </div>
                <div>
                  <select
                    onChange={(e) =>
                      formik.setFieldValue('volumetype', e.target.value)
                    }
                    onBlur={formik.handleBlur}
                    value={formik.values.volumetype}
                    inputProps={{
                      name: 'volumetype',
                    }}
                    style={{
                      marginBottom: '15px',
                      height: '50px',
                    }}
                  >
                    <option value="bushels">
                      {t('global.FarmerDashboard.uploadPage.bushels')}
                    </option>
                  </select>
                </div>
              </FormControl>
              <FormControl>
                <textarea
                  placeholder={t(
                    'global.FarmerDashboard.uploadPage.description'
                  )}
                  rows={8}
                  multiline
                  onChange={formik.handleChange}
                  className="upload-form-textarea"
                  onBlur={formik.handleBlur}
                  name="description"
                />
                {formik.touched.description && (
                  <FormHelperText error={true} className={classes.helper}>
                    {formik.errors.description}
                  </FormHelperText>
                )}
              </FormControl>
            </div>
            <div
              style={{
                width: '340px',
              }}
            >
              <button
                variant="contained"
                type="submit"
                className="landing-box-button"
              >
                {isProductAddLoading ? (
                  <CircularProgress />
                ) : (
                  t('global.FarmerDashboard.uploadPage.buttonText')
                )}
              </button>
            </div>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default UploadFile;

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    padding: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 10,
    width: 450,
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  fields: {
    display: 'flex',
    flexDirection: ' column',
    marginLeft: -23,
    width: '300px',
  },
  title: {
    marginBottom: '1em',
  },
  helper: {
    fontSize: '12px',
  },
  forArea: {
    color: 'black',
    border: '3px solid #1BA665',
    padding: '10px 10px',
    '&:hover': {
      border: '3px solid #1BA665',
    },
  },
}));
