import { Link } from "react-router-dom";
import { sNewsHeadData } from "../../../../../../data/NavData";
import "./style/SNewsHeadNav.css"

export function SNewsHeadNav() {
  const navTitles = sNewsHeadData;
  
  return (
    <nav className="sNews-headNav">
      <ul>
        {navTitles.map((title, index) => (
          <li key={index}>
            <Link className="sNews-headNav-link" to={title.link}>
              <span>{title.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}