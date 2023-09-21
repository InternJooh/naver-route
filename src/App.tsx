import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CafeRoutes } from './pages/cafe/CafeRoutes';
import { BlogRoutes } from './pages/blog/BlogRoutes';
import { ShopRoutes } from './pages/shop/ShopRoutes';
import { NewsHomeRoutes } from './pages/news/routes/NewsHomeRoutes';
import { FinanceRoutes } from './pages/finance/FinanceRoutes';
import { LandRoutes } from './pages/land/LandRoutes' 
import { MapRoutes } from './pages/map/MapRoutes';
import { ComicRoutes } from './pages/comic/ComicRoutes';
import { MailHome } from './pages/mail/content/MailHome';
import { Home } from './pages/home/Home';
import { NewsEntertainRoutes } from './pages/news/routes/NewsEntertainRoutes';
import { NewsWeatherRoutes } from './pages/news/routes/NewsWeatherRoutes';
import { NewsSportRoutes } from './pages/news/routes/NewsSportRoutes';
import { NewsPremium } from './pages/news/pages/newsPremium/NewsPremium';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mail" element={<MailHome />} /> 
      <Route path="/cafe/*" element={<CafeRoutes />} />
      <Route path="/blog/*" element={<BlogRoutes />} /> 
      <Route path="/shop/*" element={<ShopRoutes />} /> 
      {/* 뉴스 */}
      <Route path="/news/*" element={<NewsHomeRoutes />} /> 
      <Route path="/entertain-news/*" element={<NewsEntertainRoutes />} /> 
      <Route path="/sport-news/*" element={<NewsSportRoutes />} /> 
      <Route path="/weather-news/*" element={<NewsWeatherRoutes />} /> 
      <Route path="/premium-news" element={<NewsPremium />} />

      <Route path="/finance/*" element={<FinanceRoutes />} /> 
      <Route path="/land/*" element={<LandRoutes />} /> 
      <Route path="/map/*" element={<MapRoutes />} /> 
      <Route path="/comic/*" element={<ComicRoutes />} /> 
    </Routes>
  );
}

export default App;
