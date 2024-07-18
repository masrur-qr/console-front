import Project1Pic1 from "../../public/projects/image 1.png";
import Project1Pic2 from "../../public/projects/Frame 16.png";
import Project1Pic3 from "../../public/projects/Frame 24.png";

import Project2Pic1 from "../../public/projects/Frame 17.png";
import Project2Pic2 from "../../public/projects/Frame 26.png";
import Project2Pic3 from "../../public/projects/Frame 27.png";

import Project3Pic1 from "../../public/projects/Frame 22.png";
import Project3Pic2 from "../../public/projects/Frame 29.png";
import Project3Pic3 from "../../public/projects/Frame 30.png";

export interface IProject {
  id: string;
  name: string;
  type: string;
  sphere: string;
  project_time: string;
  big_picture: any;
  medium_picture: any;
  small_picture: any;
}

export const projects: IProject[] = [
  {
    id: "1",
    name: "Murgab Hunting",
    type: "Разработка веб-платформы о туризме и охоте.",
    sphere: "Туризм",
    project_time: "3 месяца",
    big_picture: Project1Pic1,
    medium_picture: Project1Pic2,
    small_picture: Project1Pic3,
  },
  {
    id: "2",
    name: "Khorog City",
    type: "Разработка сайта для жителей и гостей города.",
    sphere: "Урбанистика и туризм ",
    project_time: "3 месяца",
    big_picture: Project2Pic1,
    medium_picture: Project2Pic2,
    small_picture: Project2Pic3,
  },
  {
    id: "3",
    name: "Murgab Hunting",
    type: "Разработка веб-платформы о туризме и охоте.",
    sphere: "Туризм",
    project_time: "3 месяца",
    big_picture: Project3Pic1,
    medium_picture: Project3Pic2,
    small_picture: Project3Pic3,
  },
];
