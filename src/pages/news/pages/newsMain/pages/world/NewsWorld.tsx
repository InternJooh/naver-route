import { worldData } from '../../../../../../data/newsData/mNews/MNewsNavData'
import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import { MNewsContentSideNav } from '../components/contentSideNav/MNewsContentSideNav'
import '../style/NewsMain.css'
import './style/NewsWorld.css'

export function NewsWorld() {
  return (
    <div className="nav-border">
      <div className='world-size'>
       <MNewsContentHead />
       <MNewsContentSideNav page="politics" navTitles={worldData}/>
      </div>
    </div>
  )
}