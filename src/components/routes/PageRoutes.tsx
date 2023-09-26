import React from "react";
import { Route, Routes } from "react-router-dom";

interface Data {
  path: string;
  component: JSX.Element;
  nestedRoutes?: Data[];
}

interface PageRoutesProps {
  routesData: Array<Data>;
  navComponent: React.ReactNode; // The component responsible for navigation (e.g., LandNav or FinanceNav)
}

export function PageRoutes({ routesData, navComponent}: PageRoutesProps) {
  return (
    <Routes>
      <Route element={navComponent}>
      {routesData.map((route, index) => (
          <Route key={index} path={route.path} element={route.component}>
            {/* Nested Routes */}
            {route.nestedRoutes && route.nestedRoutes.map((nestedRoute, nestedIndex) => (
              <Route key={nestedIndex} path={nestedRoute.path} element={nestedRoute.component} />
            ))}
          </Route>
        ))}
      </Route>
    </Routes>
  );
}