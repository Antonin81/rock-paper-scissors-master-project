import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick(e, mode) {
    navigate("/" + mode);
  }

  return (
    <main>
      <button
        onClick={(e) => {
          handleClick(e, "basic");
        }}
      >
        Basic
      </button>
      <button
        onClick={(e) => {
          handleClick(e, "bonus");
        }}
      >
        Bonus
      </button>
    </main>
  );
}

export default Home;
