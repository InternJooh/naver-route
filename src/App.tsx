import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeNav } from './pages/home/HomeNav'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeNav />} />
        <Route path="/nuts" element={<h1>These Nuts</h1>} />
      </Routes>
    </>
  );
}

export default App;
