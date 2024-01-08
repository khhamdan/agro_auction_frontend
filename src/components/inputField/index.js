import { withStyles, InputBase } from "@material-ui/core";
const InputField = withStyles((theme) => ({
  root: {
    backgroundColor: "transparent",

    position: "relative",
    color: "black",
    fontSize: "14px",
    width: "100%",
    padding: "0 20px",
    "&.Mui-focused": {
      transition: "0.5s ease",
    },
  },
}))(InputBase);
export default InputField;
