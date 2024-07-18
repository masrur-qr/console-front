"use client";

import { Brief } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BriefsList() {
  const [data, setData] = useState<Brief[]>([]);

  async function getBriefs() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/briefs`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
          credentials: "include",
        }
      );

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBrief(id: string | undefined) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/delete/brief?BriefId=${id}`,
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
        getBriefs()
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBriefs();
  }, []);
  return (
    <section className="flex-grow">
      {data != null ? (
        data.map((brief: Brief) => {
          return (
            <div
              key={brief.Id}
              className="border border-white rounded-xl px-[50px] py-[30px] mb-5"
            >
              <div className="border border-white px-[40px] py-[24px] flex items-center justify-between mb-10">
                <Link
                  href={{
                    pathname: `/en/admin-briefs/${brief.Id}`,
                  }}
                  className="flex items-center gap-10"
                >
                  <p className="border-r pr-5 w-[150px]">
                    {brief.company_name}
                  </p>
                  <p className="border-r pr-5 w-[150px]">
                    {brief.website_link}
                  </p>
                  <p>{brief.email}</p>
                </Link>
                <button onClick={() => deleteBrief(brief.Id)}>Delete</button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No briefs yet</p>
      )}
    </section>
  );
}
