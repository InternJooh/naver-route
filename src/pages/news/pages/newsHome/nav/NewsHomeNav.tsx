import { newsNavData } from "../../../../../data/NavData";
import { NewsHomeHead } from "./components/NewsHomeHead";
import { NewsHomeNavMenu } from "./components/NewsHomeNavMenu";
import "./style/NewsHomeNav.css"

export function NewsHomeNav() {
  return (
    <div>
      <NewsHomeHead />
      <NewsHomeNavMenu linkClass="news-home-navlink" navClass="news-home-nav" navTitles={newsNavData} />
    </div>
  )
}