import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useFormik } from 'formik';
import Buttons from '../buttons';
import InputField from '../inputField';
import { bidSchema } from './schema';
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch, useSelector } from 'react-redux';

import { PlaceBid } from '../../redux/userInWallet/inWallet.actions';
const BidPopup = ({
  userId,
  productId,
  price,
  quantity,
  open,
  handleClose,
  highestBid,
  reservePrice,
  auctionId,
  endTime,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.inWallet);
  const currentTime = Math.floor(Date.now() / 1000);
  const futureTime = currentTime + 24 * 60 * 60;
  const formik = useFormik({
    initialValues: {
      userId: userId,
      productId: productId,
      price: '',
      quantity: '',
      reserve: highestBid || reservePrice,
    },
    validationSchema: bidSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      let payload = {
        userId,
        productId,
        price: values.price,
        auctionId,
        endTime: Boolean(highestBid) ? endTime : futureTime,
      };
      dispatch(PlaceBid(payload));
    },
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box fontSize={14} display="flex" justifyContent={'flex-end'}>
        <IconButton
          size="small"
          className={classes.iconButton}
          onClick={handleClose}
        >
          <CancelIcon fontSize="small" />
        </IconButton>
      </Box>
      <DialogTitle>
        <Typography align="center" className={classes.title}>
          Place your bid
        </Typography>
        <Box>
          <Typography align="center" className={classes.title}>
            {message}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <FormControl>
            <Typography style={{ color: '#000000' }}>Bid</Typography>
            <InputField
              color="secondary"
              type="number"
              placeholder={price}
              variant=""
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && (
              <FormHelperText error={true} className={classes.helper}>
                {formik.errors.price}
              </FormHelperText>
            )}
          </FormControl>
          {/* <FormControl>
            <Typography style={{ color: "#000000" }}>Quantity</Typography>
            <InputField
              placeholder={quantity}
              variant=""
              type="number"
              name="quantity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.quantity && (
              <FormHelperText error={true} className={classes.helper}>
                {formik.errors.quantity}
              </FormHelperText>
            )}
          </FormControl> */}
          <Box display={'flex'} justifyContent="center" pb={1}>
            <Buttons variant="contained" type="submit">
              Place Bid
            </Buttons>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BidPopup;
const useStyles = makeStyles((theme) => ({
  helper: {
    fontSize: 14,
  },
  title: {
    color: theme.palette.text.secondary,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  iconButton: {
    '& .MuiSvgIcon-fontSizeSmall': {
      fontSize: 24,
    },
  },
}));
