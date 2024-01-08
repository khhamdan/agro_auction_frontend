import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function BasicTable({
  tableName = null,
  head = null,
  body = null,
  addBtn = false,
}) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.main} component={Paper}>
      <Box className={classes.tableHeading}>
        {tableName}
        {addBtn && (
          <Button className={classes.addBtnTitleBar} endIcon={<AddIcon />}>
            {addBtn}
          </Button>
        )}
      </Box>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow className={classes.textrow}>{head}</TableRow>
        </TableHead>
        <TableBody className={classes.textcol}>{body}</TableBody>
      </Table>
      <Box>{/* <PaginationRounded /> */}</Box>
    </TableContainer>
  );
}
const useStyles = makeStyles((theme) => ({
  main: {
    minWidth: "100%",
    margin: "auto",
    borderRadius: "8px",
    background: theme.palette.background.main,
    [theme.breakpoints.down("sm")]: {},
  },
  table: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      scrollDirection: "horizontal",
      // scrollDehavior: "smooth",
    },
    "& .tablehead": {
      color: theme.palette.text.primary,
    },
  },
  textrow: {
    frontWidth: 500,
    fonrSize: 15,
    textTransform: "capitalize",
    color: theme.palette.text.primary,
  },
  textcol: {
    frontWidth: 400,
    color: theme.palette.text.primary,
  },
  tableHeading: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px  65px 30px 65px",
    color: theme.palette.text.primary,
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: 600,
  },
  addBtnTitleBar: {
    color: "white",
    backgroundColor: "#0660FE",
    border: "1px solid #0660FE",
    padding: "5px 10px",
    borderRadius: "27px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#0660FE",
    },
  },
}));
