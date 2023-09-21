import { NavMenu } from "../../../../components/gnb/NavMenu";
import { eNewsNavData } from "../../../../data/NavData";

export function NewsEntertainNav() {
  return (
    <div>
      <NavMenu navTitles={eNewsNavData} />
    </div>
  )
}