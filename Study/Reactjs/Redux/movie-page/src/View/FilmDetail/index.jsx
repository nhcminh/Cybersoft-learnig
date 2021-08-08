import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

function FilmDetail(props) {
  const film = useSelector((state) => state.SelectedFilmReducer.film);
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item md={4}>
        <img src={film.hinhAnh} alt="hinh" width="100%" />
      </Grid>
      <Grid item md={8}>
        <Typography>Tên Phim: {film.tenPhim}</Typography>
        <Typography>Mô Tả: {film.moTa}</Typography>
        <Typography>
          Ngày Khởi Chiếu :{new Date(film.ngayKhoiChieu).toLocaleDateString()}
        </Typography>
        <Typography>Đánh Giá: {film.danhGia}</Typography>
      </Grid>
      <Grid item md={8}>
        <iframe
          width="853"
          height="480"
          src={film.trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </Grid>
    </Grid>
  );
}

export default FilmDetail;
