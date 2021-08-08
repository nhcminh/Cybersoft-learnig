import React, { useCallback, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Control = () => {
  const [count, setCount] = useState(1);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isDraw, setIsDraw] = useState(true);
  const [isReveal, setIsReveal] = useState(true);
  const deckCard = useSelector((state) => {
    return state.card.deckCard;
  });
  const playerList = useSelector((state) => {
    return state.player.playerList;
  });
  const dispatch = useDispatch();
  const shuffleDeckCard = useCallback(() => {
    axios({
      method: "GET",
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    })
      .then((res) => {
        dispatch({ type: "SET_DECK_CARD", payload: res.data });
        dispatch({ type: "REVEAL_CARDS", payload: false });
        const players = [...playerList];
        for (const player of players) {
          player.cards = [];
        }
        dispatch({ type: "SET_PLAYERS", payload: players });
        setIsShuffle(true);
        setIsDraw(false);
      })
      .catch((err) => console.log(err));
  }, [dispatch, playerList]);
  const drawCards = useCallback(() => {
    axios({
      method: "GET",
      url: `https://deckofcardsapi.com/api/deck/${deckCard.deck_id}/draw/?count=12`,
    })
      .then((res) => {
        const players = [...playerList];

        for (const i in res.data.cards) {
          const playerIndex = i % 4;
          players[playerIndex].cards.push(res.data.cards[i]);
        }

        setIsDraw(true);
        setIsReveal(false);
        dispatch({ type: "SET_PLAYERS", payload: players });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deckCard, playerList, dispatch]);

  const revealCards = useCallback(() => {
    setIsShuffle(false);
    setIsReveal(true);
    //1. lật bài
    dispatch({ type: "REVEAL_CARDS", payload: true });

    //2. tính kết quả
    const players = [...playerList];
    const results = [];
    const bingoWinner = [];
    for (const i in players) {
      let bingo = true;
      const cards = players[i].cards.map((card) => card.value);
      let result = 0;
      for (const card of cards) {
        if (card === "KING" || card === "QUEEN" || card === "JACK") {
          bingo &= true;
          result += 10;
        } else if (card === "10") {
          bingo &= false;
          result += 10;
        } else if (card === "ACE") {
          bingo &= false;
          result += 1;
        } else {
          bingo &= false;
          result += Number(card);
        }
      }
      results.push({
        playerIndex: i,
        result: result % 10,
        bingo,
      });
    }
    for (const i in results) {
      if (results[i].bingo) {
        bingoWinner.push(results[i].playerIndex);
      }
    }
    const winner = [];
    results.sort((a, b) => b.result - a.result);
    winner.push(results[0]);
    for (const result of results) {
      if (result.result === winner[0]) winner.push(result);
    }
    for (const i in results) {
      if (bingoWinner.length > 0) {
        console.log(bingoWinner);
        bingoWinner.forEach(
          (playerIndex) =>
            (players[playerIndex].totalPoint +=
              20000 / bingoWinner.length - 5000)
        );
        players.forEach((player, index) => {
          if (!results[index].bingo) player.totalPoint -= 5000;
        });
        console.log(players);
        dispatch({ type: "SET_PLAYERS", payload: players });

        return;
      }
      winner.length - i > 0
        ? (players[results[i].playerIndex].totalPoint +=
            20000 / winner.length - 5000)
        : (players[results[i].playerIndex].totalPoint -= 5000);
    }
    dispatch({ type: "SET_PLAYERS", payload: players });

    setCount(() => {
      return count + 1;
    });
    // if (count > 4) {
    //   alert(
    //     "Winner is " +
    //       playerList.sort((a, b) => b.totalPoint - a.totalPoint)[0].username
    //   );
    //   return;
    // }
  }, [count, dispatch, playerList]);

  return (
    <>
      <div className="d-flex  justify-content-end container">
        <div className="border d-flex justify-content-center align-items-center px-2">
          <button
            onClick={shuffleDeckCard}
            className="btn btn-success mr-2"
            disabled={isShuffle ? true : false}
          >
            Shuffle
          </button>
          <button
            onClick={drawCards}
            className="btn btn-info mr-2"
            disabled={isDraw ? true : false}
          >
            Draw
          </button>
          <button
            onClick={revealCards}
            className="btn btn-primary mr-2"
            disabled={isReveal ? true : false}
          >
            Reveal
          </button>
        </div>
        <div className="d-flex">
          {playerList.map((item) => {
            return (
              <div key={item.username} className="border px-3 text-center">
                <p>{item.username}</p>
                <p> {item.totalPoint} </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Control;
