import { Link } from "react-router-dom";
import { sNewsHeadData } from "../../../../../data/NavData";
import "./style/NewsSportNav.css"

export function NewsSportHead() {
  const navTitles = sNewsHeadData;
  
  return (
    <nav className="news-sport-headnav">
      <ul>
        {navTitles.map((title, index) => (
          <li key={index}>
            <Link className="link-style" to={title.link}>
              {title.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}