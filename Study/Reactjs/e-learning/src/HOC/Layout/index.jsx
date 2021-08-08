import React, { Component } from "react";
import Header from "../../Components/Header";

class Layout extends Component {
  render() {
    return (
      <div
        style={{
          background: "#e5e5e5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: 'space-between'
        }}
      >
        <Header />
        {this.props.children}
        <div style={{ background: "red", height: 50, marginTop: 20 }}>
          Footer
        </div>
      </div>
    );
  }
}

export default Layout;
