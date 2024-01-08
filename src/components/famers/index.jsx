import { Avatar, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import { Skeleton } from "@material-ui/lab";
import { baseURL } from "../../Http/config";
const TopSellerCard = ({ image, username }) => {
  const classes = useStyle();

  return (
    <Box className={classes.container}>
      {image ? (
        <img
          alt="image"
          className={classes.imageOne}
          src={`${baseURL}assets/profilePicture/${image}`}
        />
      ) : (
        <>
          {" "}
          <Avatar
            alt="farmar"
            src={"/broken-image.jpg"}
            className={classes.imageOne}
          >
            {username.slice(0, 1)}
          </Avatar>
        </>
      )}

      <Box className={classes.topSellerProfile}>
        <Typography variant="h5">@ {username}</Typography>
      </Box>
    </Box>
  );
};

export default TopSellerCard;

export const FarmerSkeltonCard = () => {
  const classes = useStyle();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className={classes.container}>
        <Skeleton
          animation="wave"
          variant="circle"
          className={classes.imageOne}
        />
      </Box>
      <Box className={classes.topSellerProfile}>
        <Skeleton animation="wave" variant="text" width="160px" height="40px" />
      </Box>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  sellerContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 21,
  },
  imageContainer: {
    width: 177,
    height: 177,
    [theme.breakpoints.down("md")]: {
      width: 130,
      height: 130,
    },
  },
  SellerOne: {
    width: 380,
    height: 80,
    background: "linear-gradient(270.48deg, #0F1952 -10.2%, #151A33 93.45%)",
    marginTop: 27,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageOne: {
    borderRadius: "50%",
    width: 177,
    height: 177,
    objectFit: "cover ",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      width: 130,
      height: 130,
    },
  },
  topSellerProfile: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: 7,
    marginTop: 23,
    textDecoration: "none",
  },
  profileLink: {
    textDecoration: "none",
    color: theme.palette.text.head,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: theme.palette.text.head,
  },
}));
