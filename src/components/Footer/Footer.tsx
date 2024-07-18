"use client";

import Image from "next/image";
import Instagram from "../../../public/social/Vector (1).svg";
import Behance from "../../../public/social/Vector (2).svg";
import LinkedIn from "../../../public/social/Vector (3).svg";

import Logo from "../../../public/logo.svg";
import Link from "next/link";
// import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import "./Footer.css"

export default function Footer() {
  const router = useRouter()
  
  async function socialMediaMetric(social: string, link: string) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/selected/social/media?Type=${social}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          credentials: "include",
        }
      );

      // const jsonData = await response.json();
      router.replace(link)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <footer id="footer-section" className="mt-[150px] mx-[30px]">
      <div className="wrapper">
        <div className="flex items-center justify-center gap-[90px]">
          <button
            onClick={() =>
              socialMediaMetric(
                "instagram",
                "https://www.instagram.com/console.development/"
              )
            }
          >
            <Image src={Instagram} alt="Instagram" />
          </button>
          <button
            onClick={() =>
              socialMediaMetric(
                "behance",
                "https://www.behance.net/consoleagency"
              )
            }
          >
            <Image src={Behance} alt="Behance" />
          </button>
          <button
            onClick={() =>
              socialMediaMetric(
                "linkedin",
                "https://www.linkedin.com/company/console-development/"
              )
            }
          >
            <Image src={LinkedIn} alt="LinkedIn" />
          </button>
        </div>
        <div className="flex items-center justify-between footer-container-2 mt-[100px] mb-[50px] gap-[50px]">
          <div className="flex items-center flex-wrap footer-logo gap-[40px]">
            <Image src={Logo} alt="Logo" />
            <p className="font-thin">© All Rights Reserved.</p>
          </div>
          <Link className="mr-[280px]" href={"hi@itisconsole.com"}>
            hi@itisconsole.com
          </Link>
          <p>© 2024</p>
        </div>
      </div>
    </footer>
  );
}
