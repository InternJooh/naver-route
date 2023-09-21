import { Link } from "react-router-dom";
import { newsHeadData } from "../../../../../../data/NavData";
import "../style/NewsHomeNav.css"

export function NewsHomeHead() {
  const navTitles = newsHeadData;

  return (
    <nav className="news-home-headnav">
      <ul>
        {navTitles.map((title, index) => (
          <li key={index}>
            <Link className={index >= 2 && index <= 6 ? "news-home-headnav-link" : ""} to={title.link}>
              {index!==0 && title.name}
            </Link>
          </li>
        ))}
      </ul>
   </nav>
  )
}