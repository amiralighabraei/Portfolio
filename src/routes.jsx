import { createBrowserRouter } from "react-router";
import { Layout } from "./Features/Layout";
import {Home} from "./Pages/Home/Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
    ],
    basename: "/portfolio",
  },
]);