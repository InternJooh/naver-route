import { Link } from "react-router-dom"
import "../../../../../components/global-style/NavMenu.css"
import "./styles/HomeNav.css"

interface Title {
  link: string;
  name: string;
}

interface NavMenuProps {
  navTitles: Title[];
}

export function HomeNav({ navTitles }:NavMenuProps) {
  return (
    <nav>
      <ul className="home-nav">
        {navTitles.map((title, index) => {
          return (
          <li key={index}>
            <Link className="home-navlink" to={`/${title.link}`} target='_blank' rel="noopener noreferrer">
              {title.name}
            </Link>
          </li>)
        })}     
      </ul>
    </nav>
  )
}