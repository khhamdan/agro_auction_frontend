import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  locationMain: {
    borderTop: "1px solid #156663",
    marginTop: "-20px",
  },
  locationH: {
    height: "160px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "400",
    fontSize: "70px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#156663",
    [theme.breakpoints.down("md")]: {
      height: "100px",
      fontSize: "35px",
    },
  },
}));

export default useStyles;
