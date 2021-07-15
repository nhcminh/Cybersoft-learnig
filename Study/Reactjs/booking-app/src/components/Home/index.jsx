import React, { Component } from "react";
import SeatsList from "../SeatsList/";
import BookedList from "../BookedList/";
import { Grid, Typography, Box } from "@material-ui/core/";
import { connect } from "react-redux";
class Home extends Component {
  // componentDidMount(){

  // }
  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h1" component="h1" color="primary">
            <Box textAlign="center" m={1}>
              ĐẶT VÉ XE BUS HÃNG CYBERSOFT
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <SeatsList seatsList={this.props.seatsList} />
        </Grid>
        <Grid item xs={12} md={6}>
          <BookedList />
        </Grid>
      </Grid>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    seatsList: state.seatsListReducer.seatsList,
  };
};
export default connect(mapStatetoProps)(Home);
