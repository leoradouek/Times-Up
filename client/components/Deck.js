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
      <div className="card">
        {currentCard ? (
          <div className="card-content">
            <h1>{currentCard.title}</h1>
            <p>{currentCard.genre}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Deck;
