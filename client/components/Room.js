import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setRooms } from "../store/rooms";

class Room extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    try {
      this.props.getRooms();
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const rooms = this.props.rooms;
    return (
      <div className="dropdown">
        <button className="dropbtn">
          Join a Room <i className="fa fa-sign-in" aria-hidden="true"></i>
        </button>
        <div className="dropdown-content">
          {rooms.map((room) => (
            <Link to={`/play/${room.id}`} key={room.id}>
              {room.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRooms: () => dispatch(setRooms()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
