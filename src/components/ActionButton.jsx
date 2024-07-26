function ActionButton({ isBonusMode, button, playGame }) {
  return (
    <button
      className={
        "action-button " +
        button.action +
        "-button" +
        (isBonusMode ? " small" : "")
      }
      aria-label={button.action}
      onClick={(e) => {
        playGame(button.action);
      }}
    >
      <span>
        <img aria-hidden="true" src={button.img} alt="" />
      </span>
    </button>
  );
}

export default ActionButton;
