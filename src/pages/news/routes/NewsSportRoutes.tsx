import { PageRoutes } from "../../../components/routes/PageRoutes";
import { sNewsRoutesData } from "../../../data/RoutesData";
import { NewsSportNav } from "../pages/newsSport/nav/NewsSportNav";

export function NewsSportRoutes() {
  return (<PageRoutes routesData={sNewsRoutesData} navComponent={<NewsSportNav />} />)
}