import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HowToPlay = () => (
  <div>
    <div className="navbar">
      <Link to="/" className="navbar-item">
        Back
      </Link>
    </div>
    <div className="rules">
      <h3>Divide into two teams</h3>

      <div className="round-one">
        <h1> Round One </h1>
        <h2> Describe! </h2>
        <p>
          A player has 30 seconds to make their team guess as many words as
          possible
        </p>
        <p>
          The player can say anything they wants but they can't:
          <ul>
            <li>
              <strong>skip</strong> the card
            </li>
            <li>say a word on the card</li>
            <li>
              <strong>spell</strong> the word
            </li>
            <li>
              <strong>translate</strong> the word in another language
            </li>
            <li>
              say words that <strong>rhyme with</strong>
            </li>
          </ul>
        </p>
        <p>The player's team can make as many guesses as they want</p>
        <p>
          If the card is guessed correctly, press{" "}
          <button className="correct" onClick={() => this.handleCorrect()}>
            <i className="fa fa-check" aria-hidden="true"></i>
          </button>{" "}
          and move on to next card
        </p>
        <p>
          If the player makes a mistake, press{" "}
          <button className="pass" onClick={() => this.handlePass()}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </p>
        <p>When the time is up, the next team goes</p>
        <p>When all 40 cards are done, move on to second round</p>
      </div>
      <div className="round-two">
        <h1> Round Two </h1>
        <h2> Only one word! </h2>
        <p>
          This round is similar to the last one, but with the following changes:
        </p>
        <ul>
          <li>
            the player giving clues can only say <strong>one word</strong>
          </li>
          <li>
            players guessing can only make <strong>one guess</strong>
          </li>
          <li>
            can <strong>skip</strong> a card by pressing{" "}
            <span>
              <button className="pass" onClick={() => this.handlePass()}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </span>
          </li>
        </ul>

        <p>When all 40 cards are done, move on to third round</p>
      </div>
      <div className="round-three">
        <h1> Round Three </h1>
        <h2> Charades! </h2>
        <p>
          This round is similar to the last one, but with the following changes:
        </p>
        <ul>
          <li>
            the player giving clues must <strong>act out</strong> the card
          </li>
          <li>they are no longer allowed to talk</li>
        </ul>

        <p>When all 40 cards are done, the game</p>
      </div>
    </div>
  </div>
);

export default HowToPlay;
