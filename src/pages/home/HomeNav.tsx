import { Link } from "react-router-dom"
import '../../components/global-style/NavMenu.css'

interface Title {
  link: string;
  name: string;
}

interface NavMenuProps {
  navTitles: Title[];
}

export function HomeNav({ navTitles }:NavMenuProps) {
  return (
    <nav className="home-nav">
      <ul>
        {navTitles.map((title, index) => {
          return (
          <li key={index}>
            <Link className="link-style" to={`/${title.link}`} target='_blank' rel="noopener noreferrer">
              {title.name}
            </Link>
          </li>)
        })}     
      </ul>
    </nav>
  )
}