import { Link, Outlet } from "react-router-dom";

export function CafeNav() {
  interface Title {
    link: string;
    name: string;
  }

  const navTitles:Title[] = [
    {
      link: '',
      name: '카페홈'
    },
    {
      link: '/themes',
      name: '주제별'
    },
    {
      link: '/areas',
      name: '지역별'
    },
    {
      link: "/rankings",
      name: "랭킹"
    },
    {
      link: "/powers",
      name: "대표카페"
    }
  ]
  return (
    <nav>
      <ul>
        {navTitles.map((title, index) => {
          return (
          <li key={index}>
            <Link className="link-style" to={`/cafe${title.link}`}>
              {title.name}
            </Link>
          </li>)
        })}
      </ul>

      <Outlet />
    </nav>
  )
}