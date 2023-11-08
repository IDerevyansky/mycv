import Menu from '../components/menu/menu'
import Slider from '../components/slider/slider'
import DATA from '../lib/slider.json'

import '@/app/portfolio/portfolio.css'


export default function Portfolio() {

  return (
    <main>
      
      <Menu/>

      <div className="bodyMainContainer">

        <div className="bodyContainerPortfolio">

          {
            DATA.map((item, key)=>(
              <Slider key={key} data={item}/>
            ))
          }

        </div>

      </div>

      

    </main>
  )
}
