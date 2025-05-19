// 路由
import HomePage from "@/pages/Homepage";
import { createBrowserRouter } from "react-router";
import Question from "@/pages/Question";
import ResultPage from "../pages/Result";


const router = createBrowserRouter([
    {
      path: "/",
      Component: HomePage,
    },
    {
      path: "/question",
      Component: Question,
    },
    {
      path: "/result",
      Component: ResultPage,
    }
  ]);

  export default router