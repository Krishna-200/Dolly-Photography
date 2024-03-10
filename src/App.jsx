import React from "react";
import LandingPage from "./Components/LandingPage";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Portfolio from "./Components/Portfolio";
import PortfolioDetails from "./Components/PortfolioDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route
          exact
          path="/PortfolioDetails/:id"
          element={<PortfolioDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
