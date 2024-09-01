function ActionButton({
  isBonusMode,
  button,
  playGame,
  setPlayerButton,
  areRulesOpen,
}) {
  return playGame ? (
    <button
      className={
        "action-button " +
        button.action +
        "-button" +
        (isBonusMode ? " small" : "")
      }
      aria-label={"Play " + button.action}
      onClick={(e) => {
        setPlayerButton(button);
        playGame(button.action);
      }}
      tabIndex={areRulesOpen ? -1 : 0}
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
