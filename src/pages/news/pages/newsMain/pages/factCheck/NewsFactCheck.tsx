import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import '../style/NewsMain.css'
import './style/NewsFactCheck.css'

export function NewsFactCheck() {
  return (
    <div className="nav-border">
      <div className='factCheck-size'>
       <MNewsContentHead />
      </div>
    </div>
  )
}