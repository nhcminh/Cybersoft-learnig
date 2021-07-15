import React, { Component } from "react";
import Carousel from "./components/Carousel";
import Laptop from "./components/Latop";
import Nav from "./components/Nav";
import Promotion from "./components/Promotion";
import Smartphone from "./components/Smartphone";
class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Carousel />
        <Smartphone />
        <Laptop />
        <Promotion />
      </div>
    );
  }
}

export default Home;
