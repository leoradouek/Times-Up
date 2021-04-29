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
      dispatch(_setCards(data));
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
