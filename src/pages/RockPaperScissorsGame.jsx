import { useState } from "react";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";

function RockPaperScissorsGame({ isBonusMode }) {
  const [resultGame, setResultGame] = useState(null);
  const [score, setScore] = useState(0);

  const ACTIONS = ["scissors", "paper", "rock", "lizard", "spock"];

  const RESULTS = [
    [0, 1, -1, 1, -1],
    [-1, 0, 1, -1, 1],
    [1, -1, 0, 1, -1],
    [-1, 1, -1, 0, 1],
    [1, -1, 1, -1, 0],
  ];

  function playGame(playerAction) {
    const max = isBonusMode ? 5 : 3;
    const botAction = Math.floor(Math.random() * max);
    calculateScore(playerAction, botAction);
  }

  function calculateScore(playerAction, botAction) {
    const result = whoWins(playerAction, botAction);
    setScore(score + result);
    setResultGame(result);
  }

  function whoWins(playerAction, botAction) {
    console.log(playerAction, ACTIONS[botAction]);
    const playerActionIndex = ACTIONS.indexOf(playerAction);
    return RESULTS[playerActionIndex][botAction];
  }

  return (
    <>
      <Header isBonusMode={isBonusMode} score={score} />
      <main>
        <GameBoard isBonusMode={isBonusMode} playGame={playGame} />
      </main>
    </>
  );
}

export default RockPaperScissorsGame;
