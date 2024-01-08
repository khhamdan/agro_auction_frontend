import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import img from "../../assets/bg.jpg";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.checkoutMain}>
        <div>
          <Typography variant="h1" className={classes.heading}>
            please proceed to check out
          </Typography>
        </div>
        <Box className={classes.row}>
          <img alt="img" src={img} className={classes.img} />
        </Box>
        <Box className={classes.row}>
          <Box>
            <Typography variant="h2" className={classes.text}>
              Price
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" className={classes.text}>
              Rs 25000
            </Typography>
          </Box>
        </Box>
        <Box className={classes.row}>
          <Box>
            <Typography variant="h2" className={classes.text}>
              Quantity
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" className={classes.text}>
              200
            </Typography>
          </Box>
        </Box>
        <Box rowEnd>
          <Link to="/checkoutProduct">
            {" "}
            <button type="submit" className={classes.btn}>
              Pay Now
            </button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CheckoutPage;

const useStyles = makeStyles((theme) => ({
  checkoutMain: {
    width: "80%",
    margin: "auto",
    height: "100vh",
    display: "flex",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    width: "100%",
    height: "400px",
  },
  row: {
    color: "#5A5F64",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {},
  btn: {
    border: "none",
    outline: "none",
    width: 500,
    padding: "20px 30px",
    borderRadius: "12px",
    backgroundColor: "#1BA665",
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      marginBottom: 60,
    },
  },

  heading: {
    paddingBottom: 30,
    color: "#1BA665",
    textTransform: "capitalize",
  },
  rowEnd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
