import React from "react";
import Nav from "./Component/Nav";
import SignUp from "./Component/SignUp";
import PrivateComp from "./Component/PrivateComp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import AddProduct from "./Component/AddProduct";
import Home from "./Component/Home";
import Update from "./Component/Update";
import Search from "./Component/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComp />}>
            <Route path="/" element={<Home/>} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/search/:name" element={<Search/>} />
            <Route path="/update/:id" element={<Update/>} />
            <Route path="/logout" element={<h1>logout</h1>} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
