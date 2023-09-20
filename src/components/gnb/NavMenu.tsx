import React from "react";
import { Link, Outlet } from "react-router-dom";

interface Title {
  link: string;
  name: string;
}

interface NavMenuProps {
  navTitles: Title[];
}

export function NavMenu({ navTitles }: NavMenuProps) {
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
      
      <Outlet />
    </nav>
  );
}