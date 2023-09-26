import { MNewsContentHead } from '../components/contentHead/MNewsContentHead'
import '../style/NewsMain.css'
import './style/NewsByCompany.css'

export function NewsByCompany() {
  return (
    <div className='nav-border grey-background'>
      <div className="byCompany-size">
        <MNewsContentHead grey={true}/>
      </div>
    </div>
  )
}