import { NavMenu } from "../../../../../components/gnb/NavMenu";
import { sNewsNavData } from "../../../../../data/NavData";
import { NewsSportHead } from "./NewsSportHead";
import "./style/NewsSportNav.css"

export function NewsSportNav() {
  return (
    <div>
      <NewsSportHead />
      <NavMenu navClass="news-sport-nav" navTitles={sNewsNavData} />
    </div>
  )
}