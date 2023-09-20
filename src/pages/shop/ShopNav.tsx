import { NavMenu } from "../../components/gnb/NavMenu";
import { shopNavData } from "../../components/data/NavData";

export function ShopNav() {
  return (<NavMenu navTitles={shopNavData} />)
}