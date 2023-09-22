import { PageRoutes } from "../../../components/routes/PageRoutes";
import { sNewsRoutesData } from "../../../data/RoutesData";
import { SNewsNav } from "../pages/newsSport/nav/SNewsNav";

export function NewsSportRoutes() {
  return (<PageRoutes routesData={sNewsRoutesData} navComponent={<SNewsNav />} />)
}