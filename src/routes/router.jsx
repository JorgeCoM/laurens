import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts";
import { AboutPage, BlogPage, ComingSoon, ContactPage } from "../pages";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout/>
    },
    {
      path: "/about",
      element: <ComingSoon/>
    },
    {
      path: "/contact",
      element: <ComingSoon/>
    },
    {
      path: "/login",
      element: <ComingSoon/>
    },
    {
      path: "/register",
      element: <ComingSoon/>
    },
  ]);