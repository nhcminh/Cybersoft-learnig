import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Product from "./components/Product";
function App(props) {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(./glassesImage/background.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        maxHeight: "100vh",
      }}
    >
      <div className="container" style={{ backgroundColor: "#00000021" }}>
        <div className="row">
          <div className="col-12">
            <div className="card bg-dark text-white align-items-center position-relative">
              <img
                src="./glassesImage/model.jpg"
                className="card-img"
                alt="..."
                style={{ width: "278.5px" }}
              />
              <img
                src={props.selectedProduct.url}
                className="card-img position-absolute"
                alt="..."
                style={{ top: "80px", width: "156px" }}
              />
              <div
                className="card-img-overlay"
                style={{ top: "unset", backgroundColor: "#00000087" }}
              >
                <h5 className="card-title">{props.selectedProduct.name}</h5>
                <p className="card-text">{props.selectedProduct.desc}</p>
                <p className="card-text">{props.selectedProduct.price}</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="container">
              <div className="row justify-content-center">
                {props.products.map((product) => {
                  return <Product product={product} key={product.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.glassesReducer.dataStr,
  selectedProduct: state.glassesReducer.selectedProduct,
});

export default connect(mapStateToProps)(App);
