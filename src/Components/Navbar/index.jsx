import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import logo from "../../Assets/Images/logo.png";
import HamBurger from "../Hamberger";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.container}
        display="flex"
        justifyContent="space-evenly"
      >
        <Grid item lg={1} md={2} sm={2} className={classes.grid1}>
          <Link to="/">
            <img src={logo} alt=" " className={classes.logo} />
          </Link>
        </Grid>
        <Grid
          item
          container
          lg={5}
          md={5}
          sm={5}
          className={classes.grid2}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Link to="/" className={classes.g2}>
            Home
          </Link>
          <Link to="/Stores" className={classes.g2}>
            {" "}
            Stores
          </Link>
          <Link to="/Products" className={classes.g2}>
            {" "}
            Product
          </Link>
        </Grid>
        <Grid
          item
          container
          lg={1}
          md={1}
          sm={1}
          className={classes.grid4}
          display="flex"
          alignItems="center"
        >
          <Link to="/cart">
            <button className={classes.btn}>
              <AddShoppingCartOutlinedIcon />
            </button>
          </Link>
        </Grid>
        <Grid item className={classes.drawer}>
          <HamBurger />
        </Grid>
      </Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px 0px",
    boxShadow: "0px 0px 10px 0px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  grid1: {
    paddingLeft: 20,
  },
  logo: {
    width: "60px",
  },
  grid2: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  g2: {
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      color: "#3e8aad",
      fontWeight: 700,
    },
  },
  grid3: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  grid4: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  drawer: {
    paddingRight: "20px",
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  image: {
    width: "100px",
  },
  btn: {
    color: "white",
    backgroundColor: "#2250f4",
    borderRadius: 5,
    padding: "7px 22px",
    border: "none",
    height: 40,
    fontWeight: 700,
  },
}));
export default Navbar;
