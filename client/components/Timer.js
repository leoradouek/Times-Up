import React from "react";

class Timer extends React.Component {
  render() {
    const timer = this.props.timer;
    console.log(timer);
    return (
      <div className="timer">
        <svg>
          <g className="timer-circle">
            <circle className="timer-elapsed" cx="50" cy="50" r="45" />
          </g>
        </svg>
        <span className="time-left-label">{timer}</span>
      </div>
    );
  }
}

export default Timer;
