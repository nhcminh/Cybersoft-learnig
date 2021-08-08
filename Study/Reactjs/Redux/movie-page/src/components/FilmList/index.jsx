import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { AxiosGet } from "../../APIService/method";
import FilmListItem from "../FIlmListItem";
import { Pagination } from "@material-ui/lab";

function ListFilm(props) {
  const [filmList, setFilmList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    AxiosGet(
      "QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&",
      `soTrang=${currentPage}&soPhanTuTrenTrang=10`
    )
      .then((res) => {
        setFilmList(res.items);
        setTotalPages(res.totalPages);
      })
      .catch((e) => alert(e.response.statusText));
  }, [currentPage]);
  const handleChange = (e, value) => {
    setCurrentPage(value);
  };
  return (
    <>
      {filmList.map((film) => (
        <Grid key={film.maPhim} md={3} item>
          <Paper elevation={3}>
            <FilmListItem film={film} />
          </Paper>
        </Grid>
      ))}
      <Grid item md={12}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
    </>
  );
}

export default ListFilm;
