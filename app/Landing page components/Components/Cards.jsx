"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles/style.css';
import { FaCalendarDay, FaGear } from 'react-icons/fa6';
import { EffectCards } from 'swiper/modules';
import WeatherCard from './sub/WeatherCard';

const cardData = [
    { locationInfo: "Gaza, Palestine", imgSrc: "https://weatherwise.sirv.com/Images/Landing%20Page%20cites/gaza.jpg", status: 2, type: 0 },
    { locationInfo: "Bueno Aires, Argentina", imgSrc: "https://weatherwise.sirv.com/Images/Landing%20Page%20cites/9067093.jpg", status: 3, type: 1 },
    { locationInfo: "Abuja, Nigeria", imgSrc: "https://weatherwise.sirv.com/Images/Landing%20Page%20cites/9ja.jpg", status: 3, type: 2 },
    { locationInfo: "London, Unite Kingdom", imgSrc: "https://weatherwise.sirv.com/Images/Landing%20Page%20cites/lnd.jpg", status: 1, type: 1 },
    { locationInfo: "New York, United States", imgSrc: "https://weatherwise.sirv.com/Images/Landing%20Page%20cites/ny.jpg", status: 0, type: 0 },
]

export default function Cards() {
    return (
        <section className="flex-1 min-w-[10rem] flex flex-col pl-4 h-full">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper w-full h-full grid place-items-center"
            >
                {cardData.map((card) => (
                    <SwiperSlide key={card.locationInfo} className={`rounded-2xl backdrop-blur-md dark:bg-white/5 bg-white/25 border-2 dark:border-white/50 border-themeMain/50 max-w-[90%]`}>
                        <WeatherCard
                            locationInfo={card.locationInfo}
                            imgSrc={card.imgSrc}
                            status={card.status}
                        />
                        {card.locationInfo}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}