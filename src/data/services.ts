export interface IService {
  id: string;
  name: string;
  budget?: number;
  duration?: string;
  text?: string
}

export const services_data: IService[] = [
  {
    id: "1",
    name: "Branding",
    budget: 1000,
    duration: "1 месяц",
  },
  {
    id: "2",
    name: "Информационный сайт",
    budget: 1000,
    duration: "от 1 месяца до 3 месяцев.",
  },
  {
    id: "3",
    name: "Корпоративный сайт",
    budget: 3000,
    duration: "до 3 месяцев.",
  },
  {
    id: "4",
    name: "Интернет магазин",
    budget: 6000,
    duration: "до 6 месяцев.",
  },
  {
    id: "5",
    name: "Индивидуальное решение ",
    budget: 0,
    duration: "",
    text: "Готовы вовлечься в проект любой сложности и разработать уникальный IT продукт. "
  },
];
