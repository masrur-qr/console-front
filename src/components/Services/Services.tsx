import ServicesList from "../ServicesList/ServicesList";
import ServicesSlider from "../ServicesSlider/ServicesSlider";

import "./Services.css";

export const HighlightedText = ({ text, highlightWords }: any) => {
  const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");

  const parts = text.split(regex);

  // function breakAtWord(text: any, word: any) {
  //   const index = text.indexOf(word);
  //   if (index === -1) {
  //     return [text]; // Word not found, return the original text
  //   }
  //   return [text.slice(0, index), text.slice(index)];
  // }

  // const allText =
  //   "We help startups and large corporations create user-friendly and high-quality IT products.";
  // const breakWord = "corporations";

  // const [firstPart, secondPart] = breakAtWord(allText, breakWord);

  return (
    <p className="text-[#888888] text-[20px] text-center max-w-[900px] mb-[74px] font-light services-subtitle">
      {parts.map((part: any, index: any) =>
        highlightWords.some(
          (word: any) => word.toLowerCase() === part.toLowerCase()
        ) ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </p>
  );
};

export default function Services({
  servicesLang,
  subtitleLang,
  cards,
  button,
}: any) {
  const highlightWords = [
    "user-friendly",
    "high-quality",
    "удобные",
    "качественные",
  ];

  return (
    <section id="services_section" className="mx-[30px]">
      <div className="wrapper">
        <h1 className="text-center text-[84px] mt-[150px] mb-[75px] services-title">
          {servicesLang}
        </h1>
        <div className="flex justify-center items-center">
          <HighlightedText
            text={subtitleLang}
            highlightWords={highlightWords}
          />
        </div>
        <ServicesSlider cards={cards} />
        <section className="flex items-end justify-between gap-[15px] services__container">
          <ServicesList cards={cards} />
          <div className="services__link-container min-w-0">
            <a
              className="w-[335px] h-[52px] max-w-full flex items-center justify-center border border-white rounded-[10px] relative z-20 backdrop-blur-lg  duration-500"
              href={"#form-section"}
            >
              {button.button}
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
