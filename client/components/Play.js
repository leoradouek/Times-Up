import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCards } from "../store/cards";

export class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      cardsRemaining: 40,
      timer: 3,
      currentCard: 0,
      team: "A",
    };
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }

  componentDidMount() {
    try {
      this.props.getCards();
      //console.log("this.props.cards", this.props.cards);
    } catch (error) {
      console.log(error);
    }
  }

  // randomizeCards(cards) {
  //   const shuffled = cards.sort(() => 0.5 - Math.random()); // shuffle the deck
  //   let selected = shuffled.slice(0, 5); //get sub-array of first 40 elements after shuffled
  //   console.log(selected);
  // }

  timer() {
    const countDown = () => {
      this.setState({ timer: this.state.timer - 1 });
      if (this.state.timer === 0) {
        clearInterval(intervalId);
        if (this.state.team === "A") {
          this.setState({ team: "B" });
        } else if (this.state.team === "A") {
          this.setState({ team: "B" });
        }
      }
    };

    const intervalId = setInterval(countDown, 1000);
  }

  handleStart() {
    this.setState({ timer: 3 });
    this.timer();
  }
  handleCorrect() {
    this.setState({ cardsRemaining: this.state.cardsRemaining - 1 });
    this.setState({ currentCard: this.state.currentCard + 1 });
    this.setState({ score: this.state.score + 1 });
  }
  handlePass() {
    this.setState({ currentCard: this.state.currentCard + 1 });
  }
  render() {
    //const gameCards = this.randomizeCards(this.props.cards);
    const currentCard = this.props.cards[this.state.currentCard] || {};
    console.log(currentCard);
    const cardsRemaining = this.state.cardsRemaining;

    return (
      <div>
        <div className="start">
          <button className="correct" onClick={() => this.handleStart()}>
            Go!
          </button>
        </div>
        <div className="team">
          <h4>Team {this.state.team}'s turn</h4>
        </div>
        <div className="timer">
          {this.state.timer > 0 ? (
            <h1>{this.state.timer} </h1>
          ) : (
            <h1>Time's Up!</h1>
          )}
        </div>
        {currentCard.title ? (
          <div className="card">
            <h4>{currentCard.title}</h4>
            <p>{currentCard.genre}</p>
          </div>
        ) : (
          <div>
            <p>End of Deck!</p>
            <Link to="/round2"> Round 2</Link>
          </div>g
        )}

        <div className="deck-counter">
          <p>cards left in deck: {cardsRemaining}</p>
        </div>
        <div className="score">
          <p>score: {this.state.score}</p>
        </div>
        <div className="correct-or-pass">
          <button className="correct" onClick={() => this.handleCorrect()}>
            Correct
          </button>
          <button className="pass" onClick={() => this.handlePass()}>
            Pass
          </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Play);
