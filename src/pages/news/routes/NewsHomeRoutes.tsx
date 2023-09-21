import { NewsHomeNav } from "../pages/newsHome/nav/NewsHomeNav";
import { PageRoutes } from "../../../components/routes/PageRoutes";
import { newsRoutesData } from "../../../data/RoutesData";

export function NewsHomeRoutes() {
  return (<PageRoutes routesData={newsRoutesData} navComponent={<NewsHomeNav />} />)
}