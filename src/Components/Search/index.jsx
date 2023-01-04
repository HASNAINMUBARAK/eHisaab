import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

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
                <Carousel className={classes.cardImg}>
                  {items?.images?.length &&
                    items?.images?.map((e) => {
                      console.log(e, "e");
                      return (
                        <img
                          src={e}
                          alt={"images"}
                          className={classes.cardImg}
                        />
                      );
                    })}
                </Carousel>
                <p className={classes.des}>
                  {items.description.substring(0, 50)}
                </p>
                <div className={classes.lower}>
                  <h4 style={{ fontFamily: "cursive" }}>
                    {items.title.substring(0, 12)}
                  </h4>
                  <h4>RS: {items.price}</h4>
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
    width: " 350px",
    boxShadow: "5px 5px 20px #5c5a5a",
    borderRadius: 5,
    margin: "20px",
  },
  cardImg: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: "100%",
    height: 290,
  },
  des: {
    fontFamily: "cursive",
    marginLeft: 10,
    textAlign: "start",
    margin: 0,
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
