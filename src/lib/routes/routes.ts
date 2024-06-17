import { Home } from "pages/index";
import { FC } from "react";

export interface IRoute {
  path: string;
  element: FC;
}

export const routes: IRoute[] = [
  {
    path: "/",
    element: Home,
  },
];
