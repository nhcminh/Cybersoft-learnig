import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../ProductItem";
class ProductList extends Component {
  renderProducts = () => {
    const productsHTML = this.props.products
      .filter((item) => {
        return item.type === this.props.selectedCategory;
      })
      .map((item) => {
        return (
          <div key={item.id} className="col-4">
            <ProductItem prod={item}></ProductItem>
          </div>
        );
      });
    return productsHTML;
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderProducts()}</div>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    products: state.product.productList,
    selectedCategory: state.category.selectedCategory,
  };
};
export default connect(mapStateProps)(ProductList);
