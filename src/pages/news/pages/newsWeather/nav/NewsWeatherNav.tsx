import { wNewsNavData } from "../../../../../data/NavData";
import { NewsNavMenu } from "../../../nav/NewsNavMenu";
import { WNewsMainNav } from "./navMain/WNewsMainNav";
import "./style/NewsWeatherNav.css"

export function NewsWeatherNav() {
  return (
    <div>
      <WNewsMainNav page="weather" defaultStyle="wNews-nav-link" navClass="wNews-nav" navTitles={wNewsNavData} />
    </div>
  )
}