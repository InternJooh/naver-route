import { Link } from "react-router-dom";
import "./style/ENewsSideNav.css"

interface Title {
  link: string;
  name: string;
}

interface NavMenuProps {
  navTitles: Title[];
}

export function ENewsSideNav({ navTitles }: NavMenuProps) {
  return (
    <>
      <nav className="eNews-side-nav">
        <ul>
          {navTitles.map((title, index) => {
            return (
              <li key={index}>
                <Link className="eNews-side-nav-link" to={title.link}>
                  {title.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}





