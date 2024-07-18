"use client";
import {
  Inter,
  Montserrat,
  Space_Mono,
  Source_Code_Pro,
} from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
const space_mono = Space_Mono({ subsets: ["latin"], weight: ["700", "400"] });
const source_code_pro = Source_Code_Pro({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "400", "300", "200"],
});

import "./MainBanner.css";

import GIF from "../../../public/gif/animation.gif";
import Image from "next/image";
import { useEffect } from "react";

export default function MainBanner({ mainBanner }: any) {
  async function siteViews() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/site/views`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          credentials: "include",
        }
      );
      console.log(response);

      const jsonData = await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    siteViews();
  }, []);

  return (
    <section id="main-banner" className="mx-[30px]">
      <div className="wrapper text-center">
        {/* <h1 className="mt-[70px] flex items-center text-center justify-center mr-2">
          <Image className="w-[800px]" src={GIF} alt="GIF" />
        </h1> */}
        <div className="animation-wrapper pt-[50px]">
          <div className="flex items-center justify-center">
            <div className="left-bracket bracket"></div>
            <h1
              className={`${space_mono.className} animation-text flex items-center text-center justify-center`}
            >
              console
            </h1>
            <div className="right-bracket bracket"></div>
          </div>
        </div>
        <div>
          <p className="font-thin text-[40px] main-description">
            {mainBanner.mainText}
          </p>
          <div className="flex items-center justify-center gap-[20px] my-[24px] banner-categories-container">
            <p
              className={`border border-white rounded-[10px] px-[22px] py-[6px] text-[18px] ${source_code_pro.className}`}
            >
              {mainBanner.category1}
            </p>
            <p
              className={`border border-white rounded-[10px] px-[22px] py-[6px] text-[18px] ${source_code_pro.className}`}
            >
              {mainBanner.category2}
            </p>
            <p
              className={`border border-white rounded-[10px] px-[22px] py-[6px] text-[18px] ${source_code_pro.className}`}
            >
              {mainBanner.category3}
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-[14px] hashtags-container">
            <p className="text-[#888888] text-[18px]">{mainBanner.hashtag1}</p>
            <p className="text-[#888888] text-[18px]">{mainBanner.hashtag2}</p>
            <p className="text-[#888888] text-[18px]">{mainBanner.hashtag3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
