"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { i18n } from "../../../i18n.config";
import { useState } from "react";

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const router = useRouter()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    selectLanguage(locale);
    router.replace(segments.join("/"))
    return segments.join("/");
  };

  async function selectLanguage(locale: string) {
    let first = locale[0].toUpperCase();
    let second = locale[1];

    let formattedLang = first + second;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/selected/languages?Language=${formattedLang}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          credentials: "include",
        }
      );
      console.log(response);

      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ul className="flex gap-x-5">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <button
              onClick={() => redirectedPathName(locale)}
              className={`text-white ${
                pathName.includes(locale) && "border-b"
              }`}
            >
              {locale}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
