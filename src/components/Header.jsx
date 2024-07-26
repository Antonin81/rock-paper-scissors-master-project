function Header({ gameMode, score }) {
  const basicGame = ["rock", "paper", "scissors"];
  const bonusGame = ["rock", "paper", "scissors", "lizard", "spock"];

  return (
    <header>
      <div>
        <ul>
          {gameMode === "basic" &&
            basicGame.map((label) => <li key={label}>{label}</li>)}
          {gameMode === "bonus" &&
            bonusGame.map((label) => (
              <li key={label} className="full-actions-list">
                {label}
              </li>
            ))}
        </ul>
        <div>
          <p className="score-title">SCORE</p>
          <p className="score-text">{score}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
