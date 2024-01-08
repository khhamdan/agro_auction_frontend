import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

export default function Card({ heading, description, image }) {
  const classes = useStyles();
  return (
    <Box className={classes.maincontainer}>
      <Box className={classes.inner1}>
        <Typography variant="h3">{heading}</Typography>
      </Box>
      <Box className={classes.inner2}>
        {" "}
        <img className="image" src={image} alt="img" />
      </Box>

      <Box className={classes.inner3}>
        <Typography variant="subtitile2">{description}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    width: 250,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  inner1: {
    textTransform: " capitalize",
    padding: "20px 0px",
  },

  inner2: {
    padding: "20px 0px",
    "& .image": {
      width: 200,
      height: 200,
    },
  },
}));
