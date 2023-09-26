import { ITScienceData } from '../../../../../../data/newsData/mNews/MNewsNavData'
import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import { MNewsContentSideNav } from '../components/contentSideNav/MNewsContentSideNav'
import '../style/NewsMain.css'
import './style/NewsITScience.css'

export function NewsITScience() {
  return (
    <div className="nav-border">
      <div className='ITScience-size'>
       <MNewsContentHead />
       <MNewsContentSideNav page="it-science" navTitles={ITScienceData}/>
      </div>
    </div>
  )
}