"use client";
import AdminLinks from "@/components/AdminLinks/AdminLinks";
import ProjectForm from "@/components/ProjectForm/ProjectForm";
import Link from "next/link";
import { useState } from "react";
import { Locale } from "../../../../i18n.config";
import LogOutButton from "@/components/UI/LogOutButton/LogOutButton";

export default function CreateProject({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const [isTranslated, setIsTranslated] = useState(false);
  return (
    <main>
      <div className="wrapper">
        <div className="flex items-center justify-between pt-10">
          <p></p>
          <p>Admin</p>
          <LogOutButton />
        </div>
        <div className="mt-[100px] flex items-start gap-10">
          <AdminLinks lang={lang} />
          <ProjectForm
            lang={lang}
            // isTranslated={isTranslated}
            // setIsTranslated={setIsTranslated}
          />
        </div>
      </div>
    </main>
  );
}
