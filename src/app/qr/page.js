import Menu from '../components/menu/menu';
import Image from 'next/image';
import './qr.css';

import qrCode from '@/app/lib/img/QRCode.jpg'



export default function Qr(){


    return(

        <main>

            <Menu/>
    
            <div className="bodyMainContainer">
    
                <div className="qrBox">
        
                    <Image
                    src={qrCode}
                    width="320"
                    height="320"
                    alt="Qr code"
                    />

        
                </div>
    
            </div>
  
        
  
      </main>

    )
}