import React from "react";
import { AppBar, Grid, Paper, Toolbar, Typography } from "@material-ui/core";
import Login from "../../View/Login";
import { Link } from "react-router-dom";

function MainLayout(props) {
  return (
    <Grid container justifyContent="center">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/">Movie</Link>
          </Typography>
          <Login />
        </Toolbar>
      </AppBar>
      <Grid item style={{ padding: "2rem" }}>
        <Paper elevation={3}>{props.children}</Paper>
      </Grid>
    </Grid>
  );
}

export default MainLayout;
