import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import { MNewsContentSideNav } from '../components/contentSideNav/MNewsContentSideNav'
import '../style/NewsMain.css'
import { politicsData } from '../../../../../../data/newsData/mNews/MNewsNavData'

export function NewsPolitics() {
  return (
    <div className="nav-border">
      <div className='paper-size'>
        <MNewsContentHead />
        <MNewsContentSideNav page="politics" navTitles={politicsData}/>
      </div>
   </div>
  )
}