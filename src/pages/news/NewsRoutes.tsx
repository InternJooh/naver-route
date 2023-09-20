import { Route, Routes } from "react-router-dom";
import { NewsNav } from "./NewsNav";
import { NewsByCompany } from "./content/NewsByCompany";
import { NewsPolitics } from "./content/NewsPolitics";
import { NewsEconomy } from "./content/NewsEconomy";
import { NewsSocial } from "./content/NewsSocial";
import { NewsLifeCulture } from "./content/NewsLifeCulture";
import { NewsITScience } from "./content/NewsITScience";
import { NewsWorld } from "./content/NewsWorld";
import { NewsRanking } from "./content/NewsRanking";
import { NewsPaper } from "./content/NewsPaper";
import { NewsOpinion } from "./content/NewsOpinion";
import { NewsTV } from "./content/NewsTV";
import { NewsFactCheck } from "./content/NewsFactCheck";
import { NewsAlgorithm } from "./content/NewsAlgorithm";

export function NewsRoutes() {
  interface Data {
    path: string;
    component: JSX.Element;
  }

  const routesData:Data[] = [
    {
      path: '/politics',
      component: <NewsPolitics />
    },
    {
      path: '/economy',
      component: <NewsEconomy />
    },
    {
      path: '/social',
      component: <NewsSocial />
    },
    {
      path: '/life-culture',
      component: <NewsLifeCulture />
    },
    {
      path: '/it-science',
      component: <NewsITScience />
    },
    {
      path: '/world',
      component: <NewsWorld />
    },
    {
      path: '/ranking',
      component: <NewsRanking />
    },
    {
      path: '/paper',
      component: <NewsPaper />
    },
    {
      path: '/opinion',
      component: <NewsOpinion />
    },
    {
      path: '/tv',
      component: <NewsTV />
    },
    {
      path: '/fact-check',
      component: <NewsFactCheck />
    },
    {
      path: '/algorithm',
      component: <NewsAlgorithm />
    }
  ]

  return (
    <Routes>
      <Route element={<NewsNav />}>
        <Route index element={<NewsByCompany />}/>
        {routesData.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.component} />
          )
        })}
      </Route>
    </Routes>
  )
}