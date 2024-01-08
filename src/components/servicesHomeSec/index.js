import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  Button,
  Container,
} from "@material-ui/core";
import image from "../../assets/heavy.svg";
import image1 from "../../assets/img1.svg";
import image2 from "../../assets/img2.svg";
import image3 from "../../assets/img3.svg";
import Card from "./card";

export default function RedesignedCardServicesHome() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        Welcome to Modern Farming Solutions
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Revolutionizing farming for a sustainable future.
      </Typography>

      <Grid container spacing={3} className={classes.gridSection}>
        {Data.map(({ heading, description, image }, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card heading={heading} description={description} image={image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    textAlign: "center",
    paddingBottom: theme.spacing(4),
  },

  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },

  subtitle: {
    fontSize: "1.5rem",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
  },

  gridSection: {
    justifyContent: "center",
    gap: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
}));

export const Data = [
  {
    heading: "Rent Heavy Machinery",
    image: image,
    description:
      "No need to worry about labor costs. Just rent all types of machinery here!",
  },
  {
    heading: "Order Farm Products",
    image: image1,
    description:
      "Why visit a superstore and pay more? Order all products and get them delivered to your doorstep.",
  },
  {
    heading: "Sell Your Produce",
    image: image3,
    description:
      "Now you produce, and we are here to sell your products. Just list your items and get proper payment for them.",
  },
  {
    heading: "Gardening Supplies",
    image: image2,
    description:
      "We provide all gardening-related products, including seeds, pesticides, and heavy machinery.",
  },
];
