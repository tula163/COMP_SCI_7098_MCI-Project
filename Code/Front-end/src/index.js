import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import {
  RouterProvider,
} from "react-router";
import router from './routes';
// import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  {/* <Provider store={store}> */}
    {/* <App /> */}
    <RouterProvider router={router} />
  {/* </Provider> */}
  </React.StrictMode>
);


