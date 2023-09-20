import { Link, Outlet } from "react-router-dom";

export function BlogNav() {
  interface Title {
    link: string;
    name: string;
  }

  const navTitles:Title[] = [
    {
      link: '',
      name: '블로그 홈'
    },
    {
      link: '/theme',
      name: '주제별 보기'
    },
    {
      link: '/this-month',
      name: '이달의 블로그'
    },
    {
      link: '/official',
      name: '공식블로그'
    },
    {
      link: '/challenge',
      name: '챌린지 프로그램'
    }
  ]

  return (
    <nav>
      <ul>
        {navTitles.map((title, index) => {
          return (
            <li key={index}>
              <Link className="link-style" to={`/blog${title.link}`}>
                {title.name}
              </Link>
            </li>
          )
        })}
      </ul>

      <Outlet />
    </nav>
  )
}