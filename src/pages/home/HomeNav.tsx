import { Link } from "react-router-dom"
import '../../components/global-style/Nav.css'

export function HomeNav() {
  interface Title {
    link: string;
    name: string;
  }

  const navTitles:Title[] = [
    {
      link: 'mail',
      name: '메일'
    },
    {
      link: 'cafe',
      name: '카페'
    },
    {
      link: 'blog',
      name: '블로그'
    },
    {
      link: 'shop',
      name: '쇼핑'
    },
    {
      link: 'news',
      name: '뉴스'
    },
    {
      link: 'finance',
      name: '증권'
    },
    {
      link: 'land',
      name: '부동산'
    },
    {
      link: 'map',
      name: '지도'
    },
    {
      link: 'comic',
      name: '웹툰'
    }
  ]

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