import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCards } from "../store/cards";

class Home extends React.Component {
  componentDidMount() {
    try {
      this.props.getCards();
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log("home", this.props);
    return (
      <div className="home">
        <div className="navbar">
          <Link to="/play" className="navbar-item">
            Play
          </Link>
          <Link to="/instructions" className="navbar-item">
            How to Play
          </Link>
        </div>

        <div>
          <h1>Time's UP!</h1>
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
