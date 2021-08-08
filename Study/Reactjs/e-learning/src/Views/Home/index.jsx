import React, { Component } from "react";
import Header from "../../Components/Header";
import { Card, Grid, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import {
  CardContent,
  CardActions,
  Button,
  withStyles,
} from "@material-ui/core";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./style";
import { fetchCourses } from "../../store/actions/course";
import Layout from "../../HOC/Layout";

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <div className={classes.bgDark}>
          <Typography
            className={classes.title}
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
          >
            Danh Sách Khoá Học
          </Typography>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {this.props.courseList.map((item) => (
                <Grid key={item.maKhoaHoc} item xs={12} sm={6} md={4}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 250 }}
                        image={item.hinhAnh}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.tenKhoaHoc}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          component="p"
                        >
                          {item.moTa}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <NavLink
                        to={`/detail/${item.maKhoaHoc}`}
                        component={Button}
                        className={classes.btnDetail}
                        variant="contained"
                        size="small"
                      >
                        Chi tiết
                      </NavLink>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
        
      </Layout>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourses);
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.course.courseList,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Home));
