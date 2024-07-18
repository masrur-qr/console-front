"use client";
import { Space_Mono, Source_Code_Pro } from "next/font/google";
import { useEffect, useState } from "react";

const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  //   weight: ["700", "400", "300", "200"],
});

// const space_mono = Space_Mono({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   //   weight: ["700", "400", "300", "200"],
// });

export default function AdminStatisticsSection() {
  const [data, setData] = useState<any>({});

  async function generalMetric() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/general/metrics`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          credentials: "include",
        }
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    generalMetric();
  }, []);
  return (
    <section className="flex-grow-[1]">
      <div className="border border-white rounded-xl px-[50px] py-[30px] flex items-start flex-wrap gap-5">
        <div
          className={`${space_mono.className} border border-white w-[360px] h-[270px] px-[30px] py-[20px] rounded-[20px]`}
        >
          <h4 className={`text-[20px] ${space_mono.className}`}>
            Просмотры сайт
          </h4>
          <h2 className="text-[100px] font-semibold text-center mt-[40px]">
            {data?.site_views}
          </h2>
        </div>
        <div
          className={`${space_mono.className} border border-white w-[360px] h-[270px] px-[30px] py-[20px] rounded-[20px]`}
        >
          <h4 className="text-[20px]">Изучение проектов</h4>
          <h2 className="text-[100px] font-semibold text-center mt-[40px]">
            {data?.project_views}
          </h2>
        </div>
        <div
          className={`${space_mono.className} border border-white w-[360px] h-[270px] px-[30px] py-[20px] rounded-[20px]`}
        >
          <h4 className="text-[20px]">Заказать проект</h4>
          <h2 className="text-[100px] font-semibold text-center mt-[40px]">
            {data?.projects_order}
          </h2>
        </div>
        <div
          className={`${space_mono.className} border border-white w-[360px] h-[270px] px-[30px] py-[20px] rounded-[20px]`}
        >
          <div>
            Переход на <br /> социальные страницы
          </div>
          <div className="flex items-start justify-between">
            <div>
              <p className={`text-[70px] ${space_mono.className}`}>
                {data?.social_media?.instagram}
              </p>
              <p className={`${space_mono.className}`}>Instagram</p>
            </div>
            <div>
              <p className={`text-[70px] ${space_mono.className}`}>
                {data?.social_media?.linkedin}
              </p>
              <p className={`${space_mono.className}`}>Linkedin</p>
            </div>
            <div>
              <p className={`text-[70px] ${space_mono.className}`}>
                {data?.social_media?.behance}
              </p>
              <p className={`${space_mono.className}`}>Behance</p>
            </div>
          </div>
        </div>
        <div
          className={`${space_mono.className} border border-white w-[360px] h-[270px] px-[30px] py-[20px] rounded-[20px]`}
        >
          <h4 className="text-[20px]">Язык</h4>
          <div className="flex items-start justify-center gap-5 mt-4">
            <div>
              <p className={`text-[70px] ${space_mono.className}`}>
                {data?.language?.russian}
              </p>
              <p className={`${space_mono.className}`}>Russain</p>
            </div>
            <div>
              <p className={`text-[70px] ${space_mono.className}`}>
                {data?.language?.english}
              </p>
              <p className={`${space_mono.className}`}>English</p>
            </div>
          </div>
        </div>
        {/* <div
          className={`${space_mono.className} border border-white w-[360px] h-[270px] px-[30px] py-[20px] rounded-[20px]`}
        >
          <h4 className="text-[20px]">Остановка клиента</h4>
          <h2 className="text-[100px] font-semibold text-center mt-[40px]">
            31
          </h2>
        </div> */}
      </div>
    </section>
  );
}
