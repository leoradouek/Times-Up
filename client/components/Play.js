import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCards } from "../store/cards";
import Deck from "./Deck";
import Timer from "./Timer";
import Score from "./Score";
import TeamSignUp from "./TeamSignUp";
import Actions from "./Actions";
import socket from "../socket";

export class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      timer: 0,
      cards: [],
      cardsRemaining: 40,
      scoreA: 0,
      scoreB: 0,
      team: "A",
      color: "black",
      round: 1,
    };
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleNextRound = this.handleNextRound.bind(this);
  }

  componentDidMount() {
    try {
      this.props.getCards();
    } catch (error) {
      console.log(error);
    }
  }

  handleStartGame() {
    this.setState({ start: true, cards: this.props.cards });
    const msg = "User is ready to play";
    socket.emit("onPlay", msg);
  }

  handleTimer() {
    this.setState({ timer: 30 });

    const countDown = () => {
      this.setState({ timer: this.state.timer - 1 });
      if (this.state.timer === 0) {
        clearInterval(intervalId);
        if (this.state.team === "A") {
          this.setState({ team: "B" });
        } else if (this.state.team === "B") {
          this.setState({ team: "A" });
        }
      }
    };
    const intervalId = setInterval(countDown, 1000);
  }

  handleCorrect() {
    // cards remaining in deck:
    this.setState({ cardsRemaining: this.state.cardsRemaining - 1 });

    // slice that card from the deck
    let cards = this.state.cards.slice(1);
    this.setState({ cards: cards });
    console.log("new deck after correct", this.state.cards);

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
  }

  handleNextRound() {
    let team = "";
    this.state.scoreA > this.state.scoreB ? (team = "B") : (team = "A");
    this.setState({
      cardsRemaining: 40,
      round: this.state.round + 1,
      team: team,
      timer: 10,
      cards: this.props.cards,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">
          <Link to="/" className="navbar-item">
            <i className="fa fa-angle-left" aria-hidden="true"></i> Back
          </Link>
        </div>
        {!this.state.start ? (
          <button className="start" onClick={() => this.handleStartGame()}>
            Play
          </button>
        ) : (
          <div className="container-main">
            <div className="side-panel">
              {this.state.team === "A" ? (
                <h1>team A's turn</h1>
              ) : (
                <h1>team B's turn</h1>
              )}

              <h2>Cards Remaining: {this.state.cardsRemaining} </h2>

              <Score
                scoreA={this.state.scoreA}
                scoreB={this.state.scoreB}
                teamA={this.state.teamA}
                teamB={this.state.teamB}
              />
            </div>
            {this.state.cardsRemaining ? (
              <div className="game">
                {this.state.timer > 0 ? (
                  <>
                    {this.state.timer > 5 ? (
                      <h1 className="black">{this.state.timer} </h1>
                    ) : (
                      <h1 className="red">{this.state.timer} </h1>
                    )}

                    <Deck
                      deck={this.state.cards}
                      cardsRemaining={this.state.cardsRemaining}
                    />

                    <Actions
                      handleCorrect={this.handleCorrect}
                      handlePass={this.handlePass}
                    />
                  </>
                ) : (
                  <button
                    className="start-timer"
                    onClick={() => this.handleTimer()}
                  >
                    Go!
                  </button>
                )}
              </div>
            ) : (
              <button
                className="next-round"
                onClick={() => this.handleNextRound()}
              >
                Next Round
              </button>
            )}
          </div>
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
