import { NavMenu } from "../../components/gnb/NavMenu";
import { newsNavData } from "../../components/data/NavData";

export function NewsNav() {
  return (<NavMenu navTitles={newsNavData} />)
}