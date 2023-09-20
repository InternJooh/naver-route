import { NavMenu } from "../../components/gnb/NavMenu";
import { cafeNavData } from "../../components/data/NavData";

export function CafeNav() {
  return (<NavMenu navTitles={cafeNavData} />)
}