import { PageRoutes } from "../../components/routes/PageRoutes";
import { cafeRoutesData } from "../../components/data/RoutesData";
import { CafeNav } from "./CafeNav";

export function CafeRoutes() {
  return (<PageRoutes routesData={cafeRoutesData} navComponent={<CafeNav />} />)
}