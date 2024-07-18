import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "400", "300", "200"],
});

export default function ServicesList({ cards }: any) {
  return (
    <div className="grid grid-cols-3 gap-[20px] w-[1200px] relative z-20 services__grid">
      <div className="w-[386px] max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]">
        <h3 className={`${source_code_pro.className} text-[24px] mb-[24px]`}>
          {cards.first_card.name}
        </h3>
        <div>
          <p className="text-[#888888] text-[15px]">
            {cards.first_card.title1}
          </p>
          <p>{cards.first_card.answer1} 1000$</p>
        </div>
        <div className="mt-[15px]">
          <p className="text-[#888888] text-[15px]">
            {cards.first_card.title2}
          </p>
          <p>{cards.first_card.answer2}</p>
        </div>
      </div>
      <div className="w-[386px] max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]">
        <h3 className={`${source_code_pro.className} text-[24px] mb-[24px]`}>
          {cards.second_card.name}
        </h3>
        <div>
          <p className="text-[#888888] text-[15px]">
            {cards.second_card.title1}
          </p>
          <p>{cards.second_card.answer1} 1000$</p>
        </div>
        <div className="mt-[15px]">
          <p className="text-[#888888] text-[15px]">
            {cards.second_card.title2}
          </p>
          <p>{cards.second_card.answer2}</p>
        </div>
      </div>
      <div className="w-[386px] max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]">
        <h3 className={`${source_code_pro.className} text-[24px] mb-[24px]`}>
          {cards.third_card.name}
        </h3>
        <div>
          <p className="text-[#888888] text-[15px]">
            {cards.third_card.title1}
          </p>
          <p>{cards.third_card.answer1} 1000$</p>
        </div>
        <div className="mt-[15px]">
          <p className="text-[#888888] text-[15px]">
            {cards.third_card.title2}
          </p>
          <p>{cards.third_card.answer2}</p>
        </div>
      </div>
      <div className="empty"></div>
      <div className="w-[386px] max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]">
        <h3 className={`${source_code_pro.className} text-[24px] mb-[24px]`}>
          {cards.fourth_card.name}
        </h3>
        <div>
          <p className="text-[#888888] text-[15px]">
            {cards.fourth_card.title1}
          </p>
          <p>{cards.fourth_card.answer1} 1000$</p>
        </div>
        <div className="mt-[15px]">
          <p className="text-[#888888] text-[15px]">
            {cards.fourth_card.title2}
          </p>
          <p>{cards.fourth_card.answer2}</p>
        </div>
      </div>
      <div className="w-[386px] max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]">
        <h3 className={`${source_code_pro.className} text-[24px] mb-[24px]`}>
          {cards.fifth_card.name}
        </h3>
        <div>
          <p className="text-[#888888] text-[15px]">
            {cards.fifth_card.answer1}
          </p>
        </div>
      </div>
      {/* {services_data.map((service: IService) => {
        return (
          <div
            className="w-[386px] max-w-full max-h-full h-[386px] border-[0.5px] border-white rounded-[15px] p-[30px]"
            key={service.id}
          >
            <h3
              className={`${source_code_pro.className} text-[24px] mb-[24px]`}
            >
              {service.name}
            </h3>
            {service.budget != 0 && (
              <div>
                <p className="text-[#888888] text-[15px]">Бюджет: </p>
                {<p>от {service.budget} $</p>}
              </div>
            )}
            {service.duration != "" && (
              <div className="mt-[15px]">
                <p className="text-[#888888] text-[15px]">
                  Длительность проекта:{" "}
                </p>
                {<p>{service.duration}</p>}
              </div>
            )}
            {service.text != "" && (
                <p className="mt-[24px] text-[#888888] text-[15px]">{service.text}</p>
            )}
          </div>
        );
      })} */}
    </div>
  );
}
