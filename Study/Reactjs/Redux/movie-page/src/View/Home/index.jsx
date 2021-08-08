import { Grid } from "@material-ui/core";
import React from "react";
import FilmList from "../../components/FilmList";
function Home(props) {
  return (
    <Grid container spacing={3} style={{ padding: "1rem" }} alignItems="center">
      <FilmList />
    </Grid>
  );
}

export default Home;
