import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCards } from "../store/cards";
import Room from "./Room";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      teamA: "",
      teamB: "",
    };
  }
  componentDidMount() {
    try {
      this.props.getCards();
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log("card", this.props);
    return (
      <div className="home">
        <div className="navbar">
          <Room />
          <Link to="/instructions" className="navbar-item">
            How to Play
          </Link>
        </div>

        <div className="home-main">
          <h1>Time's UP!</h1>
          <div className="pineapple">
            <img src="pineapple.png" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => dispatch(setCards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
