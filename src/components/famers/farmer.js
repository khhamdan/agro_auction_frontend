import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopSellerCard, { FarmerSkeltonCard } from ".";
import { getAllUsers } from "../../redux/users/users.actions";

export default function Topsellers() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { farmers, usersLoading } = useSelector((state) => state.Users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <Box className={classes.outerContainer}>
        <Box className={classes.title}>
          <Typography variant="h1" className={classes.typo}>
            Top Sellers
          </Typography>
        </Box>

        <Box py={4}>
          <Box className={classes.ceatorsSec}>
            {usersLoading ? (
              <>
                {Array(8)
                  .fill(1)
                  .map((_, i) => {
                    return <FarmerSkeltonCard key={i} />;
                  })}
              </>
            ) : (
              farmers.map(({ username, image, walletAddress }, i) => {
                return (
                  <Box key={i}>
                    <TopSellerCard
                      username={username}
                      image={image}
                      walletAddress={walletAddress}
                    />
                  </Box>
                );
              })
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  outerContainer: {
    marginTop: 40,
    paddingBottom: 30,
    [theme.breakpoints.down("md")]: {
      marginTop: 50,
    },
  },

  title: {
    paddingLeft: 20,
    color: theme.palette.text.head,
  },
  ceatorsSec: {
    display: "grid",
    gap: 20,
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr 1fr  ",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr 1fr ",
    },
  },
  typo: {
    [theme.breakpoints.down("md")]: {
      fontSize: 42,
    },
  },
}));
