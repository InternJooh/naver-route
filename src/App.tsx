import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeNav } from './pages/home/HomeNav'
import { CafeRoutes } from './pages/cafe/CafeRoutes';
import { BlogRoutes } from './pages/blog/BlogRoutes';
import { ShopRoutes } from './pages/shop/ShopRoutes';
import { NewsRoutes } from './pages/news/NewsRoutes';
import { FinanceRoutes } from './pages/finance/FinanceRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeNav />} /> {/* 
      <Route path="/mail" element={<HomeNav />} /> */}
      <Route path="/cafe/*" element={<CafeRoutes />} />
      <Route path="/blog/*" element={<BlogRoutes />} /> 
      <Route path="/shop/*" element={<ShopRoutes />} /> 
      <Route path="/news/*" element={<NewsRoutes />} /> 
      <Route path="/finance/*" element={<FinanceRoutes />} /> {/*}
      <Route path="/land" element={<HomeNav />} />
      <Route path="/map" element={<HomeNav />} />
      <Route path="/comic" element={<HomeNav />} /> */}
    </Routes>
  );
}

export default App;
