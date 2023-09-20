import { Link, Outlet } from "react-router-dom";

export function NewsNav() {
  interface Title {
    link: string;
    name: string;
  }

  const navTitles:Title[] = [
    {
      link: '',
      name: '언론사별'
    },
    {
      link: 'politics',
      name: '정치'
    },
    {
      link: 'economy',
      name: '경제'
    },
    {
      link: 'social',
      name: '사회'
    },
    {
      link: 'life-culture',
      name: '생활/문화'
    },
    {
      link: 'it-science',
      name: 'IT/과학'
    },
    {
      link: 'world',
      name: '세계'
    },
    {
      link: 'ranking',
      name: '랭킹'
    },
    {
      link: 'paper',
      name: '신문보기'
    },
    {
      link: 'opinion',
      name: '오피니언'
    },
    {
      link: 'tv',
      name: 'TV'
    },
    {
      link: 'fact-check',
      name: '팩트체크'
    },
    {
      link: 'algorithm',
      name: '알고리즘 안내'
    }
  ]

  return (
    <nav>
      <ul>
        {navTitles.map((title, index) => {
          return (
            <li key={index}>
              <Link className="link-style" to={`/news/${title.link}`}>
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