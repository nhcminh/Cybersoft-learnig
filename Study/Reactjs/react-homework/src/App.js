import axios from "axios";
import { React, useCallback, memo, useState, useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const handleClickIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleClickDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <>
      <div className="App">
        <h1>Hello {state.count}</h1>
      </div>
      <div>
        <button onClick={handleClickDecrease}>-</button>
        <button onClick={handleClickIncrease}>+</button>
      </div>
    </>
  );
}

// function App(props) {
//   console.log("render cha");
//   const [count, setCount] = useState(0);
//   const handleSearch = useCallback((value) => {
//     axios
//       .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + value)
//       .then((rs) => {
//         console.log(rs);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);
//   return (
//     <div>
//       UseCallBack
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <SearchBox onSearch={handleSearch} />
//     </div>
//   );
// }
// const SearchBox =
//   memo[
//     (props) => {
//       console.log("Render Searchbox");
//       const handleSearchInputChange = (e) => {
//         console.log(e.target.value);
//         props.onSearch(e.target.value);
//       };
//       return (
//         <div>
//           <input type="text" onChange={handleSearchInputChange} />
//         </div>
//       );
//     }
//   ];
// function App(props) {
//   const [time, setTime] = useState(0);
//   useEffect(() => {
//     const increaseTime = setInterval(() => {
//       setTime(time + 1);
//     }, 1000);
//     return () => {
//       clearInterval(increaseTime);
//     };
//   }, [time]);

//   return (
//     <div style={{ display: "flex", justifyContent: "space-around" }}>
//       <div
//         style={{
//           backgroundColor: "red",
//           width: "150px",
//           height: "50px",
//           color: "white",
//         }}
//       >
//         Kim {time}
//       </div>
//       <div
//         style={{
//           backgroundColor: "blue",
//           width: "150px",
//           height: "50px",
//           color: "white",
//         }}
//       >
//         MT {time}
//       </div>
//       <div
//         style={{
//           backgroundColor: "green",
//           width: "150px",
//           height: "50px",
//           color: "white",
//         }}
//       >
//         Dien Tu {time}
//       </div>
//       <div
//         style={{
//           backgroundColor: "grey",
//           width: "150px",
//           height: "50px",
//           color: "white",
//         }}
//       >
//         Dong Ho Co {time}
//       </div>
//       <div
//         style={{
//           backgroundColor: "pink",
//           width: "150px",
//           height: "50px",
//           color: "white",
//         }}
//       >
//         Apple {time}
//       </div>
//       <div
//         style={{
//           backgroundColor: "purple",
//           width: "150px",
//           height: "50px",
//           color: "white",
//         }}
//       >
//         Samsung {time}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const taiSanOngNoi = 1000000;
//   const [taiSanChaTi, setTaiSanChaTi] = useState(taiSanOngNoi * 0.3);
//   const [taiSanChaTeo, setTaiSanChaTeo] = useState(taiSanOngNoi * 0.7);
//   const chiaTien = () => {
//     setTaiSanChaTi(taiSanChaTi + 10000);
//     setTaiSanChaTeo(taiSanChaTeo - 10000);
//   };
//   return (
//     <div
//       className="App"
//       style={{ backgroundColor: "red", height: "50vh", display: "flex" }}
//     >
//       Ong noi {taiSanOngNoi}
//       <ChaTi
//         taiSanChaTi={taiSanChaTi}
//         setTaiSanChaTi={setTaiSanChaTi}
//         chiaTien={chiaTien}
//       />
//       <ChaTeo taiSanChaTeo={taiSanChaTeo} setTaiSanChaTeo={setTaiSanChaTeo} />
//     </div>
//   );
// }
// function ChaTeo(props) {
//   let { taiSanChaTeo, setTaiSanChaTeo } = props;
//   return (
//     <div
//       style={{
//         backgroundColor: "green",
//         height: "60%",
//         margin: "auto",
//         width: "40%",
//       }}
//     >
//       <div>Cha {taiSanChaTeo}</div>
//       <div>
//         <Teo taiSan={taiSanChaTeo} setTaiSanChaTeo={setTaiSanChaTeo} />
//       </div>
//     </div>
//   );
// }
// function Teo(props) {
//   let { taiSan, setTaiSanChaTeo } = props;
//   return (
//     <div
//       style={{
//         backgroundColor: "pink",
//         height: "60%",
//         margin: "auto",
//         width: "40%",
//       }}
//     >
//       Teo {taiSan}
//     </div>
//   );
// }
// function ChaTi(props) {
//   let { taiSanChaTi, setTaiSanChaTi, chiaTien } = props;
//   return (
//     <div
//       style={{
//         backgroundColor: "orange",
//         height: "60%",
//         margin: "auto",
//         width: "40%",
//       }}
//     >
//       <div>Cha {taiSanChaTi}</div>
//       <div>
//         <Ti
//           taiSan={taiSanChaTi}
//           setTaiSanChaTi={setTaiSanChaTi}
//           chiaTien={chiaTien}
//         />
//       </div>
//     </div>
//   );
// }
// function Ti(props) {
//   let { taiSan, setTaiSanChaTi, chiaTien } = props;
//   return (
//     <div
//       style={{
//         backgroundColor: "white",
//         height: "60%",
//         margin: "auto",
//         width: "40%",
//       }}
//     >
//       Ti {taiSan}
//       <button
//         onClick={(e) => {
//           chiaTien();
//         }}
//       >
//         Xin tien Teo 10000
//       </button>
//     </div>
//   );
// }

// import {
//   Switch,
//   Route,
//   BrowserRouter,
//   useHistory,
//   Redirect,
// } from "react-router-dom";

// function Home(props) {
//   const history = useHistory();
//   return (
//     <div>
//       <h1>This is Home</h1>
//       <button onClick={() => history.push("./people")}>
//         Go to list People
//       </button>
//     </div>
//   );
// }

// function AuthRoute({ component: Component, ...rest }) {
//   const checkToken = () => {
//     return JSON.parse(localStorage.getItem("isLogin"));
//   };
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return checkToken() === null ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/" }} />
//         );
//       }}
//     />
//   );
// }
// function People(props) {
//   return <div>This is People</div>;
// }
// function PeopleDetail(props) {
//   return <div>This is People</div>;
// }

// function PageNotFound(props) {
//   return <div>Not Found</div>;
// }
// function Login(props) {
//   const history = useHistory();
//   console.log("login");
//   const onSubmit = () => {
//     localStorage.setItem("isLogin", true);
//     history.push("/");
//   };
//   return (
//     <div>
//       <form>
//         <input name="username" />
//         <input name="password" />
//         <button type="submit" onClick={onSubmit}>
//           Log in
//         </button>
//       </form>
//     </div>
//   );
// }

export default App;
