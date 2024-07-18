import "./About.css";
import AboutCards from "../AboutCards/AboutCards";
import { HighlightedText } from "../Services/Services";

export default function About({ lang }: any) {
  const highlightWords = ["our clients", "succeed", "нашим клиентам", "процветать"];
  return (
    <section id="about-section" className="mx-[30px]">
      <div className="wrapper">
        <h1 className="text-center text-[84px] mt-[150px] mb-[75px] about-title">
          {lang.title}
        </h1>
        <div className="flex justify-center items-center">
          <HighlightedText
            text={lang.subtitle}
            highlightWords={highlightWords}
          />
        </div>
        {/* <p className="text-[#888888] text-center mb-[74px] font-light about-subtitle">
          {lang.subtitle}
        </p> */}
        <AboutCards cardsText={lang.cards} />
      </div>
    </section>
  );
}
