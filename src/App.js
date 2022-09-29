import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/app.css";
// import { useState, useEffect } from "react";
// import { Navbar } from "./components/Navbar";
import { Planet } from "./components/Planet";
// import { Background } from "./components/Background";

//planetName as prop below?
export const App = () => {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="mercury" />} />
          <Route path="/:planetName" element={<Planet />} />
        </Routes>
      </div>
    </>
  );
};
