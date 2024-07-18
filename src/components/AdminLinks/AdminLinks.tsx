"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLinks({lang}: any) {
  const pathname = usePathname();

  return (
    <nav>
      <menu className="flex flex-col justify-start items-start gap-y-10">
        <Link
          className={`${
            pathname.includes(`/${lang}/admin-statistics`) && "bg-white text-black"
          } border border-white rounded-xl w-[330px] h-[70px] flex items-center justify-center hover:bg-white hover:text-black`}
          href={"/en/admin-statistics"}
        >
          General statistics
        </Link>
        <Link
          className={`${
            pathname.includes(`/${lang}/admin-users`) && "bg-white text-black"
          } border border-white rounded-xl w-[330px] h-[70px] flex items-center justify-center hover:bg-white hover:text-black`}
          href={"/en/admin-users"}
        >
          Unit Statistics
        </Link>
        <Link
          className={`${
            pathname.includes(`/${lang}/create-project`) && "bg-white text-black"
          } border border-white rounded-xl w-[330px] h-[70px] flex items-center justify-center hover:bg-white hover:text-black`}
          href={"/en/create-project"}
        >
          Create Project
        </Link>
        <Link
          className={`${
            pathname.includes(`/${lang}/admin-briefs`) && "bg-white text-black"
          } border border-white rounded-xl w-[330px] h-[70px] flex items-center justify-center hover:bg-white hover:text-black`}
          href={"/en/admin-briefs"}
        >
          Briefs
        </Link>
        <Link
          className={`${
            pathname.includes(`/${lang}/admin-orders`) && "bg-white text-black"
          } border border-white rounded-xl w-[330px] h-[70px] flex items-center justify-center hover:bg-white hover:text-black`}
          href={"/en/admin-orders"}
        >
          Orders
        </Link>
        <Link
          className={`${
            pathname.includes(`/${lang}/admin-projects`) && "bg-white text-black"
          } border border-white rounded-xl w-[330px] h-[70px] flex items-center justify-center hover:bg-white hover:text-black`}
          href={"/en/admin-projects"}
        >
          All Projects
        </Link>
      </menu>
    </nav>
  );
}
