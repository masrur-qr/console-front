"use client";

import { FileREader } from "@/utils";
import { LegacyRef, RefObject, useRef, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

export default function ProjectForm({ lang }: any) {
  const router = useRouter();

  const [smallFile, setSmallFile] = useState<any>(null);
  const [mediumFile, setMediumFile] = useState<any>(null);
  const [largeFile, setLargeFile] = useState<any>(null);

  const [language, setLanguage] = useState("english");
  const [inputValues, setInputValues] = useState({
    russianProjectName: "",
    russianDescription: "",
    russianSphere: "",
    russianDuration: "",
    englishProjectName: "",
    englishDescription: "",
    englishSphere: "",
    englishDuration: "",
    link: "",
  });

  const [userChoice, setUserChoice] = useState("branding");

  const [loading, setLoading] = useState(false);

  const handleValueChange = (value: any) => {
    console.log("Selected value:", value);
    setUserChoice(value);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const handleInputChange = (e: any, lang: string) => {
    setInputValues({
      ...inputValues,
      [lang]: e.target.value,
    });
  };

  const handleSmallFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSmallFile(files[0]);
    }
  };

  const handleMediumFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      setMediumFile(files[0]);
    }
  };

  const handleLargeFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      setLargeFile(files[0]);
    }
  };

  const successToast = () => toast.success("Successfully created!");
  const errorToast = () => toast.error("Fill all fields");

  async function handleUploadProject() {
    setLoading(true);
    const images: any = {};

    if (smallFile && smallFile && smallFile) {
      let smallBanner = await FileREader(smallFile);
      let mediumBanner = await FileREader(mediumFile);
      let largeBanner = await FileREader(largeFile);
      images.smallBanner = smallBanner;
      images.mediumBanner = mediumBanner;
      images.largeBanner = largeBanner;

      const formData = new FormData();
      formData.append("small", smallFile);
      formData.append("medium", mediumFile);
      formData.append("large", largeFile);
    }

    const data = {
      russian: {
        project_name: inputValues.russianProjectName,
        description: inputValues.russianDescription,
        sphere: inputValues.russianSphere,
        duration: inputValues.russianDuration,
      },
      english: {
        project_name: inputValues.englishProjectName,
        description: inputValues.englishDescription,
        sphere: inputValues.englishSphere,
        duration: inputValues.englishDuration,
      },
      type: userChoice,
      link: inputValues.link,
      banner: {
        small: images.smallBanner,
        medium: images.mediumBanner,
        large: images.largeBanner,
      },
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/create/project`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          credentials: "include",
          body: JSON.stringify(data),
        }
      );

      if (response.status == 200) {
        successToast();
        setLoading(false);
        setTimeout(() => {
          router.replace(`/${lang}/admin-projects`);
        }, 3000);
      } else if (response.status == 400) {
        errorToast();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
      <section className="w-[1000px]">
        {language === "english" ? (
          <div className="border border-white rounded-xl px-[50px] py-[30px]">
            <div>
              <p className="mb-2">Project name</p>
              <div className="relative">
                <input
                  type="text"
                  id="project-name"
                  className="bg-black border border-[#fff] block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={inputValues.englishProjectName}
                  onChange={(e) => handleInputChange(e, "englishProjectName")}
                />
                <label
                  htmlFor="project-name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Project name
                </label>
              </div>
            </div>
            <div className="mt-[25px]">
              <p className="mb-2">Description</p>
              <div className="relative">
                <textarea
                  // type="text"
                  id="description"
                  className="bg-black border
              border-[#fff] block rounded-lg px-2.5 pb-2.5 pt-5 w-full h-[200px]
              text-sm appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={inputValues.englishDescription}
                  onChange={(e) => handleInputChange(e, "englishDescription")}
                ></textarea>
                <label
                  htmlFor="description"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Description
                </label>
              </div>
            </div>
            <div className="mt-[25px]">
              <p className="mb-2">Field</p>
              <div className="relative">
                <input
                  type="text"
                  id="field"
                  className="bg-black border border-[#fff] block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={inputValues.englishSphere}
                  onChange={(e) => handleInputChange(e, "englishSphere")}
                />
                <label
                  htmlFor="field"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Field
                </label>
              </div>
            </div>
            <div className="mt-[25px]">
              <p className="mb-2">Duration</p>
              <div className="relative">
                <input
                  type="text"
                  id="duration"
                  className="bg-black border border-[#fff] block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={inputValues.englishDuration}
                  onChange={(e) => handleInputChange(e, "englishDuration")}
                />
                <label
                  htmlFor="duration"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Duration (how long it take)
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="border border-white rounded-xl px-[50px] py-[30px]">
            <div>
              <p className="mb-2">Название проекта</p>
              <div className="relative">
                <input
                  type="text"
                  id="project-name"
                  className="bg-black border border-[#fff] block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={inputValues.russianProjectName}
                  onChange={(e) => handleInputChange(e, "russianProjectName")}
                />
                <label
                  htmlFor="project-name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Название проекта
                </label>
              </div>
            </div>
            <div className="mt-[25px]">
              <p className="mb-2">Описание</p>
              <div className="relative">
                <textarea
                  // type="text"
                  id="description"
                  className="bg-black border
                border-[#fff] block rounded-lg px-2.5 pb-2.5 pt-5 w-full h-[200px]
                text-sm appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={inputValues.russianDescription}
                  onChange={(e) => handleInputChange(e, "russianDescription")}
                ></textarea>
                <label
                  htmlFor="description"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Описание
                </label>
              </div>
            </div>
            <div className="mt-[25px]">
              <p className="mb-2">Сфера</p>
              <div className="relative">
                <input
                  type="text"
                  id="field"
                  className="bg-black border border-[#fff] block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={inputValues.russianSphere}
                  onChange={(e) => handleInputChange(e, "russianSphere")}
                />
                <label
                  htmlFor="field"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Сфера
                </label>
              </div>
            </div>
            <div className="mt-[25px]">
              <p className="mb-2">Продолжительность</p>
              <div className="relative">
                <input
                  type="text"
                  id="duration"
                  className="bg-black border border-[#fff] block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={inputValues.russianDuration}
                  onChange={(e) => handleInputChange(e, "russianDuration")}
                />
                <label
                  htmlFor="duration"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Продолжительность (сколько времени это займет)
                </label>
              </div>
            </div>
          </div>
        )}
        <div className="border border-white rounded-xl px-[50px] py-[30px] mt-[25px]">
          <div className="mb-5">
            <p className="mb-2">Type</p>
            <Select
              defaultValue="Branding"
              onValueChange={(value) => handleValueChange(value)}
            >
              <SelectTrigger className="w-[180px] bg-black text-white">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white">
                <SelectItem value="Website">Website</SelectItem>
                <SelectItem value="Branding">Branding</SelectItem>
              </SelectContent>
            </Select>
            {/* <div className="relative">
              <input
                type="text"
                id="link"
                className="bg-black border border-[#fff] block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                value={inputValues.type}
                onChange={(e) => handleInputChange(e, "type")}
              />
              <label
                htmlFor="type"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                type
              </label>
            </div> */}
          </div>
          <div>
            <p className="mb-2">Link</p>
            <div className="relative">
              <input
                type="text"
                id="link"
                className="bg-black border border-[#fff] block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                value={inputValues.link}
                onChange={(e) => handleInputChange(e, "link")}
              />
              <label
                htmlFor="link"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Link
              </label>
            </div>
          </div>
          <div className="mt-[25px] flex items-center">
            <div className="flex-grow">
              <p className="mb-2">Image 1 (100/100)</p>
              <input type="file" onChange={handleSmallFileChange} />
            </div>
            <div className="flex-grow">
              <p className="mb-2">Image 1 (100/100)</p>
              <input type="file" onChange={handleMediumFileChange} />
            </div>
            <div className="flex-grow">
              <p className="mb-2">Image 1 (100/100)</p>
              <input type="file" onChange={handleLargeFileChange} />
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={handleUploadProject}
              className="bg-[#d9d9d930] text-white px-[40px] py-[15px] rounded-md border border-white hover:bg-white hover:text-black"
            >
              Upload
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-start items-start gap-y-5 flex-grow">
        <button
          onClick={() => handleLanguageChange("english")}
          className={`${
            language == "english" && "bg-white text-black"
          } border rounded-xl border-white px-[60px] py-[15px]`}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange("russian")}
          className={`${
            language == "russian" && "bg-white text-black"
          } border rounded-xl border-white px-[60px] py-[15px]`}
        >
          Russian
        </button>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}
