import { JSX } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import style from './Slider.module.scss';
import { cards } from './data';
import { Card } from './Card';


export function Another(): JSX.Element {
  return (
    <div className={style.the_container}>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{nextEl: "#custom-next", // Link to your custom "next" button
                prevEl: "#custom-prev",}}
            pagination={{ clickable: false }}
            scrollbar={{ draggable: true, enabled: false}}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className={style.container}
        >
            <div>
                {
                    cards.map(({imgSrc, title, description, hasButton, index}) => {
                        return <SwiperSlide key = {title} className={style.item}>
                            <Card
                                hasButton={hasButton} 
                                imgSrc={imgSrc} 
                                description={description} 
                                title={title} 
                                index={index} 
                            />
                        </SwiperSlide>
                    })
                }
            </div>
        </Swiper>

        <div className={style.nav}>
            <button id="custom-prev" className="custom-nav prev">---i</button>
            <button id="custom-next" className="custom-nav next">i-----</button>
        </div>
    </div>
  );
};

// export function Slider(): JSX.Element {
//     return (
//         <div className={style.container}>
//             {/* <div className={style.cards}>
//                 <motion.div>
//                     {
//                         cards.map(({imgSrc, title, description, hasButton, index}, i) => {
//                             return <motion.div>
//                                 <Card
//                                     hasButton={hasButton} 
//                                     imgSrc={imgSrc} 
//                                     description={description} 
//                                     title={title} 
//                                     index={index} 
//                                 />
//                             </motion.div>
//                         })
//                     }
//                 </motion.div>
//             </div> */}

//             <div className="cards">

//             </div>

//             <Swiper
//                 modules={[]}
//                 pagination={{ clickable: true }}
//                 navigation
//                 loop={true}
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 // dir='horiazontal'
//                 className="carousel-container"
//             >
//                     {
//                         cards.map(({imgSrc, title, description, hasButton, index}) => {
//                             return <SwiperSlide key = {title}>
//                                 <Card
//                                     hasButton={hasButton} 
//                                     imgSrc={imgSrc} 
//                                     description={description} 
//                                     title={title} 
//                                     index={index} 
//                                 />
//                             </SwiperSlide>
//                         })
//                     }
//             </Swiper>

//             <div className="buttons">BUTTONS</div>
//         </div>
//     )
// }