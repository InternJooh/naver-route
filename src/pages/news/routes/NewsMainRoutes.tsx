import { MNewsNav } from "../pages/newsMain/nav/MNewsNav";
import { PageRoutes } from "../../../components/routes/PageRoutes";
import { newsRoutesData } from "../../../data/RoutesData";

export function NewsMainRoutes() {
  return (<PageRoutes routesData={newsRoutesData} navComponent={<MNewsNav />} />)
}