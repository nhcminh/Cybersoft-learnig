import React, { Component } from "react";

export default class BookedSeat extends Component {
  render() {
    const { bookedList } = this.props;
    return (
      <>
        {bookedList.map((bookedSeat) => {
          return (
            <p key={bookedSeat.SoGhe * Math.random() * 100}>
              Ghế: số {bookedSeat.SoGhe}
            </p>
          );
        })}
      </>
    );
  }
}
