import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import FarmeraDashboardTable from "../farmerdashboardtable";
import ProductDashboardTable from "../userdasboardtable";
import UserDashboardTable from "../userdashboardtable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log(value, "valueeee");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.innerTabs}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab
            label="farmer"
            class={clsx({
              [classes.forTabs]: true,
              [classes.selected]: value === 0,
            })}
          />
          <Tab
            class={clsx({
              [classes.forTabs]: true,
              [classes.selected]: value === 1,
            })}
            label="Products"
          />
          {/* <Tab
            label=""
            className={clsx({
              [classes.forTabs]: true,
              [classes.selected]: value === 2,
            })}
          /> */}
          <Tab
            label="users"
            className={clsx({
              [classes.forTabs]: true,
              [classes.selected]: value === 3,
            })}
          />
        </Tabs>
      </Box>

      <Box className={classes.datasec}>
        <TabPanel value={value} index={0} className={classes.panelContainer}>
          <FarmeraDashboardTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <ProductDashboardTable />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.panelContainer}>
          <div>
            <UserDashboardTable />
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}

export default VerticalTabs;

const useStyles = makeStyles((theme) => ({
  datasec: {
    width: "70vw",
    marginTop: 90,
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },

    "&::-webkit-scrollbar": {
      width: 9,
    },
    /* Track */
    "&::-webkit-scrollbar-track": {
      background: "#FAFAFA",
      border: " 1px solid #E6E6E6",
      borderRadius: 20,
    },
    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#C4C4C4",
      borderRadius: 29,
      border: "1px solid var(--black)",
      /* Handle on hover */
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
  root: {
    flexGrow: 1,
    display: "flex",

    paddingTop: 40,
    gap: "10px",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },
  innerTabs: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
    },
  },
  forTabs: {
    width: 160,
    height: 60,
    backgroundColor: "#fff",
    border: "1px solid " + theme.palette.text.secondary,
    margin: "10px",

    borderRadius: 5,
    textTransform: "capitalize",
    "& .MuiTab-wrapper": {
      fontWeight: "bold",
    },
  },
  selected: {
    background: theme.palette.background.main,
    color: theme.palette.secondary.main,
    fontSize: 14,
  },
  tabs: {
    display: "flex",
    marginTop: "6rem",
    width: "100%",
    fontSize: 20,
    " & .MuiTabs-flexContainerVertical": {
      display: "flex",

      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
      },
    },

    "& .MuiTab-wrapper": {
      fontSize: 16,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  panelContainer: {
    width: "100%",
  },
}));
