import React from "react";
import { connect } from "react-redux";
import { createRoom } from "../store/rooms";

class RoomForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.create({ ...this.state });
  }

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="enter name"
        />
        <button type="submit" className="start">
          Start Room
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  create: (room) => dispatch(createRoom(room, history)),
});

export default connect(null, mapDispatchToProps)(RoomForm);
