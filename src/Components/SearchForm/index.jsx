import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Filter from "../Filter";
import SearchApi from "../Search";

const Search = () => {
  const classes = useStyles();

  return (
    <>
    <SearchApi />
      {/* <Grid
        container
        className={classes.container}
        display="flex"
        justifyContent="space-evenly"
      >
        <Grid item lg={4} md={4} sm={6} className={classes.grid1}>
          <Box className={classes.searchContain}>
            <input
              type="text"
              placeholder="SEARCH HERE"
              className={classes.search}
            />
            <SearchIcon className={classes.icon} />
          </Box>
        </Grid>

        <Grid item lg={4} md={4} sm={6} className={classes.grid1}>
          <Filter />
        </Grid>
      </Grid> */}
    </>
  );
};
export default Search;
const useStyles = makeStyles((theme) => ({
  // container: {
  //   margin: "40px 0px",
  //   alignItems: "center",
  //   [theme.breakpoints.down("sm")]: {
  //     flexDirection: "column",
  //     padding: 10,
  //   },
  // },
  // grid1:{
  //   [theme.breakpoints.down("sm")]: {
  //     margin: 10,
  //   },
  // },
  // searchContain: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   border: "1px solid gray",
  //   borderRadius: 20,
  //   height: 30,
  //   padding: "0px 10px",
  //   [theme.breakpoints.down("sm")]: {
  //     width: 120,
  //   },
  // },
  // search: {
  //   width: 300,
  //   border: "none",
  //   outline: "none",
  //   margin: 2,
  //   [theme.breakpoints.down("sm")]: {
  //     width: 100,
  //   },
  // },
  // icon: {
  //   "&:hover": {
  //     cursor: " pointer",
  //   },
  // },
}));
