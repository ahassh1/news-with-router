import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../src/pages/CategoryNews";
import Home from "../src/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/",
    element: <h2>Home</h2>,
  },
  {
    path: "/",
    element: <h2>Home</h2>,
  },
  {
    path: "/",
    element: <h2>Home</h2>,
  },
]);
export default router;
