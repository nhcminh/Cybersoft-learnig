import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../HOC/Layout";
import { fetchCourseById } from "../../store/actions/course";

class Detail extends Component {
  render() {
    // const { tenKhoaHoc } = this.props.course || {};
    return (
      <Layout>
        <div>
          {/* optional chaining  */}
          {/* <h1>{this.props.course?.tenKhoaHoc}</h1> */}

          <p>Mô tả</p>
        </div>
      </Layout>
    );
  }
  componentDidMount() {
    const courseId = this.props.match.params.id;
    this.props.dispatch(fetchCourseById(courseId));
  }
}

export default connect()(Detail);
