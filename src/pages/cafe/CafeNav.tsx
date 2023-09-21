import { NavMenu } from "../../components/gnb/NavMenu";
import { cafeNavData } from "../../data/NavData";

export function CafeNav() {
  return (<NavMenu navTitles={cafeNavData} />)
}