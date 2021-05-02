import axios from "axios";

// action types
const SET_ROOMS = "SET_ROOMS";
const CREATE_ROOM = "CREATE_ROOM";

//action creators
const _setRooms = (rooms) => ({
  type: SET_ROOMS,
  rooms,
});

export const _createRoom = (room) => {
  return {
    type: CREATE_ROOM,
    room,
  };
};
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

export const createRoom = (room, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/rooms", room);
      dispatch(_createRoom(data));
      history.push(`/`);
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
    case CREATE_ROOM:
      return [...state, action.room];
    default:
      return state;
  }
};
