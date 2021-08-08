import {
  AppBar,
  Button,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function MainLayout(props) {
  return (
    <Grid container justifyContent="center">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/">Admin</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/login" onClick={() => localStorage.removeItem("token")}>
              Logout
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Grid item md={12} style={{ padding: "2rem" }}>
        <Paper elevation={3}>{props.children}</Paper>
      </Grid>
    </Grid>
  );
}

export default MainLayout;
