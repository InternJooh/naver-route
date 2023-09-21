import { NavMenu } from "../../../../components/gnb/NavMenu";
import { wNewsNavData } from "../../../../data/NavData";

export function NewsWeatherNav() {
  return (
    <div>
      <NavMenu navTitles={wNewsNavData} />
    </div>
  )
}