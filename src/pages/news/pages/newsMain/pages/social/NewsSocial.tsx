import { socialData } from '../../../../../../data/newsData/mNews/MNewsNavData'
import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import { MNewsContentSideNav } from '../components/contentSideNav/MNewsContentSideNav'
import '../style/NewsMain.css'
import './style/NewsSocial.css'

export function NewsSocial() {
  return (
    <div className="nav-border">
      <div className='social-size'>
       <MNewsContentHead />
       <MNewsContentSideNav page="social" navTitles={socialData}/>
      </div>
    </div>
  )
}