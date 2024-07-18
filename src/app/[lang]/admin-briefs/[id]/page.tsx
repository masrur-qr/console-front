import AdminBriefEach from "@/components/AdminBriefEach/AdminBriefEach";
import AdminLinks from "@/components/AdminLinks/AdminLinks";
import Link from "next/link";
import { Locale } from "../../../../../i18n.config";
import LogOutButton from "@/components/UI/LogOutButton/LogOutButton";

export default function EachBrief({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main className="mx-[30px]">
      <div className="wrapper">
        <div className="flex items-center justify-between pt-10">
          <p></p>
          <p>Admin</p>
          <LogOutButton />
        </div>
        <div className="mt-[100px] flex items-start gap-10">
          <AdminLinks lang={lang} />
          <AdminBriefEach />
        </div>
      </div>
    </main>
  );
}
