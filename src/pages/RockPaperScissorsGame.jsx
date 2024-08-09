import { useState } from "react";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import GameDuel from "../components/GameDuel";
import RulesModal from "../components/RulesModal";

function RockPaperScissorsGame({ isBonusMode }) {
  const [resultGame, setResultGame] = useState(null);
  const [isGamePlaying, setIsGamePlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [playerButton, setPlayerButton] = useState(null);
  const [botButton, setBotButton] = useState(null);
  const [areRulesOpen, setAreRulesOpen] = useState(false);

  const ACTIONS = ["scissors", "paper", "rock", "lizard", "spock"];

  const RESULTS = [
    [0, 1, -1, 1, -1],
    [-1, 0, 1, -1, 1],
    [1, -1, 0, 1, -1],
    [-1, 1, -1, 0, 1],
    [1, -1, 1, -1, 0],
  ];

  const basicButtons = [
    {
      action: "scissors",
      img: "/img/icon-scissors.svg",
    },
    {
      action: "paper",
      img: "/img/icon-paper.svg",
    },
    {
      action: "rock",
      img: "/img/icon-rock.svg",
    },
  ];

  const bonusButtons = [
    {
      action: "lizard",
      img: "/img/icon-lizard.svg",
    },
    {
      action: "spock",
      img: "/img/icon-spock.svg",
    },
  ];

  function playGame(playerAction) {
    setIsGamePlaying(true);
    const max = isBonusMode ? 5 : 3;
    const botAction = Math.floor(Math.random() * max);
    setTimeout(() => {
      const actionName = ACTIONS[botAction];
      let button = basicButtons.find(
        (buttonHere) => buttonHere.action === actionName
      );
      if (!button) {
        button = bonusButtons.find(
          (buttonHere) => buttonHere.action === actionName
        );
      }
      setBotButton(button);
    }, 250);
    setTimeout(() => {
      calculateScore(playerAction, botAction);
    }, 250);
  }

  function reset() {
    setResultGame(null);
    setIsGamePlaying(false);
    setBotButton(null);
    setPlayerButton(null);
  }

  function calculateScore(playerAction, botAction) {
    const result = whoWins(playerAction, botAction);
    setScore(score + result);
    setResultGame(result);
  }

  function whoWins(playerAction, botAction) {
    const playerActionIndex = ACTIONS.indexOf(playerAction);
    return RESULTS[playerActionIndex][botAction];
  }

  return (
    <>
      <Header isBonusMode={isBonusMode} score={score} />
      <main>
        {!isGamePlaying && (
          <GameBoard
            isBonusMode={isBonusMode}
            playGame={playGame}
            setPlayerButton={setPlayerButton}
            basicButtons={basicButtons}
            bonusButtons={bonusButtons}
          />
        )}
        {isGamePlaying && (
          <GameDuel
            playerButton={playerButton}
            botButton={botButton}
            resultGame={resultGame}
            reset={reset}
          />
        )}
        <button
          onClick={(e) => {
            setAreRulesOpen(true);
          }}
          className="rules-button"
          aria-label="Open the rules"
        >
          RULES
        </button>
      </main>
      <RulesModal
        areRulesOpen={areRulesOpen}
        setAreRulesOpen={setAreRulesOpen}
        isBonusMode={isBonusMode}
      />
    </>
  );
}

export default RockPaperScissorsGame;
