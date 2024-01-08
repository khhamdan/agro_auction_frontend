import React, { useEffect } from "react";
// import image from "../../assets/pic.png";
import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import { alpha, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { singleusers } from "../../redux/users/singleuser/singleuser.action";
import { baseURL } from "../../Http/config";
const ProfileFormer = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    singleuser: { userInfo },
  } = useSelector((state) => state.singleuserSlicer);
  console.log(userInfo, "infp");

  useEffect(() => {
    dispatch(singleusers(id));
  }, [dispatch]);
  return (
    <>
      <MuiCard className={classes.root}>
        <CardActionArea>
          <CardContent className={classes.media}>
            <img
              src={`${baseURL}/assets/profilePicture/${userInfo.image}`}
              alt=""
              style={{}}
              className={classes.image}
            />
          </CardContent>
          <CardContent className={classes.cardTitleContainer}>
            <div className={classes.dataaSecc}>
              <Box className={classes.cardadata}>
                <Typography
                  gutterBottom
                  variant="h3"
                  className={classes.avatarLink}
                >
                  name:
                </Typography>{" "}
                <Typography
                  gutterBottom
                  variant="h4"
                  className={classes.avatarLink}
                >
                  {userInfo.username}
                </Typography>
              </Box>
              <Box className={classes.cardadata}>
                <Typography
                  gutterBottom
                  variant="h3"
                  className={classes.avatarLink}
                >
                  email:
                </Typography>{" "}
                <Typography
                  gutterBottom
                  variant="h4"
                  className={classes.avatarLink}
                >
                  {userInfo.email}
                </Typography>
              </Box>

              <Box className={classes.cardadata}>
                <Typography
                  gutterBottom
                  variant="h3"
                  className={classes.avatarLink}
                >
                  Cnic:
                </Typography>{" "}
                <Typography
                  gutterBottom
                  variant="h4"
                  className={classes.avatarLink}
                >
                  {userInfo.cnic}
                </Typography>
              </Box>
              <Box className={classes.cardadata}>
                <Typography
                  gutterBottom
                  variant="h3"
                  className={classes.avatarLink}
                >
                  location:
                </Typography>{" "}
                <Typography
                  gutterBottom
                  variant="h4"
                  className={classes.avatarLink}
                >
                  {userInfo.location}
                </Typography>
              </Box>
            </div>
            <Divider className={classes.cardDivider} variant="middle" />
            <Box mt={1}>
              <Typography
                variant="h4"
                component="p"
                style={{ textAlign: "start", padding: 20 }}
              >
                {userInfo.description}
              </Typography>
            </Box>

            <Box className={classes.cardButton}>
              <IconButton>
                <TwitterIcon />
              </IconButton>

              <IconButton>
                <InstagramIcon />
              </IconButton>

              <IconButton>
                <FacebookIcon />
              </IconButton>
            </Box>
            <Divider className={classes.cardDivider} variant="middle" />
          </CardContent>

          <div style={{ display: "flex", justifyContent: "center" }}></div>
        </CardActionArea>
      </MuiCard>
    </>
  );
};

export default ProfileFormer;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: "auto",
    border: "1px solid " + alpha(theme.palette.text.secondary, 0.1),
    borderRadius: 16,
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "auto",
    },
  },

  cardadata: {
    display: "flex",
    width: 200,
    margin: "auto",

    textAlign: "center",
    alignItems: "center",
    gap: 30,
  },
  media: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      left: 5,
    },
  },
  image: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    border: "5px solid white",
  },
  cardTitleContainer: {
    textAlign: "center",
    color: theme.palette.text.card,
    fontFamily: theme.typography.fontFamily,
  },

  cardLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0px",
  },

  avatarLink: {
    textTransform: "capitalize",
  },
  cardDivider: {},
  cardButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "30px 0px",
  },
  btnedit: {
    margin: "10px 0px",
    width: "200px",
    borderRadius: 15,
  },
  primaryBtn: {
    textTransform: "initial",
  },

  dataaSecc: {
    display: "grid",
    gap: 20,
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));
