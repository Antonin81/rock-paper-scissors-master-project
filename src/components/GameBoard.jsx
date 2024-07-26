import ActionButton from "./ActionButton";

function GameBoard({ isBonusMode, playGame }) {
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

  return (
    <div className={"gameboard" + (isBonusMode ? " bonus-gameboard" : "")}>
      <img
        aria-hidden="true"
        src={isBonusMode ? "/img/bg-pentagon.svg" : "/img/bg-triangle.svg"}
        alt=""
      />
      <div>
        {basicButtons.map((button) => (
          <ActionButton
            button={button}
            isBonusMode={isBonusMode}
            playGame={playGame}
            key={button.action}
          />
        ))}
        {isBonusMode &&
          bonusButtons.map((button) => (
            <ActionButton
              button={button}
              isBonusMode={isBonusMode}
              playGame={playGame}
              key={button.action}
            />
          ))}
      </div>
    </div>
  );
}

export default GameBoard;
