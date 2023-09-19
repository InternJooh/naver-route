import { Link } from "react-router-dom"

export function HomeNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/mail' target="_blank" rel="noopener noreferrer">
            메일
          </Link>
        </li>
        <li>
          <Link to='/cafe' target="_blank" rel="noopener noreferrer">
            카페
          </Link>
        </li>
        <li>
          <Link to='/blog' target="_blank" rel="noopener noreferrer">
            블로그
          </Link>
        </li>
        <li>
          <Link to='/shop' target="_blank" rel="noopener noreferrer">
            쇼핑
          </Link>
        </li>
        <li>
          <Link to='/news' target="_blank" rel="noopener noreferrer">
            뉴스
          </Link>
        </li>
        <li>
          <Link to='/finance' target="_blank" rel="noopener noreferrer">
            증권
          </Link>
          <li>
          <Link to='/land' target="_blank" rel="noopener noreferrer">
            부동산
          </Link>
        </li>
        <li>
          <Link to='/map' target="_blank" rel="noopener noreferrer">
            지도
          </Link>
        </li>
        <li>
          <Link to='/comic' target="_blank" rel="noopener noreferrer">
            웹툰
          </Link>
        </li>
        </li>        
      </ul>
    </nav>
  )
}