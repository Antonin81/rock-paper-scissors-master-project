import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/main.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import RockPaperScissorsGame from "./pages/RockPaperScissorsGame";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/rock-paper-scissors-master-project">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/basic"
          element={<RockPaperScissorsGame isBonusMode={false} />}
        />
        <Route
          exact
          path="/bonus"
          element={<RockPaperScissorsGame isBonusMode={true} />}
        />
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
