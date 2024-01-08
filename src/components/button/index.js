import { Button as MuiButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const Button = withStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
    fontFamily: theme.fontFamily,
    transition: ".25s ease",
    borderRadius: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      transition: ".25s ease",
    },
  },

  contained: {
    backgroundColor: theme.palette.background.primary,
    border: "2.5078px solid #17D7F5",
    width: "100%",
    height: 28,
    fontWeight: "800",
    fontSize: "16px",
    borderRadius: 40,
    padding: "15px 20px 15px  20px",
    lineHieght: 20,
  },
  outlined: {
    backgroundColor: "transparent",
    border: "2.5078px solid #17D7F5",
    width: "100%",
    height: 28,
    fontWeight: "800",
    fontSize: "16px",
    borderRadius: 40,
    padding: "15px 20px 15px  20px",
    lineHieght: 20,
  },
  text: {},
}))(MuiButton);

export default Button;
