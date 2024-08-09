import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick(e, mode) {
    navigate("/" + mode);
  }

  return (
    <main className="home-main">
      <img src="/img/logo.svg" alt="Rock paper scissors logo" />
      <div>
        <button
          onClick={(e) => {
            handleClick(e, "basic");
          }}
          aria-label="Start Basic Game"
        >
          Basic
        </button>
        <button
          onClick={(e) => {
            handleClick(e, "bonus");
          }}
          aria-label="Start Bonus Game"
        >
          Bonus
        </button>
      </div>
    </main>
  );
}

export default Home;
