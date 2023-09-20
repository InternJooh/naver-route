import { Route, Routes } from "react-router-dom";
import { ShopNav } from "./ShopNav";
import { ShopHome } from "./content/ShopHome";
import { ShopLogistics } from "./content/ShopLogistics"
import { ShopFashion } from "./content/ShopFashion";
import { ShopLuxury } from "./content/ShopLuxury";
import { ShopLiving } from "./content/ShopLiving";
import { ShopFood } from "./content/ShopFood";
import { ShopGrocery } from "./content/ShopGrocery";
import { ShopKids } from "./content/ShopKids";
import { ShopPet } from "./content/ShopPet";
import { ShopPlay } from "./content/ShopPlay";
import { ShopArt } from "./content/ShopArt";
import { ShopBook } from "./content/ShopBook";
import { ShopMr } from "./content/ShopMr";
import { ShopOnePlus } from "./content/ShopOnePlus";
import { ShopPlan } from "./content/ShopPlan";
import { ShopHotItem } from "./content/ShopHotItem";
import { ShopAitem } from "./content/ShopAitem";

export function ShopRoutes() {
  interface Data {
    path: string;
    component: JSX.Element;
  }
  const routesData:Data[] = [
    {
      path: '/logistics',
      component: <ShopLogistics />
    },
    {
      path: '/fashion',
      component: <ShopFashion />
    },
    {
      path: '/luxury',
      component: <ShopLuxury />
    },
    {
      path: '/living',
      component: <ShopLiving />
    },
    {
      path: '/food',
      component: <ShopFood />
    },
    {
      path: '/grocery',
      component: <ShopGrocery />
    },
    {
      path: '/kids',
      component: <ShopKids />
    },
    {
      path: '/pet',
      component: <ShopPet />
    },
    {
      path: '/play',
      component: <ShopPlay />
    },
    {
      path: '/art',
      component: <ShopArt />
    },
    {
      path: '/book',
      component: <ShopBook />
    },
    {
      path: '/mr',
      component: <ShopMr />
    },
    {
      path: '/one-plus',
      component: <ShopOnePlus />
    },
    {
      path: '/plan',
      component: <ShopPlan />
    },
    {
      path: '/hot-item',
      component: <ShopHotItem />
    },
    {
      path: '/aitems',
      component: <ShopAitem />
    }    
  ]

  return (
    <Routes>
      <Route element={<ShopNav />}>
        <Route index element={<ShopHome />} />
        {routesData.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.component} />
          )
        })}
      </Route>
    </Routes>
  )
}