import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import bussiness from "../../Assets/Images/Bussiness.png";
import { Container } from "@material-ui/core";

const First = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.contain}>
      <Grid item md={6} sm={6} className={classes.left}>
        <img className={classes.dummy} src={bussiness} alt="img" />
      </Grid>
      <Grid item md={6} sm={6} className={classes.right}>
        <h2>Pine Technologies</h2>
        <p style={{ textAlign: "initial" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a page when looking at its
          layout. The point of using Lorem Ipsum is that it.
        </p>
        <p>Shop # 206 ZS Plaza Gilgit </p>
        <p>0345559494</p>
      </Grid>
    </Container>
  );
};

export default First;

const useStyles = makeStyles((theme) => ({
  contain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  left: {
    width: "30%",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));
