import { tvData } from '../../../../../../data/newsData/mNews/MNewsNavData'
import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import { MNewsContentSideNav } from '../components/contentSideNav/MNewsContentSideNav'
import '../style/NewsMain.css'
import './style/NewsTV.css'

export function NewsTV() {
  return (
    <div className="nav-border">
      <div className='tv-size'>
       <MNewsContentHead />
       <MNewsContentSideNav page="politics" navTitles={tvData}/>
      </div>
    </div>
  )
}