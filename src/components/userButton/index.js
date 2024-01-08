import {
  Box,
  Fade,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { resetRegisteringUser } from "../../redux/register/register.slicer";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../../Http/config";
import { getAllUsers } from "../../redux/users/users.actions";

const UserButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const {
    login: { userId, username, image },
  } = useSelector((state) => state.registerSlice);
  const { isprofileupdating, isprofileupdatingSuccess } = useSelector(
    (state) => state.editUserDetailsSlicer,
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  const handleLogout = () => {
    dispatch(resetRegisteringUser());
    handleClose();
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <Box className={classes.avatarBtn} onClick={handleClick}>
        {image && (
          <Avatar
            alt="Remy Sharp"
            src={`${baseURL}/assets/profilePicture/${image}`}
          />
        )}
        {!image && (
          <Avatar alt="Remy Sharp" src="/broken-img.jpg">
            {username.slice(0, 1)}
          </Avatar>
        )}

        <Typography variant="h4" align="center" className={classes.typo}>
          {username}
        </Typography>
      </Box>

      <Menu
        className={classes.maincont}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div>
          <Link to={`/myprofile/${userId}`}>
            <MenuItem className={classes.menu}>Profile</MenuItem>
          </Link>

          <MenuItem className={classes.menu} onClick={handleLogout}>
            Logout{" "}
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
};

export default UserButton;
const useStyles = makeStyles((theme) => ({
  menu: {
    color: "#323232",
  },

  maincont: {
    "& .MuiMenu-paper": {
      position: "relative",
      top: "58px !important",
      width: "150px",
    },
  },
  root: {
    "& .MuiSvgIcon-root": {
      fontSize: 40,
    },
  },
  avatarBtn: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  typo: {
    color: theme.palette.text.primary,
  },
}));
