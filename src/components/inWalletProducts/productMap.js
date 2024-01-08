import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import image from "../../assets/dalchana.jpg";
import { getInWallet } from "../../redux/userInWallet/inWallet.actions";
import CardProduct from "../productCard";

export default function InWalletProducts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    inWallet: { createdProducts },
    isOnAuctiontAdded,
  } = useSelector((state) => state.inWallet);
  useEffect(() => {
    dispatch(getInWallet(id));
  }, [dispatch, isOnAuctiontAdded]);
  return (
    <Box className={classes.main}>
      <div className={classes.gridSection}>
        {createdProducts &&
          createdProducts.map((item, i) => {
            return <CardProduct key={i} {...item} showListingBtn={true} />;
          })}
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  gridSection: {
    width: "80%",
    margin: "0 auto",
    padding: "90px 0px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 40,
  },
  inner: {
    width: "80%",
    color: theme.palette.text.secondary,
    margin: "auto",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    "& .typo1": {
      padding: "40px  0px",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
      },
    },
    "& .typo2": {
      fontSize: 18,
      padding: "5px  0px",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
      },
    },
  },
}));

export const Data = [
  {
    image: image,
    text: " chana dhal",
    price: "50",
    location: "hunza",
    weight: "500g",
  },
  {
    image: image,
    text: " chana dhal",
    price: "50",
    location: "hunza",
    weight: "500g",
  },
  {
    image: image,
    text: " chana dhal",
    price: "50",
    location: "hunza",
    weight: "500g",
  },
  {
    image: image,
    text: " chana dhal",
    price: "50",
    location: "hunza",
    weight: "500g",
  },
  {
    image: image,
    text: " chana dhal",
    price: "50",
    location: "hunza",
    weight: "500g",
  },
];
