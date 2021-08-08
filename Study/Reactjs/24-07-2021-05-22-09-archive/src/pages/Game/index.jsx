import React, { Fragment, useEffect, memo } from "react";
import "./index.css";
import Controls from "../../components/Control";
import Main from "../../components/Main";
import axios from "axios";
import { useDispatch } from "react-redux";

const Game = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://deckofcardsapi.com/api/deck/new/",
    })
      .then((res) => {
        dispatch({ type: "SET_DECK_CARD", payload: res.data });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <Fragment>
      <Controls />
      <Main />
    </Fragment>
  );
};

export default memo(Game);
