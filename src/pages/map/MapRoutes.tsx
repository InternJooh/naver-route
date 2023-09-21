import { mapRoutesData } from "../../data/RoutesData"
import { PageRoutes } from "../../components/routes/PageRoutes"
import { MapNav } from "./MapNav"

export function MapRoutes() {
  return (<PageRoutes routesData={mapRoutesData} navComponent={<MapNav />} />)
}