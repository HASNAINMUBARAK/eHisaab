import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
const SearchApi = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTilte] = useState("");

  const handleSearch = (e) => {
    fetch(`https://dummyjson.com/products/search?q=${e}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };
  console.log(posts, "post");
  return (
    <div className={classes.cardContain}>
      <div className={classes.nam}>
        <h2>Search for Products</h2>
        <div className={classes.searchContain}>
          <input
            className={classes.search1}
            placeholder="Search Here"
            type="text"
            onChange={(e) => {
              handleSearch(e.target.value);
              setSearchTilte(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className={classes.contain}>
        {loading ? (
          <h2>...Loading...</h2>
        ) : (
          posts?.products?.map((items) => {
            return (
              <div className={classes.card}>
                <img
                  src={items.images[1]}
                  alt="bro"
                  style={{ width: "300px" }}
                />
                <h4 className={classes.des}>{items.description}</h4>
                <div className={classes.lower}>
                  <h3 style={{ fontFamily: "cursive" }}>{items.title}</h3>
                  <h3>RS: {items.price}</h3>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchApi;
const useStyles = makeStyles((theme) => ({
  contain: {
    display: " flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    width: " 400px",
    boxShadow: "5px 5px 20px #5c5a5a",
    borderRadius: 5,
    margin: "20px",
  },
  des: {
    fontFamily: "cursive",
    marginLeft: 10,
    textAlign: "start",
  },
  lower: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  searchContain: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: 20,
    height: 30,
    width: 300,
    padding: "0px 10px",
    [theme.breakpoints.down("sm")]: {
      width: 120,
    },
  },
  nam: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  search1: {
    width: "300px",
    border: "none",
    outline: "none",
    margin: 2,
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },
}));
