import React from "react";
import { makeStyles } from "@material-ui/core";
import banner from "../../Assets/Images/Banner.png";
const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={banner} className={classes.banner} alt="banner of page" />
    </div>
  );
};

export default Banner;
const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
  },
}));
