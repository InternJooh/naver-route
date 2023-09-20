import { NavMenu } from "../../components/gnb/NavMenu";
import { financeNavData } from "../../components/data/NavData";

export function FinanceNav() {
  return <NavMenu navTitles={financeNavData} />
}