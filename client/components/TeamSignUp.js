import React from "react";
import { Link } from "react-router-dom";

class TeamSignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      teamA: "",
      teamB: "",
    };
  }

  render() {
    return (
      <div className="team-container">
        <h1>Form 2 Teams</h1>
        <form>
          <div className="team">
            <div className="team-image">Placeholder</div>

            <input
              name="teamA"
              onChange={this.handleChange}
              placeholder="enter team name"
            />
          </div>

          <div className="team">
            <div className="team-image">Placeholder</div>

            <input
              name="teamB"
              onChange={this.handleChange}
              placeholder="enter team name"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TeamSignUp;
