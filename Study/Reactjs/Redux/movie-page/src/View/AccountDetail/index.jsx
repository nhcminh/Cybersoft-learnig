import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

function AccountDetail(props) {
  const account = useSelector((state) => state.AccountInfoReducer.account);
  return (
    <Grid container>
      <Grid item>
        <Typography>{account.taiKhoan}</Typography>
        <Typography>{account.hoTen}</Typography>
        <Typography>{account.email}</Typography>
        <Typography>{account.soDT}</Typography>
      </Grid>
    </Grid>
  );
}

export default AccountDetail;
