import axios from "axios";

//action types
const SET_CARDS = "SET_CARDS";

//action creators
const _setCards = (cards) => ({
  type: SET_CARDS,
  cards,
});

//thunk creators
export const setCards = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/cards");
      data.sort(() => 0.5 - Math.random()); // shuffle the deck
      let deck = data.slice(0, 40); //get sub-array of first 40 elements after shuffled
      dispatch(_setCards(deck));
    } catch (err) {
      console.log("Error fetching cards via thunk");
    }
  };
};

//reducer
export default (state = [], action) => {
  switch (action.type) {
    case SET_CARDS:
      return action.cards;
    default:
      return state;
  }
};
