import { Link, Outlet, matchPath, useLocation } from "react-router-dom";

interface Title {
  link: string;
  name: string;
}

interface NavMenuProps {
  page?: string;
  defaultStyle?: string;
  navClass?: string;
  navTitles: Title[];
}

export function NewsNavMenu({ page, defaultStyle, navClass, navTitles }: NavMenuProps) {
  const activeStyle = `${defaultStyle} active`;
  const beginningURL = page ? `${page}-news` : "news";
  const location = useLocation();

  return (
    <>
      <nav className={navClass}>
        <ul>
          {navTitles.map((title, index) => {
            const isActive = matchPath(location.pathname, `/${beginningURL}/${title.link}`);
            return (
              <li key={index}>
                <Link
                  className={isActive ? activeStyle : defaultStyle}
                  to={title.link}
                >
                  <span>{title.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}





