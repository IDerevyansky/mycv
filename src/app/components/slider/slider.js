'use client'
import Image from "next/image"
import './slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



export default function Slider(props){

    let DATA = props.data

    // console.log(DATA)


    return(


    <div className="card">


     <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop='true'
        lazy='true'
        pagination={{
            dynamicBullets: true,
          }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
                DATA.list.map((item, key)=>(

                    <SwiperSlide key={key} >
                        <Image
                            key={key}
                            src={item}
                            width={1024}
                            height={682}
                            sizes="100vw"
                            alt="Igor Derevianskii"
                            quality={100}
                            priority={DATA.priority}
                        />
                        <div className="swiper-lazy-preloader"></div>
                    </SwiperSlide>
                    

                ))
            }

      </Swiper>

        <div className={DATA.visible == "true"?"cardInfo":"hidden"}>

            <div className="title-logo">

                <h2>{DATA.title}</h2>
                <Image
                    src={DATA.logo}
                    width={DATA.logoSize.width}
                    height={DATA.logoSize.height}
                    alt={DATA.alt}
                />
                
            </div>
            

            <p dangerouslySetInnerHTML={{__html:DATA.description}}></p>

        </div>   


    </div>


    )
}