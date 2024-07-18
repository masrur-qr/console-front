"use client";

import { Brief } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminBriefEach() {
  const params = useParams();
  const [brief, setBrief] = useState<Brief | any>({});

  const [openIndex, setOpenIndex] = useState(1);

  async function getBrief() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/brief?OrderID=${params.id}`,
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

      setBrief(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBrief();
  }, []);

  const handleClick = (index: any) => {
    setOpenIndex(openIndex == index ? null : index);
  };

  return (
    <section className="flex-grow">
      <div className="border">
        <div className="flex items-center gap-8 py-5 px-5 border-b">
          <p>{brief?.company_name}</p>
          <p>{brief?.email}</p>
          <p>{brief?.website_link}</p>
        </div>
        <div className="pt-5 px-5 cursor-pointer select-none border-b" onClick={() => handleClick(1)}>
          <div className="flex items-center justify-between">
            <h3 className="text-[28px]">Цели проекта</h3>
            <button className="text-[22px]">{`>`}</button>
          </div>
          <div
            className={`mt-5 duration-700 overflow-y-hidden ${
              openIndex == 1 ? "h-[300px]" : "h-[0px]"
            }`}
          >
            {brief?.project_goals?.map((goal: any) => {
              return (
                <div
                  key={goal}
                  className="border border-[#888888] py-[15px] px-[20px] mb-4 rounded-lg"
                >
                  <p className="text-[#888888] text-[14px]">{goal?.question}</p>
                  <p className="">{goal?.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-5 px-5 cursor-pointer select-none border-b" onClick={() => handleClick(2)}>
          <div className="flex items-center justify-between">
            <h3 className="text-[28px]">Пользователи </h3>
            <button className="text-[22px]">{`>`}</button>
          </div>
          <div
            className={`mt-5 duration-700 overflow-y-hidden ${
              openIndex == 2 ? "h-[300px]" : "h-[0px]"
            }`}
          >
            {brief?.users?.map((goal: any) => {
              return (
                <div
                  key={goal}
                  className="border border-[#888888] py-[15px] px-[20px] mb-4 rounded-lg"
                >
                  <p className="text-[#888888] text-[14px]">{goal?.question}</p>
                  <p className="">{goal?.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-5 px-5 cursor-pointer select-none border-b" onClick={() => handleClick(3)}>
          <div className="flex items-center justify-between">
            <h3 className="text-[28px]">Функциональные требования </h3>
            <button className="text-[22px]">{`>`}</button>
          </div>
          <div
            className={`mt-5 duration-700 overflow-y-hidden ${
              openIndex == 3 ? "h-[300px]" : "h-[0px]"
            }`}
          >
            {brief?.functional_requirements?.map((goal: any) => {
              return (
                <div
                  key={goal}
                  className="border border-[#888888] py-[15px] px-[20px] mb-4 rounded-lg"
                >
                  <p className="text-[#888888] text-[14px]">{goal?.question}</p>
                  <p className="">{goal?.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-5 px-5 cursor-pointer select-none border-b" onClick={() => handleClick(4)}>
          <div className="flex items-center justify-between">
            <h3 className="text-[28px]">Дизайн и стиль</h3>
            <button className="text-[22px]">{`>`}</button>
          </div>
          <div
            className={`mt-5 duration-700 overflow-y-hidden ${
              openIndex == 4 ? "h-[300px]" : "h-[0px]"
            }`}
          >
            {brief?.design_style?.map((goal: any) => {
              return (
                <div
                  key={goal}
                  className="border border-[#888888] py-[15px] px-[20px] mb-4 rounded-lg"
                >
                  <p className="text-[#888888] text-[14px]">{goal?.question}</p>
                  <p className="">{goal?.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-5 px-5 cursor-pointer select-none border-b" onClick={() => handleClick(5)}>
          <div className="flex items-center justify-between">
            <h3 className="text-[28px]">Технические требования</h3>
            <button className="text-[22px]">{`>`}</button>
          </div>
          <div
            className={`mt-5 duration-700 overflow-y-hidden ${
              openIndex == 5 ? "h-[300px]" : "h-[0px]"
            }`}
          >
            {brief?.technical_requirements?.map((goal: any) => {
              return (
                <div
                  key={goal}
                  className="border border-[#888888] py-[15px] px-[20px] mb-4 rounded-lg"
                >
                  <p className="text-[#888888] text-[14px]">{goal?.question}</p>
                  <p className="">{goal?.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-5 px-5 cursor-pointer select-none border-b" onClick={() => handleClick(6)}>
          <div className="flex items-center justify-between">
            <h3 className="text-[28px]">Бюджет и сроки</h3>
            <button className="text-[22px]">{`>`}</button>
          </div>
          <div
            className={`mt-5 duration-700 overflow-y-hidden ${
              openIndex == 6 ? "h-[300px]" : "h-[0px]"
            }`}
          >
            {brief?.budget?.map((goal: any) => {
              return (
                <div
                  key={goal}
                  className="border border-[#888888] py-[15px] px-[20px] mb-4 rounded-lg"
                >
                  <p className="text-[#888888] text-[14px]">{goal?.question}</p>
                  <p className="">{goal?.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
