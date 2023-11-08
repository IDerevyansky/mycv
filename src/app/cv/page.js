import Menu from '../components/menu/menu'
import Body from '../components/body/body'
import cv from '@/app/lib/cv.json'




export default function Cv() {

  return (
    <main>
      
      <Menu/>
      <Body data={cv}/>

    </main>
  )
}
