let initialState = {
  playerList: [
    {
      username: "Player 1",
      email: "player1@gmail.com",
      phone: "1829839030",
      totalPoint: 25000,
      cards: [],
    },
    {
      username: "Player 2",
      email: "player2@gmail.com",
      phone: "8849839939",
      totalPoint: 25000,
      cards: [],
    },
    {
      username: "Player 3",
      email: "player3@gmail.com",
      phone: "894589485",
      totalPoint: 25000,
      cards: [],
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PLAYER":
      state.playerList = [...state.playerList, payload];
      return { ...state };

    case "SET_PLAYERS":
      state.playerList = payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
