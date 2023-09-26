import { Link, Outlet, matchPath, useLocation } from "react-router-dom";
import './style/MNewsContentSideNav.css'

interface Title {
  link: string;
  name: string;
}

interface NavMenuProps {
  defaultStyle?: string;
  navClass?: string;
  page: string;
  navTitles: Title[];
}

export function MNewsContentSideNav({ page, defaultStyle='mNews-sideNav-link', navClass="mNews-sideNav", navTitles }: NavMenuProps) {
  const activeStyle = `${defaultStyle} active`;
  const beginningURL = `news/${page}`
  const location = useLocation();

  return (
    <div className="flex-row">
      <nav className={navClass}>
        <ul>
          {navTitles.map((title, index) => {
            const isActive = matchPath(location.pathname, `/${beginningURL}/${title.link}`);
            return (
              <li key={index}>
                <Link
                  className={index!==0 && isActive ? activeStyle : defaultStyle}
                  to={title.link}
                  >
                    <span className="">{title.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}





