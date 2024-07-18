"use client";

import { useEffect, useState } from "react";

export default function AdminUsersTable() {
  const [data, setData] = useState<any>([]);

  async function unitMetric() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/unit/metrics`,
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
    unitMetric();
  }, []);
  return (
    <section className="flex-grow-[1] border border-white rounded-xl px-[50px] py-[30px]">
      <div>
        <div className="table_head flex items-start">
          <p className="border-t border-r border-l rounded-tl-[15px] w-[160px] h-[70px] font-semibold p-2">
            id
          </p>
          <p className="border-t border-r w-[160px] h-[70px] font-semibold p-2">
            Email
          </p>
          <p className="border-t border-r w-[160px] h-[70px] font-semibold p-2">
            Site view count{" "}
          </p>
          <p className="border-t border-r w-[160px] h-[70px] font-semibold p-2">
            Project order <br /> count
          </p>
          <p className="border-t border-r w-[160px] h-[70px] font-semibold p-2">
            Project view count{" "}
          </p>
          <p className="border-t border-r w-[160px] h-[70px] font-semibold p-2">
            Social media
          </p>
          <p className="border-t border-r rounded-tr-[15px] w-[160px] h-[70px] font-semibold p-2">
            Languages
          </p>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        {data.map((user: any) => {
          return (
            <div key={user?.Id} className="flex items-start">
              <p className="border-t border-r border-l w-[160px] h-[150px] p-2 text-[14px]">
                {user?.Id.slice(0, 15)}
              </p>
              <p className="border-t border-r w-[160px] h-[150px] p-2 text-[14px]">
                {user?.email == "" ? "No email yet" : user?.email}
              </p>
              <p className="border-t border-r w-[160px] h-[150px] p-2 text-[14px] flex items-center justify-center text-center">
                {user?.site_views?.length}
              </p>
              <p className="border-t border-r w-[160px] h-[150px] p-2 text-[14px] flex items-center justify-center text-center">
                {user?.project_order?.length}
              </p>
              <p className="border-t border-r w-[160px] h-[150px] p-2 text-[14px] flex items-center justify-center text-center">
                {user?.project_views?.length}
              </p>
              <p className="border-t border-r w-[160px] h-[150px] p-2 text-[14px]">
                <span className="inline-block border px-2 py-1 rounded-md mr-3">
                  Instagram
                </span>
                <span>{user?.social_media?.instagram}</span>
                <span className="inline-block border px-2 py-1 rounded-md mr-3 mt-3">
                  Behance
                </span>
                <span>{user?.social_media?.behance}</span>
                <span className="inline-block border px-2 py-1 rounded-md mr-3 mt-3">
                  Linkedin
                </span>
                <span>{user?.social_media?.linkedin}</span>
              </p>
              <p className="border-t border-r w-[160px] h-[150px] p-2 text-[14px]">
                <span className="inline-block border px-2 py-1 rounded-md mr-3">
                  English
                </span>
                <span>
                  {user?.language?.filter((lang: any) => lang == "En")?.length}
                </span>
                <span className="inline-block border px-2 py-1 rounded-md mr-3 mt-3">
                  Russia
                </span>
                <span>
                  {user?.language?.filter((lang: any) => lang == "Ru")?.length}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
