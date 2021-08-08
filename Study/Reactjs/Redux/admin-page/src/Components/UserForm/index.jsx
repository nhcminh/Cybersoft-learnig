import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useRef, useState } from 'react';
import { AxiosPost, AxiosPut } from '../../Api/method';

function UserForm(props) {
  const { classes, selectedUser, handleClose } = props.data;
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedUserValue, setSelectedUserValue] = useState(selectedUser);
  const usernameRef = useRef(),
    fullNameRef = useRef(),
    emailRef = useRef(),
    phoneNumberRef = useRef(),
    passwordRef = useRef(),
    roleRef = useRef();
  useEffect(() => {}, [selectedUserValue]);
  const handleChange = (e, param) => {
    setSelectedUserValue({
      taiKhoan:
        param === 'username' ? e.target.value : usernameRef.current.value,
      hoTen: param === 'fullName' ? e.target.value : fullNameRef.current.value,
      email: param === 'email' ? e.target.value : emailRef.current.value,
      soDt:
        param === 'phoneNumber' ? e.target.value : phoneNumberRef.current.value,
      matKhau:
        param === 'password' ? e.target.value : passwordRef.current.value,
      maLoaiNguoiDung:
        param === 'role' ? e.target.value : roleRef.current.value,
    });
  };
  const handleNewUserAdd = (e) => {
    e.preventDefault();
    AxiosPost('ThemNguoiDung', { ...selectedUserValue, maNhom: 'GP01' })
      .then((res) => {
        setIsOpen(true);
        setIsSuccess(true);
      })
      .catch((e) => {
        setErrorMessage(e.response.data);
        setIsOpen(true);
        setIsSuccess(false);
      });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    AxiosPut('CapNhatThongTinNguoiDung', {
      ...selectedUserValue,
      maNhom: 'GP01',
    })
      .then((res) => {
        setIsOpen(true);
        setIsSuccess(true);
      })
      .catch((e) => {
        setErrorMessage(e.response.data);
        console.log(e.response);
        setIsOpen(true);
        setIsSuccess(false);
      });
  };

  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {isSuccess ? (
          <Alert onClose={handleClose} severity='success'>
            {selectedUser.taiKhoan ? 'Edit Success!' : 'Add New User Success!'}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity='error'>
            {errorMessage}
          </Alert>
        )}
      </Snackbar>
      <form className={classes.form} noValidate>
        <TextField
          variant='outlined'
          margin='normal'
          disabled={selectedUser.taiKhoan ? true : false}
          fullWidth
          id='username'
          label='User Name'
          name='username'
          autoFocus
          autoComplete='username'
          value={selectedUserValue.taiKhoan}
          onChange={(e) => handleChange(e, 'username')}
          inputRef={usernameRef}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='fullName'
          label='Full Name'
          name='fullName'
          autoComplete='fullName'
          autoFocus={selectedUser.taiKhoan ? true : false}
          value={selectedUserValue.hoTen}
          inputRef={fullNameRef}
          onChange={(e) => handleChange(e, 'fullName')}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          value={selectedUserValue.email}
          inputRef={emailRef}
          onChange={(e) => handleChange(e, 'email')}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='phoneNumber'
          label='Phone Number'
          name='phoneNumber'
          autoComplete='phoneNumber'
          value={selectedUserValue.soDt}
          inputRef={phoneNumberRef}
          onChange={(e) => handleChange(e, 'phoneNumber')}
        />

        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          //   type="password"
          id='password'
          autoComplete='current-password'
          value={selectedUserValue.matKhau}
          inputRef={passwordRef}
          onChange={(e) => handleChange(e, 'password')}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>Role</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={selectedUserValue.maLoaiNguoiDung}
            onChange={(e) => handleChange(e, 'role')}
            inputRef={roleRef}
          >
            <MenuItem value={'QuanTri'}>Quản Trị</MenuItem>
            <MenuItem value={'KhachHang'}>Khách Hàng</MenuItem>
          </Select>
        </FormControl>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Button
              type='button'
              variant='contained'
              color='default'
              className={classes.cancel}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={selectedUser.taiKhoan ? handleEdit : handleNewUserAdd}
            >
              {selectedUser.taiKhoan ? 'Edit' : 'Add'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default UserForm;
