import React from "react";
import { Link } from "react-router-dom";

class Deck extends React.Component {
  constructor() {
    super();
  }

  render() {
    const deck = this.props.deck;
    const currentCard = deck[0];

    return (
      <>
        {currentCard ? (
          <div className="card">
            <h4>{currentCard.title}</h4>
            <p>{currentCard.genre}</p>
          </div>
        ) : (
          <div className="card">
            <p>End of Deck!</p>
          </div>
        )}
      </>
    );
  }
}

export default Deck;
