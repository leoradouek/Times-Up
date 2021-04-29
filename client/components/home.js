import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/instructions">How to Play</Link>
      </div>
      <h1>Time's UP!</h1>
      <h2>title recall</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFzgut32srdxW6iveEcB3lDoAPhr6Gs7qbg&usqp=CAU" />
      <Link to="/play"></Link>
    </div>
  );
};

export default Home;
