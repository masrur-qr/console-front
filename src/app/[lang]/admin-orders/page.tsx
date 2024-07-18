import AdminLinks from "@/components/AdminLinks/AdminLinks";
import AdminOrdersList from "@/components/AdminOrdersList/AdminOrdersList";
import Link from "next/link";
import { Locale } from "../../../../i18n.config";
import LogOutButton from "@/components/UI/LogOutButton/LogOutButton";

export default function AdminOrders({
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
          <AdminOrdersList />
        </div>
      </div>
    </main>
  );
}
