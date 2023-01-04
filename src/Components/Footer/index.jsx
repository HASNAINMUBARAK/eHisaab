import React from "react";
import { makeStyles } from "@material-ui/core";
import img1 from "../../Assets/Images/img1.png";
import img2 from "../../Assets/Images/img2.png";
import SearchIcon from "@material-ui/icons/Search";
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.outter}>
        <div className={classes.left}>
          <img className={classes.imgs} src={img1} alt="img1" style={{ margin: "0px 10px 0px 10px" }} />
          <img className={classes.imgs} src={img2} alt="img2" style={{ margin: "0px 10px 0px 10px" }} />
        </div>
        <div className={classes.right}>
          <SearchIcon />
          <SearchIcon style={{ margin: "0px 20px 0px 20px" }} />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
const useStyles = makeStyles((theme) => ({
  outter: {
    display: "flex",
    justifyContent: "space-around",
    background: "#E7E7E7",
    height: "87px",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  imgs:{
    [theme.breakpoints.down("xs")]: {
      margin: "0px 5px 0px 5px",
      width: "70px"
  },
},
  right: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));
