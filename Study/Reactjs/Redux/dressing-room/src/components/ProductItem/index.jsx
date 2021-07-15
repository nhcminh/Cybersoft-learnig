import React, { Component } from "react";
import { connect } from "react-redux";
class ProductItem extends Component {
  onChangeCloth = () => {
    return () => {
      this.props.dispatch({
        type : "SEL_CLOTH",
        payload: {
          img: this.props.prod.imgSrc_png,
          type: this.props.prod.type,
        },
      })
    }
  }
  render() {
    const {imgSrc_jpg, name} = this.props.prod;
    return (
      <div className="card mb-3">
        <img src={imgSrc_jpg} alt="product"/>
        <div className="card-body">
          <p className="lead">{name}</p>
          <button className="btn btn-success" onClick={this.onChangeCloth()}>Thử</button>
        </div>
      </div>
    );
  }
}

export default connect()(ProductItem);
