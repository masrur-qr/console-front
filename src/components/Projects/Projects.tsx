import ProjectsList from "../ProjectsList/ProjectsList";

import { Source_Code_Pro } from "next/font/google";
import Link from "next/link";
import "./Projects.css";
import CustomCursor from "../CustomCursor/CustomCursor";

const source_code_pro = Source_Code_Pro({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "400", "300", "200"],
});

export default function Projects({
  projectsLang,
  projectsTranslation,
  currentLang,
  quantity,
  portfolio,
}: any) {
  return (
    <section id="projects-section" className="mt-[100px] mx-[30px]">
      <div className="wrapper">
        <h1 className="text-center text-[84px] mb-[75px] project-section-title">
          {projectsLang}
        </h1>
        <div>
        {/* <CustomCursor /> */}
        <ProjectsList
          currentLang={currentLang}
          projectsTranslation={projectsTranslation}
          quantity={quantity}
          portfolio={portfolio}
        />
        </div>
        <div className="flex items-center justify-center">
          <Link
            className={`${source_code_pro.className} border border-white rounded-[10px] w-[335px] max-w-full h-[52px] flex items-center justify-center all_projects-link text-white duration-500`}
            href={"/en/portfolio"}
          >
            {projectsTranslation.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
