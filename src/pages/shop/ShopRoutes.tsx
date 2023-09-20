import { shopRoutesData } from "../../components/data/RoutesData";
import { PageRoutes } from "../../components/routes/PageRoutes";
import { ShopNav } from "./ShopNav";

export function ShopRoutes() {
  return (<PageRoutes routesData={shopRoutesData} navComponent={<ShopNav />} />)
}