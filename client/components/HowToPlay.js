import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HowToPlay = () => (
  <div>
    <div className="navbar">
      <Link to="/" className="navbar-item">
        <i className="fa fa-angle-left" aria-hidden="true"></i> Back
      </Link>
    </div>
    <div className="rules">
      <h3>
        Divide into two teams. The game is played using a set of 40 randomly
        chosen. The deck is used throughout all 3 rounds of the game.
      </h3>

      <div className="rounds-container">
        <div className="round">
          <h1> Round One </h1>
          <h2> Describe! </h2>
          <p>
            A player has 30 seconds to get their teammates to guess as many
            words as possible
          </p>
          <p>
            The player can say anything except:
            <ul>
              <li>say a word on the card</li>
              <li>spell the word</li>
              <li>translate a word in another language</li>
              <li>say words that rhyme with a word on the card</li>
            </ul>
          </p>
          <p>In addition,</p>
          <ul>
            <li>Cards cannot be skipped.</li>
            <li>The player's team can make as many guesses as they want.</li>
          </ul>
          <p>
            <button className="correct" onClick={() => this.handleCorrect()}>
              <i className="fa fa-check" aria-hidden="true"></i>
            </button>{" "}
            if your team guessed correctly
          </p>
          <p>
            <button className="pass" onClick={() => this.handlePass()}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            if you make a mistake
          </p>
          <p>When the time is up, it's the next team's turn</p>
          <p>
            When all 40 cards are done, move on to the second round. Team with
            the lower score goes first.
          </p>
        </div>
        <div className="round">
          <h1> Round Two </h1>
          <h2> Only one word! </h2>
          <p>
            This round is similar to the last one, but with the following
            changes:
          </p>
          <ul>
            <li>the player giving clues can only say one word</li>
            <li>players guessing can only make one guess </li>
            <li>
              can skip a card by pressing
              <span>
                <button className="pass" onClick={() => this.handlePass()}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </span>
            </li>
          </ul>

          <p>
            When all 40 cards are done, move on to third round. Team with the
            lower score goes first.
          </p>
        </div>
        <div className="round">
          <h1> Round Three </h1>
          <h2> Charades! </h2>
          <p>
            This round is similar to the last one, but with the following
            changes:
          </p>
          <ul>
            <li>
              the player giving clues must <strong>act out</strong> the card
            </li>
            <li>they are no longer allowed to talk</li>
          </ul>

          <p>
            When all 40 cards are done, the game is over. Team with the higher
            score WINS!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HowToPlay;
