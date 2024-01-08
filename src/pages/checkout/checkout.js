import { makeStyles } from "@material-ui/core";
import { Form, Input, Radio } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { payApi } from "../../Http/api";

const PaymentForm = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const router = useNavigate();
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (values) => {
    const payload = {
      ...values,
      cartId: id,
    };
    await payApi(payload)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your order has been placed",
        });
        router("/consumer");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: "Please try again",
        });
      });
  };

  return (
    <div className={classes.mainContainer}>
      <h1>Payment Form</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <Input className={classes.input} />
        </Form.Item>

        <Form.Item
          label="Postal Code"
          name="postalCode"
          rules={[{ required: true, message: "Please enter your postal code" }]}
        >
          <Input className={classes.input} />
        </Form.Item>

        <Form.Item
          label="Payment Method"
          style={{
            marginBottom: "20px",
          }}
        >
          <Radio.Group
            onChange={handlePaymentMethodChange}
            value={paymentMethod}
          >
            <Radio
              value="cash"
              style={{
                marginTop: "20px",
              }}
            >
              &nbsp;Cash on Delivery
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please enter your city" }]}
        >
          <Input className={classes.input} />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please enter your country" }]}
        >
          <Input className={classes.input} />
        </Form.Item>
        <button className="landing-box-button">Place Order</button>
      </Form>
    </div>
  );
};

export default PaymentForm;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  main: {
    width: "60%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    width: "350px",
    height: "40px",
    marginBottom: "20px",
    marginTop: "10px",
    paddingLeft: "12px",
    fontSize: "22px",
    border: "1px solid #1BA665",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("xs")]: {
      width: "280px",
    },
  },

  inner: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));
