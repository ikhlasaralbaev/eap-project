import { BannerImage, Link1Bg, Link2Bg, Link3Bg } from "assets/images";

export interface IBannerItem {
  photo: string;
  title: string;
  description: string;
}

export interface IHomeLinkItem {
  image: string;
  title: string;
}

export const bannerItems: IBannerItem[] = [
  {
    photo: BannerImage,
    title: "Оригинальные автомасла <br /> cо скидкой <span>15%</span>",
    description: "Акция действует с 1 по 30 июня 2024",
  },
  {
    photo: BannerImage,
    title: "Оригинальные автомасла <br /> cо скидкой <span>15%</span>",
    description: "Акция действует с 1 по 30 июня 2024",
  },
  {
    photo: BannerImage,
    title: "Оригинальные автомасла <br /> cо скидкой <span>15%</span>",
    description: "Акция действует с 1 по 30 июня 2024",
  },
];

export const homeLinkItems: IHomeLinkItem[] = [
  {
    image: Link1Bg,
    title: "Моторные масла <br /> Genesis",
  },
  {
    image: Link2Bg,
    title: "Шины зимние <br /> дешевле",
  },
  {
    image: Link3Bg,
    title: "Запчасти для <br /> ТО",
  },
];
