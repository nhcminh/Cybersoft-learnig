import React from "react";
import Nav from "../Nav";
// import { useHistory } from "react-router-dom";
function Home(props) {
  //   const history = useHistory();
  //   const storeHistory = () => {
  //     history.push("/");
  //   };
  //   storeHistory();
  return (
    <div>
      <Nav />
      <h1>This is Home</h1>
    </div>
  );
}

export default Home;
