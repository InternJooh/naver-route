import { NavMenu } from "../../components/gnb/NavMenu";
import { mapNavData } from "../../data/NavData";

export function MapNav() {
  return <NavMenu navTitles={mapNavData} />
}