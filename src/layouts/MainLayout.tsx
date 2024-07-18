"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
  params,
  lang,
}: Readonly<{
  children: React.ReactNode;
  params: any;
  lang: any;
}>) {
  const pathname = usePathname();

  return (
    <>
      {pathname != `/${lang}/login` &&
        pathname != `/${lang}/forgot-password` &&
        pathname != `/${lang}/send-code` &&
        pathname != `/${lang}/admin-statistics` &&
        pathname != `/${lang}/admin-users` &&
        pathname != `/${lang}/create-project` &&
        pathname != `/${lang}/admin-projects` &&
        !pathname.includes(`/${lang}/admin-briefs`) &&
        !pathname.includes(`/${lang}/admin-orders`) &&
        pathname != `/${lang}/admin-orders` && <Header header={params} />}
      {/* {pathname == `/${lang}` || pathname == `/ru` && <Header header={params} />} */}
      {children}
      {/* {pathname === `/${lang}` || pathname == `/ru` && <Footer />} */}
      {pathname != `/${lang}/login` &&
        pathname != `/${lang}/forgot-password` &&
        pathname != `/${lang}/send-code` &&
        pathname != `/${lang}/admin-statistics` &&
        pathname != `/${lang}/admin-users` &&
        pathname != `/${lang}/create-project` &&
        pathname != `/${lang}/admin-projects` &&
        !pathname.includes(`/${lang}/admin-briefs`) &&
        !pathname.includes(`/${lang}/admin-orders`) &&
        pathname != `/${lang}/admin-orders` && <Footer />}
    </>
  );
}
