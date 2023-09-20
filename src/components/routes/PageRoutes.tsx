import React from "react";
import { Route, Routes } from "react-router-dom";

interface PageRoutesProps {
  routesData: Array<{ path: string; component: JSX.Element }>;
  navComponent: React.ReactNode; // The component responsible for navigation (e.g., LandNav or FinanceNav)
}

export function PageRoutes({ routesData, navComponent}: PageRoutesProps) {
  return (
    <Routes>
      <Route element={navComponent}>
        {routesData.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
}