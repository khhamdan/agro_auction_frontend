import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    marginRight: 20,
    width: 50,
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    color: theme.palette.text.secondary,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },

  root: {
    color: theme.palette.text.secondary,
    " & .MuiNativeSelect-icon": {
      fontSize: 25,
    },
    " &.MuiNativeSelect-root": {
      width: 60,
    },
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NativeSelect
        id="demo-customized-select-native"
        input={<BootstrapInput />}
      >
        <option aria-label="None" value="" />
        <option value={10}>1</option>
        <option value={20}>2</option>
        <option value={30}>3</option>
      </NativeSelect>
    </div>
  );
}
