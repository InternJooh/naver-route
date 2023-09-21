import { Link } from "react-router-dom";
import { NavMenu } from "../../../../../components/gnb/NavMenu";
import { newsHeadData } from "../../../../../data/NavData";

export function NewsHomeHead() {
  const navTitles = newsHeadData;
  
  return (
    <nav>
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