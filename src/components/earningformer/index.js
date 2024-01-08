import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import pic from "../../assets/pic.png";

import BasicTable from "../table";
const columns = [
  "id",
  " product name",
  "image",
  " price",
  "monthly Earning",
  "yearly Earning",
];

const clients = [
  "1",
  " hek lamm ",
  { type: "img", src: pic },

  "100Rs",
  "3000k",
  "3000k",
];
const rows = [clients, clients, clients];

const EarningFormer = () => {
  const classes = useStyles();
  const head = columns.map((col, id) => (
    <TableCell key={id} className={classes.col}>
      {col}
    </TableCell>
  ));

  const body = rows.map((row, id) => (
    <TableRow key={id}>
      {row.map((col) =>
        col.type ? (
          <TableCell className={classes.col}>
            <img src={`${col.src}`} className={classes.image} />
          </TableCell>
        ) : (
          <TableCell className={classes.col}>{col}</TableCell>
        ),
      )}
    </TableRow>
  ));
  return <BasicTable tableName=" Order history" head={head} body={body} />;
};
export default EarningFormer;
const useStyles = makeStyles((theme) => ({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textcell: {
    color: theme.palette.text.secondary,
  },
  col: {
    fontSize: 18,
    color: theme.palette.text.primary,
  },
  btnview: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
}));
