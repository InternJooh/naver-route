import { NavMenu } from "../../components/gnb/NavMenu";
import { blogNavData } from "../../data/NavData";

export function BlogNav() {
  return (<NavMenu navTitles={blogNavData} />)
}