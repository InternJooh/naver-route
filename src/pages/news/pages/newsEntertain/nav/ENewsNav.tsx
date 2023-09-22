import { Outlet } from "react-router-dom";
import { eNewsNavData, eNewsSideData } from "../../../../../data/NavData";
import { ENewsSideNav } from "./navSide/ENewsSideNav";
import { ENewsMainNav } from "./navMain/ENewsMainNav";
import "./style/ENewsNav.css"

export function ENewsNav() {
  return (
    <>
      <div className="eNews-nav">
        <ENewsSideNav navTitles={eNewsSideData}/>
        <ENewsMainNav page="entertain" defaultStyle="eNews-mainNav-link" navClass="eNews-mainNav" navTitles={eNewsNavData} />
      </div>
      
      <Outlet />
    </>
  )
}