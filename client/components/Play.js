import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCards } from "../store/cards";
import Deck from "./Deck";
import Timer from "./Timer";

export class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      timer: 0,
      cards: this.props.cards,
      cardsRemaining: 40,
      scoreA: 0,
      scoreB: 0,
      team: "A",
      color: "black",
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

  handleStartGame() {
    this.setState({ start: true });
    this.setState({ cards: this.props.cards });
  }

  handleTimer() {
    this.setState({ timer: 10 });

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

  render() {
    return (
      <div className="container">
        {!this.state.start ? (
          <button className="start" onClick={() => this.handleStartGame()}>
            Play
          </button>
        ) : (
          <div>
            <div className="team">
              <h1>Team {this.state.team}'s turn</h1>
            </div>
            <div className="deck-counter">
              <p>Cards Remaining: {this.state.cardsRemaining} </p>
            </div>
            {/* <Timer timer={this.state.timer} /> */}
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
                <div className="correct-or-pass">
                  <button
                    className="correct"
                    onClick={() => this.handleCorrect()}
                  >
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </button>
                  <button className="pass" onClick={() => this.handlePass()}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </>
            ) : (
              <button
                className="start-timer"
                onClick={() => this.handleTimer()}
              >
                Go!
              </button>
            )}

            <div className="score">
              <div className="score-a">
                <p>Team A's Score </p>
                <h1>{this.state.scoreA}</h1>
              </div>
              <div className="score-b">
                <p>Team B's Score </p>
                <h1>{this.state.scoreB}</h1>
              </div>
            </div>
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

// {
//   this.state.timer > 0 ? (
//     <>
//       <Timer timer={this.state.timer} />
//       <h1>{this.state.timer} </h1>

//       <Deck
//         deck={this.state.cards}
//         cardsRemaining={this.state.cardsRemaining}
//       />
//       <div className="correct-or-pass">
//         <button className="correct" onClick={() => this.handleCorrect()}>
//           Correct
//         </button>
//         <button className="pass" onClick={() => this.handlePass()}>
//           Pass
//         </button>
//       </div>
//     </>
//   ) : (
//     <div>
//       <h1>Time's Up!</h1>
//       <div>
//         <button className="correct" onClick={() => this.handleTimer()}>
//           Go!
//         </button>
//       </div>
//     </div>
//   );
// }
