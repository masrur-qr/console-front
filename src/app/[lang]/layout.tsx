import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import { AppWrapper } from "@/context";
import { Providers } from "@/providers";

import { Locale, i18n } from "../../../i18n.config";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getDictionary } from "@/lib/dictionary";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const { header } = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={montserrat.className}>
        {/* <Providers> */}
          <AppWrapper>
            {/* <Header header={header} /> */}
            <MainLayout lang={params.lang} params={header}>
              <div id="content">{children}</div>
            </MainLayout>
            {/* <Footer /> */}
          </AppWrapper>
        {/* </Providers> */}
      </body>
    </html>
  );
}
