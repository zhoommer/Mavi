import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navi from "./components/navi/Navi";
import Banner from "./components/banner/Banner";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Jean from "./components/jean/jean";
import WomanJean from "./components/jean/womanjean/womanjean";
function App() {
  const currPath = window.location.pathname.split("/");
  useEffect(() => {
    document.title = "Mavi";
  });
  return (
    <div>
      <Header />
      <Navi />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jeanguide" element={<Jean />} />
        <Route path="/kadin/jean/:category/:page" element={<WomanJean />} />
      </Routes>
    </div>
  );
}

export default App;
