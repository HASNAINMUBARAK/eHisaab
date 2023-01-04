import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { Cartcontext } from "../Context/context";

const FetchApi = () => {
  const classes = useStyles();

  const [user, setUser] = useState([]);

  const getUsers = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setUser(res.products));
  };
  useEffect(() => {
    getUsers();
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (
    <div className={classes.outer}>
      {user &&
        user?.map((items) => {
          return (
            <div className={classes.card}>
              <img
                src={items.images[0]}
                alt={"images"}
                className={classes.cardImg}
              />

              <h4 style={{ paddingLeft: "10px", fontFamily: "cursive" }}>
                {" "}
                {items.title}
              </h4>
              <div className={classes.des}>
                <p className={classes.dess}>{items.description}</p>
              </div>
              <div className={classes.lower}>
                <h5 style={{ margin: "10px" }}>Rs: {items.price} </h5>
                <button
                  onClick={() => dispatch({ type: "ADD", payload: items })}
                  className={classes.bttn}
                >
                  ADD TO CART
                </button>
              </div>
              {/*  */}
            </div>
          );
        })}
    </div>
  );
};

export default FetchApi;
const useStyles = makeStyles((theme) => ({
  outer: {
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    boxShadow: "5px 5px 20px #5c5a5a",
    borderRadius: 5,
    margin: "20px",

    width: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  cardImg: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: "100%",
    height: 290,
  },
  dess: {
    fontFamily: "cursive",
  },
  des: {
    display: "flex",
    textAlign: "start",
    paddingLeft: 10,
  },
  bttn: {
    width: 110,
    height: 30,
    border: "none",
    color: "#3E8AAD",
    background: "white",
    "&:hover": {
      color: "#106eea",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  lower: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
  },
}));
