import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import MainBanner from "@/components/MainBanner/MainBanner";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Form from "@/components/Form/Form";
import Team from "@/components/Team/Team";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Console | Development Agency",
  description: "Console Development is Web and Mobile Agency",
  assets: "../favicon.ico",
  icons: "../favicon.ico",
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { mainBanner, titles, subtitles, sections, page } = await getDictionary(
    lang
  );
  const { about, team, contact, services, projects } = sections;
  const { cards } = services;
  const { portfolio } = page;

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
      <MainBanner mainBanner={mainBanner} />
      <div className="wrapper">
        <div className="border border-[#888888] h-[0.5px] mt-[78px]"></div>
      </div>
      <Projects
        projectsTranslation={projects}
        projectsLang={titles.projectsSections}
        currentLang={lang}
        portfolio={portfolio}
        quantity={"not-all"}
      />
      <Services
        servicesLang={titles.servicesSections}
        subtitleLang={subtitles.servicesSections}
        cards={cards}
        button={services}
      />
      <About lang={about} />
      <Team lang={team} />
      <Form lang={contact} />
    </main>
  );
}
