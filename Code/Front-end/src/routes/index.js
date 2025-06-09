// route
import HomePage from "@/pages/Homepage";
import { createBrowserRouter } from "react-router";
import Question from "@/pages/Question";
import ResultPage from "../pages/Result";
import ViewAgents from "@/pages/View_agents";



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
    },
    {
      path: "/view",
      Component: ViewAgents,
    },

  ]);

  export default router