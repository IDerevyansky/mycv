'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./menu.css"
import dataMenu from "@/app/lib/menu.json"
import { useState } from "react"
import BtnDwnld from "../btnDwnld/btnDwnld"




export default function Menu(){

    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    let listItem = dataMenu.items;

    var toggle = () => {
        isOpen == true? setIsOpen(false) : setIsOpen(true) ;
    }


    return(
        <div className="mainContainer">

            <div className="sizeContainer">

                <div className="leftSide">
                    <Link href={listItem[0].url}>Derevianskii</Link>
                </div>

                <div className="rightSide">

                    <BtnDwnld position='DownloadBtn'/>

                    <div className="menuItems">
                        {listItem.map((item, id)=>(
                            <Link key={id} className={ pathname === item.url? 'text-sky-600' : 'text-slate-800' } href={item.url}>{item.name}</Link>
                        ))}
                    </div>

                    <div className="burgerMenu" onClick={() => toggle()}>

                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6L26 6" stroke="#1E293B" strokeWidth="3" strokeLinecap="round"/>
                        <path d="M2 14L26 14" stroke="#1E293B" strokeWidth="3" strokeLinecap="round"/>
                        <path d="M2 22L26 22" stroke="#1E293B" strokeWidth="3" strokeLinecap="round"/>
                        </svg>

                        <div className={ isOpen == true? "popUpMenu flex" : "popUpMenu hidden" }>

                            {listItem.map((item, id)=>(
                                <Link key={id} className={ pathname === item.url? 'text-sky-600' : 'text-slate-800' } href={item.url}>{item.name}</Link>
                            ))}

                            <BtnDwnld position='DownloadBtnPopUp'/>


                        </div>

                    </div>


                    
                  

                </div>

            </div>

            
        </div>
        
    )
}
