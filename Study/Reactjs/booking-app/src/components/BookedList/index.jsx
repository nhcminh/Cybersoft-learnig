import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import BookedSeat from "../BookedSeat";
class BookedList extends Component {
  render() {
    const { bookedList } = this.props;
    console.log(this.props);
    return (
      <>
        <Typography variant="h2" color="initial">
          {bookedList != null ? (
            <Box textAlign="center">
              Danh sách ghế đã đặt ({bookedList.length})
            </Box>
          ) : (
            <Box textAlign="center">Danh sách ghế đã đặt (0)</Box>
          )}
        </Typography>
        <BookedSeat bookedList={bookedList} />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  bookedList: state.seatsListReducer.bookedSeatsList,
});

export default connect(mapStateToProps)(BookedList);
