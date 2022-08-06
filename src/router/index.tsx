import React from "react";
import { Routes, Route } from "react-router-dom";
import Me from "../pages/me";
import World from "../pages/world";
import Book from "../pages/book";

import User from "../pages/user";
import Test from "../pages/test";

import Search from "../pages/search";
import Detail from "../pages/detail";
import Slist from "../components/search/list";

// ws
import Login from "../components/ws/nav/login/login";
import Zhuce from "../components/ws/nav/login/zhuce/zhuce";
import {Ceshi} from "../components/ws/ceshi/ceshi"
import BD from "../pages/bookdetail";

import Shoucang from "../../src/components/ws/shoucang/shoucang"

import WorldDetail from "../components/worldDetail";


function RouterMap() {
  return (
    <Routes>
      <Route path="/" element={<Book></Book>}></Route>
      <Route path="/world" element={<World></World>}></Route>
      <Route path="/me" element={<Me></Me>}></Route>
      <Route path="/user" element={<User></User>}></Route>
      <Route path="/test" element={<Test></Test>}></Route>
      {/* ws */}
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/zhuce" element={<Zhuce></Zhuce>}></Route>
      <Route path="/search" element={<Search></Search>}></Route>
      <Route path="/detail" element={<Detail></Detail>}></Route>
      <Route path="/ser_detail" element={<Slist></Slist>}></Route>
      <Route path="/bookdetail" element={<BD></BD>}></Route>
      <Route path="/ceshi" element={<Ceshi></Ceshi>}></Route>
      <Route path="/Shoucang" element={<Shoucang></Shoucang>}></Route>

      <Route path="/world/detail" element={<WorldDetail></WorldDetail>}></Route>

    </Routes>
  );
}

export default RouterMap;
