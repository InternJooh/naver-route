import { newsNavData } from "../../../../../data/NavData";
import { NewsNavMenu } from "../../../nav/NewsNavMenu";
import { MNewsHeadNav } from "./navHead/MNewsHeadNav";
import "./style/MNewsNav.css"

export function MNewsNav() {
  return (
    <div>
      <MNewsHeadNav />
      <NewsNavMenu defaultStyle="news-home-link" navClass="news-home-nav" navTitles={newsNavData} />
    </div>
  )
}