import { Button, Container, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../HOC/Layout";
import { signIn } from "../../store/actions/auth";

/**
 * 1. xử lý form, lấy taiKhoan, matKhau
 * 2. tạo async action call api đăng nhập
 * 3. khi submit , dispatch async action lên middleware
 * 4. sau khi call api, dispatch action SET_ME,lưu info backend trả về lên store
 * 5. trên store, cần tạo reducer "me" , initialState = null, xử lý action,
 * nếu action gửi lên là SET_ME , state = action.payload
 */

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        taiKhoan: "",
        matKhau: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(signIn(this.state.loginInfo, this.goToHome));
  };

  goToHome = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <Layout>
        <div>
          <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
          <Container maxWidth="sm">
            <form onSubmit={this.handleSubmit}>
              <div style={{ marginBottom: 30 }}>
                <TextField
                  name="taiKhoan"
                  onChange={this.handleChange}
                  fullWidth
                  label="Tài khoản"
                  variant="outlined"
                />
              </div>
              <div style={{ marginBottom: 30 }}>
                <TextField
                  name="matKhau"
                  onChange={this.handleChange}
                  fullWidth
                  label="Mật khẩu"
                  variant="outlined"
                />
              </div>

              <div>
                <Button type="submit" variant="contained" color="primary">
                  Đăng Nhập
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default connect()(Signin);
