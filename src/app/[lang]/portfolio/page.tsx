import Form from "@/components/Form/Form";
import ProjectsList from "@/components/ProjectsList/ProjectsList";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ProjectsMetrics from "@/components/ProjectsMetrics/ProjectsMetrics";
import Head from "next/head";
import { Metadata } from "next";

import "./portfolio.css";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

export const metadata: Metadata = {
  title: "Console | Portfolio",
  description: "Console Development is Web and Mobile Agency",
  assets: "../favicon.ico",
  icons: "../favicon.ico",
};

export default async function PortfolioPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { sections, page } = await getDictionary(lang);
  const { contact, projects } = sections;
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
      <div className="wrapper">
        <section className="pt-[150px] text-center mb-[100px] mx-[30px]">
          <h1 className="text-[84px] portfolio-title">{portfolio.title}</h1>
        </section>
        <ProjectsMetrics />
        <div className="wrapper">
          <CustomCursor />
          <ProjectsList
            projectsTranslation={projects}
            currentLang={lang}
            quantity={"all"}
            portfolio={portfolio}
          />
        </div>
        <Form lang={contact} />
      </div>
    </main>
  );
}
