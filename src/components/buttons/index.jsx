import { Button, withStyles } from "@material-ui/core";

const Buttons = withStyles((theme) => ({
  outlined: {
    border: "2px solid white",
    borderRadius: "50px",
    backgroundColor: "transparent",
    color: "white",
    padding: "10px 10px",
    fontWeight: 800,
    fontSize: "15.0163px",
    textTransform: "capitalize",
  },

  contained: {
    borderRadius: "3px",
    background: theme.palette.background.main,
    color: "white",
    padding: "5px 8.5px",
    fontWeight: 600,
    fontSize: "15px",
    textTransform: "capitalize",
    "&:hover": {
      background: theme.palette.background.secondary,
    },
  },
  text: {
    border: "2px solid white",
    borderRadius: "3px",
    backgroundColor: "transparent",
    color: "white",
    padding: "0 30px",
    fontWeight: 600,
    fontSize: "15px",
    textTransform: "capitalize",
  },
}))(Button);
export default Buttons;
