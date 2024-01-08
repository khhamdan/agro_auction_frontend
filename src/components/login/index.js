import { Box, FormHelperText, makeStyles, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Input } from "antd";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginUser,
  resetRegisteringUser,
} from "../../redux/register/register.actions";
import Buttons from "../buttons";
import { loginSchema } from "./schema";

export default function LoginSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loginLoadingSucess, loginLoadingFailed } = useSelector(
    (state) => state.registerSlice,
  );

  useEffect(() => {
    if (loginLoadingSucess) {
      navigate("/");
    }
  }, [loginLoadingSucess]);

  useEffect(() => {
    if (error && loginLoadingFailed) {
      setTimeout(() => {
        dispatch(resetRegisteringUser());
      }, 1000);
    }
  }, [error, loginLoadingFailed]);
  return (
    <Box mb={10} className={classes.mainContainer}>
      <Box pt={6} pb={3}>
        <Typography variant="h2" className="page-title">
          Sigin In
        </Typography>
      </Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          const payload = {
            email: values.email,
            password: values.password,
          };
          dispatch(LoginUser(payload));
        }}
      >
        {({
          errors,
          touched,
          values,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            {loginLoadingSucess && (
              <Alert severity="success" style={{ fontSize: 16 }}>
                Log In success
              </Alert>
            )}

            {error && loginLoadingFailed && (
              <Alert severity="error" style={{ fontSize: 16 }}>
                {error}
              </Alert>
            )}

            <br />

            <Box>
              <input
                size="large"
                placeholder="Email"
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                label="Email"
                className="form-input-field"
              />
              {errors.email && touched.email ? (
                <FormHelperText className={classes.helpertext} error>
                  {errors.email}
                </FormHelperText>
              ) : null}
            </Box>
            <Box pt={2}>
              <input
                size="large"
                placeholder="Password"
                type="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                label="Password"
                className="form-input-field"
              />
              {errors.password && touched.password ? (
                <FormHelperText className={classes.helpertext} error>
                  {errors.password}
                </FormHelperText>
              ) : null}
            </Box>

            <Box pt={2} display="flex" justifyContent="center">
              <Buttons
                className={classes.btn}
                variant="contained"
                color="primary"
                type="submit"
              >
                Log In
              </Buttons>
            </Box>
          </Form>
        )}
      </Formik>
      <Box mt={3} style={{ display: "flex" }}>
        <Typography className={classes.typo} variant="body1">
          New Customer?
        </Typography>
        <Link to="/signup">
          <Typography className="page-link">Register</Typography>
        </Link>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 450,
    paddingBottom: 60,
    color: "black",
    borderRadius: "10px",
    border: "1px solid #E0E0E0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    background: "white",
  },
  typo: {
    textAlign: "center",
    textTransform: "capitalize",
    color: theme.palette.text.secondary,
    fontSize: "14px",
    marginRight: 5,
  },
  ButtonSignin: {
    width: 180,
    textTransform: "capitalize",
    fontSize: 20,
    borderRadius: 25,
    fontWeight: 500,
    background: "linear-gradient(135deg, #849F70, #587547)",
  },
  formWrapper: {
    display: "grid",
    placeContent: "center",
  },
  helpertext: {
    fontSize: 12,
  },

  btn: {
    width: "100%",
    background: "linear-gradient(135deg, #849F70, #587547)",

    "&:hover": {
      cursor: "pointer",
      background: "linear-gradient(135deg, #587547, #849F70)",
    },
  },
}));
