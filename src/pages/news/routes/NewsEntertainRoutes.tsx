import { PageRoutes } from "../../../components/routes/PageRoutes";
import { eNewsRoutesData } from "../../../data/RoutesData";
import { NewsEntertainNav } from "../pages/newsEntertain/NewsEntertainNav";

export function NewsEntertainRoutes() {
  return (<PageRoutes routesData={eNewsRoutesData} navComponent={<NewsEntertainNav />} />)
}