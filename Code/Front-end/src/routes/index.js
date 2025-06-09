// route
import HomePage from "@/pages/Homepage";
import { createBrowserRouter } from "react-router";
import Question from "@/pages/Question";
import ResultPage from "../pages/Result";
import AgentForm from "@/pages/AgentForm";



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
      path: "/agent",
      Component: AgentForm,
    }
  ]);

  export default router