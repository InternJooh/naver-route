import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import './style/NewsPaper.css'

export function NewsPaper() {
  return (
    <div className="nav-border grey-background">
      <div className='paper-size'>
       <MNewsContentHead grey={true}/>
      </div>
    </div>
  )
}