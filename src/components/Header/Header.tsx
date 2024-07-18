"use client";
import Link from "next/link";
import Logo from "../Logo/Logo";

import { useAppContext } from "@/context";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Header({ header }: any) {
  const { isOpen, setIsOpen } = useAppContext();
  const menuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
      document.getElementById("content")?.classList.add(styles.blur);
    } else {
      setIsOpen(false);
      document.body.style.overflow = "auto";
      document.getElementById("content")?.classList.remove(styles.blur);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    document.getElementById("content")?.classList.remove(styles.blur);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setTimeout(() => {
        closeMenu();
      }, 100);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full max-w-full z-[999999] px-[30px]`}>
      <div className="wrapper flex items-center justify-between pt-[20px]">
        <Logo />
        <div className={`${styles.menuText} ml-5`} onClick={toggleMenu}>
          {header.menu}
        </div>
        {!pathname.includes("brief") ? (
          <a
            className={`${styles.startLink} relative z-[1001] px-[24px] py-[12px] rounded-[10px] border-[0.5px] border-white duration-500`}
            href={"#form-section"}
          >
            {header.link}
          </a>
        ) : (
          <></>
        )}
      </div>
      <motion.nav
        ref={menuRef}
        initial={{ height: 0, opacity: 1 }}
        animate={{ height: isOpen ? "330px" : 0, opacity: isOpen ? 1 : 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className={styles.nav}
      >
        <div className="flex items-center justify-between wrapper">
          <Logo />
          <div className={`${styles.menuText} ml-5`} onClick={toggleMenu}>
            {header.menu}
          </div>
          {!pathname.includes("brief") ? (
            <a
              className={`${styles.startLink} relative z-[1001] px-[24px] py-[12px] rounded-[10px] border-[0.5px] border-white duration-500`}
              href={"#form-section"}
            >
              {header.link}
            </a>
          ) : (
            <></>
          )}
        </div>
        <ul className={`flex items-start gap-10 ${styles.linksDivider}`}>
          <div className="text-right">
            <li>
              <Link href="/en" onClick={closeMenu}>
                {header.link1}
              </Link>
            </li>
            <li>
              <a href="#projects-section" onClick={closeMenu}>
                {header.link2}
              </a>
            </li>
            <li>
              <a href="#services_section" onClick={closeMenu}>
                {header.link3}
              </a>
            </li>
          </div>
          <div className="text-left">
            <li>
              <a href="#about-section" onClick={closeMenu}>
                {header.link4}
              </a>
            </li>
            <li>
              <Link href="#team-section" onClick={closeMenu}>
                {header.link5}
              </Link>
            </li>
            <li>
              <a href="#footer-section" onClick={closeMenu}>
                {header.link6}
              </a>
            </li>
          </div>
        </ul>
        <LanguageSwitcher />
        {/* <a
          className={styles.startLinkMenu}
          onClick={closeMenu}
          href="#form-section"
        >
          {header.link}
        </a> */}
        {/* <div className="mt-5 flex items-center gap-5">
          <p className="text-[20px]">en</p>
          <p className="text-[20px]">ru</p>
        </div> */}
      </motion.nav>
    </header>
  );
}
