import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutScreen from "../screens/LayoutScreen";
import '../styles/index.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutScreen />} />
      </Routes>
        </div>
  );
}