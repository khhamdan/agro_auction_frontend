import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

export default function PaginationRounded() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={3} />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",

    "& > *": {
      marginTop: theme.spacing(2),
    },
    "& .MuiButtonBase-root:hover": {},
    "& .MuiPaginationItem-page.Mui-selected": {
      color: theme.palette.text.primary,
      // backgroundColor: theme.palette.icon.secondary,
    },

    "& .MuiPaginationItem-root": {
      color: theme.palette.text.secondary,
    },
  },
}));
