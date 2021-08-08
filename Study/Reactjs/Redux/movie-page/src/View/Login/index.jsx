import {
  Button,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AxiosPost } from "../../APIService/method";
import { AccountInfoActions } from "../../redux/rootAction";
import Register from "../Register";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function SignIn(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("acc")));
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("acc")) ? true : false
  );
  const username = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    AxiosPost("QuanLyNguoiDung/DangNhap", {
      taiKhoan: username.current.value,
      matKhau: password.current.value,
    })
      .then((res) => {
        alert("login successful");
        localStorage.setItem("acc", JSON.stringify(res.hoTen));
        localStorage.setItem("token", JSON.stringify(res.accessToken));
        dispatch(
          AccountInfoActions.changAccountInfo({
            taiKhoan: res.taiKhoan,
            hoTen: res.hoTen,
            email: res.email,
            soDT: res.soDT,
          })
        );
        setUser(res.hoTen);
        setIsLogin(true);
        setOpen(false);
      })
      .catch((e) => alert(e.response.data));
  };
  const handleLogout = () => {
    localStorage.removeItem("acc");
    localStorage.removeItem("token");
    setIsLogin(false);
  };
  const handleRegisterRender = () => {
    setIsRegister(true);
  };
  useEffect(() => {}, [open]);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{isRegister ? "Register" : "Login"}</h2>
      <div id="simple-modal-description">
        {isRegister ? (
          <Register onRegister={setIsRegister} onClose={handleClose} />
        ) : (
          <form noValidate autoComplete="off" onSubmit={handleLogin}>
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
              />
            </FormControl>
            <Button onClick={handleRegisterRender}>Or Create Account?</Button>
            <br />
            <Button type="submit">Login</Button>
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
          </form>
        )}
      </div>
    </div>
  );
  return (
    <div>
      {isLogin ? (
        <>
          <Button color="inherit">
            <Link to={`/accountDetail/${user}`}>Hi {user}</Link>
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Log Out
          </Button>
        </>
      ) : (
        <Button color="inherit" onClick={handleOpen}>
          Login
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default SignIn;
