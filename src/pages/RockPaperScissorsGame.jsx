import { useState } from "react";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";

function RockPaperScissorsGame({ isBonusMode }) {
  const [score, setScore] = useState(0);
  return (
    <>
      <Header isBonusMode={isBonusMode} score={score} />
      <main>
        <GameBoard
          isBonusMode={isBonusMode}
          score={score}
          setScore={setScore}
        />
      </main>
    </>
  );
}

export default RockPaperScissorsGame;
