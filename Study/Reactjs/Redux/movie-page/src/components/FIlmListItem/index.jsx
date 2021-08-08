import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SelectedFilmActions } from "../../redux/rootAction";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
function FilmListItem(props) {
  const { film } = props;
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={film.hinhAnh}
          title={film.tenPhim}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {film.tenPhim}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            paragraph={true}
          >
            {`Ngày Khởi Chiếu: ${new Date(
              film.ngayKhoiChieu
            ).toLocaleDateString()}`}
          </Typography>
          <Typography variant="body2" component="p" noWrap={true}>
            {film.moTa}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            style={{ marginLeft: "auto" }}
            aria-label="detail"
            onClick={() => {
              dispatch(SelectedFilmActions.changeFilm(film));
              history.push(`/${film.biDanh}`);
            }}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}

export default FilmListItem;
