import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
