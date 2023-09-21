import { NavMenu } from "../../components/gnb/NavMenu";
import { shopNavData } from "../../data/NavData";

export function ShopNav() {
  return (<NavMenu navTitles={shopNavData} />)
}