import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import '../style/NewsMain.css'
import './style/NewsRanking.css'

export function NewsRanking() {
  return (
    <div className="nav-border">
      <div className='ranking-size'>
       <MNewsContentHead />
      </div>
    </div>
  )
}