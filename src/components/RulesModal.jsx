function RulesModal({ areRulesOpen, setAreRulesOpen, isBonusMode }) {
  return (
    <>
      {areRulesOpen && (
        <div className="rules-modal-background">
          <div>
            <div className="rules-modal">
              <div>
                <p>RULES</p>
                <button
                  onClick={(e) => {
                    setAreRulesOpen(false);
                  }}
                >
                  <img src="./img/icon-close.svg" alt="Close the rules" />
                </button>
              </div>
              <img
                src={
                  isBonusMode
                    ? "./img/image-rules-bonus.svg"
                    : "./img/image-rules.svg"
                }
                alt={
                  isBonusMode
                    ? "scissors beats paper and lizard, paper beats rock and spock, rock beats lizard and scissors, lizard beats spock and paper, spock beats scissors and rock."
                    : "scissors beats paper, paper beats rock, rock beats scissors."
                }
              />
              <button
                onClick={(e) => {
                  setAreRulesOpen(false);
                }}
              >
                <img src="./img/icon-close.svg" alt="Close the rules" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RulesModal;
