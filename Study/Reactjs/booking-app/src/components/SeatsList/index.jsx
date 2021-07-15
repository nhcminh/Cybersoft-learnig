import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Seat from "../Seat/";
export default class SeatsList extends Component {
  render() {
    return (
      <Grid container spacing={4}>
        {this.props.seatsList.map((seat, index) => {
          return (
            <Grid item xs={3} key={seat.SoGhe + 100}>
              <Seat
                seat={seat}
                index={index}
                key={seat.SoGhe * Math.random() * 1000}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
