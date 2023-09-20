import { Link, Outlet } from "react-router-dom";

export function FinanceNav() {
  interface Title {
    link: string;
    name: string;
  }

  const navTitles:Title[] = [
    {
      link: '',
      name: '증권 홈'
    },
    {
      link: 'domestic',
      name: '국내증시'
    },
    {
      link: 'world',
      name: '해외증시'
    },
    {
      link: 'market-index',
      name: '시장지표'
    },
    {
      link: 'research',
      name: '리서치'
    },
    {
      link: 'news',
      name: '뉴스'
    },
    {
      link: 'my',
      name: 'MY'
    }
  ]

  return (
    <nav>
      <ul>
        {navTitles.map((title, index) => {
          return (
            <li key={index}>
              <Link className="link-style" to={`/finance/${title.link}`}>
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