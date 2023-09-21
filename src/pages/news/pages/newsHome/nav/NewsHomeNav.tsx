import { NavMenu } from "../../../../../components/gnb/NavMenu";
import { newsHeadData, newsNavData } from "../../../../../data/NavData";
import { NewsHomeHead } from "./NewsHomeHead";

export function NewsHomeNav() {
  return (
    <div>
      <NewsHomeHead />
      <NavMenu navTitles={newsNavData} />
    </div>
  )
}