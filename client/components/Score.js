import React from "react";
import { Link } from "react-router-dom";

class Score extends React.Component {
  constructor() {
    super();
  }

  render() {
    const scoreA = this.props.scoreA;
    const scoreB = this.props.scoreB;

    return (
      <div className="score">
        <div className="score-a">
          <p>team A's Score </p>
          <h1>{scoreA}</h1>
        </div>
        <div className="score-b">
          <p>team B's Score </p>
          <h1>{scoreB}</h1>
        </div>
      </div>
    );
  }
}

export default Score;
