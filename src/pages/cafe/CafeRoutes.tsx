import { PageRoutes } from "../../components/routes/PageRoutes";
import { cafeRoutesData } from "../../data/RoutesData";
import { CafeNav } from "./CafeNav";

export function CafeRoutes() {
  return (<PageRoutes routesData={cafeRoutesData} navComponent={<CafeNav />} />)
}