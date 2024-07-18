import AdminAllProjects from "@/components/AdminAllProjects/AdminAllProjects";
import AdminLinks from "@/components/AdminLinks/AdminLinks";
import Link from "next/link";
import { Locale } from "../../../../i18n.config";
import { Toaster } from "react-hot-toast";
import LogOutButton from "@/components/UI/LogOutButton/LogOutButton";

export default function AdminProjects({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
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
          <AdminAllProjects />
        </div>
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "green",
                color: "white",
              },
            },
            error: {
              style: {
                background: "red",
                color: "white",
              },
            },
          }}
        />
      </div>
    </main>
  );
}
