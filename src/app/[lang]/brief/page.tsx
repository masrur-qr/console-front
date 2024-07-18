import BriefForm from "@/components/BriefForm/BriefForm";
import BriefText from "@/components/BriefText/BriefText";
import Header from "@/components/Header/Header";
import Logo from "@/components/Logo/Logo";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Console | Development Agency",
  description: "Console Development is Web and Mobile Agency",
  assets: "../favicon.ico",
  icons: "../favicon.ico",
};

export default async function BriefPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const { brief } = page;
  return (
    <main>
      <Head>
        <title>Console Development</title>
        <meta
          name="description"
          content="Console Development is Web and Mobile Agency"
        />
        <meta
          name="keywords"
          content="web development, app development, front-end development, back-end development, console, itisconsole, programming, coding"
        />
        <meta name="author" content="Qurbonmamadov Masrur" />
        <meta property="og:title" content="Console Development" />
        <meta
          property="og:description"
          content="Console Development is Web and Mobile Agency"
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://itisconsole.com" />
        <meta name="twitter:title" content="Your Site Title" />
        <meta
          name="twitter:description"
          content="Console Development is Web and Mobile Agency"
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://itisconsole.com/en" />
        <link rel="icon" href="../favicon.ico" sizes="any" />;
      </Head>
      <BriefText lang={brief} />
      <BriefForm lang={brief} />
    </main>
  );
}
