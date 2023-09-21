import { NavMenu } from "../../../../../components/gnb/NavMenu";
import { eNewsNavData } from "../../../../../data/NavData";
import "./style/NewsEntertainNav.css";

export function NewsEntertainNav() {
  return (
    <div>
      <NavMenu navClass="news-entertain-nav" navTitles={eNewsNavData} />
    </div>
  )
}