import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  
  onSelectCategory = (category) => {
    return () => {
      const action = {
        type: "SET_CATEGORY",
        payload: category,
      };
      this.props.dispatch(action);
    }
  };
  renderCategory = () => {
    const renderHTML = this.props.categories.map((item) => {
      return(
        <button key="item.type" className="btn btn-secondary" onClick={this.onSelectCategory(item.type)}>{item.showName}</button>
      )
    });
    return renderHTML;
  };
  render() {
    return (
      <div className="btn-group container-fluid mb-4">
        {this.renderCategory()}
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    categories: state.category.categoryList,
  };
};
export default connect(mapStatetoProps)(Category);
