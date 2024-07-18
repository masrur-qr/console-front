import "./BriefText.css";

export default function BriefText({ lang }: any) {
  return (
    <section className="mt-[133px] mx-[30px] brief__text">
      <div className="wrapper">
        <h1 className="text-[84px] text-center brief-title">
          {lang.main_title}
        </h1>
        <div className="mt-[100px] texts-wrapper">
          <h4 className="font-light text-[28px] titles">{lang.question1}</h4>
          <p className="mt-[32px] text-[20px] subtitles font-light text-[#888888] text-justify">
            {lang.answer1}
          </p>
        </div>
        <div className="mt-[50px]">
          <h4 className="font-light text-[28px] titles">{lang.question2}</h4>
          <ul className="list-disc mt-[32px] text-[20px] subtitles font-light text-[#888888] pl-4">
            <li>{lang.answer2}</li>
            <li>{lang.answer3}</li>
            <li>{lang.answer4}</li>
          </ul>
        </div>
        <div className="mt-[50px]">
          <h4 className="font-light text-[28px] titles">{lang.question3} </h4>
          <p className="mt-[32px] text-[#888888] text-[20px] subtitles text-justify">{lang.answer5}</p>
        </div>
        <div className="mt-[50px]">
          <h4 className="font-light text-[28px] titles">{lang.question4}</h4>
          <p className="mt-[32px] text-[#888888] text-[20px] subtitles text-justify">{lang.answer6}</p>
          <p className="mt-[32px] text-[#888888] text-[20px] subtitles text-justify">
            {lang.answer7} <br />
            {lang.answer8}
          </p>
        </div>
      </div>
    </section>
  );
}
