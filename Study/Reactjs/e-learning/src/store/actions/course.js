// chứa những async actions liên quan tới course

import { createAction } from "./index";
import { actionTypes } from "./types";
import { request } from "../../api/request";

//async action
export const fetchCourses = (dispatch) => {
  request({
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    method: "GET",
  })
    .then((res) => {
      dispatch(createAction(actionTypes.SET_COURSES, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchCourseById = (id) => {
  return (dispatch) => {
    request({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc",
      method: "GET",
      params: {
        maKhoaHoc: id,
      },
    })
      .then((res) => {
        dispatch(createAction(actionTypes.SET_COURSE_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
