import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HowToPlay = () => (
  <div>
    <div className="navbar">
      <Link to="/">Back</Link>
    </div>
    <p>
      Divide into teams with team members sitting across from each other. Time’s
      Up! works best when played in teams of two players each. (Three teams of
      two, for example, is better than two teams of three.) With more than ten
      players, larger teams will be necessary. (See end of rules for odd number
      of players.) Choose a player to keep score. Decide whether you’ll be using
      the YELLOW or the BLUE titles. Make sure everyone knows which color you’re
      using! Do not mix colors within the same game. Deal out 40 cards evenly
      among all players (for a longer game, deal out more cards). Then deal two
      more cards to each player. The rest of the deck won’t be used and should
      be put back in the box. Each player may look at their cards and discard
      two of them. (Players should not reveal their cards to each other.) All
      remaining cards are then shuffled together and stacked face down in the
      center of the table. This stack is the Deck of Fame. Choose a starting
      team to take the Deck. The next team clockwise from the starting team
      takes the timer and will use it to time the other team’s turn. HOW TO PLAY
      Round 1 - Almost anything goes with cluegiving but passing is not allowed.
      On each team’s turn, one member of the team is the Cluegiver and the rest
      are the Guessers. (On successive turns, the Cluegiver will be a different
      member of the team.) The Cluegiver takes the Deck, draws the top card from
      it, and looks at the YELLOW or BLUE title depending on which color
      everyone agreed upon at the start. Once the Cluegiver has looked at the
      title, the next team says, “Go!” and starts the timer. The Cluegiver
      begins giving clues to his teammate(s). The Cluegiver can say or do almost
      anything: he can make sounds, point, charade, give full descriptions of
      the title, etc. The only restrictions are: No singing or humming of music
      is allowed. No part or variant of the title can be used in the clue. Ex:
      You can’t use “Willy” or “Bill” to get the Guesser to say WILLIAM. “Rhymes
      with” clues are acceptable, provided the Cluegiver doesn’t actually say
      the rhyming word. Ex: “Sounds like the animal that oinks” would be OK, but
      not “Sounds like pig.” No spelling of the title is allowed, nor is any
      clue designed to give away specific letters of the title (the only
      exception is for titles using initials, such as E.T.: The
      Extra-Terrestrial, although for such titles the cluegiver is still
      forbidden to say the initials outright). The Guessers try to guess the
      title on the Cluegiver’s card. The Guessers can make as many guesses as
      they wish; there is no penalty for a wrong answer. Guessers must say the
      full title as printed on the card, although words in parentheses are
      optional. If the Guessers call out the correct title, the Cluegiver sets
      the card aside, draws a new card from the Deck, and begins giving clues
      for the title on that card. The Cluegiver cannot pass and move on to a new
      title until the Guessers call out the correct title. If the Cluegiver
      doesn’t recognize the title he draws, he’ll have to be more resourceful
      with his clues (see Tips, next page). If the Cluegiver gives an illegal
      clue, his turn ends immediately and the card he goofed on is returned to
      the Deck. When time expires, the Cluegiver shuffles the card he was
      currently working on back into the Deck. He keeps each card that was
      guessed correctly in a pile near him. Pass the Deck to the next team
      clockwise, who in turn pass the timer to the next team clockwise from
      them. IMPORTANT: If time runs out before a title is guessed, players may
      NOT discuss the title with each other. The cluegiver can’t reveal what he
      was trying to convey, and players on other teams who think they figured it
      out can’t tell their guesses to each other. A card may come up multiple
      times before it is guessed correctly.
    </p>
  </div>
);

export default HowToPlay;
