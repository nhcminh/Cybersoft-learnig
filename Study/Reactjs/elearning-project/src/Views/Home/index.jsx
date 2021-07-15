import React, { Component } from "react";
import Header from "../../components/Header/";
import CourseItem from "../../components/CourseItem";
import { Typography, Container } from "@material-ui/core";
import Axios from "axios";

export default class Home extends Component {
  componentDidMount() {
    Axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      method: "GET",
    })
      .then((res) => {
        this.props.dispatch({
          type: "SET_COURSE",
          payload: res.data,
        });
      })
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <div>
        <Header />
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Danh sách khóa học
        </Typography>
        <Container maxWidth="lg">
          <CourseItem />
        </Container>
      </div>
    );
  }
}
