"use client";
import { Order } from "@/types";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

export default function AdminOrderEach() {
  const [order, setOrder] = useState<any>({});
  const params = useParams();

  async function getProject() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/order?OrderID=${params.id}`,
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

      setOrder(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProject();
  }, []);
  return (
    <section className="flex-grow">
      <div className="border border-white rounded-xl px-[50px] py-[30px] mb-[50px]">
        <div>
          <div className="flex items-center gap-[60px]">
            <div className="flex-grow">
              <p>Имя:</p>
              <p className="px-[40px] py-[20px] border border-white mt-5 rounded-xl">
                {order?.name}
              </p>
            </div>
            <div className="flex-grow">
              <p>Email Address:</p>
              <p className="px-[40px] py-[20px] border border-white mt-5 rounded-xl">
                {order?.email}
              </p>
            </div>
          </div>
          <div className="mt-[30px]">
            <p>О проекте:</p>
            <p className="px-[40px] py-[20px] min-h-[150px] border border-white mt-5 rounded-xl">
              {order?.about}
            </p>
          </div>
          <div className="mt-[30px]">
            <p>Услуга: </p>
            <div className="flex items-center gap-5 px-[40px] py-[20px] border border-white mt-5 rounded-xl">
              {order?.services?.map((service: any) => {
                return <span key={service}>{service}</span>;
              })}
            </div>
          </div>
          <div className="mt-[30px]">
            <p>Бюджет: </p>
            <p className="px-[40px] py-[20px] border border-white mt-5 rounded-xl">
              до {order?.budget}
            </p>
          </div>
          <div className="mt-[30px]">
            <p>Ссылка: </p>
            <p className="px-[40px] py-[20px] border border-white mt-5 rounded-xl">
              {order?.link}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
