import { blogRoutesData } from "../../data/RoutesData";
import { PageRoutes } from "../../components/routes/PageRoutes";
import { BlogNav } from "./BlogNav";

export function BlogRoutes() {
  return (<PageRoutes routesData={blogRoutesData} navComponent={<BlogNav />} />)
}