import {
  Box,
  CircularProgress,
  FormControl,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { registerUser } from '../../redux/register/register.actions';
import Buttons from '../buttons';

export default function SignupSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    isUserRegistering,
    isUserRegisteringSuccess,
    isUserRegisteringFailed,
  } = useSelector((state) => state.registerSlice);
  const naviagte = useNavigate();

  useEffect(() => {
    let timer;
    if (isUserRegisteringSuccess) {
      timer = setTimeout(() => {
        naviagte('/signin');
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isUserRegisteringSuccess]);

  const initialValues = {
    userName: '',
    passowrd: '',
    email: '',
    role: '',
  };
  const signUpSchema = yup.object({
    userName: yup.string().required('user name is required'),
    passowrd: yup.string().required('password is required').min(5),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required')
      .matches(/@gmail\.com$/, 'Must be a Gmail account'),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const payload = {
        email: values.email,
        username: values.userName,
        password: values.passowrd,
        role: values.role,
      };
      dispatch(registerUser(payload));
    },
  });

  return (
    <Box className={classes.mainContainer}>
      {isUserRegisteringSuccess && (
        <Alert severity="success" style={{ fontSize: 16 }}>
          Registered SuccessFully
        </Alert>
      )}

      {isUserRegisteringFailed && (
        <Alert severity="error" style={{ fontSize: 16 }}>
          Something went really wrong
        </Alert>
      )}

      <br />
      <Box>
        <Typography className="page-title" variant="h2">
          Create Account
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit} className="page-form">
        <Box pt={2} pb={1}>
          <input
            className="form-input-field"
            name="userName"
            variant="outlined"
            placeholder="Username"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.userName && formik.errors.userName}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
          />
        </Box>
        <Box pb={1}>
          <input
            className="form-input-field"
            variant="outlined"
            placeholder="Email Address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
        </Box>
        <Box pb={2}>
          <input
            className="form-input-field"
            variant="outlined"
            placeholder="Password"
            name="passowrd"
            type="password"
            value={formik.values.passowrd}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.passowrd && formik.errors.passowrd}
            error={formik.touched.passowrd && Boolean(formik.errors.passowrd)}
          />
        </Box>
        <Typography
          style={{ color: '#fff', fontSize: '16px', textAlign: 'center' }}
        ></Typography>
        <div>
          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <select
                onChange={formik.handleChange}
                label="Age"
                name="role"
                className="form-select-field"
              >
                <option value={'user'}>User</option>
                <option value={'farmer'}>Farmer</option>
              </select>
            </FormControl>
          </div>
        </div>

        <Box mt={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <Buttons
            className={classes.ButtonSignin}
            variant="contained"
            type="submit"
          >
            {' '}
            {isUserRegistering && !isUserRegisteringSuccess ? (
              <CircularProgress />
            ) : (
              'Sign Up'
            )}
          </Buttons>
        </Box>
      </form>
      <Box mt={3} style={{ display: 'flex' }}>
        <Typography className={classes.typo} variant="body1">
          Existing Customer?
        </Typography>
        <Link to="/signin">
          <Typography className="page-link">Sign In</Typography>
        </Link>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 450,
    height: 'fit-content',
    color: 'black',
    borderRadius: '10px',
    border: '1px solid #E0E0E0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    marginBottom: 90,
    marginTop: 60,
    padding: 20,
    paddingBottom: 70,
    background: 'white',
  },
  menulist: {
    '& .MuiMenu-paper': {
      background: '#323232',
    },
    color: '',
  },
  mainbtn: {
    width: 220,
    borderRadius: 5,
  },
  typo: {
    color: theme.palette.text.primary,
    textTransform: 'capitalize',
  },
  typoSignUp: {
    color: theme.palette.text.primary,
    fontWeight: 800,
    textTransform: 'capitalize',
  },
  typo: {
    textAlign: 'center',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    fontSize: '14px',
    marginRight: 5,
  },
  ButtonSignin: {
    width: '100%',
    background: 'linear-gradient(135deg, #849F70, #587547)',

    '&:hover': {
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #587547, #849F70)',
    },
  },
  formControl: {
    width: '100%',
    margin: 0,
    '& .MuiSelect-icon': {
      top: 0,
    },
  },
}));
