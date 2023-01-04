import React, { useContext } from "react";
import { Cartcontext } from "../Context/context";
import { makeStyles } from "@material-ui/core";

const Cart = () => {
  const classes = useStyles();
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  return (
    <div className={classes.contain}>
      <div className={classes.heading}>
        <h2>Selected Items in CART</h2>

      </div>
      {state.map((item, index) => {
        return (
          <div className={classes.inner}>
            <div className={classes.detail}>
              <h4 style={{  fontFamily: "cursive" }}>{item.title}</h4>
              <h4 style={{  fontFamily: "cursive" }}>{item.category}</h4>
              <h4>RS: {item.price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

const useStyles = makeStyles((theme) => ({
  contain: {
    boxShadow: "5px 5px 20px #5c5a5a",
    borderRadius: 10,
    margin: "20px",
  },
  heading: {
    display: "flex",
    alignContent: "start",
    paddingLeft: 10,
  },
  detail: {
    display: "flex",
    justifyContent: "space-around",
  },
}));
