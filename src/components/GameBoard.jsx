import ActionButton from "./ActionButton";

function GameBoard({
  isBonusMode,
  playGame,
  setPlayerButton,
  basicButtons,
  bonusButtons,
  areRulesOpen,
}) {
  return (
    <div className={"gameboard" + (isBonusMode ? " bonus-gameboard" : "")}>
      <img
        aria-hidden="true"
        src={isBonusMode ? "./img/bg-pentagon.svg" : "./img/bg-triangle.svg"}
        alt=""
      />
      <div>
        {basicButtons.map((button) => (
          <ActionButton
            button={button}
            isBonusMode={isBonusMode}
            playGame={playGame}
            key={button.action}
            setPlayerButton={setPlayerButton}
            areRulesOpen={areRulesOpen}
          />
        ))}
        {isBonusMode &&
          bonusButtons.map((button) => (
            <ActionButton
              button={button}
              isBonusMode={isBonusMode}
              playGame={playGame}
              key={button.action}
              setPlayerButton={setPlayerButton}
              areRulesOpen={areRulesOpen}
            />
          ))}
      </div>
    </div>
  );
}

export default GameBoard;
