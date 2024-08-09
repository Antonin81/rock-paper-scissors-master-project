import ActionButton from "./ActionButton";

function GameBoard({
  isBonusMode,
  playGame,
  setPlayerButton,
  basicButtons,
  bonusButtons,
}) {
  return (
    <div className={"gameboard" + (isBonusMode ? " bonus-gameboard" : "")}>
      <img
        aria-hidden="true"
        src={
          isBonusMode
            ? "../../public/img/bg-pentagon.svg"
            : "../../public/img/bg-triangle.svg"
        }
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
            />
          ))}
      </div>
    </div>
  );
}

export default GameBoard;
