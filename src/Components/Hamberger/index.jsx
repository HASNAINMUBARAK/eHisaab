import React from "react";
import { useState } from "react";
import { Box } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import { Buttons } from "../../Units/buttons";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const HamBurger = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.RealHamburger}>
      <IconButton
        className={classes.hamBurgerBtn}
        edge="start"
        style={{ color: "white" }}
        fontSize="large"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {}}
      >
        <Box p={2}>
          {open ? (
            <KeyboardArrowRightIcon
              variant="contained"
              color="#22bcd0"
              className={classes.vs}
              fontSize="large"
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <KeyboardArrowLeftIcon
              variant="contained"
              color="#22bcd0"
              fontSize="large"
            />
          )}
        </Box>
        <hr />
        <List>
          <ListItem className={classes.ListItem}>
            <Box className={classes.HeaderLinks}>
              <Box>
                <Link to="/">
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Home
                </Buttons>
                </Link>
              </Box>
              <Box>
              <Link to="/Stores">
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Product
                </Buttons>
                </Link>
              </Box>
              <Box>
              <Link to="/Products">
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Stores
                </Buttons>
                </Link>
              </Box>
              <Box>
                <button className={classes.btn}>
                  <ShoppingCartIcon style={{ backgroundColor: "#3E8AAD" }} />
                  {/* <Badge badgeContent={selection.length}>
                    <ShoppingCartIcon />
                  </Badge> */}
                </button>
              </Box>
            </Box>
          </ListItem>
        </List>
        <Divider />
      </SwipeableDrawer>
    </div>
  );
};
export default HamBurger;
const useStyles = makeStyles((theme) => ({
  HeaderItems: {
    cursor: "pointer",
    padding: "10px",
    "&:hover": {
      color: "#6605B8",
    },
  },
  vs: {
    color: "linear-gradient(90deg, #03228f 0%, #0e73e4 100%)",
  },
  hamBurgerBtn: {
    background: "#3E8AAD",
    "&:hover": {
      color: "#3E8AAD",
    },
  },
  RealHamburger: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      color: "#000",
    },
  },
  ListItem: {
    width: "300px",
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
  },
  HeaderLinks: {
    width: "300px",
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
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
