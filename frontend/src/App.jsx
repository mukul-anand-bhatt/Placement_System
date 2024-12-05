import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Placements from "./pages/Placements";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
