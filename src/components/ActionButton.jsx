function ActionButton({ isBonusMode, button }) {
  return (
    <button
      className={
        "action-button " +
        button.action +
        "-button" +
        (isBonusMode ? " small" : "")
      }
      aria-label={button.action}
    >
      <span>
        <img aria-hidden="true" src={button.img} alt="" />
      </span>
    </button>
  );
}

export default ActionButton;
