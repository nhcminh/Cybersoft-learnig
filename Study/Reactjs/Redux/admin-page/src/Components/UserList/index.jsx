import React, { useEffect, useMemo, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { AxiosDelete, AxiosGet } from '../../Api/method';
import {
  Backdrop,
  Button,
  Fade,
  Grid,
  makeStyles,
  Modal,
  Popover,
  Snackbar,
  Typography,
} from '@material-ui/core';
import UserForm from '../UserForm';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(3, 3, 3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cancel: {
    margin: theme.spacing(3, 1, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  typography: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  buttonDelete: {
    margin: theme.spacing(3, 2, 2),
  },
}));

function UserList(props) {
  const [userList, setUserList] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [selectedUser, setSelectedUser] = useState({
    taiKhoan: '',
    hoTen: '',
    email: '',
    soDt: '',
    matKhau: '',
    maLoaiNguoiDung: '',
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handlePopOverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopOverClose = () => {
    setAnchorEl(null);
  };

  const openPopOver = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsOpen(false);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(selectedUser.taiKhoan);
    AxiosDelete(`XoaNguoiDung?TaiKhoan=${selectedUser.taiKhoan}`)
      .then((res) => {
        setIsSuccess(true);
        setIsOpen(true);
        handlePopOverClose();
      })
      .catch((e) => {
        setIsSuccess(false);
        setIsOpen(true);
        setErrorMessage(e.response.data);
        handlePopOverClose();
      });
  };
  const columns = useMemo(() => {
    return [
      { field: 'taiKhoan', headerName: 'Tài Khoản', width: 150 },
      {
        field: 'hoTen',
        headerName: 'Họ Tên',
        width: 200,
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 200,
      },
      {
        field: 'soDt',
        headerName: 'SĐT',
        type: 'number',
        width: 150,
      },
      {
        field: 'matKhau',
        headerName: 'Mật Khẩu',
      },
      {
        field: 'maLoaiNguoiDung',
        headerName: 'Role',
        width: 120,
      },
      {
        field: '',
        headerName: 'Actions',
        disableClickEventBubbling: true,
        width: 200,
        renderCell: ({ row }) => {
          return (
            <>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  setSelectedUser(row);
                  handleOpen();
                }}
              >
                Modify
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={(e) => {
                  setSelectedUser(row);
                  handlePopOverClick(e);
                }}
              >
                Delete
              </Button>
            </>
          );
        },
      },
    ];
  }, []);
  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };
  useEffect(() => {
    AxiosGet('LayDanhSachNguoiDung')
      .then((res) =>
        setUserList(
          res.map((user) => {
            return {
              ...user,
              id: user.taiKhoan + new Date().getTime(),
            };
          })
        )
      )
      .catch((e) => alert(e.response.data));
  }, [open, isOpen]);
  return (
    <>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>
              {selectedUser.taiKhoan ? 'Edit User' : 'Add New User'}
            </h2>
            <div id='transition-modal-description'>
              <UserForm
                data={{
                  classes,
                  selectedUser,
                  handleClose,
                }}
              />
            </div>
          </div>
        </Fade>
      </Modal>
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          handleOpen();
          setSelectedUser({
            taiKhoan: '',
            hoTen: '',
            email: '',
            soDt: '',
            matKhau: '',
            maLoaiNguoiDung: '',
          });
        }}
      >
        Add New
      </Button>
      <Popover
        id={id}
        open={openPopOver}
        anchorEl={anchorEl}
        onClose={handlePopOverClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Grid container justifyContent='flex-end'>
          <Grid item md={12}>
            <Typography className={classes.typography}>
              Do you want to delete?
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.cancel}
              variant='contained'
              color='default'
              onClick={handlePopOverClose}
            >
              Cancel
            </Button>
            <Button
              className={classes.buttonDelete}
              color='secondary'
              variant='contained'
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Popover>
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {isSuccess ? (
          <Alert onClose={handleClose} severity='success'>
            Delete Success!
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity='error'>
            {errorMessage}
          </Alert>
        )}
      </Snackbar>
      <DataGrid
        rows={userList}
        pageSize={pageSize}
        rowsPerPageOptions={[10, 25, 50, 100]}
        onPageSizeChange={handlePageSizeChange}
        columns={columns}
        autoHeight
        disableSelectionOnClick
      />
    </>
  );
}

export default UserList;
