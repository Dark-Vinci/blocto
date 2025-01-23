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


export function Slider(): JSX.Element {
  return (
    <div className={style.the_container}>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
                nextEl: "#custom-next",
                prevEl: "#custom-prev"
            }}
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
            <div className={style.holder}>
                <button id="custom-prev" className="custom-nav prev">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <button id="custom-next" className="custom-nav next">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
        </div>
    </div>
  );
};
