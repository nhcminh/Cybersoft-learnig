import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBooked: false,
      buttonColor: "default",
      isChoose: false,
    };
  }
  onChooseSeat = () => {
    const { seat, index } = this.props;
    if (this.state.isBooked) return;
    if (!this.state.isChoose && !this.state.isBooked) {
      this.props.dispatch({
        type: "SET_SEAT",
        payload: {
          soGhe: seat.SoGhe,
          type: "SoGhe",
          seatIndex: index,
          isBooked: true,
        },
      });
      this.setState({
        isChoose: true,
        buttonColor: "primary",
      });
    } else {
      this.props.dispatch({
        type: "REMOVE_SEAT",
        payload: {
          soGhe: seat.SoGhe,
          type: "SoGhe",
          seatIndex: index,
          isBooked: false,
        },
      });
      this.setState({
        buttonColor: "default",
        isChoose: false,
      });
    }
  };
  componentDidMount() {
    const { seat } = this.props;
    if (seat.TrangThai) {
      this.setState({
        isBooked: seat.TrangThai,
        buttonColor: "secondary",
      });
    }
  }

  render() {
    const { seat } = this.props;
    const { buttonColor } = this.state;

    return (
      <>
        <Button
          variant="contained"
          color={buttonColor}
          onClick={this.onChooseSeat}
        >
          {seat.SoGhe}
        </Button>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  bookedSeatsList: state.seatsListReducer.bookedSeatsList,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Seat);
