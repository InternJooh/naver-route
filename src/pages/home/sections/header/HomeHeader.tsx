import { homeNavData } from "../../../../data/NavData";
import { HomeNav } from "./components/HomeNav";
import { HomeSearchArea } from "./components/HomeSearchArea";

export function HomeHeader() {
  return (
    <>
      <HomeSearchArea />
      <HomeNav navTitles={homeNavData}/>
    </>
  )
}