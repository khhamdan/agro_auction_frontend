import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#4CAF50", // A greenish background color
    background: "linear-gradient(45deg, #4CAF50, #388e3c)", // Gradient
    padding: theme.spacing(2),
  },
  logoDiv: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "140px",
    height: "auto",
    cursor: "pointer",
  },
  headerMidData: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    "& .textHead": {
      textTransform: "capitalize",
      fontSize: "18px",
      cursor: "pointer",
      color: "white",
      fontWeight: "bold", // Make text bold
      transition: "color 0.3s ease", // Smooth color transition on hover
      "&:hover": {
        textDecoration: "underline",
        color: "#388e3c", // Change text color on hover
      },
    },
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
  },
  signInBtn: {
    color: "#4CAF50",
    borderColor: "#4CAF50",
    marginRight: theme.spacing(2),
    fontWeight: "bold", // Make the button text bold
    "&:hover": {
      backgroundColor: "#388e3c",
      color: "white",
    },
  },
  accountIcon: {
    color: "white",
    fontSize: "28px",
    marginRight: theme.spacing(1),
  },
  menuIcon: {
    color: "white",
    fontSize: "28px",
  },
}));

export default useStyles;
