import axios from "axios";

// action types
const SET_ROOMS = "SET_ROOMS";

//action creators
const _setRooms = (rooms) => ({
  type: SET_ROOMS,
  rooms,
});

// thunk creators

export const setRooms = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/rooms");
      dispatch(_setRooms(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//reducer
export default (state = [], action) => {
  switch (action.type) {
    case SET_ROOMS:
      return action.rooms;
    default:
      return state;
  }
};
