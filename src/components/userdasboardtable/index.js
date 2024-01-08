import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteProduct,
  getAllProducts,
} from "../../redux/product/product.actions";
import BasicTable from "../table";
import Buttons from "../buttons";
import { Link } from "react-router-dom";
import { baseURL } from "../../Http/config";
const columns = ["productId", " product Title", "image", " price", "Action"];

const ProductDashboardTable = () => {
  const dispatch = useDispatch();
  const { allProductsData } = useSelector((state) => state.Product);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const classes = useStyles();
  const head = columns.map((col, id) => (
    <TableCell key={id} className={classes.col}>
      {col}
    </TableCell>
  ));
  const handleProductDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getAllProducts());
  };
  const body = allProductsData.map(
    ({ image, rate, quantity, productTitle, productId }, id) => (
      <TableRow key={id}>
        <TableCell className={classes.col}>{productId}</TableCell>
        <TableCell className={classes.col}>{productTitle}</TableCell>
        <TableCell className={classes.col}>
          {" "}
          <img
            src={`${baseURL}assets/products/${image}`}
            alt="img"
            className={classes.image}
          />{" "}
        </TableCell>

        <TableCell className={classes.col}>{rate}</TableCell>

        <TableCell>
          <Link to="/product/`${productId}">
            <Buttons className={classes.btnview} variant="outlined">
              view{" "}
            </Buttons>{" "}
          </Link>
          <Buttons
            variant="outlined"
            onClick={handleProductDelete.bind(this, productId)}
          >
            delete
          </Buttons>
        </TableCell>
      </TableRow>
    ),
  );
  return <BasicTable tableName=" Product's" head={head} body={body} />;
};
export default ProductDashboardTable;
const useStyles = makeStyles((theme) => ({
  image: {
    width: 100,
    height: 60,
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
