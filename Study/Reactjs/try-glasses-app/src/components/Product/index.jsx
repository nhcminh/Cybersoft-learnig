import React from "react";
import { connect } from "react-redux";
function Product(props) {
  const product = props;
  console.log(props);
  const handleSelectProduct = () => {
    const action = {
      type: "SET_SELECTEDPRODUCT",
      payload: product.product,
    };
    props.dispatch(action);
  };
  return (
    <div className="col">
      <img
        className="img-fluid"
        src={product.product.url}
        alt={product.product.name}
        onClick={() => handleSelectProduct()}
      />
    </div>
  );
}

export default connect()(Product);
