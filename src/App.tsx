import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeNav } from './pages/home/HomeNav'
import { CafeRoutes } from './pages/cafe/CafeRoutes';
import { BlogRoutes } from './pages/blog/BlogRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeNav />} /> {/* 
      <Route path="/mail" element={<HomeNav />} /> */}
      <Route path="/cafe/*" element={<CafeRoutes />} />
      <Route path="/blog/*" element={<BlogRoutes />} /> {/*}
      <Route path="/shop" element={<HomeNav />} />
      <Route path="/news" element={<HomeNav />} />
      <Route path="/finance" element={<HomeNav />} />
      <Route path="/land" element={<HomeNav />} />
      <Route path="/map" element={<HomeNav />} />
      <Route path="/comic" element={<HomeNav />} /> */}
    </Routes>
  );
}

export default App;
