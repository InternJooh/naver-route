import { PageRoutes } from "../../../components/routes/PageRoutes";
import { eNewsRoutesData } from "../../../data/RoutesData";
import { ENewsNav } from "../pages/newsEntertain/nav/ENewsNav";

export function NewsEntertainRoutes() {
  return (<PageRoutes routesData={eNewsRoutesData} navComponent={<ENewsNav />} />)
}