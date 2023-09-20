import { Route, Routes } from "react-router-dom";
import { FinanceNav } from "./FinanceNav";
import { FinanceDomestic } from "./content/FinanceDomestic";
import { FinanceWorld } from "./content/FinanceWorld";
import { FinanceMarketIndex } from "./content/FinanceMarketIndex";
import { FinanceResearch } from "./content/FinanceResearch";
import { FinanceNews } from "./content/FinanceNews";
import { FinanceMy } from "./content/FinanceMy";
import { FinanceHome } from "./content/FinanceHome";

export function FinanceRoutes() {
  interface Data {
    path: string;
    component: JSX.Element;
  }

  const routesData:Data[] = [
    {
      path: '/domestic',
      component: <FinanceDomestic />
    },
    {
      path: '/world',
      component: <FinanceWorld />
    },
    {
      path: '/market-index',
      component: <FinanceMarketIndex />
    },
    {
      path: '/research',
      component: <FinanceResearch />
    },
    {
      path: '/news',
      component: <FinanceNews />
    },
    {
      path: '/my',
      component: <FinanceMy />
    }
  ]

  return (
    <Routes>
      <Route element={<FinanceNav />}>
        <Route index element={<FinanceHome />}/>
        {routesData.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.component} />
          )
        })}
      </Route>
    </Routes>
  )
}