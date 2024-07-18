"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Team.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import Team1 from "../../../public/team/Farida_photo (1).png";
import Team2 from "../../../public/team/Masrur_photo (1).png";
import Team3 from "../../../public/team/Jahongir_photo.png";
import Team4 from "../../../public/team/Hisom_photo (1).png";
import Team5 from "../../../public/team/khush.png";

import ArrowRight from "../../../public/team/Arrows (1).png";
import ArrowLeft from "../../../public/team/Arrows.png";

import Shadow from "../../../public/Shadow.png";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

export default function Team({ lang }: any) {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const theSlides = useMemo(
    () => [Team1, Team2, Team3, Team4, Team2, Team3],
    []
  );

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <section className="overflow-x-hidden mx-[30px]" id="team-section">
      <div className="wrapper">
        <h1 className="text-center text-[84px] mt-[200px] mb-[75px] team-title">
          {lang.title}
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-[#888888] text-[20px] text-center w-[900px] mb-[40px] font-light team-subtitle">
            {lang.subtitle}
          </p>
        </div>
        <div className="relative">
          <Image
            className="custom-shadow custom-shadow-left pointer-events-none select-none absolute top-[50%] left-[-50px] -translate-y-[50%] z-30"
            src={Shadow}
            alt="Shadow"
          />
          <button
            className="absolute top-[50%] left-0 arrow-left -translate-y-[50%] z-40"
            onClick={handlePrevious}
          >
            <Image className="custom-arrow" src={ArrowLeft} alt="ArrowLeft" />
          </button>
          <Swiper
            initialSlide={1}
            slidesPerView={"auto"}
            onSwiper={setSwiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden bg-black">
                <Image
                  src={Team2}
                  alt="Team1"
                  className="w-full h-full object-cover rounded-[21px] border-[0.5px] border-white"
                />
                <p className="absolute left-[50%] -translate-x-[50%] bottom-[60px] text-[43px] w-full text-center">
                  {lang.team_members.masrur.name}
                </p>
                <p className="absolute left-[50%] -translate-x-[50%] bottom-[26px] text-[26px] font-light text-[#888] w-full text-center">
                  {lang.team_members.masrur.proffesion}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden bg-black">
                <Image
                  src={Team1}
                  alt="Team1"
                  className="w-full h-full object-cover rounded-[21px] border-[0.5px] border-white"
                />
                <p className="absolute left-[50%] -translate-x-[50%] bottom-[60px] text-[43px] w-full text-center">
                  {lang.team_members.farida.name}
                </p>
                <p className="absolute left-[50%] -translate-x-[50%] bottom-[26px] text-[26px] font-light text-[#888] w-full text-center">
                  {lang.team_members.farida.proffesion}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden bg-black">
                <Image
                  src={Team3}
                  alt="Team1"
                  className="w-full h-full object-cover rounded-[21px] border-[0.5px] border-white"
                />
                <p className="absolute left-[50%] -translate-x-[50%] bottom-[60px] text-[43px] w-full text-center">
                  {lang.team_members.jahongir.name}
                </p>
                <p className="absolute left-[50%] -translate-x-[50%] bottom-[26px] text-[26px] font-light text-[#888] w-full text-center">
                  {lang.team_members.jahongir.proffesion}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden bg-black">
                <Image
                  src={Team5}
                  alt="Team1"
                  className="w-full h-full object-cover rounded-[21px] border-[0.5px] border-white"
                />
                <p className="absolute left-[50%] -translate-x-[50%] bottom-[60px] text-[43px] w-full text-center">
                  {lang.team_members.khushnud.name}
                </p>
                <p className="absolute left-[50%] -translate-x-[50%] bottom-[26px] text-[26px] font-light text-[#888] w-full text-center">
                  {lang.team_members.khushnud.proffesion}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden bg-black">
                <Image
                  src={Team4}
                  alt="Team1"
                  className="w-full h-full object-cover rounded-[21px] border-[0.5px] border-white"
                />
                <p className="absolute left-[50%] -translate-x-[50%] bottom-[60px] text-[43px] w-full text-center">
                  {lang.team_members.hisom.name}
                </p>
                <p className="absolute left-[50%] -translate-x-[50%] bottom-[26px] text-[26px] font-light text-[#888] w-full text-center">
                  {lang.team_members.hisom.proffesion}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <button
            className="absolute z-40 right-0 top-[50%] arrow-right -translate-y-[50%]"
            onClick={handleNext}
          >
            <Image className="custom-arrow" src={ArrowRight} alt="ArrowRight" />
          </button>
          <Image
            className="custom-shadow custom-shadow-right pointer-events-none select-none absolute z-30 right-[-50px] top-[50%] -translate-y-[50%] rotate-180"
            src={Shadow}
            alt="Shadow"
          />
        </div>
      </div>
    </section>
  );
}
