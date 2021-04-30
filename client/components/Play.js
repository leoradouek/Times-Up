import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCards } from "../store/cards";

export class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      scoreA: 0,
      scoreB: 0,
      cardsRemaining: 40,
      timer: 10,
      cards: [],
      //currentCard: 0,
      team: "A",
    };
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
  }

  componentDidMount() {
    try {
      this.props.getCards();
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

  handleStartGame() {
    this.setState({ start: true });
    this.setState({ cards: this.props.cards });
  }

  handleTimer() {
    this.setState({ timer: 10 });
    this.timer();
  }
  handleCorrect() {
    // cards remaining in deck:
    this.setState({ cardsRemaining: this.state.cardsRemaining - 1 });

    // slice that card from the deck

    let cards = this.state.cards.slice(1);
    this.setState({ cards: cards });
    console.log("new deck after correct", this.state.cards);
    //this.setState({ currentCard: this.state.currentCard + 1 });

    //setting the score
    this.state.team === "A"
      ? this.setState({ scoreA: this.state.scoreA + 1 })
      : this.setState({ scoreB: this.state.scoreB + 1 });
  }

  handlePass() {
    // put the card to the end of the deck
    let cards = this.state.cards;
    cards.push(cards.shift());
    this.setState({ cards: cards });

    // this.setState({ currentCard: this.state.currentCard + 1 });
  }

  render() {
    //const gameCards = this.randomizeCards(this.props.cards);
    const currentCard = this.state.cards[0] || [];

    const cardsRemaining = this.state.cardsRemaining;

    return (
      <div>
        <div className="start">
          <button className="correct" onClick={() => this.handleStartGame()}>
            Start The Game
          </button>
        </div>
        {this.state.start ? (
          <div>
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
            <div>
              <button className="correct" onClick={() => this.handleTimer()}>
                Go!
              </button>
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
              </div>
            )}

            <div className="deck-counter">
              <p>cards left in deck: {cardsRemaining}</p>
            </div>
            <div className="score">
              <p>Team A score: {this.state.scoreA}</p>
              <p>Team B score: {this.state.scoreB}</p>
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
        ) : (
          <p></p>
        )}
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
