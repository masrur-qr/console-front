import FormContainer from "../FormContainer/FormContainer";
import { HighlightedText } from "../Services/Services";
import "./Form.css";

export default function Form({ lang }: any) {
  const highlightWords = ["efficiency", "success", "эффективность", "ваш успех."];
  return (
    <section id="form-section" className="mx-[30px]">
      <div className="wrapper">
        <h1 className="text-center text-[84px] mt-[150px] mb-[75px] form-title">
          {lang.title}
        </h1>
        <div className="flex justify-center items-center">
          <HighlightedText
            text={lang.subtitle}
            highlightWords={highlightWords}
          />
        </div>
        <FormContainer lang={lang} />
      </div>
    </section>
  );
}
