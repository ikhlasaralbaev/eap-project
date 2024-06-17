import {
  Category1,
  Category10,
  Category11,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
  Category7,
  Category8,
  Category9,
  News1,
  News2,
  News3,
  News4,
} from "assets/images";

export interface IHomeCategory {
  icon: string;
  title: string;
  productCount: number;
}

export interface INews {
  title: string;
  date: string;
  image: string;
}

export const homeCategories: IHomeCategory[] = [
  {
    icon: Category1,
    title: "Оригинальные каталоги",
    productCount: 730,
  },
  {
    icon: Category2,
    title: "Неоригинальные каталоги",
    productCount: 278,
  },

  {
    icon: Category3,
    title: "Каталог",
    productCount: 730,
  },
  {
    icon: Category4,
    title: "Кузовные запчасти",
    productCount: 730,
  },
  {
    icon: Category5,
    title: "Запчасти для ТО",
    productCount: 730,
  },
  {
    icon: Category6,
    title: "Автостёкла",
    productCount: 730,
  },
  {
    icon: Category7,
    title: "Автомасла",
    productCount: 730,
  },
  {
    icon: Category8,
    title: "Автохимия",
    productCount: 730,
  },
  {
    icon: Category9,
    title: "Диски",
    productCount: 730,
  },
  {
    icon: Category10,
    title: "Аккумуляторы",
    productCount: 730,
  },
  {
    icon: Category11,
    title: "Автолампы",
    productCount: 730,
  },
];

export const newsData: INews[] = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "24 Мая 2024",
    image: News1,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "24 Мая 2024",
    image: News2,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "24 Мая 2024",
    image: News4,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "24 Мая 2024",
    image: News3,
  },
];
