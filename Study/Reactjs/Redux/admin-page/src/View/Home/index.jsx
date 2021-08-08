import { Grid } from "@material-ui/core";
import React from "react";
import UserList from "../../Components/UserList";

function Home(props) {
  return (
    <Grid container>
      <Grid item md={12} style={{ minHeight: "50vh" }}>
        <UserList />
      </Grid>
    </Grid>
  );
}

export default Home;
