import { useState } from "react";
import React from "react";
import { Box, Typography } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";

import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";

import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Buttons from "../buttons";
import { useSelector } from "react-redux";

const HamBurger = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {
    login: { role },
    loginLoadingSucess,
  } = useSelector((state) => state.registerSlice);
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
    setOpen(false);
  }

  return (
    <div className={classes.RealHamburger}>
      <IconButton
        className={classes.hamBurgerBtn}
        edge="start"
        style={{ color: "white", paddingLeft: 10 }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon style={{ width: "30px", height: "30px" }}></MenuIcon>
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {}}
      >
        <Box className={classes.HamBurgerBox}>
          {open ? (
            <KeyboardArrowRightIcon
              variant="contained"
              color="primary"
              fontSize=" small"
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <KeyboardArrowLeftIcon
              variant="contained"
              color="primary"
              fontSize="small"
            />
          )}
        </Box>

        <List style={{ padding: 0 }}>
          <ListItem className={classes.ListItem}>
            <Box className={classes.HeaderLinks}>
              <Box>
                <Typography
                  variant="h3"
                  className={classes.HeaderText}
                  onClick={() => handleRoute("/")}
                >
                  Home
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  className={classes.HeaderText}
                  onClick={() => handleRoute("/farmer")}
                >
                  farmer
                </Typography>
              </Box>
              {role === "farmer" ? (
                ""
              ) : (
                <Box>
                  <Typography
                    className={classes.HeaderText}
                    variant="h3"
                    onClick={() => handleRoute("/consumer")}
                  >
                    Buyer
                  </Typography>
                </Box>
              )}

              <Box>
                <Typography
                  variant="h3"
                  className={classes.HeaderText}
                  onClick={() => handleRoute("/about")}
                >
                  about
                </Typography>
              </Box>

              <Box>
                {!loginLoadingSucess && (
                  <Buttons
                    className={classes.btnSign}
                    variant="outlined"
                    onClick={() => {
                      handleRoute("/signin");
                    }}
                  >
                    Sign In
                  </Buttons>
                )}
              </Box>
            </Box>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default HamBurger;
const useStyles = makeStyles((theme) => ({
  HamBurgerBox: {
    background: theme.palette.background.main,
  },
  HeaderItems: {
    cursor: "pointer",

    "&:hover": {
      color: "#6605B8",
    },
  },

  HeaderText: {
    textTransform: "capitalize",
    fontWeight: 800,
  },
  hamBurgerBtn: {
    backgroundColor: "transparent",
    color: "#000",
  },
  RealHamburger: {
    display: "none",

    paddingLeft: 20,

    [theme.breakpoints.down("md")]: {
      display: "block",
      color: "#000",
    },
  },
  ListItem: {
    background: theme.palette.background.main,
    width: "300px",

    display: "flex",
    justifyContent: "space-around",
  },
  HeaderLinks: {
    width: "300px",
    height: "590px",
    display: "flex",
    gap: 40,
    flexDirection: "column",
  },

  btnSign: {
    width: "100px",
  },
}));
