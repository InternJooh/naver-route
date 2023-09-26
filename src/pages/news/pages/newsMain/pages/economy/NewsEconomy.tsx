import { economyData } from '../../../../../../data/newsData/mNews/MNewsNavData'
import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import { MNewsContentSideNav } from '../components/contentSideNav/MNewsContentSideNav'
import '../style/NewsMain.css'

export function NewsEconomy() {
  return (
    <div className="nav-border">
      <div className='paper-size'>
       <MNewsContentHead />
       <MNewsContentSideNav page="economy" navTitles={economyData}/>
      </div>
    </div>
  )
}