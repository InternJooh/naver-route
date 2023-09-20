import { Link, Outlet } from "react-router-dom";

export function ShopNav() {
  interface Title {
    link: string;
    name: string;
  }

  const navTitles:Title[] = [
    {
      link: '',
      name: '홈' 
    },
    {
      link: 'logistics',
      name: '도착보장'
    },
    {
      link: 'fashion',
      name: 'FashionTown' 
    },
    {
      link: 'luxury',
      name: '럭셔리'
    }, 
    {
      link: 'living',
      name: '리빙윈도' 
    },
    {
      link: 'food',
      name: '푸드윈도'
    },
    {
      link: 'grocery',
      name: '장보기' 
    },
    {
      link: 'kids',
      name: '키즈윈도'
    },
    {
      link: 'pet',
      name: '펫' 
    },
    {
      link: 'play',
      name: '플레이윈도'
    },
    {
      link: 'art',
      name: '아트윈도' 
    },
    {
      link: 'book',
      name: '도서'
    },   
    {
      link: 'mr',
      name: 'MR.'
    },
    {
      link: 'one-plus',
      name: '원쁠딜'
    },
    {
      link: 'plan',
      name: '기획전'
    },
    {
      link: 'hot-item',
      name: '핫아이템'
    },
    {
      link: 'aitems',
      name: 'AiTEMS'
    }
  ]

  return (
    <nav>
      <ul>
        {navTitles.map((title, index) => {
          return (
            <li key={index}>
              <Link className="link-style" to={`/shop/${title.link}`}>
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