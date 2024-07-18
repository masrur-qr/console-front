"use client";

import { useEffect, useState } from "react";

import Image1 from "../../../public/projects/Frame 16.png";
import Image2 from "../../../public/projects/Frame 17.png";
import Image3 from "../../../public/projects/Frame 22.png";
import Image from "next/image";
import { Project } from "@/types";

export default function AdminAllProjects() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Project[]>([]);
  const [openIndex, setOpenIndex] = useState(null);

  async function getProjects() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/projects`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
          credentials: "include",
        }
      );
      console.log(response);

      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProject(id: string | undefined) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/delete/project?ProjectId=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "DELETE",
          credentials: "include",
        }
      );

      const jsonData = await response.json();

      if (response.status == 200) {
        getProjects();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  const handleClick = (index: any) => {
    setOpenIndex(openIndex == index ? null : index);
  };

  return (
    <section className="flex-grow">
      {data != null ? (
        data.map((project: Project, index: any) => {
          return (
            <div
              key={project.Id}
              onClick={() => handleClick(index)}
              className={`${
                openIndex == index ? "h-[650px]" : "h-[90px]"
              } border border-white rounded-xl px-[50px] py-[30px] duration-500 overflow-hidden cursor-pointer mb-5`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-[20px]">
                    <p className="max-w-[250px]">
                      {project?.english?.project_name}
                    </p>
                    <p
                      className={`border-l pl-5 ${
                        openIndex == index ? "line-clamp-none" : "line-clamp-2"
                      }`}
                    >
                      {project?.english?.description}
                    </p>
                  </div>
                  <button className="text-2xl">{isOpen ? `^` : `>`}</button>
                </div>
                <div className="mt-12">
                  <div className="flex items-center gap-[40px]">
                    <p className="flex-grow border px-[40px] py-[20px] text-[17px] rounded-[10px]">
                      {project?.english?.sphere}
                    </p>
                    <p className="flex-grow border px-[40px] py-[20px] text-[17px] rounded-[10px]">
                      {project?.english?.duration}
                    </p>
                  </div>
                  <div className="mt-5 flex items-end flex-wrap gap-5">
                    <img
                      className="w-[250px] h-[250px] max-w-full object-cover border border-white rounded-[10px]"
                      src={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.large}`}
                      alt="Image 1"
                    />
                    <img
                      className="w-[250px] h-[250px] max-w-full object-cover border border-white rounded-[10px]"
                      src={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.medium}`}
                      alt="Image 1"
                    />
                    <img
                      className="w-[250px] h-[250px] max-w-full object-cover border border-white rounded-[10px]"
                      src={`${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/static?path=${project?.banner?.small}`}
                      alt="Image 1"
                    />
                    <button
                      onClick={() => deleteProject(project?.Id)}
                      className="w-[150px] h-[60px] flex items-center justify-center bg-white text-black border border-white rounded-[10px] hover:bg-black hover:text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Cannot find any projects</p>
      )}
    </section>
  );
}
