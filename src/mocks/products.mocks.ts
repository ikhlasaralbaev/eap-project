import { Product1, Product3, Product4 } from "assets/images";

export interface IProduct {
  image: string;
  articul: string;
  rate: number;
  voites: number;
  title: string;
  oldPrice: number;
  currentPrice: number;
}

export const products: IProduct[] = [
  {
    image: Product1,
    articul: "153789",
    rate: 4.0,
    voites: 51,
    title: "Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.",
    oldPrice: 752000,
    currentPrice: 515000,
  },
  {
    image: Product1,
    articul: "153789",
    rate: 4.0,
    voites: 51,
    title: "Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.",
    oldPrice: 752000,
    currentPrice: 515000,
  },
  {
    image: Product3,
    articul: "153789",
    rate: 4.0,
    voites: 51,
    title: "Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.",
    oldPrice: 752000,
    currentPrice: 515000,
  },
  {
    image: Product4,
    articul: "153789",
    rate: 4.0,
    voites: 51,
    title: "Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.",
    oldPrice: 752000,
    currentPrice: 515000,
  },
];
