import React, { useEffect, useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/home"
import Location from "./pages/location"
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/location">
            <Route path=":ip" element={<Location />} />
          </Route>
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
