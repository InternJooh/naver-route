import { PageRoutes } from "../../../components/routes/PageRoutes";
import { wNewsRoutesData } from "../../../data/RoutesData";
import { NewsWeatherNav } from "../pages/newsWeather/nav/NewsWeatherNav";

export function NewsWeatherRoutes() {
  return (<PageRoutes routesData={wNewsRoutesData} navComponent={<NewsWeatherNav />} />)
}