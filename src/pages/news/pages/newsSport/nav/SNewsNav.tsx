import { sNewsNavData } from "../../../../../data/NavData";
import { NewsNavMenu } from "../../../nav/NewsNavMenu";
import { SNewsHeadNav } from "./navHead/SNewsHeadNav";
import "./style/SNewsNav.css"

export function SNewsNav() {
  return (
    <div>
      <SNewsHeadNav />
      <NewsNavMenu page="sport" defaultStyle="sNews-mainNav-link" navClass="sNews-mainNav" navTitles={sNewsNavData} />
    </div>
  )
}