function Header({ isBonusMode, score }) {
  const basicGame = ["rock", "paper", "scissors"];
  const bonusGame = ["lizard", "spock"];

  return (
    <header>
      <div>
        <ul>
          {basicGame.map((label) => (
            <li key={label} className={isBonusMode ? "full-actions-list" : ""}>
              {label}
            </li>
          ))}
          {isBonusMode &&
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
