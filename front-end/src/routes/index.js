// 路由
import Layout from "../pages/layout";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
    }
  ]);

  export default router