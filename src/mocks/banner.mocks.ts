import { BannerImage } from "assets/images";

export interface IBannerItem {
  photo: string;
  title: string;
  description: string;
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
