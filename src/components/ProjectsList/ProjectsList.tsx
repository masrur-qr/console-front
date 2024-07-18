"use client";
import Image from "next/image";
import "./ProjectsList.css";

import { Source_Code_Pro } from "next/font/google";
import { Project } from "@/types";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const source_code_pro = Source_Code_Pro({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "400", "300", "200"],
});

import "animate.css";

import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function ProjectsList({
  projectsTranslation,
  currentLang,
  quantity,
  portfolio,
}: any) {
  // const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   const cursor: any = document.querySelector(".cursor");

  //   const handleMouseMove = (e: MouseEvent) => {
  //     cursor.style.left = `${e.pageX}px`;
  //     cursor.style.top = `${e.pageY}px`;
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  const [data, setData] = useState([]);
  const [category, setCategory] = useState("ALL");

  const pathname = usePathname();

  const handleCategory = (incoming: string) => {
    setCategory(incoming);
  };

  const getProjects = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/projects`,
        { cache: "no-cache" }
      );
      const data = await response.json();
      console.log(data);

      setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {/* <div className={`cursor ${isHovered ? "hover" : ""}`}>view portfolio</div> */}
      {pathname.includes("portfolio") && (
        <div className="mt-10 mb-[100px] mx-[30px] flex items-center justify-center gap-12 filter-wrapper">
          <button
            onClick={() => handleCategory("ALL")}
            className={`${
              category == "ALL" && "bg-white text-black"
            } text-[20px] border border-white w-[215px] h-[50px] flex items-center justify-center rounded-[10px] hover:bg-white hover:text-black duration-700`}
          >
            {portfolio.card2}
          </button>
          <button
            onClick={() => handleCategory("Website")}
            className={`${
              category == "Website" && "bg-white text-black"
            } text-[20px] border border-white w-[215px] h-[50px] flex items-center justify-center rounded-[10px] hover:bg-white hover:text-black duration-700`}
          >
            {portfolio.card1}
          </button>
          <button
            onClick={() => handleCategory("branding")}
            className={`${
              category == "branding" && "bg-white text-black"
            } text-[20px] border border-white w-[215px] h-[50px] flex items-center justify-center rounded-[10px] hover:bg-white hover:text-black duration-700`}
          >
            Branding
          </button>
        </div>
      )}
      <section className="projects__list-container overflow-hidden">
        {quantity == "all" &&
          data != null &&
          data
            ?.filter((item: any) => {
              if (category == "ALL") {
                return data;
              }

              return item?.type == category;
            })
            ?.map((project: Project) => {
              return (
                <div
                  key={project?.Id}
                  className="flex items-start justify-between gap-5 mb-[150px] project__list-item"
                  // onMouseEnter={() => setIsHovered(true)}
                  // onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    // animateOnce={true}
                    // animateIn="fadeInLeft"
                    className="relative w-[688px] h-[600px] max-w-full max-h-full big__list-item"
                  >
                    <img
                      className="rounded-[20px] border border-white w-full h-auto max-w-full max-h-full top-0 right-0 left-0 bottom-0"
                      src={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.large}`}
                      alt={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.large}`}
                    />
                  </div>
                  <div
                    // animateOnce={true}
                    // animateIn="fadeInUp"
                    className="relative w-[450px] h-[427px] max-w-full max-h-full medium__list-item"
                  >
                    <img
                      className="rounded-[20px] border border-white w-full h-auto max-w-full max-h-full top-0 right-0 left-0 bottom-0"
                      src={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.medium}`}
                      alt={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.medium}`}
                    />
                  </div>
                  <div
                    // animateOnce={true}
                    // animateIn="fadeInRight"
                    className="relative w-[400px] min-h-[400px] max-h-full max-w-full small__list-item"
                  >
                    <div className="min-w-full project-info">
                      <h4 className="text-[32px] max-w-full w-full project-title">
                        {currentLang == "en"
                          ? project?.english?.project_name
                          : project?.russian?.project_name}
                      </h4>
                      <p className="text-[18px] mt-[15px] line-clamp-2 max-w-full w-full project-subtitle">
                        {currentLang == "en"
                          ? project?.english?.description
                          : project?.russian?.description}
                      </p>
                      <div className="mt-[15px] max-w-full w-full">
                        <p className="text-[18px] text-[#888888] max-w-full w-full">
                          {currentLang == "en" ? "Sphere:" : "Сфера:"}
                        </p>
                        <p className="text-[18px] max-w-full w-full project-field">
                          {currentLang == "en"
                            ? project?.english?.sphere
                            : project?.russian?.sphere}
                        </p>
                      </div>
                      <div className="mt-[15px] max-w-full w-full">
                        <p className="text-[#888888] text-[18px]">
                          {currentLang == "en"
                            ? "Project duration:"
                            : "Длительность проекта:"}
                        </p>
                        <p className="text-[18px] max-w-full w-full project-duration">
                          {currentLang == "en"
                            ? project?.english?.duration
                            : project?.russian?.duration}
                        </p>
                      </div>
                    </div>
                    <div className="mt-[15px] relative w-[100%] h-[336px] max-w-full max-h-full small-image-container">
                      <img
                        className="rounded-[20px] border border-white w-full h-auto max-w-full max-h-full top-0 right-0 left-0 bottom-0"
                        src={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.small}`}
                        alt={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.small}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        {quantity == "not-all" &&
          data != null &&
          data?.slice(-3)?.map((project: Project) => {
            return (
              <a
                key={project?.Id}
                className="flex items-start justify-between gap-5 mb-[150px] project__list-item"
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
                href={`https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  // animateOnce={true}
                  // animateIn="fadeInLeft"
                  className="relative w-[688px] h-[600px] max-w-full max-h-full big__list-item"
                >
                  <img
                    className="rounded-[20px] border border-white w-full h-auto max-w-full max-h-full top-0 right-0 left-0 bottom-0"
                    src={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.large}`}
                    alt={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.large}`}
                  />
                </div>
                <div
                  // animateOnce={true}
                  // animateIn="fadeInUp"
                  className="relative w-[450px] h-[427px] max-w-full max-h-full medium__list-item"
                >
                  <img
                    className="rounded-[20px] border border-white w-full h-auto max-w-full max-h-full top-0 right-0 left-0 bottom-0"
                    src={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.medium}`}
                    alt={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.medium}`}
                  />
                </div>
                <div
                  // animateOnce={true}
                  // animateIn="fadeInRight"
                  className="relative w-[400px] min-h-[400px] max-h-full max-w-full small__list-item"
                >
                  <div className="min-w-full project-info">
                    <h4 className="text-[32px] max-w-full w-full project-title">
                      {currentLang == "en"
                        ? project?.english?.project_name
                        : project?.russian?.project_name}
                    </h4>
                    <p className="text-[18px] mt-[15px] line-clamp-2 max-w-full w-full project-subtitle">
                      {currentLang == "en"
                        ? project?.english?.description
                        : project?.russian?.description}
                    </p>
                    <div className="mt-[15px] max-w-full w-full">
                      <p className="text-[18px] text-[#888888] max-w-full w-full">
                        {currentLang == "en" ? "Sphere:" : "Сфера:"}
                      </p>
                      <p className="text-[18px] max-w-full w-full project-field">
                        {currentLang == "en"
                          ? project?.english?.sphere
                          : project?.russian?.sphere}
                      </p>
                    </div>
                    <div className="mt-[15px] max-w-full w-full">
                      <p className="text-[#888888] text-[18px]">
                        {currentLang == "en"
                          ? "Project duration:"
                          : "Длительность проекта:"}
                      </p>
                      <p className="text-[18px] max-w-full w-full project-duration">
                        {currentLang == "en"
                          ? project?.english?.duration
                          : project?.russian?.duration}
                      </p>
                    </div>
                  </div>
                  <div className="mt-[15px] relative w-[100%] h-[336px] max-w-full max-h-full small-image-container">
                    <img
                      className="rounded-[20px] border border-white w-full h-auto max-w-full max-h-full top-0 right-0 left-0 bottom-0"
                      src={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.small}`}
                      alt={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.small}`}
                    />
                  </div>
                </div>
              </a>
            );
          })}
        {data == null && <p>Cannot find any projects</p>}
      </section>
    </>
  );
}
