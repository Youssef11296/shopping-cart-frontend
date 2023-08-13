/* eslint-disable @typescript-eslint/no-explicit-any */
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes: { path: string; Page: any }[] = [
  {
    path: "/login",
    Page: LoginPage,
  },
  {
    path: "/",
    Page: HomePage,
  },
  {
    path: "/*",
    Page: NotFoundPage,
  },
];
