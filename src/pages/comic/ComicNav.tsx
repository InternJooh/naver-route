import { NavMenu } from "../../components/gnb/NavMenu";
import { comicNavData } from "../../data/NavData";

export function ComicNav() {
  return (<NavMenu navTitles={comicNavData} />)
}