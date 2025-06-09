// route
import HomePage from "@/pages/Homepage";
import { createBrowserRouter } from "react-router";
import Question from "@/pages/Question";
import ResultPage from "../pages/Result";
import ViewAgents from "@/pages/View_agents";
import ContactUs from "@/pages/Contact-us";



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
    {
      path: "/contact-us",
      Component: ContactUs,
    },

  ]);

  export default router