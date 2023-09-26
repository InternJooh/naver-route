import { lifeCultureData } from '../../../../../../data/newsData/mNews/MNewsNavData'
import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import { MNewsContentSideNav } from '../components/contentSideNav/MNewsContentSideNav'
import '../style/NewsMain.css'
import './style/NewsLifeCulture.css'

export function NewsLifeCulture() {
  return (
    <div className="nav-border">
      <div className='lifeCulture-size'>
       <MNewsContentHead />
       <MNewsContentSideNav page="life-culture" navTitles={lifeCultureData}/>
      </div>
    </div>
  )
}