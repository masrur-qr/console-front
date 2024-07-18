"use client";
import "./AboutCards.css";

import "animate.css";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutCards({ cardsText }: any) {
  return (
    <section className="grid grid-cols-2 gap-x-[15px] gap-y-[30px] about__cards overflow-hidden">
      <ScrollAnimation
        animateOnce={false}
        animateIn="fadeInLeft"
        className="w-[790px] max-w-full min-h-[165px] max-h-full rounded-[15px] border border-white p-5"
      >
        <h2 className="text-[42px] mb-[10px]">{cardsText.first_card.title}</h2>
        <p className="text-[15px] text-[#888]">
          {cardsText.first_card.subtitle}
        </p>
      </ScrollAnimation>
      <ScrollAnimation
        animateOnce={false}
        animateIn="fadeInRight"
        className="w-[790px] max-w-full min-h-[165px] max-h-full rounded-[15px] border border-white p-5"
      >
        <h2 className="text-[42px] mb-[10px]">{cardsText.second_card.title}</h2>
        <p className="text-[15px] text-[#888]">
          {cardsText.second_card.subtitle}
        </p>
      </ScrollAnimation>
      <ScrollAnimation
        animateOnce={false}
        animateIn="fadeInLeft"
        className="w-[790px] max-w-full min-h-[165px] max-h-full rounded-[15px] border border-white p-5"
      >
        <h2 className="text-[42px] mb-[10px]">{cardsText.third_card.title}</h2>
        <p className="text-[15px] text-[#888]">
          {cardsText.third_card.subtitle}
        </p>
      </ScrollAnimation>
      <ScrollAnimation
        animateOnce={false}
        animateIn="fadeInRight"
        className="w-[790px] max-w-full min-h-[165px] max-h-full rounded-[15px] border border-white p-5"
      >
        <h2 className="text-[42px] mb-[10px]">{cardsText.fourth_card.title}</h2>
        <p className="text-[15px] text-[#888]">
          {cardsText.fourth_card.subtitle}
        </p>
      </ScrollAnimation>
    </section>
  );
}
