
import { request } from "../../api/request";
import { createAction } from "./index";
import { actionTypes } from "./types";

export const signIn = (loginInfo, callback) => {
  return (dispatch) => {
    request({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      body: loginInfo,
    })
      .then((res) => {
        dispatch(createAction(actionTypes.SET_ME, res.data));
        localStorage.setItem("t", res.data.accessToken);
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMe = (dispatch) => {
  request({
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
    method: "POST",
  })
    .then((res) => {
      dispatch(createAction(actionTypes.SET_ME, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
