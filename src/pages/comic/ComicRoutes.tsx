import { PageRoutes } from "../../components/routes/PageRoutes";
import { cafeRoutesData, comicRoutesData } from "../../data/RoutesData";
import { ComicNav } from "./ComicNav";

export function ComicRoutes() {
  return (<PageRoutes routesData={comicRoutesData} navComponent={<ComicNav />} />)
}