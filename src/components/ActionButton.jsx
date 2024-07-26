function ActionButton({ isBonusMode, button, playGame, setPlayerButton }) {
  return playGame ? (
    <button
      className={
        "action-button " +
        button.action +
        "-button" +
        (isBonusMode ? " small" : "")
      }
      aria-label={button.action}
      onClick={(e) => {
        setPlayerButton(button);
        playGame(button.action);
      }}
    >
      <span>
        <img aria-hidden="true" src={button.img} alt="" />
      </span>
    </button>
  ) : (
    <button
      className={
        "action-button " +
        button.action +
        "-button" +
        (isBonusMode ? " small" : "")
      }
      aria-label={button.action}
      disabled
    >
      <span>
        <img aria-hidden="true" src={button.img} alt="" />
      </span>
    </button>
  );
}

export default ActionButton;
