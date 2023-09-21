import React from "react";
import { Link, Outlet } from "react-router-dom";

interface Title {
  link: string;
  name: string;
}

interface NavMenuProps {
  navClass?: string;
  linkClass?: string;
  navTitles: Title[];
}

export function NewsHomeNavMenu({ navClass, linkClass, navTitles }: NavMenuProps) {
  const linkStyle = linkClass || "link-style";

  return (
    <>
      <nav className={navClass}>
        <ul>
          {navTitles.map((title, index) => (
            <li key={index}>
              <Link className={linkStyle} to={title.link}>
                {title.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}