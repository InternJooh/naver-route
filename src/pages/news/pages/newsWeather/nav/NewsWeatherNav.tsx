import { NavMenu } from "../../../../../components/gnb/NavMenu";
import { wNewsNavData } from "../../../../../data/NavData";
import "./style/NewsWeatherNav.css"

export function NewsWeatherNav() {
  return (
    <div>
      <NavMenu navClass="news-weather-nav" navTitles={wNewsNavData} />
    </div>
  )
}