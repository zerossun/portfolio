import React from "react";
import PokemIndex from "./components/PokemIndex";
import PokemonDetailsPage from "./components/PokemonDetailsPage";
import Create from "./components/Create";
import UseEffect from "./components/UseEffect";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PokemIndex />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
          {/* <Route path="/" element={<Create />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
