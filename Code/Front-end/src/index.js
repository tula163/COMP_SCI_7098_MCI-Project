import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecommendProvider } from "./context/RecommendContext";
import GlobalSnackbarQueue from "@/components/Snackerbar"


import {
  RouterProvider,
} from "react-router";
import router from './routes';
// import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <GlobalSnackbarQueue />
  <React.StrictMode>
     <RecommendProvider>
  {/* <Provider store={store}> */}
    {/* <App /> */}
    <RouterProvider router={router} />
    </RecommendProvider>
  {/* </Provider> */}
  </React.StrictMode>
  </>
);


