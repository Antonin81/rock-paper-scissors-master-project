import ActionButton from "./ActionButton";

function GameDuel({ playerButton, botButton, resultGame, reset }) {
  return (
    <div className="game-duel">
      <div>
        <p>YOU PICKED</p>
        <div
          className={
            "duel-action-container" + (resultGame == 1 ? " winner" : "")
          }
        >
          <ActionButton button={playerButton} />
        </div>
      </div>
      {resultGame && (
        <div className="duel-result-container">
          {resultGame == -1 && <p>YOU LOSE</p>}
          {resultGame == 0 && <p>EQUALITY</p>}
          {resultGame == 1 && <p>YOU WIN</p>}
          <button onClick={reset}>
            <span>PLAY AGAIN</span>
          </button>
        </div>
      )}
      <div>
        <p>THE HOUSE PICKED</p>
        <div
          className={
            "duel-action-container" + (resultGame == -1 ? " winner" : "")
          }
        >
          {botButton && <ActionButton button={botButton} />}
        </div>
      </div>
    </div>
  );
}

export default GameDuel;
