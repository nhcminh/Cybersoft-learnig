import { Button, Container, TextField, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import Header from "../../Components/Header";
import styles from "./style";
import cls from "classnames";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "GP01",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  registerUser = () => {
    axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: this.state.user,
    })
      .then((res) => {
        console.log(res);
        alert("Đăng Ký thành công!!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.registerUser();
  };

  render() {
    const { title, formInput, title1 } = this.props.classes;
    return (
      <div>
        <Header />
        <h1 className={cls(title, title1)}>Đăng Ký</h1>
        <Container maxWidth="sm">
          <form onSubmit={this.handleSubmit}>
            <div className={formInput}>
              <TextField
                name="taiKhoan"
                onChange={this.handleChange}
                fullWidth
                label="Tài khoản"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="matKhau"
                onChange={this.handleChange}
                fullWidth
                label="Mật khẩu"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="hoTen"
                onChange={this.handleChange}
                fullWidth
                label="Họ Tên"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="email"
                onChange={this.handleChange}
                fullWidth
                label="Email"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="soDT"
                onChange={this.handleChange}
                fullWidth
                label="Số ĐT"
                variant="outlined"
              />
            </div>
            <div>
              <Button type="submit" variant="contained" color="primary">
                Đăng Ký
              </Button>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);
