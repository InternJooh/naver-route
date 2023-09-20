import { NavMenu } from "../../components/gnb/NavMenu";
import { blogNavData } from "../../components/data/NavData";

export function BlogNav() {
  return (<NavMenu navTitles={blogNavData} />)
}