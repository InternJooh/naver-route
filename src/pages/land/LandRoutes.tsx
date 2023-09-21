import { landRoutesData } from "../../data/RoutesData"
import { PageRoutes } from "../../components/routes/PageRoutes"
import { LandNav } from "./LandNav"

export function LandRoutes() {
  return (<PageRoutes routesData={landRoutesData} navComponent={<LandNav />} />)
}