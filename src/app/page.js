'use client'
import Image from 'next/image'
import Menu from './components/menu/menu'
import Avatar from '@/app/lib/img/avatar.jpg'
import Link from 'next/link'

import DATA from '@/app/lib/cv.json'
import './components/globals.css'





export default function Home() {

let socialIcon = DATA.personInfo.socialnetwork;

let iconComponent = (url, link, name, key) => {

  return(

    <Link key={key} href={link} target='_blank'>
      <Image
        className='icon' 
        src={url}
        width={32}
        height={32}
        alt={name}
      />
    </Link>
    
  )

}


  return (
    <main>

      <Menu/>

      <div className="bodyMainContainer">

        <div className="bodyContainerAbout">

          <div className='profil'>

            <Image 
              className='profilPhoto'
              src={Avatar}
              width={220}
              height={220}
              alt="Derevianskii Igor"
            />

              <div className='contactInfotmation'>
                <h2>{DATA.personInfo.name}</h2>
                  <div className=' arrow font flex flex-col gap-0'>

                    <Link href={"mailto:"+DATA.personInfo.mail}>{DATA.personInfo.mail}</Link>
                    <Link href={"tel:"+DATA.personInfo.phone}>{DATA.personInfo.phone}</Link>
                    {/* <p>{DATA.personInfo.address}</p> */}
                    <Link href={DATA.personInfo.cvLink} target='_blank'>Download CV (.pdf)</Link>

                  </div>

                <div className='socialIcon'>

                  {socialIcon.map((item, key)=>(

                    iconComponent(item.url, item.link, item.name, key)

                  ))}

                </div>

              </div>

          </div>

          <div className='personalInfo'>
           <p dangerouslySetInnerHTML={{__html:DATA.summary.description}} ></p>
          </div>

        </div>  

      </div>  

    </main>
  )
}
