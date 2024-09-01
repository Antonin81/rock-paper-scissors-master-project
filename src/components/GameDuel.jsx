import ActionButton from "./ActionButton";

function GameDuel({ playerButton, botButton, resultGame, reset }) {
  return (
    <div className="game-duel-container">
      <div>
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
          {resultGame !== null && (
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
              {botButton ? (
                <ActionButton button={botButton} />
              ) : (
                <div className="empty-action-button"></div>
              )}
            </div>
          </div>
        </div>
      </div>
      {resultGame !== null && (
        <div className="duel-result-container duel-result-container-mobile">
          {resultGame == -1 && <p>YOU LOSE</p>}
          {resultGame == 0 && <p>EQUALITY</p>}
          {resultGame == 1 && <p>YOU WIN</p>}
          <button onClick={reset}>
            <span>PLAY AGAIN</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default GameDuel;
