import React from "react";
import { Routes, Route } from "react-router-dom";
import Me from "../pages/me";
import World from "../pages/world";
import Book from "../pages/book";
import RanDetail from "../pages/rankingDetail";
import Ranking from "../pages/ranking";

function RouterMap() {
  return (
    <Routes>
      <Route path="/" element={<Book></Book>}></Route>
      <Route path="/world" element={<World></World>}></Route>
      <Route path="/me" element={<Me></Me>}></Route>
      <Route path="/ranking" element={<Ranking></Ranking>}></Route>
      <Route path="/rankingDetail" element={<RanDetail></RanDetail>}></Route>
    </Routes>
  );
}

export default RouterMap;
