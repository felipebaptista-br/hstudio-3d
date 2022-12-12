import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";

export default function Addresses() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
