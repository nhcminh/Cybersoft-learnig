import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React from "react";
import { useRef } from "react";
import { AxiosPost } from "../../APIService/method";

function Register(props) {
  const { onRegister, onClose } = props;
  const fullName = useRef(),
    username = useRef(),
    password = useRef(),
    repassword = useRef(),
    email = useRef(),
    phoneNumber = useRef();
  const handleRegisterRender = () => {
    onRegister(false);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const userRegisteredData = {
      taiKhoan: username.current.value,
      matKhau: password.current.value,
      email: email.current.value,
      soDt: phoneNumber.current.value,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: fullName.current.value,
    };
    AxiosPost("QuanLyNguoiDung/DangKy", userRegisteredData)
      .then((res) => {
        alert("Đăng ký thành công");
        onRegister(false);
      })
      .catch((e) => alert(e.response.data));
  };
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleRegister}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Full Name</InputLabel>
          <Input
            name="fullname"
            aria-describedby="my-helper-text"
            inputRef={fullName}
          />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Username</InputLabel>
          <Input
            name="username"
            aria-describedby="my-helper-text"
            inputRef={username}
          />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            name="password"
            aria-describedby="my-helper-text"
            inputRef={password}
            type="password"
          />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Re-Password</InputLabel>
          <Input
            name="re-password"
            aria-describedby="my-helper-text"
            inputRef={repassword}
            type="password"
          />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input
            name="email"
            aria-describedby="my-helper-text"
            inputRef={email}
            type="email"
          />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Phone Number</InputLabel>
          <Input
            name="phoneNumber"
            aria-describedby="my-helper-text"
            inputRef={phoneNumber}
          />
        </FormControl>

        <Button onClick={handleRegisterRender}>Or Log in?</Button>
        <br />
        <Button type="submit">Register</Button>
        <Button
          type="button"
          onClick={() => {
            onRegister(false);
            onClose();
          }}
        >
          Cancel
        </Button>
      </form>
    </>
  );
}

export default Register;
