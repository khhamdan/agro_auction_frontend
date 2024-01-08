import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import Countdown from "react-countdown";
import React from "react";
const Completionist = ({ setState }) => {
  useEffect(() => {
    setState(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Typography variant="h4">Auction Time Ended</Typography>;
};
const Timer = ({ end, setIsAuctionEnded, isAuctionEnded }) => {
  const setState = (state) => {
    if (isAuctionEnded !== state) setIsAuctionEnded(state);
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist setState={setState} />;
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "Center",
          }}
        >
          <Typography variant="h4"> Auction Ends In</Typography>
          <Typography variant="h4" align="right">
            {days === 0 ? "" : days + ":"} {hours}: {minutes}: {seconds}
          </Typography>
        </div>
      );
    }
  };
  const newDate = new Date(end * 1000);
  return <Countdown date={newDate} renderer={renderer} />;
};
export default Timer;
