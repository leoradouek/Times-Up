import React from "react";
import { Link } from "react-router-dom";

class Actions extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="correct-or-pass">
        <button className="correct" onClick={() => this.props.handleCorrect()}>
          <i className="fa fa-check" aria-hidden="true"></i>
        </button>
        <button className="pass" onClick={() => this.props.handlePass()}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default Actions;
