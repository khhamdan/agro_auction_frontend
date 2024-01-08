import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.thanksMain}>
        <div className={classes.thanksinner}>
          <Typography variant="h1"> Order Successful</Typography>

          <Typography variant="h5" className="typo2">
            Thank you for purchasing our farming product! We appreciate your
            support and are glad to know that our product will be put to good
            use. If you have any questions or concerns, please don't hesitate to
            reach out to us. We're always here to help.
          </Typography>
          <Link to="/">
            {" "}
            <button className={classes.btn}>Shopping More</button>
          </Link>
        </div>
      </div>{" "}
      {/* <div className={classes.thanksMain}>
        <div className={classes.thanksinner}>
          <Typography variant="h1"> Order Failed</Typography>

          <Typography variant="h5" className="typo2">
            We're sorry to hear that your purchase was not successful. Please
            try again, and if you continue to experience difficulty, please
            contact us for assistance. We want to ensure that your shopping
            experience is as smooth as possible.
          </Typography>
          <button className={classes.btn}>Try Again</button>
        </div>
      </div>{" "} */}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "20px 0px",
  },
  thanksMain: {
    width: "50%",
    marginTop: "90px",

    margin: "auto",
    border: "2px solid " + theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      width: "80%",
      height: "auto",
    },
  },
  thanksinner: {
    color: "#5A5F64",
    paddingTop: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,

    "& .typo2": {
      marginTop: 50,
      padding: "0px 80px",
    },
  },

  btn: {
    border: "none",
    marginTop: 50,
    outline: "none",
    width: 200,
    padding: "20px 30px",
    borderRadius: "12px",
    backgroundColor: "#1BA665",
    color: "#fff",
    marginBottom: "20px",

    "&:hover": {
      cursor: "pointer",
    },
  },
}));
