import { NewsNav } from "./NewsNav";
import { PageRoutes } from "../../components/routes/PageRoutes";
import { newsRoutesData } from "../../components/data/RoutesData";

export function NewsRoutes() {
  return (<PageRoutes routesData={newsRoutesData} navComponent={<NewsNav />} />)
}