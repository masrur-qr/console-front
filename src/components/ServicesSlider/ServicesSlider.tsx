"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ServicesSlider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useState } from "react";
import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "400", "300", "200"],
});

export default function ServicesSlider({ cards }: any) {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  return (
    <section id="services_section-slider" className="overflow-hidden">
      <Swiper
        // centeredSlidesBounds={true}
        // spaceBetween={10}
        initialSlide={1}
        slidesPerView={"auto"}
        slidesPerGroup={1}
        onSwiper={setSwiperRef}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]">
            <h3
              className={`${source_code_pro.className} text-[24px] mb-[24px]`}
            >
              {cards.first_card.name}
            </h3>
            <div>
              <p className="text-[#888888] text-[15px]">
                {cards.first_card.title1}
              </p>
              <p>{cards.first_card.answer1} 1000$</p>
            </div>
            <div className="mt-[15px]">
              <p className="text-[#888888] text-[15px]">
                {cards.first_card.title2}
              </p>
              <p>{cards.first_card.answer2}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]">
            <h3
              className={`${source_code_pro.className} text-[24px] mb-[24px]`}
            >
              {cards.second_card.name}
            </h3>
            <div>
              <p className="text-[#888888] text-[15px]">
                {cards.second_card.title1}
              </p>
              <p>{cards.second_card.answer1} 1000$</p>
            </div>
            <div className="mt-[15px]">
              <p className="text-[#888888] text-[15px]">
                {cards.second_card.title2}
              </p>
              <p>{cards.second_card.answer2}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]">
            <h3
              className={`${source_code_pro.className} text-[24px] mb-[24px]`}
            >
              {cards.third_card.name}
            </h3>
            <div>
              <p className="text-[#888888] text-[15px]">
                {cards.third_card.title1}
              </p>
              <p>{cards.third_card.answer1} 1000$</p>
            </div>
            <div className="mt-[15px]">
              <p className="text-[#888888] text-[15px]">
                {cards.third_card.title2}
              </p>
              <p>{cards.third_card.answer2}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]">
            <h3
              className={`${source_code_pro.className} text-[24px] mb-[24px]`}
            >
              {cards.fourth_card.name}
            </h3>
            <div>
              <p className="text-[#888888] text-[15px]">
                {cards.fourth_card.title1}
              </p>
              <p>{cards.fourth_card.answer1} 1000$</p>
            </div>
            <div className="mt-[15px]">
              <p className="text-[#888888] text-[15px]">
                {cards.fourth_card.title2}
              </p>
              <p>{cards.fourth_card.answer2}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]">
            <h3
              className={`${source_code_pro.className} text-[24px] mb-[24px]`}
            >
              {cards.fifth_card.name}
            </h3>
            <div>
              <p className="text-[#888888] text-[15px]">
                {cards.fifth_card.answer1}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
