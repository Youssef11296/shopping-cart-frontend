import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes: { path: string; Page: () => JSX.Element }[] = [
  {
    path: "/",
    Page: LoginPage,
  },
  {
    path: "/home",
    Page: HomePage,
  },
  {
    path: "/*",
    Page: NotFoundPage,
  },
];
