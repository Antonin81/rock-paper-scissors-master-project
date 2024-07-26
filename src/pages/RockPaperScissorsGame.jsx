import { useState } from "react";
import Header from "../components/Header";

function RockPaperScissorsGame({ gameMode }) {
  const [score, setScore] = useState(0);
  return (
    <>
      <Header gameMode={gameMode} score={score} />
    </>
  );
}

export default RockPaperScissorsGame;
